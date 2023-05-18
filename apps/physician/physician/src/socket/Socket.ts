import _forEach from "lodash/forEach";
import { io } from "socket.io-client";
import { ClientEmitEventTypes, DefaultSocketEventTypes, EMPTY_ARRAY, Paths } from "@suki-web/suki-business";

import { logger } from "../api";
import { getAPIBaseUrl } from "../helpers";
import { SocketContext, SocketTransmitEvent } from ".";
import { getOktaAccessToken, getOktaIdToken, getOktaSessionToken } from "../helpers";

const RECONNECTION_DELAY_TIME = 1000; // This is in milli seconds

type SocketEventResponseHandler = (response: Response) => void;

type EventsMap = Record<string, SocketEventResponseHandler[]>;

class Socket {
  private static instance: Socket;
  socket: any;
  eventsMap: EventsMap;
  connectionInProgress: boolean;
  pendingEventPool: any;

  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor() {
    this.eventsMap = {};
    this.connectionInProgress = false;
    this.pendingEventPool = [];
  }

  /**
   * This function is called when the connection is refused from the middleware layer of server.
   * Refer to server.ts in web app for reference. When rejected by middleware we need to manually initiate
   * reconnection. Refer to https://socket.io/docs/v4/client-socket-instance/.
   * Triggering the connection using a 1000ms delay
   * NOTE: We need to add error based socket connection handling in future.
   */
  onConnectionFailure = () => {
    this.connectionInProgress = false;
    setTimeout(() => {
      if (this.connectionInProgress) {
        return;
      }
      this.socket?.connect();
      this.connectionInProgress = true;
    }, RECONNECTION_DELAY_TIME);
    logger.error({ message: "Socket connection could not be established" });
  };

  /**
   * This event will be fired due to multiple reasons. Please refer to https://socket.io/docs/v4/client-socket-instance/
   */
  onConnectionDisconnect = () => {
    this.connectionInProgress = false;
    logger.warn({ message: "Socket connection disconnected" });
  };

  onConnectionSuccess = () => {
    logger.info({ message: "Socket connection successfully established" });
    this.connectionInProgress = false;
    this.registerEventsFromEventsMap(this.eventsMap);
    this.transmitPendingEvents();
  };

  transmitPendingEvents = () => {
    _forEach(this.pendingEventPool, ({ event, context }) => {
      this.transmitEvent(event, context);
    });
    this.pendingEventPool = [];
  };

  registerEventsFromEventsMap = (eventsMap: EventsMap) => {
    const registerEventHandler = (eventType: string) => (handler: SocketEventResponseHandler) => {
      this.registerEvent(eventType, handler, false);
    };

    const registerEventHandlers = (eventHandlers: SocketEventResponseHandler[], eventType: string) => {
      _forEach(eventHandlers, registerEventHandler(eventType));
    };

    _forEach(eventsMap, registerEventHandlers);
  };

  initiateConnection = (namespace?: string) => {
    if (this.socket?.connected || this.connectionInProgress) {
      return;
    }
    const baseUrl = getAPIBaseUrl();
    const isThinClientRoute = window.location.pathname === Paths.ThinClient;

    const searchParams = new URLSearchParams(window.location.search);
    let clientName = "";
    if (isThinClientRoute && searchParams.get("asr") === "2") {
      clientName = "suki-asr";
    } else if (isThinClientRoute) {
      clientName = "google-asr";
    }

    this.socket = io(baseUrl, {
      auth: {
        accessToken: getOktaAccessToken(),
        clientName,
        idToken: getOktaIdToken(),
        sessionToken: getOktaSessionToken(),
        userAgent: window?.navigator?.userAgent
      },
      transports: ["websocket"],
      closeOnBeforeunload: false
    });
    this.connectionInProgress = true;
    this.socket.on(DefaultSocketEventTypes.CONNECTION_SUCCESS, this.onConnectionSuccess);
    this.socket.on(DefaultSocketEventTypes.CONNECTION_FAILURE, this.onConnectionFailure);
    this.socket.on(DefaultSocketEventTypes.CONNECTION_DISCONNECTED, this.onConnectionDisconnect);
  };

  terminate = () => {
    logger.info({ message: "Terminating socket connection" });
    this.socket?.removeAllListeners();
    this.socket?.emit(ClientEmitEventTypes.DISCONNECT);
  };

  addEventToEventsMap = (eventType: string, eventHandler: SocketEventResponseHandler, override = true) => {
    const currentEventTypeHandlers = this.eventsMap[eventType] || EMPTY_ARRAY;

    // If override is true, we replace all previous handlers with the new handler
    // else we push the new handler to the collection
    if (override) {
      this.eventsMap[eventType] = [eventHandler];
    } else {
      this.eventsMap[eventType] = [...currentEventTypeHandlers, eventHandler];
    }
  };

  registerEvent = (eventType: string, eventHandler: (response: Response) => void, override = true) => {
    this.addEventToEventsMap(eventType, eventHandler, override);

    if (!this.socket?.connected) {
      return;
    }

    if (override) {
      this.socket.removeAllListeners([eventType]);
    }

    this.socket.on(eventType, eventHandler);
  };

  removeEventFromEventsMap = (eventType: string) => {
    this.eventsMap[eventType] = [];
  };

  unRegisterEventType = (eventType: string) => {
    this.socket?.removeAllListeners([eventType]);
  };

  transmitEvent = (event: SocketTransmitEvent, context?: SocketContext) => {
    const { type, data } = event;
    if (this.socket?.connected) {
      const payload = {
        context,
        data
      };
      this.socket.emit(type, payload);
    } else {
      this.pendingEventPool.push({ event, context });
    }
  };

  public static getInstance(): Socket {
    if (!Socket.instance) {
      Socket.instance = new Socket();
    }
    return Socket.instance;
  }
}

export { Socket };
