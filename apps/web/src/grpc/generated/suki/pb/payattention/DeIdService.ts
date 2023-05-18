// Original file: node_modules/protobufs/src/suki/pb/payattention/deid.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  DeIdRequest as _suki_pb_payattention_DeIdRequest,
  DeIdRequest__Output as _suki_pb_payattention_DeIdRequest__Output
} from "../../../suki/pb/payattention/DeIdRequest";
import type {
  DeIdResponse as _suki_pb_payattention_DeIdResponse,
  DeIdResponse__Output as _suki_pb_payattention_DeIdResponse__Output
} from "../../../suki/pb/payattention/DeIdResponse";

export interface DeIdServiceClient extends grpc.Client {
  DeIdentify(
    argument: _suki_pb_payattention_DeIdRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_payattention_DeIdResponse__Output>
  ): grpc.ClientUnaryCall;
  DeIdentify(
    argument: _suki_pb_payattention_DeIdRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_payattention_DeIdResponse__Output>
  ): grpc.ClientUnaryCall;
  DeIdentify(
    argument: _suki_pb_payattention_DeIdRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_payattention_DeIdResponse__Output>
  ): grpc.ClientUnaryCall;
  DeIdentify(
    argument: _suki_pb_payattention_DeIdRequest,
    callback: grpc.requestCallback<_suki_pb_payattention_DeIdResponse__Output>
  ): grpc.ClientUnaryCall;
  deIdentify(
    argument: _suki_pb_payattention_DeIdRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_payattention_DeIdResponse__Output>
  ): grpc.ClientUnaryCall;
  deIdentify(
    argument: _suki_pb_payattention_DeIdRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_payattention_DeIdResponse__Output>
  ): grpc.ClientUnaryCall;
  deIdentify(
    argument: _suki_pb_payattention_DeIdRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_payattention_DeIdResponse__Output>
  ): grpc.ClientUnaryCall;
  deIdentify(
    argument: _suki_pb_payattention_DeIdRequest,
    callback: grpc.requestCallback<_suki_pb_payattention_DeIdResponse__Output>
  ): grpc.ClientUnaryCall;
}

export interface DeIdServiceHandlers extends grpc.UntypedServiceImplementation {
  DeIdentify: grpc.handleUnaryCall<_suki_pb_payattention_DeIdRequest__Output, _suki_pb_payattention_DeIdResponse>;
}

export interface DeIdServiceDefinition extends grpc.ServiceDefinition {
  DeIdentify: MethodDefinition<
    _suki_pb_payattention_DeIdRequest,
    _suki_pb_payattention_DeIdResponse,
    _suki_pb_payattention_DeIdRequest__Output,
    _suki_pb_payattention_DeIdResponse__Output
  >;
}
