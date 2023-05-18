// Original file: node_modules/protobufs/src/suki/pb/ml/ms_online.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  RetrainRequest as _suki_pb_ml_RetrainRequest,
  RetrainRequest__Output as _suki_pb_ml_RetrainRequest__Output
} from "../../../suki/pb/ml/RetrainRequest";
import type {
  RetrainResponse as _suki_pb_ml_RetrainResponse,
  RetrainResponse__Output as _suki_pb_ml_RetrainResponse__Output
} from "../../../suki/pb/ml/RetrainResponse";

export interface MsOnlineClient extends grpc.Client {
  Retrain(
    argument: _suki_pb_ml_RetrainRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ml_RetrainResponse__Output>
  ): grpc.ClientUnaryCall;
  Retrain(
    argument: _suki_pb_ml_RetrainRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ml_RetrainResponse__Output>
  ): grpc.ClientUnaryCall;
  Retrain(
    argument: _suki_pb_ml_RetrainRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ml_RetrainResponse__Output>
  ): grpc.ClientUnaryCall;
  Retrain(
    argument: _suki_pb_ml_RetrainRequest,
    callback: grpc.requestCallback<_suki_pb_ml_RetrainResponse__Output>
  ): grpc.ClientUnaryCall;
  retrain(
    argument: _suki_pb_ml_RetrainRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ml_RetrainResponse__Output>
  ): grpc.ClientUnaryCall;
  retrain(
    argument: _suki_pb_ml_RetrainRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ml_RetrainResponse__Output>
  ): grpc.ClientUnaryCall;
  retrain(
    argument: _suki_pb_ml_RetrainRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ml_RetrainResponse__Output>
  ): grpc.ClientUnaryCall;
  retrain(
    argument: _suki_pb_ml_RetrainRequest,
    callback: grpc.requestCallback<_suki_pb_ml_RetrainResponse__Output>
  ): grpc.ClientUnaryCall;
}

export interface MsOnlineHandlers extends grpc.UntypedServiceImplementation {
  Retrain: grpc.handleUnaryCall<_suki_pb_ml_RetrainRequest__Output, _suki_pb_ml_RetrainResponse>;
}

export interface MsOnlineDefinition extends grpc.ServiceDefinition {
  Retrain: MethodDefinition<
    _suki_pb_ml_RetrainRequest,
    _suki_pb_ml_RetrainResponse,
    _suki_pb_ml_RetrainRequest__Output,
    _suki_pb_ml_RetrainResponse__Output
  >;
}
