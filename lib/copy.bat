SET BUILD=Release
REM SET BUILD=DEBUG

COPY C:\src\ServiceStack.OrmLite\src\ServiceStack.OrmLite.MySql\bin\%BUILD%\ServiceStack.OrmLite.MySql.* .
COPY C:\src\ServiceStack.OrmLite\src\ServiceStack.OrmLite.MySql\bin\%BUILD%\MySql.Data.* .

COPY C:\src\ServiceStack.OrmLite\src\ServiceStack.OrmLite.SqlServer\bin\%BUILD%\ServiceStack.OrmLite.SqlServer.* .

COPY C:\src\ServiceStack.OrmLite\src\ServiceStack.OrmLite.Sqlite\bin\%BUILD%\ServiceStack.OrmLite.Sqlite.* .
COPY C:\src\ServiceStack\lib\Mono.Data.Sqlite.dll .
COPY C:\src\ServiceStack\lib\sqlite3.dll .

COPY C:\src\ServiceStack.Redis\src\ServiceStack.Redis\bin\%BUILD%\ServiceStack.Redis.* .

COPY C:\src\ServiceStack\src\ServiceStack.Authentication.OAuth2\bin\%BUILD%\ServiceStack.Authentication.OAuth2.* .
COPY C:\src\ServiceStack\src\ServiceStack.Authentication.OAuth2\bin\%BUILD%\DotNetOpenAuth.* .

COPY C:\src\ServiceStack\src\ServiceStack.Authentication.OpenId\bin\%BUILD%\ServiceStack.Authentication.OpenId.* .

COPY C:\src\ServiceStack\src\ServiceStack.Logging.Log4Net\bin\%BUILD%\ServiceStack.Logging.Log4Net.* .

COPY C:\src\ServiceStack\src\ServiceStack.Api.Swagger\bin\%BUILD%\ServiceStack.Api.Swagger.* .
COPY C:\src\ServiceStack\src\ServiceStack.Server\bin\%BUILD%\ServiceStack.Server.* .
COPY C:\src\ServiceStack\src\ServiceStack.RabbitMq\bin\%BUILD%\ServiceStack.RabbitMq.* .
COPY C:\src\ServiceStack\src\ServiceStack.Mvc\bin\%BUILD%\ServiceStack.Mvc.* .
COPY C:\src\ServiceStack\src\ServiceStack.Razor\bin\%BUILD%\* .

COPY C:\src\ServiceStack.OrmLite\src\ServiceStack.OrmLite.PostgreSqlV45\bin\%BUILD%\ServiceStack.OrmLite.* .
COPY C:\src\ServiceStack.OrmLite\src\ServiceStack.OrmLite.PostgreSqlV45\bin\%BUILD%\Mono.Security.dll .
COPY C:\src\ServiceStack.OrmLite\src\ServiceStack.OrmLite.PostgreSqlV45\bin\%BUILD%\Npgsql.dll .

