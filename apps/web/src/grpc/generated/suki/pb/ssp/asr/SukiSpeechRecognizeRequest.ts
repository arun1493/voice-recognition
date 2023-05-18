// Original file: node_modules/protobufs/src/suki/pb/ssp/asr/asr.proto

import type {
  AudioInfo as _suki_pb_ssp_asr_AudioInfo,
  AudioInfo__Output as _suki_pb_ssp_asr_AudioInfo__Output
} from "../../../../suki/pb/ssp/asr/AudioInfo";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../../google/protobuf/Timestamp";

// Original file: node_modules/protobufs/src/suki/pb/ssp/asr/asr.proto

export enum _suki_pb_ssp_asr_SukiSpeechRecognizeRequest_Event {
  AUDIO_START = 0,
  AUDIO_END = 1
}

export interface SukiSpeechRecognizeRequest {
  event?:
    | _suki_pb_ssp_asr_SukiSpeechRecognizeRequest_Event
    | keyof typeof _suki_pb_ssp_asr_SukiSpeechRecognizeRequest_Event;
  audio_info?: _suki_pb_ssp_asr_AudioInfo | null;
  audio_data?: Buffer | Uint8Array | string;
  request_time?: _google_protobuf_Timestamp | null;
  packet_id?: number;
  request?: "event" | "audio_info" | "audio_data";
}

export interface SukiSpeechRecognizeRequest__Output {
  event?: keyof typeof _suki_pb_ssp_asr_SukiSpeechRecognizeRequest_Event;
  audio_info?: _suki_pb_ssp_asr_AudioInfo__Output | null;
  audio_data?: Buffer;
  request_time: _google_protobuf_Timestamp__Output | null;
  packet_id: number;
  request: "event" | "audio_info" | "audio_data";
}
