// Original file: node_modules/protobufs/src/suki/pb/voice/ms_voice_agent.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  DialogRequest as _suki_pb_voice_DialogRequest,
  DialogRequest__Output as _suki_pb_voice_DialogRequest__Output
} from "../../../suki/pb/voice/DialogRequest";
import type {
  DialogResponse as _suki_pb_voice_DialogResponse,
  DialogResponse__Output as _suki_pb_voice_DialogResponse__Output
} from "../../../suki/pb/voice/DialogResponse";

export interface MsVoiceAgentClient extends grpc.Client {
  Dialog(
    metadata: grpc.Metadata,
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<_suki_pb_voice_DialogRequest, _suki_pb_voice_DialogResponse__Output>;
  Dialog(
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<_suki_pb_voice_DialogRequest, _suki_pb_voice_DialogResponse__Output>;
  dialog(
    metadata: grpc.Metadata,
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<_suki_pb_voice_DialogRequest, _suki_pb_voice_DialogResponse__Output>;
  dialog(
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<_suki_pb_voice_DialogRequest, _suki_pb_voice_DialogResponse__Output>;
}

export interface MsVoiceAgentHandlers extends grpc.UntypedServiceImplementation {
  Dialog: grpc.handleBidiStreamingCall<_suki_pb_voice_DialogRequest__Output, _suki_pb_voice_DialogResponse>;
}

export interface MsVoiceAgentDefinition extends grpc.ServiceDefinition {
  Dialog: MethodDefinition<
    _suki_pb_voice_DialogRequest,
    _suki_pb_voice_DialogResponse,
    _suki_pb_voice_DialogRequest__Output,
    _suki_pb_voice_DialogResponse__Output
  >;
}
