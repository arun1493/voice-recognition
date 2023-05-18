import _isEmpty from "lodash/isEmpty";
import { createAsyncThunk, createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserDetails } from "../../types";
import { RootState } from "../../redux/store";
import { LoadingStatus } from "../../constants";
import { getUserDetails as getUserDetailsApi } from "../../api";

const USER_FEATURE_KEY = "user";

interface UserState {
  loadingStatus: LoadingStatus;
  userDetails: UserDetails | null;
}

const getUserDetails = createAsyncThunk(
  "auth/getUserDetails",
  async ({ email, organizationId, userId }: { email: string; organizationId: string; userId: string }) =>
    await getUserDetailsApi(email, organizationId, userId)
);

const initialUserState: UserState = {
  loadingStatus: LoadingStatus.NOT_LOADED,
  userDetails: null
};

const userSlice = createSlice({
  name: USER_FEATURE_KEY,
  initialState: initialUserState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserDetails.pending, (state: UserState) => {
        state.loadingStatus = LoadingStatus.LOADING;
      })
      .addCase(getUserDetails.fulfilled, (state: UserState, action: PayloadAction<any>) => {
        state.loadingStatus = LoadingStatus.LOADED;
        if (!_isEmpty(action.payload?.data?.user)) {
          state.userDetails = action.payload?.data?.user;
        }
      })
      .addCase(getUserDetails.rejected, (state: UserState) => {
        state.loadingStatus = LoadingStatus.ERROR;
      });
  }
});

const userReducer = userSlice.reducer;

const userActions = userSlice.actions;

const getUserState = (rootState: RootState): UserState => rootState[USER_FEATURE_KEY];

const selectUserDetails = createSelector(getUserState, (state) => state?.userDetails);

const selectUserOrganizationId = createSelector(getUserState, (state) => state?.userDetails?.organizationId);

export {
  getUserDetails,
  getUserState,
  initialUserState,
  selectUserDetails,
  selectUserOrganizationId,
  USER_FEATURE_KEY,
  userActions,
  userReducer,
  userSlice,
  UserState
};
