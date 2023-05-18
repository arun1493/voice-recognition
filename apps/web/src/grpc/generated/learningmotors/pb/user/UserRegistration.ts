// Original file: node_modules/protobufs/src/learningmotors/pb/user/user.proto

import type {
  User as _learningmotors_pb_user_User,
  User__Output as _learningmotors_pb_user_User__Output
} from "../../../learningmotors/pb/user/User";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";
import type { RegisterStage as _learningmotors_pb_user_RegisterStage } from "../../../learningmotors/pb/user/RegisterStage";
import type { SubscriptionStatus as _learningmotors_pb_user_SubscriptionStatus } from "../../../learningmotors/pb/user/SubscriptionStatus";

export interface UserRegistration {
  user?: _learningmotors_pb_user_User | null;
  invited_at?: _google_protobuf_Timestamp | null;
  register_stage?: _learningmotors_pb_user_RegisterStage | keyof typeof _learningmotors_pb_user_RegisterStage;
  suki_user_id?: string;
  id?: string;
  sku?: string;
  subscription_status?:
    | _learningmotors_pb_user_SubscriptionStatus
    | keyof typeof _learningmotors_pb_user_SubscriptionStatus;
}

export interface UserRegistration__Output {
  user: _learningmotors_pb_user_User__Output | null;
  invited_at: _google_protobuf_Timestamp__Output | null;
  register_stage: keyof typeof _learningmotors_pb_user_RegisterStage;
  suki_user_id: string;
  id: string;
  sku: string;
  subscription_status: keyof typeof _learningmotors_pb_user_SubscriptionStatus;
}
