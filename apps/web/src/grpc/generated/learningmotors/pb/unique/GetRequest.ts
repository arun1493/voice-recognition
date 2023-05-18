// Original file: node_modules/protobufs/src/learningmotors/pb/unique/unique.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";

export interface GetRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  user_id?: string;
  preference_ids?: string[];
}

export interface GetRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  user_id: string;
  preference_ids: string[];
}
