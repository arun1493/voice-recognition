import { OktaAuth } from "@okta/okta-auth-js";

import { isDevelopmentOrLocalEnvironment } from "../helpers/environment";

const PROD_OKTA_URL = "https://suki-api.okta.com";
const SANDBOX_OKTA_URL = "https://suki-sandbox.oktapreview.com";

const oktaConfig = {
  url: isDevelopmentOrLocalEnvironment() ? SANDBOX_OKTA_URL : PROD_OKTA_URL,
  issuer: process.env.NX_OKTA_ISSUER_URL,
  clientId: process.env.NX_OKTA_WEB_CLIENT_ID,
  redirectUri: window.location.origin + "/implicit/callback",
  pkce: false
};

const oktaAuth = new OktaAuth(oktaConfig);

export { oktaAuth, oktaConfig };

export default oktaAuth;
