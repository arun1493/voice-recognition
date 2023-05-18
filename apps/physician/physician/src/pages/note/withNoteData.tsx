import store from "store2";
import _isEmpty from "lodash/isEmpty";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { FunctionComponent, useEffect } from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import { ClientEmitEventTypes, CompositionOrNote, NoteLockStatus } from "@suki-web/suki-business";

import {
  COMPOSITION_REQUEST_TYPE,
  EmrDestination,
  LOCAL_STORE,
  QUERY_NAMES,
  STATE_ITEM_LOADING_STATUS,
  TOAST_TYPES
} from "../../constants";
import {
  noteActions,
  selectActiveSectionId,
  selectCardsByType,
  selectCardsVisibility,
  selectCompositionOrNoteType,
  selectCompositionStatus,
  selectCurrentComposition,
  selectIsReadOnly,
  selectLoadingStatus as selectNoteLoadingStatus,
  selectUnderScoreOccurances
} from "../../redux/note";
import { useSocket } from "../../socket";
import { NoteSection } from "../../types";
import { toastsActions } from "../../redux/toast";
import { modalsActions } from "../../redux/modals";
import { getAllScripts, selectAllScripts } from "../../redux/scripts";
import { getCompositionOrNote, getEdgCodes, getNoteLockStatus, logger } from "../../api";
import { getAllUnderScoreOccuranceIndexes, getProblemSectionsIdNameMap } from "./helpers";
import { getProblemSectionsWithICDCodes, isEpicEMR, isNoteReadOnly, saveEDGMappingCodes } from "../../helpers";
import { compositionReader, diagnosisReader, metadataReader, patientReader, sectionReader } from "../../readers";

