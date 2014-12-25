using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ServiceStack;
using ServiceStack.Text;

namespace MultiChannelServer
{
    [Route("/channels/{Channel}/chat")]
    public class PostChatToChannel : IReturn<ChatMessage>
    {
        public string From { get; set; }
        public string ToUserId { get; set; }
        public string Channel { get; set; }
        public string Message { get; set; }
        public string Selector { get; set; }
    }

    public class ChatMessage
    {
        public long Id { get; set; }
        public string FromUserId { get; set; }
        public string FromName { get; set; }
        public string DisplayName { get; set; }
        public string Message { get; set; }
        public string UserAuthId { get; set; }
        public bool Private { get; set; }
    }

    [Route("/channels/{Channel}/raw")]
    public class PostRawToChannel : IReturnVoid
    {
        public string From { get; set; }
        public string ToUserId { get; set; }
        public string Channel { get; set; }
        public string Message { get; set; }
        public string Selector { get; set; }
    }

    [Route("/channels/{Channel}/object")]
    public class PostObjectToChannel
    {
        public string ToUserId { get; set; }
        public string Channel { get; set; }
        public string Selector { get; set; }

        public CustomType CustomType { get; set; }
        public SetterType SetterType { get; set; }
    }

    public class CustomType
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class SetterType
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public static class ServerClientExtensions
    {
        public static void PostChat(this ServerEventsClient client,
            string message, string channel = null)
        {
            client.ServiceClient.PostChat(client.SubscriptionId, message, channel);
        }

        public static void PostChat(this IServiceClient client, string subsciptionId,
            string message, string channel = null)
        {
            client.Post(new PostChatToChannel
            {
                From = subsciptionId,
                Message = message,
                Channel = channel ?? "*",
                Selector = "cmd.chat",
            });
        }
    }

    class Program
    {
        private static class Config
        {
            public static string AbsoluteBaseUri = "http://macbook:10000/";
        }

        private static ServerEventsClient CreateServerEventsClient(params string[] channels)
        {
            return new ServerEventsClient(Config.AbsoluteBaseUri, channels);
        }

        static void Main(string[] args)
        {
            Run();
            Console.ReadLine();
        }

        static async Task Run()
        {
            using (var clientA = CreateServerEventsClient("A"))
            using (var clientAB = CreateServerEventsClient("A", "B"))
            using (var clientABC = CreateServerEventsClient("A", "B", "C"))
            using (var clientABCD = CreateServerEventsClient("A", "B", "C", "D"))
            {
                var msgsA = new List<ServerEventMessage>();
                var msgsAB = new List<ServerEventMessage>();
                var msgsABC = new List<ServerEventMessage>();
                var msgsABCD = new List<ServerEventMessage>();

                clientA.OnMessage = msgsA.Add;
                clientAB.OnMessage = msgsAB.Add;
                clientABC.OnMessage = msgsABC.Add;
                clientABCD.OnMessage = msgsABCD.Add;

                await Task.WhenAll(
                    clientA.Connect(),
                    clientAB.Connect(),
                    clientABC.Connect(),
                    clientABCD.Connect()
                );

                "Publishing Msgs...".Print();
                clientA.PostChat("#1 hello to A", channel: "A");
                clientA.PostChat("#2 hello to B", channel: "B");
                clientA.PostChat("#3 hello to C", channel: "C");
                clientA.PostChat("#4 hello to D", channel: "D");

                await Task.Delay(1000);

                msgsA.PrintDump();
                msgsAB.PrintDump();
                msgsABC.PrintDump();
                msgsABCD.PrintDump();

                "msgsA: {0}".Print(msgsA.Count);
                "msgsAB: {0}".Print(msgsAB.Count);
                "msgsABC: {0}".Print(msgsABC.Count);
                "msgsABCD: {0}".Print(msgsABCD.Count);
            }
        }
    }
}
