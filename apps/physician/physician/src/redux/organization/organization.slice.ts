import { createSelector, createSlice } from "@reduxjs/toolkit";

import { Organization } from "../../types";
import { RootState } from "../../redux/store";

const ORGANIZATION_FEATURE_KEY = "organization";

type OrganizationStateKeys = keyof Organization;

interface OrganizationState extends Organization {
  isDataLoading?: boolean;
}

const initialOrganizationState: OrganizationState = {
  isDataLoading: false,
  isSukiXOrganization: false
};

const organizationsSlice = createSlice({
  name: ORGANIZATION_FEATURE_KEY,
  initialState: initialOrganizationState,
  reducers: {
    setInitialOrganizationState: (state) => {
      state = initialOrganizationState;
    },
    setIsOrgDataLoading: (state, action) => {
      state.isDataLoading = action.payload;
    },
    updateOrganization: (state, { payload }) => {
      const keys = Object.keys(payload) as OrganizationStateKeys[];
      keys.forEach((key) => (state[key] = payload[key]));
    }
  }
});

const organizationReducer = organizationsSlice.reducer;
const organizationActions = organizationsSlice.actions;
const getOrganizationState = (rootState: RootState): OrganizationState => rootState[ORGANIZATION_FEATURE_KEY];

const selectIsSukiXOrganization = createSelector(getOrganizationState, (state) => state?.isSukiXOrganization);
const selectIsDataLoading = createSelector(getOrganizationState, (state) => state?.isDataLoading);

export {
  getOrganizationState,
  initialOrganizationState,
  ORGANIZATION_FEATURE_KEY,
  organizationActions,
  organizationReducer,
  organizationsSlice,
  selectIsDataLoading,
  selectIsSukiXOrganization
};
