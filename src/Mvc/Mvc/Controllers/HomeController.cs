using System;
using System.Web.Mvc;
using System.Web.Security;
using Mvc.Models;
using Mvc.ServiceInterface;
using ServiceStack;
using ServiceStack.Auth;
using ServiceStack.Mvc;
using ServiceStack.OrmLite;

namespace Mvc.Controllers
{
    public class HomeController : ServiceStackController
    {
        public HomeViewModel GetViewModel()
        {
            var response = new HomeViewModel { Session = SessionAs<CustomUserSession>() };
            if (response.Session.UserAuthId != null)
            {
                var userAuthId = int.Parse(response.Session.UserAuthId);
                response.UserAuths = Db.Select<UserAuth>(x => x.Id == userAuthId);
                response.UserAuthDetails = Db.Select<UserAuthDetails>(x => x.UserAuthId == userAuthId);
            }
            return response;
        }

        public ActionResult Index()
        {
            return View(GetViewModel());
        }

        public ActionResult Login(string userName, string password, string redirect=null)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    using (var authService = ResolveService<AuthenticateService>())
                    {
                        var response = authService.Authenticate(new Authenticate {
                            provider = CredentialsAuthProvider.Name,
                            UserName = userName,
                            Password = password,
                            RememberMe = true,
                        });

                        // add ASP.NET auth cookie
                        FormsAuthentication.SetAuthCookie(userName, true);

                        return Redirect(string.IsNullOrEmpty(redirect) ? "/" : redirect);
                    }
                }
                catch (Exception ex)
                {
                    ModelState.AddModelError("", ex.Message);
                }
            }

            return View("Index", GetViewModel());
        }

        public ActionResult Logout()
        {
            Execute(new Authenticate { provider = "logout" });
            FormsAuthentication.SignOut(); 

            return Redirect("/");
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}