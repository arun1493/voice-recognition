// Original file: node_modules/protobufs/src/learningmotors/pb/data_validator/data_validator.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type { SpeechAPI as _suki_pb_voice_speechapis_SpeechAPI } from "../../../suki/pb/voice/speechapis/SpeechAPI";

export interface GetValidatedDataFileRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  speech_api?: _suki_pb_voice_speechapis_SpeechAPI | keyof typeof _suki_pb_voice_speechapis_SpeechAPI;
}

export interface GetValidatedDataFileRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  speech_api: keyof typeof _suki_pb_voice_speechapis_SpeechAPI;
}
