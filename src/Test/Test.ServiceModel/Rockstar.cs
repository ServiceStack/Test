using ServiceStack;

namespace Test.ServiceModel
{
    [Route("/rockstars")]
    public class QueryRockstars : QueryDb<Rockstar> {}

    public class Rockstar
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int? Age { get; set; }
    }
}
