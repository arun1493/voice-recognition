// Original file: node_modules/protobufs/src/learningmotors/pb/user/user.proto

import type { RegisterStage as _learningmotors_pb_user_RegisterStage } from "../../../learningmotors/pb/user/RegisterStage";
import type { SubscriptionStatus as _learningmotors_pb_user_SubscriptionStatus } from "../../../learningmotors/pb/user/SubscriptionStatus";

export interface UpdateRegistrationStageRequest {
  id?: string;
  email?: string;
  registration_stage?: _learningmotors_pb_user_RegisterStage | keyof typeof _learningmotors_pb_user_RegisterStage;
  subscription_status?:
    | _learningmotors_pb_user_SubscriptionStatus
    | keyof typeof _learningmotors_pb_user_SubscriptionStatus;
}

export interface UpdateRegistrationStageRequest__Output {
  id: string;
  email: string;
  registration_stage: keyof typeof _learningmotors_pb_user_RegisterStage;
  subscription_status: keyof typeof _learningmotors_pb_user_SubscriptionStatus;
}
