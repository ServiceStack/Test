using ServiceStack;
using Test.ServiceModel;

namespace Test.ServiceInterface
{
    public class ReturnDataService : Service
    {
        public object Any(ReturnString request) => request.Data;
        public object Any(ReturnBytes request) => request.Data;
        public object Any(ReturnStream request) => request.Data;
        public object Any(ReturnHttpWebResponse request) => request.Data;
    }
}