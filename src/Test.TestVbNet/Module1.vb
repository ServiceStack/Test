Imports System
Imports ServiceStack
Imports ServiceStack.Text
Imports System.Collections.Generic
Imports Test.ServiceModel
Imports Test.ServiceModel.Types

Module Module1

    Sub Main()
        Dim client = New JsonServiceClient("http://localhost:56500")
        Dim response = client.Get(New HelloAllTypes With {
            .AllTypes = New AllTypes With {
                .Byte = 1,
                .DateTime = DateTime.UtcNow,
                .Decimal = 1,
                .Double = 1.1,
                .Float = 1.1,
                .Id = 1,
                .Int = 1,
                .IntStringMap = New Dictionary(Of Integer, String) From {
                    {1, "A"},
                    {2, "B"}
                },
                .Short = 1,
                .String = "String",
                .StringArray = {"A", "B"},
                .StringList = New List(Of String) From {"A", "B"},
                .StringMap = New Dictionary(Of String, String) From {
                    {"1", "A"},
                    {"2", "B"}
                },
                .SubType = New SubType With {
                    .Id = 1,
                    .Name = "SubType"
                },
                .TimeSpan = TimeSpan.FromHours(1)
            }
        })

        response.PrintDump()

        Console.ReadLine()
    End Sub

End Module
