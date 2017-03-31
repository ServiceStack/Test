/* Options:
Date: 2017-02-10 11:04:42
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
"use strict";
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
var ResponseError = (function () {
    function ResponseError() {
    }
    return ResponseError;
}());
exports.ResponseError = ResponseError;
// @DataContract
var ResponseStatus = (function () {
    function ResponseStatus() {
    }
    return ResponseStatus;
}());
exports.ResponseStatus = ResponseStatus;
var ExternalType = (function () {
    function ExternalType() {
    }
    return ExternalType;
}());
exports.ExternalType = ExternalType;
var MetadataTestNestedChild = (function () {
    function MetadataTestNestedChild() {
    }
    return MetadataTestNestedChild;
}());
exports.MetadataTestNestedChild = MetadataTestNestedChild;
var MetadataTestChild = (function () {
    function MetadataTestChild() {
    }
    return MetadataTestChild;
}());
exports.MetadataTestChild = MetadataTestChild;
var MenuItemExampleItem = (function () {
    function MenuItemExampleItem() {
    }
    return MenuItemExampleItem;
}());
exports.MenuItemExampleItem = MenuItemExampleItem;
var MenuItemExample = (function () {
    function MenuItemExample() {
    }
    return MenuItemExample;
}());
exports.MenuItemExample = MenuItemExample;
// @DataContract
var MenuExample = (function () {
    function MenuExample() {
    }
    return MenuExample;
}());
exports.MenuExample = MenuExample;
var NestedClass = (function () {
    function NestedClass() {
    }
    return NestedClass;
}());
exports.NestedClass = NestedClass;
var ListResult = (function () {
    function ListResult() {
    }
    return ListResult;
}());
exports.ListResult = ListResult;
var ArrayResult = (function () {
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
var Poco = (function () {
    function Poco() {
    }
    return Poco;
}());
exports.Poco = Poco;
var AllCollectionTypes = (function () {
    function AllCollectionTypes() {
    }
    return AllCollectionTypes;
}());
exports.AllCollectionTypes = AllCollectionTypes;
var KeyValuePair = (function () {
    function KeyValuePair() {
    }
    return KeyValuePair;
}());
exports.KeyValuePair = KeyValuePair;
var SubType = (function () {
    function SubType() {
    }
    return SubType;
}());
exports.SubType = SubType;
var HelloBase = (function () {
    function HelloBase() {
    }
    return HelloBase;
}());
exports.HelloBase = HelloBase;
var HelloResponseBase = (function () {
    function HelloResponseBase() {
    }
    return HelloResponseBase;
}());
exports.HelloResponseBase = HelloResponseBase;
var HelloBase_1 = (function () {
    function HelloBase_1() {
    }
    return HelloBase_1;
}());
exports.HelloBase_1 = HelloBase_1;
var Item = (function () {
    function Item() {
    }
    return Item;
}());
exports.Item = Item;
var HelloWithReturnResponse = (function () {
    function HelloWithReturnResponse() {
    }
    return HelloWithReturnResponse;
}());
exports.HelloWithReturnResponse = HelloWithReturnResponse;
var HelloType = (function () {
    function HelloType() {
    }
    return HelloType;
}());
exports.HelloType = HelloType;
var EmptyClass = (function () {
    function EmptyClass() {
    }
    return EmptyClass;
}());
exports.EmptyClass = EmptyClass;
var InnerType = (function () {
    function InnerType() {
    }
    return InnerType;
}());
exports.InnerType = InnerType;
var PingService = (function () {
    function PingService() {
    }
    return PingService;
}());
exports.PingService = PingService;
var ReturnedDto = (function () {
    function ReturnedDto() {
    }
    return ReturnedDto;
}());
exports.ReturnedDto = ReturnedDto;
// @DataContract
var AuthUserSession = (function () {
    function AuthUserSession() {
    }
    return AuthUserSession;
}());
exports.AuthUserSession = AuthUserSession;
var CustomUserSession = (function (_super) {
    __extends(CustomUserSession, _super);
    function CustomUserSession() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CustomUserSession;
}(AuthUserSession));
exports.CustomUserSession = CustomUserSession;
var UnAuthInfo = (function () {
    function UnAuthInfo() {
    }
    return UnAuthInfo;
}());
exports.UnAuthInfo = UnAuthInfo;
var Channel = (function () {
    function Channel() {
    }
    return Channel;
}());
exports.Channel = Channel;
var Device = (function () {
    function Device() {
    }
    return Device;
}());
exports.Device = Device;
var Logger = (function () {
    function Logger() {
    }
    return Logger;
}());
exports.Logger = Logger;
var QueryBase = (function () {
    function QueryBase() {
    }
    return QueryBase;
}());
exports.QueryBase = QueryBase;
var QueryBase_1 = (function (_super) {
    __extends(QueryBase_1, _super);
    function QueryBase_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return QueryBase_1;
}(QueryBase));
exports.QueryBase_1 = QueryBase_1;
var OnlyDefinedInGenericType = (function () {
    function OnlyDefinedInGenericType() {
    }
    return OnlyDefinedInGenericType;
}());
exports.OnlyDefinedInGenericType = OnlyDefinedInGenericType;
var QueryBase_2 = (function (_super) {
    __extends(QueryBase_2, _super);
    function QueryBase_2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return QueryBase_2;
}(QueryBase));
exports.QueryBase_2 = QueryBase_2;
var OnlyDefinedInGenericTypeFrom = (function () {
    function OnlyDefinedInGenericTypeFrom() {
    }
    return OnlyDefinedInGenericTypeFrom;
}());
exports.OnlyDefinedInGenericTypeFrom = OnlyDefinedInGenericTypeFrom;
var OnlyDefinedInGenericTypeInto = (function () {
    function OnlyDefinedInGenericTypeInto() {
    }
    return OnlyDefinedInGenericTypeInto;
}());
exports.OnlyDefinedInGenericTypeInto = OnlyDefinedInGenericTypeInto;
var Rockstar = (function () {
    function Rockstar() {
    }
    return Rockstar;
}());
exports.Rockstar = Rockstar;
var TypesGroup = (function () {
    function TypesGroup() {
    }
    return TypesGroup;
}());
exports.TypesGroup = TypesGroup;
var CustomHttpErrorResponse = (function () {
    function CustomHttpErrorResponse() {
    }
    return CustomHttpErrorResponse;
}());
exports.CustomHttpErrorResponse = CustomHttpErrorResponse;
var ThrowTypeResponse = (function () {
    function ThrowTypeResponse() {
    }
    return ThrowTypeResponse;
}());
exports.ThrowTypeResponse = ThrowTypeResponse;
var ThrowValidationResponse = (function () {
    function ThrowValidationResponse() {
    }
    return ThrowValidationResponse;
}());
exports.ThrowValidationResponse = ThrowValidationResponse;
var ThrowBusinessErrorResponse = (function () {
    function ThrowBusinessErrorResponse() {
    }
    return ThrowBusinessErrorResponse;
}());
exports.ThrowBusinessErrorResponse = ThrowBusinessErrorResponse;
var ExternalOperationResponse = (function () {
    function ExternalOperationResponse() {
    }
    return ExternalOperationResponse;
}());
exports.ExternalOperationResponse = ExternalOperationResponse;
var ExternalOperation2Response = (function () {
    function ExternalOperation2Response() {
    }
    return ExternalOperation2Response;
}());
exports.ExternalOperation2Response = ExternalOperation2Response;
var ExternalReturnTypeResponse = (function () {
    function ExternalReturnTypeResponse() {
    }
    return ExternalReturnTypeResponse;
}());
exports.ExternalReturnTypeResponse = ExternalReturnTypeResponse;
var Account = (function () {
    function Account() {
    }
    return Account;
}());
exports.Account = Account;
var Project = (function () {
    function Project() {
    }
    return Project;
}());
exports.Project = Project;
var MetadataTestResponse = (function () {
    function MetadataTestResponse() {
    }
    return MetadataTestResponse;
}());
exports.MetadataTestResponse = MetadataTestResponse;
// @DataContract
var GetExampleResponse = (function () {
    function GetExampleResponse() {
    }
    return GetExampleResponse;
}());
exports.GetExampleResponse = GetExampleResponse;
var GetRandomIdsResponse = (function () {
    function GetRandomIdsResponse() {
    }
    return GetRandomIdsResponse;
}());
exports.GetRandomIdsResponse = GetRandomIdsResponse;
var HelloResponse = (function () {
    function HelloResponse() {
    }
    return HelloResponse;
}());
exports.HelloResponse = HelloResponse;
/**
* Description on HelloAllResponse type
*/
// @DataContract
var HelloAnnotatedResponse = (function () {
    function HelloAnnotatedResponse() {
    }
    return HelloAnnotatedResponse;
}());
exports.HelloAnnotatedResponse = HelloAnnotatedResponse;
var AllTypes = (function () {
    function AllTypes() {
    }
    return AllTypes;
}());
exports.AllTypes = AllTypes;
var HelloAllTypesResponse = (function () {
    function HelloAllTypesResponse() {
    }
    return HelloAllTypesResponse;
}());
exports.HelloAllTypesResponse = HelloAllTypesResponse;
var HelloDateTime = (function () {
    function HelloDateTime() {
    }
    HelloDateTime.prototype.createResponse = function () { return new HelloDateTime(); };
    HelloDateTime.prototype.getTypeName = function () { return "HelloDateTime"; };
    return HelloDateTime;
}());
exports.HelloDateTime = HelloDateTime;
// @DataContract
var HelloWithDataContractResponse = (function () {
    function HelloWithDataContractResponse() {
    }
    return HelloWithDataContractResponse;
}());
exports.HelloWithDataContractResponse = HelloWithDataContractResponse;
/**
* Description on HelloWithDescriptionResponse type
*/
var HelloWithDescriptionResponse = (function () {
    function HelloWithDescriptionResponse() {
    }
    return HelloWithDescriptionResponse;
}());
exports.HelloWithDescriptionResponse = HelloWithDescriptionResponse;
var HelloWithInheritanceResponse = (function (_super) {
    __extends(HelloWithInheritanceResponse, _super);
    function HelloWithInheritanceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HelloWithInheritanceResponse;
}(HelloResponseBase));
exports.HelloWithInheritanceResponse = HelloWithInheritanceResponse;
var HelloWithAlternateReturnResponse = (function (_super) {
    __extends(HelloWithAlternateReturnResponse, _super);
    function HelloWithAlternateReturnResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HelloWithAlternateReturnResponse;
}(HelloWithReturnResponse));
exports.HelloWithAlternateReturnResponse = HelloWithAlternateReturnResponse;
var HelloWithRouteResponse = (function () {
    function HelloWithRouteResponse() {
    }
    return HelloWithRouteResponse;
}());
exports.HelloWithRouteResponse = HelloWithRouteResponse;
var HelloWithTypeResponse = (function () {
    function HelloWithTypeResponse() {
    }
    return HelloWithTypeResponse;
}());
exports.HelloWithTypeResponse = HelloWithTypeResponse;
var HelloInnerTypesResponse = (function () {
    function HelloInnerTypesResponse() {
    }
    return HelloInnerTypesResponse;
}());
exports.HelloInnerTypesResponse = HelloInnerTypesResponse;
var HelloVerbResponse = (function () {
    function HelloVerbResponse() {
    }
    return HelloVerbResponse;
}());
exports.HelloVerbResponse = HelloVerbResponse;
var EnumResponse = (function () {
    function EnumResponse() {
    }
    return EnumResponse;
}());
exports.EnumResponse = EnumResponse;
// @Route("/hellotypes/{Name}")
var HelloTypes = (function () {
    function HelloTypes() {
    }
    HelloTypes.prototype.createResponse = function () { return new HelloTypes(); };
    HelloTypes.prototype.getTypeName = function () { return "HelloTypes"; };
    return HelloTypes;
}());
exports.HelloTypes = HelloTypes;
// @DataContract
var HelloZipResponse = (function () {
    function HelloZipResponse() {
    }
    return HelloZipResponse;
}());
exports.HelloZipResponse = HelloZipResponse;
var PingResponse = (function () {
    function PingResponse() {
    }
    return PingResponse;
}());
exports.PingResponse = PingResponse;
var RequiresRoleResponse = (function () {
    function RequiresRoleResponse() {
    }
    return RequiresRoleResponse;
}());
exports.RequiresRoleResponse = RequiresRoleResponse;
var SendVerbResponse = (function () {
    function SendVerbResponse() {
    }
    return SendVerbResponse;
}());
exports.SendVerbResponse = SendVerbResponse;
var GetSessionResponse = (function () {
    function GetSessionResponse() {
    }
    return GetSessionResponse;
}());
exports.GetSessionResponse = GetSessionResponse;
var StoreLogsResponse = (function () {
    function StoreLogsResponse() {
    }
    return StoreLogsResponse;
}());
exports.StoreLogsResponse = StoreLogsResponse;
var TestAuthResponse = (function () {
    function TestAuthResponse() {
    }
    return TestAuthResponse;
}());
exports.TestAuthResponse = TestAuthResponse;
// @Route("/wait/{ForMs}")
var Wait = (function () {
    function Wait() {
    }
    Wait.prototype.createResponse = function () { return new Wait(); };
    Wait.prototype.getTypeName = function () { return "Wait"; };
    return Wait;
}());
exports.Wait = Wait;
// @Route("/echo/types")
var EchoTypes = (function () {
    function EchoTypes() {
    }
    EchoTypes.prototype.createResponse = function () { return new EchoTypes(); };
    EchoTypes.prototype.getTypeName = function () { return "EchoTypes"; };
    return EchoTypes;
}());
exports.EchoTypes = EchoTypes;
// @Route("/echo/collections")
var EchoCollections = (function () {
    function EchoCollections() {
    }
    EchoCollections.prototype.createResponse = function () { return new EchoCollections(); };
    EchoCollections.prototype.getTypeName = function () { return "EchoCollections"; };
    return EchoCollections;
}());
exports.EchoCollections = EchoCollections;
var EchoComplexTypes = (function () {
    function EchoComplexTypes() {
    }
    EchoComplexTypes.prototype.createResponse = function () { return new EchoComplexTypes(); };
    EchoComplexTypes.prototype.getTypeName = function () { return "EchoComplexTypes"; };
    return EchoComplexTypes;
}());
exports.EchoComplexTypes = EchoComplexTypes;
// @DataContract
var AuthenticateResponse = (function () {
    function AuthenticateResponse() {
    }
    return AuthenticateResponse;
}());
exports.AuthenticateResponse = AuthenticateResponse;
// @DataContract
var AssignRolesResponse = (function () {
    function AssignRolesResponse() {
    }
    return AssignRolesResponse;
}());
exports.AssignRolesResponse = AssignRolesResponse;
// @DataContract
var UnAssignRolesResponse = (function () {
    function UnAssignRolesResponse() {
    }
    return UnAssignRolesResponse;
}());
exports.UnAssignRolesResponse = UnAssignRolesResponse;
// @DataContract
var QueryResponse = (function () {
    function QueryResponse() {
    }
    return QueryResponse;
}());
exports.QueryResponse = QueryResponse;
var CustomHttpError = (function () {
    function CustomHttpError() {
    }
    CustomHttpError.prototype.createResponse = function () { return new CustomHttpErrorResponse(); };
    CustomHttpError.prototype.getTypeName = function () { return "CustomHttpError"; };
    return CustomHttpError;
}());
exports.CustomHttpError = CustomHttpError;
// @Route("/throwhttperror/{Status}")
var ThrowHttpError = (function () {
    function ThrowHttpError() {
    }
    return ThrowHttpError;
}());
exports.ThrowHttpError = ThrowHttpError;
// @Route("/throw404")
// @Route("/throw404/{Message}")
var Throw404 = (function () {
    function Throw404() {
    }
    return Throw404;
}());
exports.Throw404 = Throw404;
// @Route("/throwcustom400")
// @Route("/throwcustom400/{Message}")
var ThrowCustom400 = (function () {
    function ThrowCustom400() {
    }
    return ThrowCustom400;
}());
exports.ThrowCustom400 = ThrowCustom400;
// @Route("/throw/{Type}")
var ThrowType = (function () {
    function ThrowType() {
    }
    ThrowType.prototype.createResponse = function () { return new ThrowTypeResponse(); };
    ThrowType.prototype.getTypeName = function () { return "ThrowType"; };
    return ThrowType;
}());
exports.ThrowType = ThrowType;
// @Route("/throwvalidation")
var ThrowValidation = (function () {
    function ThrowValidation() {
    }
    ThrowValidation.prototype.createResponse = function () { return new ThrowValidationResponse(); };
    ThrowValidation.prototype.getTypeName = function () { return "ThrowValidation"; };
    return ThrowValidation;
}());
exports.ThrowValidation = ThrowValidation;
// @Route("/throwbusinesserror")
var ThrowBusinessError = (function () {
    function ThrowBusinessError() {
    }
    ThrowBusinessError.prototype.createResponse = function () { return new ThrowBusinessErrorResponse(); };
    ThrowBusinessError.prototype.getTypeName = function () { return "ThrowBusinessError"; };
    return ThrowBusinessError;
}());
exports.ThrowBusinessError = ThrowBusinessError;
var ExternalOperation = (function () {
    function ExternalOperation() {
    }
    ExternalOperation.prototype.createResponse = function () { return new ExternalOperationResponse(); };
    ExternalOperation.prototype.getTypeName = function () { return "ExternalOperation"; };
    return ExternalOperation;
}());
exports.ExternalOperation = ExternalOperation;
var ExternalOperation2 = (function () {
    function ExternalOperation2() {
    }
    ExternalOperation2.prototype.createResponse = function () { return new ExternalOperation2Response(); };
    ExternalOperation2.prototype.getTypeName = function () { return "ExternalOperation2"; };
    return ExternalOperation2;
}());
exports.ExternalOperation2 = ExternalOperation2;
var ExternalOperation3 = (function () {
    function ExternalOperation3() {
    }
    ExternalOperation3.prototype.createResponse = function () { return new ExternalReturnTypeResponse(); };
    ExternalOperation3.prototype.getTypeName = function () { return "ExternalOperation3"; };
    return ExternalOperation3;
}());
exports.ExternalOperation3 = ExternalOperation3;
var ExternalOperation4 = (function () {
    function ExternalOperation4() {
    }
    return ExternalOperation4;
}());
exports.ExternalOperation4 = ExternalOperation4;
// @Route("/{Path*}")
var RootPathRoutes = (function () {
    function RootPathRoutes() {
    }
    return RootPathRoutes;
}());
exports.RootPathRoutes = RootPathRoutes;
var GetAccount = (function () {
    function GetAccount() {
    }
    GetAccount.prototype.createResponse = function () { return new Account(); };
    GetAccount.prototype.getTypeName = function () { return "GetAccount"; };
    return GetAccount;
}());
exports.GetAccount = GetAccount;
var GetProject = (function () {
    function GetProject() {
    }
    GetProject.prototype.createResponse = function () { return new Project(); };
    GetProject.prototype.getTypeName = function () { return "GetProject"; };
    return GetProject;
}());
exports.GetProject = GetProject;
// @Route("/image-stream")
var ImageAsStream = (function () {
    function ImageAsStream() {
    }
    return ImageAsStream;
}());
exports.ImageAsStream = ImageAsStream;
// @Route("/image-bytes")
var ImageAsBytes = (function () {
    function ImageAsBytes() {
    }
    return ImageAsBytes;
}());
exports.ImageAsBytes = ImageAsBytes;
// @Route("/image-custom")
var ImageAsCustomResult = (function () {
    function ImageAsCustomResult() {
    }
    return ImageAsCustomResult;
}());
exports.ImageAsCustomResult = ImageAsCustomResult;
// @Route("/image-response")
var ImageWriteToResponse = (function () {
    function ImageWriteToResponse() {
    }
    return ImageWriteToResponse;
}());
exports.ImageWriteToResponse = ImageWriteToResponse;
// @Route("/image-file")
var ImageAsFile = (function () {
    function ImageAsFile() {
    }
    return ImageAsFile;
}());
exports.ImageAsFile = ImageAsFile;
// @Route("/image-redirect")
var ImageAsRedirect = (function () {
    function ImageAsRedirect() {
    }
    return ImageAsRedirect;
}());
exports.ImageAsRedirect = ImageAsRedirect;
// @Route("/image-draw/{Name}")
var DrawImage = (function () {
    function DrawImage() {
    }
    return DrawImage;
}());
exports.DrawImage = DrawImage;
// @Route("/metadatatest")
var MetadataTest = (function () {
    function MetadataTest() {
    }
    MetadataTest.prototype.createResponse = function () { return new MetadataTestResponse(); };
    MetadataTest.prototype.getTypeName = function () { return "MetadataTest"; };
    return MetadataTest;
}());
exports.MetadataTest = MetadataTest;
// @Route("/metadatatest-array")
var MetadataTestArray = (function () {
    function MetadataTestArray() {
    }
    MetadataTestArray.prototype.createResponse = function () { return new Array(); };
    MetadataTestArray.prototype.getTypeName = function () { return "MetadataTestArray"; };
    return MetadataTestArray;
}());
exports.MetadataTestArray = MetadataTestArray;
// @Route("/example", "GET")
// @DataContract
var GetExample = (function () {
    function GetExample() {
    }
    GetExample.prototype.createResponse = function () { return new GetExampleResponse(); };
    GetExample.prototype.getTypeName = function () { return "GetExample"; };
    return GetExample;
}());
exports.GetExample = GetExample;
// @Route("/randomids")
var GetRandomIds = (function () {
    function GetRandomIds() {
    }
    GetRandomIds.prototype.createResponse = function () { return new GetRandomIdsResponse(); };
    GetRandomIds.prototype.getTypeName = function () { return "GetRandomIds"; };
    return GetRandomIds;
}());
exports.GetRandomIds = GetRandomIds;
// @Route("/textfile-test")
var TextFileTest = (function () {
    function TextFileTest() {
    }
    return TextFileTest;
}());
exports.TextFileTest = TextFileTest;
// @Route("/hello")
// @Route("/hello/{Name}")
var Hello = (function () {
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
var HelloAnnotated = (function () {
    function HelloAnnotated() {
    }
    HelloAnnotated.prototype.createResponse = function () { return new HelloAnnotatedResponse(); };
    HelloAnnotated.prototype.getTypeName = function () { return "HelloAnnotated"; };
    return HelloAnnotated;
}());
exports.HelloAnnotated = HelloAnnotated;
var HelloWithNestedClass = (function () {
    function HelloWithNestedClass() {
    }
    HelloWithNestedClass.prototype.createResponse = function () { return new HelloResponse(); };
    HelloWithNestedClass.prototype.getTypeName = function () { return "HelloWithNestedClass"; };
    return HelloWithNestedClass;
}());
exports.HelloWithNestedClass = HelloWithNestedClass;
var HelloList = (function () {
    function HelloList() {
    }
    HelloList.prototype.createResponse = function () { return new Array(); };
    HelloList.prototype.getTypeName = function () { return "HelloList"; };
    return HelloList;
}());
exports.HelloList = HelloList;
var HelloArray = (function () {
    function HelloArray() {
    }
    HelloArray.prototype.createResponse = function () { return new Array(); };
    HelloArray.prototype.getTypeName = function () { return "HelloArray"; };
    return HelloArray;
}());
exports.HelloArray = HelloArray;
var HelloWithEnum = (function () {
    function HelloWithEnum() {
    }
    return HelloWithEnum;
}());
exports.HelloWithEnum = HelloWithEnum;
var RestrictedAttributes = (function () {
    function RestrictedAttributes() {
    }
    return RestrictedAttributes;
}());
exports.RestrictedAttributes = RestrictedAttributes;
/**
* AllowedAttributes Description
*/
// @Route("/allowed-attributes", "GET")
// @Api("AllowedAttributes Description")
// @ApiResponse(400, "Your request was not understood")
// @DataContract
var AllowedAttributes = (function () {
    function AllowedAttributes() {
    }
    return AllowedAttributes;
}());
exports.AllowedAttributes = AllowedAttributes;
// @Route("/all-types")
var HelloAllTypes = (function () {
    function HelloAllTypes() {
    }
    HelloAllTypes.prototype.createResponse = function () { return new HelloAllTypesResponse(); };
    HelloAllTypes.prototype.getTypeName = function () { return "HelloAllTypes"; };
    return HelloAllTypes;
}());
exports.HelloAllTypes = HelloAllTypes;
var HelloString = (function () {
    function HelloString() {
    }
    HelloString.prototype.createResponse = function () { return ""; };
    HelloString.prototype.getTypeName = function () { return "HelloString"; };
    return HelloString;
}());
exports.HelloString = HelloString;
var HelloVoid = (function () {
    function HelloVoid() {
    }
    return HelloVoid;
}());
exports.HelloVoid = HelloVoid;
// @DataContract
var HelloWithDataContract = (function () {
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
var HelloWithDescription = (function () {
    function HelloWithDescription() {
    }
    HelloWithDescription.prototype.createResponse = function () { return new HelloWithDescriptionResponse(); };
    HelloWithDescription.prototype.getTypeName = function () { return "HelloWithDescription"; };
    return HelloWithDescription;
}());
exports.HelloWithDescription = HelloWithDescription;
var HelloWithInheritance = (function (_super) {
    __extends(HelloWithInheritance, _super);
    function HelloWithInheritance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelloWithInheritance.prototype.createResponse = function () { return new HelloWithInheritanceResponse(); };
    HelloWithInheritance.prototype.getTypeName = function () { return "HelloWithInheritance"; };
    return HelloWithInheritance;
}(HelloBase));
exports.HelloWithInheritance = HelloWithInheritance;
var HelloWithGenericInheritance = (function (_super) {
    __extends(HelloWithGenericInheritance, _super);
    function HelloWithGenericInheritance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HelloWithGenericInheritance;
}(HelloBase_1));
exports.HelloWithGenericInheritance = HelloWithGenericInheritance;
var HelloWithGenericInheritance2 = (function (_super) {
    __extends(HelloWithGenericInheritance2, _super);
    function HelloWithGenericInheritance2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HelloWithGenericInheritance2;
}(HelloBase_1));
exports.HelloWithGenericInheritance2 = HelloWithGenericInheritance2;
var HelloWithNestedInheritance = (function (_super) {
    __extends(HelloWithNestedInheritance, _super);
    function HelloWithNestedInheritance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HelloWithNestedInheritance;
}(HelloBase_1));
exports.HelloWithNestedInheritance = HelloWithNestedInheritance;
var HelloWithReturn = (function () {
    function HelloWithReturn() {
    }
    HelloWithReturn.prototype.createResponse = function () { return new HelloWithAlternateReturnResponse(); };
    HelloWithReturn.prototype.getTypeName = function () { return "HelloWithReturn"; };
    return HelloWithReturn;
}());
exports.HelloWithReturn = HelloWithReturn;
// @Route("/helloroute")
var HelloWithRoute = (function () {
    function HelloWithRoute() {
    }
    HelloWithRoute.prototype.createResponse = function () { return new HelloWithRouteResponse(); };
    HelloWithRoute.prototype.getTypeName = function () { return "HelloWithRoute"; };
    return HelloWithRoute;
}());
exports.HelloWithRoute = HelloWithRoute;
var HelloWithType = (function () {
    function HelloWithType() {
    }
    HelloWithType.prototype.createResponse = function () { return new HelloWithTypeResponse(); };
    HelloWithType.prototype.getTypeName = function () { return "HelloWithType"; };
    return HelloWithType;
}());
exports.HelloWithType = HelloWithType;
var HelloInterface = (function () {
    function HelloInterface() {
    }
    return HelloInterface;
}());
exports.HelloInterface = HelloInterface;
var HelloInnerTypes = (function () {
    function HelloInnerTypes() {
    }
    HelloInnerTypes.prototype.createResponse = function () { return new HelloInnerTypesResponse(); };
    HelloInnerTypes.prototype.getTypeName = function () { return "HelloInnerTypes"; };
    return HelloInnerTypes;
}());
exports.HelloInnerTypes = HelloInnerTypes;
var HelloBuiltin = (function () {
    function HelloBuiltin() {
    }
    return HelloBuiltin;
}());
exports.HelloBuiltin = HelloBuiltin;
var HelloGet = (function () {
    function HelloGet() {
    }
    HelloGet.prototype.createResponse = function () { return new HelloVerbResponse(); };
    HelloGet.prototype.getTypeName = function () { return "HelloGet"; };
    return HelloGet;
}());
exports.HelloGet = HelloGet;
var HelloPost = (function (_super) {
    __extends(HelloPost, _super);
    function HelloPost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelloPost.prototype.createResponse = function () { return new HelloVerbResponse(); };
    HelloPost.prototype.getTypeName = function () { return "HelloPost"; };
    return HelloPost;
}(HelloBase));
exports.HelloPost = HelloPost;
var HelloPut = (function () {
    function HelloPut() {
    }
    HelloPut.prototype.createResponse = function () { return new HelloVerbResponse(); };
    HelloPut.prototype.getTypeName = function () { return "HelloPut"; };
    return HelloPut;
}());
exports.HelloPut = HelloPut;
var HelloDelete = (function () {
    function HelloDelete() {
    }
    HelloDelete.prototype.createResponse = function () { return new HelloVerbResponse(); };
    HelloDelete.prototype.getTypeName = function () { return "HelloDelete"; };
    return HelloDelete;
}());
exports.HelloDelete = HelloDelete;
var HelloPatch = (function () {
    function HelloPatch() {
    }
    HelloPatch.prototype.createResponse = function () { return new HelloVerbResponse(); };
    HelloPatch.prototype.getTypeName = function () { return "HelloPatch"; };
    return HelloPatch;
}());
exports.HelloPatch = HelloPatch;
var HelloReturnVoid = (function () {
    function HelloReturnVoid() {
    }
    HelloReturnVoid.prototype.createResponse = function () { };
    HelloReturnVoid.prototype.getTypeName = function () { return "HelloReturnVoid"; };
    return HelloReturnVoid;
}());
exports.HelloReturnVoid = HelloReturnVoid;
var EnumRequest = (function () {
    function EnumRequest() {
    }
    EnumRequest.prototype.createResponse = function () { return new EnumResponse(); };
    EnumRequest.prototype.getTypeName = function () { return "EnumRequest"; };
    return EnumRequest;
}());
exports.EnumRequest = EnumRequest;
// @Route("/hellozip")
// @DataContract
var HelloZip = (function () {
    function HelloZip() {
    }
    HelloZip.prototype.createResponse = function () { return new HelloZipResponse(); };
    HelloZip.prototype.getTypeName = function () { return "HelloZip"; };
    return HelloZip;
}());
exports.HelloZip = HelloZip;
// @Route("/ping")
var Ping = (function () {
    function Ping() {
    }
    Ping.prototype.createResponse = function () { return new PingResponse(); };
    Ping.prototype.getTypeName = function () { return "Ping"; };
    return Ping;
}());
exports.Ping = Ping;
// @Route("/reset-connections")
var ResetConnections = (function () {
    function ResetConnections() {
    }
    return ResetConnections;
}());
exports.ResetConnections = ResetConnections;
// @Route("/requires-role")
var RequiresRole = (function () {
    function RequiresRole() {
    }
    RequiresRole.prototype.createResponse = function () { return new RequiresRoleResponse(); };
    RequiresRole.prototype.getTypeName = function () { return "RequiresRole"; };
    return RequiresRole;
}());
exports.RequiresRole = RequiresRole;
// @Route("/return/string")
var ReturnString = (function () {
    function ReturnString() {
    }
    ReturnString.prototype.createResponse = function () { return ""; };
    ReturnString.prototype.getTypeName = function () { return "ReturnString"; };
    return ReturnString;
}());
exports.ReturnString = ReturnString;
// @Route("/return/bytes")
var ReturnBytes = (function () {
    function ReturnBytes() {
    }
    ReturnBytes.prototype.createResponse = function () { return new Uint8Array(0); };
    ReturnBytes.prototype.getTypeName = function () { return "ReturnBytes"; };
    return ReturnBytes;
}());
exports.ReturnBytes = ReturnBytes;
// @Route("/return/stream")
var ReturnStream = (function () {
    function ReturnStream() {
    }
    ReturnStream.prototype.createResponse = function () { return new Blob(); };
    ReturnStream.prototype.getTypeName = function () { return "ReturnStream"; };
    return ReturnStream;
}());
exports.ReturnStream = ReturnStream;
// @Route("/Request1", "GET")
var GetRequest1 = (function () {
    function GetRequest1() {
    }
    GetRequest1.prototype.createResponse = function () { return new Array(); };
    GetRequest1.prototype.getTypeName = function () { return "GetRequest1"; };
    return GetRequest1;
}());
exports.GetRequest1 = GetRequest1;
// @Route("/Request2", "GET")
var GetRequest2 = (function () {
    function GetRequest2() {
    }
    GetRequest2.prototype.createResponse = function () { return new Array(); };
    GetRequest2.prototype.getTypeName = function () { return "GetRequest2"; };
    return GetRequest2;
}());
exports.GetRequest2 = GetRequest2;
var SendDefault = (function () {
    function SendDefault() {
    }
    SendDefault.prototype.createResponse = function () { return new SendVerbResponse(); };
    SendDefault.prototype.getTypeName = function () { return "SendDefault"; };
    return SendDefault;
}());
exports.SendDefault = SendDefault;
// @Route("/sendrestget/{Id}", "GET")
var SendRestGet = (function () {
    function SendRestGet() {
    }
    SendRestGet.prototype.createResponse = function () { return new SendVerbResponse(); };
    SendRestGet.prototype.getTypeName = function () { return "SendRestGet"; };
    return SendRestGet;
}());
exports.SendRestGet = SendRestGet;
var SendGet = (function () {
    function SendGet() {
    }
    SendGet.prototype.createResponse = function () { return new SendVerbResponse(); };
    SendGet.prototype.getTypeName = function () { return "SendGet"; };
    return SendGet;
}());
exports.SendGet = SendGet;
var SendPost = (function () {
    function SendPost() {
    }
    SendPost.prototype.createResponse = function () { return new SendVerbResponse(); };
    SendPost.prototype.getTypeName = function () { return "SendPost"; };
    return SendPost;
}());
exports.SendPost = SendPost;
var SendPut = (function () {
    function SendPut() {
    }
    SendPut.prototype.createResponse = function () { return new SendVerbResponse(); };
    SendPut.prototype.getTypeName = function () { return "SendPut"; };
    return SendPut;
}());
exports.SendPut = SendPut;
// @Route("/session")
var GetSession = (function () {
    function GetSession() {
    }
    GetSession.prototype.createResponse = function () { return new GetSessionResponse(); };
    GetSession.prototype.getTypeName = function () { return "GetSession"; };
    return GetSession;
}());
exports.GetSession = GetSession;
// @Route("/session/edit/{CustomName}")
var UpdateSession = (function () {
    function UpdateSession() {
    }
    UpdateSession.prototype.createResponse = function () { return new GetSessionResponse(); };
    UpdateSession.prototype.getTypeName = function () { return "UpdateSession"; };
    return UpdateSession;
}());
exports.UpdateSession = UpdateSession;
var StoreLogs = (function () {
    function StoreLogs() {
    }
    StoreLogs.prototype.createResponse = function () { return new StoreLogsResponse(); };
    StoreLogs.prototype.getTypeName = function () { return "StoreLogs"; };
    return StoreLogs;
}());
exports.StoreLogs = StoreLogs;
// @Route("/testauth")
var TestAuth = (function () {
    function TestAuth() {
    }
    TestAuth.prototype.createResponse = function () { return new TestAuthResponse(); };
    TestAuth.prototype.getTypeName = function () { return "TestAuth"; };
    return TestAuth;
}());
exports.TestAuth = TestAuth;
// @Route("/void-response")
var TestVoidResponse = (function () {
    function TestVoidResponse() {
    }
    return TestVoidResponse;
}());
exports.TestVoidResponse = TestVoidResponse;
// @Route("/null-response")
var TestNullResponse = (function () {
    function TestNullResponse() {
    }
    return TestNullResponse;
}());
exports.TestNullResponse = TestNullResponse;
// @Route("/auth")
// @Route("/auth/{provider}")
// @Route("/authenticate")
// @Route("/authenticate/{provider}")
// @DataContract
var Authenticate = (function () {
    function Authenticate() {
    }
    Authenticate.prototype.createResponse = function () { return new AuthenticateResponse(); };
    Authenticate.prototype.getTypeName = function () { return "Authenticate"; };
    return Authenticate;
}());
exports.Authenticate = Authenticate;
// @Route("/assignroles")
// @DataContract
var AssignRoles = (function () {
    function AssignRoles() {
    }
    AssignRoles.prototype.createResponse = function () { return new AssignRolesResponse(); };
    AssignRoles.prototype.getTypeName = function () { return "AssignRoles"; };
    return AssignRoles;
}());
exports.AssignRoles = AssignRoles;
// @Route("/unassignroles")
// @DataContract
var UnAssignRoles = (function () {
    function UnAssignRoles() {
    }
    UnAssignRoles.prototype.createResponse = function () { return new UnAssignRolesResponse(); };
    UnAssignRoles.prototype.getTypeName = function () { return "UnAssignRoles"; };
    return UnAssignRoles;
}());
exports.UnAssignRoles = UnAssignRoles;
var QueryPocoBase = (function (_super) {
    __extends(QueryPocoBase, _super);
    function QueryPocoBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QueryPocoBase.prototype.createResponse = function () { return new QueryResponse(); };
    QueryPocoBase.prototype.getTypeName = function () { return "QueryPocoBase"; };
    return QueryPocoBase;
}(QueryBase_1));
exports.QueryPocoBase = QueryPocoBase;
var QueryPocoIntoBase = (function (_super) {
    __extends(QueryPocoIntoBase, _super);
    function QueryPocoIntoBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QueryPocoIntoBase.prototype.createResponse = function () { return new QueryResponse(); };
    QueryPocoIntoBase.prototype.getTypeName = function () { return "QueryPocoIntoBase"; };
    return QueryPocoIntoBase;
}(QueryBase_2));
exports.QueryPocoIntoBase = QueryPocoIntoBase;
// @Route("/rockstars")
var QueryRockstars = (function (_super) {
    __extends(QueryRockstars, _super);
    function QueryRockstars() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QueryRockstars.prototype.createResponse = function () { return new QueryResponse(); };
    QueryRockstars.prototype.getTypeName = function () { return "QueryRockstars"; };
    return QueryRockstars;
}(QueryBase_1));
exports.QueryRockstars = QueryRockstars;
//# sourceMappingURL=Test.dtos.js.map