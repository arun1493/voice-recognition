import store from "store2";
import _includes from "lodash/includes";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { batch, useDispatch, useSelector } from "react-redux";
import { ClientEmitEventTypes } from "@suki-web/suki-business";
import { FunctionComponent, useEffect, useState } from "react";
import { Dialog, DialogButtonsProps, Icon, Text } from "@suki-web/suki-ui";

import {
  ConfirmICDCodes,
  InitialOrSubmitModal,
  MissingICDCodes,
  MultipleEncounters,
  SubmissionWarning,
  UnableToReachEmr
} from "./components";
import {
  appointmentReader,
  compositionReader,
  fhirTokenCacheReader,
  metadataReader,
  organizationReader,
  patientReader,
  userReader
} from "../../../readers";
import {
  getNoEncounterModalDetails,
  getRoute,
  isEnhancedReviewEnabled,
  isNoteHasDictation,
  isSecondaryEmr
} from "../../../helpers";
import {
  Actor,
  DESTINATIONS_TO_SEND_NOTE,
  EmrDestination,
  LOCAL_STORE,
  Pages,
  QUERY_NAMES,
  SecondaryEmr,
  SUBMISSION_WARNING,
  SubmissionModals,
  TOAST_TYPES,
  USER_REQUEST_TYPE
} from "../../../constants";
import { queryClient } from "../../../app";
import { useSocket } from "../../../socket";
import { toastsActions } from "../../../redux/toast";
import { selectEmrTokens } from "../../../redux/emr";
import { selectUserDetails } from "../../../redux/user";
import { getOrganizationState } from "../../../redux/organization";
import { getModalsState, modalsActions } from "../../../redux/modals";
import { noteActions, selectCurrentComposition } from "../../../redux/note";
import { handleNavigateBackFromNote as navigateAfterSubmission } from "../../../helpers";

