// Original file: node_modules/protobufs/src/learningmotors/pb/emr_scheduler/emr_scheduler.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type {
  User as _learningmotors_pb_emraccounts_User,
  User__Output as _learningmotors_pb_emraccounts_User__Output
} from "../../../learningmotors/pb/emraccounts/User";

export interface CheckScheduleHealthRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  emr_users?: _learningmotors_pb_emraccounts_User[];
  days_before_now?: number;
  days_after_now?: number;
}

export interface CheckScheduleHealthRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  emr_users: _learningmotors_pb_emraccounts_User__Output[];
  days_before_now: number;
  days_after_now: number;
}
