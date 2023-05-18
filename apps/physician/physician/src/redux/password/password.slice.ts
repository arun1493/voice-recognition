import i18n from "i18next";
import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../redux/store";
import { TOAST_TYPES } from "../../constants";
import { LoadingStatus } from "../../constants";
import { toastsActions } from "../toast/toasts.slice";
import { logger, resetPassword as resetPasswordApi } from "../../api";

const PASSWORD_FEATURE_KEY = "password";

interface PasswordState {
  loadingStatus: LoadingStatus;
  userEmail: string;
}

const initialPasswordState: PasswordState = {
  loadingStatus: LoadingStatus.NOT_LOADED,
  userEmail: ""
};

const resetPassword = createAsyncThunk("password/reset", async (userEmail: string, { dispatch }) => {
  try {
    await resetPasswordApi(userEmail);
  } catch (e) {
    logger.error({ message: `Failed to reset password for ${userEmail}`, payload: e });
  }

  dispatch(
    toastsActions.add({
      message: i18n.t("pages.forgotPassword.tip"),
      type: TOAST_TYPES.CONFIRMATION
    })
  );
});

const passwordSlice = createSlice({
  name: PASSWORD_FEATURE_KEY,
  initialState: initialPasswordState,
  reducers: {
    add: (state, action) => {
      state.userEmail = action.payload;
    },
    remove: (state) => {
      state.userEmail = "";
    },
    resetStatus: (state) => {
      state.loadingStatus = LoadingStatus.NOT_LOADED;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(resetPassword.pending, (state: PasswordState) => {
        state.loadingStatus = LoadingStatus.LOADING;
      })
      .addCase(resetPassword.fulfilled, (state: PasswordState) => {
        state.loadingStatus = LoadingStatus.LOADED;
      })
      .addCase(resetPassword.rejected, (state: PasswordState) => {
        state.loadingStatus = LoadingStatus.ERROR;
      });
  }
});

const passwordReducer = passwordSlice.reducer;

const passwordActions = passwordSlice.actions;

const getPasswordState = (rootState: RootState): PasswordState => rootState[PASSWORD_FEATURE_KEY];

const selectUserEmail = createSelector(getPasswordState, (state) => state?.userEmail);
const selectLoadingStatus = createSelector(getPasswordState, (state) => state?.loadingStatus);

export {
  initialPasswordState,
  PASSWORD_FEATURE_KEY,
  passwordActions,
  passwordReducer,
  passwordSlice,
  resetPassword,
  selectLoadingStatus,
  selectUserEmail
};
