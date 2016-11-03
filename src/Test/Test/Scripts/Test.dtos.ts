/* Options:
Date: 2016-11-03 06:15:27
Version: 4.00
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: http://localhost:56500

//GlobalNamespace: 
//MakePropertiesOptional: True
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
//IncludeTypes: 
//ExcludeTypes: 
//DefaultImports: 
*/


export interface IReturnVoid
{
}

export interface IReturn<T>
{
}

// @DataContract
export class ResponseError
{
    // @DataMember(Order=1, EmitDefaultValue=false)
    errorCode: string;

    // @DataMember(Order=2, EmitDefaultValue=false)
    fieldName: string;

    // @DataMember(Order=3, EmitDefaultValue=false)
    message: string;

    // @DataMember(Order=4, EmitDefaultValue=false)
    meta: { [index:string]: string; };
}

// @DataContract
export class ResponseStatus
{
    // @DataMember(Order=1)
    errorCode: string;

    // @DataMember(Order=2)
    message: string;

    // @DataMember(Order=3)
    stackTrace: string;

    // @DataMember(Order=4)
    errors: ResponseError[];

    // @DataMember(Order=5)
    meta: { [index:string]: string; };
}

export type ExternalEnum = "Foo" | "Bar" | "Baz";

export type ExternalEnum2 = "Uno" | "Due" | "Tre";

export class ExternalType
{
    externalEnum2: ExternalEnum2;
}

export type ExternalEnum3 = "Un" | "Deux" | "Trois";

export class MetadataTestNestedChild
{
    name: string;
}

export class MetadataTestChild
{
    name: string;
    results: MetadataTestNestedChild[];
}

export class MenuItemExampleItem
{
    // @DataMember(Order=1)
    // @ApiMember()
    name1: string;
}

export class MenuItemExample
{
    // @DataMember(Order=1)
    // @ApiMember()
    name1: string;

    menuItemExampleItem: MenuItemExampleItem;
}

// @DataContract
export class MenuExample
{
    // @DataMember(Order=1)
    // @ApiMember()
    menuItemExample1: MenuItemExample;
}

export class NestedClass
{
    value: string;
}

export class ListResult
{
    result: string;
}

export class ArrayResult
{
    result: string;
}

export type EnumType = "Value1" | "Value2";

// @Flags()
export enum EnumFlags
{
    Value1 = 1,
    Value2 = 2,
    Value3 = 4,
}

export class Poco
{
    name: string;
}

export class AllCollectionTypes
{
    intArray: number[];
    intList: number[];
    stringArray: string[];
    stringList: string[];
    pocoArray: Poco[];
    pocoList: Poco[];
    pocoLookup: { [index:string]: Poco[]; };
    pocoLookupMap: { [index:string]: { [index:string]: Poco; }[]; };
}

export class SubType
{
    id: number;
    name: string;
}

export class HelloBase
{
    id: number;
}

export class HelloResponseBase
{
    refId: number;
}

export class HelloBase_1<T>
{
    items: T[];
    counts: number[];
}

export class Item
{
    value: string;
}

export class HelloWithReturnResponse
{
    result: string;
}

export class HelloType
{
    result: string;
}

export interface IPoco
{
    name?: string;
}

export interface IEmptyInterface
{
}

export class EmptyClass
{
}

export class InnerType
{
    id: number;
    name: string;
}

export type InnerEnum = "Foo" | "Bar" | "Baz";

export type DayOfWeek = "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday";

// @DataContract
export type ScopeType = "Global" | "Sale";

export class PingService
{
}

export class ReturnedDto
{
    id: number;
}

export interface IAuthTokens
{
    provider?: string;
    userId?: string;
    accessToken?: string;
    accessTokenSecret?: string;
    refreshToken?: string;
    refreshTokenExpiry?: string;
    requestToken?: string;
    requestTokenSecret?: string;
    items?: { [index:string]: string; };
}

// @DataContract
export class AuthUserSession
{
    // @DataMember(Order=1)
    referrerUrl: string;

    // @DataMember(Order=2)
    id: string;

    // @DataMember(Order=3)
    userAuthId: string;

    // @DataMember(Order=4)
    userAuthName: string;

    // @DataMember(Order=5)
    userName: string;

