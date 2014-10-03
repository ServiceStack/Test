(* Options:
Version: 1
BaseUrl: http://stackapis.servicestack.net

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

namespace StackApis.ServiceModel

open System
open System.Collections
open System.Collections.Generic
open System.Runtime.Serialization
open ServiceStack
open ServiceStack.DataAnnotations

    [<AllowNullLiteral>]
    type User() = 
        member val Reputation:Int32 = new Int32() with get,set
        member val Userid:Int32 = new Int32() with get,set
        member val UserType:String = null with get,set
        member val AcceptRate:Int32 = new Int32() with get,set
        member val ProfileImage:String = null with get,set
        member val DisplayName:String = null with get,set
        member val Link:String = null with get,set

    [<AllowNullLiteral>]
    type Question() = 
        member val QuestionId:Int32 = new Int32() with get,set
        member val Tags:String[] = [||] with get,set
        member val Owner:User = null with get,set
        member val IsAnswered:Boolean = new Boolean() with get,set
        member val ViewCount:Int32 = new Int32() with get,set
        member val AnswerCount:Int32 = new Int32() with get,set
        member val Score:Int32 = new Int32() with get,set
        member val LastActivityDate:Int32 = new Int32() with get,set
        member val CreationDate:Int32 = new Int32() with get,set
        member val LastEditDate:Int32 = new Int32() with get,set
        member val Link:String = null with get,set
        member val Title:String = null with get,set
        member val AcceptedAnswerId:Nullable<Int32> = new Nullable<Int32>() with get,set

    [<AllowNullLiteral>]
    type Answer() = 
        member val AnswerId:Int32 = new Int32() with get,set
        member val Owner:User = null with get,set
        member val IsAccepted:Boolean = new Boolean() with get,set
        member val Score:Int32 = new Int32() with get,set
        member val LastActivityDate:Int32 = new Int32() with get,set
        member val LastEditDate:Int32 = new Int32() with get,set
        member val CreationDate:Int32 = new Int32() with get,set
        member val QuestionId:Int32 = new Int32() with get,set

    [<AllowNullLiteral>]
    type SearchQuestionsResponse() = 
        member val Results:List<Question> = new List<Question>() with get,set

    [<AllowNullLiteral>]
    type GetAnswersResponse() = 
        member val Ansnwer:Answer = null with get,set

    [<Route("/questions/search")>]
    [<AllowNullLiteral>]
    type SearchQuestions() = 
        interface IReturn<SearchQuestionsResponse>
        member val Tags:List<String> = new List<String>() with get,set
        member val UserId:String = null with get,set

    ///<summary>
    ///Get a list of Answers for a Question
    ///</summary>
    [<Route("/answers/{QuestionId}")>]
    [<AllowNullLiteral>]
    type GetAnswers() = 
        interface IReturn<GetAnswersResponse>
        member val QuestionId:Int32 = new Int32() with get,set

    [<Route("/questions")>]
    [<AllowNullLiteral>]
    type StackOverflowQuery() = 
        inherit QueryBase<Question>()
        interface IReturn<QueryResponse<Question>>
        member val ScoreGreaterThan:Nullable<Int32> = new Nullable<Int32>() with get,set

