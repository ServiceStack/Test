using System.Collections.Generic;
using System.IO;
using Funq;
using ServiceStack.Auth;
using ServiceStack.Configuration;
using ServiceStack.Data;
using ServiceStack.OrmLite;
using ServiceStack.Redis;
using WebForms.ServiceInterface;
using ServiceStack;

namespace WebForms
{
    public class AppHost : AppHostBase
    {
        /// <summary>
        /// Default constructor.
        /// Base constructor requires a name and assembly to locate web service classes. 
        /// </summary>
        public AppHost()
            : base("Test", typeof(MyServices).Assembly)
        {
            var customSettings = new FileInfo(@"~/appsettings.txt".MapHostAbsolutePath());
            AppSettings = customSettings.Exists
                ? (IAppSettings)new TextFileSettings(customSettings.FullName)
                : new AppSettings();
        }

        /// <summary>
        /// Application specific configuration
        /// This method should initialize any IoC resources utilized by your web service classes.
        /// </summary>
        /// <param name="container"></param>
        public override void Configure(Container container)
        {
            SetConfig(new HostConfig { DebugMode = true });

            //Config examples
            Plugins.Add(new PostmanFeature());
            Plugins.Add(new CorsFeature());

            Plugins.Add(new AuthFeature(() => new CustomUserSession(),
                new IAuthProvider[]
                {
                    new BasicAuthProvider(AppSettings),     
                    new CredentialsAuthProvider(AppSettings),
                }) {
                    IncludeRegistrationService = true,
                    HtmlRedirect = "/",
                });

            container.Register<IRedisClientsManager>(c =>
                new PooledRedisClientManager("localhost:6379"));
            container.Register(c => c.Resolve<IRedisClientsManager>().GetCacheClient());

            container.Register<IDbConnectionFactory>(c => new OrmLiteConnectionFactory(
                AppSettings.GetString("AppDb"), PostgreSqlDialect.Provider));

            container.Register<IAuthRepository>(c =>
                new OrmLiteAuthRepository(c.Resolve<IDbConnectionFactory>())
                {
                    UseDistinctRoleTables = AppSettings.Get("UseDistinctRoleTables", true),
                });

            var authRepo = (OrmLiteAuthRepository)container.Resolve<IAuthRepository>();
            MyServices.ResetUsers(authRepo);
        }
    }
}