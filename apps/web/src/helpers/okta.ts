import _get from "lodash/get";
import fetch from "node-fetch";
import _isEmpty from "lodash/isEmpty";
import { OktaAuth } from "@okta/okta-auth-js";

import { isDevelopmentOrLocalEnvironment } from "../helpers/environment";

import { EMBED_URL, PROD_OKTA_OAUTH, PROD_OKTA_URL, SANDBOX_OKTA_OAUTH, SANDBOX_OKTA_URL } from "../constants";

const oktaClientId = process.env.OKTA_WEB_CLIENT_ID;

const getOktaBaseUrl = () => (isDevelopmentOrLocalEnvironment() ? SANDBOX_OKTA_URL : PROD_OKTA_URL);

const getOktaIssuer = () => (isDevelopmentOrLocalEnvironment() ? SANDBOX_OKTA_OAUTH : PROD_OKTA_OAUTH);

const getOktaConfig = (clientId?: string) => {
  return {
    url: getOktaBaseUrl(),
    issuer: getOktaIssuer(),
    clientId: clientId || oktaClientId,
    redirectUri: "",
    pkce: false
  };
};

console.log();

const getIdTokenFromSessionToken = (sessionToken, clientId) => {
  const oktaBaseUrl = getOktaBaseUrl();
  const url =
    `${oktaBaseUrl}/oauth2/default/v1/authorize?` +
    "response_type=id_token&" +
    "scope=openid profile email embedded&" +
    "state=TEST&" +
    "nonce=TEST&" +
    `client_id=${clientId}&` +
    `redirect_uri=${EMBED_URL}/implicit/callback&` +
    `sessionToken=${sessionToken}`;
  return fetch(url).then((response) => {
    const url = _get(response, "url");
    if (url.includes("error") || !_isEmpty(_get(response, "error"))) {
      throw new Error(JSON.stringify(response));
    }
    return url.split("#")[1].split("&")[0].split("=")[1];
  });
};

const getOktaAuthInstance = (clientId) => new OktaAuth(getOktaConfig(clientId));

export { getIdTokenFromSessionToken, getOktaAuthInstance, oktaClientId, getOktaConfig };
