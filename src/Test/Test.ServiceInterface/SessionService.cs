using System.Runtime.Serialization;
using ServiceStack;

namespace Test.ServiceInterface
{
    public class CustomUserSession : AuthUserSession
    {
        [DataMember]
        public string CustomName { get; set; }
    }

    [Route("/session")]
    public class GetSession : IReturn<GetSessionResponse>
    {
    }

    [Route("/session/edit/{CustomName}")]
    public class UpdateSession : IReturn<GetSessionResponse>
    {
        public string CustomName { get; set; }
    }

    public class GetSessionResponse
    {
        public CustomUserSession Result { get; set; }

        public ResponseStatus ResponseStatus { get; set; }
    }

    public class SessionService : Service
    {
        public object Any(GetSession request)
        {
            return new GetSessionResponse
            {
                Result = SessionAs<CustomUserSession>(),
            };
        }

        public object Any(UpdateSession request)
        {
            var session = SessionAs<CustomUserSession>();
            session.CustomName = request.CustomName;

            this.SaveSession(session);

            return new GetSessionResponse
            {
                Result = SessionAs<CustomUserSession>(),
            };
        }
    }
}