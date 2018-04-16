using System.Collections.Generic;
using ServiceStack;
using Test.ServiceModel;

namespace Test.ServiceInterface
{
    /// <summary>
    /// Dart 1.x (i.e. non-strong mode) needs an explicit concrete List TypeInfo defined
    /// </summary>
    public class DummyTypes
    {
        public List<HelloResponse> HelloResponses { get; set; }
    }

    public class DummyTypesService : Service
    {
        public object Any(DummyTypes request) => request;
    }
}