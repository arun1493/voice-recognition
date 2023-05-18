// Original file: node_modules/protobufs/src/suki/pb/ssp/v1/resource.proto

import type { ASR as _suki_pb_ssp_v1_ASR } from "../../../../suki/pb/ssp/v1/ASR";
import type {
  TranscriptionConfig as _suki_pb_ssp_v1_TranscriptionConfig,
  TranscriptionConfig__Output as _suki_pb_ssp_v1_TranscriptionConfig__Output
} from "../../../../suki/pb/ssp/v1/TranscriptionConfig";
import type {
  AudioConfig as _suki_pb_ssp_v1_AudioConfig,
  AudioConfig__Output as _suki_pb_ssp_v1_AudioConfig__Output
} from "../../../../suki/pb/ssp/v1/AudioConfig";
import type {
  ModelConfig as _suki_pb_ssp_v1_ModelConfig,
  ModelConfig__Output as _suki_pb_ssp_v1_ModelConfig__Output
} from "../../../../suki/pb/ssp/v1/ModelConfig";
import type {
  SpeechAdaptation as _suki_pb_ssp_v1_SpeechAdaptation,
  SpeechAdaptation__Output as _suki_pb_ssp_v1_SpeechAdaptation__Output
} from "../../../../suki/pb/ssp/v1/SpeechAdaptation";

export interface SpeechConfig {
  topic?: string;
  asrs?: (_suki_pb_ssp_v1_ASR | keyof typeof _suki_pb_ssp_v1_ASR)[];
  transcription_config?: _suki_pb_ssp_v1_TranscriptionConfig | null;
  audio_configuration?: _suki_pb_ssp_v1_AudioConfig | null;
  model_config?: _suki_pb_ssp_v1_ModelConfig | null;
  speech_adaptation?: _suki_pb_ssp_v1_SpeechAdaptation | null;
}

export interface SpeechConfig__Output {
  topic: string;
  asrs: (keyof typeof _suki_pb_ssp_v1_ASR)[];
  transcription_config: _suki_pb_ssp_v1_TranscriptionConfig__Output | null;
  audio_configuration: _suki_pb_ssp_v1_AudioConfig__Output | null;
  model_config: _suki_pb_ssp_v1_ModelConfig__Output | null;
  speech_adaptation: _suki_pb_ssp_v1_SpeechAdaptation__Output | null;
}
