import store from "store2";
import { createSelector, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../redux/store";
import { LOCAL_STORE, Theme } from "../../constants";

const SETTINGS_FEATURE_KEY = "settings";

interface SettingsState {
  isEditMode: boolean;
  theme: Theme;
}

const initialSettingsState: SettingsState = {
  isEditMode: false,
  theme: store(LOCAL_STORE.THEME) || Theme.LIGHT
};

const settingsSlice = createSlice({
  name: SETTINGS_FEATURE_KEY,
  initialState: initialSettingsState,
  reducers: {
    set: (state, action) => {
      const { payload } = action;
      store.set(LOCAL_STORE.THEME, payload);
      state.theme = payload;
    },
    setEditMode: (state, { payload }) => {
      state.isEditMode = payload;
    }
  }
});

const settingsReducer = settingsSlice.reducer;

const settingsActions = settingsSlice.actions;

const getSettingsState = (rootState: RootState): SettingsState => rootState[SETTINGS_FEATURE_KEY];

const selectTheme = createSelector(getSettingsState, (state) => state.theme);
const selectIsEditMode = createSelector(getSettingsState, (state) => state?.isEditMode);

export { initialSettingsState, selectIsEditMode, selectTheme, SETTINGS_FEATURE_KEY, settingsActions, settingsReducer };
