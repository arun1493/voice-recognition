// Original file: node_modules/protobufs/src/suki/pb/diagnosis/diagnosis.proto

export interface ExistingDiagnosis {
  snomed_description?: string;
  icd_code?: string;
  icd_description?: string;
  snomed_code?: string;
  problem_label?: string;
}

export interface ExistingDiagnosis__Output {
  snomed_description: string;
  icd_code: string;
  icd_description: string;
  snomed_code: string;
  problem_label: string;
}
