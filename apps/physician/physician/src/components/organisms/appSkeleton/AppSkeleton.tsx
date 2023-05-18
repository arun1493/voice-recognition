import store from "store2";
import _get from "lodash/get";
import _isNil from "lodash/isNil";
import _isEmpty from "lodash/isEmpty";
import _isEqual from "lodash/isEqual";
import { useOktaAuth } from "@okta/okta-react";
import { useTranslation } from "react-i18next";
import { Paths } from "@suki-web/suki-business";
import { useIntercom } from "react-use-intercom";
import { useLocation, useNavigate } from "react-router-dom";
import { batch, useDispatch, useSelector } from "react-redux";
import { FunctionComponent, useEffect, useState } from "react";
import { Button, ScreenSize, Text, useBreakpoint } from "@suki-web/suki-ui";

import {
  fetchAndSetOrganization,
  isEpicOrCernerEMR,
  logOut,
  shouldShowEmrIntegrationToolbar,
  updateEmrTokensInStore
} from "../../../helpers";
import {
  emrActions,
  selectConnectionStatus,
  selectEmrConfig,
  selectEmrState,
  selectEmrType,
  selectIsEmrIntegrated
} from "../../../redux/emr";
import {
  EmrConnectionStatus,
  LOCAL_STORE,
  SecondaryEmr,
  STATE_ITEM_LOADING_STATUS,
  TOAST_TYPES
} from "../../../constants";
import { SukiLogo } from "../../atoms";
import { fetchAndSetOobe } from "../../../helpers";
import { toastsActions } from "../../../redux/toast";
import { NavigationToolbar } from "../navigationToolbar";
import { selectIsNotFoundPage } from "../../../redux/page";
import { selectOobeTasksStatus } from "../../../redux/oobe";
import { getFeatureFlags } from "../../../redux/featureFlags";
import { NewNoteButton, AmbientNoteButton } from "../../molecules";
import { getModalsState, modalsActions } from "../../../redux/modals";
import { fetchCernerTokens, fetchEpicTokens, getFhirDetails, logger } from "../../../api";
import { selectIsDataLoading, selectIsSukiXOrganization } from "../../../redux/organization";
import { getUserDetails, selectUserDetails, selectUserOrganizationId } from "../../../redux/user";
import { Container, Content, EMRConnectionText, EMRConnectionToolbar, Header } from "./appSkeleton.styled";

