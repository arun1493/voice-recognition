// Original file: node_modules/protobufs/src/learningmotors/pb/user/user.proto

import type {
  User as _learningmotors_pb_user_User,
  User__Output as _learningmotors_pb_user_User__Output
} from "../../../learningmotors/pb/user/User";
import type { EMRSecondaryType as _learningmotors_pb_emrtypes_EMRSecondaryType } from "../../../learningmotors/pb/emrtypes/EMRSecondaryType";

export interface RegisterMarketplaceUserRequest {
  user?: _learningmotors_pb_user_User | null;
  account_id?: string;
  practice_name?: string;
  password?: string;
  emr?: _learningmotors_pb_emrtypes_EMRSecondaryType | keyof typeof _learningmotors_pb_emrtypes_EMRSecondaryType;
  affiliated_emr?: string;
}

export interface RegisterMarketplaceUserRequest__Output {
  user: _learningmotors_pb_user_User__Output | null;
  account_id: string;
  practice_name: string;
  password: string;
  emr: keyof typeof _learningmotors_pb_emrtypes_EMRSecondaryType;
  affiliated_emr: string;
}
