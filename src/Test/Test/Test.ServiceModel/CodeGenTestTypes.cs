using System;
using System.Net;
using System.Runtime.Serialization;
using ServiceStack;
using ServiceStack.DataAnnotations;
using Test.ServiceModel.Types;

namespace Test.ServiceModel
{
    [Restrict(InternalOnly = true)]
    [System.ComponentModel.Description("Description on HelloAll type")]
    [DataContract]
    public class HelloAnnotated
        : IReturn<HelloAnnotatedResponse>
    {
        [DataMember]
        public string Name { get; set; }
    }

    [Restrict(ExternalOnly = true)]
    public class HelloExternal
    {
        public string Name { get; set; }
    }

    [Restrict(InternalOnly = true)]
    [Alias("Alias")]
    public class RestrictedAttributes
    {
        [PrimaryKey]
        [AutoIncrement]
        public int Id { get; set; }

        [Index]
        [ApiAllowableValues("DateKind", typeof(DateTimeKind))]
        public string Name { get; set; }

        public Hello Hello { get; set; }
    }

    [DataContract]
    [Route("/allowed-attributes","GET")]
    [Api("AllowedAttributes Description")]
    [ApiResponse(HttpStatusCode.BadRequest, "Your request was not understood")]
    [Description("Description on AllowedAttributes")]
    public class AllowedAttributes
    {
        [Required]
        [Range(1, 10)]
        [Default(5)]
        public int Id { get; set; }

        [Range(1.0, 10.0)]
        [DataMember(Name = "Aliased")]
        [ApiMember(Description = "Range Description",
                   ParameterType = "path", DataType = "double", IsRequired = true)]
        public double Range { get; set; }

        [StringLength(20)]
        [References(typeof(Hello))]
        [Meta("Foo","Bar")]
        public string Name { get; set; }
    }

    [System.ComponentModel.Description("Description on HelloAllResponse type")]
    [DataContract]
    public class HelloAnnotatedResponse
    {
        [DataMember]
        public string Result { get; set; }
    }

    public class HelloAllTypes
    {
        public string Name { get; set; }
        public AllTypes AllTypes { get; set; }
        public AllCollectionTypes AllCollectionTypes { get; set; }
    }

    public class HelloAllTypesResponse
    {
        public string Result { get; set; }
        public AllTypes AllTypes { get; set; }
        public AllCollectionTypes AllCollectionTypes { get; set; }
    }

    public class HelloString
    {
        public string Name { get; set; }
    }

    public class HelloVoid
    {
        public string Name { get; set; }
    }

    [DataContract]
    public class HelloWithDataContract
    {
        [DataMember(Name = "name", Order = 1, IsRequired = true, EmitDefaultValue = false)]
        public string Name { get; set; }

        [DataMember(Name = "id", Order = 2, EmitDefaultValue = false)]
        public int Id { get; set; }
    }

    [DataContract]
    public class HelloWithDataContractResponse
    {
        [DataMember(Name = "result", Order = 1, IsRequired = true, EmitDefaultValue = false)]
        public string Result { get; set; }
    }

    [System.ComponentModel.Description("Description on HelloWithDescription type")]
    public class HelloWithDescription
    {
        public string Name { get; set; }
    }

    [System.ComponentModel.Description("Description on HelloWithDescriptionResponse type")]
    public class HelloWithDescriptionResponse
    {
        public string Result { get; set; }
    }

    public class HelloWithInheritance
        : HelloBase
    {
        public string Name { get; set; }
    }

    public class HelloWithInheritanceResponse
        : HelloResponseBase
    {
        public string Result { get; set; }
    }

    public class HelloWithReturn
        : IReturn<HelloWithAlternateReturnResponse>
    {
        public string Name { get; set; }
    }

    public class HelloWithAlternateReturnResponse
        : HelloWithReturnResponse
    {
        public string AltResult { get; set; }
    }

    [Route("/helloroute")]
    public class HelloWithRoute
    {
        public string Name { get; set; }
    }

    public class HelloWithRouteResponse
    {
        public string Result { get; set; }
    }

    public class HelloWithType
    {
        public string Name { get; set; }
    }

    public class HelloWithTypeResponse
    {
        public HelloType Result { get; set; }
    }
}