const AppSkeleton: FunctionComponent = (props) => {
  const { authState } = useOktaAuth() || {};
  const breakpoint = useBreakpoint();
  const dispatch = useDispatch();
  const location = useLocation();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { update } = useIntercom();
  const [isOobeDataLoaded, setIsOobeDataLoaded] = useState(false);

  const oobeTasksStatus = useSelector(selectOobeTasksStatus);
  const { searchPatientsInHeader } = useSelector(getModalsState);
  const isHeaderHidden = searchPatientsInHeader.isActive;
  const isNotFoundPage = useSelector(selectIsNotFoundPage);
  const userDetails = useSelector(selectUserDetails);

  const isAuthenticated = authState?.isAuthenticated;

  const isEmrUser = store.get(LOCAL_STORE.IS_EMR_USER);
  const isAmwellUser = store.get(LOCAL_STORE.IS_AMWELL_USER);

  const userOrganizationId = useSelector(selectUserOrganizationId);
  const isOrgDataLoading = useSelector(selectIsDataLoading);

  const userId = store.get(LOCAL_STORE.USER_ID);
  const isSukiXOrg = useSelector(selectIsSukiXOrganization);

  // Emr Integration
  const isEmrIntegrated = useSelector(selectIsEmrIntegrated);
  const emrConfig = useSelector(selectEmrConfig);
  const emrState = useSelector(selectEmrState);
  const emrType = useSelector(selectEmrType);
  const emrConnectionStatus = useSelector(selectConnectionStatus);
  const shouldShowEmrToolbar = shouldShowEmrIntegrationToolbar(emrState);
  const hasHeader = !(breakpoint === ScreenSize.XXS && location.pathname.includes(Paths.Note));
  const showHeader = !isNotFoundPage && !isAmwellUser && hasHeader;

  useEffect(() => {
    if (!_isEmpty(userId)) {
      dispatch(getFeatureFlags());
    }
  }, [userId]);

  // to run this only once at login/reload
  useEffect(() => {
    const oktaData = store.get(LOCAL_STORE.OKTA_DATA);
    const email = _get(oktaData, "idToken.claims.email");
    const userId = _get(oktaData, "idToken.claims.userID");
    const organizationId = _get(oktaData, "idToken.claims.organizationID");
    const lastUrl = store.get(LOCAL_STORE.LAST_URL);

    if (!_isEmpty(lastUrl)) {
      store.remove(LOCAL_STORE.LAST_URL);
      navigate(lastUrl);
    }

    if (email && userId && organizationId) {
      dispatch(getUserDetails({ email, organizationId, userId }));
    }

    // Initialize Pendo
    window?.pendo?.initialize({
      visitor: {
        id: email,
        orgId: organizationId
      },

      account: {
        id: process.env.NX_DEPLOYMENT_ENVIRONMENT
      }
    });
  }, []);

  useEffect(() => {
    if (!isOrgDataLoading && !_isNil(isEmrUser)) {
      fetchAndSetOobe({ dispatch, oobeTasksStatus, setIsOobeDataLoaded });
    }
  }, [isOrgDataLoading, isEmrUser]);

  useEffect(() => {
    if (!_isEmpty(userDetails)) {
      store.set(LOCAL_STORE.ORGANIZATION_ID, userDetails?.organizationId);
      store.set(LOCAL_STORE.USER_ID, userDetails?.id);
    }
  }, [userDetails]);

  useEffect(() => {
    if (!isAuthenticated) {
      store.add(LOCAL_STORE.OKTA_TOKEN_EXPIRED, true);
      logOut();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (userOrganizationId) {
      fetchAndSetOrganization(userOrganizationId, dispatch);
    }
  }, [userOrganizationId]);

  useEffect(() => {
    update({
      customAttributes: {
        "user_id": userId,
        "Org id": userOrganizationId,
        "Is suki x org": isSukiXOrg
      }
    });
  }, [isSukiXOrg, userId, userOrganizationId]);

  useEffect(() => {
    isEmrIntegrated &&
      getFhirDetails(dispatch, emrState)
        .then((data) => {
          dispatch(emrActions.updateLoadingStatus(STATE_ITEM_LOADING_STATUS.LOADED));
          if (data?.fhirConfig && !_isEmpty(data.fhirConfig)) {
            batch(() => {
              !_isEqual(emrState.emrData, data.fhirConfig) && dispatch(emrActions.updateEmrData(data.fhirConfig));
              store.set(LOCAL_STORE.EMR_TYPE, _get(data, "fhirConfig.emr"));
              dispatch(emrActions.updateLoadingStatus(STATE_ITEM_LOADING_STATUS.LOADED));
            });
          }

          if (!_isNil(data?.fhirTokensFromCache)) {
            const { fhirAccessToken, fhirIdToken, fhirRefreshToken } = data?.fhirTokensFromCache;
            const isEmptyTokens = _isEmpty(fhirAccessToken) && _isEmpty(fhirIdToken) && _isEmpty(fhirRefreshToken);

            if (isEmptyTokens) {
              const search = location.search;

              if (search.includes("code") && !_isNil(emrConfig)) {
                if (emrType === SecondaryEmr.EPIC_EMR) {
                  fetchEpicTokens(dispatch, emrConfig, emrState, search).then((data) => {
                    updateEmrTokensInStore(data, dispatch);
                  });
                } else {
                  fetchCernerTokens(dispatch, emrState).then((data) => {
                    updateEmrTokensInStore(data, dispatch);
                  });
                }
                dispatch(
                  toastsActions.add({
                    message: t("global.emrConnectionMessage"),
                    type: TOAST_TYPES.CONFIRMATION
                  })
                );
                navigate(Paths.Home);
              } else if (
                isEmrIntegrated &&
                isEpicOrCernerEMR(emrType) &&
                isEmptyTokens &&
                !search.includes("code") &&
                emrConnectionStatus !== EmrConnectionStatus.CONNECTED
              ) {
                dispatch(modalsActions.showEmrSignInModal());
              }
            } else {
              batch(() => {
                dispatch(emrActions.updateEmrTokens(data.fhirTokensFromCache));
                dispatch(emrActions.updateConnectionStatus(EmrConnectionStatus.CONNECTED));
              });
            }
          }
        })
        .catch((error) => {
          logger.error({ message: "Error in loading fhirConfig", payload: error });
          batch(() => {
            dispatch(emrActions.updateConnectionStatus(EmrConnectionStatus.FAILED));
            dispatch(emrActions.updateLoadingStatus(STATE_ITEM_LOADING_STATUS.LOADED));
          });
        });
  }, [isEmrIntegrated, emrConfig]);

  if (!isOobeDataLoaded) {
    return null;
  }

  return (
    <Container>
      {shouldShowEmrToolbar && (
        <EMRConnectionToolbar data-cy="emr-connection-toolbar">
          <EMRConnectionText>
            <Text isBold={true} size="lg">
              {t("emrConnectionToolbar.title")}
            </Text>
          </EMRConnectionText>
          <Button
            height="26px"
            isDark={true}
            isSmall={true}
            onClick={() => dispatch(modalsActions.showEmrSignInModal())}
            width="112px"
          >
            {t("emrConnectionToolbar.button")}
          </Button>
        </EMRConnectionToolbar>
      )}
      {showHeader && (
        <Header isHidden={isHeaderHidden}>
          <SukiLogo />
          <NavigationToolbar />
        </Header>
      )}
      <Content isHeaderHidden={!showHeader} isNotFoundPage={isNotFoundPage} shouldShowEmrToolbar={shouldShowEmrToolbar}>
        {props.children}
        {!isNotFoundPage && <AmbientNoteButton />}
        {!isNotFoundPage && <NewNoteButton />}
      </Content>
    </Container>
  );
};

export default AppSkeleton;

export { AppSkeleton };
