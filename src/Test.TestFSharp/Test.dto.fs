(* Options:
Date: 2015-04-09 13:37:06
Version: 1
BaseUrl: http://localhost:56500

GlobalNamespace: dtos
MakeDataContractsExtensible: False
AddReturnMarker: True
AddDescriptionAsComments: True
AddDataContractAttributes: False
AddIndexesToDataMembers: False
AddResponseStatus: False
//AddImplicitVersion: 
//IncludeTypes: 
//ExcludeTypes: 
InitializeCollections: True
*)

namespace dtos

open System
open System.Collections
open System.Collections.Generic
open System.Runtime.Serialization
open ServiceStack
open ServiceStack.DataAnnotations

    type ExternalEnum =
        | Foo = 0
        | Bar = 1
        | Baz = 2

    type ExternalEnum2 =
        | Uno = 0
        | Due = 1
        | Tre = 2

    [<AllowNullLiteral>]
    type ExternalType() = 
        member val ExternalEnum2:ExternalEnum2 = new ExternalEnum2() with get,set

    type ExternalEnum3 =
        | Un = 0
        | Deux = 1
        | Trois = 2

    [<AllowNullLiteral>]
    type MetadataTestNestedChild() = 
        member val Name:String = null with get,set

    [<AllowNullLiteral>]
    type MetadataTestChild() = 
        member val Name:String = null with get,set
        member val Results:List<MetadataTestNestedChild> = new List<MetadataTestNestedChild>() with get,set

    [<AllowNullLiteral>]
    type MenuItemExampleItem() = 
        [<DataMember(Order=1)>]
        [<ApiMember>]
        member val Name1:String = null with get,set

    [<AllowNullLiteral>]
    type MenuItemExample() = 
        [<DataMember(Order=1)>]
        [<ApiMember>]
        member val Name1:String = null with get,set

        member val MenuItemExampleItem:MenuItemExampleItem = null with get,set

    [<DataContract>]
    [<AllowNullLiteral>]
    type MenuExample() = 
        [<DataMember(Order=1)>]
        [<ApiMember>]
        member val MenuItemExample1:MenuItemExample = null with get,set

    [<AllowNullLiteral>]
    type NestedClass() = 
        member val Value:String = null with get,set

    [<AllowNullLiteral>]
    type ListResult() = 
        member val Result:String = null with get,set

    [<AllowNullLiteral>]
    type ArrayResult() = 
        member val Result:String = null with get,set

    type EnumType =
        | Value1 = 0
        | Value2 = 1

    [<Flags>]
    type EnumFlags =
        | Value1 = 1
        | Value2 = 2
        | Value3 = 4

    [<AllowNullLiteral>]
    type SubType() = 
        member val Id:Int32 = new Int32() with get,set
        member val Name:String = null with get,set

    [<AllowNullLiteral>]
    type AllTypes() = 
        member val Id:Int32 = new Int32() with get,set
        member val NullableId:Nullable<Int32> = new Nullable<Int32>() with get,set
        member val Byte:Byte = new Byte() with get,set
        member val Short:Int16 = new Int16() with get,set
        member val Int:Int32 = new Int32() with get,set
        member val Long:Int64 = new Int64() with get,set
        member val UShort:UInt16 = new UInt16() with get,set
        member val UInt:UInt32 = new UInt32() with get,set
        member val ULong:UInt64 = new UInt64() with get,set
        member val Float:Single = new Single() with get,set
        member val Double:Double = new Double() with get,set
        member val Decimal:Decimal = new Decimal() with get,set
        member val String:String = null with get,set
        member val DateTime:DateTime = new DateTime() with get,set
        member val TimeSpan:TimeSpan = new TimeSpan() with get,set
        member val DateTimeOffset:DateTimeOffset = new DateTimeOffset() with get,set
        member val Guid:Guid = new Guid() with get,set
        member val Char:Char = new Char() with get,set
        member val NullableDateTime:Nullable<DateTime> = new Nullable<DateTime>() with get,set
        member val NullableTimeSpan:Nullable<TimeSpan> = new Nullable<TimeSpan>() with get,set
        member val StringList:List<String> = new List<String>() with get,set
        member val StringArray:String[] = [||] with get,set
        member val StringMap:Dictionary<String, String> = new Dictionary<String, String>() with get,set
        member val IntStringMap:Dictionary<Int32, String> = new Dictionary<Int32, String>() with get,set
        member val SubType:SubType = null with get,set

    [<AllowNullLiteral>]
    type Poco() = 
        member val Name:String = null with get,set

    [<AllowNullLiteral>]
    type AllCollectionTypes() = 
        member val IntArray:Int32[] = [||] with get,set
        member val IntList:List<Int32> = new List<Int32>() with get,set
        member val StringArray:String[] = [||] with get,set
        member val StringList:List<String> = new List<String>() with get,set
        member val PocoArray:Poco[] = [||] with get,set
        member val PocoList:List<Poco> = new List<Poco>() with get,set
        member val PocoLookup:Dictionary<String, List<Poco>> = new Dictionary<String, List<Poco>>() with get,set
        member val PocoLookupMap:Dictionary<String, List<Dictionary<String,Poco>>> = new Dictionary<String, List<Dictionary<String,Poco>>>() with get,set

    [<AllowNullLiteral>]
    type HelloBase() = 
        member val Id:Int32 = new Int32() with get,set

    [<AllowNullLiteral>]
    type HelloResponseBase() = 
        member val RefId:Int32 = new Int32() with get,set

    [<AllowNullLiteral>]
    type HelloBase<'T>() = 
        member val Items:List<'T> = new List<'T>() with get,set
        member val Counts:List<Int32> = new List<Int32>() with get,set

    [<AllowNullLiteral>]
    type Item() = 
        member val Value:String = null with get,set

    [<AllowNullLiteral>]
    type InheritedItem() = 
        member val Name:String = null with get,set

    [<AllowNullLiteral>]
    type HelloWithReturnResponse() = 
        member val Result:String = null with get,set

    [<AllowNullLiteral>]
    type HelloType() = 
        member val Result:String = null with get,set

    [<AllowNullLiteral>]
    type IPoco = 
        abstract Name:String with get,set

    [<AllowNullLiteral>]
    type IEmptyInterface = 
        interface end

    [<AllowNullLiteral>]
    type EmptyClass() = 
        class end

    [<AllowNullLiteral>]
    type InnerType() = 
        member val Id:Int64 = new Int64() with get,set
        member val Name:String = null with get,set

    type InnerEnum =
        | Foo = 0
        | Bar = 1
        | Baz = 2

    [<AllowNullLiteral>]
    type PingService() = 
        class end

    [<AllowNullLiteral>]
    type CustomUserSession() = 
        inherit AuthUserSession()
        [<DataMember>]
        member val CustomName:String = null with get,set

        [<DataMember>]
        member val CustomInfo:String = null with get,set

    [<AllowNullLiteral>]
    type UnAuthInfo() = 
        member val CustomInfo:String = null with get,set

    [<AllowNullLiteral>]
    type TypesGroup() = 
        class end

    [<AllowNullLiteral>]
    type CustomHttpErrorResponse() = 
        member val Custom:String = null with get,set
        member val ResponseStatus:ResponseStatus = null with get,set

    [<AllowNullLiteral>]
    type ThrowTypeResponse() = 
        member val ResponseStatus:ResponseStatus = null with get,set

    [<AllowNullLiteral>]
    type ThrowValidationResponse() = 
        member val Age:Int32 = new Int32() with get,set
        member val Required:String = null with get,set
        member val Email:String = null with get,set
        member val ResponseStatus:ResponseStatus = null with get,set

    [<AllowNullLiteral>]
    type ExternalOperationResponse() = 
        member val Result:String = null with get,set

    [<AllowNullLiteral>]
    type ExternalOperation2Response() = 
        member val ExternalType:ExternalType = null with get,set

    [<AllowNullLiteral>]
    type ExternalReturnTypeResponse() = 
        member val ExternalEnum3:ExternalEnum3 = new ExternalEnum3() with get,set

    [<AllowNullLiteral>]
    type Account() = 
        member val Name:String = null with get,set

    [<AllowNullLiteral>]
    type Project() = 
        member val Account:String = null with get,set
        member val Name:String = null with get,set

    [<AllowNullLiteral>]
    type MetadataTestResponse() = 
        member val Id:Int32 = new Int32() with get,set
        member val Results:List<MetadataTestChild> = new List<MetadataTestChild>() with get,set

    [<DataContract>]
    [<AllowNullLiteral>]
    type GetExampleResponse() = 
        [<DataMember(Order=1)>]
        member val ResponseStatus:ResponseStatus = null with get,set

        [<DataMember(Order=2)>]
        [<ApiMember>]
        member val MenuExample1:MenuExample = null with get,set

    [<AllowNullLiteral>]
    type GetRandomIdsResponse() = 
        member val Results:List<String> = new List<String>() with get,set

    [<AllowNullLiteral>]
    type HelloResponse() = 
        member val Result:String = null with get,set

    ///<summary>
    ///Description on HelloAllResponse type
    ///</summary>
    [<DataContract>]
    [<AllowNullLiteral>]
    type HelloAnnotatedResponse() = 
        [<DataMember>]
        member val Result:String = null with get,set

    [<AllowNullLiteral>]
    type HelloAllTypesResponse() = 
        member val Result:String = null with get,set
        member val AllTypes:AllTypes = null with get,set
        member val AllCollectionTypes:AllCollectionTypes = null with get,set

    [<DataContract>]
    [<AllowNullLiteral>]
    type HelloWithDataContractResponse() = 
        [<DataMember(Name="result", Order=1, IsRequired=true, EmitDefaultValue=false)>]
        member val Result:String = null with get,set

    ///<summary>
    ///Description on HelloWithDescriptionResponse type
    ///</summary>
    [<AllowNullLiteral>]
    type HelloWithDescriptionResponse() = 
        member val Result:String = null with get,set

    [<AllowNullLiteral>]
    type HelloWithInheritanceResponse() = 
        inherit HelloResponseBase()
        member val Result:String = null with get,set

    [<AllowNullLiteral>]
    type HelloWithAlternateReturnResponse() = 
        inherit HelloWithReturnResponse()
        member val AltResult:String = null with get,set

    [<AllowNullLiteral>]
    type HelloWithRouteResponse() = 
        member val Result:String = null with get,set

    [<AllowNullLiteral>]
    type HelloWithTypeResponse() = 
        member val Result:HelloType = null with get,set

    [<AllowNullLiteral>]
    type HelloInnerTypesResponse() = 
        member val InnerType:InnerType = null with get,set
        member val InnerEnum:InnerEnum = new InnerEnum() with get,set

    [<AllowNullLiteral>]
    type PingResponse() = 
        member val Responses:Dictionary<String, ResponseStatus> = new Dictionary<String, ResponseStatus>() with get,set
        member val ResponseStatus:ResponseStatus = null with get,set

    [<AllowNullLiteral>]
    type RequiresRoleResponse() = 
        member val Result:String = null with get,set
        member val ResponseStatus:ResponseStatus = null with get,set

    [<AllowNullLiteral>]
    type GetSessionResponse() = 
        member val Result:CustomUserSession = null with get,set
        member val UnAuthInfo:UnAuthInfo = null with get,set
        member val ResponseStatus:ResponseStatus = null with get,set

    [<AllowNullLiteral>]
    type CustomHttpError() = 
        interface IReturn<CustomHttpErrorResponse>
        member val StatusCode:Int32 = new Int32() with get,set
        member val StatusDescription:String = null with get,set

    [<Route("/throwhttperror/{Status}")>]
    [<AllowNullLiteral>]
    type ThrowHttpError() = 
        member val Status:Nullable<Int32> = new Nullable<Int32>() with get,set
        member val Message:String = null with get,set

    [<Route("/throw404")>]
    [<Route("/throw404/{Message}")>]
    [<AllowNullLiteral>]
    type Throw404() = 
        member val Message:String = null with get,set

    [<Route("/throw/{Type}")>]
    [<AllowNullLiteral>]
    type ThrowType() = 
        interface IReturn<ThrowTypeResponse>
        member val Type:String = null with get,set
        member val Message:String = null with get,set

    [<Route("/throwvalidation")>]
    [<AllowNullLiteral>]
    type ThrowValidation() = 
        interface IReturn<ThrowValidationResponse>
        member val Age:Int32 = new Int32() with get,set
        member val Required:String = null with get,set
        member val Email:String = null with get,set

    [<AllowNullLiteral>]
    type ExternalOperation() = 
        interface IReturn<ExternalOperationResponse>
        member val Id:Int32 = new Int32() with get,set
        member val Name:String = null with get,set
        member val ExternalEnum:ExternalEnum = new ExternalEnum() with get,set

    [<AllowNullLiteral>]
    type ExternalOperation2() = 
        interface IReturn<ExternalOperation2Response>
        member val Id:Int32 = new Int32() with get,set

    [<AllowNullLiteral>]
    type ExternalOperation3() = 
        interface IReturn<ExternalReturnTypeResponse>
        member val Id:Int32 = new Int32() with get,set

    [<AllowNullLiteral>]
    type ExternalOperation4() = 
        member val Id:Int32 = new Int32() with get,set

    [<Route("/{Path*}")>]
    [<AllowNullLiteral>]
    type RootPathRoutes() = 
        member val Path:String = null with get,set

    [<AllowNullLiteral>]
    type GetAccount() = 
        interface IReturn<Account>
        member val Account:String = null with get,set

    [<AllowNullLiteral>]
    type GetProject() = 
        interface IReturn<Project>
        member val Account:String = null with get,set
        member val Project:String = null with get,set

    [<Route("/image-stream")>]
    [<AllowNullLiteral>]
    type ImageAsStream() = 
        member val Format:String = null with get,set

    [<Route("/image-bytes")>]
    [<AllowNullLiteral>]
    type ImageAsBytes() = 
        member val Format:String = null with get,set

    [<Route("/image-custom")>]
    [<AllowNullLiteral>]
    type ImageAsCustomResult() = 
        member val Format:String = null with get,set

    [<Route("/image-response")>]
    [<AllowNullLiteral>]
    type ImageWriteToResponse() = 
        member val Format:String = null with get,set

    [<Route("/image-file")>]
    [<AllowNullLiteral>]
    type ImageAsFile() = 
        member val Format:String = null with get,set

    [<Route("/image-redirect")>]
    [<AllowNullLiteral>]
    type ImageAsRedirect() = 
        member val Format:String = null with get,set

    [<Route("/image-draw/{Name}")>]
    [<AllowNullLiteral>]
    type DrawImage() = 
        member val Name:String = null with get,set
        member val Format:String = null with get,set
        member val Width:Nullable<Int32> = new Nullable<Int32>() with get,set
        member val Height:Nullable<Int32> = new Nullable<Int32>() with get,set
        member val FontSize:Nullable<Int32> = new Nullable<Int32>() with get,set
        member val Foreground:String = null with get,set
        member val Background:String = null with get,set

    [<Route("/metadatatest")>]
    [<AllowNullLiteral>]
    type MetadataTest() = 
        interface IReturn<MetadataTestResponse>
        member val Id:Int32 = new Int32() with get,set

    [<Route("/metadatatest-array")>]
    [<AllowNullLiteral>]
    type MetadataTestArray() = 
        interface IReturn<MetadataTestChild[]>
        member val Id:Int32 = new Int32() with get,set

    [<Route("/example", "GET")>]
    [<DataContract>]
    [<AllowNullLiteral>]
    type GetExample() = 
        interface IReturn<GetExampleResponse>

    [<Route("/randomids")>]
    [<AllowNullLiteral>]
    type GetRandomIds() = 
        interface IReturn<GetRandomIdsResponse>
        member val Take:Nullable<Int32> = new Nullable<Int32>() with get,set

    [<Route("/textfile-test")>]
    [<AllowNullLiteral>]
    type TextFileTest() = 
        member val AsAttachment:Boolean = new Boolean() with get,set

    [<Route("/hello/{Name}")>]
    [<Route("/hello")>]
    [<AllowNullLiteral>]
    type Hello() = 
        interface IReturn<HelloResponse>
        [<Required>]
        member val Name:String = null with get,set

        member val Title:String = null with get,set

    ///<summary>
    ///Description on HelloAll type
    ///</summary>
    [<DataContract>]
    [<AllowNullLiteral>]
    type HelloAnnotated() = 
        interface IReturn<HelloAnnotatedResponse>
        [<DataMember>]
        member val Name:String = null with get,set

    [<AllowNullLiteral>]
    type HelloWithNestedClass() = 
        interface IReturn<HelloResponse>
        member val Name:String = null with get,set
        member val NestedClassProp:NestedClass = null with get,set

    [<AllowNullLiteral>]
    type HelloList() = 
        interface IReturn<List<ListResult>>
        member val Names:List<String> = new List<String>() with get,set

    [<AllowNullLiteral>]
    type HelloArray() = 
        interface IReturn<ArrayResult[]>
        member val Names:List<String> = new List<String>() with get,set

    [<AllowNullLiteral>]
    type HelloWithEnum() = 
        member val EnumProp:EnumType = new EnumType() with get,set
        member val NullableEnumProp:Nullable<EnumType> = new Nullable<EnumType>() with get,set
        member val EnumFlags:EnumFlags = new EnumFlags() with get,set

    [<AllowNullLiteral>]
    type RestrictedAttributes() = 
        member val Id:Int32 = new Int32() with get,set
        member val Name:String = null with get,set
        member val Hello:Hello = null with get,set

    ///<summary>
    ///AllowedAttributes Description
    ///</summary>
    [<Route("/allowed-attributes", "GET")>]
    [<Api("AllowedAttributes Description")>]
    [<ApiResponse(400, "Your request was not understood")>]
    [<DataContract>]
    [<AllowNullLiteral>]
    type AllowedAttributes() = 
        [<DataMember(Name="Aliased")>]
        [<ApiMember(Description="Range Description", ParameterType="path", DataType="double", IsRequired=true)>]
        member val Range:Double = new Double() with get,set

    [<AllowNullLiteral>]
    type HelloAllTypes() = 
        interface IReturn<HelloAllTypesResponse>
        member val Name:String = null with get,set
        member val AllTypes:AllTypes = null with get,set
        member val AllCollectionTypes:AllCollectionTypes = null with get,set

    [<AllowNullLiteral>]
    type HelloString() = 
        member val Name:String = null with get,set

    [<AllowNullLiteral>]
    type HelloVoid() = 
        member val Name:String = null with get,set

    [<DataContract>]
    [<AllowNullLiteral>]
    type HelloWithDataContract() = 
        interface IReturn<HelloWithDataContractResponse>
        [<DataMember(Name="name", Order=1, IsRequired=true, EmitDefaultValue=false)>]
        member val Name:String = null with get,set

        [<DataMember(Name="id", Order=2, EmitDefaultValue=false)>]
        member val Id:Int32 = new Int32() with get,set

    ///<summary>
    ///Description on HelloWithDescription type
    ///</summary>
    [<AllowNullLiteral>]
    type HelloWithDescription() = 
        interface IReturn<HelloWithDescriptionResponse>
        member val Name:String = null with get,set

    [<AllowNullLiteral>]
    type HelloWithInheritance() = 
        inherit HelloBase()
        interface IReturn<HelloWithInheritanceResponse>
        member val Name:String = null with get,set

    [<AllowNullLiteral>]
    type HelloWithGenericInheritance() = 
        inherit HelloBase<Poco>()
        member val Result:String = null with get,set

    [<AllowNullLiteral>]
    type HelloWithGenericInheritance2() = 
        inherit HelloBase<Hello>()
        member val Result:String = null with get,set

    [<AllowNullLiteral>]
    type HelloWithNestedInheritance() = 
        inherit HelloBase<Item>()

    [<AllowNullLiteral>]
    type HelloWithListInheritance() = 
        inherit List<InheritedItem>()

    [<AllowNullLiteral>]
    type HelloWithReturn() = 
        interface IReturn<HelloWithAlternateReturnResponse>
        member val Name:String = null with get,set

    [<Route("/helloroute")>]
    [<AllowNullLiteral>]
    type HelloWithRoute() = 
        interface IReturn<HelloWithRouteResponse>
        member val Name:String = null with get,set

    [<AllowNullLiteral>]
    type HelloWithType() = 
        interface IReturn<HelloWithTypeResponse>
        member val Name:String = null with get,set

    [<AllowNullLiteral>]
    type HelloInterface() = 
        member val Poco:IPoco = null with get,set
        member val EmptyInterface:IEmptyInterface = null with get,set
        member val EmptyClass:EmptyClass = null with get,set

    [<AllowNullLiteral>]
    type HelloInnerTypes() = 
        interface IReturn<HelloInnerTypesResponse>

    [<Route("/ping")>]
    [<AllowNullLiteral>]
    type Ping() = 
        interface IReturn<PingResponse>

    [<Route("/reset-connections")>]
    [<AllowNullLiteral>]
    type ResetConnections() = 
        class end

    [<Route("/requires-role")>]
    [<AllowNullLiteral>]
    type RequiresRole() = 
        interface IReturn<RequiresRoleResponse>

    [<Route("/session")>]
    [<AllowNullLiteral>]
    type GetSession() = 
        interface IReturn<GetSessionResponse>

    [<Route("/session/edit/{CustomName}")>]
    [<AllowNullLiteral>]
    type UpdateSession() = 
        interface IReturn<GetSessionResponse>
        member val CustomName:String = null with get,set

    [<Route("/void-response")>]
    [<AllowNullLiteral>]
    type TestVoidResponse() = 
        class end

    [<Route("/null-response")>]
    [<AllowNullLiteral>]
    type TestNullResponse() = 
        class end

