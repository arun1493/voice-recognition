import { WindowsReceiveEventTypes } from "@suki-web/suki-business";

async function handleCreateNewSession(payload: any, { socket, createMsDictationDialog }: any): Promise<void> {
  try {
    await createMsDictationDialog();
    socket.emit(WindowsReceiveEventTypes.DICTATION_CONNECTION_SUCCESS);
  } catch (error) {
    socket.emit(WindowsReceiveEventTypes.DICTATION_CONNECTION_FAILURE);
  }
}

export { handleCreateNewSession };
