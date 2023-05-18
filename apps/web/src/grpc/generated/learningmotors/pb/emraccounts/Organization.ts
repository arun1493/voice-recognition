// Original file: node_modules/protobufs/src/learningmotors/pb/emraccounts/emraccounts.proto

import type { EMRType as _learningmotors_pb_emrtypes_EMRType } from "../../../learningmotors/pb/emrtypes/EMRType";
import type { EMRSecondaryType as _learningmotors_pb_emrtypes_EMRSecondaryType } from "../../../learningmotors/pb/emrtypes/EMRSecondaryType";
import type {
  Capabilities as _learningmotors_pb_emraccounts_Capabilities,
  Capabilities__Output as _learningmotors_pb_emraccounts_Capabilities__Output
} from "../../../learningmotors/pb/emraccounts/Capabilities";

export interface Organization {
  suki_organization_id?: string;
  emr_organization_id?: string;
  emr_type?: _learningmotors_pb_emrtypes_EMRType | keyof typeof _learningmotors_pb_emrtypes_EMRType;
  emr_organization_source_id?: string;
  emr_secondary_type?:
    | _learningmotors_pb_emrtypes_EMRSecondaryType
    | keyof typeof _learningmotors_pb_emrtypes_EMRSecondaryType;
  capabilities?: _learningmotors_pb_emraccounts_Capabilities | null;
  configurations?: { [key: string]: string };
  timezone?: string;
}

export interface Organization__Output {
  suki_organization_id: string;
  emr_organization_id: string;
  emr_type: keyof typeof _learningmotors_pb_emrtypes_EMRType;
  emr_organization_source_id: string;
  emr_secondary_type: keyof typeof _learningmotors_pb_emrtypes_EMRSecondaryType;
  capabilities: _learningmotors_pb_emraccounts_Capabilities__Output | null;
  configurations: { [key: string]: string };
  timezone: string;
}
