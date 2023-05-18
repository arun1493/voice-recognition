// Original file: node_modules/protobufs/src/suki/pb/suki_internal/suki_server/speech.proto

import type {
  SpeechConfig as _suki_pb_suki_internal_suki_server_SpeechConfig,
  SpeechConfig__Output as _suki_pb_suki_internal_suki_server_SpeechConfig__Output
} from "../../../../suki/pb/suki_internal/suki_server/SpeechConfig";
import type {
  SpeechContent as _suki_pb_suki_internal_suki_server_SpeechContent,
  SpeechContent__Output as _suki_pb_suki_internal_suki_server_SpeechContent__Output
} from "../../../../suki/pb/suki_internal/suki_server/SpeechContent";

export interface SpeechRequest {
  speech_config?: _suki_pb_suki_internal_suki_server_SpeechConfig | null;
  speech_content?: _suki_pb_suki_internal_suki_server_SpeechContent | null;
  request?: "speech_config" | "speech_content";
}

export interface SpeechRequest__Output {
  speech_config?: _suki_pb_suki_internal_suki_server_SpeechConfig__Output | null;
  speech_content?: _suki_pb_suki_internal_suki_server_SpeechContent__Output | null;
  request: "speech_config" | "speech_content";
}
