import _forEach from "lodash/forEach";
import { ClientReceiveEventTypes } from "@suki-web/suki-business";

import { cloudLogger } from "../../helpers";
import { DEFAULT_S2_IDLE_TIME } from "./constants";
import MsS2DialogManager from "./MsS2DialogManager";
import { CLIENT_EVENTS, MS_S2_EVENTS } from "./events";

class MsS2EventManager {
  socket: any;
  socketId: any;
  s2DialogManager: any;
  s2IdleTime: number;
  s2Timeout: any;
  s2DialogConnectionInProgress: boolean;

  constructor(socket: any, s2IdleTime: number = DEFAULT_S2_IDLE_TIME) {
    this.socket = socket;
    this.socketId = socket?.id;
    this.s2DialogManager = MsS2DialogManager.getInstance();
    this.s2IdleTime = s2IdleTime;
    this.s2DialogConnectionInProgress = false;
    this.registerClientSocketEvents();
  }

  manageS2Connection = () => {
    // Clear the previous timeout and set new timeout to disconnect s2 dialog
    clearTimeout(this.s2Timeout);
    this.s2Timeout = setTimeout(() => {
      this.terminateS2Connection();
    }, this.s2IdleTime);
  };

  getS2Dialog = async () => {
    try {
      let s2Dialog = this.s2DialogManager.get(this.socketId);
      if (!s2Dialog && !this.s2DialogConnectionInProgress) {
        this.s2DialogConnectionInProgress = true;
        s2Dialog = await this.s2DialogManager.create(this.socketId, this.socket?.data, this.socket);
        this.s2DialogConnectionInProgress = false;
        if (s2Dialog) {
          this.registerS2Events(s2Dialog);
          this.manageS2Connection();
        } else {
          this.socket?.emit(ClientReceiveEventTypes.S2_CONNECTION_FAILURE);
        }
      }
      return s2Dialog;
    } catch (error) {
      cloudLogger.error(`[${this.socket.data.userAgent}] Error getting s2 dialog`, error);
    }
  };

  registerS2Event = (s2Dialog: any) => (event: any) => {
    const { type: eventType, handler } = event;
    s2Dialog.on(eventType, (s2Response) => {
      this.manageS2Connection();
      handler(s2Response, { socket: this.socket });
    });
  };

  registerS2Events = (s2Dialog) => {
    _forEach(MS_S2_EVENTS, this.registerS2Event(s2Dialog));
  };

  registerClientSocketEvents = () => {
    _forEach(CLIENT_EVENTS, this.registerClientSocketEvent);
  };

  registerClientSocketEvent = (event: any) => {
    const { type: eventType, handler } = event;
    this.socket.on(eventType, (payload) => {
      this.manageS2Connection();
      handler(payload, { socket: this.socket, getS2Dialog: this.getS2Dialog });
    });
  };

  terminateS2Connection = () => {
    cloudLogger.info(`[${this.socket.data.userAgent}] No s2 activity noticed, initiating s2 dialog termination`);
    this.s2DialogManager.end(this.socketId);
  };
}

export default MsS2EventManager;
