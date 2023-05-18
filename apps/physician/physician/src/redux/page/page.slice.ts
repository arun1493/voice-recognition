import { createSelector, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";

const PAGE_FEATURE_KEY = "page";

interface PageState {
  isNotFoundPage: boolean;
}

const initialPageState: PageState = {
  isNotFoundPage: false
};

const pageSlice = createSlice({
  name: PAGE_FEATURE_KEY,
  initialState: initialPageState,
  reducers: {
    setIsNotFoundPage: (state, action) => {
      state.isNotFoundPage = action.payload;
    }
  }
});

const pageReducer = pageSlice.reducer;

const pageActions = pageSlice.actions;

const getPageState = (rootState: RootState): PageState => rootState[PAGE_FEATURE_KEY];

const selectIsNotFoundPage = createSelector(getPageState, (state) => state?.isNotFoundPage);

export { initialPageState, PAGE_FEATURE_KEY, pageActions, pageReducer, pageSlice, PageState, selectIsNotFoundPage };
