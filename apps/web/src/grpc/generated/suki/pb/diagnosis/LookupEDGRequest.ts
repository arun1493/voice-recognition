// Original file: node_modules/protobufs/src/suki/pb/diagnosis/diagnosis.proto

export interface LookupEDGRequest {
  icd10_code?: string[];
  org_id?: string;
}

export interface LookupEDGRequest__Output {
  icd10_code: string[];
  org_id: string;
}
