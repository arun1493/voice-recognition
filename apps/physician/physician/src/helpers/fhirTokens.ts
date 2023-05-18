import jwtDecode from "jwt-decode";
import _isEmpty from "lodash/isEmpty";
import { differenceInSeconds } from "date-fns";

import { Dispatch } from "../types";
import { getOktaIdToken } from "./okta";
import { fhirTokenCacheReader } from "../readers";
import { EmrConnectionStatus } from "../constants";
import { emrActions, EmrState } from "../redux/emr";
import { fetchEmrFhirTokens, logger } from "../api";
import { FHIR_TOKENS_INITIALIZATION_PROCESS } from "./fhirTokensInitializationProcess";

/**
 * Get expiry time in seconds by decoding
 * jwt token
 */
const getTokenExpiryInSeconds = (jwt: string) => {
  if (jwt) {
    const { exp } = jwtDecode(jwt) as any;
    // multiple 1000 to get in miliseconds
    return differenceInSeconds(exp * 1000, new Date().getTime());
  }
  return 0;
};

const getFhirTokensFromCache = async (emrState: EmrState, dispatch: Dispatch) => {
  const emrIntegrationDetails = emrState.emrData;
  if (emrIntegrationDetails.emr) {
    const { fhirTokens, error } = await fetchEmrFhirTokens(emrIntegrationDetails.emr);

    if (!_isEmpty(fhirTokens)) {
      const fhirAccessToken = fhirTokenCacheReader.fhirAccessToken(fhirTokens);
      const fhirIdToken = fhirTokenCacheReader.fhirIdToken(fhirTokens);
      const fhirRefreshToken = fhirTokenCacheReader.fhirRefreshToken(fhirTokens);

      FHIR_TOKENS_INITIALIZATION_PROCESS.run({
        dispatch,
        emrState,
        accessToken: fhirAccessToken,
        idToken: fhirIdToken,
        refreshToken: fhirRefreshToken
      });
    } else {
      logger.error({ message: "getFhirTokensFromCache Token from redis cache", payload: error });
      dispatch(emrActions.updateConnectionStatus(EmrConnectionStatus.FAILED));
    }
    return { fhirTokens, error };
  }
  return {};
};

const getFhirRequestHeaders = () => {
  const oktaIdToken = getOktaIdToken();

  const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": oktaIdToken
  };

  return headers;
};

export { getFhirRequestHeaders, getFhirTokensFromCache, getTokenExpiryInSeconds };
