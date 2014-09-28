using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using ServiceStack;

namespace Test.ServiceInterface
{
    [Route("/ping")]
    public class Ping { }

    public class PingResponse
    {
        public Dictionary<string, ResponseStatus> Responses { get; set; }
        public ResponseStatus ResponseStatus { get; set; }
    }

    public class PingService : Service
    {
        private static string[] urls = new[] 
        {
            "https://servicestack.net/pricing",
            "http://chat.servicestack.net",
            //"http://badapi.net/internalservererror",
            "http://stackapis.servicestack.net",
            "http://httpbenchmarks.servicestack.net",
            "http://emailcontacts.servicestack.net",
            "http://imgur.servicestack.net",
            "http://bootstrapapi.servicestack.net",
            "http://todos.servicestack.net",
            "http://razor.servicestack.net",
            "http://redisadminui.servicestack.net",
            "http://restfiles.servicestack.net",
            "http://redisstackoverflow.servicestack.net",
            "http://northwind.servicestack.net",
            "http://docs.servicestack.net",
            "http://mvc.servicestack.net",
            "http://webforms.servicestack.net",
        };

        public object Any(Ping request)
        {
            var ret = new PingResponse
            {
                Responses = new Dictionary<string, ResponseStatus>()
            };

            foreach (var url in urls)
            {
                var name = url.Replace("https", "http").Replace("http://", "").SplitOnFirst('.').First();
                try
                {
                    var sw = Stopwatch.StartNew();
                    var response = url.GetStringFromUrl(requestFilter: req => req.UserAgent = "TestServices");
                    ret.Responses[name] = new ResponseStatus
                    {
                        Message = "OK {0}ms".Fmt(sw.ElapsedMilliseconds)
                    };
                }
                catch (Exception ex)
                {
                    ret.Responses[name] = ex.ToResponseStatus();
                    var body = ex.GetResponseBody();
                    ret.Responses[name].Message = body;
                }
            }

            ret.ResponseStatus = ret.Responses
                .Where(x => x.Value.ErrorCode != null)
                .Select(x => x.Value)
                .FirstOrDefault();

            if (ret.ResponseStatus != null)
            {
                Response.StatusCode = 500;
            }

            return ret;
        }
    }
}