import i18n from "i18next";
import store from "store2";
import _get from "lodash/get";
import { batch } from "react-redux";
import { NoteStatus } from "@suki-web/suki-ui";
import { ClientEmitEventTypes, Process } from "@suki-web/suki-business";

import {
  Emr,
  EmrDestination,
  LOCAL_STORE,
  QUERY_NAMES,
  ServerResponse,
  SUBMISSION_WARNING,
  SubmissionModals,
  TOAST_TYPES,
  USER_REQUEST_TYPE
} from "../../../constants";
import { queryClient } from "../../../app";
import { noteActions } from "../../../redux/note";
import { toastsActions } from "../../../redux/toast";
import { modalsActions } from "../../../redux/modals";
import { SocketEventHandlerAdditionalProps } from "../../../socket";
import { handleNavigateBackFromNote as navigateAfterSubmission } from "../../../helpers";
import { appointmentReader, compositionReader, metadataReader, patientReader } from "../../../readers";

interface CompositionSubmitionResponse {
  submitCompositionResponse: any;
  submitCompositionResponseType: any;
  submitCompositionResponseErrorMessage: any;
}

const isFailureServerResponse = (next: any, params: any) => {
  const { dispatch, submitCompositionResponseErrorMessage, submitCompositionResponseType } = params;

  if (submitCompositionResponseErrorMessage) {
    const message = submitCompositionResponseErrorMessage;
    const title = message.includes("EMR") ? "" : i18n.t("modals.signNoteModal.saveNote.errorSubmit.text1");

    batch(() => {
      dispatch(modalsActions.hideSignNoteModal());
      dispatch(toastsActions.add({ message, title, type: TOAST_TYPES.ERROR }));
    });
    return;
  }

  if (submitCompositionResponseType !== ServerResponse.SUCCESS) {
    const message = i18n.t("modals.signNoteModal.saveNote.errorSubmit.text2");
    batch(() => {
      dispatch(modalsActions.hideSignNoteModal());
      dispatch(toastsActions.add({ message, type: TOAST_TYPES.ERROR }));
    });
    return;
  }

  return next(params);
};

const isSubmissionWarning = (next: any, params: any) => {
  const { dispatch, submissionInformation, submissionStatus } = params;

  const submissionStatusWarning = _get(submissionStatus, "warning.message");
  const submissionWarningType = _get(submissionStatus, "warning.type");

  if (submissionStatusWarning) {
    dispatch(noteActions.setCompositionStatus({ noteSubmissionSuccess: false }));

    const [primaryDestination, secondaryDestination] = _get(submissionInformation, "destinations", []);

    const hasDontShowNoOpenEncounterAgain = store.get(LOCAL_STORE.HAS_DONT_SHOW_NO_OPEN_ENCOUNTER_AGAIN);

    switch (submissionWarningType) {
      // No encounter is open in EMR for this appointment
      case SUBMISSION_WARNING.NO_ENCOUNTER:
      case SUBMISSION_WARNING.ENCOUNTER_NOT_OPEN:
        if (
          _get(submissionInformation, "emrType") === Emr.ATHENA &&
          _get(params, "submitCompositionResponse.metadata.status") === NoteStatus.USER_IS_DONE
        ) {
          if (hasDontShowNoOpenEncounterAgain === true.toString()) {
            return next(params);
          } else {
            dispatch(modalsActions.showSignNoteModal({ type: SubmissionModals.NOTE_TO_ENHANCED_REVIEW }));
            break;
          }
        }

        if (primaryDestination !== EmrDestination.DOCUMENT && secondaryDestination === EmrDestination.DOCUMENT) {
          // secondary destination is document and primary destination is not a document
          // set tryAllDestination to be true and open PDF Submit dialog
          dispatch(modalsActions.showSignNoteModal({ type: SubmissionModals.NO_ENCOUNTER_EMRCHART }));
        } else {
          dispatch(modalsActions.showSignNoteModal({ type: SubmissionModals.NO_ENCOUNTER }));
        }
        break;
      // Patient is not found in EMR
      case SUBMISSION_WARNING.UNKNOWN_PATIENT:
        dispatch(modalsActions.showSignNoteModal({ type: SubmissionModals.NO_ENCOUNTER }));
        break;
      // No lab results found in EMR
      case SUBMISSION_WARNING.NO_LAB_RESULTS:
        dispatch(modalsActions.showSignNoteModal({ type: SubmissionModals.NO_ENCOUNTER }));
        break;
      // No valid OB episode found in EMR
      case SUBMISSION_WARNING.NO_VALID_OB_EPISODE:
        dispatch(modalsActions.showSignNoteModal({ type: SubmissionModals.NO_ENCOUNTER }));
        break;
    }
    return;
  }

  return next(params);
};

