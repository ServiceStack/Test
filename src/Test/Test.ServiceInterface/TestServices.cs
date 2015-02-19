using ServiceStack;

namespace Test.ServiceInterface
{
    [Route("/void-response")]
    public class TestVoidResponse { }

    [Route("/null-response")]
    public class TestNullResponse { }

    public class TestServices : Service
    {
        public void Any(TestVoidResponse response)
        {
        }

        public object Any(TestNullResponse response)
        {
            return null;
        }
    }
}