// Learn more about F# at http://fsharp.net
// See the 'F# Tutorial' project for more help.

open System
open ServiceStack
open ServiceStack.Text
open System.Collections.Generic
open Test.ServiceModel

[<EntryPoint>]
let main argv = 
    let client = new JsonServiceClient("http://test.servicestack.net")
    let request = new HelloAllTypes()
    request.AllTypes <- new AllTypes()
    let r = request.AllTypes
    r.Byte <- (byte)1
    r.DateTime <- DateTime.UtcNow
    r.Decimal <- 1.0M
    r.Double <- 1.0
    r.Float <- 1.0f
    r.Id <- 1
    r.Int <- 1
    r.IntStringMap <- new Dictionary<int,string>()
    r.IntStringMap.Add(1, "A")
    r.IntStringMap.Add(2, "B")
    r.NullableDateTime <- new Nullable<DateTime>(DateTime.UtcNow)
    r.NullableId <- new Nullable<int>(1)
    r.NullableTimeSpan <- new Nullable<TimeSpan>(TimeSpan.FromHours((float)1))
    r.Short <- int16(1)
    r.String <- "String"
    r.StringArray <- [| "A"; "B" |]
    r.StringList <- new List<string>([| "A"; "B" |])
    r.StringMap <- new Dictionary<string,string>()
    r.StringMap.Add("1","A")
    r.StringMap.Add("2","B")
    r.SubType <- new SubType()
    r.SubType.Id <- 1
    r.SubType.Name <- "SubType"
    r.TimeSpan <- TimeSpan.FromHours((float)1)

    let response = client.Get(request)        
    TypeSerializer.PrintDump(response)

    Console.ReadLine() |> ignore
    0 // return an integer exit code
