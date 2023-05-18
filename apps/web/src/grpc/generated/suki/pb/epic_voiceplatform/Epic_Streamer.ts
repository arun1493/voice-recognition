// Original file: node_modules/protobufs/src/suki/pb/epic_voiceplatform/epic_s3.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  IntentResponse as _suki_pb_epic_voiceplatform_IntentResponse,
  IntentResponse__Output as _suki_pb_epic_voiceplatform_IntentResponse__Output
} from "../../../suki/pb/epic_voiceplatform/IntentResponse";
import type {
  IntentTextRequest as _suki_pb_epic_voiceplatform_IntentTextRequest,
  IntentTextRequest__Output as _suki_pb_epic_voiceplatform_IntentTextRequest__Output
} from "../../../suki/pb/epic_voiceplatform/IntentTextRequest";
import type {
  PingRequest as _suki_pb_epic_voiceplatform_PingRequest,
  PingRequest__Output as _suki_pb_epic_voiceplatform_PingRequest__Output
} from "../../../suki/pb/epic_voiceplatform/PingRequest";
import type {
  PingResponse as _suki_pb_epic_voiceplatform_PingResponse,
  PingResponse__Output as _suki_pb_epic_voiceplatform_PingResponse__Output
} from "../../../suki/pb/epic_voiceplatform/PingResponse";

export interface Epic_StreamerClient extends grpc.Client {
  IntentText(
    argument: _suki_pb_epic_voiceplatform_IntentTextRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_IntentResponse__Output>
  ): grpc.ClientUnaryCall;
  IntentText(
    argument: _suki_pb_epic_voiceplatform_IntentTextRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_IntentResponse__Output>
  ): grpc.ClientUnaryCall;
  IntentText(
    argument: _suki_pb_epic_voiceplatform_IntentTextRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_IntentResponse__Output>
  ): grpc.ClientUnaryCall;
  IntentText(
    argument: _suki_pb_epic_voiceplatform_IntentTextRequest,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_IntentResponse__Output>
  ): grpc.ClientUnaryCall;
  intentText(
    argument: _suki_pb_epic_voiceplatform_IntentTextRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_IntentResponse__Output>
  ): grpc.ClientUnaryCall;
  intentText(
    argument: _suki_pb_epic_voiceplatform_IntentTextRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_IntentResponse__Output>
  ): grpc.ClientUnaryCall;
  intentText(
    argument: _suki_pb_epic_voiceplatform_IntentTextRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_IntentResponse__Output>
  ): grpc.ClientUnaryCall;
  intentText(
    argument: _suki_pb_epic_voiceplatform_IntentTextRequest,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_IntentResponse__Output>
  ): grpc.ClientUnaryCall;

  PingPong(
    argument: _suki_pb_epic_voiceplatform_PingRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_PingResponse__Output>
  ): grpc.ClientUnaryCall;
  PingPong(
    argument: _suki_pb_epic_voiceplatform_PingRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_PingResponse__Output>
  ): grpc.ClientUnaryCall;
  PingPong(
    argument: _suki_pb_epic_voiceplatform_PingRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_PingResponse__Output>
  ): grpc.ClientUnaryCall;
  PingPong(
    argument: _suki_pb_epic_voiceplatform_PingRequest,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_PingResponse__Output>
  ): grpc.ClientUnaryCall;
  pingPong(
    argument: _suki_pb_epic_voiceplatform_PingRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_PingResponse__Output>
  ): grpc.ClientUnaryCall;
  pingPong(
    argument: _suki_pb_epic_voiceplatform_PingRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_PingResponse__Output>
  ): grpc.ClientUnaryCall;
  pingPong(
    argument: _suki_pb_epic_voiceplatform_PingRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_PingResponse__Output>
  ): grpc.ClientUnaryCall;
  pingPong(
    argument: _suki_pb_epic_voiceplatform_PingRequest,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_PingResponse__Output>
  ): grpc.ClientUnaryCall;
}

export interface Epic_StreamerHandlers extends grpc.UntypedServiceImplementation {
  IntentText: grpc.handleUnaryCall<
    _suki_pb_epic_voiceplatform_IntentTextRequest__Output,
    _suki_pb_epic_voiceplatform_IntentResponse
  >;

  PingPong: grpc.handleUnaryCall<
    _suki_pb_epic_voiceplatform_PingRequest__Output,
    _suki_pb_epic_voiceplatform_PingResponse
  >;
}

export interface Epic_StreamerDefinition extends grpc.ServiceDefinition {
  IntentText: MethodDefinition<
    _suki_pb_epic_voiceplatform_IntentTextRequest,
    _suki_pb_epic_voiceplatform_IntentResponse,
    _suki_pb_epic_voiceplatform_IntentTextRequest__Output,
    _suki_pb_epic_voiceplatform_IntentResponse__Output
  >;
  PingPong: MethodDefinition<
    _suki_pb_epic_voiceplatform_PingRequest,
    _suki_pb_epic_voiceplatform_PingResponse,
    _suki_pb_epic_voiceplatform_PingRequest__Output,
    _suki_pb_epic_voiceplatform_PingResponse__Output
  >;
}
