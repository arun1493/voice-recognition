// Original file: node_modules/protobufs/src/learningmotors/pb/user/user.proto

import type {
  User as _learningmotors_pb_user_User,
  User__Output as _learningmotors_pb_user_User__Output
} from "../../../learningmotors/pb/user/User";
import type {
  UserConsent as _learningmotors_pb_user_UserConsent,
  UserConsent__Output as _learningmotors_pb_user_UserConsent__Output
} from "../../../learningmotors/pb/user/UserConsent";

export interface CreateUserRegistrationRequest {
  user?: _learningmotors_pb_user_User | null;
  practice_name?: string;
  user_consent?: _learningmotors_pb_user_UserConsent | null;
  affiliated_emr?: string;
  sku?: string;
}

export interface CreateUserRegistrationRequest__Output {
  user: _learningmotors_pb_user_User__Output | null;
  practice_name: string;
  user_consent: _learningmotors_pb_user_UserConsent__Output | null;
  affiliated_emr: string;
  sku: string;
}
