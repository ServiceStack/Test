using System;
using System.Linq;
using System.Web.Security;
using System.Web.UI.WebControls;
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
                    if (string.IsNullOrEmpty(redirectUrl))
                        redirectUrl = "/Default.aspx";

                    Response.Redirect(redirectUrl);
                }
            }
            catch (Exception ex)
            {
                litError.Text = "<h3 class='error'>{0}</h3>".Fmt(ex.Message);
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

        protected void btnRegister_Click(object sender, EventArgs e)
        {
            if (!IsValid) return;
            try
            {
                using (var register = ResolveService<RegisterService>())
                {
                    var response = register.Post(new Register
                    {
                        Email = txtEmail.Text,
                        Password = txtNewPassword.Text,
                        FirstName = txtFirstName.Text,
                        LastName = txtLastName.Text,
                        AutoLogin = true,
                    });
                }

                var redirectUrl = "/Default.aspx".AddQueryParam("NewUserCreated", txtEmail.Text);
                Response.Redirect(redirectUrl);
            }
            catch (Exception ex)
            {
                var status = ex.ToResponseStatus();
                litRegisterError.Text = "<pre class='error'>{0}</pre>".Fmt(ex.Message);

                ShowIfError(status, "Email", litEmailError);
                ShowIfError(status, "Password", litPasswordError);
                ShowIfError(status, "FirstName", litFirstNameError);
                ShowIfError(status, "LastName", litLastNameError);
            }
        }

        private void ShowIfError(ResponseStatus status, string field, Literal lit)
        {
            var fieldError = status.Errors.FirstOrDefault(x => field.EqualsIgnoreCase(x.FieldName));
            lit.Text = fieldError != null 
                ? "<span class='error'> - {0}</span>".Fmt(fieldError.Message ?? fieldError.ErrorCode)
                : "";
        }
    }
}