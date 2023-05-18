// Original file: node_modules/protobufs/src/learningmotors/pb/idl/slot.proto

import type {
  Section as _learningmotors_pb_composer_Section,
  Section__Output as _learningmotors_pb_composer_Section__Output
} from "../../../learningmotors/pb/composer/Section";
import type {
  Patient as _learningmotors_pb_patients_Patient,
  Patient__Output as _learningmotors_pb_patients_Patient__Output
} from "../../../learningmotors/pb/patients/Patient";
import type {
  NoteType as _learningmotors_pb_notetypes_NoteType,
  NoteType__Output as _learningmotors_pb_notetypes_NoteType__Output
} from "../../../learningmotors/pb/notetypes/NoteType";
import type {
  Macro as _learningmotors_pb_macros_Macro,
  Macro__Output as _learningmotors_pb_macros_Macro__Output
} from "../../../learningmotors/pb/macros/Macro";
import type {
  Transcript as _learningmotors_pb_asr_Transcript,
  Transcript__Output as _learningmotors_pb_asr_Transcript__Output
} from "../../../learningmotors/pb/asr/Transcript";
import type {
  Location as _learningmotors_pb_idl_Location,
  Location__Output as _learningmotors_pb_idl_Location__Output
} from "../../../learningmotors/pb/idl/Location";

export interface SlotValue {
  resolved?: boolean;
  str_value?: string;
  section?: _learningmotors_pb_composer_Section | null;
  patient?: _learningmotors_pb_patients_Patient | null;
  notetype?: _learningmotors_pb_notetypes_NoteType | null;
  macro?: _learningmotors_pb_macros_Macro | null;
  transcript?: _learningmotors_pb_asr_Transcript | null;
  loc?: _learningmotors_pb_idl_Location | null;
  value?: "str_value" | "section" | "patient" | "notetype" | "macro" | "transcript";
}

export interface SlotValue__Output {
  resolved: boolean;
  str_value?: string;
  section?: _learningmotors_pb_composer_Section__Output | null;
  patient?: _learningmotors_pb_patients_Patient__Output | null;
  notetype?: _learningmotors_pb_notetypes_NoteType__Output | null;
  macro?: _learningmotors_pb_macros_Macro__Output | null;
  transcript?: _learningmotors_pb_asr_Transcript__Output | null;
  loc: _learningmotors_pb_idl_Location__Output | null;
  value: "str_value" | "section" | "patient" | "notetype" | "macro" | "transcript";
}
