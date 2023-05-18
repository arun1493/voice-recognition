// Original file: node_modules/protobufs/src/suki/pb/audit/audit.proto

import type {
  Machine as _suki_pb_audit_Machine,
  Machine__Output as _suki_pb_audit_Machine__Output
} from "../../../suki/pb/audit/Machine";
import type {
  Method as _suki_pb_audit_Method,
  Method__Output as _suki_pb_audit_Method__Output
} from "../../../suki/pb/audit/Method";

export interface CallContext {
  caller?: _suki_pb_audit_Machine | null;
  callee?: _suki_pb_audit_Machine | null;
  method?: _suki_pb_audit_Method | null;
}

export interface CallContext__Output {
  caller: _suki_pb_audit_Machine__Output | null;
  callee: _suki_pb_audit_Machine__Output | null;
  method: _suki_pb_audit_Method__Output | null;
}