    // @DataMember(Order=6)
    twitterUserId: string;

    // @DataMember(Order=7)
    twitterScreenName: string;

    // @DataMember(Order=8)
    facebookUserId: string;

    // @DataMember(Order=9)
    facebookUserName: string;

    // @DataMember(Order=10)
    firstName: string;

    // @DataMember(Order=11)
    lastName: string;

    // @DataMember(Order=12)
    displayName: string;

    // @DataMember(Order=13)
    company: string;

    // @DataMember(Order=14)
    email: string;

    // @DataMember(Order=15)
    primaryEmail: string;

    // @DataMember(Order=16)
    phoneNumber: string;

    // @DataMember(Order=17)
    birthDate: string;

    // @DataMember(Order=18)
    birthDateRaw: string;

    // @DataMember(Order=19)
    address: string;

    // @DataMember(Order=20)
    address2: string;

    // @DataMember(Order=21)
    city: string;

    // @DataMember(Order=22)
    state: string;

    // @DataMember(Order=23)
    country: string;

    // @DataMember(Order=24)
    culture: string;

    // @DataMember(Order=25)
    fullName: string;

    // @DataMember(Order=26)
    gender: string;

    // @DataMember(Order=27)
    language: string;

    // @DataMember(Order=28)
    mailAddress: string;

    // @DataMember(Order=29)
    nickname: string;

    // @DataMember(Order=30)
    postalCode: string;

    // @DataMember(Order=31)
    timeZone: string;

    // @DataMember(Order=32)
    requestTokenSecret: string;

    // @DataMember(Order=33)
    createdAt: string;

    // @DataMember(Order=34)
    lastModified: string;

    // @DataMember(Order=35)
    roles: string[];

    // @DataMember(Order=36)
    permissions: string[];

    // @DataMember(Order=37)
    isAuthenticated: boolean;

    // @DataMember(Order=38)
    fromToken: boolean;

    // @DataMember(Order=39)
    profileUrl: string;

    // @DataMember(Order=40)
    sequence: string;

    // @DataMember(Order=41)
    tag: number;

    // @DataMember(Order=42)
    providerOAuthAccess: IAuthTokens[];
}

export class CustomUserSession extends AuthUserSession
{
    // @DataMember
    customName: string;

    // @DataMember
    customInfo: string;
}

export class UnAuthInfo
{
    customInfo: string;
}

export class Channel
{
    name: string;
    value: string;
}

export class Device
{
    id: number;
    type: string;
    timeStamp: number;
    channels: Channel[];
}

export class Logger
{
    id: number;
    devices: Device[];
}

export class RequestLogEntry
{
    id: number;
    dateTime: string;
    httpMethod: string;
    absoluteUri: string;
    pathInfo: string;
    requestBody: string;
    requestDto: Object;
    userAuthId: string;
    sessionId: string;
    ipAddress: string;
    forwardedFor: string;
    referer: string;
    headers: { [index:string]: string; };
    formData: { [index:string]: string; };
    items: { [index:string]: string; };
    session: Object;
    responseDto: Object;
    errorResponse: Object;
    requestDuration: string;
}

export class QueryBase
{
    // @DataMember(Order=1)
    skip: number;

    // @DataMember(Order=2)
    take: number;

    // @DataMember(Order=3)
    orderBy: string;

    // @DataMember(Order=4)
    orderByDesc: string;

    // @DataMember(Order=5)
    include: string;

    // @DataMember(Order=6)
    fields: string;

    // @DataMember(Order=7)
    meta: { [index:string]: string; };
}

export class QueryBase_1<T> extends QueryBase
{
}

export class OnlyDefinedInGenericType
{
    id: number;
    name: string;
}

export class QueryBase_2<From, Into> extends QueryBase
{
}

export class OnlyDefinedInGenericTypeFrom
{
    id: number;
    name: string;
}

export class OnlyDefinedInGenericTypeInto
{
    id: number;
    name: string;
}

export class Rockstar
{
    id: number;
    firstName: string;
    lastName: string;
    age: number;
}

export class TypesGroup
{
}

export class CustomHttpErrorResponse
{
    custom: string;
    responseStatus: ResponseStatus;
}

export class ThrowTypeResponse
{
    responseStatus: ResponseStatus;
}

