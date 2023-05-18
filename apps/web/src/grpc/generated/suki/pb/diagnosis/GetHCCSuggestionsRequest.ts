// Original file: node_modules/protobufs/src/suki/pb/diagnosis/diagnosis.proto

import type {
  ExistingDiagnosis as _suki_pb_diagnosis_ExistingDiagnosis,
  ExistingDiagnosis__Output as _suki_pb_diagnosis_ExistingDiagnosis__Output
} from "../../../suki/pb/diagnosis/ExistingDiagnosis";
import type { Specialty as _learningmotors_pb_user_Specialty } from "../../../learningmotors/pb/user/Specialty";

export interface GetHCCSuggestionsRequest {
  patient_id?: string;
  emr_encounter_id?: string;
  existing_diagnoses?: _suki_pb_diagnosis_ExistingDiagnosis[];
  specialties?: (_learningmotors_pb_user_Specialty | keyof typeof _learningmotors_pb_user_Specialty)[];
}

export interface GetHCCSuggestionsRequest__Output {
  patient_id: string;
  emr_encounter_id: string;
  existing_diagnoses: _suki_pb_diagnosis_ExistingDiagnosis__Output[];
  specialties: (keyof typeof _learningmotors_pb_user_Specialty)[];
}
