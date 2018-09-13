' Options:
'Date: 2018-05-19 14:53:41
'Version: 5.00
'Tip: To override a DTO option, remove "''" prefix before updating
'BaseUrl: http://localhost:56500
'
'GlobalNamespace: dtos
'''MakePartial: True
'''MakeVirtual: True
'''MakeDataContractsExtensible: False
'''AddReturnMarker: True
'''AddDescriptionAsComments: True
'''AddDataContractAttributes: False
'''AddIndexesToDataMembers: False
'''AddGeneratedCodeAttributes: False
'''AddResponseStatus: False
'''AddImplicitVersion: 
'''InitializeCollections: True
'''ExportValueTypes: False
'''IncludeTypes: 
'''ExcludeTypes: 
'''AddNamespaces: 
'''AddDefaultXmlNamespace: http://schemas.servicestack.net/types

Imports System
Imports System.Collections
Imports System.Collections.Generic
Imports System.Runtime.Serialization
Imports ServiceStack
Imports ServiceStack.DataAnnotations
Imports System.IO
Imports dtos

Namespace Global

    Namespace dtos

        Public Enum ExternalEnum
            Foo
            Bar
            Baz
        End Enum

        Public Enum ExternalEnum2
            Uno
            Due
            Tre
        End Enum

        Public Enum ExternalEnum3
            Un
            Deux
            Trois
        End Enum

        Public Partial Class ExternalOperation
            Implements IReturn(Of ExternalOperationResponse)
            Public Overridable Property Id As Integer
            Public Overridable Property Name As String
            Public Overridable Property ExternalEnum As ExternalEnum
        End Class

        Public Partial Class ExternalOperation2
            Implements IReturn(Of ExternalOperation2Response)
            Public Overridable Property Id As Integer
        End Class

        Public Partial Class ExternalOperation2Response
            Public Overridable Property ExternalType As ExternalType
        End Class

        Public Partial Class ExternalOperation3
            Implements IReturn(Of ExternalReturnTypeResponse)
            Public Overridable Property Id As Integer
        End Class

        Public Partial Class ExternalOperation4
            Public Overridable Property Id As Integer
        End Class

        Public Partial Class ExternalOperationResponse
            Public Overridable Property Result As String
        End Class

        Public Partial Class ExternalReturnTypeResponse
            Public Overridable Property ExternalEnum3 As ExternalEnum3
        End Class

        Public Partial Class ExternalType
            Public Overridable Property ExternalEnum2 As ExternalEnum2
        End Class

        Public Partial Class Account
            Public Overridable Property Name As String
        End Class

        <Route("/jwt")>
        Public Partial Class CreateJwt
            Inherits AuthUserSession
            Implements IReturn(Of CreateJwtResponse)
            Implements IMeta
            Public Overridable Property JwtExpiry As Nullable(Of Date)
        End Class

        Public Partial Class CreateJwtResponse
            Public Overridable Property Token As String
            Public Overridable Property ResponseStatus As ResponseStatus
        End Class

        <Route("/jwt-refresh")>
        Public Partial Class CreateRefreshJwt
            Implements IReturn(Of CreateRefreshJwtResponse)
            Public Overridable Property UserAuthId As String
            Public Overridable Property JwtExpiry As Nullable(Of Date)
        End Class

        Public Partial Class CreateRefreshJwtResponse
            Public Overridable Property Token As String
            Public Overridable Property ResponseStatus As ResponseStatus
        End Class

        <Route("/custom")>
        <Route("/custom/{Data}")>
        Public Partial Class CustomRoute
            Implements IReturn(Of CustomRoute)
            Public Overridable Property Data As String
        End Class

        Public Partial Class CustomUserSession
            Inherits AuthUserSession
            Implements IMeta
            <DataMember>
            Public Overridable Property CustomName As String

            <DataMember>
            Public Overridable Property CustomInfo As String
        End Class

        Public Partial Class DummyTypes
            Public Sub New()
                HelloResponses = New List(Of HelloResponse)
            End Sub

            Public Overridable Property HelloResponses As List(Of HelloResponse)
        End Class

        <Route("/echo/collections")>
        Public Partial Class EchoCollections
            Implements IReturn(Of EchoCollections)
            Public Sub New()
                StringList = New List(Of String)
                StringArray = New String(){}
                StringMap = New Dictionary(Of String, String)
                IntStringMap = New Dictionary(Of Integer, String)
            End Sub

            Public Overridable Property StringList As List(Of String)
            Public Overridable Property StringArray As String()
            Public Overridable Property StringMap As Dictionary(Of String, String)
            Public Overridable Property IntStringMap As Dictionary(Of Integer, String)
        End Class

        <Route("/echo/complex")>
        Public Partial Class EchoComplexTypes
            Implements IReturn(Of EchoComplexTypes)
            Public Sub New()
                SubTypes = New List(Of SubType)
                SubTypeMap = New Dictionary(Of String, SubType)
                StringMap = New Dictionary(Of String, String)
                IntStringMap = New Dictionary(Of Integer, String)
            End Sub

            Public Overridable Property SubType As SubType
            Public Overridable Property SubTypes As List(Of SubType)
            Public Overridable Property SubTypeMap As Dictionary(Of String, SubType)
            Public Overridable Property StringMap As Dictionary(Of String, String)
            Public Overridable Property IntStringMap As Dictionary(Of Integer, String)
        End Class

        <Route("/echo/types")>
        Public Partial Class EchoTypes
            Implements IReturn(Of EchoTypes)
            Public Overridable Property [Byte] As Byte
            Public Overridable Property [Short] As Short
            Public Overridable Property Int As Integer
            Public Overridable Property [Long] As Long
            Public Overridable Property [UShort] As UInt16
            Public Overridable Property UInt As UInt32
            Public Overridable Property [ULong] As UInt64
            Public Overridable Property Float As Single
            Public Overridable Property [Double] As Double
            Public Overridable Property [Decimal] As Decimal
            Public Overridable Property [String] As String
            Public Overridable Property DateTime As Date
            Public Overridable Property TimeSpan As TimeSpan
            Public Overridable Property DateTimeOffset As DateTimeOffset
            Public Overridable Property Guid As Guid
            Public Overridable Property [Char] As Char
        End Class

        Public Partial Class GetAccount
            Implements IReturn(Of Account)
            Public Overridable Property Account As String
        End Class

        Public Partial Class GetProject
            Implements IReturn(Of Project)
            Public Overridable Property Account As String
            Public Overridable Property Project As String
        End Class

        <Route("/Request1", "GET")>
        Public Partial Class GetRequest1
            Implements IReturn(Of List(Of ReturnedDto))
            Implements IGet
        End Class

        <Route("/Request2", "GET")>
        Public Partial Class GetRequest2
            Implements IReturn(Of List(Of ReturnedDto))
            Implements IGet
        End Class

        <Route("/session")>
        Public Partial Class GetSession
            Implements IReturn(Of GetSessionResponse)
        End Class

        Public Partial Class GetSessionResponse
            Public Overridable Property Result As CustomUserSession
            Public Overridable Property UnAuthInfo As UnAuthInfo
            Public Overridable Property ResponseStatus As ResponseStatus
        End Class

        <Route("/Stuff")>
        <DataContract(Namespace:="http://schemas.servicestack.net/types")>
        Public Partial Class GetStuff
            Implements IReturn(Of GetStuffResponse)
            <DataMember>
            <ApiMember(DataType:="DateTime", Name:="Summary Date")>
            Public Overridable Property SummaryDate As Nullable(Of Date)

            <DataMember>
            <ApiMember(DataType:="DateTime", Name:="Summary End Date")>
            Public Overridable Property SummaryEndDate As Nullable(Of Date)

            <DataMember>
            <ApiMember(DataType:="string", Name:="Symbol")>
            Public Overridable Property Symbol As String

            <DataMember>
            <ApiMember(DataType:="string", Name:="Email")>
            Public Overridable Property Email As String

            <DataMember>
            <ApiMember(DataType:="bool", Name:="Is Enabled")>
            Public Overridable Property IsEnabled As Nullable(Of Boolean)
        End Class

        <DataContract(Namespace:="http://schemas.servicestack.net/types")>
        Public Partial Class GetStuffResponse
            <DataMember>
            Public Overridable Property SummaryDate As Nullable(Of Date)

            <DataMember>
            Public Overridable Property SummaryEndDate As Nullable(Of Date)

            <DataMember>
            Public Overridable Property Symbol As String

            <DataMember>
            Public Overridable Property Email As String

            <DataMember>
            Public Overridable Property IsEnabled As Nullable(Of Boolean)
        End Class

        Public Partial Class HelloAuth
            Implements IReturn(Of HelloResponse)
            Public Overridable Property Name As String
        End Class

        <Route("/hello-image/{Name}")>
        Public Partial Class HelloImage
            Implements IReturn(Of Byte())
            Public Overridable Property Name As String
            Public Overridable Property Format As String
            Public Overridable Property Width As Nullable(Of Integer)
            Public Overridable Property Height As Nullable(Of Integer)
            Public Overridable Property FontSize As Nullable(Of Integer)
            Public Overridable Property FontFamily As String
            Public Overridable Property Foreground As String
            Public Overridable Property Background As String
        End Class

        <Route("/image-bytes")>
        Public Partial Class ImageAsBytes
            Implements IReturn(Of Byte())
            Public Overridable Property Format As String
        End Class

        <Route("/image-custom")>
        Public Partial Class ImageAsCustomResult
            Implements IReturn(Of Byte())
            Public Overridable Property Format As String
        End Class

        <Route("/image-file")>
        Public Partial Class ImageAsFile
            Implements IReturn(Of Byte())
            Public Overridable Property Format As String
        End Class

        <Route("/image-redirect")>
        Public Partial Class ImageAsRedirect
            Public Overridable Property Format As String
        End Class

        <Route("/image-stream")>
        Public Partial Class ImageAsStream
            Implements IReturn(Of Stream)
            Public Overridable Property Format As String
        End Class

        <Route("/image-response")>
        Public Partial Class ImageWriteToResponse
            Implements IReturn(Of Byte())
            Public Overridable Property Format As String
        End Class

        <Route("/ping")>
        Public Partial Class Ping
            Implements IReturn(Of PingResponse)
        End Class

        Public Partial Class PingResponse
            Public Sub New()
                Responses = New Dictionary(Of String, ResponseStatus)
            End Sub

            Public Overridable Property Responses As Dictionary(Of String, ResponseStatus)
            Public Overridable Property ResponseStatus As ResponseStatus
        End Class

        Public Partial Class PingService

            <Route("/reset-connections")>
            Public Partial Class ResetConnections
            End Class
        End Class

        Public Partial Class Project
            Public Overridable Property Account As String
            Public Overridable Property Name As String
        End Class

        Public Partial Class RequiresAdmin
            Implements IReturn(Of RequiresAdmin)
            Public Overridable Property Id As Integer
        End Class

        Public Partial Class ReturnedDto
            Public Overridable Property Id As Integer
        End Class

        <Route("/return/html")>
        Public Partial Class ReturnHtml
            Public Overridable Property Text As String
        End Class

        <Route("/return/text")>
        Public Partial Class ReturnText
            Public Overridable Property Text As String
        End Class

        Public Partial Class RootPathRoutes
            Public Overridable Property Path As String
        End Class

        Public Partial Class SendDefault
            Implements IReturn(Of SendVerbResponse)
            Public Overridable Property Id As Integer
        End Class

        Public Partial Class SendGet
            Implements IReturn(Of SendVerbResponse)
            Implements IGet
            Public Overridable Property Id As Integer
        End Class

        Public Partial Class SendPost
            Implements IReturn(Of SendVerbResponse)
            Implements IPost
            Public Overridable Property Id As Integer
        End Class

        Public Partial Class SendPut
            Implements IReturn(Of SendVerbResponse)
            Implements IPut
            Public Overridable Property Id As Integer
        End Class

        <Route("/sendrestget/{Id}", "GET")>
        Public Partial Class SendRestGet
            Implements IReturn(Of SendVerbResponse)
            Implements IGet
            Public Overridable Property Id As Integer
        End Class

        Public Partial Class SendReturnVoid
            Implements IReturnVoid
            Public Overridable Property Id As Integer
        End Class

        Public Partial Class SendVerbResponse
            Public Overridable Property Id As Integer
            Public Overridable Property PathInfo As String
            Public Overridable Property RequestMethod As String
        End Class

        <Route("/testauth")>
        Public Partial Class TestAuth
            Implements IReturn(Of TestAuthResponse)
        End Class

        Public Partial Class TestAuthResponse
            Public Overridable Property UserId As String
            Public Overridable Property SessionId As String
            Public Overridable Property UserName As String
            Public Overridable Property DisplayName As String
            Public Overridable Property ResponseStatus As ResponseStatus
        End Class

        <Route("/testdata/AllCollectionTypes")>
        Public Partial Class TestDataAllCollectionTypes
            Implements IReturn(Of AllCollectionTypes)
        End Class

        <Route("/testdata/AllTypes")>
        Public Partial Class TestDataAllTypes
            Implements IReturn(Of AllTypes)
        End Class

        <Route("/null-response")>
        Public Partial Class TestNullResponse
        End Class

        <Route("/void-response")>
        Public Partial Class TestVoidResponse
        End Class

        <Route("/textfile-test")>
        Public Partial Class TextFileTest
            Public Overridable Property AsAttachment As Boolean
        End Class

        Public Partial Class UnAuthInfo
            Public Overridable Property CustomInfo As String
        End Class

        <Route("/session/edit/{CustomName}")>
        Public Partial Class UpdateSession
            Implements IReturn(Of GetSessionResponse)
            Public Overridable Property CustomName As String
        End Class

        <Route("/logs")>
        Public Partial Class ViewLogs
            Implements IReturn(Of String)
            Public Overridable Property Clear As Boolean
        End Class

        <Route("/wait/{ForMs}")>
        Public Partial Class Wait
            Implements IReturn(Of Wait)
            Public Overridable Property ForMs As Integer
        End Class

        '''<Summary>
        '''AllowedAttributes Description
        '''</Summary>
        <Route("/allowed-attributes", "GET")>
        <Api(Description:="AllowedAttributes Description")>
        <ApiResponse(Description:="Your request was not understood", StatusCode:=400)>
        <DataContract>
        Public Partial Class AllowedAttributes
            '''<Summary>
            '''Range Description
            '''</Summary>
            <DataMember(Name:="Aliased")>
            <ApiMember(DataType:="double", Description:="Range Description", IsRequired:=true, ParameterType:="path")>
            Public Overridable Property Range As Double
        End Class

        Public Partial Class ArrayResult
            Public Overridable Property Result As String
        End Class

        Public Partial Class Channel
            Public Overridable Property Name As String
            Public Overridable Property Value As String
        End Class

        Public Partial Class CustomHttpError
            Implements IReturn(Of CustomHttpErrorResponse)
            Public Overridable Property StatusCode As Integer
            Public Overridable Property StatusDescription As String
        End Class

        Public Partial Class CustomHttpErrorResponse
            Public Overridable Property Custom As String
            Public Overridable Property ResponseStatus As ResponseStatus
        End Class

        Public Partial Class Device
            Public Sub New()
                Channels = New List(Of Channel)
            End Sub

            Public Overridable Property Id As Long
            Public Overridable Property Type As String
            Public Overridable Property TimeStamp As Long
            Public Overridable Property Channels As List(Of Channel)
        End Class

        Public Partial Class EmptyClass
        End Class

        <Flags>
        Public Enum EnumFlags
            Value1 = 1
            Value2 = 2
            Value3 = 4
        End Enum

        Public Partial Class EnumRequest
            Implements IReturn(Of EnumResponse)
            Implements IPut
            Public Overridable Property [Operator] As ScopeType
        End Class

        Public Partial Class EnumResponse
            Public Overridable Property [Operator] As ScopeType
        End Class

        Public Enum EnumType
            Value1
            Value2
        End Enum

        <Route("/example", "GET")>
        <DataContract>
        Public Partial Class GetExample
            Implements IReturn(Of GetExampleResponse)
        End Class

        <DataContract>
        Public Partial Class GetExampleResponse
            <DataMember(Order:=1)>
            Public Overridable Property ResponseStatus As ResponseStatus

            <DataMember(Order:=2)>
            <ApiMember>
            Public Overridable Property MenuExample1 As MenuExample
        End Class

        <Route("/randomids")>
        Public Partial Class GetRandomIds
            Implements IReturn(Of GetRandomIdsResponse)
            Public Overridable Property Take As Nullable(Of Integer)
        End Class

        Public Partial Class GetRandomIdsResponse
            Public Sub New()
                Results = New List(Of String)
            End Sub

            Public Overridable Property Results As List(Of String)
        End Class

        <Route("/hello")>
        <Route("/hello/{Name}")>
        Public Partial Class Hello
            Implements IReturn(Of HelloResponse)
            <Required>
            Public Overridable Property Name As String

            Public Overridable Property Title As String
        End Class

        <Route("/all-types")>
        Public Partial Class HelloAllTypes
            Implements IReturn(Of HelloAllTypesResponse)
            Public Overridable Property Name As String
            Public Overridable Property AllTypes As AllTypes
            Public Overridable Property AllCollectionTypes As AllCollectionTypes
        End Class

        Public Partial Class HelloAllTypesResponse
            Public Overridable Property Result As String
            Public Overridable Property AllTypes As AllTypes
            Public Overridable Property AllCollectionTypes As AllCollectionTypes
        End Class

        '''<Summary>
        '''Description on HelloAll type
        '''</Summary>
        <DataContract>
        Public Partial Class HelloAnnotated
            Implements IReturn(Of HelloAnnotatedResponse)
            <DataMember>
            Public Overridable Property Name As String
        End Class

        '''<Summary>
        '''Description on HelloAllResponse type
        '''</Summary>
        <DataContract>
        Public Partial Class HelloAnnotatedResponse
            <DataMember>
            Public Overridable Property Result As String
        End Class

        Public Partial Class HelloArray
            Implements IReturn(Of ArrayResult())
            Public Sub New()
                Names = New List(Of String)
            End Sub

            Public Overridable Property Names As List(Of String)
        End Class

        Public Partial Class HelloBase(Of T)
            Public Sub New()
                Items = New List(Of T)
                Counts = New List(Of Integer)
            End Sub

            Public Overridable Property Items As List(Of T)
            Public Overridable Property Counts As List(Of Integer)
        End Class

        Public Partial Class HelloBuiltin
            Public Overridable Property DayOfWeek As DayOfWeek
        End Class

        Public Partial Class HelloDateTime
            Implements IReturn(Of HelloDateTime)
            Public Overridable Property DateTime As Date
        End Class

        Public Partial Class HelloDelete
            Implements IReturn(Of HelloVerbResponse)
            Implements IDelete
            Public Overridable Property Id As Integer
        End Class

        Public Partial Class HelloGet
            Implements IReturn(Of HelloVerbResponse)
            Implements IGet
            Public Overridable Property Id As Integer
        End Class

        Public Partial Class HelloInnerTypes
            Implements IReturn(Of HelloInnerTypesResponse)
        End Class

        Public Partial Class HelloInnerTypesResponse
            Public Overridable Property InnerType As TypesGroup.InnerType
            Public Overridable Property InnerEnum As TypesGroup.InnerEnum
        End Class

        Public Partial Class HelloInterface
            Public Overridable Property Poco As IPoco
            Public Overridable Property EmptyInterface As IEmptyInterface
            Public Overridable Property EmptyClass As EmptyClass
        End Class

        Public Partial Class HelloList
            Implements IReturn(Of List(Of ListResult))
            Public Sub New()
                Names = New List(Of String)
            End Sub

            Public Overridable Property Names As List(Of String)
        End Class

        Public Partial Class HelloPatch
            Implements IReturn(Of HelloVerbResponse)
            Implements IPatch
            Public Overridable Property Id As Integer
        End Class

        Public Partial Class HelloPost
            Inherits HelloBase
            Implements IReturn(Of HelloVerbResponse)
            Implements IPost
        End Class

        Public Partial Class HelloPut
            Implements IReturn(Of HelloVerbResponse)
            Implements IPut
            Public Overridable Property Id As Integer
        End Class

        Public Partial Class HelloResponse
            Public Overridable Property Result As String
        End Class

        Public Partial Class HelloReturnVoid
            Implements IReturnVoid
            Public Overridable Property Id As Integer
        End Class

        Public Partial Class HelloString
            Implements IReturn(Of String)
            Public Overridable Property Name As String
        End Class

        <Route("/hellotypes/{Name}")>
        Public Partial Class HelloTypes
            Implements IReturn(Of HelloTypes)
            Public Overridable Property [String] As String
            Public Overridable Property Bool As Boolean
            Public Overridable Property Int As Integer
        End Class

        Public Partial Class HelloVerbResponse
            Public Overridable Property Result As String
        End Class

        Public Partial Class HelloVoid
            Public Overridable Property Name As String
        End Class

        Public Partial Class HelloWithAlternateReturnResponse
            Inherits HelloWithReturnResponse
            Public Overridable Property AltResult As String
        End Class

        <DataContract>
        Public Partial Class HelloWithDataContract
            Implements IReturn(Of HelloWithDataContractResponse)
            <DataMember(Name:="name", Order:=1, IsRequired:=true, EmitDefaultValue:=false)>
            Public Overridable Property Name As String

            <DataMember(Name:="id", Order:=2, EmitDefaultValue:=false)>
            Public Overridable Property Id As Integer
        End Class

        <DataContract>
        Public Partial Class HelloWithDataContractResponse
            <DataMember(Name:="result", Order:=1, IsRequired:=true, EmitDefaultValue:=false)>
            Public Overridable Property Result As String
        End Class

        '''<Summary>
        '''Description on HelloWithDescription type
        '''</Summary>
        Public Partial Class HelloWithDescription
            Implements IReturn(Of HelloWithDescriptionResponse)
            Public Overridable Property Name As String
        End Class

        '''<Summary>
        '''Description on HelloWithDescriptionResponse type
        '''</Summary>
        Public Partial Class HelloWithDescriptionResponse
            Public Overridable Property Result As String
        End Class

        Public Partial Class HelloWithEnum
            Public Overridable Property EnumProp As EnumType
            Public Overridable Property NullableEnumProp As Nullable(Of EnumType)
            Public Overridable Property EnumFlags As EnumFlags
        End Class

        Public Partial Class HelloWithGenericInheritance
            Inherits HelloBase(Of Poco)
            Public Overridable Property Result As String
        End Class

        Public Partial Class HelloWithGenericInheritance2
            Inherits HelloBase(Of Hello)
            Public Overridable Property Result As String
        End Class

        Public Partial Class HelloWithInheritance
            Inherits HelloBase
            Implements IReturn(Of HelloWithInheritanceResponse)
            Public Overridable Property Name As String
        End Class

        Public Partial Class HelloWithInheritanceResponse
            Inherits HelloResponseBase
            Public Overridable Property Result As String
        End Class

        Public Partial Class HelloWithNestedClass
            Implements IReturn(Of HelloResponse)
            Public Overridable Property Name As String
            Public Overridable Property NestedClassProp As HelloWithNestedClass.NestedClass

            Public Partial Class NestedClass
                Public Overridable Property Value As String
            End Class
        End Class

        Public Partial Class HelloWithNestedInheritance
            Inherits HelloBase(Of Item)

            Public Partial Class Item
                Public Overridable Property Value As String
            End Class
        End Class

        Public Partial Class HelloWithReturn
            Implements IReturn(Of HelloWithAlternateReturnResponse)
            Public Overridable Property Name As String
        End Class

        <Route("/helloroute")>
        Public Partial Class HelloWithRoute
            Implements IReturn(Of HelloWithRouteResponse)
            Public Overridable Property Name As String
        End Class

        Public Partial Class HelloWithRouteResponse
            Public Overridable Property Result As String
        End Class

        Public Partial Class HelloWithType
            Implements IReturn(Of HelloWithTypeResponse)
            Public Overridable Property Name As String
        End Class

        Public Partial Class HelloWithTypeResponse
            Public Overridable Property Result As HelloType
        End Class

        <Route("/hellozip")>
        <DataContract>
        Public Partial Class HelloZip
            Implements IReturn(Of HelloZipResponse)
            Public Sub New()
                Test = New List(Of String)
            End Sub

            <DataMember>
            Public Overridable Property Name As String

            <DataMember>
            Public Overridable Property Test As List(Of String)
        End Class

        <DataContract>
        Public Partial Class HelloZipResponse
            <DataMember>
            Public Overridable Property Result As String
        End Class

        Public Interface IEmptyInterface
        End Interface

        Public Interface IPoco
            Property Name As String
        End Interface

        Public Partial Class ListResult
            Public Overridable Property Result As String
        End Class

        Public Partial Class Logger
            Public Sub New()
                Devices = New List(Of Device)
            End Sub

            Public Overridable Property Id As Long
            Public Overridable Property Devices As List(Of Device)
        End Class

        <DataContract>
        Public Partial Class MenuExample
            <DataMember(Order:=1)>
            <ApiMember>
            Public Overridable Property MenuItemExample1 As MenuItemExample
        End Class

        Public Partial Class MenuItemExample
            <DataMember(Order:=1)>
            <ApiMember>
            Public Overridable Property Name1 As String

            Public Overridable Property MenuItemExampleItem As MenuItemExampleItem
        End Class

        Public Partial Class MenuItemExampleItem
            <DataMember(Order:=1)>
            <ApiMember>
            Public Overridable Property Name1 As String
        End Class

        <Route("/metadatatest")>
        Public Partial Class MetadataTest
            Implements IReturn(Of MetadataTestResponse)
            Public Overridable Property Id As Integer
        End Class

        <Route("/metadatatest-array")>
        Public Partial Class MetadataTestArray
            Implements IReturn(Of MetadataTestChild())
            Public Overridable Property Id As Integer
        End Class

        Public Partial Class MetadataTestChild
            Public Sub New()
                Results = New List(Of MetadataTestNestedChild)
            End Sub

            Public Overridable Property Name As String
            Public Overridable Property Results As List(Of MetadataTestNestedChild)
        End Class

        Public Partial Class MetadataTestNestedChild
            Public Overridable Property Name As String
        End Class

        Public Partial Class MetadataTestResponse
            Public Sub New()
                Results = New List(Of MetadataTestChild)
            End Sub

            Public Overridable Property Id As Integer
            Public Overridable Property Results As List(Of MetadataTestChild)
        End Class

        Public Partial Class OnlyDefinedInGenericType
            Public Overridable Property Id As Integer
            Public Overridable Property Name As String
        End Class

        Public Partial Class OnlyDefinedInGenericTypeFrom
            Public Overridable Property Id As Integer
            Public Overridable Property Name As String
        End Class

        Public Partial Class OnlyDefinedInGenericTypeInto
            Public Overridable Property Id As Integer
            Public Overridable Property Name As String
        End Class

        Public Partial Class QueryPocoBase
            Inherits QueryDb(Of OnlyDefinedInGenericType)
            Implements IReturn(Of QueryResponse(Of OnlyDefinedInGenericType))
            Implements IMeta
            Public Overridable Property Id As Integer
        End Class

        Public Partial Class QueryPocoIntoBase
            Inherits QueryDb(Of OnlyDefinedInGenericTypeFrom, OnlyDefinedInGenericTypeInto)
            Implements IReturn(Of QueryResponse(Of OnlyDefinedInGenericTypeInto))
            Implements IMeta
            Public Overridable Property Id As Integer
        End Class

        <Route("/rockstars", "GET")>
        Public Partial Class QueryRockstars
            Inherits QueryDb(Of Rockstar)
            Implements IReturn(Of QueryResponse(Of Rockstar))
            Implements IMeta
        End Class

        <Route("/requires-role")>
        Public Partial Class RequiresRole
            Implements IReturn(Of RequiresRoleResponse)
        End Class

        Public Partial Class RequiresRoleResponse
            Public Overridable Property Result As String
            Public Overridable Property ResponseStatus As ResponseStatus
        End Class

        Public Partial Class RestrictedAttributes
            Public Overridable Property Id As Integer
            Public Overridable Property Name As String
            Public Overridable Property Hello As Hello
        End Class

        <Route("/return/bytes")>
        Public Partial Class ReturnBytes
            Implements IReturn(Of Byte())
            Public Sub New()
                Data = New Byte(){}
            End Sub

            Public Overridable Property Data As Byte()
        End Class

        <Route("/return/stream")>
        Public Partial Class ReturnStream
            Implements IReturn(Of Stream)
            Public Sub New()
                Data = New Byte(){}
            End Sub

            Public Overridable Property Data As Byte()
        End Class

        <Route("/return/string")>
        Public Partial Class ReturnString
            Implements IReturn(Of String)
            Public Overridable Property Data As String
        End Class

        Public Partial Class Rockstar
            Public Overridable Property Id As Integer
            Public Overridable Property FirstName As String
            Public Overridable Property LastName As String
            Public Overridable Property Age As Nullable(Of Integer)
        End Class

        <DataContract>
        Public Enum ScopeType
            [Global] = 1
            Sale = 2
        End Enum

        <Route("/sendjson")>
        Public Partial Class SendJson
            Implements IReturn(Of String)
            Public Overridable Property Id As Integer
            Public Overridable Property Name As String
        End Class

        <Route("/sendraw")>
        Public Partial Class SendRaw
            Implements IReturn(Of Byte())
            Public Overridable Property Id As Integer
            Public Overridable Property Name As String
            Public Overridable Property ContentType As String
        End Class

        <Route("/sendtext")>
        Public Partial Class SendText
            Implements IReturn(Of String)
            Public Overridable Property Id As Integer
            Public Overridable Property Name As String
            Public Overridable Property ContentType As String
        End Class

        Public Partial Class StoreLogs
            Implements IReturn(Of StoreLogsResponse)
            Public Sub New()
                Loggers = New List(Of Logger)
            End Sub

            Public Overridable Property Loggers As List(Of Logger)
        End Class

        Public Partial Class StoreLogsResponse
            Public Sub New()
                ExistingLogs = New List(Of Logger)
            End Sub

            Public Overridable Property ExistingLogs As List(Of Logger)
            Public Overridable Property ResponseStatus As ResponseStatus
        End Class

        <Route("/rockstars", "POST")>
        Public Partial Class StoreRockstars
            Inherits List(Of Rockstar)
            Implements IReturn(Of StoreRockstars)
        End Class

        <Route("/throw404")>
        <Route("/throw404/{Message}")>
        Public Partial Class Throw404
            Public Overridable Property Message As String
        End Class

        <Route("/throwbusinesserror")>
        Public Partial Class ThrowBusinessError
            Implements IReturn(Of ThrowBusinessErrorResponse)
        End Class

        Public Partial Class ThrowBusinessErrorResponse
            Public Overridable Property ResponseStatus As ResponseStatus
        End Class

        <Route("/throwcustom400")>
        <Route("/throwcustom400/{Message}")>
        Public Partial Class ThrowCustom400
            Public Overridable Property Message As String
        End Class

        <Route("/throwhttperror/{Status}")>
        Public Partial Class ThrowHttpError
            Public Overridable Property Status As Nullable(Of Integer)
            Public Overridable Property Message As String
        End Class

        <Route("/throw/{Type}")>
        Public Partial Class ThrowType
            Implements IReturn(Of ThrowTypeResponse)
            Public Overridable Property Type As String
            Public Overridable Property Message As String
        End Class

        Public Partial Class ThrowTypeResponse
            Public Overridable Property ResponseStatus As ResponseStatus
        End Class

        <Route("/throwvalidation")>
        Public Partial Class ThrowValidation
            Implements IReturn(Of ThrowValidationResponse)
            Public Overridable Property Age As Integer
            Public Overridable Property Required As String
            Public Overridable Property Email As String
        End Class

        Public Partial Class ThrowValidationResponse
            Public Overridable Property Age As Integer
            Public Overridable Property Required As String
            Public Overridable Property Email As String
            Public Overridable Property ResponseStatus As ResponseStatus
        End Class

        Public Partial Class TypesGroup

            Public Partial Class InnerType
                Public Overridable Property Id As Long
                Public Overridable Property Name As String
            End Class

            Public Enum InnerEnum
                Foo
                Bar
                Baz
            End Enum
        End Class

        Public Partial Class AllCollectionTypes
            Public Sub New()
                IntArray = New Integer(){}
                IntList = New List(Of Integer)
                StringArray = New String(){}
                StringList = New List(Of String)
                PocoArray = New Poco(){}
                PocoList = New List(Of Poco)
                PocoLookup = New Dictionary(Of String, List(Of Poco))
                PocoLookupMap = New Dictionary(Of String, List(Of Dictionary(Of String,Poco)))
            End Sub

            Public Overridable Property IntArray As Integer()
            Public Overridable Property IntList As List(Of Integer)
            Public Overridable Property StringArray As String()
            Public Overridable Property StringList As List(Of String)
            Public Overridable Property PocoArray As Poco()
            Public Overridable Property PocoList As List(Of Poco)
            Public Overridable Property PocoLookup As Dictionary(Of String, List(Of Poco))
            Public Overridable Property PocoLookupMap As Dictionary(Of String, List(Of Dictionary(Of String,Poco)))
        End Class

        Public Partial Class AllTypes
            Public Sub New()
                StringList = New List(Of String)
                StringArray = New String(){}
                StringMap = New Dictionary(Of String, String)
                IntStringMap = New Dictionary(Of Integer, String)
            End Sub

            Public Overridable Property Id As Integer
            Public Overridable Property NullableId As Nullable(Of Integer)
            Public Overridable Property [Byte] As Byte
            Public Overridable Property [Short] As Short
            Public Overridable Property Int As Integer
            Public Overridable Property [Long] As Long
            Public Overridable Property [UShort] As UInt16
            Public Overridable Property UInt As UInt32
            Public Overridable Property [ULong] As UInt64
            Public Overridable Property Float As Single
            Public Overridable Property [Double] As Double
            Public Overridable Property [Decimal] As Decimal
            Public Overridable Property [String] As String
            Public Overridable Property DateTime As Date
            Public Overridable Property TimeSpan As TimeSpan
            Public Overridable Property DateTimeOffset As DateTimeOffset
            Public Overridable Property Guid As Guid
            Public Overridable Property [Char] As Char
            Public Overridable Property KeyValuePair As KeyValuePair(Of String, String)
            Public Overridable Property NullableDateTime As Nullable(Of Date)
            Public Overridable Property NullableTimeSpan As Nullable(Of TimeSpan)
            Public Overridable Property StringList As List(Of String)
            Public Overridable Property StringArray As String()
            Public Overridable Property StringMap As Dictionary(Of String, String)
            Public Overridable Property IntStringMap As Dictionary(Of Integer, String)
            Public Overridable Property SubType As SubType
        End Class

        Public Partial Class HelloBase
            Public Overridable Property Id As Integer
        End Class

        Public Partial Class HelloResponseBase
            Public Overridable Property RefId As Integer
        End Class

        Public Partial Class HelloType
            Public Overridable Property Result As String
        End Class

        Public Partial Class HelloWithReturnResponse
            Public Overridable Property Result As String
        End Class

        Public Partial Class Poco
            Public Overridable Property Name As String
        End Class

        Public Partial Class SubType
            Public Overridable Property Id As Integer
            Public Overridable Property Name As String
        End Class
    End Namespace
End Namespace

