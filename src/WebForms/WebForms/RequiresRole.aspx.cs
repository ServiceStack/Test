using System;
using ServiceStack;
using ServiceStack.AspNet;

namespace WebForms
{
    [RequiredRole("TheRole")]
    public partial class RequiresRole : ServiceStackPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
        }
    }
}