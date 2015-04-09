/* Options:
Date: 2015-04-09 13:36:53
Version: 1
BaseUrl: http://localhost:56500

GlobalNamespace: dtos
//MakePropertiesOptional: True
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//IncludeTypes: 
//ExcludeTypes: 
//DefaultImports: 
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
        errorCode?: string;

        // @DataMember(Order=2)
        message?: string;

        // @DataMember(Order=3)
        stackTrace?: string;

        // @DataMember(Order=4)
        errors?: ResponseError[];
    }

    enum ExternalEnum
    {
        foo,
        bar,
        baz,
    }

    interface ExternalType
    {
        externalEnum2?: ExternalEnum2;
    }

    enum ExternalEnum3
    {
        un,
        deux,
        trois,
    }

    interface MetadataTestChild
    {
        name?: string;
        results?: MetadataTestNestedChild[];
    }

    // @DataContract
    interface MenuExample
    {
        // @DataMember(Order=1)
        // @ApiMember()
        menuItemExample1?: MenuItemExample;
    }

    interface NestedClass
    {
        value?: string;
    }

    interface ListResult
    {
        result?: string;
    }

    interface ArrayResult
    {
        result?: string;
    }

    enum EnumType
    {
        value1,
        value2,
    }

    // @Flags()
    enum EnumFlags
    {
        value1 = 1,
        value2 = 2,
        value3 = 4,
    }

    interface AllTypes
    {
        id?: number;
        nullableId?: number;
        byte?: number;
        short?: number;
        int?: number;
        long?: number;
        uShort?: number;
        uInt?: number;
        uLong?: number;
        float?: number;
        double?: number;
        decimal?: number;
        string?: string;
        dateTime?: string;
        timeSpan?: string;
        dateTimeOffset?: DateTimeOffset;
        guid?: Guid;
        char?: Char;
        nullableDateTime?: string;
        nullableTimeSpan?: string;
        stringList?: string[];
        stringArray?: string[];
        stringMap?: { [index:string]: string; };
        intStringMap?: { [index:number]: string; };
        subType?: SubType;
    }

    interface AllCollectionTypes
    {
        intArray?: number[];
        intList?: number[];
        stringArray?: string[];
        stringList?: string[];
        pocoArray?: Poco[];
        pocoList?: Poco[];
        pocoLookup?: { [index:string]: Poco[]; };
        pocoLookupMap?: { [index:string]: { [index:string]: Poco; }[]; };
    }

    interface HelloBase
    {
        id?: number;
    }

    interface HelloResponseBase
    {
        refId?: number;
    }

    interface Poco
    {
        name?: string;
    }

    interface HelloBase_1<T>
    {
        items?: T[];
        counts?: number[];
    }

    interface Item
    {
        value?: string;
    }

    interface InheritedItem
    {
        name?: string;
    }

    interface HelloWithReturnResponse
    {
        result?: string;
    }

    interface HelloType
    {
        result?: string;
    }

    interface IPoco
    {
        name?: string;
    }

    interface IEmptyInterface
    {
    }

    interface EmptyClass
    {
    }

    interface InnerType
    {
        id?: number;
        name?: string;
    }

    enum InnerEnum
    {
        foo,
        bar,
        baz,
    }

    interface PingService
    {
    }

    interface CustomUserSession extends AuthUserSession
    {
        // @DataMember
        customName?: string;

        // @DataMember
        customInfo?: string;
    }

    interface UnAuthInfo
    {
        customInfo?: string;
    }

    interface RequestLogEntry
    {
        id?: number;
        dateTime?: string;
        httpMethod?: string;
        absoluteUri?: string;
        pathInfo?: string;
        requestBody?: string;
        requestDto?: Object;
        userAuthId?: string;
        sessionId?: string;
        ipAddress?: string;
        forwardedFor?: string;
        referer?: string;
        headers?: { [index:string]: string; };
        formData?: { [index:string]: string; };
        items?: { [index:string]: string; };
        session?: Object;
        responseDto?: Object;
        errorResponse?: Object;
        requestDuration?: string;
    }

    // @DataContract
    interface ResponseError
    {
        // @DataMember(Order=1, EmitDefaultValue=false)
        errorCode?: string;

        // @DataMember(Order=2, EmitDefaultValue=false)
        fieldName?: string;

        // @DataMember(Order=3, EmitDefaultValue=false)
        message?: string;
    }

    enum ExternalEnum2
    {
        uno,
        due,
        tre,
    }

    interface MetadataTestNestedChild
    {
        name?: string;
    }

    interface MenuItemExample
    {
        // @DataMember(Order=1)
        // @ApiMember()
        name1?: string;

        menuItemExampleItem?: MenuItemExampleItem;
    }

    interface SubType
    {
        id?: number;
        name?: string;
    }

    interface TypesGroup
    {
    }

    interface IAuthTokens
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
    interface AuthUserSession
    {
        // @DataMember(Order=1)
        referrerUrl?: string;

        // @DataMember(Order=2)
        id?: string;

        // @DataMember(Order=3)
        userAuthId?: string;

        // @DataMember(Order=4)
        userAuthName?: string;

        // @DataMember(Order=5)
        userName?: string;

        // @DataMember(Order=6)
        twitterUserId?: string;

        // @DataMember(Order=7)
        twitterScreenName?: string;

        // @DataMember(Order=8)
        facebookUserId?: string;

        // @DataMember(Order=9)
        facebookUserName?: string;

        // @DataMember(Order=10)
        firstName?: string;

        // @DataMember(Order=11)
        lastName?: string;

        // @DataMember(Order=12)
        displayName?: string;

        // @DataMember(Order=13)
        company?: string;

        // @DataMember(Order=14)
        email?: string;

        // @DataMember(Order=15)
        primaryEmail?: string;

        // @DataMember(Order=16)
        phoneNumber?: string;

        // @DataMember(Order=17)
        birthDate?: string;

        // @DataMember(Order=18)
        birthDateRaw?: string;

        // @DataMember(Order=19)
        address?: string;

        // @DataMember(Order=20)
        address2?: string;

        // @DataMember(Order=21)
        city?: string;

        // @DataMember(Order=22)
        state?: string;

        // @DataMember(Order=23)
        country?: string;

        // @DataMember(Order=24)
        culture?: string;

        // @DataMember(Order=25)
        fullName?: string;

        // @DataMember(Order=26)
        gender?: string;

        // @DataMember(Order=27)
        language?: string;

        // @DataMember(Order=28)
        mailAddress?: string;

        // @DataMember(Order=29)
        nickname?: string;

        // @DataMember(Order=30)
        postalCode?: string;

        // @DataMember(Order=31)
        timeZone?: string;

        // @DataMember(Order=32)
        requestTokenSecret?: string;

        // @DataMember(Order=33)
        createdAt?: string;

        // @DataMember(Order=34)
        lastModified?: string;

        // @DataMember(Order=35)
        roles?: string[];

        // @DataMember(Order=36)
        permissions?: string[];

        // @DataMember(Order=37)
        isAuthenticated?: boolean;

        // @DataMember(Order=38)
        sequence?: string;

        // @DataMember(Order=39)
        tag?: number;

        // @DataMember(Order=40)
        providerOAuthAccess?: IAuthTokens[];
    }

    interface MenuItemExampleItem
    {
        // @DataMember(Order=1)
        // @ApiMember()
        name1?: string;
    }

    interface CustomHttpErrorResponse
    {
        custom?: string;
        responseStatus?: ResponseStatus;
    }

    interface ThrowTypeResponse
    {
        responseStatus?: ResponseStatus;
    }

    interface ThrowValidationResponse
    {
        age?: number;
        required?: string;
        email?: string;
        responseStatus?: ResponseStatus;
    }

    interface ExternalOperationResponse
    {
        result?: string;
    }

    interface ExternalOperation2Response
    {
        externalType?: ExternalType;
    }

    interface ExternalReturnTypeResponse
    {
        externalEnum3?: ExternalEnum3;
    }

    interface Account
    {
        name?: string;
    }

    interface Project
    {
        account?: string;
        name?: string;
    }

    interface MetadataTestResponse
    {
        id?: number;
        results?: MetadataTestChild[];
    }

    // @DataContract
    interface GetExampleResponse
    {
        // @DataMember(Order=1)
        responseStatus?: ResponseStatus;

        // @DataMember(Order=2)
        // @ApiMember()
        menuExample1?: MenuExample;
    }

    interface GetRandomIdsResponse
    {
        results?: string[];
    }

    interface HelloResponse
    {
        result?: string;
    }

    /**
    * Description on HelloAllResponse type
    */
    // @DataContract
    interface HelloAnnotatedResponse
    {
        // @DataMember
        result?: string;
    }

    interface HelloAllTypesResponse
    {
        result?: string;
        allTypes?: AllTypes;
        allCollectionTypes?: AllCollectionTypes;
    }

    // @DataContract
    interface HelloWithDataContractResponse
    {
        // @DataMember(Name="result", Order=1, IsRequired=true, EmitDefaultValue=false)
        result?: string;
    }

    /**
    * Description on HelloWithDescriptionResponse type
    */
    interface HelloWithDescriptionResponse
    {
        result?: string;
    }

    interface HelloWithInheritanceResponse extends HelloResponseBase
    {
        result?: string;
    }

    interface HelloWithAlternateReturnResponse extends HelloWithReturnResponse
    {
        altResult?: string;
    }

    interface HelloWithRouteResponse
    {
        result?: string;
    }

    interface HelloWithTypeResponse
    {
        result?: HelloType;
    }

    interface HelloInnerTypesResponse
    {
        innerType?: InnerType;
        innerEnum?: InnerEnum;
    }

    interface PingResponse
    {
        responses?: { [index:string]: ResponseStatus; };
        responseStatus?: ResponseStatus;
    }

    interface RequiresRoleResponse
    {
        result?: string;
        responseStatus?: ResponseStatus;
    }

    interface GetSessionResponse
    {
        result?: CustomUserSession;
        unAuthInfo?: UnAuthInfo;
        responseStatus?: ResponseStatus;
    }

    // @DataContract
    interface RequestLogsResponse
    {
        // @DataMember(Order=1)
        results?: RequestLogEntry[];

        // @DataMember(Order=2)
        usage?: { [index:string]: string; };

        // @DataMember(Order=3)
        responseStatus?: ResponseStatus;
    }

    // @DataContract
    interface AuthenticateResponse
    {
        // @DataMember(Order=1)
        userId?: string;

        // @DataMember(Order=2)
        sessionId?: string;

        // @DataMember(Order=3)
        userName?: string;

        // @DataMember(Order=4)
        displayName?: string;

        // @DataMember(Order=5)
        referrerUrl?: string;

        // @DataMember(Order=6)
        responseStatus?: ResponseStatus;

        // @DataMember(Order=7)
        meta?: { [index:string]: string; };
    }

    interface AssignRolesResponse
    {
        allRoles?: string[];
        allPermissions?: string[];
        responseStatus?: ResponseStatus;
    }

    interface UnAssignRolesResponse
    {
        allRoles?: string[];
        allPermissions?: string[];
        responseStatus?: ResponseStatus;
    }

    interface CustomHttpError extends IReturn<CustomHttpErrorResponse>
    {
        statusCode?: number;
        statusDescription?: string;
    }

    // @Route("/throwhttperror/{Status}")
    interface ThrowHttpError
    {
        status?: number;
        message?: string;
    }

    // @Route("/throw404")
    // @Route("/throw404/{Message}")
    interface Throw404
    {
        message?: string;
    }

    // @Route("/throw/{Type}")
    interface ThrowType extends IReturn<ThrowTypeResponse>
    {
        type?: string;
        message?: string;
    }

    // @Route("/throwvalidation")
    interface ThrowValidation extends IReturn<ThrowValidationResponse>
    {
        age?: number;
        required?: string;
        email?: string;
    }

    interface ExternalOperation extends IReturn<ExternalOperationResponse>
    {
        id?: number;
        name?: string;
        externalEnum?: ExternalEnum;
    }

    interface ExternalOperation2 extends IReturn<ExternalOperation2Response>
    {
        id?: number;
    }

    interface ExternalOperation3 extends IReturn<ExternalReturnTypeResponse>
    {
        id?: number;
    }

    interface ExternalOperation4
    {
        id?: number;
    }

    // @Route("/{Path*}")
    interface RootPathRoutes
    {
        path?: string;
    }

    interface GetAccount extends IReturn<Account>
    {
        account?: string;
    }

    interface GetProject extends IReturn<Project>
    {
        account?: string;
        project?: string;
    }

    // @Route("/image-stream")
    interface ImageAsStream
    {
        format?: string;
    }

    // @Route("/image-bytes")
    interface ImageAsBytes
    {
        format?: string;
    }

    // @Route("/image-custom")
    interface ImageAsCustomResult
    {
        format?: string;
    }

    // @Route("/image-response")
    interface ImageWriteToResponse
    {
        format?: string;
    }

    // @Route("/image-file")
    interface ImageAsFile
    {
        format?: string;
    }

    // @Route("/image-redirect")
    interface ImageAsRedirect
    {
        format?: string;
    }

    // @Route("/image-draw/{Name}")
    interface DrawImage
    {
        name?: string;
        format?: string;
        width?: number;
        height?: number;
        fontSize?: number;
        foreground?: string;
        background?: string;
    }

    // @Route("/metadatatest")
    interface MetadataTest extends IReturn<MetadataTestResponse>
    {
        id?: number;
    }

    // @Route("/metadatatest-array")
    interface MetadataTestArray extends IReturn<MetadataTestChild[]>
    {
        id?: number;
    }

    // @Route("/example", "GET")
    // @DataContract
    interface GetExample extends IReturn<GetExampleResponse>
    {
    }

    // @Route("/randomids")
    interface GetRandomIds extends IReturn<GetRandomIdsResponse>
    {
        take?: number;
    }

    // @Route("/textfile-test")
    interface TextFileTest
    {
        asAttachment?: boolean;
    }

    // @Route("/hello/{Name}")
    // @Route("/hello")
    interface Hello extends IReturn<HelloResponse>
    {
        // @Required()
        name: string;

        title?: string;
    }

    /**
    * Description on HelloAll type
    */
    // @DataContract
    interface HelloAnnotated extends IReturn<HelloAnnotatedResponse>
    {
        // @DataMember
        name?: string;
    }

    interface HelloWithNestedClass extends IReturn<HelloResponse>
    {
        name?: string;
        nestedClassProp?: NestedClass;
    }

    interface HelloList extends IReturn<ListResult[]>
    {
        names?: string[];
    }

    interface HelloArray extends IReturn<ArrayResult[]>
    {
        names?: string[];
    }

    interface HelloWithEnum
    {
        enumProp?: EnumType;
        nullableEnumProp?: EnumType;
        enumFlags?: EnumFlags;
    }

    interface RestrictedAttributes
    {
        id?: number;
        name?: string;
        hello?: Hello;
    }

    /**
    * AllowedAttributes Description
    */
    // @Route("/allowed-attributes", "GET")
    // @Api("AllowedAttributes Description")
    // @ApiResponse(400, "Your request was not understood")
    // @DataContract
    interface AllowedAttributes
    {
        // @DataMember(Name="Aliased")
        // @ApiMember(Description="Range Description", ParameterType="path", DataType="double", IsRequired=true)
        range?: number;
    }

    interface HelloAllTypes extends IReturn<HelloAllTypesResponse>
    {
        name?: string;
        allTypes?: AllTypes;
        allCollectionTypes?: AllCollectionTypes;
    }

    interface HelloString
    {
        name?: string;
    }

    interface HelloVoid
    {
        name?: string;
    }

    // @DataContract
    interface HelloWithDataContract extends IReturn<HelloWithDataContractResponse>
    {
        // @DataMember(Name="name", Order=1, IsRequired=true, EmitDefaultValue=false)
        name?: string;

        // @DataMember(Name="id", Order=2, EmitDefaultValue=false)
        id?: number;
    }

    /**
    * Description on HelloWithDescription type
    */
    interface HelloWithDescription extends IReturn<HelloWithDescriptionResponse>
    {
        name?: string;
    }

    interface HelloWithInheritance extends HelloBase, IReturn<HelloWithInheritanceResponse>
    {
        name?: string;
    }

    interface HelloWithGenericInheritance extends HelloBase_1<Poco>
    {
        result?: string;
    }

    interface HelloWithGenericInheritance2 extends HelloBase_1<Hello>
    {
        result?: string;
    }

    interface HelloWithNestedInheritance extends HelloBase_1<Item>
    {
    }

    interface HelloWithListInheritance extends Array<InheritedItem>
    {
    }

    interface HelloWithReturn extends IReturn<HelloWithAlternateReturnResponse>
    {
        name?: string;
    }

    // @Route("/helloroute")
    interface HelloWithRoute extends IReturn<HelloWithRouteResponse>
    {
        name?: string;
    }

    interface HelloWithType extends IReturn<HelloWithTypeResponse>
    {
        name?: string;
    }

    interface HelloInterface
    {
        poco?: IPoco;
        emptyInterface?: IEmptyInterface;
        emptyClass?: EmptyClass;
    }

    interface HelloInnerTypes extends IReturn<HelloInnerTypesResponse>
    {
    }

    // @Route("/ping")
    interface Ping extends IReturn<PingResponse>
    {
    }

    // @Route("/reset-connections")
    interface ResetConnections
    {
    }

    // @Route("/requires-role")
    interface RequiresRole extends IReturn<RequiresRoleResponse>
    {
    }

    // @Route("/session")
    interface GetSession extends IReturn<GetSessionResponse>
    {
    }

    // @Route("/session/edit/{CustomName}")
    interface UpdateSession extends IReturn<GetSessionResponse>
    {
        customName?: string;
    }

    // @Route("/void-response")
    interface TestVoidResponse
    {
    }

    // @Route("/null-response")
    interface TestNullResponse
    {
    }

    // @Route("/requestlogs")
    // @DataContract
    interface RequestLogs extends IReturn<RequestLogsResponse>
    {
        // @DataMember(Order=1)
        beforeSecs?: number;

        // @DataMember(Order=2)
        afterSecs?: number;

        // @DataMember(Order=3)
        ipAddress?: string;

        // @DataMember(Order=4)
        forwardedFor?: string;

        // @DataMember(Order=5)
        userAuthId?: string;

        // @DataMember(Order=6)
        sessionId?: string;

        // @DataMember(Order=7)
        referer?: string;

        // @DataMember(Order=8)
        pathInfo?: string;

        // @DataMember(Order=9)
        ids?: number[];

        // @DataMember(Order=10)
        beforeId?: number;

        // @DataMember(Order=11)
        afterId?: number;

        // @DataMember(Order=12)
        hasResponse?: boolean;

        // @DataMember(Order=13)
        withErrors?: boolean;

        // @DataMember(Order=14)
        skip?: number;

        // @DataMember(Order=15)
        take?: number;

        // @DataMember(Order=16)
        enableSessionTracking?: boolean;

        // @DataMember(Order=17)
        enableResponseTracking?: boolean;

        // @DataMember(Order=18)
        enableErrorTracking?: boolean;

        // @DataMember(Order=19)
        durationLongerThan?: string;

        // @DataMember(Order=20)
        durationLessThan?: string;
    }

    // @Route("/auth")
    // @Route("/auth/{provider}")
    // @Route("/authenticate")
    // @Route("/authenticate/{provider}")
    // @DataContract
    interface Authenticate extends IReturn<AuthenticateResponse>
    {
        // @DataMember(Order=1)
        provider?: string;

        // @DataMember(Order=2)
        state?: string;

        // @DataMember(Order=3)
        oauth_token?: string;

        // @DataMember(Order=4)
        oauth_verifier?: string;

        // @DataMember(Order=5)
        userName?: string;

        // @DataMember(Order=6)
        password?: string;

        // @DataMember(Order=7)
        rememberMe?: boolean;

        // @DataMember(Order=8)
        continue?: string;

        // @DataMember(Order=9)
        nonce?: string;

        // @DataMember(Order=10)
        uri?: string;

        // @DataMember(Order=11)
        response?: string;

        // @DataMember(Order=12)
        qop?: string;

        // @DataMember(Order=13)
        nc?: string;

        // @DataMember(Order=14)
        cnonce?: string;

        // @DataMember(Order=15)
        meta?: { [index:string]: string; };
    }

    // @Route("/assignroles")
    interface AssignRoles extends IReturn<AssignRolesResponse>
    {
        userName?: string;
        permissions?: string[];
        roles?: string[];
    }

    // @Route("/unassignroles")
    interface UnAssignRoles extends IReturn<UnAssignRolesResponse>
    {
        userName?: string;
        permissions?: string[];
        roles?: string[];
    }

}
