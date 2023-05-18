import store from "store2";
import { Paths } from "@suki-web/suki-business";

import axios from "./config";
import { oktaAuth } from "../config";
import { logger } from "./logMessage";
import { LOCAL_STORE } from "../constants";
import { getAPIBaseUrl } from "../helpers";

const END_POINTS = {
  GET_SESSION_TOKEN: "/auth/session-token",
  IS_TOKEN_VALID: "/auth/is-valid-token",
  RESET_PASSWORD: "/auth/password/reset",
  REVOKE_TOKEN: "/auth/revoke",
  USER_DETAILS: "/auth/me"
};

const getUserDetails = (email: string, organizationId: string, userId: string) => {
  return axios
    .get(END_POINTS.USER_DETAILS, {
      params: {
        email,
        onLogin: !store.get(LOCAL_STORE.USER_ID),
        organizationId,
        userId
      }
    })
    .catch((error) => {
      logger.info({ message: "Failed to get user details" });
      throw new Error(error);
    });
};

const login = (password: string, email: string) => {
  const credentials = { password, email };
  const encodedCredentials = btoa(JSON.stringify(credentials));

  return axios
    .get(END_POINTS.GET_SESSION_TOKEN, { params: { encodedCredentials } })
    .then((response) => {
      if (response.data.success) {
        store.set(LOCAL_STORE.OKTA_SESSION_TOKEN, response.data.sessionToken);
        oktaAuth.signInWithRedirect({
          originalUri: Paths.Home,
          sessionToken: response.data.sessionToken
        });
      } else {
        throw new Error("Authentication Error");
      }
    })
    .catch((error) => {
      throw new Error(error);
    });
};

const revokeAccessToken = () => {
  return axios
    .post(END_POINTS.REVOKE_TOKEN)
    .then(() => {
      logger.info({ message: "Successfully revoked user access token" });
    })
    .catch((error) => {
      logger.info({ message: "Error in revoking user access token", payload: error });
    });
};

const resetPassword = (email: string) => {
  return axios.post(END_POINTS.RESET_PASSWORD, { email });
};

const validateIdToken = async (idToken: string) => {
  const url = getAPIBaseUrl() + END_POINTS.IS_TOKEN_VALID;
  const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": idToken
  };

  try {
    const response = await axios.get(url, {
      headers
    });
    return response.data;
  } catch (error) {
    return {
      error: `Failed to check token validation: ${error}`
    };
  }
};

export { getUserDetails, login, resetPassword, revokeAccessToken, validateIdToken };
