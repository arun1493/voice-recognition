// Original file: node_modules/protobufs/src/learningmotors/pb/example.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  EchoNoScopeRequest as _learningmotors_pb_EchoNoScopeRequest,
  EchoNoScopeRequest__Output as _learningmotors_pb_EchoNoScopeRequest__Output
} from "../../learningmotors/pb/EchoNoScopeRequest";
import type {
  EchoNoScopeResponse as _learningmotors_pb_EchoNoScopeResponse,
  EchoNoScopeResponse__Output as _learningmotors_pb_EchoNoScopeResponse__Output
} from "../../learningmotors/pb/EchoNoScopeResponse";
import type {
  EchoRequest as _learningmotors_pb_EchoRequest,
  EchoRequest__Output as _learningmotors_pb_EchoRequest__Output
} from "../../learningmotors/pb/EchoRequest";
import type {
  EchoResponse as _learningmotors_pb_EchoResponse,
  EchoResponse__Output as _learningmotors_pb_EchoResponse__Output
} from "../../learningmotors/pb/EchoResponse";

export interface ExampleServiceClient extends grpc.Client {
  Echo(
    argument: _learningmotors_pb_EchoRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_EchoResponse__Output>
  ): grpc.ClientUnaryCall;
  Echo(
    argument: _learningmotors_pb_EchoRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_EchoResponse__Output>
  ): grpc.ClientUnaryCall;
  Echo(
    argument: _learningmotors_pb_EchoRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_EchoResponse__Output>
  ): grpc.ClientUnaryCall;
  Echo(
    argument: _learningmotors_pb_EchoRequest,
    callback: grpc.requestCallback<_learningmotors_pb_EchoResponse__Output>
  ): grpc.ClientUnaryCall;
  echo(
    argument: _learningmotors_pb_EchoRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_EchoResponse__Output>
  ): grpc.ClientUnaryCall;
  echo(
    argument: _learningmotors_pb_EchoRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_EchoResponse__Output>
  ): grpc.ClientUnaryCall;
  echo(
    argument: _learningmotors_pb_EchoRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_EchoResponse__Output>
  ): grpc.ClientUnaryCall;
  echo(
    argument: _learningmotors_pb_EchoRequest,
    callback: grpc.requestCallback<_learningmotors_pb_EchoResponse__Output>
  ): grpc.ClientUnaryCall;

  EchoNoScope(
    argument: _learningmotors_pb_EchoNoScopeRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_EchoNoScopeResponse__Output>
  ): grpc.ClientUnaryCall;
  EchoNoScope(
    argument: _learningmotors_pb_EchoNoScopeRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_EchoNoScopeResponse__Output>
  ): grpc.ClientUnaryCall;
  EchoNoScope(
    argument: _learningmotors_pb_EchoNoScopeRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_EchoNoScopeResponse__Output>
  ): grpc.ClientUnaryCall;
  EchoNoScope(
    argument: _learningmotors_pb_EchoNoScopeRequest,
    callback: grpc.requestCallback<_learningmotors_pb_EchoNoScopeResponse__Output>
  ): grpc.ClientUnaryCall;
  echoNoScope(
    argument: _learningmotors_pb_EchoNoScopeRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_EchoNoScopeResponse__Output>
  ): grpc.ClientUnaryCall;
  echoNoScope(
    argument: _learningmotors_pb_EchoNoScopeRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_EchoNoScopeResponse__Output>
  ): grpc.ClientUnaryCall;
  echoNoScope(
    argument: _learningmotors_pb_EchoNoScopeRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_EchoNoScopeResponse__Output>
  ): grpc.ClientUnaryCall;
  echoNoScope(
    argument: _learningmotors_pb_EchoNoScopeRequest,
    callback: grpc.requestCallback<_learningmotors_pb_EchoNoScopeResponse__Output>
  ): grpc.ClientUnaryCall;
}

export interface ExampleServiceHandlers extends grpc.UntypedServiceImplementation {
  Echo: grpc.handleUnaryCall<_learningmotors_pb_EchoRequest__Output, _learningmotors_pb_EchoResponse>;

  EchoNoScope: grpc.handleUnaryCall<
    _learningmotors_pb_EchoNoScopeRequest__Output,
    _learningmotors_pb_EchoNoScopeResponse
  >;
}

export interface ExampleServiceDefinition extends grpc.ServiceDefinition {
  Echo: MethodDefinition<
    _learningmotors_pb_EchoRequest,
    _learningmotors_pb_EchoResponse,
    _learningmotors_pb_EchoRequest__Output,
    _learningmotors_pb_EchoResponse__Output
  >;
  EchoNoScope: MethodDefinition<
    _learningmotors_pb_EchoNoScopeRequest,
    _learningmotors_pb_EchoNoScopeResponse,
    _learningmotors_pb_EchoNoScopeRequest__Output,
    _learningmotors_pb_EchoNoScopeResponse__Output
  >;
}
