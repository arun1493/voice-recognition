import { createSelector, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";

const THIN_CLIENT_FEATURE_KEY = "thinClient";

interface ThinClientState {
  speechData: any;
}

const initialThinClientState: ThinClientState = {
  speechData: null
};

const thinClientSlice = createSlice({
  name: THIN_CLIENT_FEATURE_KEY,
  initialState: initialThinClientState,
  reducers: {
    updateSection: (state, { payload }) => {
      state.speechData = payload;
    }
  }
});

const thinClientReducer = thinClientSlice.reducer;

const thinClientActions = thinClientSlice.actions;

const getThinClientState = (rootState: RootState): ThinClientState => rootState[THIN_CLIENT_FEATURE_KEY];

const selectSpeechData = createSelector(getThinClientState, (state) => state?.speechData);

export { thinClientActions, thinClientReducer, selectSpeechData, THIN_CLIENT_FEATURE_KEY };
