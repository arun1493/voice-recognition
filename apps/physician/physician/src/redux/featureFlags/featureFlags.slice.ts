import { createAsyncThunk, createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { FeatureFlag } from "../../types";
import { RootState } from "../../redux/store";
import { fetchFeatureFlags } from "../../api";
import { FeatureFlagKeys, LoadingStatus } from "../../constants";

const FEATURE_FLAGS_FEATURE_KEY = "featureFlags";

interface FeatureFlagsState {
  flags: FeatureFlag[];
  loadingStatus: LoadingStatus;
}

const getFeatureFlags = createAsyncThunk("getFeatureFlags", fetchFeatureFlags);

const initialState: FeatureFlagsState = {
  flags: [],
  loadingStatus: LoadingStatus.NOT_LOADED
};

const featureFlagsSlice = createSlice({
  name: FEATURE_FLAGS_FEATURE_KEY,
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFeatureFlags.pending, (state: FeatureFlagsState) => {
        state.loadingStatus = LoadingStatus.LOADING;
      })
      .addCase(getFeatureFlags.fulfilled, (state: FeatureFlagsState, action: PayloadAction<any>) => {
        state.loadingStatus = LoadingStatus.LOADED;
        state.flags = action.payload?.data?.flags;
      })
      .addCase(getFeatureFlags.rejected, (state: FeatureFlagsState) => {
        state.loadingStatus = LoadingStatus.ERROR;
      });
  }
});

const featureFlagsReducer = featureFlagsSlice.reducer;

const featureFlagsActions = featureFlagsSlice.actions;

const getFeatureFlagsState = (rootState: RootState): FeatureFlagsState => rootState[FEATURE_FLAGS_FEATURE_KEY];

const selectFeatureFlags = createSelector(getFeatureFlagsState, (state) => state?.flags);

const selectIsIMOFeatureFlagEnabled = createSelector(
  getFeatureFlagsState,
  (state) => state?.flags?.find((flag) => flag.key === FeatureFlagKeys.SUKI_FFBE_USE_IMO_2022_Q4)?.enabled
);

export {
  getFeatureFlags,
  FEATURE_FLAGS_FEATURE_KEY,
  featureFlagsActions,
  featureFlagsReducer,
  featureFlagsSlice,
  FeatureFlagsState,
  selectFeatureFlags,
  selectIsIMOFeatureFlagEnabled
};
