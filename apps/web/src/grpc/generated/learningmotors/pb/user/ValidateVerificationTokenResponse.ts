// Original file: node_modules/protobufs/src/learningmotors/pb/user/user.proto

import type {
  User as _learningmotors_pb_user_User,
  User__Output as _learningmotors_pb_user_User__Output
} from "../../../learningmotors/pb/user/User";
import type { RegisterStage as _learningmotors_pb_user_RegisterStage } from "../../../learningmotors/pb/user/RegisterStage";

export interface ValidateVerificationTokenResponse {
  user?: _learningmotors_pb_user_User | null;
  practice_name?: string;
  register_stage?: _learningmotors_pb_user_RegisterStage | keyof typeof _learningmotors_pb_user_RegisterStage;
  suki_user_id?: string;
  affiliated_emr?: string;
  sku?: string;
}

export interface ValidateVerificationTokenResponse__Output {
  user: _learningmotors_pb_user_User__Output | null;
  practice_name: string;
  register_stage: keyof typeof _learningmotors_pb_user_RegisterStage;
  suki_user_id: string;
  affiliated_emr: string;
  sku: string;
}
