using System.Collections.Generic;
using ServiceStack;

namespace Test.ServiceModel
{
    [Route("/randomids")]
    public class GetRandomIds
    {
        public int? Take { get; set; }
    }

    public class GetRandomIdsResponse
    {
        public List<string> Results { get; set; }
    }
}