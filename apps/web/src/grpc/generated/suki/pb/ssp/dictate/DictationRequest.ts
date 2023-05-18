// Original file: node_modules/protobufs/src/suki/pb/ssp/dictate/dictate.proto

import type {
  ClientConfig as _suki_pb_ssp_common_ClientConfig,
  ClientConfig__Output as _suki_pb_ssp_common_ClientConfig__Output
} from "../../../../suki/pb/ssp/common/ClientConfig";

// Original file: node_modules/protobufs/src/suki/pb/ssp/dictate/dictate.proto

export enum _suki_pb_ssp_dictate_DictationRequest_Event {
  START_DICTATION = 0,
  STOP_DICTATION = 1
}

export interface DictationRequest {
  client_config?: _suki_pb_ssp_common_ClientConfig | null;
  audio_data?: Buffer | Uint8Array | string;
  event?: _suki_pb_ssp_dictate_DictationRequest_Event | keyof typeof _suki_pb_ssp_dictate_DictationRequest_Event;
  request?: "client_config" | "audio_data" | "event";
}

export interface DictationRequest__Output {
  client_config?: _suki_pb_ssp_common_ClientConfig__Output | null;
  audio_data?: Buffer;
  event?: keyof typeof _suki_pb_ssp_dictate_DictationRequest_Event;
  request: "client_config" | "audio_data" | "event";
}
