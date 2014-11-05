using System;
using ServiceStack;
using ServiceStack.Messaging;
using ServiceStack.RabbitMq;
using ServiceStack.Text;

namespace RabbitMQTest.Client
{
    public class HelloRabbit
    {
        public string Name { get; set; }
    }

    public class HelloRabbitResponse
    {
        public string Result { get; set; }
    }

    class Program
    {
        public static IMessageService CreateMqServer(int retryCount = 1)
        {
            return new RabbitMqServer { RetryCount = retryCount };
        }

        static void Main(string[] args)
        {
            typeof(Program).Namespace.Print();

            using (var mqServer = CreateMqServer())
            using (var mqClient = mqServer.CreateMessageQueueClient())
            {
                var replyToMq = mqClient.GetTempQueueName();
                mqClient.Publish(new Message<HelloRabbit>(new HelloRabbit { Name = "World" })
                {
                    ReplyTo = replyToMq
                });

                IMessage<HelloRabbitResponse> responseMsg = mqClient.Get<HelloRabbitResponse>(replyToMq);
                mqClient.Ack(responseMsg);


                responseMsg.GetBody().PrintDump();

                Console.ReadKey();
            }
        }
    }
}