export class ThrowValidationResponse
{
    age: number;
    required: string;
    email: string;
    responseStatus: ResponseStatus;
}

export class ThrowBusinessErrorResponse
{
    responseStatus: ResponseStatus;
}

export class ExternalOperationResponse
{
    result: string;
}

export class ExternalOperation2Response
{
    externalType: ExternalType;
}

export class ExternalReturnTypeResponse
{
    externalEnum3: ExternalEnum3;
}

export class Account
{
    name: string;
}

export class Project
{
    account: string;
    name: string;
}

export class MetadataTestResponse
{
    id: number;
    results: MetadataTestChild[];
}

// @DataContract
export class GetExampleResponse
{
    // @DataMember(Order=1)
    responseStatus: ResponseStatus;

    // @DataMember(Order=2)
    // @ApiMember()
    menuExample1: MenuExample;
}

export class GetRandomIdsResponse
{
    results: string[];
}

export class HelloResponse
{
    result: string;
}

/**
* Description on HelloAllResponse type
*/
// @DataContract
export class HelloAnnotatedResponse
{
    // @DataMember
    result: string;
}

export class AllTypes
{
    id: number;
    nullableId: number;
    byte: number;
    short: number;
    int: number;
    long: number;
    uShort: number;
    uInt: number;
    uLong: number;
    float: number;
    double: number;
    decimal: number;
    string: string;
    dateTime: string;
    timeSpan: string;
    dateTimeOffset: string;
    guid: string;
    char: string;
    nullableDateTime: string;
    nullableTimeSpan: string;
    stringList: string[];
    stringArray: string[];
    stringMap: { [index:string]: string; };
    intStringMap: { [index:number]: string; };
    subType: SubType;
}

export class HelloAllTypesResponse
{
    result: string;
    allTypes: AllTypes;
    allCollectionTypes: AllCollectionTypes;
}

export class HelloDateTime implements IReturn<HelloDateTime>
{
    dateTime: string;
    createResponse() { return new HelloDateTime(); }
    getTypeName() { return "HelloDateTime"; }
}

// @DataContract
export class HelloWithDataContractResponse
{
    // @DataMember(Name="result", Order=1, IsRequired=true, EmitDefaultValue=false)
    result: string;
}

/**
* Description on HelloWithDescriptionResponse type
*/
export class HelloWithDescriptionResponse
{
    result: string;
}

export class HelloWithInheritanceResponse extends HelloResponseBase
{
    result: string;
}

export class HelloWithAlternateReturnResponse extends HelloWithReturnResponse
{
    altResult: string;
}

export class HelloWithRouteResponse
{
    result: string;
}

export class HelloWithTypeResponse
{
    result: HelloType;
}

export class HelloInnerTypesResponse
{
    innerType: InnerType;
    innerEnum: InnerEnum;
}

export class HelloVerbResponse
{
    result: string;
}

export class EnumResponse
{
    operator: ScopeType;
}

// @Route("/hellotypes/{Name}")
export class HelloTypes implements IReturn<HelloTypes>
{
    string: string;
    bool: boolean;
    int: number;
    createResponse() { return new HelloTypes(); }
    getTypeName() { return "HelloTypes"; }
}

export class PingResponse
{
    responses: { [index:string]: ResponseStatus; };
    responseStatus: ResponseStatus;
}

export class RequiresRoleResponse
{
    result: string;
    responseStatus: ResponseStatus;
}

export class SendVerbResponse
{
    id: number;
    pathInfo: string;
    requestMethod: string;
}

export class GetSessionResponse
{
    result: CustomUserSession;
    unAuthInfo: UnAuthInfo;
    responseStatus: ResponseStatus;
}

export class StoreLogsResponse
{
    existingLogs: Logger[];
    responseStatus: ResponseStatus;
}

export class TestAuthResponse
{
    userId: string;
    sessionId: string;
    userName: string;
    displayName: string;
    responseStatus: ResponseStatus;
}

// @Route("/wait/{ForMs}")
export class Wait implements IReturn<Wait>
{
    forMs: number;
    createResponse() { return new Wait(); }
    getTypeName() { return "Wait"; }
}

