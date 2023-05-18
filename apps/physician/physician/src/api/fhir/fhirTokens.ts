import axios from "axios";

import { SecondaryEmr } from "../../constants";
import { getAPIBaseUrl, getFhirRequestHeaders } from "../../helpers";

const EMR_TOKEN_END_POINT = "/fhir/token/";

type FhirTokens = {
  fhirAccessToken?: string;
  fhirIdToken?: string;
  fhirRefreshToken?: string;
};

const fetchEmrFhirTokens = (emrType: SecondaryEmr) => {
  const url = getAPIBaseUrl() + EMR_TOKEN_END_POINT + emrType;
  const headers = getFhirRequestHeaders();

  return axios
    .get(url, {
      headers
    })
    .then((response) => response.data)
    .catch((error) => {
      return {
        error: `Failed to fetch fhir token details: ${error}`
      };
    });
};

const updateEmrFhirTokens = (emrType: SecondaryEmr, fhirTokens: FhirTokens) => {
  const { fhirAccessToken, fhirIdToken, fhirRefreshToken } = fhirTokens;
  const url = getAPIBaseUrl() + EMR_TOKEN_END_POINT + emrType;
  const headers = getFhirRequestHeaders();

  const body = {
    fhirAccessToken,
    fhirIdToken,
    fhirRefreshToken
  };

  return axios
    .post(url, body, {
      headers
    })
    .then((response) => response)
    .catch((error) => {
      return {
        error: `Failed to fetch Embed user details: ${error}`
      };
    });
};

export { fetchEmrFhirTokens, updateEmrFhirTokens };
