import store from "store2";
import { IntentResponse } from "@suki-web/suki-business";

import {
  handleAgentCancelled,
  handleAgentProcessing,
  handleAgentWakeUp,
  handleChangeSection,
  handleDeleteNote,
  handleGoBack,
  handleGoToHome,
  handleGoToNoteTypes,
  handleGoToPatientProfile,
  handleGoToPatients,
  handleGoToSettings,
  handleGoToUnfinishedNotes,
  handleHelp,
  handleLogout,
  handlePrintNote,
  handleShowMeCards,
  handleShowMyList,
  handleShowMySchedule,
  handleShowScripts,
  handleStopDictation,
  handleSubmitNote,
  handleTranscripts,
  handleWhatCanISay
} from "../intentHandlers";
import { logger } from "../../../../api";
import { isEpicEMR } from "../../../../helpers";
import { CardType, INTENTS, LOCAL_STORE } from "../../../../constants";
import { SocketEventHandlerAdditionalProps } from "../../../../socket";

function handleIntent(
  intentResponse: IntentResponse,
  { dispatch, navigate, location, getReduxStoreState, transmitEvent }: SocketEventHandlerAdditionalProps
) {
  const { type, slots } = intentResponse;

  switch (type) {
    case INTENTS.AGENT_WAKEUP:
      handleAgentWakeUp(dispatch);
      break;
    case INTENTS.AGENT_CANCELLED:
      handleAgentCancelled(dispatch);
      break;
    case INTENTS.AGENT_PROCESSING:
      handleAgentProcessing(dispatch);
      break;
    case INTENTS.DELETE_NOTE:
      handleDeleteNote(location, dispatch, getReduxStoreState);
      break;
    case INTENTS.SHOW_SCRIPTS:
      handleShowScripts(navigate, location, dispatch);
      break;
    case INTENTS.SHOW_MEDICATIONS:
      handleShowMeCards(location, CardType.CURRENT_MEDICATION, dispatch, getReduxStoreState, transmitEvent);
      break;
    case INTENTS.SHOW_ALLERGIES:
      handleShowMeCards(location, CardType.ALLERGIES, dispatch, getReduxStoreState, transmitEvent);
      break;
    case INTENTS.SHOW_VITALS:
      handleShowMeCards(location, CardType.VITALS, dispatch, getReduxStoreState, transmitEvent);
      break;
    case INTENTS.SHOW_MEDICAL_HISTORY:
      handleShowMeCards(location, CardType.PAST_MEDICAL_HISTORY, dispatch, getReduxStoreState, transmitEvent);
      break;
    case INTENTS.SHOW_SURGICAL_HISTORY:
      handleShowMeCards(location, CardType.PAST_SURGICAL_HISTORY, dispatch, getReduxStoreState, transmitEvent);
      break;
    case INTENTS.LOGOUT:
      handleLogout();
      break;
    case INTENTS.HELP:
      handleHelp(navigate, dispatch);
      break;
    case INTENTS.GO_BACK:
      handleGoBack(location, navigate, dispatch);
      break;
    case INTENTS.GOTO_HOME:
      handleGoToHome(navigate, dispatch);
      break;
    case INTENTS.GOTO_LIST:
      const emrType = store.get(LOCAL_STORE.EMR_TYPE);
      isEpicEMR(emrType) ? handleShowMySchedule(navigate, dispatch) : handleShowMyList(navigate, dispatch);
      break;
    case INTENTS.GOTO_NOTETYPES:
      handleGoToNoteTypes(navigate, dispatch);
      break;
    case INTENTS.GOTO_PATIENTS:
      handleGoToPatients(navigate, dispatch);
      break;
    case INTENTS.GOTO_SETTINGS:
      handleGoToSettings(navigate, dispatch);
      break;
    case INTENTS.PRINT_NOTE:
      handlePrintNote(location, dispatch, getReduxStoreState);
      break;
    case INTENTS.PROFILE:
      handleGoToPatientProfile(navigate, dispatch, slots);
      break;
    case INTENTS.SCHEDULE:
      handleShowMySchedule(navigate, dispatch);
      break;
    case INTENTS.SECTION:
      handleChangeSection(dispatch, getReduxStoreState, transmitEvent, intentResponse);
      break;
    case INTENTS.STOP_DICTATION:
      handleStopDictation(location, dispatch, transmitEvent);
      break;
    case INTENTS.SUBMIT_NOTE:
      handleSubmitNote(location, dispatch, getReduxStoreState);
      break;
    case INTENTS.UNFINISHED_NOTES:
      handleGoToUnfinishedNotes(navigate, dispatch);
      break;
    case INTENTS.WHAT_CAN_I_SAY:
      handleWhatCanISay(location, dispatch);
      break;
    case INTENTS.TRANSCRIPT:
      handleTranscripts(slots, dispatch);
      break;
    default:
      logger.warn({ message: "Unknown Intent Received", payload: type });
  }
}

export default handleIntent;
