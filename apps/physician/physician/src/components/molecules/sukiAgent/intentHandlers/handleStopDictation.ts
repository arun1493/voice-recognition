import { batch } from "react-redux";
import _includes from "lodash/includes";
import { ClientEmitEventTypes, Paths } from "@suki-web/suki-business";

import { playSound } from "../helpers";
import { AgentSounds } from "../constants";
import { Dispatch } from "../../../../types";
import { noteActions } from "../../../../redux/note";
import { agentActions } from "../../../../redux/agent";
import { EMPTY_STRING, SukiAgentState } from "../../../../constants";

function handleStopDictation(location: any, dispatch: Dispatch, transmitEvent: any) {
  if (!_includes(location?.pathname, Paths.Note)) {
    playSound(AgentSounds.ERROR);
    dispatch(agentActions.setAgentState(SukiAgentState.READY));
    return;
  }

  playSound(AgentSounds.EXIT_DICTATION);
  batch(() => {
    dispatch(noteActions.setActiveSectionId(EMPTY_STRING));
    dispatch(agentActions.setAgentState(SukiAgentState.READY));
  });
  transmitEvent({
    type: ClientEmitEventTypes.SPEECH_CONFIG,
    data: {
      sectionId: ""
    }
  });
}

export default handleStopDictation;
