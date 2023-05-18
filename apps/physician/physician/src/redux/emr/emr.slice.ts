import { EMPTY_OBJECT } from "@suki-web/suki-business";
import { createSelector, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../redux/store";
import { EmrConnectionStatus, SecondaryEmr, STATE_ITEM_LOADING_STATUS_TYPE } from "../../constants";

const EMR_FEATURE_KEY = "emr";

interface EmrState {
  connectionStatus: EmrConnectionStatus;
  emrData: EmrProps;
  isEmrIntegrated: boolean;
  loadingStatus: STATE_ITEM_LOADING_STATUS_TYPE;
  tokens: EmrTokensProps;
}

interface EmrProps {
  additional?: { displayEmrIntegrationAlert?: boolean };
  config?: EmrConfigProps;
  emr?: SecondaryEmr;
}

interface EmrConfigProps {
  appType?: string;
  authorizeUrl?: string;
  clientId: string;
  clientSecret?: string;
  emailPatterns?: [];
  env?: string;
  metadataUrl?: string;
  platform?: string;
  redirectUri: string;
  spec?: string;
  url: string;
}

interface EmrTokensProps {
  fhirAccessToken?: string;
  fhirIdToken?: string;
  fhirRefreshToken?: string;
}

const initialEmrState: EmrState = {
  connectionStatus: EmrConnectionStatus.PENDING,
  emrData: EMPTY_OBJECT,
  isEmrIntegrated: false,
  loadingStatus: "not loaded",
  tokens: EMPTY_OBJECT
};

const emrSlice = createSlice({
  name: EMR_FEATURE_KEY,
  initialState: initialEmrState,
  reducers: {
    updateConnectionStatus: (state, action) => {
      state.connectionStatus = action.payload;
    },
    updateIsEmrIntegrated: (state, action) => {
      state.isEmrIntegrated = action.payload;
    },
    updateEmrData: (state, action) => {
      state.emrData = action.payload;
      state.isEmrIntegrated = true;
    },
    updateEmrTokens: (state, action) => {
      state.tokens = action.payload;
    },
    updateLoadingStatus: (state, action) => {
      state.loadingStatus = action.payload;
    }
  }
});

const emrReducer = emrSlice.reducer;
const emrActions = emrSlice.actions;
const getEmrState = (rootState: RootState): EmrState => rootState[EMR_FEATURE_KEY];
const selectConnectionStatus = createSelector(getEmrState, (state) => state.connectionStatus);
const selectIsEmrIntegrated = createSelector(getEmrState, (state) => state.isEmrIntegrated);
const selectEmrConfig = createSelector(getEmrState, (state) => state.emrData?.config);
const selectEmrClientSecret = createSelector(getEmrState, (state) => state.emrData?.config?.clientSecret);
const selectEmrData = createSelector(getEmrState, (state) => state.emrData);
const selectEmrState = createSelector(getEmrState, (state) => state);
const selectEmrType = createSelector(getEmrState, (state) => state.emrData?.emr || "");
const selectEmrTokens = createSelector(getEmrState, (state) => state.tokens);
const selectLoadingStatus = createSelector(getEmrState, (state) => state.loadingStatus);

export {
  EMR_FEATURE_KEY,
  emrActions,
  EmrConfigProps,
  EmrProps,
  emrReducer,
  emrSlice,
  EmrState,
  EmrTokensProps,
  initialEmrState,
  selectConnectionStatus,
  selectEmrState,
  selectEmrClientSecret,
  selectEmrConfig,
  selectEmrData,
  selectEmrTokens,
  selectEmrType,
  selectIsEmrIntegrated,
  selectLoadingStatus
};
