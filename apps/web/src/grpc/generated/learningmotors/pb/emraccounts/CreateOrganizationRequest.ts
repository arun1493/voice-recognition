// Original file: node_modules/protobufs/src/learningmotors/pb/emraccounts/emraccounts.proto

import type {
  Organization as _learningmotors_pb_emraccounts_Organization,
  Organization__Output as _learningmotors_pb_emraccounts_Organization__Output
} from "../../../learningmotors/pb/emraccounts/Organization";
import type {
  APICredentials as _learningmotors_pb_emraccounts_APICredentials,
  APICredentials__Output as _learningmotors_pb_emraccounts_APICredentials__Output
} from "../../../learningmotors/pb/emraccounts/APICredentials";

export interface CreateOrganizationRequest {
  organization?: _learningmotors_pb_emraccounts_Organization | null;
  api_credentials?: _learningmotors_pb_emraccounts_APICredentials | null;
}

export interface CreateOrganizationRequest__Output {
  organization: _learningmotors_pb_emraccounts_Organization__Output | null;
  api_credentials: _learningmotors_pb_emraccounts_APICredentials__Output | null;
}
