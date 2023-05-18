import { batch } from "react-redux";
import _isEmpty from "lodash/isEmpty";
import { Process } from "@suki-web/suki-business";

import {
  CERNER_TOKEN_REFRESH_TIME_BUFFER,
  EmrConnectionStatus,
  EPIC_TOKEN_REFRESH_TIME_BUFFER,
  SecondaryEmr
} from "../constants";
import { Dispatch } from "../types";
import { getTokenExpiryInSeconds } from ".";
import { emrActions, EmrState } from "../redux/emr";
import { logger, refreshCernerToken, refreshEpicToken, updateEmrFhirTokens } from "../api";
import { getCernerTokenRefreshHandler, getEpicTokenRefreshHandler } from "./emr/emrTokens";

type TokenValidationParams = {
  accessToken: string;
  dispatch: Dispatch;
  emrState: EmrState;
  idToken?: string;
  refreshToken: string;
};

function isValidAccessToken(next: any, params: TokenValidationParams) {
  const { accessToken, dispatch, emrState, refreshToken } = params;

  if (_isEmpty(accessToken)) {
    return next(params);
  }

  const emrIntegrationDetails = emrState.emrData;
  const emrType = emrIntegrationDetails.emr;
  const accessTokenTimeBuffer =
    emrType === SecondaryEmr.EPIC_EMR ? EPIC_TOKEN_REFRESH_TIME_BUFFER : CERNER_TOKEN_REFRESH_TIME_BUFFER;
  const remainingSeconds = getTokenExpiryInSeconds(accessToken);

  // If Access token from the cache does not have enough time left
  // we should get a new access token through refresh handler
  // hence taking the buffer time as 5 minutes(300) for epic and 1 minute for cerner
  // If less than 5/1 mins left return
  if (remainingSeconds < accessTokenTimeBuffer) {
    dispatch(emrActions.updateConnectionStatus(EmrConnectionStatus.FAILED));
    emrType &&
      updateEmrFhirTokens(emrType, {
        fhirAccessToken: "",
        fhirIdToken: "",
        fhirRefreshToken: ""
      });
    return next(params);
  }
  dispatch(emrActions.updateIsEmrIntegrated(true));

  if (emrType === SecondaryEmr.EPIC_EMR) {
    const epicTokenRefreshHandler = getEpicTokenRefreshHandler(
      dispatch,
      emrState,
      refreshToken,
      accessToken,
      remainingSeconds
    );
    epicTokenRefreshHandler();
  } else if (emrType === SecondaryEmr.CERNER_EMR) {
    const cernerTokenRefreshHandler = getCernerTokenRefreshHandler(
      dispatch,
      emrState,
      refreshToken,
      accessToken,
      remainingSeconds
    );
    cernerTokenRefreshHandler();
  }
}

const isValidRefreshToken = (next: any, params: TokenValidationParams) => {
  const { emrState, refreshToken } = params;
  const emr = emrState.emrData.emr;

  if (_isEmpty(refreshToken)) {
    return next(params);
  }

  if (emr) {
    const refreshHandler = EMR_TOKEN_REFRESH_HANDLERS[emr];
    refreshHandler && refreshHandler(params);
  }
};

const handleEpicTokenRefresh = (params: TokenValidationParams) => {
  const { accessToken, dispatch, emrState, refreshToken } = params;
  const emrIntegrationDetails = emrState.emrData;

  emrIntegrationDetails.config &&
    refreshEpicToken(emrIntegrationDetails.config, refreshToken)
      .then((response: { access_token: string; expires_in: number }) => {
        const { access_token, expires_in } = response;
        emrIntegrationDetails.emr && updateEmrFhirTokens(emrIntegrationDetails.emr, { fhirAccessToken: access_token });

        batch(() => {
          dispatch(emrActions.updateIsEmrIntegrated(true));
          dispatch(emrActions.updateConnectionStatus(EmrConnectionStatus.CONNECTED));
        });

        const epicTokenRefreshHandler = getEpicTokenRefreshHandler(
          dispatch,
          emrState,
          refreshToken,
          accessToken,
          expires_in
        );
        epicTokenRefreshHandler();
      })
      .catch((error: string) => {
        logger.error({ message: "Refresh token validation error", payload: error });

        dispatch(emrActions.updateConnectionStatus(EmrConnectionStatus.FAILED));
        emrIntegrationDetails.emr &&
          updateEmrFhirTokens(emrIntegrationDetails.emr, {
            fhirAccessToken: "",
            fhirIdToken: "",
            fhirRefreshToken: ""
          });
      });
};

const handleCernerTokenRefresh = (params: TokenValidationParams) => {
  const { accessToken, dispatch, emrState, refreshToken } = params;
  const emrIntegrationDetails = emrState.emrData;

  emrIntegrationDetails.config &&
    refreshCernerToken(emrIntegrationDetails.config, refreshToken)
      .then((response) => {
        const { access_token, expires_in } = response;
        emrIntegrationDetails.emr && updateEmrFhirTokens(emrIntegrationDetails.emr, { fhirAccessToken: access_token });

        batch(() => {
          dispatch(emrActions.updateIsEmrIntegrated(true));
          dispatch(emrActions.updateConnectionStatus(EmrConnectionStatus.CONNECTED));
        });

        const cernerTokenRefreshHandler = getCernerTokenRefreshHandler(
          dispatch,
          emrState,
          refreshToken,
          accessToken,
          expires_in
        );
        cernerTokenRefreshHandler();
      })
      .catch((error: string) => {
        logger.error({ message: "Refresh token validation error", payload: error });
        dispatch(emrActions.updateConnectionStatus(EmrConnectionStatus.FAILED));
        emrIntegrationDetails.emr &&
          updateEmrFhirTokens(emrIntegrationDetails.emr, {
            fhirAccessToken: "",
            fhirIdToken: "",
            fhirRefreshToken: ""
          });
      });
};

const EMR_TOKEN_REFRESH_HANDLERS: any = {
  [SecondaryEmr.EPIC_EMR]: handleEpicTokenRefresh,
  [SecondaryEmr.CERNER_EMR]: handleCernerTokenRefresh
};

const FHIR_TOKENS_INITIALIZATION_PROCESS = new Process().addHandler(isValidAccessToken).addHandler(isValidRefreshToken);

export { FHIR_TOKENS_INITIALIZATION_PROCESS, isValidAccessToken, isValidRefreshToken };
