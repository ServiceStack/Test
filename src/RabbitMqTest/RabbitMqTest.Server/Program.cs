using System;
using ServiceStack;
using ServiceStack.Messaging;
using ServiceStack.RabbitMq;
using ServiceStack.Text;

namespace RabbitMqTest.Server
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
            using (var mqServer = CreateMqServer())
            {
                mqServer.RegisterHandler<HelloRabbit>(m =>
                    new HelloRabbitResponse { Result = "Hello, {0}!".Fmt(m.GetBody().Name) });

                mqServer.Start();

                typeof(Program).Namespace.Print();
                Console.ReadKey();
            }
        }
    }
}
