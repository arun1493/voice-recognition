// Original file: node_modules/protobufs/src/suki/pb/nms/nms_event.proto

import type { KeyboardEventType as _suki_pb_nms_KeyboardEventType } from "../../../suki/pb/nms/KeyboardEventType";
import type {
  EventContext as _suki_pb_nms_EventContext,
  EventContext__Output as _suki_pb_nms_EventContext__Output
} from "../../../suki/pb/nms/EventContext";

export interface KeyboardEvent {
  type?: _suki_pb_nms_KeyboardEventType | keyof typeof _suki_pb_nms_KeyboardEventType;
  context?: _suki_pb_nms_EventContext | null;
}

export interface KeyboardEvent__Output {
  type: keyof typeof _suki_pb_nms_KeyboardEventType;
  context: _suki_pb_nms_EventContext__Output | null;
}
