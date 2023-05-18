import { Dispatch } from "../../../../types";
import { agentActions } from "../../../../redux/agent";
import { SukiAgentState } from "../../../../constants";

function handleAgentProcessing(dispatch: Dispatch) {
  dispatch(agentActions.setAgentState(SukiAgentState.PROCESSING));
}

export default handleAgentProcessing;
