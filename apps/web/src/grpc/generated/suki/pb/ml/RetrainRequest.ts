// Original file: node_modules/protobufs/src/suki/pb/ml/ms_online.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type { SystemType as _suki_pb_ml_SystemType } from "../../../suki/pb/ml/SystemType";

export interface RetrainRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  system_type?: _suki_pb_ml_SystemType | keyof typeof _suki_pb_ml_SystemType;
}

export interface RetrainRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  system_type: keyof typeof _suki_pb_ml_SystemType;
}
