import _forEach from "lodash/forEach";

import { CLIENT_EVENTS, MS_SUKI_ASR_EVENTS } from "./events";
import MsSukiAsrDialogManager from "./MsSukiAsrDialogManager";

class MsSukiAsrEventManager {
  socket: any;
  socketId: any;
  packetNumber: number;
  msSukiAsrDialogManager: any;
  msSukiAsrDialogConnectionInProgress: boolean;

  constructor(socket: any) {
    this.packetNumber = 1;
    this.socket = socket;
    this.socketId = socket?.id;
    this.msSukiAsrDialogManager = MsSukiAsrDialogManager.getInstance();
    this.msSukiAsrDialogConnectionInProgress = false;
    this.registerClientSocketEvents();
  }

  getMsSukiAsrDialog = () => {
    return this.msSukiAsrDialogManager.get(this.socketId);
  };

  incrementpacketCount = () => {
    return this.packetNumber++;
  };

  resetPacketCount = () => {
    this.packetNumber = 1;
  };

  registerMsSukiAsrEvent = (msSukiAsrDialog: any) => (event: any) => {
    const { type: eventType, handler } = event;
    msSukiAsrDialog?.on(eventType, (msDictationResponse) => {
      handler(msDictationResponse, { socket: this.socket });
    });
  };

  registerMsSukiAsrEvents = (msSukiAsrDialog) => {
    _forEach(MS_SUKI_ASR_EVENTS, this.registerMsSukiAsrEvent(msSukiAsrDialog));
  };

  registerClientSocketEvent = (event: any) => {
    const { type: eventType, handler } = event;
    this.socket.on(eventType, (payload) => {
      handler(payload, {
        createMsSukiAsrDialog: this.createMsSukiAsrDialog,
        getMsSukiAsrDialog: this.getMsSukiAsrDialog,
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

  createMsSukiAsrDialog = async () => {
    const msSukiAsrDialog = await this.msSukiAsrDialogManager.create(this.socketId, this.socket?.data);
    this.registerMsSukiAsrEvents(msSukiAsrDialog);
    return msSukiAsrDialog;
  };

  terminateDialog = () => {
    this.msSukiAsrDialogManager.end(this.socketId);
  };
}

export default MsSukiAsrEventManager;
