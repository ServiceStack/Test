using ServiceStack;
using Test.ServiceModel;

namespace Test.ServiceInterface
{
    [RequiredRole("TheRole")]
    public class RequiresRoleService : Service
    {
        public object Any(RequiresRole request)
        {
            return new RequiresRoleResponse { Result = "Haz Access!" };
        }
    }
}