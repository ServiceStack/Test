using ServiceStack;

namespace Test.ServiceModel
{
    [Route("/throwhttperror/{Status}")]
    public class ThrowHttpError
    {
        public int? Status { get; set; }
        public string Message { get; set; }
    }

    [Route("/throw404")]
    [Route("/throw404/{Message}")]
    public class Throw404
    {
        public string Message { get; set; }
    }

    [Route("/throw/{Type}")]
    public class ThrowType : IReturn<ThrowTypeResponse>
    {
        public string Type { get; set; }
        public string Message { get; set; }
    }

    public class ThrowTypeResponse
    {
        public ResponseStatus ResponseStatus { get; set; }
    }

    [Route("/throwvalidation")]
    public class ThrowValidation : IReturn<ThrowValidationResponse>
    {
        public int Age { get; set; }
        public string Required { get; set; }
        public string Email { get; set; }
    }

    public class ThrowValidationResponse
    {
        public int Age { get; set; }
        public string Required { get; set; }
        public string Email { get; set; }

        public ResponseStatus ResponseStatus { get; set; }
    }
}