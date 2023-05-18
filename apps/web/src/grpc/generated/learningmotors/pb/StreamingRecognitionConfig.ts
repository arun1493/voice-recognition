// Original file: node_modules/protobufs/src/learningmotors/pb/speechproxy.proto

import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../google/protobuf/Timestamp";
import type {
  Context as _learningmotors_pb_Context,
  Context__Output as _learningmotors_pb_Context__Output
} from "../../learningmotors/pb/Context";

// Original file: node_modules/protobufs/src/learningmotors/pb/speechproxy.proto

export enum _learningmotors_pb_StreamingRecognitionConfig_AudioEncoding {
  ENCODING_UNSPECIFIED = 0,
  LINEAR16 = 1,
  FLAC = 2,
  MULAW = 3,
  AMR = 4,
  AMR_WB = 5,
  OGG_OPUS = 6
}

export interface StreamingRecognitionConfig {
  encoding?:
    | _learningmotors_pb_StreamingRecognitionConfig_AudioEncoding
    | keyof typeof _learningmotors_pb_StreamingRecognitionConfig_AudioEncoding;
  sample_rate_hertz?: number;
  language_code?: string;
  session_id?: string;
  session_owner_id?: string;
  stream_start_time?: _google_protobuf_Timestamp | null;
  phrases?: string[];
  section_id?: string;
  template_id?: string;
  debug?: boolean;
  context?: _learningmotors_pb_Context | null;
  note_id?: string;
  header?: Buffer | Uint8Array | string;
}

export interface StreamingRecognitionConfig__Output {
  encoding: keyof typeof _learningmotors_pb_StreamingRecognitionConfig_AudioEncoding;
  sample_rate_hertz: number;
  language_code: string;
  session_id: string;
  session_owner_id: string;
  stream_start_time: _google_protobuf_Timestamp__Output | null;
  phrases: string[];
  section_id: string;
  template_id: string;
  debug: boolean;
  context: _learningmotors_pb_Context__Output | null;
  note_id: string;
  header: Buffer;
}
