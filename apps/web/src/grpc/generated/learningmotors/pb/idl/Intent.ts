// Original file: node_modules/protobufs/src/learningmotors/pb/idl/intent.proto

import type {
  Slot as _learningmotors_pb_idl_Slot,
  Slot__Output as _learningmotors_pb_idl_Slot__Output
} from "../../../learningmotors/pb/idl/Slot";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";
import type {
  Location as _learningmotors_pb_idl_Location,
  Location__Output as _learningmotors_pb_idl_Location__Output
} from "../../../learningmotors/pb/idl/Location";
import type {
  Context as _learningmotors_pb_Context,
  Context__Output as _learningmotors_pb_Context__Output
} from "../../../learningmotors/pb/Context";

// Original file: node_modules/protobufs/src/learningmotors/pb/idl/intent.proto

export enum _learningmotors_pb_idl_Intent_Source {
  STR_MATCH_IE = 0,
  NLP_IE = 1,
  IE_ML = 3,
  IE_ML_DARK = 4,
  SLOTMACHINE = 2,
  IE_AI = 5
}

// Original file: node_modules/protobufs/src/learningmotors/pb/idl/intent.proto

export enum _learningmotors_pb_idl_Intent_Type {
  UNKNOWN = 0,
  SECTION_DEPRECATED = 0,
  START_DICTATION = 1,
  STOP_DICTATION = 2,
  TRANSCRIPT = 3,
  AGENT_WAKEUP = 4,
  AGENT_CANCELLED = 5,
  AGENT_PROCESSING = 23,
  RESTART_STREAM = 6,
  SCHEDULE = 7,
  SUBMIT_NOTE = 8,
  DISMISS = 9,
  PROFILE = 10,
  CREATE_NOTE_FROM_TEMPLATE = 11,
  PRINT_NOTE = 13,
  CREATE_NOTE = 14,
  MACRO = 15,
  UNFINISHED_NOTES = 18,
  GO_BACK = 19,
  CREATE_NOTE_FOR_PATIENT = 20,
  CREATE_NOTE_FROM_NOTETYPE_FOR_PATIENT = 21,
  SCRIPT_CHANGE = 22,
  DELETE_NOTE = 24,
  COPY_FORWARD = 25,
  SECTION = 26,
  GO_HOME = 27,
  SHOW_SCRIPTS = 28,
  LOG_OUT = 29,
  HELP = 30,
  ADD_PATIENT_TO_NOTE = 31,
  SHOW_MEDICATIONS = 32,
  ORDER_5MG = 33,
  ORDER_10MG = 34,
  ADD_DIAGNOSIS = 35,
  NEW_LINE = 12,
  XRAY = 100,
  VEIN_MAPPING = 101,
  URINE_CULTURE = 102,
  ABDOMINAL_CT_SCAN = 103,
  HEMOGLOBIN_A1C = 104,
  PRESCRIBE_NICODERM = 105,
  NVOQ_FAILED_CONNECTION = 106,
  UNDO = 107,
  DELETE_THIS = 108,
  GOTO_HOME = 109,
  GOTO_SETTINGS = 110,
  GOTO_LIST = 111,
  GOTO_NOTETYPES = 112,
  GOTO_PATIENTS = 113,
  SHOW_ALLERGIES = 114,
  SHOW_LABPANEL = 115,
  SHOW_VITALS = 116,
  SHOW_MEDICALHISTORY = 117,
  SHOW_SURGICALHISTORY = 118,
  NEW_PARAGRAPH = 119,
  WHAT_CAN_I_SAY = 120,
  TRANSFER_NOTE = 121,
  TRANSFER_SECTION = 122
}

export interface Intent {
  type?: _learningmotors_pb_idl_Intent_Type | keyof typeof _learningmotors_pb_idl_Intent_Type;
  input?: string;
  slots?: _learningmotors_pb_idl_Slot[];
  source?: _learningmotors_pb_idl_Intent_Source | keyof typeof _learningmotors_pb_idl_Intent_Source;
  is_finalized?: boolean;
  processors?: (_learningmotors_pb_idl_Intent_Source | keyof typeof _learningmotors_pb_idl_Intent_Source)[];
  created_at?: _google_protobuf_Timestamp | null;
  loc?: _learningmotors_pb_idl_Location | null;
  updated_ui_context?: _learningmotors_pb_Context | null;
}

export interface Intent__Output {
  type: keyof typeof _learningmotors_pb_idl_Intent_Type;
  input: string;
  slots: _learningmotors_pb_idl_Slot__Output[];
  source: keyof typeof _learningmotors_pb_idl_Intent_Source;
  is_finalized: boolean;
  processors: (keyof typeof _learningmotors_pb_idl_Intent_Source)[];
  created_at: _google_protobuf_Timestamp__Output | null;
  loc: _learningmotors_pb_idl_Location__Output | null;
  updated_ui_context: _learningmotors_pb_Context__Output | null;
}
