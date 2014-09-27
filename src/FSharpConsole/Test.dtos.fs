(* Options:
Version: 1
BaseUrl: http://test.servicestack.net

ServerVersion: 1
MakeDataContractsExtensible: False
AddReturnMarker: True
AddDescriptionAsComments: True
AddDataContractAttributes: False
AddIndexesToDataMembers: False
AddResponseStatus: False
AddImplicitVersion: 
InitializeCollections: True
*)

namespace Test.ServiceModel

open System
open System.Collections
open System.Collections.Generic
open System.Runtime.Serialization
open ServiceStack
open ServiceStack.DataAnnotations

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

    [<AllowNullLiteral>]
    type HelloBase() = 
        member val Id:Int32 = new Int32() with get,set

    [<AllowNullLiteral>]
    type HelloResponseBase() = 
        member val RefId:Int32 = new Int32() with get,set

    [<AllowNullLiteral>]
    type HelloWithReturnResponse() = 
        member val Result:String = null with get,set

    [<AllowNullLiteral>]
    type HelloType() = 
        member val Result:String = null with get,set

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
    type Account() = 
        member val Name:String = null with get,set

    [<AllowNullLiteral>]
    type Project() = 
        member val Account:String = null with get,set
        member val Name:String = null with get,set

    [<AllowNullLiteral>]
    type HelloResponse() = 
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
        interface IReturn<DrawImage>
        member val Name:String = null with get,set
        member val Format:String = null with get,set
        member val Width:Nullable<Int32> = new Nullable<Int32>() with get,set
        member val Height:Nullable<Int32> = new Nullable<Int32>() with get,set
        member val FontSize:Nullable<Int32> = new Nullable<Int32>() with get,set
        member val Foreground:String = null with get,set
        member val Background:String = null with get,set

    [<Route("/hello/{Name}")>]
    [<AllowNullLiteral>]
    type Hello() = 
        interface IReturn<HelloResponse>
        member val Name:String = null with get,set

    [<AllowNullLiteral>]
    type HelloExternal() = 
        member val Name:String = null with get,set

    ///<summary>
    ///AllowedAttributes Description
    ///</summary>
    [<Route("/allowed-attributes", "GET")>]
    [<Api("AllowedAttributes Description")>]
    [<ApiResponse(400, "Your request was not understood")>]
    [<DataContract>]
    [<AllowNullLiteral>]
    type AllowedAttributes() = 
        [<Required>]
        [<Default(5)>]
        member val Id:Int32 = new Int32() with get,set

        [<DataMember(Name="Aliased")>]
        [<ApiMember(Description="Range Description", ParameterType="path", DataType="double", IsRequired=true)>]
        member val Range:Double = new Double() with get,set

        [<StringLength(20)>]
        [<References(typeof<Hello>)>]
        [<Meta("Foo", "Bar")>]
        member val Name:String = null with get,set

    [<AllowNullLiteral>]
    type HelloAllTypes() = 
        interface IReturn<HelloAllTypes>
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
        interface IReturn<HelloWithDataContract>
        [<DataMember(Name="name", Order=1, IsRequired=true, EmitDefaultValue=false)>]
        member val Name:String = null with get,set

        [<DataMember(Name="id", Order=2, EmitDefaultValue=false)>]
        member val Id:Int32 = new Int32() with get,set

    ///<summary>
    ///Description on HelloWithDescription type
    ///</summary>
    [<AllowNullLiteral>]
    type HelloWithDescription() = 
        interface IReturn<HelloWithDescription>
        member val Name:String = null with get,set

    [<AllowNullLiteral>]
    type HelloWithInheritance() = 
        inherit HelloBase()
        interface IReturn<HelloWithInheritance>
        member val Name:String = null with get,set

    [<AllowNullLiteral>]
    type HelloWithReturn() = 
        interface IReturn<HelloWithAlternateReturnResponse>
        member val Name:String = null with get,set

    [<Route("/helloroute")>]
    [<AllowNullLiteral>]
    type HelloWithRoute() = 
        interface IReturn<HelloWithRoute>
        member val Name:String = null with get,set

    [<AllowNullLiteral>]
    type HelloWithType() = 
        interface IReturn<HelloWithType>
        member val Name:String = null with get,set

    [<Route("/ping")>]
    [<AllowNullLiteral>]
    type Ping() = 
        interface IReturn<Ping>

    [<Route("/requires-role")>]
    [<AllowNullLiteral>]
    type RequiresRole() = 
        interface IReturn<RequiresRole>

    [<Route("/session")>]
    [<AllowNullLiteral>]
    type GetSession() = 
        interface IReturn<GetSessionResponse>

    [<Route("/session/edit/{CustomName}")>]
    [<AllowNullLiteral>]
    type UpdateSession() = 
        interface IReturn<GetSessionResponse>
        member val CustomName:String = null with get,set
