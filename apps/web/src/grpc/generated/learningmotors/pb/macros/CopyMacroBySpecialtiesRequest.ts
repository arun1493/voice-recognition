// Original file: node_modules/protobufs/src/learningmotors/pb/macros/macros.proto

import type { Specialty as _learningmotors_pb_user_Specialty } from "../../../learningmotors/pb/user/Specialty";

export interface CopyMacroBySpecialtiesRequest {
  specialties?: (_learningmotors_pb_user_Specialty | keyof typeof _learningmotors_pb_user_Specialty)[];
  organization_id?: string;
  user_id?: string;
  default_to_new_section_ids?: { [key: string]: string };
  specialtiesNAFlag?: boolean;
}

export interface CopyMacroBySpecialtiesRequest__Output {
  specialties: (keyof typeof _learningmotors_pb_user_Specialty)[];
  organization_id: string;
  user_id: string;
  default_to_new_section_ids: { [key: string]: string };
  specialtiesNAFlag: boolean;
}
