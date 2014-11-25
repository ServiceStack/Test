using System;
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
    }
}