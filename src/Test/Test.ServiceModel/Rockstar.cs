using System.Collections.Generic;
using ServiceStack;

namespace Test.ServiceModel
{
    [Route("/rockstars", "GET")]
    public class QueryRockstars : QueryDb<Rockstar> {}

    [Route("/rockstars", "POST")]
    public class StoreRockstars : List<Rockstar>, IReturn<StoreRockstars> {}

    public class Rockstar
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int? Age { get; set; }
    }
}
