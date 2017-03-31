using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ServiceStack;
using ServiceStack.Auth;
using ServiceStack.Text;

namespace Test.ServiceInterface
{
    [Route("/jwt")]
    public class CreateJwt : AuthUserSession, IReturn<CreateJwtResponse>
    {
        public DateTime? JwtExpiry { get; set; }
    }

    public class CreateJwtResponse
    {
        public string Token { get; set; }

        public ResponseStatus ResponseStatus { get; set; }
    }

    public class JwtServices : Service
    {
        public object Any(CreateJwt request)
        {
            var jwtProvider = (JwtAuthProvider)AuthenticateService.GetAuthProvider(JwtAuthProvider.Name);

            if (request.JwtExpiry != null)
            {
                jwtProvider.CreatePayloadFilter = (jwtPayload, session) =>
                    jwtPayload["exp"] = request.JwtExpiry.Value.ToUnixTime().ToString();
            }

            var jwtSession = request.ConvertTo<AuthUserSession>();
            var token = jwtProvider.CreateJwtBearerToken(jwtSession);

            jwtProvider.CreatePayloadFilter = null;

            return new CreateJwtResponse
            {
                Token = token
            };
        }
    }
}
