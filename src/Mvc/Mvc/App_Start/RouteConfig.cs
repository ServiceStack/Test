using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using ServiceStack;
using ServiceStack.Auth;
using ServiceStack.Mvc;
using ServiceStack.Web;

namespace Mvc
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.IgnoreRoute("api/{*pathInfo}");
            routes.MapRoute("Forwarding", "auth/{*pathinfo}", new { controller = "Forwarding", action = "Index" });
            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }

    /// <summary>
    /// Re-use existing AuthWebTests OAuth app config which have callbacks registered at:
    /// http://localhost:11001/auth/{provider} instead of the expected path for MVC + SS: 
    /// http://localhost:11001/api/auth/{provider}
    /// </summary>
    public class ForwardingController : ServiceStackController
    {
        public ActionResult Index()
        {
            var response = ForwardRequestToServiceStack();
            if (ServiceStackResponse.IsClosed) return new EmptyResult();

            var httpResult = response as IHttpResult;
            if (httpResult != null)
            {
                string redirectUrl;
                if (httpResult.Headers.TryGetValue(HttpHeaders.Location, out redirectUrl))
                {
                    return Redirect(redirectUrl);
                }
            }

            return Redirect("/");
        }
    }

}
