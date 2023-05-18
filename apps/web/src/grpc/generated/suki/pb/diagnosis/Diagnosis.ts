// Original file: node_modules/protobufs/src/suki/pb/diagnosis/diagnosis.proto

import type { SuggestionType as _suki_pb_diagnosis_SuggestionType } from "../../../suki/pb/diagnosis/SuggestionType";

export interface Diagnosis {
  icd_code?: string;
  icd_description?: string;
  snomed_code?: string;
  billable?: boolean;
  snomed_description?: string;
  hcc_code?: string;
  panel_ranking?: number;
  suggestion_type?: _suki_pb_diagnosis_SuggestionType | keyof typeof _suki_pb_diagnosis_SuggestionType;
  problem_label?: string;
}

export interface Diagnosis__Output {
  icd_code: string;
  icd_description: string;
  snomed_code: string;
  billable: boolean;
  snomed_description: string;
  hcc_code: string;
  panel_ranking: number;
  suggestion_type: keyof typeof _suki_pb_diagnosis_SuggestionType;
  problem_label: string;
}
