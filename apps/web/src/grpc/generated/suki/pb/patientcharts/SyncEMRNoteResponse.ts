// Original file: node_modules/protobufs/src/suki/pb/patientcharts/patientcharts.proto

import type {
  SectionContent as _SectionContent,
  SectionContent__Output as _SectionContent__Output
} from "../../../SectionContent";

// Original file: node_modules/protobufs/src/suki/pb/patientcharts/patientcharts.proto

export enum _suki_pb_patientcharts_SyncEMRNoteResponse_Status {
  NO_UPDATE = 0,
  UPDATE = 1,
  ERROR = 2,
  NO_ENCOUNTER = 3,
  NO_EMR_NOTE = 4,
  UNSUPPORTED = 5
}

export interface SyncEMRNoteResponse {
  suki_section_id?: string;
  section_content?: _SectionContent | null;
  status?:
    | _suki_pb_patientcharts_SyncEMRNoteResponse_Status
    | keyof typeof _suki_pb_patientcharts_SyncEMRNoteResponse_Status;
  error?: string;
  suki_section_ids?: string[];
  sections_content?: _SectionContent[];
}

export interface SyncEMRNoteResponse__Output {
  suki_section_id: string;
  section_content: _SectionContent__Output | null;
  status: keyof typeof _suki_pb_patientcharts_SyncEMRNoteResponse_Status;
  error: string;
  suki_section_ids: string[];
  sections_content: _SectionContent__Output[];
}
