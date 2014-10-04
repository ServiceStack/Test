open ServiceStack
open ServiceStack.Text
open System.Collections.Generic
open StackApis.ServiceModel

[<EntryPoint>]
let main argv = 
    let client = new JsonServiceClient("http://stackapis.servicestack.net")
    let response = client.Get(new SearchQuestions(
        Tags = new List<string>([ "redis"; "ormlite" ])))        

    TypeSerializer.PrintDump(response)
    System.Console.ReadLine()
    0 // return an integer exit code