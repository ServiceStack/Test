using System;
using ServiceStack;
using ServiceStack.AspNet;

namespace WebForms
{
    [Authenticate(HtmlRedirect = "/")]
    public partial class AuthOnly : ServiceStackPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
    }
}