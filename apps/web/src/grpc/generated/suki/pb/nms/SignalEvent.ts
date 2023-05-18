// Original file: node_modules/protobufs/src/suki/pb/nms/nms_event.proto

import type { SignalEventType as _suki_pb_nms_SignalEventType } from "../../../suki/pb/nms/SignalEventType";
import type {
  EventContext as _suki_pb_nms_EventContext,
  EventContext__Output as _suki_pb_nms_EventContext__Output
} from "../../../suki/pb/nms/EventContext";

export interface SignalEvent {
  type?: _suki_pb_nms_SignalEventType | keyof typeof _suki_pb_nms_SignalEventType;
  context?: _suki_pb_nms_EventContext | null;
}

export interface SignalEvent__Output {
  type: keyof typeof _suki_pb_nms_SignalEventType;
  context: _suki_pb_nms_EventContext__Output | null;
}
