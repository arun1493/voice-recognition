// Original file: node_modules/protobufs/src/learningmotors/pb/composer/sections.proto

import type {
  Cursor as _learningmotors_pb_composer_Cursor,
  Cursor__Output as _learningmotors_pb_composer_Cursor__Output
} from "../../../learningmotors/pb/composer/Cursor";
import type {
  DiagnosisEntry as _learningmotors_pb_composer_DiagnosisEntry,
  DiagnosisEntry__Output as _learningmotors_pb_composer_DiagnosisEntry__Output
} from "../../../learningmotors/pb/composer/DiagnosisEntry";

// Original file: node_modules/protobufs/src/learningmotors/pb/composer/sections.proto

export enum _learningmotors_pb_composer_Section_Status {
  DEFAULT = 0,
  CREATED = 1,
  ASR = 2,
  USER_EDITS = 3,
  READY_FOR_PROCESSING = 4,
  PROCESSED_BY_AI = 5,
  SCRIBE_EDITS = 6,
  REVIEWED = 7,
  EMR = 8
}

export interface Section {
  id?: string;
  name?: string;
  navigation_keywords?: string[];
  content?: string;
  status?: _learningmotors_pb_composer_Section_Status | keyof typeof _learningmotors_pb_composer_Section_Status;
  cursors?: _learningmotors_pb_composer_Cursor[];
  hash?: string;
  diagnosis_entry?: _learningmotors_pb_composer_DiagnosisEntry | null;
  pbc_section_flag?: boolean;
}

export interface Section__Output {
  id: string;
  name: string;
  navigation_keywords: string[];
  content: string;
  status: keyof typeof _learningmotors_pb_composer_Section_Status;
  cursors: _learningmotors_pb_composer_Cursor__Output[];
  hash: string;
  diagnosis_entry: _learningmotors_pb_composer_DiagnosisEntry__Output | null;
  pbc_section_flag: boolean;
}
