/* Options:
Date: 2014-11-21 04:05:43
Version: 1
BaseUrl: http://localhost:56500

//MakePartial: True
//MakeVirtual: True
//MakeDataContractsExtensible: False
//AddReturnMarker: True
//AddDescriptionAsComments: True
//AddDataContractAttributes: False
//AddIndexesToDataMembers: False
//AddResponseStatus: False
//AddImplicitVersion: 
//InitializeCollections: True
//AddDefaultXmlNamespace: http://schemas.servicestack.net/types
*/

using System;
using System.Collections;
using System.Collections.Generic;
using System.Runtime.Serialization;
using ServiceStack;
using ServiceStack.DataAnnotations;
using Test.ServiceModel;
using Test.ServiceModel.Types;
using Test.ServiceInterface;


namespace Test.ServiceInterface
{

    public partial class Account
    {
        public virtual string Name { get; set; }
    }

    public partial class CustomUserSession
        : AuthUserSession
    {
        [DataMember]
        public virtual string CustomName { get; set; }

        [DataMember]
        public virtual string CustomInfo { get; set; }
    }

    [Route("/image-draw/{Name}")]
    public partial class DrawImage
        : IReturn<DrawImage>
    {
        public virtual string Name { get; set; }
        public virtual string Format { get; set; }
        public virtual int? Width { get; set; }
        public virtual int? Height { get; set; }
        public virtual int? FontSize { get; set; }
        public virtual string Foreground { get; set; }
        public virtual string Background { get; set; }
    }

    public partial class GetAccount
        : IReturn<Account>
    {
        public virtual string Account { get; set; }
    }

    public partial class GetProject
        : IReturn<Project>
    {
        public virtual string Account { get; set; }
        public virtual string Project { get; set; }
    }

    [Route("/session")]
    public partial class GetSession
        : IReturn<GetSessionResponse>
    {
    }

    public partial class GetSessionResponse
    {
        public virtual CustomUserSession Result { get; set; }
        public virtual UnAuthInfo UnAuthInfo { get; set; }
        public virtual ResponseStatus ResponseStatus { get; set; }
    }

    [Route("/image-bytes")]
    public partial class ImageAsBytes
    {
        public virtual string Format { get; set; }
    }

    [Route("/image-custom")]
    public partial class ImageAsCustomResult
    {
        public virtual string Format { get; set; }
    }

    [Route("/image-file")]
    public partial class ImageAsFile
    {
        public virtual string Format { get; set; }
    }

    [Route("/image-redirect")]
    public partial class ImageAsRedirect
    {
        public virtual string Format { get; set; }
    }

    [Route("/image-stream")]
    public partial class ImageAsStream
    {
        public virtual string Format { get; set; }
    }

    [Route("/image-response")]
    public partial class ImageWriteToResponse
    {
        public virtual string Format { get; set; }
    }

    [Route("/ping")]
    public partial class Ping
        : IReturn<Ping>
    {
    }

    public partial class PingResponse
    {
        public PingResponse()
        {
            Responses = new Dictionary<string, ResponseStatus>{};
        }

        public virtual Dictionary<string, ResponseStatus> Responses { get; set; }
        public virtual ResponseStatus ResponseStatus { get; set; }
    }

    public partial class Project
    {
        public virtual string Account { get; set; }
        public virtual string Name { get; set; }
    }

    [Route("/{Path*}")]
    public partial class RootPathRoutes
    {
        public virtual string Path { get; set; }
    }

    public partial class UnAuthInfo
    {
        public virtual string CustomInfo { get; set; }
    }

    [Route("/session/edit/{CustomName}")]
    public partial class UpdateSession
        : IReturn<GetSessionResponse>
    {
        public virtual string CustomName { get; set; }
    }
}

namespace Test.ServiceModel
{

    ///<summary>
    ///AllowedAttributes Description
    ///</summary>
    [Route("/allowed-attributes", "GET")]
    [Api("AllowedAttributes Description")]
    [ApiResponse(400, "Your request was not understood")]
    [DataContract]
    public partial class AllowedAttributes
    {
        [Required]
        [Default(5)]
        public virtual int Id { get; set; }

