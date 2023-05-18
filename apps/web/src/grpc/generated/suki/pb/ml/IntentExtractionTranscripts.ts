// Original file: node_modules/protobufs/src/suki/pb/ml/pubsub.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";
import type { _learningmotors_pb_idl_Intent_Type } from "../../../learningmotors/pb/idl/Intent";
import type {
  SlotValue as _learningmotors_pb_data_validator_SlotValue,
  SlotValue__Output as _learningmotors_pb_data_validator_SlotValue__Output
} from "../../../learningmotors/pb/data_validator/SlotValue";
import type { SpeechAPI as _suki_pb_voice_speechapis_SpeechAPI } from "../../../suki/pb/voice/speechapis/SpeechAPI";
import type { _learningmotors_pb_Context_View } from "../../../learningmotors/pb/Context";

export interface IntentExtractionTranscripts {
  scope?: _learningmotors_pb_scope_Scope | null;
  user_id?: string;
  reviewer_user_id?: string;
  reviewer_query_date?: _google_protobuf_Timestamp | null;
  input?: string;
  intent_type?: _learningmotors_pb_idl_Intent_Type | keyof typeof _learningmotors_pb_idl_Intent_Type;
  slot_values?: _learningmotors_pb_data_validator_SlotValue[];
  validation_state?: string;
  speech_api?: _suki_pb_voice_speechapis_SpeechAPI | keyof typeof _suki_pb_voice_speechapis_SpeechAPI;
  biased?: boolean;
  composition_id?: string;
  section_id?: string;
  session_id?: string;
  stream_start_time?: _google_protobuf_Timestamp | null;
  context_view?: _learningmotors_pb_Context_View | keyof typeof _learningmotors_pb_Context_View;
  is_agent_awake?: boolean;
  is_script_change?: boolean;
  patient_id?: string;
  microphone?: string;
}

export interface IntentExtractionTranscripts__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  user_id: string;
  reviewer_user_id: string;
  reviewer_query_date: _google_protobuf_Timestamp__Output | null;
  input: string;
  intent_type: keyof typeof _learningmotors_pb_idl_Intent_Type;
  slot_values: _learningmotors_pb_data_validator_SlotValue__Output[];
  validation_state: string;
  speech_api: keyof typeof _suki_pb_voice_speechapis_SpeechAPI;
  biased: boolean;
  composition_id: string;
  section_id: string;
  session_id: string;
  stream_start_time: _google_protobuf_Timestamp__Output | null;
  context_view: keyof typeof _learningmotors_pb_Context_View;
  is_agent_awake: boolean;
  is_script_change: boolean;
  patient_id: string;
  microphone: string;
}
