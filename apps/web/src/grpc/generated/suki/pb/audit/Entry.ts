// Original file: node_modules/protobufs/src/suki/pb/audit/audit.proto

import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";
import type {
  Actor as _suki_pb_audit_Actor,
  Actor__Output as _suki_pb_audit_Actor__Output
} from "../../../suki/pb/audit/Actor";
import type {
  Event as _suki_pb_audit_Event,
  Event__Output as _suki_pb_audit_Event__Output
} from "../../../suki/pb/audit/Event";

export interface Entry {
  created_at?: _google_protobuf_Timestamp | null;
  actor?: _suki_pb_audit_Actor | null;
  event?: _suki_pb_audit_Event | null;
}

export interface Entry__Output {
  created_at: _google_protobuf_Timestamp__Output | null;
  actor: _suki_pb_audit_Actor__Output | null;
  event: _suki_pb_audit_Event__Output | null;
}
