// Original file: node_modules/protobufs/src/learningmotors/pb/composer/sections.proto

import type {
  Diagnosis as _suki_pb_diagnosis_Diagnosis,
  Diagnosis__Output as _suki_pb_diagnosis_Diagnosis__Output
} from "../../../suki/pb/diagnosis/Diagnosis";
import type {
  DetailedDisplay as _learningmotors_pb_composer_DetailedDisplay,
  DetailedDisplay__Output as _learningmotors_pb_composer_DetailedDisplay__Output
} from "../../../learningmotors/pb/composer/DetailedDisplay";

// Original file: node_modules/protobufs/src/learningmotors/pb/composer/sections.proto

export enum _learningmotors_pb_composer_DiagnosisEntry_ConfirmStatus {
  UNKNOWN = 0,
  UNCONFIRMED = 1,
  CONFIRMED = 2
}

export interface DiagnosisEntry {
  diagnosis?: _suki_pb_diagnosis_Diagnosis | null;
  detailed_display?: _learningmotors_pb_composer_DetailedDisplay | null;
  confirm_status?:
    | _learningmotors_pb_composer_DiagnosisEntry_ConfirmStatus
    | keyof typeof _learningmotors_pb_composer_DiagnosisEntry_ConfirmStatus;
}

export interface DiagnosisEntry__Output {
  diagnosis: _suki_pb_diagnosis_Diagnosis__Output | null;
  detailed_display: _learningmotors_pb_composer_DetailedDisplay__Output | null;
  confirm_status: keyof typeof _learningmotors_pb_composer_DiagnosisEntry_ConfirmStatus;
}
