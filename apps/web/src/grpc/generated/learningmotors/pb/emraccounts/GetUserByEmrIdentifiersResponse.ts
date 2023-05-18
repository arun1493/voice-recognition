// Original file: node_modules/protobufs/src/learningmotors/pb/emraccounts/emraccounts.proto

import type {
  User as _learningmotors_pb_emraccounts_User,
  User__Output as _learningmotors_pb_emraccounts_User__Output
} from "../../../learningmotors/pb/emraccounts/User";
import type {
  Organization as _learningmotors_pb_emraccounts_Organization,
  Organization__Output as _learningmotors_pb_emraccounts_Organization__Output
} from "../../../learningmotors/pb/emraccounts/Organization";

export interface GetUserByEmrIdentifiersResponse {
  user?: _learningmotors_pb_emraccounts_User | null;
  organization?: _learningmotors_pb_emraccounts_Organization | null;
}

export interface GetUserByEmrIdentifiersResponse__Output {
  user: _learningmotors_pb_emraccounts_User__Output | null;
  organization: _learningmotors_pb_emraccounts_Organization__Output | null;
}
