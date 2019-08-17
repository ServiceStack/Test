﻿using System;
using System.Collections.Generic;
using System.IO;
using Funq;
using ServiceStack;
using ServiceStack.Api.OpenApi;
using ServiceStack.Auth;
using ServiceStack.Caching;
using ServiceStack.Configuration;
using ServiceStack.Data;
using ServiceStack.Host;
using ServiceStack.Logging;
using ServiceStack.NativeTypes.Java;
using ServiceStack.OrmLite;
using ServiceStack.Razor;
using ServiceStack.Redis;
using ServiceStack.Text;
using ServiceStack.Validation;
using Test.ServiceInterface;
using Test.ServiceModel;

namespace Test
{
    public partial class AppHost : AppHostBase
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

            LogManager.LogFactory = new StringBuilderLogFactory(debugEnabled:true);
        }

        static partial void PreConfigure(Container container);

        /// <summary>
        /// Application specific configuration
        /// This method should initialize any IoC resources utilized by your web service classes.
        /// </summary>
        /// <param name="container"></param>
        public override void Configure(Container container)
        {
            PreConfigure(container);

            this.GlobalHtmlErrorHttpHandler = new RazorHandler("/error");

            SetConfig(new HostConfig
            {
                DebugMode = true,
                Return204NoContentForEmptyResponse = true,
                UseCamelCase = true,
            });

            Plugins.Add(new SoapFormat());

            container.Register<IRedisClientsManager>(c =>
                new RedisManagerPool("localhost:6379"));
            container.Register(c => c.Resolve<IRedisClientsManager>().GetCacheClient());

            //container.Register<IDbConnectionFactory>(c => new OrmLiteConnectionFactory(
            //    AppSettings.GetString("AppDb"), PostgreSqlDialect.Provider));

            container.Register<IDbConnectionFactory>(c => new OrmLiteConnectionFactory(
                ":memory:", SqliteDialect.Provider));

            using (var db = container.Resolve<IDbConnectionFactory>().Open())
            {
                db.DropAndCreateTable<Logger>();
            }

            container.Register<IAuthRepository>(c =>
                new OrmLiteAuthRepository(c.Resolve<IDbConnectionFactory>())
                {
                    UseDistinctRoleTables = AppSettings.Get("UseDistinctRoleTables", true),
                });

            var authRepo = (OrmLiteAuthRepository)container.Resolve<IAuthRepository>();
            authRepo.DropAndReCreateTables();

            CreateUser(authRepo, 1, "test", "test", new List<string> { "TheRole" }, new List<string> { "ThePermission" });
            CreateUser(authRepo, 2, "test2", "test2");

            Plugins.Add(new PostmanFeature());

            Plugins.Add(new CorsFeature(
                allowOriginWhitelist: new[] { "http://localhost", "http://localhost:8080", "http://localhost:56500", "http://test.servicestack.net", "http://null.jsbin.com",
                    "http://plnkr.co", "http://run.plnkr.co" },
                allowCredentials: true,
                allowedHeaders: "Content-Type, Allow, Authorization, X-Args"));

            Plugins.Add(new RequestLogsFeature
            {
                //RequestLogger = new RedisRequestLogger(container.Resolve<IRedisClientsManager>()),
            });
            Plugins.Add(new RazorFormat());

            Plugins.Add(new AuthFeature(() => new CustomUserSession(),
                new IAuthProvider[]
                {
                    new JwtAuthProvider(AppSettings)
                    {
                        AllowInQueryString = true
                    },
                    new BasicAuthProvider(AppSettings),
                    new CredentialsAuthProvider(AppSettings),
                }));

            Plugins.Add(new OpenApiFeature());
            Plugins.Add(new ValidationFeature());
            Plugins.Add(new AutoQueryFeature
            {
                MaxLimit = 100,
            });

            container.RegisterValidators(typeof(ThrowValidationValidator).Assembly);

            JavaGenerator.AddGsonImport = true;
            var nativeTypes = this.GetPlugin<NativeTypesFeature>();
            nativeTypes.MetadataTypesConfig.ExportTypes.Add(typeof(DayOfWeek));

            Plugins.Add(new MiniProfilerFeature());

            Plugins.Add(new ServerEventsFeature
            {
                LimitToAuthenticatedUsers = true,
            });
        }

        private void CreateUser(OrmLiteAuthRepository authRepo,
            int id, string username, string password, List<string> roles = null, List<string> permissions = null)
        {
            new SaltedHash().GetHashAndSaltString(password, out var hash, out var salt);

            authRepo.CreateUserAuth(new UserAuth
            {
                Id = id,
                DisplayName = username + " DisplayName",
                Email = username + "@gmail.com",
                UserName = username,
                FirstName = "First " + username,
                LastName = "Last " + username,
                PasswordHash = hash,
                Salt = salt,
                Roles = roles,
                Permissions = permissions
            }, password);

            authRepo.AssignRoles(id.ToString(), roles, permissions);
        }
    }

}