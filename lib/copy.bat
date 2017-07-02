SET BUILD=Release
REM SET BUILD=DEBUG

COPY C:\src\ServiceStack.OrmLite\src\ServiceStack.OrmLite.MySql\bin\%BUILD%\net45\ServiceStack.OrmLite.MySql.* .

COPY C:\src\ServiceStack.OrmLite\src\ServiceStack.OrmLite.SqlServer\bin\%BUILD%\net45\ServiceStack.OrmLite.SqlServer.* .

COPY C:\src\ServiceStack.Redis\src\ServiceStack.Redis\bin\%BUILD%\net45\ServiceStack.Redis.* .

COPY C:\src\ServiceStack\src\ServiceStack.Authentication.OAuth2\bin\%BUILD%\ServiceStack.Authentication.OAuth2.* .
COPY C:\src\ServiceStack\src\ServiceStack.Authentication.OAuth2\bin\%BUILD%\DotNetOpenAuth.* .

COPY C:\src\ServiceStack\src\ServiceStack.Authentication.OpenId\bin\%BUILD%\ServiceStack.Authentication.OpenId.* .

COPY C:\src\ServiceStack\src\ServiceStack.Logging.Log4Net\bin\%BUILD%\ServiceStack.Logging.Log4Net.* .

COPY C:\src\ServiceStack\src\ServiceStack.Api.OpenApi\bin\%BUILD%\net45\ServiceStack.Api.OpenApi.* .
COPY C:\src\ServiceStack\src\ServiceStack.Server\bin\%BUILD%\net45\ServiceStack.Server.* .
COPY C:\src\ServiceStack\src\ServiceStack.RabbitMq\bin\%BUILD%\net45\ServiceStack.RabbitMq.* .
COPY C:\src\ServiceStack\src\ServiceStack.Mvc\bin\%BUILD%\net45\ServiceStack.Mvc.* .
COPY C:\src\ServiceStack\src\ServiceStack.Razor\bin\%BUILD%\net45\* .

COPY C:\src\ServiceStack.OrmLite\src\ServiceStack.OrmLite.PostgreSql\bin\%BUILD%\net45\ServiceStack.OrmLite.* .

