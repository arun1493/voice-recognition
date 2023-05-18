import store from "store2";
import _noop from "lodash/noop";
import _isEmpty from "lodash/isEmpty";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { Icon, NoteStatus, ScreenSize, Text, useBreakpoint } from "@suki-web/suki-ui";
import { ClientEmitEventTypes, EMPTY_ARRAY, EMPTY_OBJECT } from "@suki-web/suki-business";

import {
  completeOobeTask,
  getProblemSections,
  isEpicOrCernerEMR,
  shouldShowEmrIntegrationToolbar
} from "../../helpers";
import {
  StyledCenterContent,
  StyledGradient,
  StyledNote,
  StyledNoteHeading,
  StyledNoteSubmissionButton,
  StyledNoteWrapper,
  StyledReadOnlyIcon,
  StyledReadOnlyTip,
  StyledReadOnlyTipContainer,
  StyledScrollableContainer
} from "./note.styled";
import {
  EMPTY_STRING,
  EmrConnectionStatus,
  LOCAL_STORE,
  NoteActionType,
  OOBE_TASKS_NON_INTEGRATED,
  SCROLL_TOP,
  SubmissionModals,
  TIME_TO_REFRESH_VITALS,
  USER_REQUEST_TYPE
} from "../../constants";
import { logger } from "../../api";
import { EVENTS } from "./constants";
import { useSocket } from "../../socket";
import { withNoteData } from "./withNoteData";
import { agentActions } from "../../redux/agent";
import { selectEmrState } from "../../redux/emr";
import { ACTION_HANDLERS } from "./actionHandlers";
import { modalsActions } from "../../redux/modals";
import { withChartData } from "../../hocs/withChartData";
import { withActionHandlers } from "./withActionHandlers";
import { Cards, ShowCardButton } from "../../components/molecules";
import { ControlMenu, PatientInformation, Sections } from "./components";
import { selectIsOobeCompleted, selectOobeState } from "../../redux/oobe";
import { noteActions, selectIsPatientsListVisible } from "../../redux/note";
import { appointmentReader, compositionReader, metadataReader, oobeReader } from "../../readers";
import { AllUnderScoreOccurances, CardsByType, Composition, NoteOnAction, Script } from "../../types";

interface NoteProps {
  activeSectionId: string;
  allUnderScoreOccurances: AllUnderScoreOccurances;
  cardsByType: CardsByType;
  composition: Composition;
  error: boolean;
  isAddPatientEnabled: boolean;
  isCardsVisible: boolean;
  isDOSEditable: boolean;
  isReadOnlyNote: boolean;
  loading: boolean;
  onAction: NoteOnAction;
  scripts: Script[];
}

