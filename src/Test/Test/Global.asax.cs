using System;
using ServiceStack;

namespace Test
{
    public class Global : System.Web.HttpApplication
    {
        protected void Application_Start(object sender, EventArgs e)
        {
            Licensing.RegisterLicenseFromFileIfExists(@"~/appsettings.license.txt".MapHostAbsolutePath());
            new AppHost().Init();
        }
    }
}