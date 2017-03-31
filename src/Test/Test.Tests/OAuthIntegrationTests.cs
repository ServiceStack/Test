using System.Collections.Generic;
using System.Runtime.Serialization;
using NUnit.Framework;
using ServiceStack;
using ServiceStack.Text;

namespace Test.Tests
{
    [Explicit]
    public class OAuthIntegrationTests
    {
        [DataContract]
        public class Authenticate : IPost, IReturn<AuthenticateResponse>, IMeta
        {
            [DataMember(Order = 1)]
            public string provider { get; set; }
            [DataMember(Order = 2)]
            public string State { get; set; }
            [DataMember(Order = 3)]
            public string oauth_token { get; set; }
            [DataMember(Order = 4)]
            public string oauth_verifier { get; set; }
            [DataMember(Order = 5)]
            public string UserName { get; set; }
            [DataMember(Order = 6)]
            public string Password { get; set; }
            [DataMember(Order = 7)]
            public bool? RememberMe { get; set; }
            [DataMember(Order = 8)]
            public string Continue { get; set; }

            // digest auth
            [DataMember(Order = 9)]
            public string nonce { get; set; }
            [DataMember(Order = 10)]
            public string uri { get; set; }
            [DataMember(Order = 11)]
            public string response { get; set; }
            [DataMember(Order = 12)]
            public string qop { get; set; }
            [DataMember(Order = 13)]
            public string nc { get; set; }
            [DataMember(Order = 14)]
            public string cnonce { get; set; }

            [DataMember(Order = 15)]
            public bool? UseTokenCookie { get; set; }

            [DataMember(Order = 16)]
            public string AccessToken { get; set; }
            [DataMember(Order = 17)]
            public string AccessTokenSecret { get; set; }

            [DataMember(Order = 18)]
            public Dictionary<string, string> Meta { get; set; }
        }


        [Test]
        public void Can_transfer_access_tokens_to_server()
        {
            var client = new JsonServiceClient("http://localhost:11001/");

            var request = new Authenticate
            {
                provider = "twitter",
                AccessToken = "2931572242-zmVKk5leFHJXJWRUpQqyEkdlRlNbDMjNlUcXViJ",
                AccessTokenSecret = "wt7BL444VIG8WPp1g071WO7Z9diIi34iQRnXQ28umcR50"
            };

            var response = client.Post(request);

            response.PrintDump();
        }
    }
}