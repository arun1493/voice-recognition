// Original file: node_modules/protobufs/src/learningmotors/pb/user/user.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";

export interface GetPendingRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  ids?: string[];
  emails?: string[];
}

export interface GetPendingRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  ids: string[];
  emails: string[];
}
