' Options:
'Date: 2017-11-08 03:36:57
'Version: 4.50
'Tip: To override a DTO option, remove "''" prefix before updating
'BaseUrl: http://stackapis.servicestack.net
'
'''GlobalNamespace: 
'''MakePartial: True
'''MakeVirtual: True
'''MakeDataContractsExtensible: False
'AddReturnMarker: False
'''AddDescriptionAsComments: True
'''AddDataContractAttributes: False
'''AddIndexesToDataMembers: False
'''AddGeneratedCodeAttributes: False
'''AddResponseStatus: False
'''AddImplicitVersion: 
'''InitializeCollections: True
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
Imports StackApis.ServiceModel.Types
Imports StackApis.ServiceModel

Namespace Global

    Namespace StackApis.ServiceModel

        '''<Summary>
        '''Get a list of Answers for a Question
        '''</Summary>
        <Route("/answers/{QuestionId}")>
        Public Partial Class GetAnswers
            Implements IReturn(Of GetAnswersResponse)
            Public Overridable Property QuestionId As Integer
        End Class

        Public Partial Class GetAnswersResponse
            Public Overridable Property Ansnwer As Answer
        End Class

        <Route("/questions/search")>
        Public Partial Class SearchQuestions
            Implements IReturn(Of SearchQuestionsResponse)
            Public Sub New()
                Tags = New List(Of String)
            End Sub

            Public Overridable Property Tags As List(Of String)
            Public Overridable Property UserId As String
        End Class

        Public Partial Class SearchQuestionsResponse
            Public Sub New()
                Results = New List(Of Question)
            End Sub

            Public Overridable Property Results As List(Of Question)
        End Class

        <Route("/questions")>
        <AutoQueryViewer(Title:="Explore StackOverflow Questions", Description:="Find ServiceStack Questions on StackOverflow", IconUrl:="material-icons:cast", DefaultSearchField:="Title", DefaultSearchType:="Contains", DefaultSearchText:="ServiceStack")>
        Public Partial Class StackOverflowQuery
            Inherits QueryDb(Of Question)
            Implements IReturn(Of QueryResponse(Of Question))
            Public Overridable Property ScoreGreaterThan As Nullable(Of Integer)
        End Class
    End Namespace

    Namespace StackApis.ServiceModel.Types

        Public Partial Class Answer
            Public Overridable Property AnswerId As Integer
            Public Overridable Property Owner As User
            Public Overridable Property IsAccepted As Boolean
            Public Overridable Property Score As Integer
            Public Overridable Property LastActivityDate As Integer
            Public Overridable Property LastEditDate As Integer
            Public Overridable Property CreationDate As Integer
            Public Overridable Property QuestionId As Integer
        End Class

        Public Partial Class Question
            Public Sub New()
                Tags = New String(){}
            End Sub

            Public Overridable Property QuestionId As Integer
            Public Overridable Property Title As String
            Public Overridable Property Score As Integer
            Public Overridable Property ViewCount As Integer
            Public Overridable Property IsAnswered As Boolean
            Public Overridable Property AnswerCount As Integer
            Public Overridable Property Link As String
            Public Overridable Property Tags As String()
            Public Overridable Property Owner As User
            Public Overridable Property LastActivityDate As Integer
            Public Overridable Property CreationDate As Integer
            Public Overridable Property LastEditDate As Integer
            Public Overridable Property AcceptedAnswerId As Nullable(Of Integer)
        End Class

        Public Partial Class User
            Public Overridable Property Reputation As Integer
            Public Overridable Property Userid As Integer
            Public Overridable Property UserType As String
            Public Overridable Property AcceptRate As Integer
            Public Overridable Property ProfileImage As String
            Public Overridable Property DisplayName As String
            Public Overridable Property Link As String
        End Class
    End Namespace
End Namespace

