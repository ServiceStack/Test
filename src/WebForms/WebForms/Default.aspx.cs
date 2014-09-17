using System;
using System.Web.Security;
using ServiceStack;
using ServiceStack.AspNet;
using ServiceStack.Auth;

namespace WebForms
{
    public partial class Default : ServiceStackPage 
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (string.IsNullOrEmpty(txtUserName.Text))
            {
                var session = GetSession();
                txtUserName.Text = txtPassword.Text = session.UserName ?? "test";
            }
        }

        protected void btnLogin_Click(object sender, EventArgs e)
        {
            if (!IsValid) return;

            try
            {
                using (var authService = ResolveService<AuthenticateService>())
                {
                    var response = authService.Authenticate(new Authenticate
                    {
                        provider = CredentialsAuthProvider.Name,
                        UserName = txtUserName.Text,
                        Password = txtPassword.Text,
                        RememberMe = true,
                    });

                    // add ASP.NET auth cookie
                    FormsAuthentication.SetAuthCookie(txtUserName.Text, true);

                    var redirectUrl = Request.QueryString["redirect"];
                    if (!string.IsNullOrEmpty(redirectUrl))
                    {
                        Response.Redirect(redirectUrl);
                    }
                }
            }
            catch (Exception ex)
            {
                litError.Text = "<h3 style='red'>{0}</h3>".Fmt(ex.Message);
            }
        }

        protected void btnLogout_Click(object sender, EventArgs e)
        {
            using (var authService = ResolveService<AuthenticateService>())
            {
                var response = authService.Authenticate(new Authenticate {
                    provider = AuthenticateService.LogoutAction,
                });

                // add ASP.NET auth cookie
                FormsAuthentication.SignOut();
            }
        }
    }
}