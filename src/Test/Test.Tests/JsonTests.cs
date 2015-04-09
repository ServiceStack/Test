using System;
using NUnit.Framework;
using ServiceStack;
using ServiceStack.Text;
using Test.ServiceModel;
using Test.ServiceModel.Types;

namespace Test.Tests
{
    [TestFixture]
    public class JsonTests
    {
        [Test]
        public void Can_parse_Gson_HelloAllTypes()
        {
            var json = "{\"allCollectionTypes\":{\"intArray\":[1,2,3],\"intList\":[4,5,6],\"pocoArray\":[{\"name\":\"pocoArray\"}],\"pocoList\":[{\"name\":\"pocoList\"}],\"pocoLookup\":{\"A\":[{\"name\":\"B\"},{\"name\":\"C\"}]},\"pocoLookupMap\":{\"A\":[{\"B\":{\"name\":\"C\"}},{\"D\":{\"name\":\"E\"}}]},\"stringArray\":[\"A\",\"B\",\"C\"],\"stringList\":[\"D\",\"E\",\"F\"]},\"allTypes\":{\"byte\":2,\"char\":\"c\",\"double\":2.2,\"float\":1.1,\"int\":4,\"long\":5,\"short\":3,\"dateTime\":\"\\/Date(978325200000-0000)\\/\",\"dateTimeOffset\":\"\\/Date(978325200000-0000)\\/\",\"decimal\":3.0,\"guid\":\"48F31377699CD745BCB394F7ABACE836\",\"id\":1,\"intStringMap\":{\"1\":\"A\",\"3\":\"C\",\"2\":\"B\"},\"string\":\"string\",\"stringArray\":[\"D\",\"E\",\"F\"],\"stringList\":[\"A\",\"B\",\"C\"],\"stringMap\":{\"B\":\"E\",\"C\":\"F\",\"A\":\"D\"},\"subType\":{\"id\":1,\"name\":\"name\"},\"timeSpan\":\"PT1H\",\"uInt\":7,\"uLong\":8,\"uShort\":6},\"name\":\"name\"}";

            json.Print();
            "".Print();

            var dto = json.FromJson<HelloAllTypes>();

            dto.ToJson().Print();
            "".Print();

            dto.PrintDump();
        }

        [Test]
        public void Can_parse_Gson_AllTypes()
        {
            var json = "{\"byte\":2,\"char\":\"c\",\"double\":2.2,\"float\":1.1,\"int\":4,\"long\":5,\"short\":3,\"dateTime\":\"\\/Date(978325200000-0000)\\/\",\"dateTimeOffset\":\"\\/Date(978325200000-0000)\\/\",\"decimal\":3.0,\"guid\":\"5EFAD90BBA0B634EB4488F4055ED5265\",\"id\":1,\"intStringMap\":{\"1\":\"A\",\"3\":\"C\",\"2\":\"B\"},\"string\":\"string\",\"stringArray\":[\"D\",\"E\",\"F\"],\"stringList\":[\"A\",\"B\",\"C\"],\"stringMap\":{\"B\":\"E\",\"C\":\"F\",\"A\":\"D\"},\"subType\":{\"id\":1,\"name\":\"name\"},\"timeSpan\":\"PT1H\",\"uInt\":7,\"uLong\":8,\"uShort\":6}";

            json.Print();
            "".Print();

            var dto = json.FromJson<AllTypes>();

            dto.ToJson().Print();
            "".Print();

            dto.PrintDump();
        }

        [Test]
        public void Serialize_UTC_Date()
        {
            var d = new DateTime(2001, 01, 01);

            d.ToJson().Print();
            "\"\\/Date(978325200000-0000)\\/\"".Print();
            d.ToUnixTime().ToString().Print();
            d.ToUnixTimeMs().ToString().Print();

            Assert.That(d.ToJson(), Is.EqualTo("\"\\/Date(978325200000-0000)\\/\""));
        }

        [Test]
        public void Serialize_TimeSpan()
        {
            Assert.That(TimeSpan.FromDays(1).ToJson().Trim('"'), Is.EqualTo("P1D"));
            Assert.That(TimeSpan.FromHours(1).ToJson().Trim('"'), Is.EqualTo("PT1H"));
            Assert.That(TimeSpan.FromMinutes(1).ToJson().Trim('"'), Is.EqualTo("PT1M"));
            Assert.That(TimeSpan.FromSeconds(1).ToJson().Trim('"'), Is.EqualTo("PT1S"));
            Assert.That(TimeSpan.FromMilliseconds(1).ToJson().Trim('"'), Is.EqualTo("PT0.001S"));

            Assert.That(new TimeSpan(1,1,1,1,1).ToJson().Trim('"'), Is.EqualTo("P1DT1H1M1.001S"));
        }
    }
}