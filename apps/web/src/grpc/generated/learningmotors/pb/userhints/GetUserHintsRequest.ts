// Original file: node_modules/protobufs/src/learningmotors/pb/userhints/userhints.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";

export interface GetUserHintsRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  ids?: string[];
  user_id?: string;
}

export interface GetUserHintsRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  ids: string[];
  user_id: string;
}
