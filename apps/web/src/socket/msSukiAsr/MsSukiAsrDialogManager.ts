import ClientFactory from "../../factories/ClientFactory";
import { createMsSukiAsrDialogMetadata } from "./helpers";

class MsSukiAsrDialogManager {
  private static instance: MsSukiAsrDialogManager;
  socketVsMsSukiAsrDialog: Record<string, any>;
  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor() {
    this.socketVsMsSukiAsrDialog = {};
  }

  create = async (socketId: string, metadata: any) => {
    this.end(socketId);

    try {
      console.log("Creating metadata to initialise ms-suki-asr dialog for socketId: ", socketId);
      const sukiAsrDialogMetadata = createMsSukiAsrDialogMetadata(metadata);

      console.log("Creating ms-suki-asr streamer client for socketId: ", socketId);
      const dictateStreamerClient = await ClientFactory.getSukiAsrClient();

      console.log("Creating new ms-suki-asr dialog from streamer client for socketId: ", socketId);
      const sukiAsrDialog = dictateStreamerClient?.dialog(sukiAsrDialogMetadata);

      sukiAsrDialog?.on("end", () => {
        console.log("GRPC Call Ended.", socketId);
        this.end(socketId);
      });

      sukiAsrDialog?.on("error", (err) => {
        // Sending this logs out the user currently. Maybe something to do with either
        // of these errors on the client side

        if (err.toString().includes("ERR_STREAM_WRITE_AFTER_END")) {
          // If we hit this condition, there is a dangling grpc client connection, where the server has ended
          // & the grpc connection is still getting written on.
          console.log("Found a dangling GRPC client. Server is rejecting writes. So, ending GRPC connection.");
          this.end(socketId);
        } else {
          console.log("Error on the GRPC Stream", err);
        }
      });

      this.socketVsMsSukiAsrDialog[socketId] = sukiAsrDialog;
      return sukiAsrDialog;
    } catch (error) {
      console.log("Failed to create Dictate dialog for socketId: ", socketId, error);
      return;
    }
  };

  get = (socketId: string) => {
    const sukiAsrDialog = this.socketVsMsSukiAsrDialog[socketId];
    return sukiAsrDialog;
  };

  end = (socketId: string) => {
    try {
      console.log("Terminating ms-suki-asr dialog for socketId: ", socketId);
      const msSukiAsrDialog = this.socketVsMsSukiAsrDialog[socketId];
      msSukiAsrDialog?.end();
      this.socketVsMsSukiAsrDialog[socketId] = null;
    } catch (error) {
      console.log("Failed to end the Dictate Dialog for socketId: ", socketId);
    }
  };

  public static getInstance(): MsSukiAsrDialogManager {
    if (!MsSukiAsrDialogManager.instance) {
      MsSukiAsrDialogManager.instance = new MsSukiAsrDialogManager();
    }
    return MsSukiAsrDialogManager.instance;
  }
}

export default MsSukiAsrDialogManager;
