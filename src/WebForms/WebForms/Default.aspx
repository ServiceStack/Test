<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="MasterPage.master" CodeBehind="Default.aspx.cs" Inherits="WebForms.Default" %>


<asp:Content runat="server" ID="Body" ContentPlaceHolderID="Body">
    <asp:Literal ID="litError" runat="server"></asp:Literal>
        
    <% if (IsAuthenticated) { %>
        <h2 style="color: green">Authenticated!</h2>  
    <% } else { %>
        <h2 style="color: red">Not Authenticated</h2>  
    <% }  %>

    <asp:TextBox ID="txtUserName" runat="server" Text="test"></asp:TextBox>
    <asp:TextBox ID="txtPassword" runat="server" Text="test"></asp:TextBox>
    <asp:Button ID="btnLogin" runat="server" OnClick="btnLogin_Click" Text="Login" />
    <asp:Button ID="btnLogout" runat="server" OnClick="btnLogout_Click" Text="Logout" />
        
    <h3 style="margin: 30px 0 0 0;">ServiceStack Status</h3>
    <div id="status"></div>

    <script type="text/javascript">

        $.getJSON("/api/auth", function (r) {
            var html = "<h4 style='color:green'>Authenticated!</h4>"
                     + "<table>"
                     + $.map(r, function(k, v) {
                         return "<tr><th>" + v + "<th>"
                              + "<td>" + (typeof k == 'string' ? k : JSON.stringify(k)) + "</td></tr>";
                     }).join('')
                     + "</table>";
            $("#status").html(html);
        }).error(function () {
            $("#status").html("<h4 style='color:red'>Not Authenticated</h4>");
        });

    </script>
    
    <h3>ServiceStack Session Links</h3>
    
    <table>
        <tr>
            <th>View Session Info</th>
            <td><a href="/api/session">/api/session</a></td>
        </tr>
        <tr>
            <th>Edit Session Info</th>
            <td><a href="/api/session/edit/ZZZ">/api/session/edit/ZZZ</a></td>
        </tr>
        <tr>
            <th>AuthOnly Page</th>
            <td><a href="/AuthOnly.aspx">/AuthOnly.aspx</a></td>
        </tr>
    </table>

</asp:Content>

