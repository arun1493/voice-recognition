import { Location, NavigateFunction } from "react-router-dom";

import { Socket } from "../Socket";
import { Dispatch } from "../../types";
import { RootState } from "../../redux/store";

type SocketReceiveEvent = {
  handler: SocketEventHandler;
  override?: boolean;
  type: string;
};

type SocketTransmitEvent = {
  data?: any;
  type: string;
};

type SocketEventHandlerAdditionalProps = {
  dispatch: Dispatch;
  getReduxStoreState: () => RootState;
  navigate: NavigateFunction;
  location: Location;
  socket: Socket;
  transmitEvent: (event: SocketTransmitEvent) => void;
};

type SocketEventHandler = (data: any, additional: SocketEventHandlerAdditionalProps) => void;

type SocketContext = {
  compositionId: string;
  location: any;
  noteTypeId: string;
  patientId: string;
  problemBasedSections: string[];
  sectionId: string;
};

export {
  SocketContext,
  SocketEventHandlerAdditionalProps,
  SocketEventHandler,
  SocketReceiveEvent,
  SocketTransmitEvent
};
