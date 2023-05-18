import { createSelector, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../redux/store";
import { IntroScreens } from "../../constants";

const INTRODUCTION_FEATURE_KEY = "introduction";

interface IntroState {
  activeScreen: null | IntroScreens;
}

const initialIntroState: IntroState = {
  activeScreen: null
};

const introSlice = createSlice({
  name: INTRODUCTION_FEATURE_KEY,
  initialState: initialIntroState,
  reducers: {
    setActiveScreen: (state, { payload }) => {
      state.activeScreen = payload;
    }
  }
});

const introReducer = introSlice.reducer;

const introActions = introSlice.actions;

const getAgentState = (rootState: RootState): IntroState => rootState[INTRODUCTION_FEATURE_KEY];

const selectIntroActiveScreen = createSelector(getAgentState, (state) => state?.activeScreen);

export { initialIntroState, INTRODUCTION_FEATURE_KEY, introActions, introReducer, IntroState, selectIntroActiveScreen };
