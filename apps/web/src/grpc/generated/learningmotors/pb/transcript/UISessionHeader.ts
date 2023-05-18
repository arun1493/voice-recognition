// Original file: node_modules/protobufs/src/learningmotors/pb/transcript/pubsub.proto

import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";
import type {
  Context as _learningmotors_pb_Context,
  Context__Output as _learningmotors_pb_Context__Output
} from "../../../learningmotors/pb/Context";

export interface UISessionHeader {
  organization_id?: string;
  user_id?: string;
  session_id?: string;
  stream_start_time?: _google_protobuf_Timestamp | null;
  context?: _learningmotors_pb_Context | null;
}

export interface UISessionHeader__Output {
  organization_id: string;
  user_id: string;
  session_id: string;
  stream_start_time: _google_protobuf_Timestamp__Output | null;
  context: _learningmotors_pb_Context__Output | null;
}
