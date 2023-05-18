import i18n from "i18next";
import { batch } from "react-redux";
import { ClientEmitEventTypes, S2ErrorTypes } from "@suki-web/suki-business";

import { logger } from "../../../api";
import { noteActions } from "../../../redux/note";
import { agentActions } from "../../../redux/agent";
import { toastsActions } from "../../../redux/toast";
import { modalsActions } from "../../../redux/modals";
import { AgentSounds, playSound } from "../../../components/molecules";
import { ERROR_CODES, STATE_ITEM_LOADING_STATUS, SukiAgentState, TOAST_TYPES } from "../../../constants";

function handleS2ErrorsInNote(payload: any, { socket, dispatch, history, transmitEvent }: any): void {
  const { error } = payload;

  const { code, error_type, reason } = error;

  let errorMessage = "";

  // hiding any opened modals instead of hiding only note refresh modal
  dispatch(modalsActions.hideAllModals());

  switch (error_type) {
    case S2ErrorTypes.ERROR_CREATE_NOTE:
      errorMessage = i18n.t("errors.s2.createNote");
      break;
    case S2ErrorTypes.ERROR_ADD_SECTION:
      errorMessage = i18n.t("errors.s2.addSection");
      break;
    case S2ErrorTypes.ERROR_DELETE_SECTION:
      errorMessage = i18n.t("errors.s2.deleteSection");
      break;
    case S2ErrorTypes.ERROR_FETCH_NOTE:
      errorMessage = i18n.t("errors.s2.fetchNote");
      break;
    case S2ErrorTypes.ERROR_DELETE_NOTE:
      errorMessage = i18n.t("errors.s2.deleteNote");
      break;
    case S2ErrorTypes.ERROR_COPY_FORWARD:
      errorMessage = i18n.t("errors.s2.copyForward");
      break;
    case S2ErrorTypes.ERROR_SCRIPT_CHANGE:
      errorMessage = reason;
      break;
    case S2ErrorTypes.ERROR_NOTES_PULL:
      errorMessage = reason;
      break;
  }

  const noteBlockingErrors = [S2ErrorTypes.ERROR_CREATE_NOTE, S2ErrorTypes.ERROR_FETCH_NOTE];

  if (error_type === S2ErrorTypes.ERROR_COPY_FORWARD) {
    playSound(AgentSounds.END_OF_UTTERANCE);
    dispatch(agentActions.setAgentState(SukiAgentState.READY));
  } else {
    playSound(AgentSounds.ERROR);
  }

  if (error_type === S2ErrorTypes.DEFAULT && code === ERROR_CODES.CLOSE) {
    logger.info({ message: "Restarting speech event" });
    transmitEvent({ type: ClientEmitEventTypes.SPEECH_END });
    transmitEvent({
      type: ClientEmitEventTypes.SPEECH_START
    });
  }

  batch(() => {
    errorMessage && dispatch(toastsActions.add({ message: errorMessage, type: TOAST_TYPES.ERROR }));
    if (noteBlockingErrors.includes(error_type)) {
      dispatch(noteActions.setLoadingStatus(STATE_ITEM_LOADING_STATUS.ERROR));
    }
  });
}

export { handleS2ErrorsInNote };
