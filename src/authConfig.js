import { PublicClientApplication } from "@azure/msal-browser";

export const msalInstance = new PublicClientApplication({
  auth: {
    clientId: "your-client-id", // replace with your client id
    authority: "https://login.microsoftonline.com/your-tenant-id", // replace with your tenant id
    redirectUri: "http://localhost:3000",
  },
});

// 1 . Go to the Azure portal.
// 2. Navigate to Azure Active Directory -> App registrations -> New registration.
// 3. Enter a name for your app, select "Accounts in this organizational directory only", and enter http://localhost:3000 as the Redirect URI.
// 4. Click Register.