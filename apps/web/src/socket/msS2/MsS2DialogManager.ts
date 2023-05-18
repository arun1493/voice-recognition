import { ClientReceiveEventTypes } from "@suki-web/suki-business";

import { GrpcErrorCodes } from "../../constants";
import { createS2DialogMetadata } from "./helpers";
import ClientFactory from "../../factories/ClientFactory";

class MsS2DialogManager {
  private static instance: MsS2DialogManager;
  socketVsS2Dialog: Record<string, any>;
  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor() {
    this.socketVsS2Dialog = {};
  }

  create = async (socketId: string, metadata: any, socket: any) => {
    this.end(socketId);

    try {
      console.log("Generating metadata to initialise s2Dialog for socketId: ", socketId);
      const s2DialogMetadata = createS2DialogMetadata(metadata);

      console.log("Creating s2StreamerClient for socketId: ", socketId);
      const s2StreamerClient = await ClientFactory.getS2StreamerClient();

      console.log("Creating new s2 dialog from s2StreamerClient for socketId: ", socketId);
      const s2Dialog = s2StreamerClient?.dialog(s2DialogMetadata);

      s2Dialog?.on("end", () => {
        console.log("GRPC Call Ended.", socketId);
        this.end(socketId);
      });

      s2Dialog?.on("error", (err: any) => {
        // Sending this logs out the user currently. Maybe something to do with either
        // of these errors on the client side

        if (err.toString().includes("ERR_STREAM_WRITE_AFTER_END")) {
          // If we hit this condition, there is a dangling grpc client connection, where the server has ended
          // & the grpc connection is still getting written on.
          console.log("Found a dangling GRPC client. Server is rejecting writes. So, ending GRPC connection.");
          this.end(socketId);
        } else if (err.toString().includes("RESOURCE_EXHAUSTED") || err?.code === GrpcErrorCodes.RESOURCE_EXHAUSTED) {
          socket?.emit(ClientReceiveEventTypes.RESOURCE_EXHAUSTED_ERROR);
          socket?.removeAllListeners();
          this.end(socketId);
        } else {
          console.log("Error on the GRPC Stream", err);
        }
      });

      this.socketVsS2Dialog[socketId] = s2Dialog;
      return s2Dialog;
    } catch (error) {
      console.log("Failed to create s2 dialog for socketId: ", socketId, error);
      return;
    }
  };

  get = (socketId: string) => {
    const s2Dialog = this.socketVsS2Dialog[socketId];
    return s2Dialog;
  };

  end = (socketId: string) => {
    try {
      console.log("Terminating s2 Dialog for socketId: ", socketId);
      const s2Dialog = this.socketVsS2Dialog[socketId];
      s2Dialog?.end();
      this.socketVsS2Dialog[socketId] = null;
      console.log("Terminated s2 Dialog for socketId: ", socketId);
    } catch (error) {
      console.log("Failed to end the s2 Dialog for socketId: ", socketId);
    }
  };

  public static getInstance(): MsS2DialogManager {
    if (!MsS2DialogManager.instance) {
      MsS2DialogManager.instance = new MsS2DialogManager();
    }
    return MsS2DialogManager.instance;
  }
}

export default MsS2DialogManager;
