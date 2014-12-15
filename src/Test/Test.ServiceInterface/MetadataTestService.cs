using System.Collections.Generic;
using ServiceStack;
using Test.ServiceModel;

namespace Test.ServiceInterface
{
    public class MetadataTestService : Service
    {
        public object Any(MetadataTest request)
        {
            return new MetadataTestResponse
            {
                Id = request.Id,
                Results = new List<MetadataTestChild>
                {
                    new MetadataTestChild
                    {
                        Name = "foo",
                        Results = new List<MetadataTestNestedChild>
                        {
                            new MetadataTestNestedChild
                            {
                                Name = "bar",
                            },
                        }
                    }
                }
            };
        }

        public object Any(MetadataTestArray request)
        {
            return new[]
            {
                new MetadataTestNestedChild
                {
                    Name = "bar",
                },
            };
        }

        public object Any(GetExample request)
        {
            return new GetExampleResponse
            {
                MenuExample1 = new MenuExample
                {
                    MenuItemExample1 = new MenuItemExample { Name1 = "foo" }
                }
            };
        }
    }
}