        [DataMember(Name="Aliased")]
        [ApiMember(Description="Range Description", ParameterType="path", DataType="double", IsRequired=true)]
        public virtual double Range { get; set; }

        [References(typeof(Test.ServiceModel.Hello))]
        [Meta("Foo", "Bar")]
        [StringLength(20)]
        public virtual string Name { get; set; }
    }

    [Flags]
    public enum EnumFlags
    {
        Value1 = 1,
        Value2 = 2,
        Value3 = 4,
    }

    public enum EnumType
    {
        Value1,
        Value2,
    }

    [Route("/hello/{Name}")]
    public partial class Hello
        : IReturn<Hello>
    {
        public virtual string Name { get; set; }
    }

    public partial class HelloAllTypes
        : IReturn<HelloAllTypes>
    {
        public virtual string Name { get; set; }
        public virtual AllTypes AllTypes { get; set; }
        public virtual AllCollectionTypes AllCollectionTypes { get; set; }
    }

    public partial class HelloAllTypesResponse
    {
        public virtual string Result { get; set; }
        public virtual AllTypes AllTypes { get; set; }
        public virtual AllCollectionTypes AllCollectionTypes { get; set; }
    }

    ///<summary>
    ///Description on HelloAll type
    ///</summary>
    [DataContract]
    public partial class HelloAnnotated
        : IReturn<HelloAnnotatedResponse>
    {
        [DataMember]
        public virtual string Name { get; set; }
    }

    ///<summary>
    ///Description on HelloAllResponse type
    ///</summary>
    [DataContract]
    public partial class HelloAnnotatedResponse
    {
        [DataMember]
        public virtual string Result { get; set; }
    }

    public partial class HelloBase<T>
    {
        public HelloBase()
        {
            Items = new List<T>{};
            Counts = new List<int>{};
        }

        public virtual List<T> Items { get; set; }
        public virtual List<int> Counts { get; set; }
    }

    public partial class HelloInterface
    {
        public virtual IPoco Poco { get; set; }
    }

    public partial class HelloResponse
    {
        public virtual string Result { get; set; }
    }

    public partial class HelloString
    {
        public virtual string Name { get; set; }
    }

    public partial class HelloVoid
    {
        public virtual string Name { get; set; }
    }

    public partial class HelloWithAlternateReturnResponse
        : HelloWithReturnResponse
    {
        public virtual string AltResult { get; set; }
    }

    [DataContract]
    public partial class HelloWithDataContract
        : IReturn<HelloWithDataContract>
    {
        [DataMember(Name="name", Order=1, IsRequired=true, EmitDefaultValue=false)]
        public virtual string Name { get; set; }

        [DataMember(Name="id", Order=2, EmitDefaultValue=false)]
        public virtual int Id { get; set; }
    }

    [DataContract]
    public partial class HelloWithDataContractResponse
    {
        [DataMember(Name="result", Order=1, IsRequired=true, EmitDefaultValue=false)]
        public virtual string Result { get; set; }
    }

    ///<summary>
    ///Description on HelloWithDescription type
    ///</summary>
    public partial class HelloWithDescription
        : IReturn<HelloWithDescription>
    {
        public virtual string Name { get; set; }
    }

    ///<summary>
    ///Description on HelloWithDescriptionResponse type
    ///</summary>
    public partial class HelloWithDescriptionResponse
    {
        public virtual string Result { get; set; }
    }

    public partial class HelloWithEnum
    {
        public virtual EnumType EnumProp { get; set; }
        public virtual EnumType? NullableEnumProp { get; set; }
        public virtual EnumFlags EnumFlags { get; set; }
    }

    public partial class HelloWithGenericInheritance
        : HelloBase<Poco>
    {
        public virtual string Result { get; set; }
    }

    public partial class HelloWithGenericInheritance2
        : HelloBase<Hello>
    {
        public virtual string Result { get; set; }
    }

    public partial class HelloWithInheritance
        : HelloBase, IReturn<HelloWithInheritance>
    {
        public virtual string Name { get; set; }
    }

    public partial class HelloWithInheritanceResponse
        : HelloResponseBase
    {
        public virtual string Result { get; set; }
    }

    public partial class HelloWithListInheritance
        : List<InheritedItem>
    {
    }

