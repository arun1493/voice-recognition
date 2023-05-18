// Original file: node_modules/protobufs/src/suki/pb/obliviate/obliviate.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";

export interface DeleteUserRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  user_ids?: string[];
  purge?: boolean;
}

export interface DeleteUserRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  user_ids: string[];
  purge: boolean;
}
