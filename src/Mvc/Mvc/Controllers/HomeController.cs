using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using Mvc.ServiceInterface;
using ServiceStack;
using ServiceStack.Auth;
using ServiceStack.Mvc;

namespace Mvc.Controllers
{
    public class HomeController : ServiceStackController
    {
        public ActionResult Index()
        {
            var session = SessionAs<CustomUserSession>();
            return View(session);
        }

        public ActionResult Login(string userName, string password, string redirect=null)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    using (var authService = ResolveService<AuthenticateService>())
                    {
                        var response = authService.Authenticate(new Authenticate
                        {
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

            var session = SessionAs<CustomUserSession>();
            return View("Index", session);
        }

        public ActionResult Logout()
        {
            using (var authService = ResolveService<AuthenticateService>())
            {
                var response = authService.Authenticate(new Authenticate {
                    provider = AuthenticateService.LogoutAction,
                });

                // add ASP.NET auth cookie
                FormsAuthentication.SignOut();
            }

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