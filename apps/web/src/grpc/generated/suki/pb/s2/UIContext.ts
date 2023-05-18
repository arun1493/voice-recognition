// Original file: node_modules/protobufs/src/suki/pb/s2/s2.proto

import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";
import type {
  SubsectionInfo as _suki_pb_s2_SubsectionInfo,
  SubsectionInfo__Output as _suki_pb_s2_SubsectionInfo__Output
} from "../../../suki/pb/s2/SubsectionInfo";

// Original file: node_modules/protobufs/src/suki/pb/s2/s2.proto

export enum _suki_pb_s2_UIContext_View {
  INVALID_VIEW = 0,
  NOTE = 1,
  SECTION_TRANSCRIPT = 2,
  WELCOME = 3,
  SCHEDULE = 4,
  PROFILE = 5,
  UNFINISHED_NOTES = 6,
  HELP = 7,
  SCRIPT = 8,
  DIAGNOSIS_VIEW = 9,
  SUBMISSION_PANEL = 10,
  SETTINGS = 11,
  WHAT_CAN_I_SAY = 12
}

export interface UIContext {
  view?: _suki_pb_s2_UIContext_View | keyof typeof _suki_pb_s2_UIContext_View;
  composition_id?: string;
  section_id?: string;
  session_id?: string;
  ui_context_time?: _google_protobuf_Timestamp | null;
  organization_id?: string;
  user_id?: string;
  patient_id?: string;
  user_agent?: string;
  subsections?: _suki_pb_s2_SubsectionInfo[];
  notetype_id?: string;
}

export interface UIContext__Output {
  view: keyof typeof _suki_pb_s2_UIContext_View;
  composition_id: string;
  section_id: string;
  session_id: string;
  ui_context_time: _google_protobuf_Timestamp__Output | null;
  organization_id: string;
  user_id: string;
  patient_id: string;
  user_agent: string;
  subsections: _suki_pb_s2_SubsectionInfo__Output[];
  notetype_id: string;
}
