// Original file: node_modules/protobufs/src/suki/pb/diagnosis/diagnosis.proto

import type {
  ICD10EDGMapping as _suki_pb_diagnosis_ICD10EDGMapping,
  ICD10EDGMapping__Output as _suki_pb_diagnosis_ICD10EDGMapping__Output
} from "../../../suki/pb/diagnosis/ICD10EDGMapping";

export interface LookupEDGResponse {
  ICD10EDGMappings?: _suki_pb_diagnosis_ICD10EDGMapping[];
}

export interface LookupEDGResponse__Output {
  ICD10EDGMappings: _suki_pb_diagnosis_ICD10EDGMapping__Output[];
}
