import _get from "lodash/get";
import { NavigateFunction } from "react-router-dom";

import { playSound } from "../helpers";
import { AgentSounds } from "../constants";
import { Dispatch } from "../../../../types";
import { getRoute } from "../../../../helpers";
import { RootState } from "../../../../redux/store";
import { noteActions } from "../../../../redux/note";
import { agentActions } from "../../../../redux/agent";
import { modalsActions } from "../../../../redux/modals";
import { Pages, SukiAgentState } from "../../../../constants";

interface IsCompositionCreatedResponse {
  compositionId: string;
}

function handleCreateCompositionAcknowledgement(
  payload: IsCompositionCreatedResponse,
  {
    dispatch,
    getReduxStoreState,
    navigate
  }: { dispatch: Dispatch; getReduxStoreState: () => RootState; navigate: NavigateFunction }
): void {
  dispatch(modalsActions.hideNoteTypesModal());
  const { compositionId } = payload;
  const noteRoute = getRoute(Pages.Note, { noteId: compositionId });
  if (noteRoute) {
    dispatch(noteActions.setIsNewNote(true));
    navigate(noteRoute);
  }

  const agentStatus = _get(getReduxStoreState(), "agent.status");

  if (agentStatus === SukiAgentState.PROCESSING) {
    playSound(AgentSounds.END_OF_UTTERANCE);
    dispatch(agentActions.setAgentState(SukiAgentState.READY));
  }
}

export default handleCreateCompositionAcknowledgement;
