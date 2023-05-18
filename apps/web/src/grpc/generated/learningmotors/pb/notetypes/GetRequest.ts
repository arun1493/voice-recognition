// Original file: node_modules/protobufs/src/learningmotors/pb/notetypes/notetypes.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type { Specialty as _learningmotors_pb_user_Specialty } from "../../../learningmotors/pb/user/Specialty";

export interface GetRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  ids?: string[];
  user_id?: string;
  specialties?: (_learningmotors_pb_user_Specialty | keyof typeof _learningmotors_pb_user_Specialty)[];
  specialtiesReqFlag?: boolean;
  section_names?: string[];
  include_hidden?: boolean;
}

export interface GetRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  ids: string[];
  user_id: string;
  specialties: (keyof typeof _learningmotors_pb_user_Specialty)[];
  specialtiesReqFlag: boolean;
  section_names: string[];
  include_hidden: boolean;
}
