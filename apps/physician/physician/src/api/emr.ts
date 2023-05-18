import axios from "axios";
import FHIR from "fhirclient";
import _get from "lodash/get";
import _find from "lodash/find";
import _isEmpty from "lodash/isEmpty";
import { fhirConfigReader } from "@suki-web/suki-business";

import { logger } from ".";
import axiosConfig from "./config";
import { Dispatch } from "../types";
import { SecondaryEmr } from "../constants";
import { fetchFhirConfig } from "./fhir/fhirConfig";
import { EmrConfigProps, EmrState } from "../redux/emr";
import { getFhirTokensFromCache, getOktaIdToken, getOrigin, updateEmrTokens } from "../helpers";

type EpicNotesRefreshInput = {
  sukiUserId: string;
  emrUserId?: string;
  sukiPatientId?: string;
  emrPatientId?: string;
  sukiCompositionId?: string;
  sukiNoteId?: string;
  maxAppointments?: number;
  status?: string;
  fromDate?: string;
  toDate?: string;
};

const CODE_START_POSITION_IN_EPIC_AFTER_LOGIN_SEARCH = 6;

const getFhirDetails = async (dispatch: Dispatch, emrState: EmrState) => {
  const oktaIdToken = getOktaIdToken();
  let fhirConfig = {};
  if (oktaIdToken) {
    fhirConfig = await fetchFhirConfig();
  }
  const { fhirTokens: fhirTokensFromCache, error } = await getFhirTokensFromCache(emrState, dispatch);

  return { fhirConfig, fhirTokensFromCache, error };
};

/* EPIC */
const fetchEpicTokens = (dispatch: Dispatch, epicFhirConfig: EmrConfigProps, emrState: EmrState, search: string) => {
  const { clientId, url: baseURL, clientSecret } = epicFhirConfig;
  const stateIndex = search.indexOf("&");
  const code = search.substring(CODE_START_POSITION_IN_EPIC_AFTER_LOGIN_SEARCH, stateIndex);
  const redirectUri = getOrigin();

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": `Basic ${clientSecret}`,
    "Accept": "application/json"
  };
  const urlencoded = new URLSearchParams();
  urlencoded.append("code", code);
  urlencoded.append("grant_type", "authorization_code");
  urlencoded.append("redirect_uri", redirectUri);
  urlencoded.append("client_id", clientId);
  urlencoded.append("redirect", "follow");

  return axios
    .post(baseURL, urlencoded, { headers })
    .then((respTxt: any) => {
      const accessToken = _get(respTxt, "data.access_token");
      const idToken = _get(respTxt, "data.id_token");
      const refreshToken = _get(respTxt, "data.refresh_token");

      updateEmrTokens(SecondaryEmr.EPIC_EMR, emrState, dispatch, { accessToken, idToken, refreshToken });

      return {
        accessToken,
        idToken,
        refreshToken
      };
    })
    .catch((error) => {
      logger.error({ message: "initialising FHIR error", payload: error });
      return {};
    });
};

const refreshEpicToken = (epicFhirConfig: EmrConfigProps, refreshToken: string) => {
  const url = fhirConfigReader.url(epicFhirConfig);
  const clientSecret = fhirConfigReader.clientSecret(epicFhirConfig);
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": `Basic ${clientSecret}`
  };
  const urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "refresh_token");
  urlencoded.append("refresh_token", refreshToken);

  return axios
    .post(url, urlencoded, {
      headers
    })
    .then((response) => response.data)
    .catch((error) => {
      logger.error({ message: "refreshEpicToken failed", payload: error });
    });
};

/* CERNER */
const fetchCernerTokens = (dispatch: Dispatch, emrState: EmrState) => {
  return FHIR.oauth2
    .ready()
    .then((client) => {
      const accessToken = _get(client, "state.tokenResponse.access_token");
      const idToken = _get(client, "state.tokenResponse.id_token");
      const refreshToken = _get(client, "state.tokenResponse.refresh_token");

      updateEmrTokens(SecondaryEmr.CERNER_EMR, emrState, dispatch, { accessToken, idToken, refreshToken });

      return {
        accessToken,
        idToken,
        refreshToken
      };
    })
    .catch((error) => {
      logger.error({ message: "initialising FHIR error", payload: error });
      return {};
    });
};

/* from restEndPoints we need to get valueUri value from that child object where url parameter equals "token" */
/* this function is predicate for _find() method */
const isCernerTokenEndPoint = ({ url }: { url?: string }) => url === "token";

const fetchCernerRefreshTokenUrl = (cernerFhirConfig: EmrConfigProps) => {
  const url = fhirConfigReader.url(cernerFhirConfig);
  const spec = fhirConfigReader.spec(cernerFhirConfig);
  const tenantId = fhirConfigReader.tenantId(cernerFhirConfig);
  const metadataUrl = `${url}/${spec}/${tenantId}/metadata`;

  const headers = {
    Accept: "application/json"
  };

  return axios
    .get(metadataUrl, {
      headers
    })
    .then((response) => {
      const restEndPoints = _get(response, "data.rest.0.security.extension.0.extension", []);
      const { valueUri } = _find(restEndPoints, isCernerTokenEndPoint) || {};
      return valueUri;
    })
    .catch((error) => {
      logger.error({ message: "[EMR Token Refresh]: Failed fetch refresh token url from metadata", payload: error });
      return "";
    });
};

const refreshCernerToken = async (cernerFhirConfig: EmrConfigProps, refreshToken: string) => {
  const tokenRefreshUrl = await fetchCernerRefreshTokenUrl(cernerFhirConfig);

  if (_isEmpty(tokenRefreshUrl)) {
    logger.error({ message: "invalid refresh url error" });
    return;
  }

  const urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "refresh_token");
  urlencoded.append("refresh_token", refreshToken);
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json"
  };

  return axios.post(tokenRefreshUrl, urlencoded, { headers }).then((response) => response.data);
};

const refreshEpicNotes = (payload: EpicNotesRefreshInput) => {
  return axiosConfig.post("/emr/epic-notes-refresh", payload);
};

export { fetchCernerTokens, fetchEpicTokens, getFhirDetails, refreshCernerToken, refreshEpicNotes, refreshEpicToken };
