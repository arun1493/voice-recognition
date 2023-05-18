// Original file: node_modules/protobufs/src/learningmotors/pb/notetypes/notetypes.proto

import type { Specialty as _learningmotors_pb_user_Specialty } from "../../../learningmotors/pb/user/Specialty";
import type { EMRSecondaryType as _learningmotors_pb_emrtypes_EMRSecondaryType } from "../../../learningmotors/pb/emrtypes/EMRSecondaryType";

export interface CopyBySpecialtiesRequest {
  specialties?: (_learningmotors_pb_user_Specialty | keyof typeof _learningmotors_pb_user_Specialty)[];
  organization_id?: string;
  user_id?: string;
  emr?: _learningmotors_pb_emrtypes_EMRSecondaryType | keyof typeof _learningmotors_pb_emrtypes_EMRSecondaryType;
}

export interface CopyBySpecialtiesRequest__Output {
  specialties: (keyof typeof _learningmotors_pb_user_Specialty)[];
  organization_id: string;
  user_id: string;
  emr: keyof typeof _learningmotors_pb_emrtypes_EMRSecondaryType;
}
