import _forEach from "lodash/forEach";

import { CLIENT_EVENTS, MS_DICTATION_EVENTS } from "./events";
import MsDictationDialogManager from "./MsDictationDialogManager";

class MsDictationEventManager {
  socket: any;
  socketId: any;
  packetNumber: number;
  msDictationDialogManager: any;
  msDictationDialogConnectionInProgress: boolean;

  constructor(socket: any) {
    this.packetNumber = 1;
    this.socket = socket;
    this.socketId = socket?.id;
    this.msDictationDialogManager = MsDictationDialogManager.getInstance();
    this.msDictationDialogConnectionInProgress = false;
    this.registerClientSocketEvents();
  }

  getMsDictationDialog = () => {
    return this.msDictationDialogManager.get(this.socketId);
  };

  incrementpacketCount = () => {
    return this.packetNumber++;
  };

  resetPacketCount = () => {
    this.packetNumber = 1;
  };

  registerMsDictationEvent = (msDictationDialog: any) => (event: any) => {
    const { type: eventType, handler } = event;
    msDictationDialog?.on(eventType, (msDictationResponse) => {
      handler(msDictationResponse, { socket: this.socket });
    });
  };

  registerMsDictationEvents = (msDictationDialog) => {
    _forEach(MS_DICTATION_EVENTS, this.registerMsDictationEvent(msDictationDialog));
  };

  registerClientSocketEvent = (event: any) => {
    const { type: eventType, handler } = event;
    this.socket.on(eventType, (payload) => {
      handler(payload, {
        createMsDictationDialog: this.createMsDictationDialog,
        getMsDictationDialog: this.getMsDictationDialog,
        incrementPacketCount: this.incrementpacketCount,
        resetPacketCount: this.resetPacketCount,
        socket: this.socket,
        terminateDialog: this.terminateDialog
      });
    });
  };

  registerClientSocketEvents = () => {
    _forEach(CLIENT_EVENTS, this.registerClientSocketEvent);
  };

  createMsDictationDialog = async () => {
    const msDictationDialog = await this.msDictationDialogManager.create(this.socketId, this.socket?.data);
    this.registerMsDictationEvents(msDictationDialog);
    return msDictationDialog;
  };

  terminateDialog = () => {
    this.msDictationDialogManager.end(this.socketId);
  };
}

export default MsDictationEventManager;
