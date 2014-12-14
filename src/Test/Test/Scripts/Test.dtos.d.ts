/* Options:
Date: 2014-12-08 18:55:17
Version: 1
BaseUrl: http://localhost:56500

GlobalNamespace: dtos
//MakePropertiesOptional: True
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
*/

declare module dtos
{

    interface IReturnVoid
    {
    }

    interface IReturn<T>
    {
    }

    // @DataContract
    interface ResponseStatus
    {
        // @DataMember(Order=1)
        ErrorCode?:string;

        // @DataMember(Order=2)
        Message?:string;

        // @DataMember(Order=3)
        StackTrace?:string;

        // @DataMember(Order=4)
        Errors?:ResponseError[];
    }

    interface MetadataTestChild
    {
        Name?:string;
        Results?:MetadataTestNestedChild[];
    }

    interface NestedClass
    {
        Value?:string;
    }

    enum EnumType
    {
        Value1,
        Value2,
    }

    // @Flags()
    enum EnumFlags
    {
        Value1 = 1,
        Value2 = 2,
        Value3 = 4,
    }

    interface AllTypes
    {
        Id?:number;
        NullableId?:number;
        Byte?:number;
        Short?:number;
        Int?:number;
        Long?:number;
        UShort?:number;
        UInt?:number;
        ULong?:number;
        Float?:number;
        Double?:number;
        Decimal?:number;
        String?:string;
        DateTime?:string;
        TimeSpan?:string;
        NullableDateTime?:string;
        NullableTimeSpan?:string;
        StringList?:string[];
        StringArray?:string[];
        StringMap?:{ [index:string]: string; };
        IntStringMap?:{ [index:number]: string; };
        SubType?:SubType;
    }

    interface AllCollectionTypes
    {
        IntArray?:number[];
        IntList?:number[];
        StringArray?:string[];
        StringList?:string[];
        PocoArray?:Poco[];
        PocoList?:Poco[];
    }

    interface HelloBase
    {
        Id?:number;
    }

    interface HelloResponseBase
    {
        RefId?:number;
    }

    interface Poco
    {
        Name?:string;
    }

    interface HelloBase_1<T>
    {
        Items?:T[];
        Counts?:number[];
    }

    interface Item
    {
        Value?:string;
    }

    interface InheritedItem
    {
        Name?:string;
    }

    interface HelloWithReturnResponse
    {
        Result?:string;
    }

    interface HelloType
    {
        Result?:string;
    }

    interface IPoco
    {
        Name?:string;
    }

    interface IEmptyInterface
    {
    }

    interface EmptyClass
    {
    }

    interface CustomUserSession extends AuthUserSession
    {
        // @DataMember
        CustomName?:string;

        // @DataMember
        CustomInfo?:string;
    }

    interface UnAuthInfo
    {
        CustomInfo?:string;
    }

    interface RequestLogEntry
    {
        Id?:number;
        DateTime?:string;
        HttpMethod?:string;
        AbsoluteUri?:string;
        PathInfo?:string;
        RequestBody?:string;
        RequestDto?:Object;
        UserAuthId?:string;
        SessionId?:string;
        IpAddress?:string;
        ForwardedFor?:string;
        Referer?:string;
        Headers?:{ [index:string]: string; };
        FormData?:{ [index:string]: string; };
        Items?:{ [index:string]: string; };
        Session?:Object;
        ResponseDto?:Object;
        ErrorResponse?:Object;
        RequestDuration?:string;
    }

    // @DataContract
    interface ResponseError
    {
        // @DataMember(Order=1, EmitDefaultValue=false)
        ErrorCode?:string;

        // @DataMember(Order=2, EmitDefaultValue=false)
        FieldName?:string;

        // @DataMember(Order=3, EmitDefaultValue=false)
        Message?:string;
    }

    interface MetadataTestNestedChild
    {
        Name?:string;
    }

    interface SubType
    {
        Id?:number;
        Name?:string;
    }

    interface IAuthTokens
    {
        Provider?:string;
        UserId?:string;
        AccessToken?:string;
        AccessTokenSecret?:string;
        RefreshToken?:string;
        RefreshTokenExpiry?:string;
        RequestToken?:string;
        RequestTokenSecret?:string;
        Items?:{ [index:string]: string; };
    }

    // @DataContract
    interface AuthUserSession
    {
        // @DataMember(Order=1)
        ReferrerUrl?:string;

        // @DataMember(Order=2)
        Id?:string;

        // @DataMember(Order=3)
        UserAuthId?:string;

        // @DataMember(Order=4)
        UserAuthName?:string;

        // @DataMember(Order=5)
        UserName?:string;

