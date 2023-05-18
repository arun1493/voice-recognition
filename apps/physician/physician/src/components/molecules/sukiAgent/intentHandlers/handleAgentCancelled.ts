import { playSound } from "../helpers";
import { AgentSounds } from "../constants";
import { Dispatch } from "../../../../types";
import { agentActions } from "../../../../redux/agent";
import { SukiAgentState } from "../../../../constants";

function handleAgentCancelled(dispatch: Dispatch) {
  dispatch(agentActions.setAgentState(SukiAgentState.CANCELLED));
  playSound(AgentSounds.ERROR);
}

export default handleAgentCancelled;
