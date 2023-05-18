// Original file: node_modules/protobufs/src/suki/pb/nms/nms_event.proto

import type { ClickType as _suki_pb_nms_ClickType } from "../../../suki/pb/nms/ClickType";
import type {
  EventContext as _suki_pb_nms_EventContext,
  EventContext__Output as _suki_pb_nms_EventContext__Output
} from "../../../suki/pb/nms/EventContext";

export interface ClickEvent {
  type?: _suki_pb_nms_ClickType | keyof typeof _suki_pb_nms_ClickType;
  context?: _suki_pb_nms_EventContext | null;
}

export interface ClickEvent__Output {
  type: keyof typeof _suki_pb_nms_ClickType;
  context: _suki_pb_nms_EventContext__Output | null;
}
