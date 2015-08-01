using System.Threading;
using ServiceStack;

namespace Test.ServiceInterface
{
    [Route("/void-response")]
    public class TestVoidResponse { }

    [Route("/null-response")]
    public class TestNullResponse { }

    [Route("/wait/{ForMs}")]
    public class Wait : IReturn<Wait>
    {
        public int ForMs { get; set; }
    }

    public class TestServices : Service
    {
        public void Any(TestVoidResponse response)
        {
        }

        public object Any(TestNullResponse response)
        {
            return null;
        }

        public object Any(Wait request)
        {
            Thread.Sleep(request.ForMs);

            return request;
        }
    }
}