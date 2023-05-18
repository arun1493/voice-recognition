import store from "store2";
import { batch } from "react-redux";

import { playSound } from "../helpers";
import { AgentSounds } from "../constants";
import { noteActions } from "../../../../redux/note";
import { agentActions } from "../../../../redux/agent";
import { modalsActions } from "../../../../redux/modals";
import { SESSION_STORE, SukiAgentState } from "../../../../constants";
import { SocketEventHandlerAdditionalProps } from "../../../../socket";

interface CompositionCreatedResponse {
  composition_id: string;
  notetypes: [];
}

// TODO: [Sai] If the note types are empty, emit CANCEL_CREATE_NOTE event
function handleCompositionCreationInNotepad(
  payload: CompositionCreatedResponse,
  { dispatch }: SocketEventHandlerAdditionalProps
): void {
  const { composition_id } = payload;
  const hasSoundOnCreateNote = store.session.get(SESSION_STORE.CREATE_NEW_NOTE_USING_KEYBOARD) !== "true";

  batch(() => {
    dispatch(modalsActions.showNoteTypesModal());
    dispatch(noteActions.setCompositionId(composition_id));
    dispatch(agentActions.setAgentState(SukiAgentState.READY));
  });

  if (hasSoundOnCreateNote) {
    playSound(AgentSounds.END_OF_UTTERANCE);
  }
}

export default handleCompositionCreationInNotepad;
