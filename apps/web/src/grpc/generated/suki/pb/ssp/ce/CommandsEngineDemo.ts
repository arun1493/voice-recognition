// Original file: node_modules/protobufs/src/suki/pb/ssp/ce/ce_demo.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  IntentRequest as _suki_pb_ssp_ce_IntentRequest,
  IntentRequest__Output as _suki_pb_ssp_ce_IntentRequest__Output
} from "../../../../suki/pb/ssp/ce/IntentRequest";
import type {
  IntentResponse as _suki_pb_ssp_ce_IntentResponse,
  IntentResponse__Output as _suki_pb_ssp_ce_IntentResponse__Output
} from "../../../../suki/pb/ssp/ce/IntentResponse";
import type {
  PingRequest as _suki_pb_ssp_ce_PingRequest,
  PingRequest__Output as _suki_pb_ssp_ce_PingRequest__Output
} from "../../../../suki/pb/ssp/ce/PingRequest";
import type {
  PingRequestAuth as _suki_pb_ssp_ce_PingRequestAuth,
  PingRequestAuth__Output as _suki_pb_ssp_ce_PingRequestAuth__Output
} from "../../../../suki/pb/ssp/ce/PingRequestAuth";
import type {
  PingResponse as _suki_pb_ssp_ce_PingResponse,
  PingResponse__Output as _suki_pb_ssp_ce_PingResponse__Output
} from "../../../../suki/pb/ssp/ce/PingResponse";
import type {
  PingResponseAuth as _suki_pb_ssp_ce_PingResponseAuth,
  PingResponseAuth__Output as _suki_pb_ssp_ce_PingResponseAuth__Output
} from "../../../../suki/pb/ssp/ce/PingResponseAuth";

export interface CommandsEngineDemoClient extends grpc.Client {
  Intent(
    metadata: grpc.Metadata,
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<_suki_pb_ssp_ce_IntentRequest, _suki_pb_ssp_ce_IntentResponse__Output>;
  Intent(
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<_suki_pb_ssp_ce_IntentRequest, _suki_pb_ssp_ce_IntentResponse__Output>;
  intent(
    metadata: grpc.Metadata,
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<_suki_pb_ssp_ce_IntentRequest, _suki_pb_ssp_ce_IntentResponse__Output>;
  intent(
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<_suki_pb_ssp_ce_IntentRequest, _suki_pb_ssp_ce_IntentResponse__Output>;

  PingPong(
    argument: _suki_pb_ssp_ce_PingRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ssp_ce_PingResponse__Output>
  ): grpc.ClientUnaryCall;
  PingPong(
    argument: _suki_pb_ssp_ce_PingRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ssp_ce_PingResponse__Output>
  ): grpc.ClientUnaryCall;
  PingPong(
    argument: _suki_pb_ssp_ce_PingRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ssp_ce_PingResponse__Output>
  ): grpc.ClientUnaryCall;
  PingPong(
    argument: _suki_pb_ssp_ce_PingRequest,
    callback: grpc.requestCallback<_suki_pb_ssp_ce_PingResponse__Output>
  ): grpc.ClientUnaryCall;
  pingPong(
    argument: _suki_pb_ssp_ce_PingRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ssp_ce_PingResponse__Output>
  ): grpc.ClientUnaryCall;
  pingPong(
    argument: _suki_pb_ssp_ce_PingRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ssp_ce_PingResponse__Output>
  ): grpc.ClientUnaryCall;
  pingPong(
    argument: _suki_pb_ssp_ce_PingRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ssp_ce_PingResponse__Output>
  ): grpc.ClientUnaryCall;
  pingPong(
    argument: _suki_pb_ssp_ce_PingRequest,
    callback: grpc.requestCallback<_suki_pb_ssp_ce_PingResponse__Output>
  ): grpc.ClientUnaryCall;

  PingPongAuth(
    argument: _suki_pb_ssp_ce_PingRequestAuth,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ssp_ce_PingResponseAuth__Output>
  ): grpc.ClientUnaryCall;
  PingPongAuth(
    argument: _suki_pb_ssp_ce_PingRequestAuth,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ssp_ce_PingResponseAuth__Output>
  ): grpc.ClientUnaryCall;
  PingPongAuth(
    argument: _suki_pb_ssp_ce_PingRequestAuth,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ssp_ce_PingResponseAuth__Output>
  ): grpc.ClientUnaryCall;
  PingPongAuth(
    argument: _suki_pb_ssp_ce_PingRequestAuth,
    callback: grpc.requestCallback<_suki_pb_ssp_ce_PingResponseAuth__Output>
  ): grpc.ClientUnaryCall;
  pingPongAuth(
    argument: _suki_pb_ssp_ce_PingRequestAuth,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ssp_ce_PingResponseAuth__Output>
  ): grpc.ClientUnaryCall;
  pingPongAuth(
    argument: _suki_pb_ssp_ce_PingRequestAuth,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ssp_ce_PingResponseAuth__Output>
  ): grpc.ClientUnaryCall;
  pingPongAuth(
    argument: _suki_pb_ssp_ce_PingRequestAuth,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ssp_ce_PingResponseAuth__Output>
  ): grpc.ClientUnaryCall;
  pingPongAuth(
    argument: _suki_pb_ssp_ce_PingRequestAuth,
    callback: grpc.requestCallback<_suki_pb_ssp_ce_PingResponseAuth__Output>
  ): grpc.ClientUnaryCall;
}

export interface CommandsEngineDemoHandlers extends grpc.UntypedServiceImplementation {
  Intent: grpc.handleBidiStreamingCall<_suki_pb_ssp_ce_IntentRequest__Output, _suki_pb_ssp_ce_IntentResponse>;

  PingPong: grpc.handleUnaryCall<_suki_pb_ssp_ce_PingRequest__Output, _suki_pb_ssp_ce_PingResponse>;

  PingPongAuth: grpc.handleUnaryCall<_suki_pb_ssp_ce_PingRequestAuth__Output, _suki_pb_ssp_ce_PingResponseAuth>;
}

export interface CommandsEngineDemoDefinition extends grpc.ServiceDefinition {
  Intent: MethodDefinition<
    _suki_pb_ssp_ce_IntentRequest,
    _suki_pb_ssp_ce_IntentResponse,
    _suki_pb_ssp_ce_IntentRequest__Output,
    _suki_pb_ssp_ce_IntentResponse__Output
  >;
  PingPong: MethodDefinition<
    _suki_pb_ssp_ce_PingRequest,
    _suki_pb_ssp_ce_PingResponse,
    _suki_pb_ssp_ce_PingRequest__Output,
    _suki_pb_ssp_ce_PingResponse__Output
  >;
  PingPongAuth: MethodDefinition<
    _suki_pb_ssp_ce_PingRequestAuth,
    _suki_pb_ssp_ce_PingResponseAuth,
    _suki_pb_ssp_ce_PingRequestAuth__Output,
    _suki_pb_ssp_ce_PingResponseAuth__Output
  >;
}
