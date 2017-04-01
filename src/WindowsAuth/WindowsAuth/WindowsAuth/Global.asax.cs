using System;
using System.Web;
using System.Web.Routing;
using Funq;
using ServiceStack;
using ServiceStack.Auth;

namespace WindowsAuth
{
    public class Global : HttpApplication
    {
        void Application_Start(object sender, EventArgs e)
        {
            // Code that runs on application startup
            RouteConfig.RegisterRoutes(RouteTable.Routes);

            new AppHost().Init();
        }
    }

    [Route("/secure")]
    public class Secure : IReturn<SecureResponse> { }

    public class SecureResponse
    {
        public string Result { get; set; }
        public ResponseStatus ResponseStatus { get; set; }
    }

    [Authenticate]
    public class SecuredServices : Service
    {
        public object Any(Secure request) => new SecureResponse { Result = "Haz Access!" };
    }

    public class AppHost : AppHostBase
    {
        public AppHost() : base(typeof(AppHost).Namespace, typeof(SecuredServices).Assembly) { }

        public override void Configure(Container container)
        {
            Plugins.Add(new AuthFeature(() => new AuthUserSession(),
                new IAuthProvider[]
                {
                    new AspNetWindowsAuthProvider(this)
                    {
                        AllowAllWindowsAuthUsers = true,
                    },
                    new BasicAuthProvider(AppSettings),
                }));

            container.Register<IAuthRepository>(c => new InMemoryAuthRepository());
            container.Resolve<IAuthRepository>().InitSchema();
        }
    }
}