using System;
using Funq;
using ServiceStack;
using ServiceStack.Data;
using ServiceStack.OrmLite;

namespace AutoQueryTest
{
    public class AppHost : AppHostBase
    {
        public AppHost() : base("AutoQuery Test", typeof(RockstarService).Assembly) {}

        public override void Configure(Container container)
        {
            SetConfig(new HostConfig {
                HandlerFactoryPath = "api",
                DebugMode = true,
            });

            container.Register<IDbConnectionFactory>(
                new OrmLiteConnectionFactory(":memory:", SqliteDialect.Provider));

            using (var db = container.Resolve<IDbConnectionFactory>().Open())
            {
                db.DropAndCreateTable<Rockstar>();
                db.InsertAll(SeedRockstars);
            }

            Plugins.Add(new AutoQueryFeature
            {
                AutoQueryServiceBaseType = typeof(MyAutoQueryServiceBase),
                MaxLimit = 20000
            });
        }

        public static Rockstar[] SeedRockstars = new[] {
            new Rockstar { Id = 1, FirstName = "Jimi", LastName = "Hendrix", Age = 27 },
            new Rockstar { Id = 2, FirstName = "Jim", LastName = "Morrison", Age = 27 },
            new Rockstar { Id = 3, FirstName = "Kurt", LastName = "Cobain", Age = 27 },
            new Rockstar { Id = 4, FirstName = "Elvis", LastName = "Presley", Age = 42 },
            new Rockstar { Id = 5, FirstName = "David", LastName = "Grohl", Age = 44 },
            new Rockstar { Id = 6, FirstName = "Eddie", LastName = "Vedder", Age = 48 },
            new Rockstar { Id = 7, FirstName = "Michael", LastName = "Jackson", Age = 50 },
        };
    }

    public abstract class MyAutoQueryServiceBase : AutoQueryServiceBase
    {
        public override object Exec<From>(IQuery<From> dto)
        {
            var q = AutoQuery.CreateQuery(dto, Request.GetRequestParams());
            return AutoQuery.Execute(dto, q);
        }

        public override object Exec<From, Into>(IQuery<From, Into> dto)
        {
            var q = AutoQuery.CreateQuery(dto, Request.GetRequestParams());
            return AutoQuery.Execute(dto, q);
        }
    }

    [Route("/query/rockstars")]
    public class QueryRockstars : QueryBase<Rockstar> { }

    public class Rockstar
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int? Age { get; set; }
    }

    [Route("/rockstars/{Id}")]
    public class GetRockstar
    {
        public int Id { get; set; }
    }

    public class RockstarService : Service
    {
        public object Any(GetRockstar request)
        {
            return Db.SingleById<Rockstar>(request.Id);
        }
    }

    public class Global : System.Web.HttpApplication
    {
        protected void Application_Start(object sender, EventArgs e)
        {
            new AppHost().Init();
        }
    }
}