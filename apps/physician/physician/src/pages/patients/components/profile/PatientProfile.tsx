import i18n from "i18next";
import store from "store2";
import _map from "lodash/map";
import _get from "lodash/get";
import _filter from "lodash/filter";
import _isEmpty from "lodash/isEmpty";
import _throttle from "lodash/throttle";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { Icon, NavigationIcon, NoteStatus, PatientModes, Text, lightTheme as theme } from "@suki-web/suki-ui";

import {
  getRoute,
  handleNavigateBackFromPatientProfile,
  isEpicEMR,
  isNoteCompleted,
  isNoteCreatedByUserOrSigned
} from "../../../../helpers";
import {
  StyledBackIcon,
  StyledCenterContent,
  StyledDateLabel,
  StyledEmptyContainer,
  StyledEmptyPlaceHolder,
  StyledExtraItemInfo,
  StyledGradient,
  StyledListItem,
  StyledPatientProfileContainer,
  StyledProfileList,
  StyledText,
  StyledTime
} from "./patientProfile.styled";
import { selectEmrType } from "../../../../redux/emr";
import { useNavigatorOnline } from "../../../../hooks";
import { toastsActions } from "../../../../redux/toast";
import { tooltipActions } from "../../../../redux/tooltip";
import { withChartData } from "../../../../hocs/withChartData";
import { noteTypesActions } from "../../../../redux/noteTypes";
import { Note, NoteOrComposition, Patient } from "../../../../types";
import { compositionReader, metadataReader, noteReader } from "../../../../readers";
import { getPatientNotes, getPatientProfile, refreshEpicNotes } from "../../../../api";
import { noteActions, selectCardsByType, selectCardsVisibility } from "../../../../redux/note";
import { NoteCell, ProfileMinimal, ShowCardButton, StatusCell } from "../../../../components/molecules";
import { getDateToBeDisplayed, getNoteCreationDate, getNoteServiceDate, isRecentNote } from "../../helpers";
import { EmrDestination, LOCAL_STORE, Pages, QUERY_NAMES, SCROLL_TOP, TOAST_TYPES } from "../../../../constants";

const MIN_SCROLL_HEIGHT = 883;
const MAX_APPOINTMENTS_TO_REFRESH = 2;

