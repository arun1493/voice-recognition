// Original file: node_modules/protobufs/src/learningmotors/pb/macros/macros.proto

import type { Specialty as _learningmotors_pb_user_Specialty } from "../../../learningmotors/pb/user/Specialty";

export interface SyncOrganizationDefaultMacrosRequest {
  user_id?: string;
  org_id?: string;
  default_user_id?: string;
  specialties?: (_learningmotors_pb_user_Specialty | keyof typeof _learningmotors_pb_user_Specialty)[];
}

export interface SyncOrganizationDefaultMacrosRequest__Output {
  user_id: string;
  org_id: string;
  default_user_id: string;
  specialties: (keyof typeof _learningmotors_pb_user_Specialty)[];
}
