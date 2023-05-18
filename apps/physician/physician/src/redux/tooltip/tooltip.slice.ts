import { createSelector, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../redux/store";

const TOOLTIP_FEATURE_KEY = "tooltip";

type TooltipState = {
  isWithDelay: boolean;
};

const initialTooltipState: TooltipState = {
  isWithDelay: true
};

const tooltipSlice = createSlice({
  name: TOOLTIP_FEATURE_KEY,
  initialState: initialTooltipState,
  reducers: {
    setIsWithDelay: (state, action) => {
      state.isWithDelay = action.payload;
    }
  }
});

const getTooltipState = (rootState: RootState): TooltipState => rootState[TOOLTIP_FEATURE_KEY];
const tooltipActions = tooltipSlice.actions;
const tooltipReducer = tooltipSlice.reducer;
const selectIsWithDelay = createSelector(getTooltipState, (state) => state?.isWithDelay);

export { initialTooltipState, selectIsWithDelay, TOOLTIP_FEATURE_KEY, tooltipActions, tooltipReducer, TooltipState };