const PatientProfileComponent: FunctionComponent = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();
  const { patientId = "" } = useParams<{ patientId: string }>();
  const [isMinimized, setIsMinimized] = useState(false);
  const cardsByType = useSelector(selectCardsByType);
  const isCardsVisible = useSelector(selectCardsVisibility);
  const emrType = useSelector(selectEmrType) || store.get(LOCAL_STORE.EMR_TYPE);

  const [hasScrollBar, setHasScrollBar] = useState(false);

  const { isOffline } = useNavigatorOnline();

  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(tooltipActions.setIsWithDelay(true));

    return () => {
      dispatch(noteTypesActions.setIsFromPatientList(false));
    };
  }, []);

  const onMouseLeave = () => {
    dispatch(tooltipActions.setIsWithDelay(true));
  };

  const onNoteClick = (noteId: string) => {
    if (isOffline) {
      dispatch(toastsActions.add({ message: t("errors.s2.openNote"), type: TOAST_TYPES.ERROR }));
      return;
    }
    const noteRoute = getRoute(Pages.Note, { noteId });
    if (noteRoute) {
      navigate(noteRoute);
    }
  };

  const {
    data: profile,
    isLoading: isProfileLoading,
    isRefetching: isProfileRefetching,
    refetch: refetchProfile
  } = useQuery<Patient>([QUERY_NAMES.PATIENT_PROFILE], () => getPatientProfile(patientId), {
    enabled: !!patientId
  });

  const {
    data: notes,
    isLoading: isNotesLoading,
    isRefetching: isNotesRefetching,
    refetch: refetchNotes,
    remove: removeNotesFromCache
  } = useQuery<NoteOrComposition[]>([`${QUERY_NAMES.PATIENT_NOTES}-${patientId}`], () => getPatientNotes(patientId), {
    enabled: !!patientId
  });

  const isLoading = isProfileLoading || isNotesLoading || isProfileRefetching || isNotesRefetching;
  const filteredNotes = _filter(notes, isNoteCreatedByUserOrSigned);

  useEffect(() => {
    dispatch(noteTypesActions.setPatientId(patientId));
    refetchProfile();

    if (!isEpicEMR(emrType)) {
      refetchNotes();
      return;
    }

    const payload = {
      sukiUserId: store.get(LOCAL_STORE.USER_ID),
      sukiPatientId: patientId,
      maxAppointments: MAX_APPOINTMENTS_TO_REFRESH
    };
    removeNotesFromCache();
    refreshEpicNotes(payload).finally(() => {
      refetchNotes();
    });

    return () => {
      dispatch(noteTypesActions.setPatientId(null));
    };
  }, [patientId]);

  useEffect(() => {
    const listHeight = _get(listRef, "current.clientHeight", 0);
    const containerHeight = _get(containerRef, "current.clientHeight", 0);
    setHasScrollBar(containerHeight < listHeight);
  }, [containerRef, isLoading, listRef]);

  // TODO implement Start progress note handler
  /* const onStartProgressBtnClick = () => {
    console.log("Clicked - Start progress note");
  }; */

  const handleGoBack = () => {
    handleNavigateBackFromPatientProfile(location, navigate);
  };

  const renderEmptyState = () => (
    <StyledEmptyContainer>
      <Text size="lg">{t("components.patientProfile.emptyStateText1")}</Text>
      <Text size="lg">
        {t("components.patientProfile.emptyStateText2")}
        <Icon color={theme.components.patientProfile.color} icon="newNote" size="xs" />
        {t("components.patientProfile.emptyStateText3")}
      </Text>
    </StyledEmptyContainer>
  );

  const getCompositionId = (noteOrComposition: NoteOrComposition, isNote: boolean, isImportedFromEmr: boolean) => {
    if (isImportedFromEmr) {
      return compositionReader.noteId(noteOrComposition);
    }

    return isNote
      ? noteReader.compositionId(noteOrComposition as Note)
      : compositionReader.compositionId(noteOrComposition);
  };

  const renderNotesList = (noteOrComposition: NoteOrComposition) => {
    const metadata = compositionReader.metadata(noteOrComposition);
    const status = metadataReader.status(metadata);
    const submissionStatus = metadataReader.submissionStatus(metadata);
    const user = metadataReader.user(metadata);

    const isPartialDictation = metadataReader.partialDictationComposition(metadata);
    const isPartialDictationReadOnly = metadataReader.partialDictationReadOnly(metadata);

    const isImportedFromEmr = status === NoteStatus.IMPORTED_FROM_EMR;

    const name = isImportedFromEmr ? i18n.t("pages.patients.profile.emrNoteName") : metadataReader.name(metadata);
    const isNote = isNoteCompleted(status);
    const compositionId = getCompositionId(noteOrComposition, isNote, isImportedFromEmr);

    const dateOfService = getNoteServiceDate(noteOrComposition);
    const creationDate = getNoteCreationDate(noteOrComposition);
    const dateToDisplay = getDateToBeDisplayed(dateOfService || creationDate);

    const isChart =
      submissionStatus?.finalDestination === EmrDestination.DOCUMENT && status === NoteStatus.SUBMITTED_TO_EMR;

    return (
      <StyledListItem key={compositionId} onClick={() => onNoteClick(compositionId as string)}>
        <NoteCell name={name} user={user} />
        <StyledExtraItemInfo>
          <StyledTime>
            {!dateOfService && creationDate && (
              <StyledDateLabel>
                <Text color="darkGray" cursor="pointer" data-cy="unfinished-notes-time-label" size="xs">
                  {t("pages.unfinishedNotes.createdLabel")}
                </Text>
              </StyledDateLabel>
            )}
            <Text cursor="pointer" data-cy="patient-notes-time" size="sm">
              {dateToDisplay}
            </Text>
          </StyledTime>
          <StatusCell
            isChart={isChart}
            isPartialDictation={isPartialDictation}
            isPartialDictationReadOnly={isPartialDictationReadOnly}
            status={status}
            type={PatientModes.PATIENTS_PROFILE}
          />
        </StyledExtraItemInfo>
      </StyledListItem>
    );
  };

  const currentNotes: NoteOrComposition[] = [];
  const priorNotes: NoteOrComposition[] = [];

  if (Array.isArray(filteredNotes)) {
    filteredNotes.forEach((note: NoteOrComposition) => {
      isRecentNote(note) ? currentNotes.push(note) : priorNotes.push(note);
    });
  }

  const isEmptyState = _isEmpty(currentNotes) && _isEmpty(priorNotes);

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target: HTMLDivElement = e.target as HTMLDivElement;
    const { scrollHeight, scrollTop } = target;
    setIsMinimized(scrollTop > SCROLL_TOP && scrollHeight > MIN_SCROLL_HEIGHT);
  };

  const toggleCardVisibility = () => dispatch(noteActions.toggleCardsVisibility());

  const renderShowCardButton = () => {
    if (_isEmpty(cardsByType)) {
      return null;
    }

    return <ShowCardButton isCardsVisible={isCardsVisible} onClick={toggleCardVisibility} readOnly={false} />;
  };

  const throttledOnScroll = _throttle(onScroll, 800, { leading: false });

  return (
    <StyledPatientProfileContainer data-cy="patient-profile-container" isMinimized={isMinimized}>
      <StyledBackIcon>
        <NavigationIcon data-cy="patient-profile-back-icon" icon="back" onClick={handleGoBack} size="2xs" />
      </StyledBackIcon>
      {isLoading && (
        <StyledCenterContent>
          <Icon icon="loader" size="xl" />
        </StyledCenterContent>
      )}
      {!isLoading && <ProfileMinimal isMinimized={isMinimized} profile={profile} />}
      {/* TODO [Ana]: startProgress button will be implemented later */}
      {/*!isLoading && !currentNotes.length && (
        <StyledButton data-cy="patient-profile-start-progress-btn" onClick={onStartProgressBtnClick}>
          <Text size="xl" cursor="pointer">
            {t("pages.patients.profile.startProgress")}
          </Text>
        </StyledButton>
      ) */}
      {!isLoading && !isEmptyState && (
        <StyledProfileList
          hasScrollBar={hasScrollBar}
          onMouseLeave={onMouseLeave}
          onScroll={throttledOnScroll}
          ref={containerRef}
        >
          <div ref={listRef}>
            {!_isEmpty(currentNotes) && [
              <StyledText data-cy="patient-profile-todays-notes" isBold={true} key="currentNotes" size="sm">
                {t("pages.patients.profile.currentNotes")}
              </StyledText>,
              _map(currentNotes, renderNotesList)
            ]}
            {!_isEmpty(priorNotes) && [
              <StyledText data-cy="patient-profile-prior-notes" isBold={true} key="priorNotes" size="sm">
                {t("pages.patients.profile.priorNotes")}
              </StyledText>,
              _map(priorNotes, renderNotesList)
            ]}
            <StyledEmptyPlaceHolder />
          </div>
        </StyledProfileList>
      )}
      {!isLoading && isEmptyState && renderEmptyState()}
      <StyledGradient />
      {renderShowCardButton()}
    </StyledPatientProfileContainer>
  );
};

const PatientProfile = withChartData(PatientProfileComponent);

export { NoteOrComposition, PatientProfile };

export default PatientProfile;
