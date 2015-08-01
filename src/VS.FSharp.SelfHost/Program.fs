open System
open ServiceStack

type Hello = { mutable Name: string; }
type HelloResponse = { mutable Result: string; }
type HelloService() =
    interface IService
    member this.Any (req:Hello) = { Result = "Hello, " + req.Name }

//Define the Web Services AppHost
type AppHost =
    inherit AppSelfHostBase
    new() = { inherit AppSelfHostBase("Hi F#!", typeof<HelloService>.Assembly) }
    override this.Configure container =
        base.Routes
            .Add<Hello>("/hello")
            .Add<Hello>("/hello/{Name}") |> ignore

//Run it!
[<EntryPoint>]
let main args =
    let host = if args.Length = 0 then "http://*:1337/" else args.[0]
    printfn "listening on %s ..." host
    let appHost = new AppHost()
    appHost.Init() |> ignore
    appHost.Start host |> ignore
    Console.ReadLine() |> ignore
    0