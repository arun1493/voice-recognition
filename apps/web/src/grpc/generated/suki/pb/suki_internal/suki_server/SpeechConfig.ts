// Original file: node_modules/protobufs/src/suki/pb/suki_internal/suki_server/speech.proto

import type {
  AudioConfig as _suki_pb_ssp_v1_AudioConfig,
  AudioConfig__Output as _suki_pb_ssp_v1_AudioConfig__Output
} from "../../../../suki/pb/ssp/v1/AudioConfig";

export interface SpeechConfig {
  audio_configuration?: _suki_pb_ssp_v1_AudioConfig | null;
}

export interface SpeechConfig__Output {
  audio_configuration: _suki_pb_ssp_v1_AudioConfig__Output | null;
}