// @Route("/echo/types")
export class EchoTypes implements IReturn<EchoTypes>
{
    byte: number;
    short: number;
    int: number;
    long: number;
    uShort: number;
    uInt: number;
    uLong: number;
    float: number;
    double: number;
    decimal: number;
    string: string;
    dateTime: string;
    timeSpan: string;
    dateTimeOffset: string;
    guid: string;
    char: string;
    createResponse() { return new EchoTypes(); }
    getTypeName() { return "EchoTypes"; }
}

// @Route("/echo/collections")
export class EchoCollections implements IReturn<EchoCollections>
{
    stringList: string[];
    stringArray: string[];
    stringMap: { [index:string]: string; };
    intStringMap: { [index:number]: string; };
    createResponse() { return new EchoCollections(); }
    getTypeName() { return "EchoCollections"; }
}

export class EchoComplexTypes implements IReturn<EchoComplexTypes>
{
    subType: SubType;
    createResponse() { return new EchoComplexTypes(); }
    getTypeName() { return "EchoComplexTypes"; }
}

// @DataContract
export class RequestLogsResponse
{
    // @DataMember(Order=1)
    results: RequestLogEntry[];

    // @DataMember(Order=2)
    usage: { [index:string]: string; };

    // @DataMember(Order=3)
    responseStatus: ResponseStatus;
}

// @DataContract
export class AuthenticateResponse
{
    // @DataMember(Order=1)
    userId: string;

    // @DataMember(Order=2)
    sessionId: string;

    // @DataMember(Order=3)
    userName: string;

    // @DataMember(Order=4)
    displayName: string;

    // @DataMember(Order=5)
    referrerUrl: string;

    // @DataMember(Order=6)
    bearerToken: string;

    // @DataMember(Order=7)
    responseStatus: ResponseStatus;

    // @DataMember(Order=8)
    meta: { [index:string]: string; };
}

// @DataContract
export class AssignRolesResponse
{
    // @DataMember(Order=1)
    allRoles: string[];

    // @DataMember(Order=2)
    allPermissions: string[];

    // @DataMember(Order=3)
    responseStatus: ResponseStatus;
}

// @DataContract
export class UnAssignRolesResponse
{
    // @DataMember(Order=1)
    allRoles: string[];

    // @DataMember(Order=2)
    allPermissions: string[];

    // @DataMember(Order=3)
    responseStatus: ResponseStatus;
}

// @DataContract
export class QueryResponse<T>
{
    // @DataMember(Order=1)
    offset: number;

    // @DataMember(Order=2)
    total: number;

    // @DataMember(Order=3)
    results: T[];

    // @DataMember(Order=4)
    meta: { [index:string]: string; };

    // @DataMember(Order=5)
    responseStatus: ResponseStatus;
}

export class CustomHttpError implements IReturn<CustomHttpErrorResponse>
{
    statusCode: number;
    statusDescription: string;
    createResponse() { return new CustomHttpErrorResponse(); }
    getTypeName() { return "CustomHttpError"; }
}

// @Route("/throwhttperror/{Status}")
export class ThrowHttpError
{
    status: number;
    message: string;
}

// @Route("/throw404")
// @Route("/throw404/{Message}")
export class Throw404
{
    message: string;
}

// @Route("/throwcustom400")
// @Route("/throwcustom400/{Message}")
export class ThrowCustom400
{
    message: string;
}

// @Route("/throw/{Type}")
export class ThrowType implements IReturn<ThrowTypeResponse>
{
    type: string;
    message: string;
    createResponse() { return new ThrowTypeResponse(); }
    getTypeName() { return "ThrowType"; }
}

// @Route("/throwvalidation")
export class ThrowValidation implements IReturn<ThrowValidationResponse>
{
    age: number;
    required: string;
    email: string;
    createResponse() { return new ThrowValidationResponse(); }
    getTypeName() { return "ThrowValidation"; }
}

// @Route("/throwbusinesserror")
export class ThrowBusinessError implements IReturn<ThrowBusinessErrorResponse>
{
    createResponse() { return new ThrowBusinessErrorResponse(); }
    getTypeName() { return "ThrowBusinessError"; }
}

export class ExternalOperation implements IReturn<ExternalOperationResponse>
{
    id: number;
    name: string;
    externalEnum: ExternalEnum;
    createResponse() { return new ExternalOperationResponse(); }
    getTypeName() { return "ExternalOperation"; }
}

