using System;
using System.IO;
using System.Security.Cryptography;
using ServiceStack;
using Test.ServiceModel;

namespace Test.ServiceInterface
{
    public class MyServices : Service
    {
        static readonly RandomNumberGenerator Randgen = new RNGCryptoServiceProvider();
        public static string CreateRandomBase64Id()
        {
            var data = new byte[15];
            Randgen.GetBytes(data);
            return Convert.ToBase64String(data);
        }

        public object Any(GetRandomIds request)
        {
            var take = request.Take.GetValueOrDefault(10);            
            return new GetRandomIdsResponse
            {
                Results = take.Times(i => CreateRandomBase64Id())
            };
        }

        public object Any(TextFileTest request)
        {
            return new HttpResult(new FileInfo("~/textfile.txt".MapHostAbsolutePath()), 
                asAttachment:request.AsAttachment);
        }

        [AddHeader(ContentType = MimeTypes.PlainText)]
        public object Any(ReturnText request) => request.Text;

        [AddHeader(ContentType = MimeTypes.Html)]
        public object Any(ReturnHtml request) => request.Text;
    }

    [Route("/textfile-test")]
    public class TextFileTest
    {
        public bool AsAttachment { get; set; }
    }

    [Route("/return/text")]
    public class ReturnText
    {
        public string Text { get; set; }
    }

    [Route("/return/html")]
    public class ReturnHtml
    {
        public string Text { get; set; }
    }
}