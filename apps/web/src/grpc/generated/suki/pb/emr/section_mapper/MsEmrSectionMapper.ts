// Original file: node_modules/protobufs/src/suki/pb/emr/section_mapper/ms_emr_section_mapper.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  CreateRequest as _suki_pb_emr_section_mapper_CreateRequest,
  CreateRequest__Output as _suki_pb_emr_section_mapper_CreateRequest__Output
} from "../../../../suki/pb/emr/section_mapper/CreateRequest";
import type {
  DeleteRequest as _suki_pb_emr_section_mapper_DeleteRequest,
  DeleteRequest__Output as _suki_pb_emr_section_mapper_DeleteRequest__Output
} from "../../../../suki/pb/emr/section_mapper/DeleteRequest";
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output
} from "../../../../google/protobuf/Empty";
import type {
  GetRequest as _suki_pb_emr_section_mapper_GetRequest,
  GetRequest__Output as _suki_pb_emr_section_mapper_GetRequest__Output
} from "../../../../suki/pb/emr/section_mapper/GetRequest";
import type {
  GetResponse as _suki_pb_emr_section_mapper_GetResponse,
  GetResponse__Output as _suki_pb_emr_section_mapper_GetResponse__Output
} from "../../../../suki/pb/emr/section_mapper/GetResponse";
import type {
  UpdateRequest as _suki_pb_emr_section_mapper_UpdateRequest,
  UpdateRequest__Output as _suki_pb_emr_section_mapper_UpdateRequest__Output
} from "../../../../suki/pb/emr/section_mapper/UpdateRequest";

export interface MsEmrSectionMapperClient extends grpc.Client {
  Create(
    argument: _suki_pb_emr_section_mapper_CreateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Create(
    argument: _suki_pb_emr_section_mapper_CreateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Create(
    argument: _suki_pb_emr_section_mapper_CreateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Create(
    argument: _suki_pb_emr_section_mapper_CreateRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  create(
    argument: _suki_pb_emr_section_mapper_CreateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  create(
    argument: _suki_pb_emr_section_mapper_CreateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  create(
    argument: _suki_pb_emr_section_mapper_CreateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  create(
    argument: _suki_pb_emr_section_mapper_CreateRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  Delete(
    argument: _suki_pb_emr_section_mapper_DeleteRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Delete(
    argument: _suki_pb_emr_section_mapper_DeleteRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Delete(
    argument: _suki_pb_emr_section_mapper_DeleteRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Delete(
    argument: _suki_pb_emr_section_mapper_DeleteRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  delete(
    argument: _suki_pb_emr_section_mapper_DeleteRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  delete(
    argument: _suki_pb_emr_section_mapper_DeleteRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  delete(
    argument: _suki_pb_emr_section_mapper_DeleteRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  delete(
    argument: _suki_pb_emr_section_mapper_DeleteRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  Get(
    argument: _suki_pb_emr_section_mapper_GetRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_emr_section_mapper_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  Get(
    argument: _suki_pb_emr_section_mapper_GetRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_emr_section_mapper_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  Get(
    argument: _suki_pb_emr_section_mapper_GetRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_emr_section_mapper_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  Get(
    argument: _suki_pb_emr_section_mapper_GetRequest,
    callback: grpc.requestCallback<_suki_pb_emr_section_mapper_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _suki_pb_emr_section_mapper_GetRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_emr_section_mapper_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _suki_pb_emr_section_mapper_GetRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_emr_section_mapper_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _suki_pb_emr_section_mapper_GetRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_emr_section_mapper_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _suki_pb_emr_section_mapper_GetRequest,
    callback: grpc.requestCallback<_suki_pb_emr_section_mapper_GetResponse__Output>
  ): grpc.ClientUnaryCall;

  Update(
    argument: _suki_pb_emr_section_mapper_UpdateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Update(
    argument: _suki_pb_emr_section_mapper_UpdateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Update(
    argument: _suki_pb_emr_section_mapper_UpdateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Update(
    argument: _suki_pb_emr_section_mapper_UpdateRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  update(
    argument: _suki_pb_emr_section_mapper_UpdateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  update(
    argument: _suki_pb_emr_section_mapper_UpdateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  update(
    argument: _suki_pb_emr_section_mapper_UpdateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  update(
    argument: _suki_pb_emr_section_mapper_UpdateRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
}

export interface MsEmrSectionMapperHandlers extends grpc.UntypedServiceImplementation {
  Create: grpc.handleUnaryCall<_suki_pb_emr_section_mapper_CreateRequest__Output, _google_protobuf_Empty>;

  Delete: grpc.handleUnaryCall<_suki_pb_emr_section_mapper_DeleteRequest__Output, _google_protobuf_Empty>;

  Get: grpc.handleUnaryCall<_suki_pb_emr_section_mapper_GetRequest__Output, _suki_pb_emr_section_mapper_GetResponse>;

  Update: grpc.handleUnaryCall<_suki_pb_emr_section_mapper_UpdateRequest__Output, _google_protobuf_Empty>;
}

export interface MsEmrSectionMapperDefinition extends grpc.ServiceDefinition {
  Create: MethodDefinition<
    _suki_pb_emr_section_mapper_CreateRequest,
    _google_protobuf_Empty,
    _suki_pb_emr_section_mapper_CreateRequest__Output,
    _google_protobuf_Empty__Output
  >;
  Delete: MethodDefinition<
    _suki_pb_emr_section_mapper_DeleteRequest,
    _google_protobuf_Empty,
    _suki_pb_emr_section_mapper_DeleteRequest__Output,
    _google_protobuf_Empty__Output
  >;
  Get: MethodDefinition<
    _suki_pb_emr_section_mapper_GetRequest,
    _suki_pb_emr_section_mapper_GetResponse,
    _suki_pb_emr_section_mapper_GetRequest__Output,
    _suki_pb_emr_section_mapper_GetResponse__Output
  >;
  Update: MethodDefinition<
    _suki_pb_emr_section_mapper_UpdateRequest,
    _google_protobuf_Empty,
    _suki_pb_emr_section_mapper_UpdateRequest__Output,
    _google_protobuf_Empty__Output
  >;
}
