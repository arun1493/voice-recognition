// Original file: node_modules/protobufs/src/learningmotors/pb/unique/unique.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output
} from "../../../google/protobuf/Empty";
import type {
  GetRequest as _learningmotors_pb_unique_GetRequest,
  GetRequest__Output as _learningmotors_pb_unique_GetRequest__Output
} from "../../../learningmotors/pb/unique/GetRequest";
import type {
  GetResponse as _learningmotors_pb_unique_GetResponse,
  GetResponse__Output as _learningmotors_pb_unique_GetResponse__Output
} from "../../../learningmotors/pb/unique/GetResponse";
import type {
  UpdateRequest as _learningmotors_pb_unique_UpdateRequest,
  UpdateRequest__Output as _learningmotors_pb_unique_UpdateRequest__Output
} from "../../../learningmotors/pb/unique/UpdateRequest";

export interface UniqueServiceClient extends grpc.Client {
  Get(
    argument: _learningmotors_pb_unique_GetRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_unique_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  Get(
    argument: _learningmotors_pb_unique_GetRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_unique_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  Get(
    argument: _learningmotors_pb_unique_GetRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_unique_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  Get(
    argument: _learningmotors_pb_unique_GetRequest,
    callback: grpc.requestCallback<_learningmotors_pb_unique_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_unique_GetRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_unique_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_unique_GetRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_unique_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_unique_GetRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_unique_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_unique_GetRequest,
    callback: grpc.requestCallback<_learningmotors_pb_unique_GetResponse__Output>
  ): grpc.ClientUnaryCall;

  Update(
    argument: _learningmotors_pb_unique_UpdateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Update(
    argument: _learningmotors_pb_unique_UpdateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Update(
    argument: _learningmotors_pb_unique_UpdateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Update(
    argument: _learningmotors_pb_unique_UpdateRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  update(
    argument: _learningmotors_pb_unique_UpdateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  update(
    argument: _learningmotors_pb_unique_UpdateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  update(
    argument: _learningmotors_pb_unique_UpdateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  update(
    argument: _learningmotors_pb_unique_UpdateRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
}

export interface UniqueServiceHandlers extends grpc.UntypedServiceImplementation {
  Get: grpc.handleUnaryCall<_learningmotors_pb_unique_GetRequest__Output, _learningmotors_pb_unique_GetResponse>;

  Update: grpc.handleUnaryCall<_learningmotors_pb_unique_UpdateRequest__Output, _google_protobuf_Empty>;
}

export interface UniqueServiceDefinition extends grpc.ServiceDefinition {
  Get: MethodDefinition<
    _learningmotors_pb_unique_GetRequest,
    _learningmotors_pb_unique_GetResponse,
    _learningmotors_pb_unique_GetRequest__Output,
    _learningmotors_pb_unique_GetResponse__Output
  >;
  Update: MethodDefinition<
    _learningmotors_pb_unique_UpdateRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_unique_UpdateRequest__Output,
    _google_protobuf_Empty__Output
  >;
}
