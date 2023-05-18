// Original file: node_modules/protobufs/src/suki/pb/ssp/common/util.proto

import type {
  ClientContext as _suki_pb_ssp_common_ClientContext,
  ClientContext__Output as _suki_pb_ssp_common_ClientContext__Output
} from "../../../../suki/pb/ssp/common/ClientContext";
import type {
  AudioInfo as _suki_pb_ssp_common_AudioInfo,
  AudioInfo__Output as _suki_pb_ssp_common_AudioInfo__Output
} from "../../../../suki/pb/ssp/common/AudioInfo";

export interface ClientConfig {
  client_context?: _suki_pb_ssp_common_ClientContext | null;
  audio_info?: _suki_pb_ssp_common_AudioInfo | null;
}

export interface ClientConfig__Output {
  client_context: _suki_pb_ssp_common_ClientContext__Output | null;
  audio_info: _suki_pb_ssp_common_AudioInfo__Output | null;
}
