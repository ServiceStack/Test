using ServiceStack;

namespace Test.ServiceModel
{
    [Route("/throwhttperror/{Status}")]
    public class ThrowHttpError
    {
        public int Status { get; set; }
        public string Message { get; set; }
    }
}