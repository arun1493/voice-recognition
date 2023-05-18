// Original file: node_modules/protobufs/src/suki/pb/ssp/asr/asr.proto

import type {
  AudioEncoding as _suki_pb_ssp_asr_AudioEncoding,
  AudioEncoding__Output as _suki_pb_ssp_asr_AudioEncoding__Output
} from "../../../../suki/pb/ssp/asr/AudioEncoding";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../../google/protobuf/Timestamp";

export interface AudioInfo {
  encoding?: _suki_pb_ssp_asr_AudioEncoding | null;
  audio_stream_id?: string;
  audio_collection_start_time?: _google_protobuf_Timestamp | null;
}

export interface AudioInfo__Output {
  encoding: _suki_pb_ssp_asr_AudioEncoding__Output | null;
  audio_stream_id: string;
  audio_collection_start_time: _google_protobuf_Timestamp__Output | null;
}
