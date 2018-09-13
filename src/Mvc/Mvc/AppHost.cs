using System.Collections.Generic;
using System.DirectoryServices.AccountManagement;
using System.IO;
using System.Web.Mvc;
using Funq;
using ServiceStack;
using ServiceStack.Auth;
using ServiceStack.Authentication.OAuth2;
using ServiceStack.Authentication.OpenId;
using ServiceStack.Configuration;
using ServiceStack.Data;
using ServiceStack.Mvc;
using Mvc.ServiceInterface;
using ServiceStack.OrmLite;
using ServiceStack.Redis;


namespace Mvc
{
    public class AppHost : AppHostBase
    {
        /// <summary>
        /// Default constructor.
        /// Base constructor requires a name and assembly to locate web service classes. 
        /// </summary>
        public AppHost()
            : base("MVC Test", typeof(MyServices).Assembly)
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
            SetConfig(new HostConfig
            {
                DebugMode = true,
                HandlerFactoryPath = "api",
                AddRedirectParamsToQueryString = true,
            });

            //Set MVC to use the same Funq IOC as ServiceStack
            ControllerBuilder.Current.SetControllerFactory(new FunqControllerFactory(container));

            //Config examples
            Plugins.Add(new PostmanFeature());
            Plugins.Add(new CorsFeature());

            Plugins.Add(new AuthFeature(() => new CustomUserSession(),
                new IAuthProvider[]
                {
                    new AspNetWindowsAuthProvider(this) {  // Integrated Windows Auth
                        LoadUserAuthFilter = LoadUserAuthInfo,
                        AllowAllWindowsAuthUsers = true
                    },
                    new CredentialsAuthProvider(),        //HTML Form post of UserName/Password credentials
                    new BasicAuthProvider(),                    //Sign-in with HTTP Basic Auth
                    new DigestAuthProvider(AppSettings),        //Sign-in with HTTP Digest Auth
                    new TwitterAuthProvider(AppSettings),       //Sign-in with Twitter
                    new FacebookAuthProvider(AppSettings),      //Sign-in with Facebook
                    new GoogleAuthProvider(AppSettings),        //Sign-in with Google OAuth2 Provider
                    new YahooOpenIdOAuthProvider(AppSettings),  //Sign-in with Yahoo OpenId
                    new OpenIdOAuthProvider(AppSettings),       //Sign-in with Custom OpenId
                    new GoogleOAuth2Provider(AppSettings),      //Sign-in with Google OAuth2 Provider (with DotNetOpenAuth)
                    new LinkedInOAuth2Provider(AppSettings),    //Sign-in with LinkedIn OAuth2 Provider
                    new GithubAuthProvider(AppSettings),        //Sign-in with GitHub OAuth Provider
                    new YandexAuthProvider(AppSettings),        //Sign-in with Yandex OAuth Provider        
                    new VkAuthProvider(AppSettings),            //Sign-in with VK.com OAuth Provider 
                })
                {
                    HtmlRedirect = "/",
                    IncludeRegistrationService = true,
                });

            //container.Register<IRedisClientsManager>(c =>
            //    new PooledRedisClientManager("localhost:6379"));
            //container.Register(c => c.Resolve<IRedisClientsManager>().GetCacheClient());

            //container.Register<IDbConnectionFactory>(c => new OrmLiteConnectionFactory(
            //    AppSettings.GetString("AppDb"), PostgreSqlDialect.Provider));

            var path = "~/App_Data/db.sqlite".MapHostAbsolutePath();
            container.Register<IDbConnectionFactory>(c => 
                new OrmLiteConnectionFactory(path, SqliteDialect.Provider));

            container.Register<IAuthRepository>(c =>
                new OrmLiteAuthRepository(c.Resolve<IDbConnectionFactory>())
                {
                    UseDistinctRoleTables = AppSettings.Get("UseDistinctRoleTables", true),
                });

            var authRepo = (OrmLiteAuthRepository)container.Resolve<IAuthRepository>();
            MyServices.ResetUsers(authRepo);
        }

        public void LoadUserAuthInfo(AuthUserSession userSession, IAuthTokens tokens, Dictionary<string, string> authInfo)
        {
            if (userSession == null)
                return;

            using (var pc = new PrincipalContext(ContextType.Domain))
            {
                var user = UserPrincipal.FindByIdentity(pc, userSession.UserAuthName);

                tokens.DisplayName = user.DisplayName;
                tokens.Email = user.EmailAddress;
                tokens.FirstName = user.GivenName;
                tokens.LastName = user.Surname;
                tokens.FullName = string.IsNullOrWhiteSpace(user.MiddleName)
                    ? "{0} {1}".Fmt(user.GivenName, user.Surname)
                    : "{0} {1} {2}".Fmt(user.GivenName, user.MiddleName, user.Surname);
                tokens.PhoneNumber = user.VoiceTelephoneNumber;
            }
        }
    }

}