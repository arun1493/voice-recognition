// Original file: node_modules/protobufs/src/suki/pb/ssp/iusf/digi_iusf.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  PingRequest as _suki_pb_ssp_iusf_PingRequest,
  PingRequest__Output as _suki_pb_ssp_iusf_PingRequest__Output
} from "../../../../suki/pb/ssp/iusf/PingRequest";
import type {
  PongReply as _suki_pb_ssp_iusf_PongReply,
  PongReply__Output as _suki_pb_ssp_iusf_PongReply__Output
} from "../../../../suki/pb/ssp/iusf/PongReply";
import type {
  RecognizeCommandRequest as _suki_pb_ssp_iusf_RecognizeCommandRequest,
  RecognizeCommandRequest__Output as _suki_pb_ssp_iusf_RecognizeCommandRequest__Output
} from "../../../../suki/pb/ssp/iusf/RecognizeCommandRequest";
import type {
  RecognizeCommandResponse as _suki_pb_ssp_iusf_RecognizeCommandResponse,
  RecognizeCommandResponse__Output as _suki_pb_ssp_iusf_RecognizeCommandResponse__Output
} from "../../../../suki/pb/ssp/iusf/RecognizeCommandResponse";

export interface DigiIUSFClient extends grpc.Client {
  PingPong(
    argument: _suki_pb_ssp_iusf_PingRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ssp_iusf_PongReply__Output>
  ): grpc.ClientUnaryCall;
  PingPong(
    argument: _suki_pb_ssp_iusf_PingRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ssp_iusf_PongReply__Output>
  ): grpc.ClientUnaryCall;
  PingPong(
    argument: _suki_pb_ssp_iusf_PingRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ssp_iusf_PongReply__Output>
  ): grpc.ClientUnaryCall;
  PingPong(
    argument: _suki_pb_ssp_iusf_PingRequest,
    callback: grpc.requestCallback<_suki_pb_ssp_iusf_PongReply__Output>
  ): grpc.ClientUnaryCall;
  pingPong(
    argument: _suki_pb_ssp_iusf_PingRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ssp_iusf_PongReply__Output>
  ): grpc.ClientUnaryCall;
  pingPong(
    argument: _suki_pb_ssp_iusf_PingRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ssp_iusf_PongReply__Output>
  ): grpc.ClientUnaryCall;
  pingPong(
    argument: _suki_pb_ssp_iusf_PingRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ssp_iusf_PongReply__Output>
  ): grpc.ClientUnaryCall;
  pingPong(
    argument: _suki_pb_ssp_iusf_PingRequest,
    callback: grpc.requestCallback<_suki_pb_ssp_iusf_PongReply__Output>
  ): grpc.ClientUnaryCall;

  RecognizeCommand(
    argument: _suki_pb_ssp_iusf_RecognizeCommandRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ssp_iusf_RecognizeCommandResponse__Output>
  ): grpc.ClientUnaryCall;
  RecognizeCommand(
    argument: _suki_pb_ssp_iusf_RecognizeCommandRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ssp_iusf_RecognizeCommandResponse__Output>
  ): grpc.ClientUnaryCall;
  RecognizeCommand(
    argument: _suki_pb_ssp_iusf_RecognizeCommandRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ssp_iusf_RecognizeCommandResponse__Output>
  ): grpc.ClientUnaryCall;
  RecognizeCommand(
    argument: _suki_pb_ssp_iusf_RecognizeCommandRequest,
    callback: grpc.requestCallback<_suki_pb_ssp_iusf_RecognizeCommandResponse__Output>
  ): grpc.ClientUnaryCall;
  recognizeCommand(
    argument: _suki_pb_ssp_iusf_RecognizeCommandRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ssp_iusf_RecognizeCommandResponse__Output>
  ): grpc.ClientUnaryCall;
  recognizeCommand(
    argument: _suki_pb_ssp_iusf_RecognizeCommandRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ssp_iusf_RecognizeCommandResponse__Output>
  ): grpc.ClientUnaryCall;
  recognizeCommand(
    argument: _suki_pb_ssp_iusf_RecognizeCommandRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ssp_iusf_RecognizeCommandResponse__Output>
  ): grpc.ClientUnaryCall;
  recognizeCommand(
    argument: _suki_pb_ssp_iusf_RecognizeCommandRequest,
    callback: grpc.requestCallback<_suki_pb_ssp_iusf_RecognizeCommandResponse__Output>
  ): grpc.ClientUnaryCall;

  StreamingRecognizeCommand(
    metadata: grpc.Metadata,
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<
    _suki_pb_ssp_iusf_RecognizeCommandRequest,
    _suki_pb_ssp_iusf_RecognizeCommandResponse__Output
  >;
  StreamingRecognizeCommand(
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<
    _suki_pb_ssp_iusf_RecognizeCommandRequest,
    _suki_pb_ssp_iusf_RecognizeCommandResponse__Output
  >;
  streamingRecognizeCommand(
    metadata: grpc.Metadata,
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<
    _suki_pb_ssp_iusf_RecognizeCommandRequest,
    _suki_pb_ssp_iusf_RecognizeCommandResponse__Output
  >;
  streamingRecognizeCommand(
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<
    _suki_pb_ssp_iusf_RecognizeCommandRequest,
    _suki_pb_ssp_iusf_RecognizeCommandResponse__Output
  >;
}

export interface DigiIUSFHandlers extends grpc.UntypedServiceImplementation {
  PingPong: grpc.handleUnaryCall<_suki_pb_ssp_iusf_PingRequest__Output, _suki_pb_ssp_iusf_PongReply>;

  RecognizeCommand: grpc.handleUnaryCall<
    _suki_pb_ssp_iusf_RecognizeCommandRequest__Output,
    _suki_pb_ssp_iusf_RecognizeCommandResponse
  >;

  StreamingRecognizeCommand: grpc.handleBidiStreamingCall<
    _suki_pb_ssp_iusf_RecognizeCommandRequest__Output,
    _suki_pb_ssp_iusf_RecognizeCommandResponse
  >;
}

export interface DigiIUSFDefinition extends grpc.ServiceDefinition {
  PingPong: MethodDefinition<
    _suki_pb_ssp_iusf_PingRequest,
    _suki_pb_ssp_iusf_PongReply,
    _suki_pb_ssp_iusf_PingRequest__Output,
    _suki_pb_ssp_iusf_PongReply__Output
  >;
  RecognizeCommand: MethodDefinition<
    _suki_pb_ssp_iusf_RecognizeCommandRequest,
    _suki_pb_ssp_iusf_RecognizeCommandResponse,
    _suki_pb_ssp_iusf_RecognizeCommandRequest__Output,
    _suki_pb_ssp_iusf_RecognizeCommandResponse__Output
  >;
  StreamingRecognizeCommand: MethodDefinition<
    _suki_pb_ssp_iusf_RecognizeCommandRequest,
    _suki_pb_ssp_iusf_RecognizeCommandResponse,
    _suki_pb_ssp_iusf_RecognizeCommandRequest__Output,
    _suki_pb_ssp_iusf_RecognizeCommandResponse__Output
  >;
}
