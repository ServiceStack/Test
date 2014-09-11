using ServiceStack;

namespace Test.ServiceModel
{
    [Route("/requires-role")]
    public class RequiresRole {}

    public class RequiresRoleResponse
    {
        public string Result { get; set; }

        public ResponseStatus ResponseStatus { get; set; }
    }
}