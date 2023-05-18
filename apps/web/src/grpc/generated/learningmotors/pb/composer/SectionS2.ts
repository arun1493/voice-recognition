// Original file: node_modules/protobufs/src/learningmotors/pb/composer/section_s2.proto

import type {
  SectionContent as _SectionContent,
  SectionContent__Output as _SectionContent__Output
} from "../../../SectionContent";
import type { _learningmotors_pb_composer_Section_Status } from "../../../learningmotors/pb/composer/Section";
import type {
  Cursor as _learningmotors_pb_composer_Cursor,
  Cursor__Output as _learningmotors_pb_composer_Cursor__Output
} from "../../../learningmotors/pb/composer/Cursor";
import type {
  DiagnosisEntry as _learningmotors_pb_composer_DiagnosisEntry,
  DiagnosisEntry__Output as _learningmotors_pb_composer_DiagnosisEntry__Output
} from "../../../learningmotors/pb/composer/DiagnosisEntry";
import type {
  Footer as _learningmotors_pb_composer_Footer,
  Footer__Output as _learningmotors_pb_composer_Footer__Output
} from "../../../learningmotors/pb/composer/Footer";

// Original file: node_modules/protobufs/src/learningmotors/pb/composer/section_s2.proto

export enum _learningmotors_pb_composer_SectionS2_Ops_Status_Flag {
  INVALID = 0,
  NO_OPS_PROCESSING_REQUIRED = 1,
  NEEDS_OPS_PROCESSING = 2,
  OPS_PROCESSED = 3
}

// Original file: node_modules/protobufs/src/learningmotors/pb/composer/section_s2.proto

export enum _learningmotors_pb_composer_SectionS2_SectionUpdateType {
  WHOLE = 0,
  ONLY_DIAGNOSIS = 1
}

export interface SectionS2 {
  id?: string;
  name?: string;
  navigation_keywords?: string[];
  content_s2?: _SectionContent | null;
  status?: _learningmotors_pb_composer_Section_Status | keyof typeof _learningmotors_pb_composer_Section_Status;
  cursors?: _learningmotors_pb_composer_Cursor[];
  hash?: string;
  diagnosis_entry?: _learningmotors_pb_composer_DiagnosisEntry | null;
  pbc_section_flag?: boolean;
  plain_text?: string;
  cursor_position?: number;
  section_index?: number;
  subsection_index?: number;
  cursor_position_name?: number;
  edit_location?: number;
  update_type?:
    | _learningmotors_pb_composer_SectionS2_SectionUpdateType
    | keyof typeof _learningmotors_pb_composer_SectionS2_SectionUpdateType;
  ops_status_flag?:
    | _learningmotors_pb_composer_SectionS2_Ops_Status_Flag
    | keyof typeof _learningmotors_pb_composer_SectionS2_Ops_Status_Flag;
  number_of_cursor_events?: number;
  cursor_end_index?: number;
  footer?: _learningmotors_pb_composer_Footer | null;
  dictation_tag?: string;
  read_only?: boolean;
}

export interface SectionS2__Output {
  id: string;
  name: string;
  navigation_keywords: string[];
  content_s2: _SectionContent__Output | null;
  status: keyof typeof _learningmotors_pb_composer_Section_Status;
  cursors: _learningmotors_pb_composer_Cursor__Output[];
  hash: string;
  diagnosis_entry: _learningmotors_pb_composer_DiagnosisEntry__Output | null;
  pbc_section_flag: boolean;
  plain_text: string;
  cursor_position: number;
  section_index: number;
  subsection_index: number;
  cursor_position_name: number;
  edit_location: number;
  update_type: keyof typeof _learningmotors_pb_composer_SectionS2_SectionUpdateType;
  ops_status_flag: keyof typeof _learningmotors_pb_composer_SectionS2_Ops_Status_Flag;
  number_of_cursor_events: number;
  cursor_end_index: number;
  footer: _learningmotors_pb_composer_Footer__Output | null;
  dictation_tag: string;
  read_only: boolean;
}