const SignNoteModal: FunctionComponent = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();
  const { transmitEvent } = useSocket();

  const { signNote } = useSelector(getModalsState);

  const composition = useSelector(selectCurrentComposition);
  const metadata = compositionReader.metadata(composition);

  const isInitial = signNote.type === SubmissionModals.INITIAL;
  const [isSubmittingInProgress, setIsSubmittingInProgress] = useState<boolean>(false);
  const [isSendingToChartInProgress, setIsSendingToChartInProgress] = useState<boolean>(false);

  const isPatientSelected = Boolean(metadataReader.patient(metadata));
  const emrType = metadataReader.emrType(metadata);

  const isEmr = isSecondaryEmr(emrType);
  const emrDestinations = metadataReader.emrDestinations(metadata);
  const [primaryDestination, secondaryDestination] = emrDestinations;

  const isAthena = emrType === SecondaryEmr.ATHENA_EMR;
  const isEpic = emrType === SecondaryEmr.EPIC_EMR;
  const isElation = emrType === SecondaryEmr.ELATION_EMR;

  const hasDictation = isNoteHasDictation(composition);

  const user = useSelector(selectUserDetails);
  const userEnhancedReview = userReader.enhancedReview(user);
  const organization = useSelector(getOrganizationState);
  const orgEnhancedReview = organizationReader.enhancedReview(organization);

  // check primary destination - because did note submittet to secondary we know only after got response from ws
  const isSendNoteToEmrAvailable = _includes(DESTINATIONS_TO_SEND_NOTE, primaryDestination);

  const isNoteEligibleForEnhancedReview =
    isEnhancedReviewEnabled(orgEnhancedReview, userEnhancedReview) && isInitial && hasDictation;

  const emrTokens = useSelector(selectEmrTokens);

  const closeModal = () => {
    dispatch(modalsActions.hideSignNoteModal());
    setIsSubmittingInProgress(false);
    setIsSendingToChartInProgress(false);
  };

  const showSubmitSuccessFlow = () => {
    const patient = metadataReader.patient(metadata);
    const message = t("modals.signNoteModal.noteEnhancedReviewNoOpenEncounter.text1");

    batch(() => {
      dispatch(toastsActions.add({ message, type: TOAST_TYPES.CONFIRMATION }));
      dispatch(noteActions.setCompositionStatus({ noteSubmissionSuccess: true }));
      dispatch(modalsActions.hideSignNoteModal());
    });

    queryClient.invalidateQueries([QUERY_NAMES.UNFINISHED_NOTES]);
    navigateAfterSubmission(location, navigate, patient);
  };

  const showConfirmCodesModal = () => {
    dispatch(modalsActions.showSignNoteModal({ type: SubmissionModals.CONFIRM_CODES }));
  };

  const showMissingCodesModal = () => {
    dispatch(modalsActions.showSignNoteModal({ type: SubmissionModals.MISSING_CODES }));
  };

  const setInitialStep = () => {
    dispatch(modalsActions.showSignNoteModal({ type: SubmissionModals.INITIAL }));
  };

  const setSubmitStep = () => {
    dispatch(modalsActions.showSignNoteModal({ type: SubmissionModals.SUBMIT }));
  };

  const submitNote = () => {
    if (isSendNoteToEmrAvailable || signNote.type === SubmissionModals.SUBMIT) {
      submitCompositionRequest();
      setIsSubmittingInProgress(true);
      return;
    }

    if (isInitial) {
      setSubmitStep();
    }
  };

  const submitCompositionRequest = (isEnhancedReview = false, isEmrChart = false) => {
    const noteId = compositionReader.compositionId(composition);
    const organizationId = compositionReader.organizationId(composition);
    const emrAccessToken = fhirTokenCacheReader.fhirAccessToken(emrTokens);

    const [primaryDestination, secondaryDestination] = emrDestinations;
    const tryAllDestinations = !(
      primaryDestination !== EmrDestination.DOCUMENT && secondaryDestination === EmrDestination.DOCUMENT
    );

    if (!isEnhancedReview && !isEmrChart) {
      let title;
      if (isAthena || isEpic) {
        title =
          primaryDestination !== EmrDestination.DOCUMENT
            ? t("modals.signNoteModal.saveNote.oneEncounterTip")
            : t("modals.signNoteModal.saveNote.sendingToEMRChartTip");
      } else if (isEmr) {
        title = t("modals.signNoteModal.saveNote.oneEncounterWithAllowSigning");
      }
      title && dispatch(modalsActions.setSignNoteModalSuccessTipMessage(title));
    }

    transmitEvent({
      type: ClientEmitEventTypes.SUBMIT_COMPOSITION_REQUEST,
      data: {
        actor: Actor.USER,
        bypassQa: !isEnhancedReview,
        emrAccessToken,
        isSignedOff: false,
        noteId,
        organizationId,
        requestTime: new Date().toISOString(),
        tryAllDestinations: isEmrChart ? isEmrChart : tryAllDestinations
      }
    });
  };

  const saveToEnhancedReview = () => {
    submitCompositionRequest(true);
    // TODO: [Sai]: Correct this flow once the dictation inside note is completed.
    // Please refer to https://sukiai.atlassian.net/browse/MOBAPP-437 for more details
    let title = t("modals.signNoteModal.saveNote.tipEnhancedReview");

    if (isAthena || isElation) {
      title = t("modals.signNoteModal.saveNote.tipEnhancedReviewForEmr");
    }

    dispatch(modalsActions.setSignNoteModalSuccessTipMessage(title));
    dispatch(modalsActions.setSignNoteModalIsEnhancedReview(true));
  };

  const saveUnfinishedNote = () => {
    const compositionId = compositionReader.compositionId(composition);

    const appointment = metadataReader.appointment(metadata);
    const patient = metadataReader.patient(metadata);
    const noteTypeId = metadataReader.noteTypeId(metadata);

    const patientId = patientReader.id(patient);
    const appointmentId = appointmentReader.id(appointment);

    transmitEvent({
      type: ClientEmitEventTypes.USER_REQUEST,
      data: {
        appointmentId,
        compositionId,
        noteTypeId,
        patientId,
        requestType: USER_REQUEST_TYPE.SAVE_COMPOSITION_TO_UNFINISHED
      }
    });

    const message = t("modals.signNoteModal.saveNote.saveToUnfinishedNotesTip");
    batch(() => {
      dispatch(toastsActions.add({ message, type: TOAST_TYPES.CONFIRMATION }));
      closeModal();
    });

    if (patientId) {
      const patientProfileRoute = getRoute(Pages.PatientProfile, { patientId });
      patientProfileRoute && navigate(patientProfileRoute);
    } else {
      navigate(-1);
    }
  };

  const sendToEMR = () => {
    submitCompositionRequest();
    const title = t("modals.signNoteModal.saveNote.oneEncounterTip");
    dispatch(modalsActions.setSignNoteModalSuccessTipMessage(title));
  };

  const sendToEMRChart = () => {
    submitCompositionRequest(false, true);
    const title = t("modals.signNoteModal.saveNote.sendingToEMRChartTip");
    dispatch(modalsActions.setSignNoteModalSuccessTipMessage(title));
    setIsSendingToChartInProgress(true);
  };

  const setInitialStepAndIgnoreMissingICDCodes = () => {
    batch(() => {
      dispatch(modalsActions.setSignNoteIgnoreMissingICDCodes());
      setInitialStep();
    });
  };

  const noPatientButtonProps = {
    end: { onClick: saveUnfinishedNote, text: t("modals.signNoteModal.noPatient.saveButton") },
    start: { onClick: closeModal, text: t("modals.signNoteModal.noPatient.cancelButton") }
  };

  const encounterButtonProps: DialogButtonsProps = {
    end: { text: t("modals.signNoteModal.noEncounter.saveToUnfinishedButton"), onClick: saveUnfinishedNote },
    hasCloseBtn: true
  };

  if (signNote.type === SubmissionModals.NO_ENCOUNTER_EMRCHART) {
    encounterButtonProps.start = {
      text: isSendingToChartInProgress ? (
        <>
          <Icon icon="loader" size="md" />
          {t("modals.signNoteModal.noEncounterEmrChart.submitting")}
        </>
      ) : (
        t("modals.signNoteModal.noEncounterEmrChart.submitToChart")
      ),
      onClick: sendToEMRChart
    };
  }

  const noteEnhancedReviewNoOpenEncounterButtonProps: DialogButtonsProps = {
    hasCloseBtn: false,
    end: {
      text: t("modals.signNoteModal.noteEnhancedReviewNoOpenEncounter.button.ok"),
      onClick: showSubmitSuccessFlow
    },
    start: {
      text: t("modals.signNoteModal.noteEnhancedReviewNoOpenEncounter.button.dontShow"),
      onClick: () => {
        store.set(LOCAL_STORE.HAS_DONT_SHOW_NO_OPEN_ENCOUNTER_AGAIN, true.toString());
        showSubmitSuccessFlow();
      }
    }
  };

  const { title, text1, text2 } = getNoEncounterModalDetails(signNote.type);

  useEffect(() => {
    return () => {
      setIsSubmittingInProgress(false);
      setIsSendingToChartInProgress(false);
    };
  }, []);

  if (!isPatientSelected) {
    return (
      <Dialog
        buttonProps={noPatientButtonProps}
        isOpen={!isPatientSelected}
        onClose={closeModal}
        title={t("modals.signNoteModal.noPatient.title")}
      >
        <Text size="md">{t("modals.signNoteModal.noPatient.text1")}</Text>
        <Text size="md">{t("modals.signNoteModal.noPatient.text2")}</Text>
      </Dialog>
    );
  }

  switch (signNote.type) {
    case SubmissionModals.NO_LAB_RESULTS:
      return (
        <SubmissionWarning
          closeModal={closeModal}
          saveUnfinishedNote={saveUnfinishedNote}
          warningType={SUBMISSION_WARNING.NO_LAB_RESULTS}
        />
      );

    case SubmissionModals.NO_VALID_OB_EPISODE:
      return (
        <SubmissionWarning
          closeModal={closeModal}
          saveUnfinishedNote={saveUnfinishedNote}
          warningType={SUBMISSION_WARNING.NO_VALID_OB_EPISODE}
        />
      );

    case SubmissionModals.CONFIRM_CODES:
      return (
        <ConfirmICDCodes
          closeModal={closeModal}
          setInitialStep={setInitialStep}
          showMissingCodesModal={showMissingCodesModal}
        />
      );

    case SubmissionModals.MISSING_CODES:
      return (
        <MissingICDCodes
          closeModal={closeModal}
          setInitialStepAndIgnoreMissingICDCodes={setInitialStepAndIgnoreMissingICDCodes}
          showConfirmCodesModal={showConfirmCodesModal}
        />
      );

    case SubmissionModals.INITIAL:
    case SubmissionModals.SUBMIT:
      return (
        <InitialOrSubmitModal
          closeModal={closeModal}
          hasEnhancedReview={isNoteEligibleForEnhancedReview}
          isInitial={isInitial}
          isSendNoteToEmrAvailable={isSendNoteToEmrAvailable}
          isSubmittingInProgress={isSubmittingInProgress}
          saveToEnhancedReview={saveToEnhancedReview}
          submitNote={submitNote}
        />
      );

    case SubmissionModals.NOTE_TO_ENHANCED_REVIEW:
      return (
        <Dialog
          buttonProps={noteEnhancedReviewNoOpenEncounterButtonProps}
          isOpen={true}
          onClose={closeModal}
          title={t("modals.signNoteModal.noteEnhancedReviewNoOpenEncounter.title")}
        >
          <Text size="md">{t("modals.signNoteModal.noteEnhancedReviewNoOpenEncounter.text1")}</Text>
          <Text size="md">{t("modals.signNoteModal.noteEnhancedReviewNoOpenEncounter.text2")}</Text>
        </Dialog>
      );

    case SubmissionModals.NO_ENCOUNTER_EMRCHART:
    case SubmissionModals.NO_ENCOUNTER:
      return (
        <Dialog
          buttonProps={encounterButtonProps}
          isLongFooter={signNote.type === SubmissionModals.NO_ENCOUNTER_EMRCHART}
          isOpen={true}
          onClose={closeModal}
          title={title}
        >
          <Text size="md">{text1}</Text>
          <Text size="md">{text2}</Text>
        </Dialog>
      );

    case SubmissionModals.MULTIPLE_ENCOUNTERS:
      return (
        <MultipleEncounters
          closeModal={closeModal}
          saveUnfinishedNote={saveUnfinishedNote}
          sendToEMR={sendToEMR}
          sendToEMRChart={sendToEMRChart}
        />
      );

    case SubmissionModals.UNABLE_TO_REACH_EMR:
    default:
      return <UnableToReachEmr closeModal={closeModal} />;
  }
};

export default SignNoteModal;

export { SignNoteModal };
