// Original file: node_modules/protobufs/src/learningmotors/pb/sectionmapper/sectionmapper.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";

export interface UpsertRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  map?: { [key: string]: string };
}

export interface UpsertRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  map: { [key: string]: string };
}
