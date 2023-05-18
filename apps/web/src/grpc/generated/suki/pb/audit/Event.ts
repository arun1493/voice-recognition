// Original file: node_modules/protobufs/src/suki/pb/audit/audit.proto

import type {
  Data as _suki_pb_audit_Data,
  Data__Output as _suki_pb_audit_Data__Output
} from "../../../suki/pb/audit/Data";
import type {
  CallContext as _suki_pb_audit_CallContext,
  CallContext__Output as _suki_pb_audit_CallContext__Output
} from "../../../suki/pb/audit/CallContext";

// Original file: node_modules/protobufs/src/suki/pb/audit/audit.proto

export enum _suki_pb_audit_Event_Operation {
  READ = 0,
  UPSERT = 1,
  DELETE_IF_EXISTS = 2
}

export interface Event {
  operation?: _suki_pb_audit_Event_Operation | keyof typeof _suki_pb_audit_Event_Operation;
  data?: _suki_pb_audit_Data[];
  call_context?: _suki_pb_audit_CallContext | null;
}

export interface Event__Output {
  operation: keyof typeof _suki_pb_audit_Event_Operation;
  data: _suki_pb_audit_Data__Output[];
  call_context: _suki_pb_audit_CallContext__Output | null;
}
