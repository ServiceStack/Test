"use strict";
/* Options:
Date: 2018-05-19 15:52:52
Version: 5.00
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// @DataContract
var ResponseError = /** @class */ (function () {
    function ResponseError() {
    }
    return ResponseError;
}());
exports.ResponseError = ResponseError;
// @DataContract
var ResponseStatus = /** @class */ (function () {
    function ResponseStatus() {
    }
    return ResponseStatus;
}());
exports.ResponseStatus = ResponseStatus;
var ExternalType = /** @class */ (function () {
    function ExternalType() {
    }
    return ExternalType;
}());
exports.ExternalType = ExternalType;
// @DataContract
var AuthUserSession = /** @class */ (function () {
    function AuthUserSession() {
    }
    return AuthUserSession;
}());
exports.AuthUserSession = AuthUserSession;
var MetadataTestNestedChild = /** @class */ (function () {
    function MetadataTestNestedChild() {
    }
    return MetadataTestNestedChild;
}());
exports.MetadataTestNestedChild = MetadataTestNestedChild;
var MetadataTestChild = /** @class */ (function () {
    function MetadataTestChild() {
    }
    return MetadataTestChild;
}());
exports.MetadataTestChild = MetadataTestChild;
var MenuItemExampleItem = /** @class */ (function () {
    function MenuItemExampleItem() {
    }
    return MenuItemExampleItem;
}());
exports.MenuItemExampleItem = MenuItemExampleItem;
var MenuItemExample = /** @class */ (function () {
    function MenuItemExample() {
    }
    return MenuItemExample;
}());
exports.MenuItemExample = MenuItemExample;
// @DataContract
var MenuExample = /** @class */ (function () {
    function MenuExample() {
    }
    return MenuExample;
}());
exports.MenuExample = MenuExample;
var NestedClass = /** @class */ (function () {
    function NestedClass() {
    }
    return NestedClass;
}());
exports.NestedClass = NestedClass;
var ListResult = /** @class */ (function () {
    function ListResult() {
    }
    return ListResult;
}());
exports.ListResult = ListResult;
var ArrayResult = /** @class */ (function () {
    function ArrayResult() {
    }
    return ArrayResult;
}());
exports.ArrayResult = ArrayResult;
// @Flags()
var EnumFlags;
(function (EnumFlags) {
    EnumFlags[EnumFlags["Value1"] = 1] = "Value1";
    EnumFlags[EnumFlags["Value2"] = 2] = "Value2";
    EnumFlags[EnumFlags["Value3"] = 4] = "Value3";
})(EnumFlags = exports.EnumFlags || (exports.EnumFlags = {}));
var KeyValuePair = /** @class */ (function () {
    function KeyValuePair() {
    }
    return KeyValuePair;
}());
exports.KeyValuePair = KeyValuePair;
var SubType = /** @class */ (function () {
    function SubType() {
    }
    return SubType;
}());
exports.SubType = SubType;
var HelloBase = /** @class */ (function () {
    function HelloBase() {
    }
    return HelloBase;
}());
exports.HelloBase = HelloBase;
var HelloResponseBase = /** @class */ (function () {
    function HelloResponseBase() {
    }
    return HelloResponseBase;
}());
exports.HelloResponseBase = HelloResponseBase;
var Poco = /** @class */ (function () {
    function Poco() {
    }
    return Poco;
}());
exports.Poco = Poco;
var HelloBase_1 = /** @class */ (function () {
    function HelloBase_1() {
    }
    return HelloBase_1;
}());
exports.HelloBase_1 = HelloBase_1;
var Item = /** @class */ (function () {
    function Item() {
    }
    return Item;
}());
exports.Item = Item;
var HelloWithReturnResponse = /** @class */ (function () {
    function HelloWithReturnResponse() {
    }
    return HelloWithReturnResponse;
}());
exports.HelloWithReturnResponse = HelloWithReturnResponse;
var HelloType = /** @class */ (function () {
    function HelloType() {
    }
    return HelloType;
}());
exports.HelloType = HelloType;
var EmptyClass = /** @class */ (function () {
    function EmptyClass() {
    }
    return EmptyClass;
}());
exports.EmptyClass = EmptyClass;
var InnerType = /** @class */ (function () {
    function InnerType() {
    }
    return InnerType;
}());
exports.InnerType = InnerType;
var PingService = /** @class */ (function () {
    function PingService() {
    }
    return PingService;
}());
exports.PingService = PingService;
var ReturnedDto = /** @class */ (function () {
    function ReturnedDto() {
    }
    return ReturnedDto;
}());
exports.ReturnedDto = ReturnedDto;
var CustomUserSession = /** @class */ (function (_super) {
    __extends(CustomUserSession, _super);
    function CustomUserSession() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CustomUserSession;
}(AuthUserSession));
exports.CustomUserSession = CustomUserSession;
var UnAuthInfo = /** @class */ (function () {
    function UnAuthInfo() {
    }
    return UnAuthInfo;
}());
exports.UnAuthInfo = UnAuthInfo;
var Channel = /** @class */ (function () {
    function Channel() {
    }
    return Channel;
}());
exports.Channel = Channel;
var Device = /** @class */ (function () {
    function Device() {
    }
    return Device;
}());
exports.Device = Device;
var Logger = /** @class */ (function () {
    function Logger() {
    }
    return Logger;
}());
exports.Logger = Logger;
var Rockstar = /** @class */ (function () {
    function Rockstar() {
    }
    return Rockstar;
}());
exports.Rockstar = Rockstar;
var QueryBase = /** @class */ (function () {
    function QueryBase() {
    }
    return QueryBase;
}());
exports.QueryBase = QueryBase;
var QueryDb_1 = /** @class */ (function (_super) {
    __extends(QueryDb_1, _super);
    function QueryDb_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return QueryDb_1;
}(QueryBase));
exports.QueryDb_1 = QueryDb_1;
var OnlyDefinedInGenericType = /** @class */ (function () {
    function OnlyDefinedInGenericType() {
    }
    return OnlyDefinedInGenericType;
}());
exports.OnlyDefinedInGenericType = OnlyDefinedInGenericType;
var QueryDb_2 = /** @class */ (function (_super) {
    __extends(QueryDb_2, _super);
    function QueryDb_2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return QueryDb_2;
}(QueryBase));
exports.QueryDb_2 = QueryDb_2;
var OnlyDefinedInGenericTypeFrom = /** @class */ (function () {
    function OnlyDefinedInGenericTypeFrom() {
    }
    return OnlyDefinedInGenericTypeFrom;
}());
exports.OnlyDefinedInGenericTypeFrom = OnlyDefinedInGenericTypeFrom;
var OnlyDefinedInGenericTypeInto = /** @class */ (function () {
    function OnlyDefinedInGenericTypeInto() {
    }
    return OnlyDefinedInGenericTypeInto;
}());
exports.OnlyDefinedInGenericTypeInto = OnlyDefinedInGenericTypeInto;
var TypesGroup = /** @class */ (function () {
    function TypesGroup() {
    }
    return TypesGroup;
}());
exports.TypesGroup = TypesGroup;
var CustomHttpErrorResponse = /** @class */ (function () {
    function CustomHttpErrorResponse() {
    }
    return CustomHttpErrorResponse;
}());
exports.CustomHttpErrorResponse = CustomHttpErrorResponse;
var ThrowTypeResponse = /** @class */ (function () {
    function ThrowTypeResponse() {
    }
    return ThrowTypeResponse;
}());
exports.ThrowTypeResponse = ThrowTypeResponse;
var ThrowValidationResponse = /** @class */ (function () {
    function ThrowValidationResponse() {
    }
    return ThrowValidationResponse;
}());
exports.ThrowValidationResponse = ThrowValidationResponse;
var ThrowBusinessErrorResponse = /** @class */ (function () {
    function ThrowBusinessErrorResponse() {
    }
    return ThrowBusinessErrorResponse;
}());
exports.ThrowBusinessErrorResponse = ThrowBusinessErrorResponse;
var ExternalOperationResponse = /** @class */ (function () {
    function ExternalOperationResponse() {
    }
    return ExternalOperationResponse;
}());
exports.ExternalOperationResponse = ExternalOperationResponse;
var ExternalOperation2Response = /** @class */ (function () {
    function ExternalOperation2Response() {
    }
    return ExternalOperation2Response;
}());
exports.ExternalOperation2Response = ExternalOperation2Response;
var ExternalReturnTypeResponse = /** @class */ (function () {
    function ExternalReturnTypeResponse() {
    }
    return ExternalReturnTypeResponse;
}());
exports.ExternalReturnTypeResponse = ExternalReturnTypeResponse;
var Account = /** @class */ (function () {
    function Account() {
    }
    return Account;
}());
exports.Account = Account;
var Project = /** @class */ (function () {
    function Project() {
    }
    return Project;
}());
exports.Project = Project;
var CreateJwtResponse = /** @class */ (function () {
    function CreateJwtResponse() {
    }
    return CreateJwtResponse;
}());
exports.CreateJwtResponse = CreateJwtResponse;
var CreateRefreshJwtResponse = /** @class */ (function () {
    function CreateRefreshJwtResponse() {
    }
    return CreateRefreshJwtResponse;
}());
exports.CreateRefreshJwtResponse = CreateRefreshJwtResponse;
var MetadataTestResponse = /** @class */ (function () {
    function MetadataTestResponse() {
    }
    return MetadataTestResponse;
}());
exports.MetadataTestResponse = MetadataTestResponse;
// @DataContract
var GetExampleResponse = /** @class */ (function () {
    function GetExampleResponse() {
    }
    return GetExampleResponse;
}());
exports.GetExampleResponse = GetExampleResponse;
var GetRandomIdsResponse = /** @class */ (function () {
    function GetRandomIdsResponse() {
    }
    return GetRandomIdsResponse;
}());
exports.GetRandomIdsResponse = GetRandomIdsResponse;
var HelloResponse = /** @class */ (function () {
    function HelloResponse() {
    }
    return HelloResponse;
}());
exports.HelloResponse = HelloResponse;
/**
* Description on HelloAllResponse type
*/
// @DataContract
var HelloAnnotatedResponse = /** @class */ (function () {
    function HelloAnnotatedResponse() {
    }
    return HelloAnnotatedResponse;
}());
exports.HelloAnnotatedResponse = HelloAnnotatedResponse;
var AllTypes = /** @class */ (function () {
    function AllTypes() {
    }
    return AllTypes;
}());
exports.AllTypes = AllTypes;
var AllCollectionTypes = /** @class */ (function () {
    function AllCollectionTypes() {
    }
    return AllCollectionTypes;
}());
exports.AllCollectionTypes = AllCollectionTypes;
var HelloAllTypesResponse = /** @class */ (function () {
    function HelloAllTypesResponse() {
    }
    return HelloAllTypesResponse;
}());
exports.HelloAllTypesResponse = HelloAllTypesResponse;
var HelloDateTime = /** @class */ (function () {
    function HelloDateTime() {
    }
    HelloDateTime.prototype.createResponse = function () { return new HelloDateTime(); };
    HelloDateTime.prototype.getTypeName = function () { return "HelloDateTime"; };
    return HelloDateTime;
}());
exports.HelloDateTime = HelloDateTime;
// @DataContract
var HelloWithDataContractResponse = /** @class */ (function () {
    function HelloWithDataContractResponse() {
    }
    return HelloWithDataContractResponse;
}());
exports.HelloWithDataContractResponse = HelloWithDataContractResponse;
/**
* Description on HelloWithDescriptionResponse type
*/
var HelloWithDescriptionResponse = /** @class */ (function () {
    function HelloWithDescriptionResponse() {
    }
    return HelloWithDescriptionResponse;
}());
exports.HelloWithDescriptionResponse = HelloWithDescriptionResponse;
var HelloWithInheritanceResponse = /** @class */ (function (_super) {
    __extends(HelloWithInheritanceResponse, _super);
    function HelloWithInheritanceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HelloWithInheritanceResponse;
}(HelloResponseBase));
exports.HelloWithInheritanceResponse = HelloWithInheritanceResponse;
var HelloWithAlternateReturnResponse = /** @class */ (function (_super) {
    __extends(HelloWithAlternateReturnResponse, _super);
    function HelloWithAlternateReturnResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HelloWithAlternateReturnResponse;
}(HelloWithReturnResponse));
exports.HelloWithAlternateReturnResponse = HelloWithAlternateReturnResponse;
var HelloWithRouteResponse = /** @class */ (function () {
    function HelloWithRouteResponse() {
    }
    return HelloWithRouteResponse;
}());
exports.HelloWithRouteResponse = HelloWithRouteResponse;
var HelloWithTypeResponse = /** @class */ (function () {
    function HelloWithTypeResponse() {
    }
    return HelloWithTypeResponse;
}());
exports.HelloWithTypeResponse = HelloWithTypeResponse;
var HelloInnerTypesResponse = /** @class */ (function () {
    function HelloInnerTypesResponse() {
    }
    return HelloInnerTypesResponse;
}());
exports.HelloInnerTypesResponse = HelloInnerTypesResponse;
var HelloVerbResponse = /** @class */ (function () {
    function HelloVerbResponse() {
    }
    return HelloVerbResponse;
}());
exports.HelloVerbResponse = HelloVerbResponse;
var EnumResponse = /** @class */ (function () {
    function EnumResponse() {
    }
    return EnumResponse;
}());
exports.EnumResponse = EnumResponse;
// @Route("/hellotypes/{Name}")
var HelloTypes = /** @class */ (function () {
    function HelloTypes() {
    }
    HelloTypes.prototype.createResponse = function () { return new HelloTypes(); };
    HelloTypes.prototype.getTypeName = function () { return "HelloTypes"; };
    return HelloTypes;
}());
exports.HelloTypes = HelloTypes;
// @DataContract
var HelloZipResponse = /** @class */ (function () {
    function HelloZipResponse() {
    }
    return HelloZipResponse;
}());
exports.HelloZipResponse = HelloZipResponse;
var PingResponse = /** @class */ (function () {
    function PingResponse() {
    }
    return PingResponse;
}());
exports.PingResponse = PingResponse;
var RequiresRoleResponse = /** @class */ (function () {
    function RequiresRoleResponse() {
    }
    return RequiresRoleResponse;
}());
exports.RequiresRoleResponse = RequiresRoleResponse;
var SendVerbResponse = /** @class */ (function () {
    function SendVerbResponse() {
    }
    return SendVerbResponse;
}());
exports.SendVerbResponse = SendVerbResponse;
var GetSessionResponse = /** @class */ (function () {
    function GetSessionResponse() {
    }
    return GetSessionResponse;
}());
exports.GetSessionResponse = GetSessionResponse;
var StoreLogsResponse = /** @class */ (function () {
    function StoreLogsResponse() {
    }
    return StoreLogsResponse;
}());
exports.StoreLogsResponse = StoreLogsResponse;
var TestAuthResponse = /** @class */ (function () {
    function TestAuthResponse() {
    }
    return TestAuthResponse;
}());
exports.TestAuthResponse = TestAuthResponse;
var RequiresAdmin = /** @class */ (function () {
    function RequiresAdmin() {
    }
    RequiresAdmin.prototype.createResponse = function () { return new RequiresAdmin(); };
    RequiresAdmin.prototype.getTypeName = function () { return "RequiresAdmin"; };
    return RequiresAdmin;
}());
exports.RequiresAdmin = RequiresAdmin;
// @Route("/custom")
// @Route("/custom/{Data}")
var CustomRoute = /** @class */ (function () {
    function CustomRoute() {
    }
    CustomRoute.prototype.createResponse = function () { return new CustomRoute(); };
    CustomRoute.prototype.getTypeName = function () { return "CustomRoute"; };
    return CustomRoute;
}());
exports.CustomRoute = CustomRoute;
// @Route("/wait/{ForMs}")
var Wait = /** @class */ (function () {
    function Wait() {
    }
    Wait.prototype.createResponse = function () { return new Wait(); };
    Wait.prototype.getTypeName = function () { return "Wait"; };
    return Wait;
}());
exports.Wait = Wait;
// @Route("/echo/types")
var EchoTypes = /** @class */ (function () {
    function EchoTypes() {
    }
    EchoTypes.prototype.createResponse = function () { return new EchoTypes(); };
    EchoTypes.prototype.getTypeName = function () { return "EchoTypes"; };
    return EchoTypes;
}());
exports.EchoTypes = EchoTypes;
// @Route("/echo/collections")
var EchoCollections = /** @class */ (function () {
    function EchoCollections() {
    }
    EchoCollections.prototype.createResponse = function () { return new EchoCollections(); };
    EchoCollections.prototype.getTypeName = function () { return "EchoCollections"; };
    return EchoCollections;
}());
exports.EchoCollections = EchoCollections;
// @Route("/echo/complex")
var EchoComplexTypes = /** @class */ (function () {
    function EchoComplexTypes() {
    }
    EchoComplexTypes.prototype.createResponse = function () { return new EchoComplexTypes(); };
    EchoComplexTypes.prototype.getTypeName = function () { return "EchoComplexTypes"; };
    return EchoComplexTypes;
}());
exports.EchoComplexTypes = EchoComplexTypes;
// @Route("/rockstars", "POST")
var StoreRockstars = /** @class */ (function (_super) {
    __extends(StoreRockstars, _super);
    function StoreRockstars() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StoreRockstars.prototype.createResponse = function () { return new StoreRockstars(); };
    StoreRockstars.prototype.getTypeName = function () { return "StoreRockstars"; };
    return StoreRockstars;
}(Array));
exports.StoreRockstars = StoreRockstars;
// @DataContract(Namespace="http://schemas.servicestack.net/types")
var GetStuffResponse = /** @class */ (function () {
    function GetStuffResponse() {
    }
    return GetStuffResponse;
}());
exports.GetStuffResponse = GetStuffResponse;
// @DataContract
var AuthenticateResponse = /** @class */ (function () {
    function AuthenticateResponse() {
    }
    return AuthenticateResponse;
}());
exports.AuthenticateResponse = AuthenticateResponse;
// @DataContract
var AssignRolesResponse = /** @class */ (function () {
    function AssignRolesResponse() {
    }
    return AssignRolesResponse;
}());
exports.AssignRolesResponse = AssignRolesResponse;
// @DataContract
var UnAssignRolesResponse = /** @class */ (function () {
    function UnAssignRolesResponse() {
    }
    return UnAssignRolesResponse;
}());
exports.UnAssignRolesResponse = UnAssignRolesResponse;
// @DataContract
var ConvertSessionToTokenResponse = /** @class */ (function () {
    function ConvertSessionToTokenResponse() {
    }
    return ConvertSessionToTokenResponse;
}());
exports.ConvertSessionToTokenResponse = ConvertSessionToTokenResponse;
// @DataContract
var GetAccessTokenResponse = /** @class */ (function () {
    function GetAccessTokenResponse() {
    }
    return GetAccessTokenResponse;
}());
exports.GetAccessTokenResponse = GetAccessTokenResponse;
// @DataContract
var QueryResponse = /** @class */ (function () {
    function QueryResponse() {
    }
    return QueryResponse;
}());
exports.QueryResponse = QueryResponse;
var DummyTypes = /** @class */ (function () {
    function DummyTypes() {
    }
    return DummyTypes;
}());
exports.DummyTypes = DummyTypes;
var CustomHttpError = /** @class */ (function () {
    function CustomHttpError() {
    }
    CustomHttpError.prototype.createResponse = function () { return new CustomHttpErrorResponse(); };
    CustomHttpError.prototype.getTypeName = function () { return "CustomHttpError"; };
    return CustomHttpError;
}());
exports.CustomHttpError = CustomHttpError;
// @Route("/throwhttperror/{Status}")
var ThrowHttpError = /** @class */ (function () {
    function ThrowHttpError() {
    }
    return ThrowHttpError;
}());
exports.ThrowHttpError = ThrowHttpError;
// @Route("/throw404")
// @Route("/throw404/{Message}")
var Throw404 = /** @class */ (function () {
    function Throw404() {
    }
    return Throw404;
}());
exports.Throw404 = Throw404;
// @Route("/throwcustom400")
// @Route("/throwcustom400/{Message}")
var ThrowCustom400 = /** @class */ (function () {
    function ThrowCustom400() {
    }
    return ThrowCustom400;
}());
exports.ThrowCustom400 = ThrowCustom400;
// @Route("/throw/{Type}")
var ThrowType = /** @class */ (function () {
    function ThrowType() {
    }
    ThrowType.prototype.createResponse = function () { return new ThrowTypeResponse(); };
    ThrowType.prototype.getTypeName = function () { return "ThrowType"; };
    return ThrowType;
}());
exports.ThrowType = ThrowType;
// @Route("/throwvalidation")
var ThrowValidation = /** @class */ (function () {
    function ThrowValidation() {
    }
    ThrowValidation.prototype.createResponse = function () { return new ThrowValidationResponse(); };
    ThrowValidation.prototype.getTypeName = function () { return "ThrowValidation"; };
    return ThrowValidation;
}());
exports.ThrowValidation = ThrowValidation;
// @Route("/throwbusinesserror")
var ThrowBusinessError = /** @class */ (function () {
    function ThrowBusinessError() {
    }
    ThrowBusinessError.prototype.createResponse = function () { return new ThrowBusinessErrorResponse(); };
    ThrowBusinessError.prototype.getTypeName = function () { return "ThrowBusinessError"; };
    return ThrowBusinessError;
}());
exports.ThrowBusinessError = ThrowBusinessError;
var ExternalOperation = /** @class */ (function () {
    function ExternalOperation() {
    }
    ExternalOperation.prototype.createResponse = function () { return new ExternalOperationResponse(); };
    ExternalOperation.prototype.getTypeName = function () { return "ExternalOperation"; };
    return ExternalOperation;
}());
exports.ExternalOperation = ExternalOperation;
var ExternalOperation2 = /** @class */ (function () {
    function ExternalOperation2() {
    }
    ExternalOperation2.prototype.createResponse = function () { return new ExternalOperation2Response(); };
    ExternalOperation2.prototype.getTypeName = function () { return "ExternalOperation2"; };
    return ExternalOperation2;
}());
exports.ExternalOperation2 = ExternalOperation2;
var ExternalOperation3 = /** @class */ (function () {
    function ExternalOperation3() {
    }
    ExternalOperation3.prototype.createResponse = function () { return new ExternalReturnTypeResponse(); };
    ExternalOperation3.prototype.getTypeName = function () { return "ExternalOperation3"; };
    return ExternalOperation3;
}());
exports.ExternalOperation3 = ExternalOperation3;
var ExternalOperation4 = /** @class */ (function () {
    function ExternalOperation4() {
    }
    return ExternalOperation4;
}());
exports.ExternalOperation4 = ExternalOperation4;
var RootPathRoutes = /** @class */ (function () {
    function RootPathRoutes() {
    }
    return RootPathRoutes;
}());
exports.RootPathRoutes = RootPathRoutes;
var GetAccount = /** @class */ (function () {
    function GetAccount() {
    }
    GetAccount.prototype.createResponse = function () { return new Account(); };
    GetAccount.prototype.getTypeName = function () { return "GetAccount"; };
    return GetAccount;
}());
exports.GetAccount = GetAccount;
var GetProject = /** @class */ (function () {
    function GetProject() {
    }
    GetProject.prototype.createResponse = function () { return new Project(); };
    GetProject.prototype.getTypeName = function () { return "GetProject"; };
    return GetProject;
}());
exports.GetProject = GetProject;
// @Route("/image-stream")
var ImageAsStream = /** @class */ (function () {
    function ImageAsStream() {
    }
    ImageAsStream.prototype.createResponse = function () { return new Blob(); };
    ImageAsStream.prototype.getTypeName = function () { return "ImageAsStream"; };
    return ImageAsStream;
}());
exports.ImageAsStream = ImageAsStream;
// @Route("/image-bytes")
var ImageAsBytes = /** @class */ (function () {
    function ImageAsBytes() {
    }
    ImageAsBytes.prototype.createResponse = function () { return new Uint8Array(0); };
    ImageAsBytes.prototype.getTypeName = function () { return "ImageAsBytes"; };
    return ImageAsBytes;
}());
exports.ImageAsBytes = ImageAsBytes;
// @Route("/image-custom")
var ImageAsCustomResult = /** @class */ (function () {
    function ImageAsCustomResult() {
    }
    ImageAsCustomResult.prototype.createResponse = function () { return new Uint8Array(0); };
    ImageAsCustomResult.prototype.getTypeName = function () { return "ImageAsCustomResult"; };
    return ImageAsCustomResult;
}());
exports.ImageAsCustomResult = ImageAsCustomResult;
// @Route("/image-response")
var ImageWriteToResponse = /** @class */ (function () {
    function ImageWriteToResponse() {
    }
    ImageWriteToResponse.prototype.createResponse = function () { return new Uint8Array(0); };
    ImageWriteToResponse.prototype.getTypeName = function () { return "ImageWriteToResponse"; };
    return ImageWriteToResponse;
}());
exports.ImageWriteToResponse = ImageWriteToResponse;
// @Route("/image-file")
var ImageAsFile = /** @class */ (function () {
    function ImageAsFile() {
    }
    ImageAsFile.prototype.createResponse = function () { return new Uint8Array(0); };
    ImageAsFile.prototype.getTypeName = function () { return "ImageAsFile"; };
    return ImageAsFile;
}());
exports.ImageAsFile = ImageAsFile;
// @Route("/image-redirect")
var ImageAsRedirect = /** @class */ (function () {
    function ImageAsRedirect() {
    }
    return ImageAsRedirect;
}());
exports.ImageAsRedirect = ImageAsRedirect;
// @Route("/hello-image/{Name}")
var HelloImage = /** @class */ (function () {
    function HelloImage() {
    }
    HelloImage.prototype.createResponse = function () { return new Uint8Array(0); };
    HelloImage.prototype.getTypeName = function () { return "HelloImage"; };
    return HelloImage;
}());
exports.HelloImage = HelloImage;
// @Route("/jwt")
var CreateJwt = /** @class */ (function (_super) {
    __extends(CreateJwt, _super);
    function CreateJwt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreateJwt.prototype.createResponse = function () { return new CreateJwtResponse(); };
    CreateJwt.prototype.getTypeName = function () { return "CreateJwt"; };
    return CreateJwt;
}(AuthUserSession));
exports.CreateJwt = CreateJwt;
// @Route("/jwt-refresh")
var CreateRefreshJwt = /** @class */ (function () {
    function CreateRefreshJwt() {
    }
    CreateRefreshJwt.prototype.createResponse = function () { return new CreateRefreshJwtResponse(); };
    CreateRefreshJwt.prototype.getTypeName = function () { return "CreateRefreshJwt"; };
    return CreateRefreshJwt;
}());
exports.CreateRefreshJwt = CreateRefreshJwt;
// @Route("/logs")
var ViewLogs = /** @class */ (function () {
    function ViewLogs() {
    }
    ViewLogs.prototype.createResponse = function () { return ""; };
    ViewLogs.prototype.getTypeName = function () { return "ViewLogs"; };
    return ViewLogs;
}());
exports.ViewLogs = ViewLogs;
// @Route("/metadatatest")
var MetadataTest = /** @class */ (function () {
    function MetadataTest() {
    }
    MetadataTest.prototype.createResponse = function () { return new MetadataTestResponse(); };
    MetadataTest.prototype.getTypeName = function () { return "MetadataTest"; };
    return MetadataTest;
}());
exports.MetadataTest = MetadataTest;
// @Route("/metadatatest-array")
var MetadataTestArray = /** @class */ (function () {
    function MetadataTestArray() {
    }
    MetadataTestArray.prototype.createResponse = function () { return new Array(); };
    MetadataTestArray.prototype.getTypeName = function () { return "MetadataTestArray"; };
    return MetadataTestArray;
}());
exports.MetadataTestArray = MetadataTestArray;
// @Route("/example", "GET")
// @DataContract
var GetExample = /** @class */ (function () {
    function GetExample() {
    }
    GetExample.prototype.createResponse = function () { return new GetExampleResponse(); };
    GetExample.prototype.getTypeName = function () { return "GetExample"; };
    return GetExample;
}());
exports.GetExample = GetExample;
// @Route("/randomids")
var GetRandomIds = /** @class */ (function () {
    function GetRandomIds() {
    }
    GetRandomIds.prototype.createResponse = function () { return new GetRandomIdsResponse(); };
    GetRandomIds.prototype.getTypeName = function () { return "GetRandomIds"; };
    return GetRandomIds;
}());
exports.GetRandomIds = GetRandomIds;
// @Route("/textfile-test")
var TextFileTest = /** @class */ (function () {
    function TextFileTest() {
    }
    return TextFileTest;
}());
exports.TextFileTest = TextFileTest;
// @Route("/return/text")
var ReturnText = /** @class */ (function () {
    function ReturnText() {
    }
    return ReturnText;
}());
exports.ReturnText = ReturnText;
// @Route("/return/html")
var ReturnHtml = /** @class */ (function () {
    function ReturnHtml() {
    }
    return ReturnHtml;
}());
exports.ReturnHtml = ReturnHtml;
// @Route("/hello")
// @Route("/hello/{Name}")
var Hello = /** @class */ (function () {
    function Hello() {
    }
    Hello.prototype.createResponse = function () { return new HelloResponse(); };
    Hello.prototype.getTypeName = function () { return "Hello"; };
    return Hello;
}());
exports.Hello = Hello;
/**
* Description on HelloAll type
*/
// @DataContract
var HelloAnnotated = /** @class */ (function () {
    function HelloAnnotated() {
    }
    HelloAnnotated.prototype.createResponse = function () { return new HelloAnnotatedResponse(); };
    HelloAnnotated.prototype.getTypeName = function () { return "HelloAnnotated"; };
    return HelloAnnotated;
}());
exports.HelloAnnotated = HelloAnnotated;
var HelloWithNestedClass = /** @class */ (function () {
    function HelloWithNestedClass() {
    }
    HelloWithNestedClass.prototype.createResponse = function () { return new HelloResponse(); };
    HelloWithNestedClass.prototype.getTypeName = function () { return "HelloWithNestedClass"; };
    return HelloWithNestedClass;
}());
exports.HelloWithNestedClass = HelloWithNestedClass;
var HelloList = /** @class */ (function () {
    function HelloList() {
    }
    HelloList.prototype.createResponse = function () { return new Array(); };
    HelloList.prototype.getTypeName = function () { return "HelloList"; };
    return HelloList;
}());
exports.HelloList = HelloList;
var HelloArray = /** @class */ (function () {
    function HelloArray() {
    }
    HelloArray.prototype.createResponse = function () { return new Array(); };
    HelloArray.prototype.getTypeName = function () { return "HelloArray"; };
    return HelloArray;
}());
exports.HelloArray = HelloArray;
var HelloWithEnum = /** @class */ (function () {
    function HelloWithEnum() {
    }
    return HelloWithEnum;
}());
exports.HelloWithEnum = HelloWithEnum;
var RestrictedAttributes = /** @class */ (function () {
    function RestrictedAttributes() {
    }
    return RestrictedAttributes;
}());
exports.RestrictedAttributes = RestrictedAttributes;
/**
* AllowedAttributes Description
*/
// @Route("/allowed-attributes", "GET")
// @Api(Description="AllowedAttributes Description")
// @ApiResponse(Description="Your request was not understood", StatusCode=400)
// @DataContract
var AllowedAttributes = /** @class */ (function () {
    function AllowedAttributes() {
    }
    return AllowedAttributes;
}());
exports.AllowedAttributes = AllowedAttributes;
// @Route("/all-types")
var HelloAllTypes = /** @class */ (function () {
    function HelloAllTypes() {
    }
    HelloAllTypes.prototype.createResponse = function () { return new HelloAllTypesResponse(); };
    HelloAllTypes.prototype.getTypeName = function () { return "HelloAllTypes"; };
    return HelloAllTypes;
}());
exports.HelloAllTypes = HelloAllTypes;
var HelloString = /** @class */ (function () {
    function HelloString() {
    }
    HelloString.prototype.createResponse = function () { return ""; };
    HelloString.prototype.getTypeName = function () { return "HelloString"; };
    return HelloString;
}());
exports.HelloString = HelloString;
var HelloVoid = /** @class */ (function () {
    function HelloVoid() {
    }
    return HelloVoid;
}());
exports.HelloVoid = HelloVoid;
// @DataContract
var HelloWithDataContract = /** @class */ (function () {
    function HelloWithDataContract() {
    }
    HelloWithDataContract.prototype.createResponse = function () { return new HelloWithDataContractResponse(); };
    HelloWithDataContract.prototype.getTypeName = function () { return "HelloWithDataContract"; };
    return HelloWithDataContract;
}());
exports.HelloWithDataContract = HelloWithDataContract;
/**
* Description on HelloWithDescription type
*/
var HelloWithDescription = /** @class */ (function () {
    function HelloWithDescription() {
    }
    HelloWithDescription.prototype.createResponse = function () { return new HelloWithDescriptionResponse(); };
    HelloWithDescription.prototype.getTypeName = function () { return "HelloWithDescription"; };
    return HelloWithDescription;
}());
exports.HelloWithDescription = HelloWithDescription;
var HelloWithInheritance = /** @class */ (function (_super) {
    __extends(HelloWithInheritance, _super);
    function HelloWithInheritance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelloWithInheritance.prototype.createResponse = function () { return new HelloWithInheritanceResponse(); };
    HelloWithInheritance.prototype.getTypeName = function () { return "HelloWithInheritance"; };
    return HelloWithInheritance;
}(HelloBase));
exports.HelloWithInheritance = HelloWithInheritance;
var HelloWithGenericInheritance = /** @class */ (function (_super) {
    __extends(HelloWithGenericInheritance, _super);
    function HelloWithGenericInheritance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HelloWithGenericInheritance;
}(HelloBase_1));
exports.HelloWithGenericInheritance = HelloWithGenericInheritance;
var HelloWithGenericInheritance2 = /** @class */ (function (_super) {
    __extends(HelloWithGenericInheritance2, _super);
    function HelloWithGenericInheritance2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HelloWithGenericInheritance2;
}(HelloBase_1));
exports.HelloWithGenericInheritance2 = HelloWithGenericInheritance2;
var HelloWithNestedInheritance = /** @class */ (function (_super) {
    __extends(HelloWithNestedInheritance, _super);
    function HelloWithNestedInheritance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HelloWithNestedInheritance;
}(HelloBase_1));
exports.HelloWithNestedInheritance = HelloWithNestedInheritance;
var HelloWithReturn = /** @class */ (function () {
    function HelloWithReturn() {
    }
    HelloWithReturn.prototype.createResponse = function () { return new HelloWithAlternateReturnResponse(); };
    HelloWithReturn.prototype.getTypeName = function () { return "HelloWithReturn"; };
    return HelloWithReturn;
}());
exports.HelloWithReturn = HelloWithReturn;
// @Route("/helloroute")
var HelloWithRoute = /** @class */ (function () {
    function HelloWithRoute() {
    }
    HelloWithRoute.prototype.createResponse = function () { return new HelloWithRouteResponse(); };
    HelloWithRoute.prototype.getTypeName = function () { return "HelloWithRoute"; };
    return HelloWithRoute;
}());
exports.HelloWithRoute = HelloWithRoute;
var HelloWithType = /** @class */ (function () {
    function HelloWithType() {
    }
    HelloWithType.prototype.createResponse = function () { return new HelloWithTypeResponse(); };
    HelloWithType.prototype.getTypeName = function () { return "HelloWithType"; };
    return HelloWithType;
}());
exports.HelloWithType = HelloWithType;
var HelloInterface = /** @class */ (function () {
    function HelloInterface() {
    }
    return HelloInterface;
}());
exports.HelloInterface = HelloInterface;
var HelloInnerTypes = /** @class */ (function () {
    function HelloInnerTypes() {
    }
    HelloInnerTypes.prototype.createResponse = function () { return new HelloInnerTypesResponse(); };
    HelloInnerTypes.prototype.getTypeName = function () { return "HelloInnerTypes"; };
    return HelloInnerTypes;
}());
exports.HelloInnerTypes = HelloInnerTypes;
var HelloBuiltin = /** @class */ (function () {
    function HelloBuiltin() {
    }
    return HelloBuiltin;
}());
exports.HelloBuiltin = HelloBuiltin;
var HelloGet = /** @class */ (function () {
    function HelloGet() {
    }
    HelloGet.prototype.createResponse = function () { return new HelloVerbResponse(); };
    HelloGet.prototype.getTypeName = function () { return "HelloGet"; };
    return HelloGet;
}());
exports.HelloGet = HelloGet;
var HelloPost = /** @class */ (function (_super) {
    __extends(HelloPost, _super);
    function HelloPost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelloPost.prototype.createResponse = function () { return new HelloVerbResponse(); };
    HelloPost.prototype.getTypeName = function () { return "HelloPost"; };
    return HelloPost;
}(HelloBase));
exports.HelloPost = HelloPost;
var HelloPut = /** @class */ (function () {
    function HelloPut() {
    }
    HelloPut.prototype.createResponse = function () { return new HelloVerbResponse(); };
    HelloPut.prototype.getTypeName = function () { return "HelloPut"; };
    return HelloPut;
}());
exports.HelloPut = HelloPut;
var HelloDelete = /** @class */ (function () {
    function HelloDelete() {
    }
    HelloDelete.prototype.createResponse = function () { return new HelloVerbResponse(); };
    HelloDelete.prototype.getTypeName = function () { return "HelloDelete"; };
    return HelloDelete;
}());
exports.HelloDelete = HelloDelete;
var HelloPatch = /** @class */ (function () {
    function HelloPatch() {
    }
    HelloPatch.prototype.createResponse = function () { return new HelloVerbResponse(); };
    HelloPatch.prototype.getTypeName = function () { return "HelloPatch"; };
    return HelloPatch;
}());
exports.HelloPatch = HelloPatch;
var HelloReturnVoid = /** @class */ (function () {
    function HelloReturnVoid() {
    }
    HelloReturnVoid.prototype.createResponse = function () { };
    HelloReturnVoid.prototype.getTypeName = function () { return "HelloReturnVoid"; };
    return HelloReturnVoid;
}());
exports.HelloReturnVoid = HelloReturnVoid;
var EnumRequest = /** @class */ (function () {
    function EnumRequest() {
    }
    EnumRequest.prototype.createResponse = function () { return new EnumResponse(); };
    EnumRequest.prototype.getTypeName = function () { return "EnumRequest"; };
    return EnumRequest;
}());
exports.EnumRequest = EnumRequest;
// @Route("/hellozip")
// @DataContract
var HelloZip = /** @class */ (function () {
    function HelloZip() {
    }
    HelloZip.prototype.createResponse = function () { return new HelloZipResponse(); };
    HelloZip.prototype.getTypeName = function () { return "HelloZip"; };
    return HelloZip;
}());
exports.HelloZip = HelloZip;
// @Route("/ping")
var Ping = /** @class */ (function () {
    function Ping() {
    }
    Ping.prototype.createResponse = function () { return new PingResponse(); };
    Ping.prototype.getTypeName = function () { return "Ping"; };
    return Ping;
}());
exports.Ping = Ping;
// @Route("/reset-connections")
var ResetConnections = /** @class */ (function () {
    function ResetConnections() {
    }
    return ResetConnections;
}());
exports.ResetConnections = ResetConnections;
// @Route("/requires-role")
var RequiresRole = /** @class */ (function () {
    function RequiresRole() {
    }
    RequiresRole.prototype.createResponse = function () { return new RequiresRoleResponse(); };
    RequiresRole.prototype.getTypeName = function () { return "RequiresRole"; };
    return RequiresRole;
}());
exports.RequiresRole = RequiresRole;
// @Route("/return/string")
var ReturnString = /** @class */ (function () {
    function ReturnString() {
    }
    ReturnString.prototype.createResponse = function () { return ""; };
    ReturnString.prototype.getTypeName = function () { return "ReturnString"; };
    return ReturnString;
}());
exports.ReturnString = ReturnString;
// @Route("/return/bytes")
var ReturnBytes = /** @class */ (function () {
    function ReturnBytes() {
    }
    ReturnBytes.prototype.createResponse = function () { return new Uint8Array(0); };
    ReturnBytes.prototype.getTypeName = function () { return "ReturnBytes"; };
    return ReturnBytes;
}());
exports.ReturnBytes = ReturnBytes;
// @Route("/return/stream")
var ReturnStream = /** @class */ (function () {
    function ReturnStream() {
    }
    ReturnStream.prototype.createResponse = function () { return new Blob(); };
    ReturnStream.prototype.getTypeName = function () { return "ReturnStream"; };
    return ReturnStream;
}());
exports.ReturnStream = ReturnStream;
// @Route("/Request1", "GET")
var GetRequest1 = /** @class */ (function () {
    function GetRequest1() {
    }
    GetRequest1.prototype.createResponse = function () { return new Array(); };
    GetRequest1.prototype.getTypeName = function () { return "GetRequest1"; };
    return GetRequest1;
}());
exports.GetRequest1 = GetRequest1;
// @Route("/Request2", "GET")
var GetRequest2 = /** @class */ (function () {
    function GetRequest2() {
    }
    GetRequest2.prototype.createResponse = function () { return new Array(); };
    GetRequest2.prototype.getTypeName = function () { return "GetRequest2"; };
    return GetRequest2;
}());
exports.GetRequest2 = GetRequest2;
// @Route("/sendjson")
var SendJson = /** @class */ (function () {
    function SendJson() {
    }
    SendJson.prototype.createResponse = function () { return ""; };
    SendJson.prototype.getTypeName = function () { return "SendJson"; };
    return SendJson;
}());
exports.SendJson = SendJson;
// @Route("/sendtext")
var SendText = /** @class */ (function () {
    function SendText() {
    }
    SendText.prototype.createResponse = function () { return ""; };
    SendText.prototype.getTypeName = function () { return "SendText"; };
    return SendText;
}());
exports.SendText = SendText;
// @Route("/sendraw")
var SendRaw = /** @class */ (function () {
    function SendRaw() {
    }
    SendRaw.prototype.createResponse = function () { return new Uint8Array(0); };
    SendRaw.prototype.getTypeName = function () { return "SendRaw"; };
    return SendRaw;
}());
exports.SendRaw = SendRaw;
var SendDefault = /** @class */ (function () {
    function SendDefault() {
    }
    SendDefault.prototype.createResponse = function () { return new SendVerbResponse(); };
    SendDefault.prototype.getTypeName = function () { return "SendDefault"; };
    return SendDefault;
}());
exports.SendDefault = SendDefault;
// @Route("/sendrestget/{Id}", "GET")
var SendRestGet = /** @class */ (function () {
    function SendRestGet() {
    }
    SendRestGet.prototype.createResponse = function () { return new SendVerbResponse(); };
    SendRestGet.prototype.getTypeName = function () { return "SendRestGet"; };
    return SendRestGet;
}());
exports.SendRestGet = SendRestGet;
var SendGet = /** @class */ (function () {
    function SendGet() {
    }
    SendGet.prototype.createResponse = function () { return new SendVerbResponse(); };
    SendGet.prototype.getTypeName = function () { return "SendGet"; };
    return SendGet;
}());
exports.SendGet = SendGet;
var SendPost = /** @class */ (function () {
    function SendPost() {
    }
    SendPost.prototype.createResponse = function () { return new SendVerbResponse(); };
    SendPost.prototype.getTypeName = function () { return "SendPost"; };
    return SendPost;
}());
exports.SendPost = SendPost;
var SendPut = /** @class */ (function () {
    function SendPut() {
    }
    SendPut.prototype.createResponse = function () { return new SendVerbResponse(); };
    SendPut.prototype.getTypeName = function () { return "SendPut"; };
    return SendPut;
}());
exports.SendPut = SendPut;
var SendReturnVoid = /** @class */ (function () {
    function SendReturnVoid() {
    }
    SendReturnVoid.prototype.createResponse = function () { };
    SendReturnVoid.prototype.getTypeName = function () { return "SendReturnVoid"; };
    return SendReturnVoid;
}());
exports.SendReturnVoid = SendReturnVoid;
// @Route("/session")
var GetSession = /** @class */ (function () {
    function GetSession() {
    }
    GetSession.prototype.createResponse = function () { return new GetSessionResponse(); };
    GetSession.prototype.getTypeName = function () { return "GetSession"; };
    return GetSession;
}());
exports.GetSession = GetSession;
// @Route("/session/edit/{CustomName}")
var UpdateSession = /** @class */ (function () {
    function UpdateSession() {
    }
    UpdateSession.prototype.createResponse = function () { return new GetSessionResponse(); };
    UpdateSession.prototype.getTypeName = function () { return "UpdateSession"; };
    return UpdateSession;
}());
exports.UpdateSession = UpdateSession;
var StoreLogs = /** @class */ (function () {
    function StoreLogs() {
    }
    StoreLogs.prototype.createResponse = function () { return new StoreLogsResponse(); };
    StoreLogs.prototype.getTypeName = function () { return "StoreLogs"; };
    return StoreLogs;
}());
exports.StoreLogs = StoreLogs;
var HelloAuth = /** @class */ (function () {
    function HelloAuth() {
    }
    HelloAuth.prototype.createResponse = function () { return new HelloResponse(); };
    HelloAuth.prototype.getTypeName = function () { return "HelloAuth"; };
    return HelloAuth;
}());
exports.HelloAuth = HelloAuth;
// @Route("/testauth")
var TestAuth = /** @class */ (function () {
    function TestAuth() {
    }
    TestAuth.prototype.createResponse = function () { return new TestAuthResponse(); };
    TestAuth.prototype.getTypeName = function () { return "TestAuth"; };
    return TestAuth;
}());
exports.TestAuth = TestAuth;
// @Route("/testdata/AllTypes")
var TestDataAllTypes = /** @class */ (function () {
    function TestDataAllTypes() {
    }
    TestDataAllTypes.prototype.createResponse = function () { return new AllTypes(); };
    TestDataAllTypes.prototype.getTypeName = function () { return "TestDataAllTypes"; };
    return TestDataAllTypes;
}());
exports.TestDataAllTypes = TestDataAllTypes;
// @Route("/testdata/AllCollectionTypes")
var TestDataAllCollectionTypes = /** @class */ (function () {
    function TestDataAllCollectionTypes() {
    }
    TestDataAllCollectionTypes.prototype.createResponse = function () { return new AllCollectionTypes(); };
    TestDataAllCollectionTypes.prototype.getTypeName = function () { return "TestDataAllCollectionTypes"; };
    return TestDataAllCollectionTypes;
}());
exports.TestDataAllCollectionTypes = TestDataAllCollectionTypes;
// @Route("/void-response")
var TestVoidResponse = /** @class */ (function () {
    function TestVoidResponse() {
    }
    return TestVoidResponse;
}());
exports.TestVoidResponse = TestVoidResponse;
// @Route("/null-response")
var TestNullResponse = /** @class */ (function () {
    function TestNullResponse() {
    }
    return TestNullResponse;
}());
exports.TestNullResponse = TestNullResponse;
// @Route("/Stuff")
// @DataContract(Namespace="http://schemas.servicestack.net/types")
var GetStuff = /** @class */ (function () {
    function GetStuff() {
    }
    GetStuff.prototype.createResponse = function () { return new GetStuffResponse(); };
    GetStuff.prototype.getTypeName = function () { return "GetStuff"; };
    return GetStuff;
}());
exports.GetStuff = GetStuff;
// @Route("/auth")
// @Route("/auth/{provider}")
// @Route("/authenticate")
// @Route("/authenticate/{provider}")
// @DataContract
var Authenticate = /** @class */ (function () {
    function Authenticate() {
    }
    Authenticate.prototype.createResponse = function () { return new AuthenticateResponse(); };
    Authenticate.prototype.getTypeName = function () { return "Authenticate"; };
    return Authenticate;
}());
exports.Authenticate = Authenticate;
// @Route("/assignroles")
// @DataContract
var AssignRoles = /** @class */ (function () {
    function AssignRoles() {
    }
    AssignRoles.prototype.createResponse = function () { return new AssignRolesResponse(); };
    AssignRoles.prototype.getTypeName = function () { return "AssignRoles"; };
    return AssignRoles;
}());
exports.AssignRoles = AssignRoles;
// @Route("/unassignroles")
// @DataContract
var UnAssignRoles = /** @class */ (function () {
    function UnAssignRoles() {
    }
    UnAssignRoles.prototype.createResponse = function () { return new UnAssignRolesResponse(); };
    UnAssignRoles.prototype.getTypeName = function () { return "UnAssignRoles"; };
    return UnAssignRoles;
}());
exports.UnAssignRoles = UnAssignRoles;
// @Route("/session-to-token")
// @DataContract
var ConvertSessionToToken = /** @class */ (function () {
    function ConvertSessionToToken() {
    }
    ConvertSessionToToken.prototype.createResponse = function () { return new ConvertSessionToTokenResponse(); };
    ConvertSessionToToken.prototype.getTypeName = function () { return "ConvertSessionToToken"; };
    return ConvertSessionToToken;
}());
exports.ConvertSessionToToken = ConvertSessionToToken;
// @Route("/access-token")
// @DataContract
var GetAccessToken = /** @class */ (function () {
    function GetAccessToken() {
    }
    GetAccessToken.prototype.createResponse = function () { return new GetAccessTokenResponse(); };
    GetAccessToken.prototype.getTypeName = function () { return "GetAccessToken"; };
    return GetAccessToken;
}());
exports.GetAccessToken = GetAccessToken;
var QueryPocoBase = /** @class */ (function (_super) {
    __extends(QueryPocoBase, _super);
    function QueryPocoBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QueryPocoBase.prototype.createResponse = function () { return new QueryResponse(); };
    QueryPocoBase.prototype.getTypeName = function () { return "QueryPocoBase"; };
    return QueryPocoBase;
}(QueryDb_1));
exports.QueryPocoBase = QueryPocoBase;
var QueryPocoIntoBase = /** @class */ (function (_super) {
    __extends(QueryPocoIntoBase, _super);
    function QueryPocoIntoBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QueryPocoIntoBase.prototype.createResponse = function () { return new QueryResponse(); };
    QueryPocoIntoBase.prototype.getTypeName = function () { return "QueryPocoIntoBase"; };
    return QueryPocoIntoBase;
}(QueryDb_2));
exports.QueryPocoIntoBase = QueryPocoIntoBase;
// @Route("/rockstars", "GET")
var QueryRockstars = /** @class */ (function (_super) {
    __extends(QueryRockstars, _super);
    function QueryRockstars() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QueryRockstars.prototype.createResponse = function () { return new QueryResponse(); };
    QueryRockstars.prototype.getTypeName = function () { return "QueryRockstars"; };
    return QueryRockstars;
}(QueryDb_1));
exports.QueryRockstars = QueryRockstars;
//# sourceMappingURL=Test.dtos.js.map