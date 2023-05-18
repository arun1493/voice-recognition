import { ClientEmitEventTypes } from "@suki-web/suki-business";

import { SukiAgentState } from "../../../../constants";
import { agentActions } from "../../../../redux/agent";
import { SocketEventHandlerAdditionalProps } from "../../../../socket";

function handleTurnOffAgent(_: any, { dispatch, transmitEvent }: SocketEventHandlerAdditionalProps): void {
  dispatch(agentActions.setActiveStatus(false));
  dispatch(agentActions.setAgentState(SukiAgentState.MUTED));
  transmitEvent({ type: ClientEmitEventTypes.SPEECH_END });
}

export default handleTurnOffAgent;
