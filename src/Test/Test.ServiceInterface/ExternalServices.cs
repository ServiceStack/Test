using External.ServiceModel;
using ServiceStack;

namespace Test.ServiceInterface
{
    public class ExternalServices : Service
    {
        public object Any(ExternalOperation request)
        {
            return new ExternalOperationResponse { Result = request.Name };
        }

        public object Any(ExternalOperation2 request)
        {
            return new ExternalOperation2Response
            {
                ExternalType = new ExternalType
                {
                    ExternalEnum2 = ExternalEnum2.Due
                }
            };
        }

        public ExternalReturnTypeResponse Any(ExternalOperation3 request)
        {
            return new ExternalReturnTypeResponse
            {
                ExternalEnum3 = ExternalEnum3.Deux
            };
        }

        public object Any(ExternalOperation4 request)
        {
            return new ExternalUnmatchedResponse
            {
                ExternalEnum4 = ExternalEnum4.Dos
            };
        }
    }
}