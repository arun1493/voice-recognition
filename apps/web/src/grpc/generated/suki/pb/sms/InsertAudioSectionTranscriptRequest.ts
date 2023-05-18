// Original file: node_modules/protobufs/src/suki/pb/sms/sms.proto

import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";

export interface InsertAudioSectionTranscriptRequest {
  organization_id?: string;
  session_id?: string;
  user_id?: string;
  stream_start_time?: _google_protobuf_Timestamp | null;
  composition_id?: string;
  section_id?: string;
  content_uri?: string;
  is_script_change?: boolean;
  audio_length?: number;
  microphone?: string;
  user_agent?: string;
}

export interface InsertAudioSectionTranscriptRequest__Output {
  organization_id: string;
  session_id: string;
  user_id: string;
  stream_start_time: _google_protobuf_Timestamp__Output | null;
  composition_id: string;
  section_id: string;
  content_uri: string;
  is_script_change: boolean;
  audio_length: number;
  microphone: string;
  user_agent: string;
}
