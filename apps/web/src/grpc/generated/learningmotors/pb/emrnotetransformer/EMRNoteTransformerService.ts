// Original file: node_modules/protobufs/src/learningmotors/pb/emrnotetransformer/emrnotetransformer.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  TransformRequest as _learningmotors_pb_emrnotetransformer_TransformRequest,
  TransformRequest__Output as _learningmotors_pb_emrnotetransformer_TransformRequest__Output
} from "../../../learningmotors/pb/emrnotetransformer/TransformRequest";
import type {
  TransformResponse as _learningmotors_pb_emrnotetransformer_TransformResponse,
  TransformResponse__Output as _learningmotors_pb_emrnotetransformer_TransformResponse__Output
} from "../../../learningmotors/pb/emrnotetransformer/TransformResponse";

export interface EMRNoteTransformerServiceClient extends grpc.Client {
  Transform(
    argument: _learningmotors_pb_emrnotetransformer_TransformRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emrnotetransformer_TransformResponse__Output>
  ): grpc.ClientUnaryCall;
  Transform(
    argument: _learningmotors_pb_emrnotetransformer_TransformRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emrnotetransformer_TransformResponse__Output>
  ): grpc.ClientUnaryCall;
  Transform(
    argument: _learningmotors_pb_emrnotetransformer_TransformRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emrnotetransformer_TransformResponse__Output>
  ): grpc.ClientUnaryCall;
  Transform(
    argument: _learningmotors_pb_emrnotetransformer_TransformRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emrnotetransformer_TransformResponse__Output>
  ): grpc.ClientUnaryCall;
  transform(
    argument: _learningmotors_pb_emrnotetransformer_TransformRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emrnotetransformer_TransformResponse__Output>
  ): grpc.ClientUnaryCall;
  transform(
    argument: _learningmotors_pb_emrnotetransformer_TransformRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emrnotetransformer_TransformResponse__Output>
  ): grpc.ClientUnaryCall;
  transform(
    argument: _learningmotors_pb_emrnotetransformer_TransformRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emrnotetransformer_TransformResponse__Output>
  ): grpc.ClientUnaryCall;
  transform(
    argument: _learningmotors_pb_emrnotetransformer_TransformRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emrnotetransformer_TransformResponse__Output>
  ): grpc.ClientUnaryCall;
}

export interface EMRNoteTransformerServiceHandlers extends grpc.UntypedServiceImplementation {
  Transform: grpc.handleUnaryCall<
    _learningmotors_pb_emrnotetransformer_TransformRequest__Output,
    _learningmotors_pb_emrnotetransformer_TransformResponse
  >;
}

export interface EMRNoteTransformerServiceDefinition extends grpc.ServiceDefinition {
  Transform: MethodDefinition<
    _learningmotors_pb_emrnotetransformer_TransformRequest,
    _learningmotors_pb_emrnotetransformer_TransformResponse,
    _learningmotors_pb_emrnotetransformer_TransformRequest__Output,
    _learningmotors_pb_emrnotetransformer_TransformResponse__Output
  >;
}