    public partial class HelloWithNestedClass
        : IReturn<HelloResponse>
    {
        public virtual string Name { get; set; }
        public virtual NestedClass NestedClassProp { get; set; }

        public partial class NestedClass
        {
            public virtual string Value { get; set; }
        }
    }

    public partial class HelloWithNestedInheritance
        : HelloBase<HelloWithNestedInheritance.Item>
    {

        public partial class Item
        {
            public virtual string Value { get; set; }
        }
    }

    public partial class HelloWithReturn
        : IReturn<HelloWithAlternateReturnResponse>
    {
        public virtual string Name { get; set; }
    }

    [Route("/helloroute")]
    public partial class HelloWithRoute
        : IReturn<HelloWithRoute>
    {
        public virtual string Name { get; set; }
    }

    public partial class HelloWithRouteResponse
    {
        public virtual string Result { get; set; }
    }

    public partial class HelloWithType
        : IReturn<HelloWithType>
    {
        public virtual string Name { get; set; }
    }

    public partial class HelloWithTypeResponse
    {
        public virtual HelloType Result { get; set; }
    }

    public partial class InheritedItem
    {
        public virtual string Name { get; set; }
    }

    public partial interface IPoco
    {
        string Name { get; set; }
    }

    [Route("/requires-role")]
    public partial class RequiresRole
        : IReturn<RequiresRole>
    {
    }

    public partial class RequiresRoleResponse
    {
        public virtual string Result { get; set; }
        public virtual ResponseStatus ResponseStatus { get; set; }
    }

    public partial class RestrictedAttributes
    {
        public virtual int Id { get; set; }
        public virtual string Name { get; set; }
        public virtual Hello Hello { get; set; }
    }
}

namespace Test.ServiceModel.Types
{

    public partial class AllCollectionTypes
    {
        public AllCollectionTypes()
        {
            IntArray = new int[]{};
            IntList = new List<int>{};
            StringArray = new string[]{};
            StringList = new List<string>{};
            PocoArray = new Poco[]{};
            PocoList = new List<Poco>{};
        }

        public virtual int[] IntArray { get; set; }
        public virtual List<int> IntList { get; set; }
        public virtual string[] StringArray { get; set; }
        public virtual List<string> StringList { get; set; }
        public virtual Poco[] PocoArray { get; set; }
        public virtual List<Poco> PocoList { get; set; }
    }

    public partial class AllTypes
    {
        public AllTypes()
        {
            StringList = new List<string>{};
            StringArray = new string[]{};
            StringMap = new Dictionary<string, string>{};
            IntStringMap = new Dictionary<int, string>{};
        }

        public virtual int Id { get; set; }
        public virtual int? NullableId { get; set; }
        public virtual byte Byte { get; set; }
        public virtual short Short { get; set; }
        public virtual int Int { get; set; }
        public virtual long Long { get; set; }
        public virtual ushort UShort { get; set; }
        public virtual uint UInt { get; set; }
        public virtual ulong ULong { get; set; }
        public virtual float Float { get; set; }
        public virtual double Double { get; set; }
        public virtual decimal Decimal { get; set; }
        public virtual string String { get; set; }
        public virtual DateTime DateTime { get; set; }
        public virtual TimeSpan TimeSpan { get; set; }
        public virtual DateTime? NullableDateTime { get; set; }
        public virtual TimeSpan? NullableTimeSpan { get; set; }
        public virtual List<string> StringList { get; set; }
        public virtual string[] StringArray { get; set; }
        public virtual Dictionary<string, string> StringMap { get; set; }
        public virtual Dictionary<int, string> IntStringMap { get; set; }
        public virtual SubType SubType { get; set; }
    }

    public partial class HelloBase
    {
        public virtual int Id { get; set; }
    }

    public partial class HelloResponseBase
    {
        public virtual int RefId { get; set; }
    }

    public partial class HelloType
    {
        public virtual string Result { get; set; }
    }

    public partial class HelloWithReturnResponse
    {
        public virtual string Result { get; set; }
    }

    public partial class Poco
    {
        public virtual string Name { get; set; }
    }

    public partial class SubType
    {
        public virtual int Id { get; set; }
        public virtual string Name { get; set; }
    }
}

