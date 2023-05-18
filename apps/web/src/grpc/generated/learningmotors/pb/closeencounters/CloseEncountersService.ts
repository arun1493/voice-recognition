// Original file: node_modules/protobufs/src/learningmotors/pb/closeencounters/closeencounters.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output
} from "../../../google/protobuf/Empty";
import type {
  GetRequest as _learningmotors_pb_closeencounters_GetRequest,
  GetRequest__Output as _learningmotors_pb_closeencounters_GetRequest__Output
} from "../../../learningmotors/pb/closeencounters/GetRequest";
import type {
  GetResponse as _learningmotors_pb_closeencounters_GetResponse,
  GetResponse__Output as _learningmotors_pb_closeencounters_GetResponse__Output
} from "../../../learningmotors/pb/closeencounters/GetResponse";
import type {
  TriggerRefreshRequest as _learningmotors_pb_closeencounters_TriggerRefreshRequest,
  TriggerRefreshRequest__Output as _learningmotors_pb_closeencounters_TriggerRefreshRequest__Output
} from "../../../learningmotors/pb/closeencounters/TriggerRefreshRequest";

export interface CloseEncountersServiceClient extends grpc.Client {
  Get(
    argument: _learningmotors_pb_closeencounters_GetRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_closeencounters_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  Get(
    argument: _learningmotors_pb_closeencounters_GetRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_closeencounters_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  Get(
    argument: _learningmotors_pb_closeencounters_GetRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_closeencounters_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  Get(
    argument: _learningmotors_pb_closeencounters_GetRequest,
    callback: grpc.requestCallback<_learningmotors_pb_closeencounters_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_closeencounters_GetRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_closeencounters_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_closeencounters_GetRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_closeencounters_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_closeencounters_GetRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_closeencounters_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_closeencounters_GetRequest,
    callback: grpc.requestCallback<_learningmotors_pb_closeencounters_GetResponse__Output>
  ): grpc.ClientUnaryCall;

  TriggerRefresh(
    argument: _learningmotors_pb_closeencounters_TriggerRefreshRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  TriggerRefresh(
    argument: _learningmotors_pb_closeencounters_TriggerRefreshRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  TriggerRefresh(
    argument: _learningmotors_pb_closeencounters_TriggerRefreshRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  TriggerRefresh(
    argument: _learningmotors_pb_closeencounters_TriggerRefreshRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  triggerRefresh(
    argument: _learningmotors_pb_closeencounters_TriggerRefreshRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  triggerRefresh(
    argument: _learningmotors_pb_closeencounters_TriggerRefreshRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  triggerRefresh(
    argument: _learningmotors_pb_closeencounters_TriggerRefreshRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  triggerRefresh(
    argument: _learningmotors_pb_closeencounters_TriggerRefreshRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
}

export interface CloseEncountersServiceHandlers extends grpc.UntypedServiceImplementation {
  Get: grpc.handleUnaryCall<
    _learningmotors_pb_closeencounters_GetRequest__Output,
    _learningmotors_pb_closeencounters_GetResponse
  >;

  TriggerRefresh: grpc.handleUnaryCall<
    _learningmotors_pb_closeencounters_TriggerRefreshRequest__Output,
    _google_protobuf_Empty
  >;
}

export interface CloseEncountersServiceDefinition extends grpc.ServiceDefinition {
  Get: MethodDefinition<
    _learningmotors_pb_closeencounters_GetRequest,
    _learningmotors_pb_closeencounters_GetResponse,
    _learningmotors_pb_closeencounters_GetRequest__Output,
    _learningmotors_pb_closeencounters_GetResponse__Output
  >;
  TriggerRefresh: MethodDefinition<
    _learningmotors_pb_closeencounters_TriggerRefreshRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_closeencounters_TriggerRefreshRequest__Output,
    _google_protobuf_Empty__Output
  >;
}
