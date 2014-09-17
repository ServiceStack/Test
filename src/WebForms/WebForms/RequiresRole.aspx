<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="MasterPage.master" CodeBehind="RequiresRole.aspx.cs" Inherits="WebForms.RequiresRole" %>


<asp:Content runat="server" ID="Body" ContentPlaceHolderID="Body">
<h2 style="color:green">Haz Access!</h2>

<p>
    Try viewing this page when <a href="/?redirect=/RequiresRole.aspx">Signed in as test2/test2 user</a>
    who doesn't have this required role.
</p>

</asp:Content>

