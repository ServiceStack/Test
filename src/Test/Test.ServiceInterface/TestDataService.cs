using System;
using System.Collections.Generic;
using ServiceStack;
using Test.ServiceModel.Types;

namespace Test.ServiceInterface
{
    [Route("/testdata/AllTypes")]
    public class TestDataAllTypes : IReturn<AllTypes> { }

    [Route("/testdata/AllCollectionTypes")]
    public class TestDataAllCollectionTypes : IReturn<AllCollectionTypes> { }

    public class TestDataService : Service
    {
        public object Any(TestDataAllTypes request) => new AllTypes
        {
            Id = 1,
            Char = 'c',
            Byte = 2,
            Short = 3,
            Int = 4,
            Long = 5,
            UShort = 6,
            UInt = 7,
            ULong = 8,
            Float = 1.1f,
            Double = 2.2,
            Decimal = 3.0m,
            String = "string",
            DateTime = new DateTime(2001, 1, 1, 0, 0, 0, DateTimeKind.Utc),
            DateTimeOffset = new DateTimeOffset(new DateTime(2001, 1, 1, 0, 0, 0, DateTimeKind.Utc), TimeSpan.Zero),
            TimeSpan = TimeSpan.FromHours(1),
            Guid = new Guid("EA762009-B66C-410B-9BF5-CE21AD519249"),
            StringList = new List<string>() { "A", "B", "C" },
            StringArray = new string[] { "D", "E", "F" },
            StringMap = new Dictionary<string, string> {
                {"A", "D"},
                {"B", "E"},
                {"C", "F"}
            },
            IntStringMap = new Dictionary<int, string> { { 1, "A" }, { 2, "B" }, { 3, "C" } },
            SubType = new SubType { Id = 1, Name = "name" }
        };

        Poco CreatePoco(string name) => new Poco { Name = name };

        public object Any(TestDataAllCollectionTypes request) => new AllCollectionTypes
        {
            IntArray = new[] { 1, 2, 3, },
            IntList = new List<int> { 4, 5, 6 },
            StringArray = new[] { "A", "B", "C" },
            StringList = new List<string> { "D", "E", "F" },
            PocoArray = new Poco[] { CreatePoco("pocoArray") },
            PocoList = new List<Poco> { CreatePoco("pocoList") },
            PocoLookup =
                new Dictionary<string, List<Poco>> { { "A", new List<Poco>() { CreatePoco("B"), CreatePoco("C") } } },
            PocoLookupMap = new Dictionary<string, List<Dictionary<string, Poco>>>() {
                {
                    "A",
                    new List<Dictionary<string, Poco>> {
                        new Dictionary<string, Poco> {{"B", CreatePoco("C")}},
                        new Dictionary<string, Poco> {{"D", CreatePoco("E")}},
                    }
                }
            }
        };

    }
}