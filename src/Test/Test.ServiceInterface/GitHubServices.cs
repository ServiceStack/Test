using ServiceStack;

namespace Test.ServiceInterface
{
    //Leave Uncommented as FallbackRoute breaks servicestack-client tests
    //[FallbackRoute("/{Path*}")]
    public class RootPathRoutes
    {
        public string Path { get; set; }
    }

    public class GetAccount : IReturn<Account>
    {
        public string Account { get; set; }
    }

    public class GetProject : IReturn<Project>
    {
        public string Account { get; set; }
        public string Project { get; set; }
    }

    public class Account
    {
        public string Name { get; set; }
    }

    public class Project
    {
        public string Account { get; set; }
        public string Name { get; set; }
    }

    public class GitHubServices : Service
    {
        public object Any(RootPathRoutes request)
        {
            if (request.Path != null)
            {
                var parts = request.Path.Split('/');
                if (parts.Length == 1)
                {
                    return Any(new GetAccount { Account = parts[0] });
                }
                if (parts.Length == 2)
                {
                    return Any(new GetProject
                    {
                        Account = parts[0],
                        Project = parts[1],
                    });
                }
            }

            return HttpResult.Redirect("/metadata");
        }

        public object Any(GetAccount request)
        {
            return new Account { Name = request.Account };
        }

        public object Any(GetProject request)
        {
            return new Project
            {
                Account = request.Account,
                Name = request.Project,
            };
        }
    }
}