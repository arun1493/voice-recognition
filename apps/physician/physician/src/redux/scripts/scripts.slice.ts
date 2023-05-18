import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";

import { Script } from "../../types";
import { RootState } from "../../redux/store";
import { getAllScripts as fetchAllScripts } from "../../api";

const SCRIPTS_FEATURE_KEY = "scripts";

interface ScriptsState {
  scripts: Script[];
}

const initialScriptsState: ScriptsState = {
  scripts: []
};

const getAllScripts = createAsyncThunk("scripts", async () => {
  return await fetchAllScripts();
});

const scriptsSlice = createSlice({
  name: SCRIPTS_FEATURE_KEY,
  initialState: initialScriptsState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllScripts.fulfilled, (state, action) => {
      return {
        ...state,
        scripts: action.payload
      };
    });
  }
});

const getScriptsState = (rootState: RootState): ScriptsState => rootState[SCRIPTS_FEATURE_KEY];
const scriptsActions = scriptsSlice.actions;
const scriptsReducer = scriptsSlice.reducer;
const selectAllScripts = createSelector(getScriptsState, (state) => state?.scripts);

export { getAllScripts, initialScriptsState, SCRIPTS_FEATURE_KEY, scriptsActions, scriptsReducer, selectAllScripts };
