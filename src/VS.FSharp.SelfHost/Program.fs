open ServiceStack
open ServiceStack.Logging
open ServiceStack.Common

open System

type HelloResponse() = 
    member val Result = "" with get, set
 
[<Route("/hello")>]
[<Route("/hello/{Name}")>]
type Hello() =
    interface IReturn<HelloResponse>
    member val Name = "" with get, set

type HelloService() =
    inherit ServiceStack.Service()
    member this.Get(req: Hello) = 
        let res = new HelloResponse()
        res.Result <- "Hello " + req.Name
        res

type AppHost() =
    inherit AppSelfHostBase("Hello F# Services", typeof<HelloService>.Assembly)
    override this.Configure container = ignore()

[<EntryPoint>]
let main args = 
    LogManager.LogFactory <- new ConsoleLogFactory()
    let host = if args.Length = 0 then "http://*:1337/" else args.[0]
    printfn "listening on %s ..." host
    let appHost = new AppHost()
    appHost.Init() |> ignore
    appHost.Start host |>ignore
    Console.ReadLine() |> ignore
    0