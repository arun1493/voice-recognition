import { WindowsReceiveEventTypes } from "@suki-web/suki-business";

async function handleCreateNewSession(payload: any, { socket, createMsSukiAsrDialog }: any): Promise<void> {
  try {
    await createMsSukiAsrDialog();
    socket.emit(WindowsReceiveEventTypes.DICTATION_CONNECTION_SUCCESS);
  } catch (error) {
    socket.emit(WindowsReceiveEventTypes.DICTATION_CONNECTION_FAILURE);
  }
}

export { handleCreateNewSession };