export class ExternalOperation2 implements IReturn<ExternalOperation2Response>
{
    id: number;
    createResponse() { return new ExternalOperation2Response(); }
    getTypeName() { return "ExternalOperation2"; }
}

export class ExternalOperation3 implements IReturn<ExternalReturnTypeResponse>
{
    id: number;
    createResponse() { return new ExternalReturnTypeResponse(); }
    getTypeName() { return "ExternalOperation3"; }
}

export class ExternalOperation4
{
    id: number;
}

// @Route("/{Path*}")
export class RootPathRoutes
{
    path: string;
}

export class GetAccount implements IReturn<Account>
{
    account: string;
    createResponse() { return new Account(); }
    getTypeName() { return "GetAccount"; }
}

export class GetProject implements IReturn<Project>
{
    account: string;
    project: string;
    createResponse() { return new Project(); }
    getTypeName() { return "GetProject"; }
}

// @Route("/image-stream")
export class ImageAsStream
{
    format: string;
}

// @Route("/image-bytes")
export class ImageAsBytes
{
    format: string;
}

// @Route("/image-custom")
export class ImageAsCustomResult
{
    format: string;
}

// @Route("/image-response")
export class ImageWriteToResponse
{
    format: string;
}

// @Route("/image-file")
export class ImageAsFile
{
    format: string;
}

// @Route("/image-redirect")
export class ImageAsRedirect
{
    format: string;
}

// @Route("/image-draw/{Name}")
export class DrawImage
{
    name: string;
    format: string;
    width: number;
    height: number;
    fontSize: number;
    foreground: string;
    background: string;
}

// @Route("/metadatatest")
export class MetadataTest implements IReturn<MetadataTestResponse>
{
    id: number;
    createResponse() { return new MetadataTestResponse(); }
    getTypeName() { return "MetadataTest"; }
}

// @Route("/metadatatest-array")
export class MetadataTestArray implements IReturn<Array<MetadataTestChild>>
{
    id: number;
    createResponse() { return new Array<MetadataTestChild>(); }
    getTypeName() { return "MetadataTestArray"; }
}

// @Route("/example", "GET")
// @DataContract
export class GetExample implements IReturn<GetExampleResponse>
{
    createResponse() { return new GetExampleResponse(); }
    getTypeName() { return "GetExample"; }
}

// @Route("/randomids")
export class GetRandomIds implements IReturn<GetRandomIdsResponse>
{
    take: number;
    createResponse() { return new GetRandomIdsResponse(); }
    getTypeName() { return "GetRandomIds"; }
}

// @Route("/textfile-test")
export class TextFileTest
{
    asAttachment: boolean;
}

// @Route("/hello")
// @Route("/hello/{Name}")
export class Hello implements IReturn<HelloResponse>
{
    // @Required()
    name: string;

    title: string;
    createResponse() { return new HelloResponse(); }
    getTypeName() { return "Hello"; }
}

/**
* Description on HelloAll type
*/
// @DataContract
export class HelloAnnotated implements IReturn<HelloAnnotatedResponse>
{
    // @DataMember
    name: string;
    createResponse() { return new HelloAnnotatedResponse(); }
    getTypeName() { return "HelloAnnotated"; }
}

export class HelloWithNestedClass implements IReturn<HelloResponse>
{
    name: string;
    nestedClassProp: NestedClass;
    createResponse() { return new HelloResponse(); }
    getTypeName() { return "HelloWithNestedClass"; }
}

export class HelloList implements IReturn<Array<ListResult>>
{
    names: string[];
    createResponse() { return new Array<ListResult>(); }
    getTypeName() { return "HelloList"; }
}

export class HelloArray implements IReturn<Array<ArrayResult>>
{
    names: string[];
    createResponse() { return new Array<ArrayResult>(); }
    getTypeName() { return "HelloArray"; }
}

export class HelloWithEnum
{
    enumProp: EnumType;
    nullableEnumProp: EnumType;
    enumFlags: EnumFlags;
}

export class RestrictedAttributes
{
    id: number;
    name: string;
    hello: Hello;
}

