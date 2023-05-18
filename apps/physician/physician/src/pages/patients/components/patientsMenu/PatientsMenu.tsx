import store from "store2";
import {
  Dialog,
  DialogButtonsProps,
  DropDownMenu,
  NavigationIcon,
  StyledHeaderIconButton,
  Text
} from "@suki-web/suki-ui";
import _get from "lodash/get";
import _map from "lodash/map";
import _forEach from "lodash/forEach";
import { useClickAway } from "react-use";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { FunctionComponent, useRef, useState } from "react";

import {
  bulkPrintNotes,
  bulkSaveNotes,
  completeOobeTask,
  filterTodaysNotesForPatients,
  getRoute
} from "../../../../helpers";
import { MenuItem } from "./types";
import { Appointment } from "../../../../types";
import { oobeReader } from "../../../../readers";
import { getCompletedNotes } from "../../../../api";
import { NoteMenuListItem } from "../../../../components/molecules";
import { selectIsOobeCompleted, selectOobeState } from "../../../../redux/oobe";
import { selectAppointments, selectPatients } from "../../../../redux/patients";
import { getMenuItems, getPatientIds, getScheduleCompositionIds } from "./helpers";
import { StyledDropDownContainer, StyledPatientsMenuContainer } from "./patientsMenu.styled";
import { LOCAL_STORE, OOBE_TASKS_NON_INTEGRATED, Pages, QUERY_NAMES } from "../../../../constants";

interface PatientsMenuProps {
  isScheduleTabActive?: boolean;
}

const PatientsMenu: FunctionComponent<PatientsMenuProps> = ({ isScheduleTabActive = false }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isPatientsMenuOpen, setIsPatientsMenuOpen] = useState(false);
  const [isPrintDialogOpen, setIsPrintDialogOpen] = useState<boolean>(false);

  const scheduleAppointments = useSelector(selectAppointments) as Array<Appointment>;
  const patientsList = useSelector(selectPatients);

  const menuTrigger = useRef(null);

  const isEmrUser = store.get(LOCAL_STORE.IS_EMR_USER);

  // get schedule notes compositionIds
  const scheduleCompositionIds = getScheduleCompositionIds(scheduleAppointments);

  // ids of all patients from list
  const listPatientsIds = getPatientIds(patientsList);

  // get all completed notes
  const { data: completedNotesData } = useQuery([QUERY_NAMES.COMPLETED_NOTES], getCompletedNotes, {
    enabled: !isScheduleTabActive
  });
  const completedNotes = _get(completedNotesData, "data.data", []);

  const listPatientsTodaysNotesIds = filterTodaysNotesForPatients(completedNotes, listPatientsIds);

  // todo [Anastasiia]: replace patientsNotesIds with NoteIds from appointment when backend changes done
  // for now scheduleCompositionIds array contain ids of both completed and unfinished notes
  // temporary solution - pass this array as param for both compositionIds & patientsNotesIds, select query on backend side retrieving correct data
  const printOrSaveParams = isScheduleTabActive
    ? { compositionIds: scheduleCompositionIds, patientsNotesIds: scheduleCompositionIds }
    : { compositionIds: [], patientsNotesIds: listPatientsTodaysNotesIds };

  const togglePatientsMenuVisibility = () => {
    setIsPatientsMenuOpen((isPatientsMenuOpen) => !isPatientsMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsPatientsMenuOpen(false);
  };

  useClickAway(menuTrigger, handleCloseMenu);

  const handleClosePrintDialog = () => {
    setIsPrintDialogOpen(false);
  };

  const handlePrintNotes = () => {
    handleClosePrintDialog();
    bulkPrintNotes(printOrSaveParams, dispatch);
  };

  const handleSaveNotes = () => {
    handleClosePrintDialog();
    bulkSaveNotes(printOrSaveParams, dispatch);
  };

  const printDialogButtonProps: DialogButtonsProps = {
    end: { onClick: handleSaveNotes, text: t("modals.printOrSave.button.save") },
    hasCloseBtn: true,
    middle: {
      btnType: "primary",
      onClick: handlePrintNotes,
      text: t("modals.printOrSave.button.print")
    }
  };

  const handleHelpMenuItemClick = () => {
    const helpRoute = getRoute(Pages.Help);
    helpRoute && navigate(helpRoute);
  };

  const { USER_ID } = LOCAL_STORE;
  const userId = store.get(USER_ID);
  const oobeData = useSelector(selectOobeState);
  const tasksStatus = oobeReader.oobeTasksStatus(oobeData);
  const tasksCompleted = oobeReader.tasksCompleted(oobeData);
  const tasksToBeCompleted = oobeReader.tasksToBeCompleted(oobeData);
  const isOobeCompleted = useSelector(selectIsOobeCompleted);

  const handleScheduleImportMenuItemClick = () => {
    const scheduleImportRoute = getRoute(Pages.ScheduleImport);
    scheduleImportRoute && navigate(scheduleImportRoute);

    !isOobeCompleted &&
      completeOobeTask({
        userId,
        taskType: OOBE_TASKS_NON_INTEGRATED.IMPORT_SCHEDULE,
        tasksStatus,
        tasksCompleted,
        tasksToBeCompleted,
        dispatch
      });
  };

  const handlePrintMenuItemClick = () => {
    setIsPatientsMenuOpen(false);
    setIsPrintDialogOpen(true);
  };

  const menuItems = getMenuItems({
    isEmrUser,
    isScheduleTabActive,
    onHelp: handleHelpMenuItemClick,
    onImportSchedule: handleScheduleImportMenuItemClick,
    onPrint: handlePrintMenuItemClick,
    patientsNotesIds: listPatientsTodaysNotesIds,
    scheduleCompositionIds
  });

  const renderMenuItem = ({ disabled, icon, label, onClick }: MenuItem, id: number) => {
    const key = `patients-menu-item-${id}`;
    return (
      <NoteMenuListItem data-cy={key} disabled={disabled} icon={icon} key={key} onClick={onClick} testId={key}>
        {label}
      </NoteMenuListItem>
    );
  };

  return (
    <>
      <StyledHeaderIconButton position="right">
        <NavigationIcon
          icon="kebabMenu"
          isActive={isPatientsMenuOpen}
          onClick={togglePatientsMenuVisibility}
          size="xs"
          testId="header-back-button"
        />
        {isPatientsMenuOpen && (
          <StyledDropDownContainer>
            <DropDownMenu align="flex-end">
              <StyledPatientsMenuContainer data-cy="patients-menu" ref={menuTrigger}>
                {_map(menuItems, renderMenuItem)}
              </StyledPatientsMenuContainer>
            </DropDownMenu>
          </StyledDropDownContainer>
        )}
      </StyledHeaderIconButton>
      {isPrintDialogOpen && (
        <Dialog
          buttonProps={printDialogButtonProps}
          isOpen={isPrintDialogOpen}
          key="print-or-save-modal"
          onClose={handleClosePrintDialog}
          title={t("modals.printOrSave.title")}
        >
          <Text>{t("modals.printOrSave.message")}</Text>
        </Dialog>
      )}
    </>
  );
};

export { PatientsMenu };

export default PatientsMenu;
