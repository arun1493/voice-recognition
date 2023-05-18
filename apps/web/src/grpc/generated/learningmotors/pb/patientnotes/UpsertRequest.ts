// Original file: node_modules/protobufs/src/learningmotors/pb/patientnotes/patientnotes.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type {
  VersionedNote as _learningmotors_pb_patientnotes_VersionedNote,
  VersionedNote__Output as _learningmotors_pb_patientnotes_VersionedNote__Output
} from "../../../learningmotors/pb/patientnotes/VersionedNote";

export interface UpsertRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  versioned_note?: _learningmotors_pb_patientnotes_VersionedNote | null;
}

export interface UpsertRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  versioned_note: _learningmotors_pb_patientnotes_VersionedNote__Output | null;
}
