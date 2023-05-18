// Original file: node_modules/protobufs/src/suki/pb/ssp/asr/asr.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  PingRequest as _suki_pb_ssp_asr_PingRequest,
  PingRequest__Output as _suki_pb_ssp_asr_PingRequest__Output
} from "../../../../suki/pb/ssp/asr/PingRequest";
import type {
  PingResponse as _suki_pb_ssp_asr_PingResponse,
  PingResponse__Output as _suki_pb_ssp_asr_PingResponse__Output
} from "../../../../suki/pb/ssp/asr/PingResponse";
import type {
  SukiSpeechRecognizeRequest as _suki_pb_ssp_asr_SukiSpeechRecognizeRequest,
  SukiSpeechRecognizeRequest__Output as _suki_pb_ssp_asr_SukiSpeechRecognizeRequest__Output
} from "../../../../suki/pb/ssp/asr/SukiSpeechRecognizeRequest";
import type {
  SukiSpeechRecognizeResponse as _suki_pb_ssp_asr_SukiSpeechRecognizeResponse,
  SukiSpeechRecognizeResponse__Output as _suki_pb_ssp_asr_SukiSpeechRecognizeResponse__Output
} from "../../../../suki/pb/ssp/asr/SukiSpeechRecognizeResponse";

export interface Suki_ASR_StreamerClient extends grpc.Client {
  PingPong(
    argument: _suki_pb_ssp_asr_PingRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ssp_asr_PingResponse__Output>
  ): grpc.ClientUnaryCall;
  PingPong(
    argument: _suki_pb_ssp_asr_PingRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ssp_asr_PingResponse__Output>
  ): grpc.ClientUnaryCall;
  PingPong(
    argument: _suki_pb_ssp_asr_PingRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ssp_asr_PingResponse__Output>
  ): grpc.ClientUnaryCall;
  PingPong(
    argument: _suki_pb_ssp_asr_PingRequest,
    callback: grpc.requestCallback<_suki_pb_ssp_asr_PingResponse__Output>
  ): grpc.ClientUnaryCall;
  pingPong(
    argument: _suki_pb_ssp_asr_PingRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ssp_asr_PingResponse__Output>
  ): grpc.ClientUnaryCall;
  pingPong(
    argument: _suki_pb_ssp_asr_PingRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ssp_asr_PingResponse__Output>
  ): grpc.ClientUnaryCall;
  pingPong(
    argument: _suki_pb_ssp_asr_PingRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ssp_asr_PingResponse__Output>
  ): grpc.ClientUnaryCall;
  pingPong(
    argument: _suki_pb_ssp_asr_PingRequest,
    callback: grpc.requestCallback<_suki_pb_ssp_asr_PingResponse__Output>
  ): grpc.ClientUnaryCall;

  SukiSpeechRecognize(
    metadata: grpc.Metadata,
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<
    _suki_pb_ssp_asr_SukiSpeechRecognizeRequest,
    _suki_pb_ssp_asr_SukiSpeechRecognizeResponse__Output
  >;
  SukiSpeechRecognize(
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<
    _suki_pb_ssp_asr_SukiSpeechRecognizeRequest,
    _suki_pb_ssp_asr_SukiSpeechRecognizeResponse__Output
  >;
  sukiSpeechRecognize(
    metadata: grpc.Metadata,
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<
    _suki_pb_ssp_asr_SukiSpeechRecognizeRequest,
    _suki_pb_ssp_asr_SukiSpeechRecognizeResponse__Output
  >;
  sukiSpeechRecognize(
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<
    _suki_pb_ssp_asr_SukiSpeechRecognizeRequest,
    _suki_pb_ssp_asr_SukiSpeechRecognizeResponse__Output
  >;
}

export interface Suki_ASR_StreamerHandlers extends grpc.UntypedServiceImplementation {
  PingPong: grpc.handleUnaryCall<_suki_pb_ssp_asr_PingRequest__Output, _suki_pb_ssp_asr_PingResponse>;

  SukiSpeechRecognize: grpc.handleBidiStreamingCall<
    _suki_pb_ssp_asr_SukiSpeechRecognizeRequest__Output,
    _suki_pb_ssp_asr_SukiSpeechRecognizeResponse
  >;
}

export interface Suki_ASR_StreamerDefinition extends grpc.ServiceDefinition {
  PingPong: MethodDefinition<
    _suki_pb_ssp_asr_PingRequest,
    _suki_pb_ssp_asr_PingResponse,
    _suki_pb_ssp_asr_PingRequest__Output,
    _suki_pb_ssp_asr_PingResponse__Output
  >;
  SukiSpeechRecognize: MethodDefinition<
    _suki_pb_ssp_asr_SukiSpeechRecognizeRequest,
    _suki_pb_ssp_asr_SukiSpeechRecognizeResponse,
    _suki_pb_ssp_asr_SukiSpeechRecognizeRequest__Output,
    _suki_pb_ssp_asr_SukiSpeechRecognizeResponse__Output
  >;
}
