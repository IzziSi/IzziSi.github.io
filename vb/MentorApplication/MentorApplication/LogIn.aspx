<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="LogIn.aspx.vb" Inherits="MentorApplication.LogIn" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Mentor</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <style>
        #FormLogIn {
            border-style: solid;
            border-color: black;
            padding: 10px;
            width: 50%;
            display: flex;
            justify-content: center;
        }

        #lblLogIn {
            font-size:xx-large;
        }

        #EmailContainer,
        #PasswordContainer {
            padding: 5px;
        }

    </style>
</head>
<body>
    <form id="FormLogIn" runat="server">
        <div class="Credentials">
            <asp:Label runat="server" ID="lblLogIn" Text="Log In:" />
            <div id="EmailContainer">
                <asp:Label runat="server" Text="Email address" />
                <asp:TextBox ID="txtbxEmail" runat="server" />
            </div>
            <div id="PasswordContainer">
                <asp:Label runat="server" Text="Password" />
                <asp:TextBox ID="txtbxPassword" runat="server" />
            </div>
        </div>
    </form>
</body>
</html>
