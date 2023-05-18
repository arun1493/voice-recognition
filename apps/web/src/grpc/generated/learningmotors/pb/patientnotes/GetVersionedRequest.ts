// Original file: node_modules/protobufs/src/learningmotors/pb/patientnotes/patientnotes.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";

export interface GetVersionedRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  id?: string;
  id_is_ambiguous?: boolean;
}

export interface GetVersionedRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  id: string;
  id_is_ambiguous: boolean;
}