/**
* AllowedAttributes Description
*/
// @Route("/allowed-attributes", "GET")
// @Api("AllowedAttributes Description")
// @ApiResponse(400, "Your request was not understood")
// @DataContract
export class AllowedAttributes
{
    /**
    * Range Description
    */
    // @DataMember(Name="Aliased")
    // @ApiMember(ParameterType="path", Description="Range Description", DataType="double", IsRequired=true)
    range: number;
}

// @Route("/all-types")
export class HelloAllTypes implements IReturn<HelloAllTypesResponse>
{
    name: string;
    allTypes: AllTypes;
    allCollectionTypes: AllCollectionTypes;
    createResponse() { return new HelloAllTypesResponse(); }
    getTypeName() { return "HelloAllTypes"; }
}

export class HelloString implements IReturn<string>
{
    name: string;
    createResponse() { return ""; }
    getTypeName() { return "HelloString"; }
}

export class HelloVoid
{
    name: string;
}

// @DataContract
export class HelloWithDataContract implements IReturn<HelloWithDataContractResponse>
{
    // @DataMember(Name="name", Order=1, IsRequired=true, EmitDefaultValue=false)
    name: string;

    // @DataMember(Name="id", Order=2, EmitDefaultValue=false)
    id: number;
    createResponse() { return new HelloWithDataContractResponse(); }
    getTypeName() { return "HelloWithDataContract"; }
}

/**
* Description on HelloWithDescription type
*/
export class HelloWithDescription implements IReturn<HelloWithDescriptionResponse>
{
    name: string;
    createResponse() { return new HelloWithDescriptionResponse(); }
    getTypeName() { return "HelloWithDescription"; }
}

export class HelloWithInheritance extends HelloBase implements IReturn<HelloWithInheritanceResponse>
{
    name: string;
    createResponse() { return new HelloWithInheritanceResponse(); }
    getTypeName() { return "HelloWithInheritance"; }
}

export class HelloWithGenericInheritance extends HelloBase_1<Poco>
{
    result: string;
}

export class HelloWithGenericInheritance2 extends HelloBase_1<Hello>
{
    result: string;
}

export class HelloWithNestedInheritance extends HelloBase_1<Item>
{
}

export class HelloWithReturn implements IReturn<HelloWithAlternateReturnResponse>
{
    name: string;
    createResponse() { return new HelloWithAlternateReturnResponse(); }
    getTypeName() { return "HelloWithReturn"; }
}

// @Route("/helloroute")
export class HelloWithRoute implements IReturn<HelloWithRouteResponse>
{
    name: string;
    createResponse() { return new HelloWithRouteResponse(); }
    getTypeName() { return "HelloWithRoute"; }
}

export class HelloWithType implements IReturn<HelloWithTypeResponse>
{
    name: string;
    createResponse() { return new HelloWithTypeResponse(); }
    getTypeName() { return "HelloWithType"; }
}

export class HelloInterface
{
    poco: IPoco;
    emptyInterface: IEmptyInterface;
    emptyClass: EmptyClass;
}

export class HelloInnerTypes implements IReturn<HelloInnerTypesResponse>
{
    createResponse() { return new HelloInnerTypesResponse(); }
    getTypeName() { return "HelloInnerTypes"; }
}

export class HelloBuiltin
{
    dayOfWeek: DayOfWeek;
}

export class HelloGet implements IReturn<HelloVerbResponse>
{
    id: number;
    createResponse() { return new HelloVerbResponse(); }
    getTypeName() { return "HelloGet"; }
}

export class HelloPost extends HelloBase implements IReturn<HelloVerbResponse>
{
    createResponse() { return new HelloVerbResponse(); }
    getTypeName() { return "HelloPost"; }
}

export class HelloPut implements IReturn<HelloVerbResponse>
{
    id: number;
    createResponse() { return new HelloVerbResponse(); }
    getTypeName() { return "HelloPut"; }
}

export class HelloDelete implements IReturn<HelloVerbResponse>
{
    id: number;
    createResponse() { return new HelloVerbResponse(); }
    getTypeName() { return "HelloDelete"; }
}

export class HelloPatch implements IReturn<HelloVerbResponse>
{
    id: number;
    createResponse() { return new HelloVerbResponse(); }
    getTypeName() { return "HelloPatch"; }
}

export class HelloReturnVoid implements IReturnVoid
{
    id: number;
    createResponse() {}
    getTypeName() { return "HelloReturnVoid"; }
}

