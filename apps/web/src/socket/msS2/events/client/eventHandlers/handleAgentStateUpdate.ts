import _get from "lodash/get";
import { ClientReceiveEventTypes } from "@suki-web/suki-business";

async function handleAgentStateUpdate(
  payload: any,
  { isGoogleAsr = false, isSukiAsr = false, socket, getS2Dialog }: any
): Promise<void> {
  if (!isGoogleAsr && !isSukiAsr) {
    const s2Dialog = await getS2Dialog();
    // If s2 connection is not present, return
    if (!s2Dialog) {
      return;
    }
  }

  const sessionId = socket?.data?.sessionToken;
  const isAgentActive = _get(payload, "data.isAgentActive", false);

  // If agent has to be turned on for the current tab, emit event to other
  // socket connections for the same session to turn the agent off.
  if (isAgentActive) {
    socket.to(sessionId).emit(ClientReceiveEventTypes.TURN_OFF_AGENT);
    socket.emit(ClientReceiveEventTypes.TURN_ON_AGENT);
  } else {
    socket.emit(ClientReceiveEventTypes.TURN_OFF_AGENT);
  }
}

export default handleAgentStateUpdate;
