// Original file: node_modules/protobufs/src/suki/pb/patientcharts/patientcharts.proto

import type {
  SectionS2 as _learningmotors_pb_composer_SectionS2,
  SectionS2__Output as _learningmotors_pb_composer_SectionS2__Output
} from "../../../learningmotors/pb/composer/SectionS2";

// Original file: node_modules/protobufs/src/suki/pb/patientcharts/patientcharts.proto

export enum _suki_pb_patientcharts_GetEncounterDiagnosesSectionsResponse_Status {
  SUCCESS = 0,
  NO_ENCOUNTER = 1
}

export interface GetEncounterDiagnosesSectionsResponse {
  sections?: _learningmotors_pb_composer_SectionS2[];
  status?:
    | _suki_pb_patientcharts_GetEncounterDiagnosesSectionsResponse_Status
    | keyof typeof _suki_pb_patientcharts_GetEncounterDiagnosesSectionsResponse_Status;
}

export interface GetEncounterDiagnosesSectionsResponse__Output {
  sections: _learningmotors_pb_composer_SectionS2__Output[];
  status: keyof typeof _suki_pb_patientcharts_GetEncounterDiagnosesSectionsResponse_Status;
}
