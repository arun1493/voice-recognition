// Original file: node_modules/protobufs/src/learningmotors/pb/macros/macros.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type {
  PageRequest as _learningmotors_pb_PageRequest,
  PageRequest__Output as _learningmotors_pb_PageRequest__Output
} from "../../../learningmotors/pb/PageRequest";
import type { Specialty as _learningmotors_pb_user_Specialty } from "../../../learningmotors/pb/user/Specialty";

export interface GetMacrosRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  ids?: string[];
  user_id?: string;
  include_fields?: boolean;
  name?: string;
  page_request?: _learningmotors_pb_PageRequest | null;
  specialties?: (_learningmotors_pb_user_Specialty | keyof typeof _learningmotors_pb_user_Specialty)[];
  specialtiesReqFlag?: boolean;
}

export interface GetMacrosRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  ids: string[];
  user_id: string;
  include_fields: boolean;
  name: string;
  page_request: _learningmotors_pb_PageRequest__Output | null;
  specialties: (keyof typeof _learningmotors_pb_user_Specialty)[];
  specialtiesReqFlag: boolean;
}
