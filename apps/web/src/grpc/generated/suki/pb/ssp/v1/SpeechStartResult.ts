// Original file: node_modules/protobufs/src/suki/pb/ssp/v1/resource.proto

import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../../google/protobuf/Timestamp";

export interface SpeechStartResult {
  session_id?: string;
  speech_start_time?: _google_protobuf_Timestamp | null;
}

export interface SpeechStartResult__Output {
  session_id: string;
  speech_start_time: _google_protobuf_Timestamp__Output | null;
}
