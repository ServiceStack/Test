/* Options:
Date: 2016-09-28 14:01:37
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
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var ResponseStatus, ExternalType, MetadataTestChild, MenuExample, NestedClass, ListResult, ArrayResult, EnumFlags, AllCollectionTypes, SubType, HelloBase, HelloResponseBase, Poco, HelloBase_1, Item, HelloWithReturnResponse, HelloType, EmptyClass, InnerType, PingService, AuthUserSession, CustomUserSession, UnAuthInfo, Logger, RequestLogEntry, QueryBase, QueryBase_1, OnlyDefinedInGenericType, QueryBase_2, OnlyDefinedInGenericTypeFrom, OnlyDefinedInGenericTypeInto, Rockstar, ResponseError, MetadataTestNestedChild, MenuItemExample, TypesGroup, Device, MenuItemExampleItem, Channel, CustomHttpErrorResponse, ThrowTypeResponse, ThrowValidationResponse, ThrowBusinessErrorResponse, ExternalOperationResponse, ExternalOperation2Response, ExternalReturnTypeResponse, Account, Project, MetadataTestResponse, GetExampleResponse, GetRandomIdsResponse, HelloResponse, HelloAnnotatedResponse, HelloAllTypesResponse, HelloDateTime, HelloWithDataContractResponse, HelloWithDescriptionResponse, HelloWithInheritanceResponse, HelloWithAlternateReturnResponse, HelloWithRouteResponse, HelloWithTypeResponse, HelloInnerTypesResponse, HelloVerbResponse, EnumResponse, PingResponse, RequiresRoleResponse, SendVerbResponse, GetSessionResponse, StoreLogsResponse, TestAuthResponse, Wait, EchoTypes, EchoCollections, EchoComplexTypes, RequestLogsResponse, AuthenticateResponse, AssignRolesResponse, UnAssignRolesResponse, QueryResponse, CustomHttpError, ThrowHttpError, Throw404, ThrowCustom400, ThrowType, ThrowValidation, ThrowBusinessError, ExternalOperation, ExternalOperation2, ExternalOperation3, ExternalOperation4, RootPathRoutes, GetAccount, GetProject, ImageAsStream, ImageAsBytes, ImageAsCustomResult, ImageWriteToResponse, ImageAsFile, ImageAsRedirect, DrawImage, MetadataTest, MetadataTestArray, GetExample, GetRandomIds, TextFileTest, Hello, HelloAnnotated, HelloWithNestedClass, HelloList, HelloArray, HelloWithEnum, RestrictedAttributes, AllowedAttributes, HelloAllTypes, AllTypes, HelloString, HelloVoid, HelloWithDataContract, HelloWithDescription, HelloWithInheritance, HelloWithGenericInheritance, HelloWithGenericInheritance2, HelloWithNestedInheritance, HelloWithReturn, HelloWithRoute, HelloWithType, HelloInterface, HelloInnerTypes, HelloBuiltin, HelloGet, HelloPost, HelloPut, HelloDelete, HelloPatch, HelloReturnVoid, EnumRequest, Ping, ResetConnections, RequiresRole, SendDefault, SendRestGet, SendGet, SendPost, SendPut, GetSession, UpdateSession, StoreLogs, TestAuth, TestVoidResponse, TestNullResponse, RequestLogs, Authenticate, AssignRoles, UnAssignRoles, QueryPocoBase, QueryPocoIntoBase, QueryRockstars;
    return {
        setters:[],
        execute: function() {
            // @DataContract
            ResponseStatus = (function () {
                function ResponseStatus() {
                }
                return ResponseStatus;
            }());
            exports_1("ResponseStatus", ResponseStatus);
            ExternalType = (function () {
                function ExternalType() {
                }
                return ExternalType;
            }());
            exports_1("ExternalType", ExternalType);
            MetadataTestChild = (function () {
                function MetadataTestChild() {
                }
                return MetadataTestChild;
            }());
            exports_1("MetadataTestChild", MetadataTestChild);
            // @DataContract
            MenuExample = (function () {
                function MenuExample() {
                }
                return MenuExample;
            }());
            exports_1("MenuExample", MenuExample);
            NestedClass = (function () {
                function NestedClass() {
                }
                return NestedClass;
            }());
            exports_1("NestedClass", NestedClass);
            ListResult = (function () {
                function ListResult() {
                }
                return ListResult;
            }());
            exports_1("ListResult", ListResult);
            ArrayResult = (function () {
                function ArrayResult() {
                }
                return ArrayResult;
            }());
            exports_1("ArrayResult", ArrayResult);
            // @Flags()
            (function (EnumFlags) {
                EnumFlags[EnumFlags["Value1"] = 1] = "Value1";
                EnumFlags[EnumFlags["Value2"] = 2] = "Value2";
                EnumFlags[EnumFlags["Value3"] = 4] = "Value3";
            })(EnumFlags || (EnumFlags = {}));
            exports_1("EnumFlags", EnumFlags);
            AllCollectionTypes = (function () {
                function AllCollectionTypes() {
                }
                return AllCollectionTypes;
            }());
            exports_1("AllCollectionTypes", AllCollectionTypes);
            SubType = (function () {
                function SubType() {
                }
                return SubType;
            }());
            exports_1("SubType", SubType);
            HelloBase = (function () {
                function HelloBase() {
                }
                return HelloBase;
            }());
            exports_1("HelloBase", HelloBase);
            HelloResponseBase = (function () {
                function HelloResponseBase() {
                }
                return HelloResponseBase;
            }());
            exports_1("HelloResponseBase", HelloResponseBase);
            Poco = (function () {
                function Poco() {
                }
                return Poco;
            }());
            exports_1("Poco", Poco);
            HelloBase_1 = (function () {
                function HelloBase_1() {
                }
                return HelloBase_1;
            }());
            exports_1("HelloBase_1", HelloBase_1);
            Item = (function () {
                function Item() {
                }
                return Item;
            }());
            exports_1("Item", Item);
            HelloWithReturnResponse = (function () {
                function HelloWithReturnResponse() {
                }
                return HelloWithReturnResponse;
            }());
            exports_1("HelloWithReturnResponse", HelloWithReturnResponse);
            HelloType = (function () {
                function HelloType() {
                }
                return HelloType;
            }());
            exports_1("HelloType", HelloType);
            EmptyClass = (function () {
                function EmptyClass() {
                }
                return EmptyClass;
            }());
            exports_1("EmptyClass", EmptyClass);
            InnerType = (function () {
                function InnerType() {
                }
                return InnerType;
            }());
            exports_1("InnerType", InnerType);
            PingService = (function () {
                function PingService() {
                }
                return PingService;
            }());
            exports_1("PingService", PingService);
            // @DataContract
            AuthUserSession = (function () {
                function AuthUserSession() {
                }
                return AuthUserSession;
            }());
            exports_1("AuthUserSession", AuthUserSession);
            CustomUserSession = (function (_super) {
                __extends(CustomUserSession, _super);
                function CustomUserSession() {
                    _super.apply(this, arguments);
                }
                return CustomUserSession;
            }(AuthUserSession));
            exports_1("CustomUserSession", CustomUserSession);
            UnAuthInfo = (function () {
                function UnAuthInfo() {
                }
                return UnAuthInfo;
            }());
            exports_1("UnAuthInfo", UnAuthInfo);
            Logger = (function () {
                function Logger() {
                }
                return Logger;
            }());
            exports_1("Logger", Logger);
            RequestLogEntry = (function () {
                function RequestLogEntry() {
                }
                return RequestLogEntry;
            }());
            exports_1("RequestLogEntry", RequestLogEntry);
            QueryBase = (function () {
                function QueryBase() {
                }
                return QueryBase;
            }());
            exports_1("QueryBase", QueryBase);
            QueryBase_1 = (function (_super) {
                __extends(QueryBase_1, _super);
                function QueryBase_1() {
                    _super.apply(this, arguments);
                }
                return QueryBase_1;
            }(QueryBase));
            exports_1("QueryBase_1", QueryBase_1);
            OnlyDefinedInGenericType = (function () {
                function OnlyDefinedInGenericType() {
                }
                return OnlyDefinedInGenericType;
            }());
            exports_1("OnlyDefinedInGenericType", OnlyDefinedInGenericType);
            QueryBase_2 = (function (_super) {
                __extends(QueryBase_2, _super);
                function QueryBase_2() {
                    _super.apply(this, arguments);
                }
                return QueryBase_2;
            }(QueryBase));
            exports_1("QueryBase_2", QueryBase_2);
            OnlyDefinedInGenericTypeFrom = (function () {
                function OnlyDefinedInGenericTypeFrom() {
                }
                return OnlyDefinedInGenericTypeFrom;
            }());
            exports_1("OnlyDefinedInGenericTypeFrom", OnlyDefinedInGenericTypeFrom);
            OnlyDefinedInGenericTypeInto = (function () {
                function OnlyDefinedInGenericTypeInto() {
                }
                return OnlyDefinedInGenericTypeInto;
            }());
            exports_1("OnlyDefinedInGenericTypeInto", OnlyDefinedInGenericTypeInto);
            Rockstar = (function () {
                function Rockstar() {
                }
                return Rockstar;
            }());
            exports_1("Rockstar", Rockstar);
            // @DataContract
            ResponseError = (function () {
                function ResponseError() {
                }
                return ResponseError;
            }());
            exports_1("ResponseError", ResponseError);
            MetadataTestNestedChild = (function () {
                function MetadataTestNestedChild() {
                }
                return MetadataTestNestedChild;
            }());
            exports_1("MetadataTestNestedChild", MetadataTestNestedChild);
            MenuItemExample = (function () {
                function MenuItemExample() {
                }
                return MenuItemExample;
            }());
            exports_1("MenuItemExample", MenuItemExample);
            TypesGroup = (function () {
                function TypesGroup() {
                }
                return TypesGroup;
            }());
            exports_1("TypesGroup", TypesGroup);
            Device = (function () {
                function Device() {
                }
                return Device;
            }());
            exports_1("Device", Device);
            MenuItemExampleItem = (function () {
                function MenuItemExampleItem() {
                }
                return MenuItemExampleItem;
            }());
            exports_1("MenuItemExampleItem", MenuItemExampleItem);
            Channel = (function () {
                function Channel() {
                }
                return Channel;
            }());
            exports_1("Channel", Channel);
            CustomHttpErrorResponse = (function () {
                function CustomHttpErrorResponse() {
                }
                return CustomHttpErrorResponse;
            }());
            exports_1("CustomHttpErrorResponse", CustomHttpErrorResponse);
            ThrowTypeResponse = (function () {
                function ThrowTypeResponse() {
                }
                return ThrowTypeResponse;
            }());
            exports_1("ThrowTypeResponse", ThrowTypeResponse);
            ThrowValidationResponse = (function () {
                function ThrowValidationResponse() {
                }
                return ThrowValidationResponse;
            }());
            exports_1("ThrowValidationResponse", ThrowValidationResponse);
            ThrowBusinessErrorResponse = (function () {
                function ThrowBusinessErrorResponse() {
                }
                return ThrowBusinessErrorResponse;
            }());
            exports_1("ThrowBusinessErrorResponse", ThrowBusinessErrorResponse);
            ExternalOperationResponse = (function () {
                function ExternalOperationResponse() {
                }
                return ExternalOperationResponse;
            }());
            exports_1("ExternalOperationResponse", ExternalOperationResponse);
            ExternalOperation2Response = (function () {
                function ExternalOperation2Response() {
                }
                return ExternalOperation2Response;
            }());
            exports_1("ExternalOperation2Response", ExternalOperation2Response);
            ExternalReturnTypeResponse = (function () {
                function ExternalReturnTypeResponse() {
                }
                return ExternalReturnTypeResponse;
            }());
            exports_1("ExternalReturnTypeResponse", ExternalReturnTypeResponse);
            Account = (function () {
                function Account() {
                }
                return Account;
            }());
            exports_1("Account", Account);
            Project = (function () {
                function Project() {
                }
                return Project;
            }());
            exports_1("Project", Project);
            MetadataTestResponse = (function () {
                function MetadataTestResponse() {
                }
                return MetadataTestResponse;
            }());
            exports_1("MetadataTestResponse", MetadataTestResponse);
            // @DataContract
            GetExampleResponse = (function () {
                function GetExampleResponse() {
                }
                return GetExampleResponse;
            }());
            exports_1("GetExampleResponse", GetExampleResponse);
            GetRandomIdsResponse = (function () {
                function GetRandomIdsResponse() {
                }
                return GetRandomIdsResponse;
            }());
            exports_1("GetRandomIdsResponse", GetRandomIdsResponse);
            HelloResponse = (function () {
                function HelloResponse() {
                }
                return HelloResponse;
            }());
            exports_1("HelloResponse", HelloResponse);
            /**
            * Description on HelloAllResponse type
            */
            // @DataContract
            HelloAnnotatedResponse = (function () {
                function HelloAnnotatedResponse() {
                }
                return HelloAnnotatedResponse;
            }());
            exports_1("HelloAnnotatedResponse", HelloAnnotatedResponse);
            HelloAllTypesResponse = (function () {
                function HelloAllTypesResponse() {
                }
                return HelloAllTypesResponse;
            }());
            exports_1("HelloAllTypesResponse", HelloAllTypesResponse);
            HelloDateTime = (function () {
                function HelloDateTime() {
                }
                return HelloDateTime;
            }());
            exports_1("HelloDateTime", HelloDateTime);
            // @DataContract
            HelloWithDataContractResponse = (function () {
                function HelloWithDataContractResponse() {
                }
                return HelloWithDataContractResponse;
            }());
            exports_1("HelloWithDataContractResponse", HelloWithDataContractResponse);
            /**
            * Description on HelloWithDescriptionResponse type
            */
            HelloWithDescriptionResponse = (function () {
                function HelloWithDescriptionResponse() {
                }
                return HelloWithDescriptionResponse;
            }());
            exports_1("HelloWithDescriptionResponse", HelloWithDescriptionResponse);
            HelloWithInheritanceResponse = (function (_super) {
                __extends(HelloWithInheritanceResponse, _super);
                function HelloWithInheritanceResponse() {
                    _super.apply(this, arguments);
                }
                return HelloWithInheritanceResponse;
            }(HelloResponseBase));
            exports_1("HelloWithInheritanceResponse", HelloWithInheritanceResponse);
            HelloWithAlternateReturnResponse = (function (_super) {
                __extends(HelloWithAlternateReturnResponse, _super);
                function HelloWithAlternateReturnResponse() {
                    _super.apply(this, arguments);
                }
                return HelloWithAlternateReturnResponse;
            }(HelloWithReturnResponse));
            exports_1("HelloWithAlternateReturnResponse", HelloWithAlternateReturnResponse);
            HelloWithRouteResponse = (function () {
                function HelloWithRouteResponse() {
                }
                return HelloWithRouteResponse;
            }());
            exports_1("HelloWithRouteResponse", HelloWithRouteResponse);
            HelloWithTypeResponse = (function () {
                function HelloWithTypeResponse() {
                }
                return HelloWithTypeResponse;
            }());
            exports_1("HelloWithTypeResponse", HelloWithTypeResponse);
            HelloInnerTypesResponse = (function () {
                function HelloInnerTypesResponse() {
                }
                return HelloInnerTypesResponse;
            }());
            exports_1("HelloInnerTypesResponse", HelloInnerTypesResponse);
            HelloVerbResponse = (function () {
                function HelloVerbResponse() {
                }
                return HelloVerbResponse;
            }());
            exports_1("HelloVerbResponse", HelloVerbResponse);
            EnumResponse = (function () {
                function EnumResponse() {
                }
                return EnumResponse;
            }());
            exports_1("EnumResponse", EnumResponse);
            PingResponse = (function () {
                function PingResponse() {
                }
                return PingResponse;
            }());
            exports_1("PingResponse", PingResponse);
            RequiresRoleResponse = (function () {
                function RequiresRoleResponse() {
                }
                return RequiresRoleResponse;
            }());
            exports_1("RequiresRoleResponse", RequiresRoleResponse);
            SendVerbResponse = (function () {
                function SendVerbResponse() {
                }
                return SendVerbResponse;
            }());
            exports_1("SendVerbResponse", SendVerbResponse);
            GetSessionResponse = (function () {
                function GetSessionResponse() {
                }
                return GetSessionResponse;
            }());
            exports_1("GetSessionResponse", GetSessionResponse);
            StoreLogsResponse = (function () {
                function StoreLogsResponse() {
                }
                return StoreLogsResponse;
            }());
            exports_1("StoreLogsResponse", StoreLogsResponse);
            TestAuthResponse = (function () {
                function TestAuthResponse() {
                }
                return TestAuthResponse;
            }());
            exports_1("TestAuthResponse", TestAuthResponse);
            // @Route("/wait/{ForMs}")
            Wait = (function () {
                function Wait() {
                }
                return Wait;
            }());
            exports_1("Wait", Wait);
            // @Route("/echo/types")
            EchoTypes = (function () {
                function EchoTypes() {
                }
                return EchoTypes;
            }());
            exports_1("EchoTypes", EchoTypes);
            // @Route("/echo/collections")
            EchoCollections = (function () {
                function EchoCollections() {
                }
                return EchoCollections;
            }());
            exports_1("EchoCollections", EchoCollections);
            EchoComplexTypes = (function () {
                function EchoComplexTypes() {
                }
                return EchoComplexTypes;
            }());
            exports_1("EchoComplexTypes", EchoComplexTypes);
            // @DataContract
            RequestLogsResponse = (function () {
                function RequestLogsResponse() {
                }
                return RequestLogsResponse;
            }());
            exports_1("RequestLogsResponse", RequestLogsResponse);
            // @DataContract
            AuthenticateResponse = (function () {
                function AuthenticateResponse() {
                }
                return AuthenticateResponse;
            }());
            exports_1("AuthenticateResponse", AuthenticateResponse);
            // @DataContract
            AssignRolesResponse = (function () {
                function AssignRolesResponse() {
                }
                return AssignRolesResponse;
            }());
            exports_1("AssignRolesResponse", AssignRolesResponse);
            // @DataContract
            UnAssignRolesResponse = (function () {
                function UnAssignRolesResponse() {
                }
                return UnAssignRolesResponse;
            }());
            exports_1("UnAssignRolesResponse", UnAssignRolesResponse);
            // @DataContract
            QueryResponse = (function () {
                function QueryResponse() {
                }
                return QueryResponse;
            }());
            exports_1("QueryResponse", QueryResponse);
            CustomHttpError = (function () {
                function CustomHttpError() {
                }
                CustomHttpError.prototype.createResponse = function () { return new CustomHttpErrorResponse(); };
                CustomHttpError.prototype.getTypeName = function () { return "CustomHttpError"; };
                return CustomHttpError;
            }());
            exports_1("CustomHttpError", CustomHttpError);
            // @Route("/throwhttperror/{Status}")
            ThrowHttpError = (function () {
                function ThrowHttpError() {
                }
                return ThrowHttpError;
            }());
            exports_1("ThrowHttpError", ThrowHttpError);
            // @Route("/throw404")
            // @Route("/throw404/{Message}")
            Throw404 = (function () {
                function Throw404() {
                }
                return Throw404;
            }());
            exports_1("Throw404", Throw404);
            // @Route("/throwcustom400")
            // @Route("/throwcustom400/{Message}")
            ThrowCustom400 = (function () {
                function ThrowCustom400() {
                }
                return ThrowCustom400;
            }());
            exports_1("ThrowCustom400", ThrowCustom400);
            // @Route("/throw/{Type}")
            ThrowType = (function () {
                function ThrowType() {
                }
                ThrowType.prototype.createResponse = function () { return new ThrowTypeResponse(); };
                ThrowType.prototype.getTypeName = function () { return "ThrowType"; };
                return ThrowType;
            }());
            exports_1("ThrowType", ThrowType);
            // @Route("/throwvalidation")
            ThrowValidation = (function () {
                function ThrowValidation() {
                }
                ThrowValidation.prototype.createResponse = function () { return new ThrowValidationResponse(); };
                ThrowValidation.prototype.getTypeName = function () { return "ThrowValidation"; };
                return ThrowValidation;
            }());
            exports_1("ThrowValidation", ThrowValidation);
            // @Route("/throwbusinesserror")
            ThrowBusinessError = (function () {
                function ThrowBusinessError() {
                }
                ThrowBusinessError.prototype.createResponse = function () { return new ThrowBusinessErrorResponse(); };
                ThrowBusinessError.prototype.getTypeName = function () { return "ThrowBusinessError"; };
                return ThrowBusinessError;
            }());
            exports_1("ThrowBusinessError", ThrowBusinessError);
            ExternalOperation = (function () {
                function ExternalOperation() {
                }
                ExternalOperation.prototype.createResponse = function () { return new ExternalOperationResponse(); };
                ExternalOperation.prototype.getTypeName = function () { return "ExternalOperation"; };
                return ExternalOperation;
            }());
            exports_1("ExternalOperation", ExternalOperation);
            ExternalOperation2 = (function () {
                function ExternalOperation2() {
                }
                ExternalOperation2.prototype.createResponse = function () { return new ExternalOperation2Response(); };
                ExternalOperation2.prototype.getTypeName = function () { return "ExternalOperation2"; };
                return ExternalOperation2;
            }());
            exports_1("ExternalOperation2", ExternalOperation2);
            ExternalOperation3 = (function () {
                function ExternalOperation3() {
                }
                ExternalOperation3.prototype.createResponse = function () { return new ExternalReturnTypeResponse(); };
                ExternalOperation3.prototype.getTypeName = function () { return "ExternalOperation3"; };
                return ExternalOperation3;
            }());
            exports_1("ExternalOperation3", ExternalOperation3);
            ExternalOperation4 = (function () {
                function ExternalOperation4() {
                }
                return ExternalOperation4;
            }());
            exports_1("ExternalOperation4", ExternalOperation4);
            // @Route("/{Path*}")
            RootPathRoutes = (function () {
                function RootPathRoutes() {
                }
                return RootPathRoutes;
            }());
            exports_1("RootPathRoutes", RootPathRoutes);
            GetAccount = (function () {
                function GetAccount() {
                }
                GetAccount.prototype.createResponse = function () { return new Account(); };
                GetAccount.prototype.getTypeName = function () { return "GetAccount"; };
                return GetAccount;
            }());
            exports_1("GetAccount", GetAccount);
            GetProject = (function () {
                function GetProject() {
                }
                GetProject.prototype.createResponse = function () { return new Project(); };
                GetProject.prototype.getTypeName = function () { return "GetProject"; };
                return GetProject;
            }());
            exports_1("GetProject", GetProject);
            // @Route("/image-stream")
            ImageAsStream = (function () {
                function ImageAsStream() {
                }
                return ImageAsStream;
            }());
            exports_1("ImageAsStream", ImageAsStream);
            // @Route("/image-bytes")
            ImageAsBytes = (function () {
                function ImageAsBytes() {
                }
                return ImageAsBytes;
            }());
            exports_1("ImageAsBytes", ImageAsBytes);
            // @Route("/image-custom")
            ImageAsCustomResult = (function () {
                function ImageAsCustomResult() {
                }
                return ImageAsCustomResult;
            }());
            exports_1("ImageAsCustomResult", ImageAsCustomResult);
            // @Route("/image-response")
            ImageWriteToResponse = (function () {
                function ImageWriteToResponse() {
                }
                return ImageWriteToResponse;
            }());
            exports_1("ImageWriteToResponse", ImageWriteToResponse);
            // @Route("/image-file")
            ImageAsFile = (function () {
                function ImageAsFile() {
                }
                return ImageAsFile;
            }());
            exports_1("ImageAsFile", ImageAsFile);
            // @Route("/image-redirect")
            ImageAsRedirect = (function () {
                function ImageAsRedirect() {
                }
                return ImageAsRedirect;
            }());
            exports_1("ImageAsRedirect", ImageAsRedirect);
            // @Route("/image-draw/{Name}")
            DrawImage = (function () {
                function DrawImage() {
                }
                return DrawImage;
            }());
            exports_1("DrawImage", DrawImage);
            // @Route("/metadatatest")
            MetadataTest = (function () {
                function MetadataTest() {
                }
                MetadataTest.prototype.createResponse = function () { return new MetadataTestResponse(); };
                MetadataTest.prototype.getTypeName = function () { return "MetadataTest"; };
                return MetadataTest;
            }());
            exports_1("MetadataTest", MetadataTest);
            // @Route("/metadatatest-array")
            MetadataTestArray = (function () {
                function MetadataTestArray() {
                }
                MetadataTestArray.prototype.createResponse = function () { return new Array(); };
                MetadataTestArray.prototype.getTypeName = function () { return "MetadataTestArray"; };
                return MetadataTestArray;
            }());
            exports_1("MetadataTestArray", MetadataTestArray);
            // @Route("/example", "GET")
            // @DataContract
            GetExample = (function () {
                function GetExample() {
                }
                GetExample.prototype.createResponse = function () { return new GetExampleResponse(); };
                GetExample.prototype.getTypeName = function () { return "GetExample"; };
                return GetExample;
            }());
            exports_1("GetExample", GetExample);
            // @Route("/randomids")
            GetRandomIds = (function () {
                function GetRandomIds() {
                }
                GetRandomIds.prototype.createResponse = function () { return new GetRandomIdsResponse(); };
                GetRandomIds.prototype.getTypeName = function () { return "GetRandomIds"; };
                return GetRandomIds;
            }());
            exports_1("GetRandomIds", GetRandomIds);
            // @Route("/textfile-test")
            TextFileTest = (function () {
                function TextFileTest() {
                }
                return TextFileTest;
            }());
            exports_1("TextFileTest", TextFileTest);
            // @Route("/hello")
            // @Route("/hello/{Name}")
            Hello = (function () {
                function Hello() {
                }
                Hello.prototype.createResponse = function () { return new HelloResponse(); };
                Hello.prototype.getTypeName = function () { return "Hello"; };
                return Hello;
            }());
            exports_1("Hello", Hello);
            /**
            * Description on HelloAll type
            */
            // @DataContract
            HelloAnnotated = (function () {
                function HelloAnnotated() {
                }
                HelloAnnotated.prototype.createResponse = function () { return new HelloAnnotatedResponse(); };
                HelloAnnotated.prototype.getTypeName = function () { return "HelloAnnotated"; };
                return HelloAnnotated;
            }());
            exports_1("HelloAnnotated", HelloAnnotated);
            HelloWithNestedClass = (function () {
                function HelloWithNestedClass() {
                }
                HelloWithNestedClass.prototype.createResponse = function () { return new HelloResponse(); };
                HelloWithNestedClass.prototype.getTypeName = function () { return "HelloWithNestedClass"; };
                return HelloWithNestedClass;
            }());
            exports_1("HelloWithNestedClass", HelloWithNestedClass);
            HelloList = (function () {
                function HelloList() {
                }
                HelloList.prototype.createResponse = function () { return new Array(); };
                HelloList.prototype.getTypeName = function () { return "HelloList"; };
                return HelloList;
            }());
            exports_1("HelloList", HelloList);
            HelloArray = (function () {
                function HelloArray() {
                }
                HelloArray.prototype.createResponse = function () { return new Array(); };
                HelloArray.prototype.getTypeName = function () { return "HelloArray"; };
                return HelloArray;
            }());
            exports_1("HelloArray", HelloArray);
            HelloWithEnum = (function () {
                function HelloWithEnum() {
                }
                return HelloWithEnum;
            }());
            exports_1("HelloWithEnum", HelloWithEnum);
            RestrictedAttributes = (function () {
                function RestrictedAttributes() {
                }
                return RestrictedAttributes;
            }());
            exports_1("RestrictedAttributes", RestrictedAttributes);
            /**
            * AllowedAttributes Description
            */
            // @Route("/allowed-attributes", "GET")
            // @Api("AllowedAttributes Description")
            // @ApiResponse(400, "Your request was not understood")
            // @DataContract
            AllowedAttributes = (function () {
                function AllowedAttributes() {
                }
                return AllowedAttributes;
            }());
            exports_1("AllowedAttributes", AllowedAttributes);
            // @Route("/all-types")
            HelloAllTypes = (function () {
                function HelloAllTypes() {
                }
                HelloAllTypes.prototype.createResponse = function () { return new HelloAllTypesResponse(); };
                HelloAllTypes.prototype.getTypeName = function () { return "HelloAllTypes"; };
                return HelloAllTypes;
            }());
            exports_1("HelloAllTypes", HelloAllTypes);
            AllTypes = (function () {
                function AllTypes() {
                }
                return AllTypes;
            }());
            exports_1("AllTypes", AllTypes);
            HelloString = (function () {
                function HelloString() {
                }
                HelloString.prototype.createResponse = function () { return ""; };
                HelloString.prototype.getTypeName = function () { return "HelloString"; };
                return HelloString;
            }());
            exports_1("HelloString", HelloString);
            HelloVoid = (function () {
                function HelloVoid() {
                }
                return HelloVoid;
            }());
            exports_1("HelloVoid", HelloVoid);
            // @DataContract
            HelloWithDataContract = (function () {
                function HelloWithDataContract() {
                }
                HelloWithDataContract.prototype.createResponse = function () { return new HelloWithDataContractResponse(); };
                HelloWithDataContract.prototype.getTypeName = function () { return "HelloWithDataContract"; };
                return HelloWithDataContract;
            }());
            exports_1("HelloWithDataContract", HelloWithDataContract);
            /**
            * Description on HelloWithDescription type
            */
            HelloWithDescription = (function () {
                function HelloWithDescription() {
                }
                HelloWithDescription.prototype.createResponse = function () { return new HelloWithDescriptionResponse(); };
                HelloWithDescription.prototype.getTypeName = function () { return "HelloWithDescription"; };
                return HelloWithDescription;
            }());
            exports_1("HelloWithDescription", HelloWithDescription);
            HelloWithInheritance = (function (_super) {
                __extends(HelloWithInheritance, _super);
                function HelloWithInheritance() {
                    _super.apply(this, arguments);
                }
                HelloWithInheritance.prototype.createResponse = function () { return new HelloWithInheritanceResponse(); };
                HelloWithInheritance.prototype.getTypeName = function () { return "HelloWithInheritance"; };
                return HelloWithInheritance;
            }(HelloBase));
            exports_1("HelloWithInheritance", HelloWithInheritance);
            HelloWithGenericInheritance = (function (_super) {
                __extends(HelloWithGenericInheritance, _super);
                function HelloWithGenericInheritance() {
                    _super.apply(this, arguments);
                }
                return HelloWithGenericInheritance;
            }(HelloBase_1));
            exports_1("HelloWithGenericInheritance", HelloWithGenericInheritance);
            HelloWithGenericInheritance2 = (function (_super) {
                __extends(HelloWithGenericInheritance2, _super);
                function HelloWithGenericInheritance2() {
                    _super.apply(this, arguments);
                }
                return HelloWithGenericInheritance2;
            }(HelloBase_1));
            exports_1("HelloWithGenericInheritance2", HelloWithGenericInheritance2);
            HelloWithNestedInheritance = (function (_super) {
                __extends(HelloWithNestedInheritance, _super);
                function HelloWithNestedInheritance() {
                    _super.apply(this, arguments);
                }
                return HelloWithNestedInheritance;
            }(HelloBase_1));
            exports_1("HelloWithNestedInheritance", HelloWithNestedInheritance);
            HelloWithReturn = (function () {
                function HelloWithReturn() {
                }
                HelloWithReturn.prototype.createResponse = function () { return new HelloWithAlternateReturnResponse(); };
                HelloWithReturn.prototype.getTypeName = function () { return "HelloWithReturn"; };
                return HelloWithReturn;
            }());
            exports_1("HelloWithReturn", HelloWithReturn);
            // @Route("/helloroute")
            HelloWithRoute = (function () {
                function HelloWithRoute() {
                }
                HelloWithRoute.prototype.createResponse = function () { return new HelloWithRouteResponse(); };
                HelloWithRoute.prototype.getTypeName = function () { return "HelloWithRoute"; };
                return HelloWithRoute;
            }());
            exports_1("HelloWithRoute", HelloWithRoute);
            HelloWithType = (function () {
                function HelloWithType() {
                }
                HelloWithType.prototype.createResponse = function () { return new HelloWithTypeResponse(); };
                HelloWithType.prototype.getTypeName = function () { return "HelloWithType"; };
                return HelloWithType;
            }());
            exports_1("HelloWithType", HelloWithType);
            HelloInterface = (function () {
                function HelloInterface() {
                }
                return HelloInterface;
            }());
            exports_1("HelloInterface", HelloInterface);
            HelloInnerTypes = (function () {
                function HelloInnerTypes() {
                }
                HelloInnerTypes.prototype.createResponse = function () { return new HelloInnerTypesResponse(); };
                HelloInnerTypes.prototype.getTypeName = function () { return "HelloInnerTypes"; };
                return HelloInnerTypes;
            }());
            exports_1("HelloInnerTypes", HelloInnerTypes);
            HelloBuiltin = (function () {
                function HelloBuiltin() {
                }
                return HelloBuiltin;
            }());
            exports_1("HelloBuiltin", HelloBuiltin);
            HelloGet = (function () {
                function HelloGet() {
                }
                HelloGet.prototype.createResponse = function () { return new HelloVerbResponse(); };
                HelloGet.prototype.getTypeName = function () { return "HelloGet"; };
                return HelloGet;
            }());
            exports_1("HelloGet", HelloGet);
            HelloPost = (function (_super) {
                __extends(HelloPost, _super);
                function HelloPost() {
                    _super.apply(this, arguments);
                }
                HelloPost.prototype.createResponse = function () { return new HelloVerbResponse(); };
                HelloPost.prototype.getTypeName = function () { return "HelloPost"; };
                return HelloPost;
            }(HelloBase));
            exports_1("HelloPost", HelloPost);
            HelloPut = (function () {
                function HelloPut() {
                }
                HelloPut.prototype.createResponse = function () { return new HelloVerbResponse(); };
                HelloPut.prototype.getTypeName = function () { return "HelloPut"; };
                return HelloPut;
            }());
            exports_1("HelloPut", HelloPut);
            HelloDelete = (function () {
                function HelloDelete() {
                }
                HelloDelete.prototype.createResponse = function () { return new HelloVerbResponse(); };
                HelloDelete.prototype.getTypeName = function () { return "HelloDelete"; };
                return HelloDelete;
            }());
            exports_1("HelloDelete", HelloDelete);
            HelloPatch = (function () {
                function HelloPatch() {
                }
                HelloPatch.prototype.createResponse = function () { return new HelloVerbResponse(); };
                HelloPatch.prototype.getTypeName = function () { return "HelloPatch"; };
                return HelloPatch;
            }());
            exports_1("HelloPatch", HelloPatch);
            HelloReturnVoid = (function () {
                function HelloReturnVoid() {
                }
                HelloReturnVoid.prototype.createResponse = function () { };
                HelloReturnVoid.prototype.getTypeName = function () { return "HelloReturnVoid"; };
                return HelloReturnVoid;
            }());
            exports_1("HelloReturnVoid", HelloReturnVoid);
            EnumRequest = (function () {
                function EnumRequest() {
                }
                EnumRequest.prototype.createResponse = function () { return new EnumResponse(); };
                EnumRequest.prototype.getTypeName = function () { return "EnumRequest"; };
                return EnumRequest;
            }());
            exports_1("EnumRequest", EnumRequest);
            // @Route("/ping")
            Ping = (function () {
                function Ping() {
                }
                Ping.prototype.createResponse = function () { return new PingResponse(); };
                Ping.prototype.getTypeName = function () { return "Ping"; };
                return Ping;
            }());
            exports_1("Ping", Ping);
            // @Route("/reset-connections")
            ResetConnections = (function () {
                function ResetConnections() {
                }
                return ResetConnections;
            }());
            exports_1("ResetConnections", ResetConnections);
            // @Route("/requires-role")
            RequiresRole = (function () {
                function RequiresRole() {
                }
                RequiresRole.prototype.createResponse = function () { return new RequiresRoleResponse(); };
                RequiresRole.prototype.getTypeName = function () { return "RequiresRole"; };
                return RequiresRole;
            }());
            exports_1("RequiresRole", RequiresRole);
            SendDefault = (function () {
                function SendDefault() {
                }
                SendDefault.prototype.createResponse = function () { return new SendVerbResponse(); };
                SendDefault.prototype.getTypeName = function () { return "SendDefault"; };
                return SendDefault;
            }());
            exports_1("SendDefault", SendDefault);
            // @Route("/sendrestget/{Id}", "GET")
            SendRestGet = (function () {
                function SendRestGet() {
                }
                SendRestGet.prototype.createResponse = function () { return new SendVerbResponse(); };
                SendRestGet.prototype.getTypeName = function () { return "SendRestGet"; };
                return SendRestGet;
            }());
            exports_1("SendRestGet", SendRestGet);
            SendGet = (function () {
                function SendGet() {
                }
                SendGet.prototype.createResponse = function () { return new SendVerbResponse(); };
                SendGet.prototype.getTypeName = function () { return "SendGet"; };
                return SendGet;
            }());
            exports_1("SendGet", SendGet);
            SendPost = (function () {
                function SendPost() {
                }
                SendPost.prototype.createResponse = function () { return new SendVerbResponse(); };
                SendPost.prototype.getTypeName = function () { return "SendPost"; };
                return SendPost;
            }());
            exports_1("SendPost", SendPost);
            SendPut = (function () {
                function SendPut() {
                }
                SendPut.prototype.createResponse = function () { return new SendVerbResponse(); };
                SendPut.prototype.getTypeName = function () { return "SendPut"; };
                return SendPut;
            }());
            exports_1("SendPut", SendPut);
            // @Route("/session")
            GetSession = (function () {
                function GetSession() {
                }
                GetSession.prototype.createResponse = function () { return new GetSessionResponse(); };
                GetSession.prototype.getTypeName = function () { return "GetSession"; };
                return GetSession;
            }());
            exports_1("GetSession", GetSession);
            // @Route("/session/edit/{CustomName}")
            UpdateSession = (function () {
                function UpdateSession() {
                }
                UpdateSession.prototype.createResponse = function () { return new GetSessionResponse(); };
                UpdateSession.prototype.getTypeName = function () { return "UpdateSession"; };
                return UpdateSession;
            }());
            exports_1("UpdateSession", UpdateSession);
            StoreLogs = (function () {
                function StoreLogs() {
                }
                StoreLogs.prototype.createResponse = function () { return new StoreLogsResponse(); };
                StoreLogs.prototype.getTypeName = function () { return "StoreLogs"; };
                return StoreLogs;
            }());
            exports_1("StoreLogs", StoreLogs);
            // @Route("/testauth")
            TestAuth = (function () {
                function TestAuth() {
                }
                TestAuth.prototype.createResponse = function () { return new TestAuthResponse(); };
                TestAuth.prototype.getTypeName = function () { return "TestAuth"; };
                return TestAuth;
            }());
            exports_1("TestAuth", TestAuth);
            // @Route("/void-response")
            TestVoidResponse = (function () {
                function TestVoidResponse() {
                }
                return TestVoidResponse;
            }());
            exports_1("TestVoidResponse", TestVoidResponse);
            // @Route("/null-response")
            TestNullResponse = (function () {
                function TestNullResponse() {
                }
                return TestNullResponse;
            }());
            exports_1("TestNullResponse", TestNullResponse);
            // @Route("/requestlogs")
            // @DataContract
            RequestLogs = (function () {
                function RequestLogs() {
                }
                RequestLogs.prototype.createResponse = function () { return new RequestLogsResponse(); };
                RequestLogs.prototype.getTypeName = function () { return "RequestLogs"; };
                return RequestLogs;
            }());
            exports_1("RequestLogs", RequestLogs);
            // @Route("/auth")
            // @Route("/auth/{provider}")
            // @Route("/authenticate")
            // @Route("/authenticate/{provider}")
            // @DataContract
            Authenticate = (function () {
                function Authenticate() {
                }
                Authenticate.prototype.createResponse = function () { return new AuthenticateResponse(); };
                Authenticate.prototype.getTypeName = function () { return "Authenticate"; };
                return Authenticate;
            }());
            exports_1("Authenticate", Authenticate);
            // @Route("/assignroles")
            // @DataContract
            AssignRoles = (function () {
                function AssignRoles() {
                }
                AssignRoles.prototype.createResponse = function () { return new AssignRolesResponse(); };
                AssignRoles.prototype.getTypeName = function () { return "AssignRoles"; };
                return AssignRoles;
            }());
            exports_1("AssignRoles", AssignRoles);
            // @Route("/unassignroles")
            // @DataContract
            UnAssignRoles = (function () {
                function UnAssignRoles() {
                }
                UnAssignRoles.prototype.createResponse = function () { return new UnAssignRolesResponse(); };
                UnAssignRoles.prototype.getTypeName = function () { return "UnAssignRoles"; };
                return UnAssignRoles;
            }());
            exports_1("UnAssignRoles", UnAssignRoles);
            QueryPocoBase = (function (_super) {
                __extends(QueryPocoBase, _super);
                function QueryPocoBase() {
                    _super.apply(this, arguments);
                }
                QueryPocoBase.prototype.createResponse = function () { return new QueryResponse(); };
                QueryPocoBase.prototype.getTypeName = function () { return "QueryPocoBase"; };
                return QueryPocoBase;
            }(QueryBase_1));
            exports_1("QueryPocoBase", QueryPocoBase);
            QueryPocoIntoBase = (function (_super) {
                __extends(QueryPocoIntoBase, _super);
                function QueryPocoIntoBase() {
                    _super.apply(this, arguments);
                }
                QueryPocoIntoBase.prototype.createResponse = function () { return new QueryResponse(); };
                QueryPocoIntoBase.prototype.getTypeName = function () { return "QueryPocoIntoBase"; };
                return QueryPocoIntoBase;
            }(QueryBase_2));
            exports_1("QueryPocoIntoBase", QueryPocoIntoBase);
            // @Route("/rockstars")
            QueryRockstars = (function (_super) {
                __extends(QueryRockstars, _super);
                function QueryRockstars() {
                    _super.apply(this, arguments);
                }
                QueryRockstars.prototype.createResponse = function () { return new QueryResponse(); };
                QueryRockstars.prototype.getTypeName = function () { return "QueryRockstars"; };
                return QueryRockstars;
            }(QueryBase_1));
            exports_1("QueryRockstars", QueryRockstars);
        }
    }
});
