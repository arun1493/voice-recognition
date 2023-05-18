// Original file: node_modules/protobufs/src/learningmotors/pb/idl/context.proto

import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../google/protobuf/Timestamp";
import type { SpeechAPI as _suki_pb_voice_speechapis_SpeechAPI } from "../../suki/pb/voice/speechapis/SpeechAPI";
import type {
  CursorPosition as _learningmotors_pb_common_CursorPosition,
  CursorPosition__Output as _learningmotors_pb_common_CursorPosition__Output
} from "../../learningmotors/pb/common/CursorPosition";
import type {
  SubsectionInfo as _learningmotors_pb_SubsectionInfo,
  SubsectionInfo__Output as _learningmotors_pb_SubsectionInfo__Output
} from "../../learningmotors/pb/SubsectionInfo";

// Original file: node_modules/protobufs/src/learningmotors/pb/idl/context.proto

export enum _learningmotors_pb_Context_View {
  INVALID_VIEW = 0,
  NOTE = 1,
  WELCOME = 3,
  SCHEDULE = 4,
  PROFILE = 5,
  SECTION_TRANSCRIPT = 6,
  UNFINISHED_NOTES = 7,
  HELP = 8,
  SECTION = 2
}

export interface Context {
  view?: _learningmotors_pb_Context_View | keyof typeof _learningmotors_pb_Context_View;
  is_agent_awake?: boolean;
  composition_id?: string;
  section_id?: string;
  is_script_change?: boolean;
  session_id?: string;
  stream_start_time?: _google_protobuf_Timestamp | null;
  organization_id?: string;
  user_id?: string;
  patient_id?: string;
  microphone?: string;
  user_agent?: string;
  speech_api?: _suki_pb_voice_speechapis_SpeechAPI | keyof typeof _suki_pb_voice_speechapis_SpeechAPI;
  cursor_position?: _learningmotors_pb_common_CursorPosition | null;
  subsections?: _learningmotors_pb_SubsectionInfo[];
  notetype_id?: string;
}

export interface Context__Output {
  view: keyof typeof _learningmotors_pb_Context_View;
  is_agent_awake: boolean;
  composition_id: string;
  section_id: string;
  is_script_change: boolean;
  session_id: string;
  stream_start_time: _google_protobuf_Timestamp__Output | null;
  organization_id: string;
  user_id: string;
  patient_id: string;
  microphone: string;
  user_agent: string;
  speech_api: keyof typeof _suki_pb_voice_speechapis_SpeechAPI;
  cursor_position: _learningmotors_pb_common_CursorPosition__Output | null;
  subsections: _learningmotors_pb_SubsectionInfo__Output[];
  notetype_id: string;
}
