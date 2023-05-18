import store from "store2";
import _get from "lodash/get";
import { Dispatch } from "react";
import { batch } from "react-redux";
import _isEmpty from "lodash/isEmpty";

import { emrActions } from "../redux/emr";
import { LOCAL_STORE } from "../constants";
import { fetchOrganizations, logger } from "../api";
import { organizationReader } from "../readers";
import { organizationActions } from "../redux/organization";

const fetchAndSetOrganization = (userOrganizationId: string, dispatch: Dispatch<any>) => {
  dispatch(organizationActions.setIsOrgDataLoading(true));
  fetchOrganizations(userOrganizationId, true)
    .then((data) => {
      if (!_isEmpty(data)) {
        const organization = _get(data, "organizations[0]");
        const isRedRoverOrg = _get(organization, "emr.configurations.isRedRoverOrg", false);
        const isSubmitNotesAsPreliminary = _get(organization, "emr.configurations.isSubmitNotesAsPreliminary", false);

        const secondaryEmrType = organizationReader.emrType(organization);
        const emrId = organizationReader.emrId(organization);
        const emr = organizationReader.emr(organization);

        store.set(LOCAL_STORE.IS_EMR_USER, !!emrId);
        store.set(LOCAL_STORE.USER_SECONDARY_EMR_TYPE, secondaryEmrType);
        store.set(LOCAL_STORE.IS_RED_ROVER_ORG, isRedRoverOrg);
        store.set(LOCAL_STORE.IS_SUBMIT_NOTE_AS_PRILIMINARY, isSubmitNotesAsPreliminary);

        batch(() => {
          dispatch(organizationActions.updateOrganization(organization));
          dispatch(organizationActions.setIsOrgDataLoading(false));
          if (emrId) {
            dispatch(emrActions.updateIsEmrIntegrated(true));
            dispatch(emrActions.updateEmrData({ emr: secondaryEmrType, ...emr }));
          }
        });
      } else {
        dispatch(organizationActions.setInitialOrganizationState());
      }
    })
    .catch((error) => {
      logger.error({ message: "Failed to fetch organization data", payload: error });
      dispatch(organizationActions.setIsOrgDataLoading(false));
      store.set(LOCAL_STORE.IS_EMR_USER, false);
    });
};

export { fetchAndSetOrganization };
