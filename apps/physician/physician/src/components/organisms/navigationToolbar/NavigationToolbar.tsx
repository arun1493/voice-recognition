import store from "store2";
import _get from "lodash/get";
import { FunctionComponent } from "react";
import { Paths } from "@suki-web/suki-business";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getTooltipContent, IconButton } from "@suki-web/suki-ui";

import { oobeReader } from "../../../readers";
import { noteActions } from "../../../redux/note";
import { MainMenuNavigation } from "../../molecules";
import { selectOobeState } from "../../../redux/oobe";
import { completeOobeTask, getRoute } from "../../../helpers";
import { StyledNavigationToolbar } from "./navigationToolbar.styled";
import { getModalsState, modalsActions } from "../../../redux/modals";
import { EMPTY_STRING, LOCAL_STORE, OOBE_TASKS, Pages } from "../../../constants";

const NavigationToolbar: FunctionComponent = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const modalsState = useSelector(getModalsState);

  const isSearchActive = _get(modalsState, "searchPatientsInHeader.isActive");
  const openSearchPatientModal = () => dispatch(modalsActions.showSearchPatientsInHeaderModal());

  const patientsRoutes: string[] = [Paths.Schedule, Paths.List, Paths.PatientProfile];
  const isPatientRouteMatch = patientsRoutes.some((patientRoute) => location.pathname.includes(patientRoute));

  const { USER_ID } = LOCAL_STORE;
  const userId = store.get(USER_ID);
  const oobeData = useSelector(selectOobeState);
  const tasksStatus = oobeReader.oobeTasksStatus(oobeData);
  const tasksCompleted = oobeReader.tasksCompleted(oobeData);
  const tasksToBeCompleted = oobeReader.tasksToBeCompleted(oobeData);

  const openPatientListSchedule = () => {
    completeOobeTask({
      dispatch,
      tasksCompleted,
      tasksStatus,
      taskType: OOBE_TASKS.PATIENTS_ICON_CLICK,
      tasksToBeCompleted,
      userId
    });
    const isNotePage = location.pathname.includes(Paths.Note);
    const scheduleRoute = getRoute(Pages.Schedule);
    if (isNotePage && scheduleRoute) {
      dispatch(noteActions.setActiveSectionId(EMPTY_STRING));
      setTimeout(() => {
        navigate(scheduleRoute);
      }, 0);
    } else {
      scheduleRoute && navigate(scheduleRoute);
    }
  };

  return (
    <StyledNavigationToolbar data-cy="navigation-toolbar">
      <IconButton
        icon="search"
        isActive={isSearchActive}
        onClick={openSearchPatientModal}
        size="md"
        testId="navigation-toolbar-search"
        tooltip={getTooltipContent("search")}
      />

      <IconButton
        icon={isPatientRouteMatch ? "peopleFilled" : "people"}
        isActive={isPatientRouteMatch}
        onClick={openPatientListSchedule}
        size="md"
        testId="patients-list-icon"
        tooltip={getTooltipContent("patients")}
      />

      <MainMenuNavigation />
    </StyledNavigationToolbar>
  );
};

export default NavigationToolbar;
