// Original file: node_modules/protobufs/src/learningmotors/pb/sectionmapper/sectionmapper.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output
} from "../../../google/protobuf/Empty";
import type {
  GetRequest as _learningmotors_pb_sectionmappper_GetRequest,
  GetRequest__Output as _learningmotors_pb_sectionmappper_GetRequest__Output
} from "../../../learningmotors/pb/sectionmappper/GetRequest";
import type {
  GetResponse as _learningmotors_pb_sectionmappper_GetResponse,
  GetResponse__Output as _learningmotors_pb_sectionmappper_GetResponse__Output
} from "../../../learningmotors/pb/sectionmappper/GetResponse";
import type {
  UpsertRequest as _learningmotors_pb_sectionmappper_UpsertRequest,
  UpsertRequest__Output as _learningmotors_pb_sectionmappper_UpsertRequest__Output
} from "../../../learningmotors/pb/sectionmappper/UpsertRequest";

export interface SectionMapperClient extends grpc.Client {
  Get(
    argument: _learningmotors_pb_sectionmappper_GetRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_sectionmappper_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  Get(
    argument: _learningmotors_pb_sectionmappper_GetRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_sectionmappper_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  Get(
    argument: _learningmotors_pb_sectionmappper_GetRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_sectionmappper_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  Get(
    argument: _learningmotors_pb_sectionmappper_GetRequest,
    callback: grpc.requestCallback<_learningmotors_pb_sectionmappper_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_sectionmappper_GetRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_sectionmappper_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_sectionmappper_GetRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_sectionmappper_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_sectionmappper_GetRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_sectionmappper_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_sectionmappper_GetRequest,
    callback: grpc.requestCallback<_learningmotors_pb_sectionmappper_GetResponse__Output>
  ): grpc.ClientUnaryCall;

  Upsert(
    argument: _learningmotors_pb_sectionmappper_UpsertRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Upsert(
    argument: _learningmotors_pb_sectionmappper_UpsertRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Upsert(
    argument: _learningmotors_pb_sectionmappper_UpsertRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Upsert(
    argument: _learningmotors_pb_sectionmappper_UpsertRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  upsert(
    argument: _learningmotors_pb_sectionmappper_UpsertRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  upsert(
    argument: _learningmotors_pb_sectionmappper_UpsertRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  upsert(
    argument: _learningmotors_pb_sectionmappper_UpsertRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  upsert(
    argument: _learningmotors_pb_sectionmappper_UpsertRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
}

export interface SectionMapperHandlers extends grpc.UntypedServiceImplementation {
  Get: grpc.handleUnaryCall<
    _learningmotors_pb_sectionmappper_GetRequest__Output,
    _learningmotors_pb_sectionmappper_GetResponse
  >;

  Upsert: grpc.handleUnaryCall<_learningmotors_pb_sectionmappper_UpsertRequest__Output, _google_protobuf_Empty>;
}

export interface SectionMapperDefinition extends grpc.ServiceDefinition {
  Get: MethodDefinition<
    _learningmotors_pb_sectionmappper_GetRequest,
    _learningmotors_pb_sectionmappper_GetResponse,
    _learningmotors_pb_sectionmappper_GetRequest__Output,
    _learningmotors_pb_sectionmappper_GetResponse__Output
  >;
  Upsert: MethodDefinition<
    _learningmotors_pb_sectionmappper_UpsertRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_sectionmappper_UpsertRequest__Output,
    _google_protobuf_Empty__Output
  >;
}
