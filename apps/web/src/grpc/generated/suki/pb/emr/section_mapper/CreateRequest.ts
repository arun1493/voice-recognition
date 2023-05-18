// Original file: node_modules/protobufs/src/suki/pb/emr/section_mapper/ms_emr_section_mapper.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../../learningmotors/pb/scope/Scope";
import type {
  Mapping as _suki_pb_emr_section_mapper_Mapping,
  Mapping__Output as _suki_pb_emr_section_mapper_Mapping__Output
} from "../../../../suki/pb/emr/section_mapper/Mapping";

export interface CreateRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  mappings?: _suki_pb_emr_section_mapper_Mapping[];
}

export interface CreateRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  mappings: _suki_pb_emr_section_mapper_Mapping__Output[];
}
