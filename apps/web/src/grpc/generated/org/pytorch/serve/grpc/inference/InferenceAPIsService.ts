// Original file: node_modules/protobufs/src/suki/pb/ml/inference.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output
} from "../../../../../google/protobuf/Empty";
import type {
  PredictionResponse as _org_pytorch_serve_grpc_inference_PredictionResponse,
  PredictionResponse__Output as _org_pytorch_serve_grpc_inference_PredictionResponse__Output
} from "../../../../../org/pytorch/serve/grpc/inference/PredictionResponse";
import type {
  PredictionsRequest as _org_pytorch_serve_grpc_inference_PredictionsRequest,
  PredictionsRequest__Output as _org_pytorch_serve_grpc_inference_PredictionsRequest__Output
} from "../../../../../org/pytorch/serve/grpc/inference/PredictionsRequest";
import type {
  TorchServeHealthResponse as _org_pytorch_serve_grpc_inference_TorchServeHealthResponse,
  TorchServeHealthResponse__Output as _org_pytorch_serve_grpc_inference_TorchServeHealthResponse__Output
} from "../../../../../org/pytorch/serve/grpc/inference/TorchServeHealthResponse";

export interface InferenceAPIsServiceClient extends grpc.Client {
  Ping(
    argument: _google_protobuf_Empty,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_org_pytorch_serve_grpc_inference_TorchServeHealthResponse__Output>
  ): grpc.ClientUnaryCall;
  Ping(
    argument: _google_protobuf_Empty,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_org_pytorch_serve_grpc_inference_TorchServeHealthResponse__Output>
  ): grpc.ClientUnaryCall;
  Ping(
    argument: _google_protobuf_Empty,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_org_pytorch_serve_grpc_inference_TorchServeHealthResponse__Output>
  ): grpc.ClientUnaryCall;
  Ping(
    argument: _google_protobuf_Empty,
    callback: grpc.requestCallback<_org_pytorch_serve_grpc_inference_TorchServeHealthResponse__Output>
  ): grpc.ClientUnaryCall;
  ping(
    argument: _google_protobuf_Empty,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_org_pytorch_serve_grpc_inference_TorchServeHealthResponse__Output>
  ): grpc.ClientUnaryCall;
  ping(
    argument: _google_protobuf_Empty,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_org_pytorch_serve_grpc_inference_TorchServeHealthResponse__Output>
  ): grpc.ClientUnaryCall;
  ping(
    argument: _google_protobuf_Empty,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_org_pytorch_serve_grpc_inference_TorchServeHealthResponse__Output>
  ): grpc.ClientUnaryCall;
  ping(
    argument: _google_protobuf_Empty,
    callback: grpc.requestCallback<_org_pytorch_serve_grpc_inference_TorchServeHealthResponse__Output>
  ): grpc.ClientUnaryCall;

  Predictions(
    argument: _org_pytorch_serve_grpc_inference_PredictionsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_org_pytorch_serve_grpc_inference_PredictionResponse__Output>
  ): grpc.ClientUnaryCall;
  Predictions(
    argument: _org_pytorch_serve_grpc_inference_PredictionsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_org_pytorch_serve_grpc_inference_PredictionResponse__Output>
  ): grpc.ClientUnaryCall;
  Predictions(
    argument: _org_pytorch_serve_grpc_inference_PredictionsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_org_pytorch_serve_grpc_inference_PredictionResponse__Output>
  ): grpc.ClientUnaryCall;
  Predictions(
    argument: _org_pytorch_serve_grpc_inference_PredictionsRequest,
    callback: grpc.requestCallback<_org_pytorch_serve_grpc_inference_PredictionResponse__Output>
  ): grpc.ClientUnaryCall;
  predictions(
    argument: _org_pytorch_serve_grpc_inference_PredictionsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_org_pytorch_serve_grpc_inference_PredictionResponse__Output>
  ): grpc.ClientUnaryCall;
  predictions(
    argument: _org_pytorch_serve_grpc_inference_PredictionsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_org_pytorch_serve_grpc_inference_PredictionResponse__Output>
  ): grpc.ClientUnaryCall;
  predictions(
    argument: _org_pytorch_serve_grpc_inference_PredictionsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_org_pytorch_serve_grpc_inference_PredictionResponse__Output>
  ): grpc.ClientUnaryCall;
  predictions(
    argument: _org_pytorch_serve_grpc_inference_PredictionsRequest,
    callback: grpc.requestCallback<_org_pytorch_serve_grpc_inference_PredictionResponse__Output>
  ): grpc.ClientUnaryCall;
}

export interface InferenceAPIsServiceHandlers extends grpc.UntypedServiceImplementation {
  Ping: grpc.handleUnaryCall<
    _google_protobuf_Empty__Output,
    _org_pytorch_serve_grpc_inference_TorchServeHealthResponse
  >;

  Predictions: grpc.handleUnaryCall<
    _org_pytorch_serve_grpc_inference_PredictionsRequest__Output,
    _org_pytorch_serve_grpc_inference_PredictionResponse
  >;
}

export interface InferenceAPIsServiceDefinition extends grpc.ServiceDefinition {
  Ping: MethodDefinition<
    _google_protobuf_Empty,
    _org_pytorch_serve_grpc_inference_TorchServeHealthResponse,
    _google_protobuf_Empty__Output,
    _org_pytorch_serve_grpc_inference_TorchServeHealthResponse__Output
  >;
  Predictions: MethodDefinition<
    _org_pytorch_serve_grpc_inference_PredictionsRequest,
    _org_pytorch_serve_grpc_inference_PredictionResponse,
    _org_pytorch_serve_grpc_inference_PredictionsRequest__Output,
    _org_pytorch_serve_grpc_inference_PredictionResponse__Output
  >;
}