const isSubmissionSuccess = (next: any, params: any) => {
  const {
    dispatch,
    getReduxStoreState,
    location,
    navigate,
    submissionInformation,
    submitCompositionResponse,
    transmitEvent
  } = params;

  const { modals } = getReduxStoreState();

  let message = modals.signNote.successTipMessage;
  const isEnhancedReview = modals.signNote.isEnhancedReview;
  const submissionStatus = submitCompositionResponse?.submissionStatus;

  if (!isEnhancedReview && (submissionInformation?.emrType === Emr.UNKNOWN || !submissionInformation?.emrType)) {
    message = i18n.t("modals.signNoteModal.saveNote.tipNoEmr");
  }
  if (submissionStatus?.finalDestination === EmrDestination.DOCUMENT) {
    message = i18n.t("modals.signNoteModal.saveNote.sentToEMRChartTip");
  }

  const metadata = compositionReader.metadata(submitCompositionResponse);
  const appointment = metadataReader.appointment(metadata);
  const patient = metadataReader.patient(metadata);

  const noteId = metadataReader.noteId(metadata);
  const noteTypeId = metadataReader.noteTypeId(metadata);

  const patientId = patientReader.id(patient);
  const appointmentId = appointmentReader.id(appointment);

  transmitEvent({
    type: ClientEmitEventTypes.USER_REQUEST,
    data: {
      appointmentId,
      compositionId: noteId,
      noteTypeId,
      patientId,
      requestType: USER_REQUEST_TYPE.COMPOSITION_SUBMISSION_SUCCESSFUL
    }
  });

  batch(() => {
    dispatch(toastsActions.add({ message, type: TOAST_TYPES.CONFIRMATION }));
    dispatch(noteActions.setCompositionStatus({ noteSubmissionSuccess: true }));
    dispatch(modalsActions.hideSignNoteModal());
  });

  queryClient.invalidateQueries([QUERY_NAMES.UNFINISHED_NOTES]);
  navigateAfterSubmission(location, navigate, patient);
};

const HANDLING_SUBMISSION_RESPONSE_PROCESS = new Process()
  .addHandler(isFailureServerResponse)
  .addHandler(isSubmissionWarning)
  .addHandler(isSubmissionSuccess);

function handleNoteSubmissionResponse(
  payload: CompositionSubmitionResponse,
  { dispatch, getReduxStoreState, location, navigate, transmitEvent }: SocketEventHandlerAdditionalProps
): void {
  const { submitCompositionResponse, submitCompositionResponseType, submitCompositionResponseErrorMessage } = payload;
  const submissionStatus = submitCompositionResponse?.submissionStatus;
  const submissionInformation = submitCompositionResponse?.metadata?.submissionInformation;

  HANDLING_SUBMISSION_RESPONSE_PROCESS.run({
    dispatch,
    getReduxStoreState,
    location,
    navigate,
    submissionInformation,
    submissionStatus,
    submitCompositionResponse,
    submitCompositionResponseErrorMessage,
    submitCompositionResponseType,
    transmitEvent
  });
}

export { handleNoteSubmissionResponse };
