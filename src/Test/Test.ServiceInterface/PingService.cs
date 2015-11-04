using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using ServiceStack;
using ServiceStack.OrmLite;

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
            "http://techstacks.io",
            "http://autoqueryviewer.servicestack.net/services",
            "http://github.servicestack.net/repos",
            "https://servicestack.net/pricing",
            "http://react-chat.servicestack.net",
            "http://chat.servicestack.net",
            //"http://badapi.net/internalservererror",
            "http://stackapis.servicestack.net",
            "http://httpbenchmarks.servicestack.net",
            "http://emailcontacts.servicestack.net",
            "http://imgur.servicestack.net",
            //"http://bootstrapapi.servicestack.net",
            "http://todos.servicestack.net",
            "http://razor.servicestack.net",
            "http://redisadminui.servicestack.net",
            "http://redisreact.servicestack.net",
            "http://awsrazor.servicestack.net",
            "http://awsapps.servicestack.net",
            //"http://restfiles.servicestack.net",
            //"http://redisstackoverflow.servicestack.net",
            //"http://northwind.servicestack.net",
            //"http://docs.servicestack.net",
            //"http://mvc.servicestack.net",
            //"http://webforms.servicestack.net",
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

                try {
                    Any(new ResetConnections());
                } catch {}
            }

            return ret;
        }

        [Route("/reset-connections")]
        public class ResetConnections {}

        public object Any(ResetConnections request)
        {
            return Db.Column<bool>(
                @"SELECT pg_terminate_backend(pid)
                    FROM pg_stat_activity
                    WHERE pid <> pg_backend_pid()
                      AND state = 'idle'
                      AND state_change < current_timestamp - INTERVAL '5' MINUTE");
        }
    }

}