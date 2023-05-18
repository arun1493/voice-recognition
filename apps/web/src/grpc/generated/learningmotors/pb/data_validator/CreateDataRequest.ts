// Original file: node_modules/protobufs/src/learningmotors/pb/data_validator/data_validator.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type {
  Data as _learningmotors_pb_data_validator_Data,
  Data__Output as _learningmotors_pb_data_validator_Data__Output
} from "../../../learningmotors/pb/data_validator/Data";

export interface CreateDataRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  data?: _learningmotors_pb_data_validator_Data | null;
}

export interface CreateDataRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  data: _learningmotors_pb_data_validator_Data__Output | null;
}
