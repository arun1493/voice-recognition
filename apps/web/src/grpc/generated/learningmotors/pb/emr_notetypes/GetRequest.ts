// Original file: node_modules/protobufs/src/learningmotors/pb/emr_notetypes/emr_notetypes.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type { SpecialtyType as _learningmotors_pb_emr_notetypes_SpecialtyType } from "../../../learningmotors/pb/emr_notetypes/SpecialtyType";

export interface GetRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  specialty_type?:
    | _learningmotors_pb_emr_notetypes_SpecialtyType
    | keyof typeof _learningmotors_pb_emr_notetypes_SpecialtyType;
}

export interface GetRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  specialty_type: keyof typeof _learningmotors_pb_emr_notetypes_SpecialtyType;
}
