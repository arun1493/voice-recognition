// Original file: node_modules/protobufs/src/suki/pb/s2/s2.proto

import type {
  AudioEncoding as _suki_pb_s2_AudioEncoding,
  AudioEncoding__Output as _suki_pb_s2_AudioEncoding__Output
} from "../../../suki/pb/s2/AudioEncoding";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";

export interface AudioInfo {
  encoding?: _suki_pb_s2_AudioEncoding | null;
  audio_stream_id?: string;
  audio_collection_start_time?: _google_protobuf_Timestamp | null;
}

export interface AudioInfo__Output {
  encoding: _suki_pb_s2_AudioEncoding__Output | null;
  audio_stream_id: string;
  audio_collection_start_time: _google_protobuf_Timestamp__Output | null;
}