        // @DataMember(Order=6)
        TwitterUserId?:string;

        // @DataMember(Order=7)
        TwitterScreenName?:string;

        // @DataMember(Order=8)
        FacebookUserId?:string;

        // @DataMember(Order=9)
        FacebookUserName?:string;

        // @DataMember(Order=10)
        FirstName?:string;

        // @DataMember(Order=11)
        LastName?:string;

        // @DataMember(Order=12)
        DisplayName?:string;

        // @DataMember(Order=13)
        Company?:string;

        // @DataMember(Order=14)
        Email?:string;

        // @DataMember(Order=15)
        PrimaryEmail?:string;

        // @DataMember(Order=16)
        PhoneNumber?:string;

        // @DataMember(Order=17)
        BirthDate?:string;

        // @DataMember(Order=18)
        BirthDateRaw?:string;

        // @DataMember(Order=19)
        Address?:string;

        // @DataMember(Order=20)
        Address2?:string;

        // @DataMember(Order=21)
        City?:string;

        // @DataMember(Order=22)
        State?:string;

        // @DataMember(Order=23)
        Country?:string;

        // @DataMember(Order=24)
        Culture?:string;

        // @DataMember(Order=25)
        FullName?:string;

        // @DataMember(Order=26)
        Gender?:string;

        // @DataMember(Order=27)
        Language?:string;

        // @DataMember(Order=28)
        MailAddress?:string;

        // @DataMember(Order=29)
        Nickname?:string;

        // @DataMember(Order=30)
        PostalCode?:string;

        // @DataMember(Order=31)
        TimeZone?:string;

        // @DataMember(Order=32)
        RequestTokenSecret?:string;

        // @DataMember(Order=33)
        CreatedAt?:string;

        // @DataMember(Order=34)
        LastModified?:string;

        // @DataMember(Order=35)
        ProviderOAuthAccess?:IAuthTokens[];

        // @DataMember(Order=36)
        Roles?:string[];

        // @DataMember(Order=37)
        Permissions?:string[];

        // @DataMember(Order=38)
        IsAuthenticated?:boolean;

        // @DataMember(Order=39)
        Sequence?:string;

        // @DataMember(Order=40)
        Tag?:number;
    }

    interface CustomHttpErrorResponse
    {
        Custom?:string;
        ResponseStatus?:ResponseStatus;
    }

    interface Account
    {
        Name?:string;
    }

    interface Project
    {
        Account?:string;
        Name?:string;
    }

    interface MetadataTestResponse
    {
        Id?:number;
        Results?:MetadataTestChild[];
    }

    interface GetRandomIdsResponse
    {
        Results?:string[];
    }

    interface HelloResponse
    {
        Result?:string;
    }

    /**
    * Description on HelloAllResponse type
    */
    // @DataContract
    interface HelloAnnotatedResponse
    {
        // @DataMember
        Result?:string;
    }

    interface HelloAllTypesResponse
    {
        Result?:string;
        AllTypes?:AllTypes;
        AllCollectionTypes?:AllCollectionTypes;
    }

    // @DataContract
    interface HelloWithDataContractResponse
    {
        // @DataMember(Name="result", Order=1, IsRequired=true, EmitDefaultValue=false)
        Result?:string;
    }

    /**
    * Description on HelloWithDescriptionResponse type
    */
    interface HelloWithDescriptionResponse
    {
        Result?:string;
    }

    interface HelloWithInheritanceResponse extends HelloResponseBase
    {
        Result?:string;
    }

    interface HelloWithAlternateReturnResponse extends HelloWithReturnResponse
    {
        AltResult?:string;
    }

    interface HelloWithRouteResponse
    {
        Result?:string;
    }

    interface HelloWithTypeResponse
    {
        Result?:HelloType;
    }

    interface PingResponse
    {
        Responses?:{ [index:string]: ResponseStatus; };
        ResponseStatus?:ResponseStatus;
    }

    interface RequiresRoleResponse
    {
        Result?:string;
        ResponseStatus?:ResponseStatus;
    }

    interface GetSessionResponse
    {
        Result?:CustomUserSession;
        UnAuthInfo?:UnAuthInfo;
        ResponseStatus?:ResponseStatus;
    }

    // @DataContract
    interface RequestLogsResponse
    {
        // @DataMember(Order=1)
        Results?:RequestLogEntry[];

        // @DataMember(Order=2)
        Usage?:{ [index:string]: string; };

        // @DataMember(Order=3)
        ResponseStatus?:ResponseStatus;
    }

    // @DataContract
    interface AuthenticateResponse
    {
        // @DataMember(Order=1)
        UserId?:string;

