// Original file: node_modules/protobufs/src/suki/pb/ml/ie_ml_data_generation.proto

import type { SystemType as _suki_pb_ml_SystemType } from "../../../suki/pb/ml/SystemType";
import type {
  Macro as _learningmotors_pb_macros_Macro,
  Macro__Output as _learningmotors_pb_macros_Macro__Output
} from "../../../learningmotors/pb/macros/Macro";
import type {
  NoteType as _learningmotors_pb_notetypes_NoteType,
  NoteType__Output as _learningmotors_pb_notetypes_NoteType__Output
} from "../../../learningmotors/pb/notetypes/NoteType";

export interface IeMlGenerateDataRequest {
  system_type?: _suki_pb_ml_SystemType | keyof typeof _suki_pb_ml_SystemType;
  organization_id?: string;
  user_id?: string;
  macro?: _learningmotors_pb_macros_Macro | null;
  notetype?: _learningmotors_pb_notetypes_NoteType | null;
  input?: "macro" | "notetype";
}

export interface IeMlGenerateDataRequest__Output {
  system_type: keyof typeof _suki_pb_ml_SystemType;
  organization_id: string;
  user_id: string;
  macro?: _learningmotors_pb_macros_Macro__Output | null;
  notetype?: _learningmotors_pb_notetypes_NoteType__Output | null;
  input: "macro" | "notetype";
}