export class EnumRequest implements IReturn<EnumResponse>
{
    operator: ScopeType;
    createResponse() { return new EnumResponse(); }
    getTypeName() { return "EnumRequest"; }
}

// @Route("/ping")
export class Ping implements IReturn<PingResponse>
{
    createResponse() { return new PingResponse(); }
    getTypeName() { return "Ping"; }
}

// @Route("/reset-connections")
export class ResetConnections
{
}

// @Route("/requires-role")
export class RequiresRole implements IReturn<RequiresRoleResponse>
{
    createResponse() { return new RequiresRoleResponse(); }
    getTypeName() { return "RequiresRole"; }
}

// @Route("/return/string")
export class ReturnString implements IReturn<string>
{
    data: string;
    createResponse() { return ""; }
    getTypeName() { return "ReturnString"; }
}

// @Route("/return/bytes")
export class ReturnBytes implements IReturn<Uint8Array>
{
    data: Uint8Array;
    createResponse() { return new Uint8Array(0); }
    getTypeName() { return "ReturnBytes"; }
}

// @Route("/return/stream")
export class ReturnStream implements IReturn<Blob>
{
    data: Uint8Array;
    createResponse() { return new Blob(); }
    getTypeName() { return "ReturnStream"; }
}

// @Route("/return/httpwebresponse")
export class ReturnHttpWebResponse implements IReturn<Blob>
{
    data: Uint8Array;
    createResponse() { return new Blob(); }
    getTypeName() { return "ReturnHttpWebResponse"; }
}

// @Route("/Request1", "GET")
export class GetRequest1 implements IReturn<Array<ReturnedDto>>
{
    createResponse() { return new Array<ReturnedDto>(); }
    getTypeName() { return "GetRequest1"; }
}

// @Route("/Request2", "GET")
export class GetRequest2 implements IReturn<Array<ReturnedDto>>
{
    createResponse() { return new Array<ReturnedDto>(); }
    getTypeName() { return "GetRequest2"; }
}

export class SendDefault implements IReturn<SendVerbResponse>
{
    id: number;
    createResponse() { return new SendVerbResponse(); }
    getTypeName() { return "SendDefault"; }
}

// @Route("/sendrestget/{Id}", "GET")
export class SendRestGet implements IReturn<SendVerbResponse>
{
    id: number;
    createResponse() { return new SendVerbResponse(); }
    getTypeName() { return "SendRestGet"; }
}

export class SendGet implements IReturn<SendVerbResponse>
{
    id: number;
    createResponse() { return new SendVerbResponse(); }
    getTypeName() { return "SendGet"; }
}

export class SendPost implements IReturn<SendVerbResponse>
{
    id: number;
    createResponse() { return new SendVerbResponse(); }
    getTypeName() { return "SendPost"; }
}

export class SendPut implements IReturn<SendVerbResponse>
{
    id: number;
    createResponse() { return new SendVerbResponse(); }
    getTypeName() { return "SendPut"; }
}

// @Route("/session")
export class GetSession implements IReturn<GetSessionResponse>
{
    createResponse() { return new GetSessionResponse(); }
    getTypeName() { return "GetSession"; }
}

// @Route("/session/edit/{CustomName}")
export class UpdateSession implements IReturn<GetSessionResponse>
{
    customName: string;
    createResponse() { return new GetSessionResponse(); }
    getTypeName() { return "UpdateSession"; }
}

export class StoreLogs implements IReturn<StoreLogsResponse>
{
    loggers: Logger[];
    createResponse() { return new StoreLogsResponse(); }
    getTypeName() { return "StoreLogs"; }
}

// @Route("/testauth")
export class TestAuth implements IReturn<TestAuthResponse>
{
    createResponse() { return new TestAuthResponse(); }
    getTypeName() { return "TestAuth"; }
}

// @Route("/void-response")
export class TestVoidResponse
{
}

// @Route("/null-response")
export class TestNullResponse
{
}

// @Route("/requestlogs")
// @DataContract
export class RequestLogs implements IReturn<RequestLogsResponse>
{
    // @DataMember(Order=1)
    beforeSecs: number;

    // @DataMember(Order=2)
    afterSecs: number;

    // @DataMember(Order=3)
    ipAddress: string;

