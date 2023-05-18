// Original file: node_modules/protobufs/src/learningmotors/pb/unique/unique.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type {
  Preference as _learningmotors_pb_unique_Preference,
  Preference__Output as _learningmotors_pb_unique_Preference__Output
} from "../../../learningmotors/pb/unique/Preference";

export interface UpdateRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  user_id?: string;
  preferences?: _learningmotors_pb_unique_Preference[];
}

export interface UpdateRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  user_id: string;
  preferences: _learningmotors_pb_unique_Preference__Output[];
}
