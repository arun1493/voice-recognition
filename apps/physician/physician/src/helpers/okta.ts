import store from "store2";
import _get from "lodash/get";

import { LOCAL_STORE } from "../constants";

const getOktaIdTokenObject = () => {
  const oktaTokens = store.get(LOCAL_STORE.OKTA_DATA);
  const oktaIdTokenObject = _get(oktaTokens, "idToken");
  return oktaIdTokenObject;
};

const getOktaIdToken = () => {
  const oktaTokens = store.get(LOCAL_STORE.OKTA_DATA);
  const oktaIdToken = _get(oktaTokens, "idToken.idToken");
  return oktaIdToken;
};

const getOktaAccessToken = () => {
  const oktaTokens = store.get(LOCAL_STORE.OKTA_DATA);
  const oktaAccessToken = _get(oktaTokens, "accessToken.accessToken");
  return oktaAccessToken;
};

const getOktaSessionToken = () => store.get(LOCAL_STORE.OKTA_SESSION_TOKEN);

export { getOktaAccessToken, getOktaIdToken, getOktaIdTokenObject, getOktaSessionToken };
