// Original file: node_modules/protobufs/src/suki/pb/s2/s2.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  DialogRequest as _suki_pb_s2_DialogRequest,
  DialogRequest__Output as _suki_pb_s2_DialogRequest__Output
} from "../../../suki/pb/s2/DialogRequest";
import type {
  DialogResponse as _suki_pb_s2_DialogResponse,
  DialogResponse__Output as _suki_pb_s2_DialogResponse__Output
} from "../../../suki/pb/s2/DialogResponse";
import type {
  PingRequest as _suki_pb_s2_PingRequest,
  PingRequest__Output as _suki_pb_s2_PingRequest__Output
} from "../../../suki/pb/s2/PingRequest";
import type {
  PongReply as _suki_pb_s2_PongReply,
  PongReply__Output as _suki_pb_s2_PongReply__Output
} from "../../../suki/pb/s2/PongReply";

export interface S2_StreamerClient extends grpc.Client {
  Dialog(
    metadata: grpc.Metadata,
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<_suki_pb_s2_DialogRequest, _suki_pb_s2_DialogResponse__Output>;
  Dialog(
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<_suki_pb_s2_DialogRequest, _suki_pb_s2_DialogResponse__Output>;
  dialog(
    metadata: grpc.Metadata,
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<_suki_pb_s2_DialogRequest, _suki_pb_s2_DialogResponse__Output>;
  dialog(
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<_suki_pb_s2_DialogRequest, _suki_pb_s2_DialogResponse__Output>;

  PingPong(
    argument: _suki_pb_s2_PingRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_s2_PongReply__Output>
  ): grpc.ClientUnaryCall;
  PingPong(
    argument: _suki_pb_s2_PingRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_s2_PongReply__Output>
  ): grpc.ClientUnaryCall;
  PingPong(
    argument: _suki_pb_s2_PingRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_s2_PongReply__Output>
  ): grpc.ClientUnaryCall;
  PingPong(
    argument: _suki_pb_s2_PingRequest,
    callback: grpc.requestCallback<_suki_pb_s2_PongReply__Output>
  ): grpc.ClientUnaryCall;
  pingPong(
    argument: _suki_pb_s2_PingRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_s2_PongReply__Output>
  ): grpc.ClientUnaryCall;
  pingPong(
    argument: _suki_pb_s2_PingRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_s2_PongReply__Output>
  ): grpc.ClientUnaryCall;
  pingPong(
    argument: _suki_pb_s2_PingRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_s2_PongReply__Output>
  ): grpc.ClientUnaryCall;
  pingPong(
    argument: _suki_pb_s2_PingRequest,
    callback: grpc.requestCallback<_suki_pb_s2_PongReply__Output>
  ): grpc.ClientUnaryCall;
}

export interface S2_StreamerHandlers extends grpc.UntypedServiceImplementation {
  Dialog: grpc.handleBidiStreamingCall<_suki_pb_s2_DialogRequest__Output, _suki_pb_s2_DialogResponse>;

  PingPong: grpc.handleUnaryCall<_suki_pb_s2_PingRequest__Output, _suki_pb_s2_PongReply>;
}

export interface S2_StreamerDefinition extends grpc.ServiceDefinition {
  Dialog: MethodDefinition<
    _suki_pb_s2_DialogRequest,
    _suki_pb_s2_DialogResponse,
    _suki_pb_s2_DialogRequest__Output,
    _suki_pb_s2_DialogResponse__Output
  >;
  PingPong: MethodDefinition<
    _suki_pb_s2_PingRequest,
    _suki_pb_s2_PongReply,
    _suki_pb_s2_PingRequest__Output,
    _suki_pb_s2_PongReply__Output
  >;
}
