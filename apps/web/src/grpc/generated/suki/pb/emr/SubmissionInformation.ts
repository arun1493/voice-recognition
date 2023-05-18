// Original file: node_modules/protobufs/src/suki/pb/emr/submission.proto

import type { Destination as _suki_pb_emr_Destination } from "../../../suki/pb/emr/Destination";
import type { EMRType as _learningmotors_pb_emrtypes_EMRType } from "../../../learningmotors/pb/emrtypes/EMRType";
import type { EMRSecondaryType as _learningmotors_pb_emrtypes_EMRSecondaryType } from "../../../learningmotors/pb/emrtypes/EMRSecondaryType";

export interface SubmissionInformation {
  destinations?: (_suki_pb_emr_Destination | keyof typeof _suki_pb_emr_Destination)[];
  try_all_destinations?: boolean;
  emr_type?: _learningmotors_pb_emrtypes_EMRType | keyof typeof _learningmotors_pb_emrtypes_EMRType;
  emr_secondary_type?:
    | _learningmotors_pb_emrtypes_EMRSecondaryType
    | keyof typeof _learningmotors_pb_emrtypes_EMRSecondaryType;
}

export interface SubmissionInformation__Output {
  destinations: (keyof typeof _suki_pb_emr_Destination)[];
  try_all_destinations: boolean;
  emr_type: keyof typeof _learningmotors_pb_emrtypes_EMRType;
  emr_secondary_type: keyof typeof _learningmotors_pb_emrtypes_EMRSecondaryType;
}
