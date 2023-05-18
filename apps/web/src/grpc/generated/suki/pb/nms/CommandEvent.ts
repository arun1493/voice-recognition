// Original file: node_modules/protobufs/src/suki/pb/nms/nms_event.proto

import type {
  Intent as _learningmotors_pb_idl_Intent,
  Intent__Output as _learningmotors_pb_idl_Intent__Output
} from "../../../learningmotors/pb/idl/Intent";
import type {
  EventContext as _suki_pb_nms_EventContext,
  EventContext__Output as _suki_pb_nms_EventContext__Output
} from "../../../suki/pb/nms/EventContext";

export interface CommandEvent {
  type?: _learningmotors_pb_idl_Intent | null;
  context?: _suki_pb_nms_EventContext | null;
}

export interface CommandEvent__Output {
  type: _learningmotors_pb_idl_Intent__Output | null;
  context: _suki_pb_nms_EventContext__Output | null;
}
