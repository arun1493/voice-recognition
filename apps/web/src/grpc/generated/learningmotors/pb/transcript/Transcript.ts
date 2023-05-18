// Original file: node_modules/protobufs/src/learningmotors/pb/transcript/pubsub.proto

import type {
  UISessionHeader as _learningmotors_pb_transcript_UISessionHeader,
  UISessionHeader__Output as _learningmotors_pb_transcript_UISessionHeader__Output
} from "../../../learningmotors/pb/transcript/UISessionHeader";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";

// Original file: node_modules/protobufs/src/learningmotors/pb/transcript/pubsub.proto

export enum _learningmotors_pb_transcript_Transcript_AsrName {
  GOOGLE = 0,
  NVOQ = 1
}

export interface Transcript {
  header?: _learningmotors_pb_transcript_UISessionHeader | null;
  text?: (Buffer | Uint8Array | string)[];
  google_speech_hints?: string[];
  created_at?: _google_protobuf_Timestamp | null;
  asr?:
    | _learningmotors_pb_transcript_Transcript_AsrName
    | keyof typeof _learningmotors_pb_transcript_Transcript_AsrName;
}

export interface Transcript__Output {
  header: _learningmotors_pb_transcript_UISessionHeader__Output | null;
  text: Buffer[];
  google_speech_hints: string[];
  created_at: _google_protobuf_Timestamp__Output | null;
  asr: keyof typeof _learningmotors_pb_transcript_Transcript_AsrName;
}