const NoteWithoutActionHandlersAndData: FunctionComponent<NoteProps> = ({
  activeSectionId = "",
  allUnderScoreOccurances,
  cardsByType = EMPTY_OBJECT,
  composition = EMPTY_OBJECT,
  error,
  isAddPatientEnabled,
  isCardsVisible = false,
  isDOSEditable,
  isReadOnlyNote = true,
  loading,
  onAction = _noop,
  scripts
}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const noteRef = useRef<HTMLDivElement>(null);
  const [isMinimized, setIsMinimized] = useState(false);
  const { registerEvents, transmitEvent, unRegisterEvents } = useSocket();
  const vitalsTimerRef: null | ReturnType<typeof setInterval> | any = useRef(null);

  const { XXS, XS, LG, XL, MD } = ScreenSize;
  const breakpoint = useBreakpoint();
  const isLargeScreen = [MD, LG, XL].includes(breakpoint);
  const textSize = isLargeScreen ? "xl" : "lg";
  const isXSmallScreen = [XXS, XS].includes(breakpoint);
  const submitButtonSize = isXSmallScreen ? "xs" : "md";

  const emrState = useSelector(selectEmrState);
  const compositionId = compositionReader.compositionId(composition);
  const metadata = compositionReader.metadata(composition);
  const noteStatus = metadataReader.status(metadata);
  const isImportedFromEmr = noteStatus === NoteStatus.IMPORTED_FROM_EMR;

  const problemSections = getProblemSections(composition);
  const sections = compositionReader.sections(composition) || EMPTY_ARRAY;
  const isPartialDictationComposition = metadataReader.partialDictationComposition(metadata);
  const isPartialDictationReadOnly = metadataReader.partialDictationReadOnly(metadata);
  const isShownEmrToolbar = shouldShowEmrIntegrationToolbar(emrState);

  const name = metadataReader.name(metadata);
  const noteTypeId = metadataReader.noteTypeId(metadata);
  const patient = metadataReader.patient(metadata);
  const appointment = metadataReader.appointment(metadata);
  const appointmentId = appointmentReader.id(appointment);

  const isEmrUser = store.get(LOCAL_STORE.IS_EMR_USER);
  const emrType = metadataReader.emrType(metadata);
  const isReadOnly = isReadOnlyNote || isPartialDictationComposition;
  // Flag to track if note has problem section while submitting through dictation
  store.set(LOCAL_STORE.HAS_PROBLEM_SECTION, !!problemSections?.length);

  const { USER_ID } = LOCAL_STORE;
  const userId = store.get(USER_ID);
  const oobeData = useSelector(selectOobeState);
  const tasksStatus = oobeReader.oobeTasksStatus(oobeData);
  const tasksCompleted = oobeReader.tasksCompleted(oobeData);
  const tasksToBeCompleted = oobeReader.tasksToBeCompleted(oobeData);
  const isOobeCompleted = useSelector(selectIsOobeCompleted);
  const isPatientListVisible = useSelector(selectIsPatientsListVisible);

  useEffect(() => {
    const handleTabClosure = () => {
      logger.info({ message: "Saved to unfinished note", payload: { isReadOnlyNote, compositionId } });
      onAction({
        type: NoteActionType.SAVE_TO_UNFINISHED_NOTES
      });
      transmitEvent({ type: ClientEmitEventTypes.DISCONNECT });
    };

    window.addEventListener("beforeunload", handleTabClosure);

    return () => {
      window.removeEventListener("beforeunload", handleTabClosure);
    };
  }, []);

  useEffect(() => {
    dispatch(agentActions.setBottom());
    registerEvents(EVENTS);

    !isOobeCompleted &&
      completeOobeTask({
        userId,
        taskType: OOBE_TASKS_NON_INTEGRATED.CREATE_A_NOTE,
        tasksStatus,
        tasksCompleted,
        tasksToBeCompleted,
        dispatch
      });

    return () => {
      onAction({
        type: NoteActionType.SAVE_TO_UNFINISHED_NOTES
      });
      dispatch(noteActions.setCompositionId(EMPTY_STRING));
      dispatch(noteActions.setIsNewNote(false));
      unRegisterEvents(EVENTS);
    };
  }, []);

  useEffect(() => {
    if (!loading) {
      setImmediate(() => {
        noteRef.current?.scrollTo({ top: 0 });

        if (noteRef.current) {
          // to avoid visual scrolling to the top
          noteRef.current.style.opacity = "1";
        }
      });
    }
  }, [loading]);

  useEffect(() => {
    isEmrUser && refreshVitals();
    return () => clearTimeout(vitalsTimerRef.current);
  }, []);

  useEffect(() => {
    if (isCardsVisible && isXSmallScreen && activeSectionId) {
      toggleCardVisibility();
    }
  }, [activeSectionId, isCardsVisible, isXSmallScreen]);

  const refreshVitals = () => {
    vitalsTimerRef.current = setInterval(() => {
      transmitEvent({
        type: ClientEmitEventTypes.USER_REQUEST,
        data: {
          compositionId: compositionId,
          noteTypeId: noteTypeId,
          patientId: patient?.id || EMPTY_STRING,
          appointmentId: appointmentId || EMPTY_STRING,
          requestType: USER_REQUEST_TYPE.CLICK_REFRESH_VITALS_ON_SCREEN
        }
      });
    }, TIME_TO_REFRESH_VITALS);
  };

  const isNotConnectedToEmr = () => {
    const { connectionStatus } = emrState;
    return connectionStatus !== EmrConnectionStatus.CONNECTED;
  };

  const handleOnSubmit = () => {
    onAction({
      payload: { forceBlur: true },
      type: NoteActionType.SECTION_BLUR
    });

    if (isEmrUser && isEpicOrCernerEMR(emrType) && isNotConnectedToEmr()) {
      dispatch(modalsActions.showSignNoteModal({ type: SubmissionModals.UNABLE_TO_REACH_EMR }));
    } else if (problemSections.length) {
      dispatch(modalsActions.showSignNoteModal({ type: SubmissionModals.CONFIRM_CODES }));
    } else {
      dispatch(modalsActions.showSignNoteModal({ type: SubmissionModals.INITIAL }));
    }
  };

  const toggleCardVisibility = () => {
    if (isXSmallScreen && !isCardsVisible) {
      dispatch(noteActions.setActiveSectionId(EMPTY_STRING));
    }
    dispatch(noteActions.toggleCardsVisibility());
  };

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (isPatientListVisible) {
      setIsMinimized((e.target as HTMLDivElement).scrollTop > SCROLL_TOP);
      dispatch(noteActions.setPatientsListVisibility(false));
    }
  };

  if (error) {
    return (
      <StyledNote isEmpty={true}>
        <ControlMenu />
        <StyledCenterContent />
      </StyledNote>
    );
  }

  if (loading) {
    return (
      <StyledNote isEmpty={true}>
        <ControlMenu />
        <StyledCenterContent>
          <Icon data-cy="loader-icon" icon="loader" size="lg" />
        </StyledCenterContent>
      </StyledNote>
    );
  }

  const renderReadOnlyTip = () => {
    if (!isReadOnlyNote && !isPartialDictationReadOnly) {
      return null;
    }

    return (
      <StyledReadOnlyTipContainer>
        <StyledReadOnlyTip>
          <StyledReadOnlyIcon>
            <Icon icon="check" size="3xs" />
          </StyledReadOnlyIcon>
          <Text color="green" isBold={true} size="xs">
            {isReadOnlyNote ? t("pages.note.readOnly") : t("pages.note.noEditableSections")}
          </Text>
        </StyledReadOnlyTip>
      </StyledReadOnlyTipContainer>
    );
  };

  const renderNoteHeading = () => {
    return (
      <StyledNoteHeading>
        <Text isBold={true} lineHeight="24px" size={textSize}>
          {name}
        </Text>
      </StyledNoteHeading>
    );
  };

  const renderShowCardButton = () => {
    if (_isEmpty(cardsByType)) {
      return null;
    }

    return <ShowCardButton isCardsVisible={isCardsVisible} onClick={toggleCardVisibility} readOnly={isReadOnlyNote} />;
  };

  const renderNoteContent = () => {
    return (
      <StyledNote isCardsVisible={isCardsVisible}>
        <ControlMenu isMinimized={isMinimized} onAction={onAction} />
        <StyledScrollableContainer data-cy="note-container-scrollable" onScroll={onScroll} ref={noteRef}>
          {renderReadOnlyTip()}
          {renderNoteHeading()}
          {renderShowCardButton()}
          <PatientInformation
            composition={composition}
            compositionId={compositionId}
            isAddPatientEnabled={isAddPatientEnabled}
            isDOSEditable={isDOSEditable}
            noteTypeId={noteTypeId}
            patient={patient}
            readOnly={isReadOnly}
          />
          <Sections
            activeSectionId={activeSectionId}
            allScripts={scripts}
            allUnderScoreOccurances={allUnderScoreOccurances}
            compositionId={compositionId}
            isImportedFromEmr={isImportedFromEmr}
            isPartialDictationComposition={isPartialDictationComposition}
            isReadOnlyNote={isReadOnlyNote}
            noteTypeId={noteTypeId}
            onAction={onAction}
            sections={sections}
          />
        </StyledScrollableContainer>
        <StyledGradient />
      </StyledNote>
    );
  };

  return (
    <StyledNoteWrapper isCardsVisible={isCardsVisible} isShownEmrToolbar={isShownEmrToolbar}>
      {renderNoteContent()}
      <Cards cardsByType={cardsByType} isCardsVisible={isCardsVisible} onBack={toggleCardVisibility} />
      {!isReadOnlyNote && !isPartialDictationReadOnly && (
        <StyledNoteSubmissionButton isCardsVisible={isCardsVisible} onClick={handleOnSubmit} size={submitButtonSize} />
      )}
    </StyledNoteWrapper>
  );
};

const Note = withNoteData(withChartData(withActionHandlers(ACTION_HANDLERS)(NoteWithoutActionHandlersAndData)));

export { Note };

export default Note;
