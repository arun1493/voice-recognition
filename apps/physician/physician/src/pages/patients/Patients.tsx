import store from "store2";
import {
  Icon,
  NavigationIcon,
  PatientModes,
  ScreenSize,
  StyledHeaderIconButton,
  StyledHeaderTextButton,
  Text,
  useBreakpoint
} from "@suki-web/suki-ui";
import { useTranslation } from "react-i18next";
import { Paths } from "@suki-web/suki-business";
import { useMutation } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { FunctionComponent, useEffect, useRef, useState } from "react";

import {
  StyledCenterContent,
  StyledGradient,
  StyledPatientProfileWrapper,
  StyledPatientsHeader,
  StyledPatientsPage,
  StyledSection,
  StyledTab,
  StyledTabs,
  StyledTabsHeader,
  StyledTabsSlider
} from "./patients.styled";
import { Patient } from "../../types";
import { addPatient } from "../../api";
import { queryClient } from "../../app";
import { isEpicEMR } from "../../helpers";
import { PatientsMenu } from "./components";
import { PageNotFound } from "../pageNotFound";
import { selectEmrType } from "../../redux/emr";
import { agentActions } from "../../redux/agent";
import { modalsActions } from "../../redux/modals";
import { LOCAL_STORE, QUERY_NAMES } from "../../constants";
import { List, PatientProfile, Schedule } from "./components";
import { Cards, PageHeader } from "../../components/molecules";
import { noteActions, selectCardsByType, selectCardsVisibility } from "../../redux/note";

const TOTAL_TABS = 2;

const Patients: FunctionComponent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { activeTab } = useParams<{ activeTab?: string }>();
  const emrType = useSelector(selectEmrType) || store.get(LOCAL_STORE.EMR_TYPE);

  const { XXS } = ScreenSize;
  const breakpoint = useBreakpoint();
  const isBackButtonVisible = [XXS].includes(breakpoint);

  const containerRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [containerWidth, setContainerWidth] = useState(containerRef?.current?.getBoundingClientRect()?.width);
  const sliderWidth = containerWidth / TOTAL_TABS;

  const isListTabActive = activeTab === PatientModes.PATIENTS_LIST;
  const isScheduleTabActive = activeTab === PatientModes.SCHEDULE;
  const isPatientProfileTabActive = activeTab === PatientModes.PATIENTS_PROFILE;
  const cardsByType = useSelector(selectCardsByType);
  const isCardsVisible = useSelector(selectCardsVisibility);

  const toggleCardVisibility = () => dispatch(noteActions.toggleCardsVisibility());

  const tabIndex = isScheduleTabActive ? 0 : 1;

  useEffect(() => {
    setContainerWidth(containerRef?.current?.getBoundingClientRect()?.width);
  }, [containerRef, activeTab]);

  useEffect(() => {
    dispatch(agentActions.setBottom());

    return () => {
      store.remove(LOCAL_STORE.APPOINTMENT_ID);
    };
  }, []);

  const handleTabChange = (redirectTo: string) => navigate(redirectTo, { replace: true });

  const mutation = useMutation(addPatient, {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_NAMES.PATIENTS_LIST]);
    }
  });

  const onAddPatient = (patient: Patient) => {
    mutation.mutate({ patients: [patient] });
  };

  const handleAddPatient = () => {
    dispatch(modalsActions.showSearchPatientsModal({ onAddPatient }));
  };

  const onBack = () => navigate(Paths.Home);

  const isIncorrectPage = !isPatientProfileTabActive && !isListTabActive && !isScheduleTabActive;

  // TODO[Sai]: Revisit this logic while testing EMR integrated use case
  if ((isListTabActive && isEpicEMR(emrType)) || isIncorrectPage) {
    return <PageNotFound />;
  }

  if (isPatientProfileTabActive) {
    return (
      <StyledPatientsPage>
        <StyledPatientProfileWrapper isCardsVisible={isCardsVisible}>
          <StyledSection isCardsVisible={isCardsVisible}>
            <PatientProfile />
          </StyledSection>
          <Cards cardsByType={cardsByType} isCardsVisible={isCardsVisible} onBack={toggleCardVisibility} />
        </StyledPatientProfileWrapper>
      </StyledPatientsPage>
    );
  }

  const renderHeaderButtons = () => {
    return (
      <>
        {isListTabActive && (
          <StyledHeaderTextButton data-cy="add-patients-button" hasBorder={false} onClick={handleAddPatient} right={64}>
            <Text cursor="pointer" isBold={true}>
              {t("pages.patients.list.addPatient")}
            </Text>
          </StyledHeaderTextButton>
        )}

        <PatientsMenu isScheduleTabActive={isScheduleTabActive} />

        {isBackButtonVisible && (
          <StyledHeaderIconButton position="left">
            <NavigationIcon icon="back" onClick={onBack} size="2xs" testId="header-back-button" />
          </StyledHeaderIconButton>
        )}
      </>
    );
  };

  return (
    <StyledPatientsPage>
      <StyledSection>
        <StyledPatientsHeader isEpic={isEpicEMR(emrType)}>
          <PageHeader hasBorderBottom={false} renderActions={renderHeaderButtons} title={t("pages.patients.title")} />
          {!isEpicEMR(emrType) && (
            <StyledTabsHeader>
              <StyledTabs ref={containerRef}>
                <StyledTab
                  active={isScheduleTabActive}
                  data-cy="patients-schedule-tab"
                  onClick={() => handleTabChange(Paths.Schedule)}
                >
                  <Text cursor="pointer" isBold={true} size="md">
                    {t("pages.patients.schedule.title")}
                  </Text>
                </StyledTab>
                <StyledTab
                  active={isListTabActive}
                  data-cy="patients-list-tab"
                  onClick={() => handleTabChange(Paths.List)}
                >
                  <Text cursor="pointer" isBold={true} size="md">
                    {t("pages.patients.list.title")}
                  </Text>
                </StyledTab>
                {sliderWidth && <StyledTabsSlider index={tabIndex} width={sliderWidth} />}
              </StyledTabs>
            </StyledTabsHeader>
          )}
        </StyledPatientsHeader>

        {mutation.isLoading ? (
          <StyledCenterContent>
            <Icon icon="loader" size="lg" />
          </StyledCenterContent>
        ) : (
          <>
            {isScheduleTabActive && <Schedule />}
            {isListTabActive && <List />}
          </>
        )}
      </StyledSection>
      <StyledGradient />
    </StyledPatientsPage>
  );
};

export { Patients, PatientModes };

export default Patients;
