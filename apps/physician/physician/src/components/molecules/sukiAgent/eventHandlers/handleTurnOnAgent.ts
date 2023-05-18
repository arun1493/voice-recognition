import { ClientEmitEventTypes } from "@suki-web/suki-business";

import { agentActions } from "../../../../redux/agent";
import { SocketEventHandlerAdditionalProps } from "../../../../socket";

function handleTurnOnAgent(_: any, { dispatch, transmitEvent }: SocketEventHandlerAdditionalProps): void {
  dispatch(agentActions.setActiveStatus(true));
  transmitEvent({
    type: ClientEmitEventTypes.SPEECH_START
  });
}

export default handleTurnOnAgent;
