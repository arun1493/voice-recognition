// Original file: node_modules/protobufs/src/learningmotors/pb/data_validator/data_validator.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type { ValidationState as _learningmotors_pb_data_validator_ValidationState } from "../../../learningmotors/pb/data_validator/ValidationState";
import type { _learningmotors_pb_idl_Intent_Type } from "../../../learningmotors/pb/idl/Intent";

export interface GetDataRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  limit?: number;
  state?:
    | _learningmotors_pb_data_validator_ValidationState
    | keyof typeof _learningmotors_pb_data_validator_ValidationState;
  reviewer_user_id?: string;
  intent_type?: _learningmotors_pb_idl_Intent_Type | keyof typeof _learningmotors_pb_idl_Intent_Type;
}

export interface GetDataRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  limit: number;
  state: keyof typeof _learningmotors_pb_data_validator_ValidationState;
  reviewer_user_id: string;
  intent_type: keyof typeof _learningmotors_pb_idl_Intent_Type;
}
