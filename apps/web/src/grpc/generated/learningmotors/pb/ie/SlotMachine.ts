// Original file: node_modules/protobufs/src/learningmotors/pb/ie/slotmachine.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  ResolveRequest as _learningmotors_pb_ie_ResolveRequest,
  ResolveRequest__Output as _learningmotors_pb_ie_ResolveRequest__Output
} from "../../../learningmotors/pb/ie/ResolveRequest";
import type {
  ResolveResponse as _learningmotors_pb_ie_ResolveResponse,
  ResolveResponse__Output as _learningmotors_pb_ie_ResolveResponse__Output
} from "../../../learningmotors/pb/ie/ResolveResponse";

export interface SlotMachineClient extends grpc.Client {
  Resolve(
    argument: _learningmotors_pb_ie_ResolveRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_ie_ResolveResponse__Output>
  ): grpc.ClientUnaryCall;
  Resolve(
    argument: _learningmotors_pb_ie_ResolveRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_ie_ResolveResponse__Output>
  ): grpc.ClientUnaryCall;
  Resolve(
    argument: _learningmotors_pb_ie_ResolveRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_ie_ResolveResponse__Output>
  ): grpc.ClientUnaryCall;
  Resolve(
    argument: _learningmotors_pb_ie_ResolveRequest,
    callback: grpc.requestCallback<_learningmotors_pb_ie_ResolveResponse__Output>
  ): grpc.ClientUnaryCall;
  resolve(
    argument: _learningmotors_pb_ie_ResolveRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_ie_ResolveResponse__Output>
  ): grpc.ClientUnaryCall;
  resolve(
    argument: _learningmotors_pb_ie_ResolveRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_ie_ResolveResponse__Output>
  ): grpc.ClientUnaryCall;
  resolve(
    argument: _learningmotors_pb_ie_ResolveRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_ie_ResolveResponse__Output>
  ): grpc.ClientUnaryCall;
  resolve(
    argument: _learningmotors_pb_ie_ResolveRequest,
    callback: grpc.requestCallback<_learningmotors_pb_ie_ResolveResponse__Output>
  ): grpc.ClientUnaryCall;
}

export interface SlotMachineHandlers extends grpc.UntypedServiceImplementation {
  Resolve: grpc.handleUnaryCall<_learningmotors_pb_ie_ResolveRequest__Output, _learningmotors_pb_ie_ResolveResponse>;
}

export interface SlotMachineDefinition extends grpc.ServiceDefinition {
  Resolve: MethodDefinition<
    _learningmotors_pb_ie_ResolveRequest,
    _learningmotors_pb_ie_ResolveResponse,
    _learningmotors_pb_ie_ResolveRequest__Output,
    _learningmotors_pb_ie_ResolveResponse__Output
  >;
}