        // @DataMember(Order=2)
        SessionId?:string;

        // @DataMember(Order=3)
        UserName?:string;

        // @DataMember(Order=4)
        DisplayName?:string;

        // @DataMember(Order=5)
        ReferrerUrl?:string;

        // @DataMember(Order=6)
        ResponseStatus?:ResponseStatus;

        // @DataMember(Order=7)
        Meta?:{ [index:string]: string; };
    }

    interface AssignRolesResponse
    {
        AllRoles?:string[];
        AllPermissions?:string[];
        ResponseStatus?:ResponseStatus;
    }

    interface UnAssignRolesResponse
    {
        AllRoles?:string[];
        AllPermissions?:string[];
        ResponseStatus?:ResponseStatus;
    }

    interface CustomHttpError extends IReturn<CustomHttpError>
    {
        StatusCode?:number;
        StatusDescription?:string;
    }

    // @Route("/{Path*}")
    interface RootPathRoutes
    {
        Path?:string;
    }

    interface GetAccount extends IReturn<Account>
    {
        Account?:string;
    }

    interface GetProject extends IReturn<Project>
    {
        Account?:string;
        Project?:string;
    }

    // @Route("/image-stream")
    interface ImageAsStream
    {
        Format?:string;
    }

    // @Route("/image-bytes")
    interface ImageAsBytes
    {
        Format?:string;
    }

    // @Route("/image-custom")
    interface ImageAsCustomResult
    {
        Format?:string;
    }

    // @Route("/image-response")
    interface ImageWriteToResponse
    {
        Format?:string;
    }

    // @Route("/image-file")
    interface ImageAsFile
    {
        Format?:string;
    }

    // @Route("/image-redirect")
    interface ImageAsRedirect
    {
        Format?:string;
    }

    // @Route("/image-draw/{Name}")
    interface DrawImage extends IReturn<DrawImage>
    {
        Name?:string;
        Format?:string;
        Width?:number;
        Height?:number;
        FontSize?:number;
        Foreground?:string;
        Background?:string;
    }

    interface MetadataTest extends IReturn<MetadataTestResponse>
    {
        Id?:number;
    }

    // @Route("/randomids")
    interface GetRandomIds extends IReturn<GetRandomIds>
    {
        Take?:number;
    }

    // @Route("/hello/{Name}")
    // @Route("/hello")
    interface Hello extends IReturn<HelloResponse>
    {
        // @Required()
        Name:string;

        Title?:string;
    }

    /**
    * Description on HelloAll type
    */
    // @DataContract
    interface HelloAnnotated extends IReturn<HelloAnnotatedResponse>
    {
        // @DataMember
        Name?:string;
    }

    interface HelloWithNestedClass extends IReturn<HelloResponse>
    {
        Name?:string;
        NestedClassProp?:NestedClass;
    }

    interface HelloWithEnum
    {
        EnumProp?:EnumType;
        NullableEnumProp?:EnumType;
        EnumFlags?:EnumFlags;
    }

    interface RestrictedAttributes
    {
        Id?:number;
        Name?:string;
        Hello?:Hello;
    }

    /**
    * AllowedAttributes Description
    */
    // @Route("/allowed-attributes", "GET")
    // @ApiResponse(400, "Your request was not understood")
    // @Api("AllowedAttributes Description")
    // @DataContract
    interface AllowedAttributes
    {
        // @Required()
        // @Default(5)
        Id:number;

        // @DataMember(Name="Aliased")
        // @ApiMember(ParameterType="path", Description="Range Description", DataType="double", IsRequired=true)
        Range?:number;

        // @References(typeof(Hello))
        // @StringLength(20)
        // @Meta("Foo", "Bar")
        Name?:string;
    }

    interface HelloAllTypes extends IReturn<HelloAllTypes>
    {
        Name?:string;
        AllTypes?:AllTypes;
        AllCollectionTypes?:AllCollectionTypes;
    }

    interface HelloString
    {
        Name?:string;
    }

    interface HelloVoid
    {
        Name?:string;
    }

    // @DataContract
    interface HelloWithDataContract extends IReturn<HelloWithDataContract>
    {
        // @DataMember(Name="name", Order=1, IsRequired=true, EmitDefaultValue=false)
        Name?:string;

        // @DataMember(Name="id", Order=2, EmitDefaultValue=false)
        Id?:number;
    }

    /**
    * Description on HelloWithDescription type
    */
    interface HelloWithDescription extends IReturn<HelloWithDescription>
    {
        Name?:string;
    }

