import { batch } from "react-redux";
import _isEmpty from "lodash/isEmpty";

import {
  CERNER_TOKEN_REFRESH_TIME_BUFFER,
  EmrConnectionStatus,
  EPIC_TOKEN_REFRESH_TIME_BUFFER,
  SecondaryEmr,
  STATE_ITEM_LOADING_STATUS,
  Tokens
} from "../../constants";
import { Dispatch } from "../../types";
import { isEpicOrCernerEMR } from "../../helpers";
import { modalsActions } from "../../redux/modals";
import { emrActions, EmrConfigProps, EmrState } from "../../redux/emr";
import { FHIR_TOKENS_INITIALIZATION_PROCESS } from "../fhirTokensInitializationProcess";
import { logger, refreshCernerToken, refreshEpicToken, updateEmrFhirTokens } from "../../api";

const isValidEmrTokensRefreshInput = (emrState: EmrState, accessToken: string) => {
  const emrConfig: EmrConfigProps | undefined = emrState.emrData?.config;

  if (_isEmpty(emrConfig)) {
    logger.info({ message: "[EMR Token Refresh]: No configuration found" });
    return false;
  }
  if (_isEmpty(accessToken)) {
    logger.info({ message: "[EMR Token Refresh]: Access token is Empty" });
    return false;
  }
  return true;
};

const getEpicTokenRefreshHandler = (
  dispatch: Dispatch,
  emrState: EmrState,
  refreshToken: string,
  accessToken: string,
  expiryTime: number
) => {
  let timeToRefreshToken = expiryTime - EPIC_TOKEN_REFRESH_TIME_BUFFER;
  const handleEpicTokenRefresh = () => {
    const emrConfig: EmrConfigProps | undefined = emrState.emrData?.config;
    const emrType: string | undefined = emrState.emrData?.emr;

    if (!isValidEmrTokensRefreshInput(emrState, accessToken)) return;
    if (emrType !== SecondaryEmr.EPIC_EMR) {
      logger.info({ message: "[EMR Token Refresh]: Not EPIC emr" });
      return;
    }

    emrConfig &&
      setTimeout(() => {
        refreshEpicToken(emrConfig, refreshToken)
          .then((response) => {
            const { expires_in } = response;
            timeToRefreshToken = expires_in - EPIC_TOKEN_REFRESH_TIME_BUFFER;
            handleEpicTokenRefresh();
          })
          .catch((error) => {
            logger.error({ message: "[EMR Token Refresh]:", payload: error });
            dispatch(emrActions.updateConnectionStatus(EmrConnectionStatus.FAILED));
          });
      }, timeToRefreshToken * 1000);
  };
  return handleEpicTokenRefresh;
};

const getCernerTokenRefreshHandler = (
  dispatch: Dispatch,
  emrState: EmrState,
  refreshToken: string,
  accessToken: string,
  expiryTime: number
) => {
  let timeToRefreshToken = expiryTime - CERNER_TOKEN_REFRESH_TIME_BUFFER;

  const handleCernerTokenRefresh = () => {
    const emrConfig: EmrConfigProps | undefined = emrState.emrData?.config;
    const emrType: string | undefined = emrState.emrData?.emr;

    if (!isValidEmrTokensRefreshInput(emrState, accessToken)) return;
    if (emrType !== SecondaryEmr.CERNER_EMR) {
      logger.info({ message: "[EMR Token Refresh]: Not CERNER emr" });
      return;
    }

    emrConfig &&
      setTimeout(() => {
        refreshCernerToken(emrConfig, refreshToken)
          .then((response) => {
            const { expires_in } = response;
            timeToRefreshToken = expires_in - EPIC_TOKEN_REFRESH_TIME_BUFFER;
            handleCernerTokenRefresh();
          })
          .catch((error) => {
            logger.error({ message: "[EMR Token Refresh]:", payload: error });
            dispatch(emrActions.updateConnectionStatus(EmrConnectionStatus.FAILED));
          });
      }, timeToRefreshToken * 1000);
  };

  return handleCernerTokenRefresh;
};

const shouldShowEmrIntegrationToolbar = (EmrState: EmrState) => {
  const { connectionStatus, loadingStatus, isEmrIntegrated, emrData } = EmrState;
  const emr = emrData.emr || "";
  return (
    isEmrIntegrated &&
    isEpicOrCernerEMR(emr) &&
    loadingStatus === STATE_ITEM_LOADING_STATUS.LOADED &&
    connectionStatus !== EmrConnectionStatus.CONNECTED
  );
};

const updateEmrTokensInStore = (data: any, dispatch: Dispatch) => {
  const isTokensUpdated = !_isEmpty(data?.accessToken) && !_isEmpty(data?.idToken) && !_isEmpty(data?.refreshToken);
  if (isTokensUpdated) {
    dispatch(modalsActions.hideEmrSignInModal());
  }
  if (data) {
    batch(() => {
      dispatch(emrActions.updateConnectionStatus(EmrConnectionStatus.CONNECTED));
      dispatch(emrActions.updateEmrTokens(data));
    });
  }
};

const updateEmrTokens = (emrType: SecondaryEmr, emrState: EmrState, dispatch: Dispatch, fhirTokens: Tokens) => {
  const { accessToken, idToken, refreshToken } = fhirTokens;

  updateEmrFhirTokens(emrType, {
    fhirAccessToken: accessToken,
    fhirIdToken: idToken,
    fhirRefreshToken: refreshToken
  });

  FHIR_TOKENS_INITIALIZATION_PROCESS.run({
    dispatch,
    emrState,
    idToken,
    accessToken,
    refreshToken
  });
};

export {
  getCernerTokenRefreshHandler,
  getEpicTokenRefreshHandler,
  shouldShowEmrIntegrationToolbar,
  updateEmrTokens,
  updateEmrTokensInStore
};
