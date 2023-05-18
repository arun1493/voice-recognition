// Original file: node_modules/protobufs/src/suki/pb/emr/section_mapper/ms_emr_section_mapper.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../../learningmotors/pb/scope/Scope";

export interface DeleteRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  suki_section_ids?: string[];
}

export interface DeleteRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  suki_section_ids: string[];
}
