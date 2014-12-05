using ServiceStack;

namespace Test.ServiceModel
{
    public class CustomHttpError
    {
        public int StatusCode { get; set; }
        public string StatusDescription { get; set; }
    }

    public class CustomHttpErrorResponse
    {
        public string Custom { get; set; }
        public ResponseStatus ResponseStatus { get; set; }
    }
}