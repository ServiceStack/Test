using System;
using System.Threading;
using Funq;
using ServiceStack;
using ServiceStack.Auth;
using ServiceStack.Redis;
using ServiceStack.Text;

namespace MultiChannelServer
{
    public class ServerEventsService : Service
    {
        private static long msgId;

        public IServerEvents ServerEvents { get; set; }

        public object Any(PostChatToChannel request)
        {
            var sub = ServerEvents.GetSubscriptionInfo(request.From);
            if (sub == null)
                throw HttpError.NotFound("Subscription {0} does not exist".Fmt(request.From));

            var msg = new ChatMessage
            {
                Id = Interlocked.Increment(ref msgId),
                FromUserId = sub.UserId,
                FromName = sub.DisplayName,
                Message = request.Message,
            };

            if (request.ToUserId != null)
            {
                msg.Private = true;
                ServerEvents.NotifyUserId(request.ToUserId, request.Selector, msg);
                var toSubs = ServerEvents.GetSubscriptionInfosByUserId(request.ToUserId);
                foreach (var toSub in toSubs)
                {
                    msg.Message = "@{0}: {1}".Fmt(toSub.DisplayName, msg.Message);
                    ServerEvents.NotifySubscription(request.From, request.Selector, msg);
                }
            }
            else
            {
                ServerEvents.NotifyChannel(request.Channel, request.Selector, msg);
            }

            return msg;
        }

        public void Any(PostRawToChannel request)
        {
            var sub = ServerEvents.GetSubscriptionInfo(request.From);
            if (sub == null)
                throw HttpError.NotFound("Subscription {0} does not exist".Fmt(request.From));

            if (request.ToUserId != null)
            {
                ServerEvents.NotifyUserId(request.ToUserId, request.Selector, request.Message);
            }
            else
            {
                ServerEvents.NotifyChannel(request.Channel, request.Selector, request.Message);
            }
        }

        public void Any(PostObjectToChannel request)
        {
            if (request.ToUserId != null)
            {
                if (request.CustomType != null)
                    ServerEvents.NotifyUserId(request.ToUserId, request.Selector ?? Selector.Id<CustomType>(), request.CustomType);
                if (request.SetterType != null)
                    ServerEvents.NotifyUserId(request.ToUserId, request.Selector ?? Selector.Id<SetterType>(), request.SetterType);
            }
            else
            {
                if (request.CustomType != null)
                    ServerEvents.NotifyChannel(request.Channel, request.Selector ?? Selector.Id<CustomType>(), request.CustomType);
                if (request.SetterType != null)
                    ServerEvents.NotifyChannel(request.Channel, request.Selector ?? Selector.Id<SetterType>(), request.SetterType);
            }
        }
    }
    public class ServerEventsAppHost : AppSelfHostBase
    {
        public ServerEventsAppHost()
            : base(typeof(ServerEventsAppHost).Name, typeof(ServerEventsAppHost).Assembly) { }

        public bool UseRedisServerEvents { get; set; }
        public bool LimitToAuthenticatedUsers { get; set; }

        public override void Configure(Container container)
        {
            Plugins.Add(new ServerEventsFeature
            {
                HeartbeatInterval = TimeSpan.FromMilliseconds(30000),
                LimitToAuthenticatedUsers = LimitToAuthenticatedUsers,
            });

            if (UseRedisServerEvents)
            {
                container.Register<IRedisClientsManager>(new PooledRedisClientManager());

                container.Register<IServerEvents>(c =>
                    new RedisServerEvents(c.Resolve<IRedisClientsManager>()));

                container.Resolve<IServerEvents>().Start();
            }

            if (LimitToAuthenticatedUsers)
            {
                Plugins.Add(new AuthFeature(() => new AuthUserSession(),
                    new IAuthProvider[] {
                        new CustomCredentialsAuthProvider(), 
                    }));
            }
        }
    }

    public class CustomCredentialsAuthProvider : CredentialsAuthProvider
    {
        public override bool TryAuthenticate(IServiceBase authService, string userName, string password)
        {
            return userName == "user" && password == "pass";
        }
    }
    
    
    class Program
    {
        static void Main(string[] args)
        {
            var appHost = new ServerEventsAppHost()
                .Init()
                .Start("http://*:10000/");

            "Started MultiChannelServer on http://macbook:10000/ ...".Print();
            "Press Enter to Quit".Print();

            Console.ReadLine();
        }
    }
}