function withNoteData(WrappedComponent: FunctionComponent<any>): FunctionComponent {
  return (props) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const { transmitEvent } = useSocket();
    const { noteId = "" } = useParams<{ noteId: string }>();

    const emrType = store.get(LOCAL_STORE.EMR_TYPE);
    const organizationId = store.get(LOCAL_STORE.ORGANIZATION_ID);

    const activeSectionId = useSelector(selectActiveSectionId);
    const allUnderScoreOccurances = useSelector(selectUnderScoreOccurances);
    const cardsByType = useSelector(selectCardsByType);
    const composition = useSelector(selectCurrentComposition);
    const compositionOrNoteType = useSelector(selectCompositionOrNoteType);
    const compositionStatus = useSelector(selectCompositionStatus);
    const isCardsVisible = useSelector(selectCardsVisibility);
    const noteLoadingStatus = useSelector(selectNoteLoadingStatus);

    const isReadOnlyNote = useSelector(selectIsReadOnly);
    const scripts = useSelector(selectAllScripts);

    const metadata = compositionReader.metadata(composition);
    const compositionId = compositionReader.compositionId(composition);

    const noteTypeId = metadataReader.noteTypeId(metadata);
    const patient = metadataReader.patient(metadata);

    const patientId = patientReader.id(patient);
    const noteStatus = metadataReader.status(metadata);

    const isNoteLoaded = noteLoadingStatus === STATE_ITEM_LOADING_STATUS.LOADED;

    const isEmr = store.get(LOCAL_STORE.IS_EMR_USER);
    const emrDestinations = metadataReader.emrDestinations(metadata);
    const isSukiDestination = emrDestinations?.includes(EmrDestination.SUKI_ONLY);
    const isAddPatientEnabled = !isEmr || (isEmr && isSukiDestination);
    /**
     * https://sukiai.atlassian.net/browse/DIGI-1658
     * Restrict All EMR users to change DOS for now
     */
    const isDOSEditable = !isEmr;

    useQuery([QUERY_NAMES.PATIENT_NOTE], () => getCompositionOrNote(noteId), {
      enabled: !!noteId,
      staleTime: 0,
      onError: (error) => {
        logger.error({ message: "Failed to load Note: ", payload: error });
        dispatch(noteActions.setCompositionOrNoteType(CompositionOrNote.COMPOSITION));
        dispatch(noteActions.setLoadingStatus(STATE_ITEM_LOADING_STATUS.ERROR));
      },
      onSuccess: (response) => {
        const { type, data } = response;
        batch(() => {
          if (type === CompositionOrNote.NOTE) {
            dispatch(noteActions.setComposition(data));
          }
          dispatch(noteActions.setCompositionOrNoteType(type));
          dispatch(noteActions.setLoadingStatus(STATE_ITEM_LOADING_STATUS.LOADED));
        });
      }
    });

    const { data: noteLockStatus } = useQuery([QUERY_NAMES.NOTE_LOCK, noteId], () => getNoteLockStatus(noteId), {
      enabled: !!noteId,
      staleTime: 0
    });

    useEffect(() => {
      dispatch(getAllScripts());

      return () => {
        dispatch(modalsActions.hideAddToScheduleOrList());
        dispatch(noteActions.clearNoteState());
      };
    }, []);

    // If the note is locked through ops for editing throw an alert message
    useEffect(() => {
      if (!_isEmpty(noteLockStatus)) {
        const isProcessing = noteLockStatus.status === NoteLockStatus.NOTE_IS_BEING_EDITED;
        if (isProcessing) {
          dispatch(toastsActions.add({ message: t("pages.note.processingNote"), type: TOAST_TYPES.INFO }));
        }
      }
    }, [noteLockStatus]);

    // Fetch composition data through socket
    useEffect(() => {
      if (compositionOrNoteType === CompositionOrNote.COMPOSITION) {
        dispatch(noteActions.setLoadingStatus(STATE_ITEM_LOADING_STATUS.LOADING));
        transmitEvent({
          type: ClientEmitEventTypes.GET_COMPOSITION_OR_NOTE_REQUEST,
          data: { noteId: noteId, orgId: organizationId, requestType: COMPOSITION_REQUEST_TYPE.COMPOSITION }
        });
      }
    }, [compositionOrNoteType, noteId, organizationId]);

    // Set readonly status of the note
    useEffect(() => {
      if (
        compositionOrNoteType === CompositionOrNote.NOTE ||
        noteLockStatus?.status === NoteLockStatus.NOTE_IS_BEING_EDITED ||
        isNoteReadOnly(noteStatus)
      ) {
        dispatch(noteActions.setIsReadOnly(true));
      } else {
        dispatch(noteActions.setIsReadOnly(false));
      }
    }, [compositionOrNoteType, noteLockStatus, noteStatus]);

    // Set speech config once the note is loaded
    useEffect(() => {
      if (!isNoteLoaded) {
        return;
      }

      transmitEvent({
        type: ClientEmitEventTypes.SPEECH_CONFIG,
        data: {
          compositionId,
          noteTypeId,
          patientId,
          problemBasedSections: getProblemSectionsIdNameMap(composition),
          readOnly: isReadOnlyNote,
          sectionId: activeSectionId
        }
      });
    }, [isNoteLoaded, composition, isReadOnlyNote]);

    // Add Underscore occurances when note is loaded
    useEffect(() => {
      if (!isNoteLoaded) {
        return;
      }

      const sections = compositionReader.sections(composition);
      batch(() => {
        sections?.forEach((sectionData: NoteSection) => {
          const sectionId = sectionReader.sectionId(sectionData);
          const plainText = sectionReader.plainText(sectionData);
          const underScoreOccurances = getAllUnderScoreOccuranceIndexes(plainText);
          sectionId && dispatch(noteActions.updateUnderScoreOccurance({ sectionId, underScoreOccurances }));
        });
      });
    }, [isNoteLoaded, composition]);

    // EDG mapping codes for EPIC emr users
    useEffect(() => {
      if (!isNoteLoaded) {
        return;
      }

      const isEpic = isEpicEMR(emrType);
      if (isEpic) {
        const problemSectionsWithICDCodes = getProblemSectionsWithICDCodes(composition);
        problemSectionsWithICDCodes.forEach((section) => {
          const diagnosis = sectionReader.diagnosis(section);
          const icdCode = diagnosisReader.icdCode(diagnosis);
          getEdgCodes(icdCode)
            .then((edgData) => saveEDGMappingCodes(dispatch, icdCode, edgData))
            .catch((error) => logger.error({ message: "Failed to fetch EDG codes", payload: error }));
        });
      }
    }, [isNoteLoaded, composition]);

    return (
      <WrappedComponent
        {...props}
        activeSectionId={activeSectionId}
        allUnderScoreOccurances={allUnderScoreOccurances}
        cardsByType={cardsByType}
        composition={composition}
        compositionStatus={compositionStatus}
        isAddPatientEnabled={isAddPatientEnabled}
        isCardsVisible={isCardsVisible}
        isDOSEditable={isDOSEditable}
        isReadOnlyNote={isReadOnlyNote}
        loading={!isNoteLoaded}
        noteId={noteId}
        scripts={scripts}
      />
    );
  };
}

export { withNoteData };
