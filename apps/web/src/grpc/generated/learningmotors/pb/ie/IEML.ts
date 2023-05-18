// Original file: node_modules/protobufs/src/learningmotors/pb/ie/ie_ml.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  Request as _learningmotors_pb_ie_Request,
  Request__Output as _learningmotors_pb_ie_Request__Output
} from "../../../learningmotors/pb/ie/Request";
import type {
  Response as _learningmotors_pb_ie_Response,
  Response__Output as _learningmotors_pb_ie_Response__Output
} from "../../../learningmotors/pb/ie/Response";

export interface IEMLClient extends grpc.Client {
  Extract(
    argument: _learningmotors_pb_ie_Request,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_ie_Response__Output>
  ): grpc.ClientUnaryCall;
  Extract(
    argument: _learningmotors_pb_ie_Request,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_ie_Response__Output>
  ): grpc.ClientUnaryCall;
  Extract(
    argument: _learningmotors_pb_ie_Request,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_ie_Response__Output>
  ): grpc.ClientUnaryCall;
  Extract(
    argument: _learningmotors_pb_ie_Request,
    callback: grpc.requestCallback<_learningmotors_pb_ie_Response__Output>
  ): grpc.ClientUnaryCall;
  extract(
    argument: _learningmotors_pb_ie_Request,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_ie_Response__Output>
  ): grpc.ClientUnaryCall;
  extract(
    argument: _learningmotors_pb_ie_Request,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_ie_Response__Output>
  ): grpc.ClientUnaryCall;
  extract(
    argument: _learningmotors_pb_ie_Request,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_ie_Response__Output>
  ): grpc.ClientUnaryCall;
  extract(
    argument: _learningmotors_pb_ie_Request,
    callback: grpc.requestCallback<_learningmotors_pb_ie_Response__Output>
  ): grpc.ClientUnaryCall;
}

export interface IEMLHandlers extends grpc.UntypedServiceImplementation {
  Extract: grpc.handleUnaryCall<_learningmotors_pb_ie_Request__Output, _learningmotors_pb_ie_Response>;
}

export interface IEMLDefinition extends grpc.ServiceDefinition {
  Extract: MethodDefinition<
    _learningmotors_pb_ie_Request,
    _learningmotors_pb_ie_Response,
    _learningmotors_pb_ie_Request__Output,
    _learningmotors_pb_ie_Response__Output
  >;
}