    interface HelloWithInheritance extends HelloBase, IReturn<HelloWithInheritance>
    {
        Name?:string;
    }

    interface HelloWithGenericInheritance extends HelloBase_1<Poco>
    {
        Result?:string;
    }

    interface HelloWithGenericInheritance2 extends HelloBase_1<Hello>
    {
        Result?:string;
    }

    interface HelloWithNestedInheritance extends HelloBase_1<Item>
    {
    }

    interface HelloWithListInheritance extends Array<InheritedItem>
    {
    }

    interface HelloWithReturn extends IReturn<HelloWithAlternateReturnResponse>
    {
        Name?:string;
    }

    // @Route("/helloroute")
    interface HelloWithRoute extends IReturn<HelloWithRoute>
    {
        Name?:string;
    }

    interface HelloWithType extends IReturn<HelloWithType>
    {
        Name?:string;
    }

    interface HelloInterface
    {
        Poco?:IPoco;
        EmptyInterface?:IEmptyInterface;
        EmptyClass?:EmptyClass;
    }

    // @Route("/ping")
    interface Ping extends IReturn<Ping>
    {
    }

    // @Route("/reset-connections")
    interface ResetConnections
    {
    }

    // @Route("/requires-role")
    interface RequiresRole extends IReturn<RequiresRole>
    {
    }

    // @Route("/session")
    interface GetSession extends IReturn<GetSessionResponse>
    {
    }

    // @Route("/session/edit/{CustomName}")
    interface UpdateSession extends IReturn<GetSessionResponse>
    {
        CustomName?:string;
    }

    // @Route("/postman")
    interface Postman
    {
        Label?:string[];
        ExportSession?:boolean;
        ssid?:string;
        sspid?:string;
        ssopt?:string;
    }

    // @Route("/requestlogs")
    // @DataContract
    interface RequestLogs extends IReturn<RequestLogs>
    {
        // @DataMember(Order=1)
        BeforeSecs?:number;

        // @DataMember(Order=2)
        AfterSecs?:number;

        // @DataMember(Order=3)
        IpAddress?:string;

        // @DataMember(Order=4)
        ForwardedFor?:string;

        // @DataMember(Order=5)
        UserAuthId?:string;

        // @DataMember(Order=6)
        SessionId?:string;

        // @DataMember(Order=7)
        Referer?:string;

        // @DataMember(Order=8)
        PathInfo?:string;

        // @DataMember(Order=9)
        Ids?:number[];

        // @DataMember(Order=10)
        BeforeId?:number;

        // @DataMember(Order=11)
        AfterId?:number;

        // @DataMember(Order=12)
        HasResponse?:boolean;

        // @DataMember(Order=13)
        WithErrors?:boolean;

        // @DataMember(Order=14)
        Skip?:number;

        // @DataMember(Order=15)
        Take?:number;

        // @DataMember(Order=16)
        EnableSessionTracking?:boolean;

        // @DataMember(Order=17)
        EnableResponseTracking?:boolean;

        // @DataMember(Order=18)
        EnableErrorTracking?:boolean;

        // @DataMember(Order=19)
        DurationLongerThan?:string;

        // @DataMember(Order=20)
        DurationLessThan?:string;
    }

    // @Route("/auth")
    // @Route("/auth/{provider}")
    // @Route("/authenticate")
    // @Route("/authenticate/{provider}")
    // @DataContract
    interface Authenticate extends IReturn<AuthenticateResponse>
    {
        // @DataMember(Order=1)
        provider?:string;

        // @DataMember(Order=2)
        State?:string;

        // @DataMember(Order=3)
        oauth_token?:string;

        // @DataMember(Order=4)
        oauth_verifier?:string;

        // @DataMember(Order=5)
        UserName?:string;

        // @DataMember(Order=6)
        Password?:string;

        // @DataMember(Order=7)
        RememberMe?:boolean;

        // @DataMember(Order=8)
        Continue?:string;

        // @DataMember(Order=9)
        nonce?:string;

        // @DataMember(Order=10)
        uri?:string;

        // @DataMember(Order=11)
        response?:string;

        // @DataMember(Order=12)
        qop?:string;

        // @DataMember(Order=13)
        nc?:string;

        // @DataMember(Order=14)
        cnonce?:string;
    }

    // @Route("/assignroles")
    interface AssignRoles extends IReturn<AssignRolesResponse>
    {
        UserName?:string;
        Permissions?:string[];
        Roles?:string[];
    }

    // @Route("/unassignroles")
    interface UnAssignRoles extends IReturn<UnAssignRolesResponse>
    {
        UserName?:string;
        Permissions?:string[];
        Roles?:string[];
    }

}
