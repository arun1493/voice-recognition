import { Dispatch } from "../../../../types";
import { agentActions } from "../../../../redux/agent";
import { SukiAgentState } from "../../../../constants";

function handleAgentWakeUp(dispatch: Dispatch) {
  dispatch(agentActions.setAgentState(SukiAgentState.AWAKE));
}

export default handleAgentWakeUp;
