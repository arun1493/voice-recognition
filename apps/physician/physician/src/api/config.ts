import axios from "axios";
import store from "store2";
import { RequestHeaders } from "@suki-web/suki-business";

import { LOCAL_STORE } from "../constants";
import { getOktaAccessToken } from "../helpers";
import { getAPIBaseUrl } from "../helpers/environment";

const instance = axios.create({
  baseURL: getAPIBaseUrl(),
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*"
  }
});

instance.interceptors.request.use((config) => {
  const { ORGANIZATION_ID, USER_ID } = LOCAL_STORE;
  const organizationId = store.get(ORGANIZATION_ID);
  const userId = store.get(USER_ID);
  const userAgent = window.navigator.userAgent;
  const authorization = getOktaAccessToken();
  const headers = config?.headers || {};

  if (organizationId) {
    headers[RequestHeaders.ORGANIZATION_ID] = organizationId;
  }
  if (userId) {
    headers[RequestHeaders.USER_ID] = userId;
  }
  if (authorization) {
    headers[RequestHeaders.AUTHORIZATION] = authorization;
  }
  if (userAgent) {
    headers[RequestHeaders.USER_AGENT] = userAgent;
  }

  return config;
});

export default instance;
