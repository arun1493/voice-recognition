import ClientFactory from "../../factories/ClientFactory";
import { createMsDictationDialogMetadata } from "./helpers";

class MsDictationDialogManager {
  private static instance: MsDictationDialogManager;
  socketVsMsDictationDialog: Record<string, any>;
  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */

  private constructor() {
    this.socketVsMsDictationDialog = {};
  }

  create = async (socketId: string, metadata: any) => {
    this.end(socketId);

    try {
      console.log("Creating metadata to initialise ms-dictation dialog for socketId: ", socketId);
      const dictateDialogMetadata = createMsDictationDialogMetadata(metadata);

      console.log("Creating ms-dictation streamer client for socketId: ", socketId);
      const dictateStreamerClient = await ClientFactory.getDictationClient();

      console.log("Creating new ms-dication dialog from streamer client for socketId: ", socketId);
      const dictateDialog = dictateStreamerClient?.dialog(dictateDialogMetadata);

      this.socketVsMsDictationDialog[socketId] = dictateDialog;
      return dictateDialog;
    } catch (error) {
      console.log("Failed to create Dictate dialog for socketId: ", socketId, error);
      return;
    }
  };

  get = (socketId: string) => {
    const dictateDialog = this.socketVsMsDictationDialog[socketId];
    return dictateDialog;
  };

  end = (socketId: string) => {
    try {
      console.log("Terminating ms-dictation dialog for socketId: ", socketId);
      const msDictationDialog = this.socketVsMsDictationDialog[socketId];
      msDictationDialog?.end();
      this.socketVsMsDictationDialog[socketId] = null;
    } catch (error) {
      console.log("Failed to end the Dictate Dialog for socketId: ", socketId);
    }
  };

  public static getInstance(): MsDictationDialogManager {
    if (!MsDictationDialogManager.instance) {
      MsDictationDialogManager.instance = new MsDictationDialogManager();
    }
    return MsDictationDialogManager.instance;
  }
}

export default MsDictationDialogManager;
