using System.Collections.Generic;
using Mvc.ServiceInterface;
using ServiceStack.Auth;

namespace Mvc.Models
{
    public class HomeViewModel
    {
        public CustomUserSession Session { get; set; }
        public List<UserAuth> UserAuths { get; set; }
        public List<UserAuthDetails> UserAuthDetails { get; set; }
    }
}