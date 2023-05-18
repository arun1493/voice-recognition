import { WindowsReceiveEventTypes } from "@suki-web/suki-business";

function handleTerminateCurrentSession(payload: any, { socket, resetPacketCount, terminateDialog }: any) {
  try {
    resetPacketCount();
    terminateDialog();
    socket.emit(WindowsReceiveEventTypes.DICTATION_CONNECTION_CLOSE);
  } catch (error) {
    socket.emit(WindowsReceiveEventTypes.DICTATION_CONNECTION_CLOSE_FAILURE);
  }
}

export { handleTerminateCurrentSession };
