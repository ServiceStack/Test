using ServiceStack;
using Test.ServiceModel;

namespace Test.ServiceInterface
{
    public class CustomHttpErrorService : Service
    {
        public object Any(CustomHttpError request)
        {
            throw new HttpError(request.StatusCode, request.StatusDescription);
        }
    }
}