    // @DataMember(Order=4)
    forwardedFor: string;

    // @DataMember(Order=5)
    userAuthId: string;

    // @DataMember(Order=6)
    sessionId: string;

    // @DataMember(Order=7)
    referer: string;

    // @DataMember(Order=8)
    pathInfo: string;

    // @DataMember(Order=9)
    ids: number[];

    // @DataMember(Order=10)
    beforeId: number;

    // @DataMember(Order=11)
    afterId: number;

    // @DataMember(Order=12)
    hasResponse: boolean;

    // @DataMember(Order=13)
    withErrors: boolean;

    // @DataMember(Order=14)
    skip: number;

    // @DataMember(Order=15)
    take: number;

    // @DataMember(Order=16)
    enableSessionTracking: boolean;

    // @DataMember(Order=17)
    enableResponseTracking: boolean;

    // @DataMember(Order=18)
    enableErrorTracking: boolean;

    // @DataMember(Order=19)
    durationLongerThan: string;

    // @DataMember(Order=20)
    durationLessThan: string;
    createResponse() { return new RequestLogsResponse(); }
    getTypeName() { return "RequestLogs"; }
}

// @Route("/auth")
// @Route("/auth/{provider}")
// @Route("/authenticate")
// @Route("/authenticate/{provider}")
// @DataContract
export class Authenticate implements IReturn<AuthenticateResponse>
{
    // @DataMember(Order=1)
    provider: string;

    // @DataMember(Order=2)
    state: string;

    // @DataMember(Order=3)
    oauth_token: string;

    // @DataMember(Order=4)
    oauth_verifier: string;

    // @DataMember(Order=5)
    userName: string;

    // @DataMember(Order=6)
    password: string;

    // @DataMember(Order=7)
    rememberMe: boolean;

    // @DataMember(Order=8)
    continue: string;

    // @DataMember(Order=9)
    nonce: string;

    // @DataMember(Order=10)
    uri: string;

    // @DataMember(Order=11)
    response: string;

    // @DataMember(Order=12)
    qop: string;

    // @DataMember(Order=13)
    nc: string;

    // @DataMember(Order=14)
    cnonce: string;

    // @DataMember(Order=15)
    useTokenCookie: boolean;

    // @DataMember(Order=16)
    meta: { [index:string]: string; };
    createResponse() { return new AuthenticateResponse(); }
    getTypeName() { return "Authenticate"; }
}

// @Route("/assignroles")
// @DataContract
export class AssignRoles implements IReturn<AssignRolesResponse>
{
    // @DataMember(Order=1)
    userName: string;

    // @DataMember(Order=2)
    permissions: string[];

    // @DataMember(Order=3)
    roles: string[];
    createResponse() { return new AssignRolesResponse(); }
    getTypeName() { return "AssignRoles"; }
}

// @Route("/unassignroles")
// @DataContract
export class UnAssignRoles implements IReturn<UnAssignRolesResponse>
{
    // @DataMember(Order=1)
    userName: string;

    // @DataMember(Order=2)
    permissions: string[];

    // @DataMember(Order=3)
    roles: string[];
    createResponse() { return new UnAssignRolesResponse(); }
    getTypeName() { return "UnAssignRoles"; }
}

export class QueryPocoBase extends QueryBase_1<OnlyDefinedInGenericType> implements IReturn<QueryResponse<OnlyDefinedInGenericType>>
{
    id: number;
    createResponse() { return new QueryResponse<OnlyDefinedInGenericType>(); }
    getTypeName() { return "QueryPocoBase"; }
}

export class QueryPocoIntoBase extends QueryBase_2<OnlyDefinedInGenericTypeFrom, OnlyDefinedInGenericTypeInto> implements IReturn<QueryResponse<OnlyDefinedInGenericTypeInto>>
{
    id: number;
    createResponse() { return new QueryResponse<OnlyDefinedInGenericTypeInto>(); }
    getTypeName() { return "QueryPocoIntoBase"; }
}

// @Route("/rockstars")
export class QueryRockstars extends QueryBase_1<Rockstar> implements IReturn<QueryResponse<Rockstar>>
{
    createResponse() { return new QueryResponse<Rockstar>(); }
    getTypeName() { return "QueryRockstars"; }
}
