// Original file: node_modules/protobufs/src/learningmotors/pb/emraccounts/emraccounts.proto

import type { EMRType as _learningmotors_pb_emrtypes_EMRType } from "../../../learningmotors/pb/emrtypes/EMRType";

export interface GetAllOrganizationsRequest {
  emr_type?: _learningmotors_pb_emrtypes_EMRType | keyof typeof _learningmotors_pb_emrtypes_EMRType;
}

export interface GetAllOrganizationsRequest__Output {
  emr_type: keyof typeof _learningmotors_pb_emrtypes_EMRType;
}
