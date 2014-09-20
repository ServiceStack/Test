using System.Collections.Generic;
using ServiceStack;
using ServiceStack.Auth;
using WebForms.ServiceModel;

namespace WebForms.ServiceInterface
{
    public class MyServices : Service
    {
        public object Any(Hello request)
        {
            return new HelloResponse { Result = "Hello, {0}!".Fmt(request.Name) };
        }

        [Route("/reset")]
        public class Reset { }
        public object Any(Reset request)
        {
            ResetUsers((OrmLiteAuthRepository)TryResolve<IAuthRepository>());
            return "OK";
        }

        public static void ResetUsers(OrmLiteAuthRepository authRepo)
        {
            authRepo.DropAndReCreateTables();

            CreateUser(authRepo, 1, "test", "test", new List<string> { "TheRole" }, new List<string> { "ThePermission" });
            CreateUser(authRepo, 2, "test2", "test2");
        }

        private static void CreateUser(OrmLiteAuthRepository authRepo,
            int id, string username, string password, List<string> roles = null, List<string> permissions = null)
        {
            string hash;
            string salt;
            new SaltedHash().GetHashAndSaltString(password, out hash, out salt);

            authRepo.CreateUserAuth(new UserAuth
            {
                Id = id,
                DisplayName = username + " DisplayName",
                Email = username + "@gmail.com",
                UserName = username,
                FirstName = "First " + username,
                LastName = "Last " + username,
                PasswordHash = hash,
                Salt = salt,
                Roles = roles,
                Permissions = permissions
            }, password);

            authRepo.AssignRoles(id.ToString(), roles, permissions);
        }
    }
}