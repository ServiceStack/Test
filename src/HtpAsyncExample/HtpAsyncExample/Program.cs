using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using ServiceStack;

namespace HtpAsyncExample
{
    class Program
    {
        const string Url = "http://localhost:10000/";
        const int NoOfClients = 5;

        static void Main(string[] args)
        {
            var tcs = new TaskCompletionSource<bool>();
            var activeConnections = new List<HttpListenerContext>();

            int counter = 0;
            var clientId = 0;
            var httpListener = new HttpListenerServer
            {
                OnRequest = ctx =>
                {
                    var bytes = System.Text.Encoding.UTF8.GetBytes(string.Format("id: {0}\ndata: cmd.onConnect {{\"id\":\"CLIENT_{1}\"}}\n\n", ++counter, ++clientId));
                    ctx.Response.OutputStream.Write(bytes, 0, bytes.Length);
                    activeConnections.Add(ctx);
                    return tcs.Task;
                }
            }.Start(Url);

            Timer timer = null;
            timer = new Timer(_ =>
                {
                    var bytes = System.Text.Encoding.UTF8.GetBytes(string.Format("id: {0}\ndata: cmd.onMessage MESSAGE {0}\n\n", ++counter));
                    foreach (var ctx in activeConnections)
                    {
                        ctx.Response.OutputStream.Write(bytes, 0, bytes.Length);
                    }
                    timer.Change((int) TimeSpan.FromSeconds(1).TotalMilliseconds, Timeout.Infinite);
                },
                null, 
                (int)TimeSpan.FromSeconds(1).TotalMilliseconds, Timeout.Infinite);

            //CreateBasicHttpClients(NoOfClients);
            CreateServerEventsClient(NoOfClients);

            Console.ReadLine();
        }

        private static void CreateServerEventsClient(int noOfClients)
        {
            var clients = new List<ServerEventsClient>();
            for (int i = 0; i < noOfClients; i++)
            {
                var clientId = i;
                var client = new ServerEventsClient(Url, "HOME") {
                    OnMessage = e => Console.WriteLine("ServerEventsClient #{0} {1}", clientId, e.Data)
                }.Start();

                clients.Add(client);
            }
        }

        private static void CreateBasicHttpClients(int noOfClients)
        {
            var clients = new List<HttpWebRequest>();
            for (int i = 0; i < noOfClients; i++)
            {
                var httpReq = (HttpWebRequest) WebRequest.Create(Url);
                clients.Add(httpReq);

                var httpRes = (HttpWebResponse) httpReq.GetResponse();
                var stream = httpRes.GetResponseStream();

                ProcessBasicResponse(stream, i);
            }
        }

        private static void ProcessBasicResponse(Stream stream, int clientId)
        {
            var buffer = new byte[1024];

            var task = stream.ReadAsync(buffer, 0, buffer.Length);
            task.ContinueWith(t =>
            {
                if (t.IsFaulted)
                {
                    Console.WriteLine("ERROR CLIENT: #{0} {1}", clientId, t.Exception);
                    return;
                }

                var length = t.Result;

                if (length > 0)
                {
                    var message = System.Text.Encoding.UTF8.GetString(buffer, 0, length);
                    Console.WriteLine("HttpWebRequest: #{0} {1}", clientId, message);

                    ProcessBasicResponse(stream, clientId);
                }
            });
        }
    }
}
