// Original file: node_modules/protobufs/src/suki/pb/patientcharts/patientcharts.proto

export interface GetEncounterDiagnosesRequest {
  emr_encounter_id?: string;
  organization_id?: string;
}

export interface GetEncounterDiagnosesRequest__Output {
  emr_encounter_id: string;
  organization_id: string;
}
