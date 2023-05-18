// Original file: node_modules/protobufs/src/learningmotors/pb/emr_notetypes/emr_notetypes.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  CreateOrUpdateRequest as _learningmotors_pb_emr_notetypes_CreateOrUpdateRequest,
  CreateOrUpdateRequest__Output as _learningmotors_pb_emr_notetypes_CreateOrUpdateRequest__Output
} from "../../../learningmotors/pb/emr_notetypes/CreateOrUpdateRequest";
import type {
  CreateOrUpdateResponse as _learningmotors_pb_emr_notetypes_CreateOrUpdateResponse,
  CreateOrUpdateResponse__Output as _learningmotors_pb_emr_notetypes_CreateOrUpdateResponse__Output
} from "../../../learningmotors/pb/emr_notetypes/CreateOrUpdateResponse";
import type {
  DeleteRequest as _learningmotors_pb_emr_notetypes_DeleteRequest,
  DeleteRequest__Output as _learningmotors_pb_emr_notetypes_DeleteRequest__Output
} from "../../../learningmotors/pb/emr_notetypes/DeleteRequest";
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output
} from "../../../google/protobuf/Empty";
import type {
  GetDefaultNoteTypeRequest as _learningmotors_pb_emr_notetypes_GetDefaultNoteTypeRequest,
  GetDefaultNoteTypeRequest__Output as _learningmotors_pb_emr_notetypes_GetDefaultNoteTypeRequest__Output
} from "../../../learningmotors/pb/emr_notetypes/GetDefaultNoteTypeRequest";
import type {
  GetDefaultNoteTypeResponse as _learningmotors_pb_emr_notetypes_GetDefaultNoteTypeResponse,
  GetDefaultNoteTypeResponse__Output as _learningmotors_pb_emr_notetypes_GetDefaultNoteTypeResponse__Output
} from "../../../learningmotors/pb/emr_notetypes/GetDefaultNoteTypeResponse";
import type {
  GetRequest as _learningmotors_pb_emr_notetypes_GetRequest,
  GetRequest__Output as _learningmotors_pb_emr_notetypes_GetRequest__Output
} from "../../../learningmotors/pb/emr_notetypes/GetRequest";
import type {
  GetResponse as _learningmotors_pb_emr_notetypes_GetResponse,
  GetResponse__Output as _learningmotors_pb_emr_notetypes_GetResponse__Output
} from "../../../learningmotors/pb/emr_notetypes/GetResponse";
import type {
  SetDefaultNoteTypeRequest as _learningmotors_pb_emr_notetypes_SetDefaultNoteTypeRequest,
  SetDefaultNoteTypeRequest__Output as _learningmotors_pb_emr_notetypes_SetDefaultNoteTypeRequest__Output
} from "../../../learningmotors/pb/emr_notetypes/SetDefaultNoteTypeRequest";

export interface EmrNoteTypesServiceClient extends grpc.Client {
  CreateOrUpdate(
    argument: _learningmotors_pb_emr_notetypes_CreateOrUpdateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emr_notetypes_CreateOrUpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateOrUpdate(
    argument: _learningmotors_pb_emr_notetypes_CreateOrUpdateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emr_notetypes_CreateOrUpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateOrUpdate(
    argument: _learningmotors_pb_emr_notetypes_CreateOrUpdateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emr_notetypes_CreateOrUpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateOrUpdate(
    argument: _learningmotors_pb_emr_notetypes_CreateOrUpdateRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emr_notetypes_CreateOrUpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  createOrUpdate(
    argument: _learningmotors_pb_emr_notetypes_CreateOrUpdateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emr_notetypes_CreateOrUpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  createOrUpdate(
    argument: _learningmotors_pb_emr_notetypes_CreateOrUpdateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emr_notetypes_CreateOrUpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  createOrUpdate(
    argument: _learningmotors_pb_emr_notetypes_CreateOrUpdateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emr_notetypes_CreateOrUpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  createOrUpdate(
    argument: _learningmotors_pb_emr_notetypes_CreateOrUpdateRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emr_notetypes_CreateOrUpdateResponse__Output>
  ): grpc.ClientUnaryCall;

  Delete(
    argument: _learningmotors_pb_emr_notetypes_DeleteRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Delete(
    argument: _learningmotors_pb_emr_notetypes_DeleteRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Delete(
    argument: _learningmotors_pb_emr_notetypes_DeleteRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Delete(
    argument: _learningmotors_pb_emr_notetypes_DeleteRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  delete(
    argument: _learningmotors_pb_emr_notetypes_DeleteRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  delete(
    argument: _learningmotors_pb_emr_notetypes_DeleteRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  delete(
    argument: _learningmotors_pb_emr_notetypes_DeleteRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  delete(
    argument: _learningmotors_pb_emr_notetypes_DeleteRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  Get(
    argument: _learningmotors_pb_emr_notetypes_GetRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emr_notetypes_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  Get(
    argument: _learningmotors_pb_emr_notetypes_GetRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emr_notetypes_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  Get(
    argument: _learningmotors_pb_emr_notetypes_GetRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emr_notetypes_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  Get(
    argument: _learningmotors_pb_emr_notetypes_GetRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emr_notetypes_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_emr_notetypes_GetRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emr_notetypes_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_emr_notetypes_GetRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emr_notetypes_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_emr_notetypes_GetRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emr_notetypes_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_emr_notetypes_GetRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emr_notetypes_GetResponse__Output>
  ): grpc.ClientUnaryCall;

  GetDefaultNoteType(
    argument: _learningmotors_pb_emr_notetypes_GetDefaultNoteTypeRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emr_notetypes_GetDefaultNoteTypeResponse__Output>
  ): grpc.ClientUnaryCall;
  GetDefaultNoteType(
    argument: _learningmotors_pb_emr_notetypes_GetDefaultNoteTypeRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emr_notetypes_GetDefaultNoteTypeResponse__Output>
  ): grpc.ClientUnaryCall;
  GetDefaultNoteType(
    argument: _learningmotors_pb_emr_notetypes_GetDefaultNoteTypeRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emr_notetypes_GetDefaultNoteTypeResponse__Output>
  ): grpc.ClientUnaryCall;
  GetDefaultNoteType(
    argument: _learningmotors_pb_emr_notetypes_GetDefaultNoteTypeRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emr_notetypes_GetDefaultNoteTypeResponse__Output>
  ): grpc.ClientUnaryCall;
  getDefaultNoteType(
    argument: _learningmotors_pb_emr_notetypes_GetDefaultNoteTypeRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emr_notetypes_GetDefaultNoteTypeResponse__Output>
  ): grpc.ClientUnaryCall;
  getDefaultNoteType(
    argument: _learningmotors_pb_emr_notetypes_GetDefaultNoteTypeRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emr_notetypes_GetDefaultNoteTypeResponse__Output>
  ): grpc.ClientUnaryCall;
  getDefaultNoteType(
    argument: _learningmotors_pb_emr_notetypes_GetDefaultNoteTypeRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emr_notetypes_GetDefaultNoteTypeResponse__Output>
  ): grpc.ClientUnaryCall;
  getDefaultNoteType(
    argument: _learningmotors_pb_emr_notetypes_GetDefaultNoteTypeRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emr_notetypes_GetDefaultNoteTypeResponse__Output>
  ): grpc.ClientUnaryCall;

  SetDefaultNoteType(
    argument: _learningmotors_pb_emr_notetypes_SetDefaultNoteTypeRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  SetDefaultNoteType(
    argument: _learningmotors_pb_emr_notetypes_SetDefaultNoteTypeRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  SetDefaultNoteType(
    argument: _learningmotors_pb_emr_notetypes_SetDefaultNoteTypeRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  SetDefaultNoteType(
    argument: _learningmotors_pb_emr_notetypes_SetDefaultNoteTypeRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  setDefaultNoteType(
    argument: _learningmotors_pb_emr_notetypes_SetDefaultNoteTypeRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  setDefaultNoteType(
    argument: _learningmotors_pb_emr_notetypes_SetDefaultNoteTypeRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  setDefaultNoteType(
    argument: _learningmotors_pb_emr_notetypes_SetDefaultNoteTypeRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  setDefaultNoteType(
    argument: _learningmotors_pb_emr_notetypes_SetDefaultNoteTypeRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
}

export interface EmrNoteTypesServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateOrUpdate: grpc.handleUnaryCall<
    _learningmotors_pb_emr_notetypes_CreateOrUpdateRequest__Output,
    _learningmotors_pb_emr_notetypes_CreateOrUpdateResponse
  >;

  Delete: grpc.handleUnaryCall<_learningmotors_pb_emr_notetypes_DeleteRequest__Output, _google_protobuf_Empty>;

  Get: grpc.handleUnaryCall<
    _learningmotors_pb_emr_notetypes_GetRequest__Output,
    _learningmotors_pb_emr_notetypes_GetResponse
  >;

  GetDefaultNoteType: grpc.handleUnaryCall<
    _learningmotors_pb_emr_notetypes_GetDefaultNoteTypeRequest__Output,
    _learningmotors_pb_emr_notetypes_GetDefaultNoteTypeResponse
  >;

  SetDefaultNoteType: grpc.handleUnaryCall<
    _learningmotors_pb_emr_notetypes_SetDefaultNoteTypeRequest__Output,
    _google_protobuf_Empty
  >;
}

export interface EmrNoteTypesServiceDefinition extends grpc.ServiceDefinition {
  CreateOrUpdate: MethodDefinition<
    _learningmotors_pb_emr_notetypes_CreateOrUpdateRequest,
    _learningmotors_pb_emr_notetypes_CreateOrUpdateResponse,
    _learningmotors_pb_emr_notetypes_CreateOrUpdateRequest__Output,
    _learningmotors_pb_emr_notetypes_CreateOrUpdateResponse__Output
  >;
  Delete: MethodDefinition<
    _learningmotors_pb_emr_notetypes_DeleteRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_emr_notetypes_DeleteRequest__Output,
    _google_protobuf_Empty__Output
  >;
  Get: MethodDefinition<
    _learningmotors_pb_emr_notetypes_GetRequest,
    _learningmotors_pb_emr_notetypes_GetResponse,
    _learningmotors_pb_emr_notetypes_GetRequest__Output,
    _learningmotors_pb_emr_notetypes_GetResponse__Output
  >;
  GetDefaultNoteType: MethodDefinition<
    _learningmotors_pb_emr_notetypes_GetDefaultNoteTypeRequest,
    _learningmotors_pb_emr_notetypes_GetDefaultNoteTypeResponse,
    _learningmotors_pb_emr_notetypes_GetDefaultNoteTypeRequest__Output,
    _learningmotors_pb_emr_notetypes_GetDefaultNoteTypeResponse__Output
  >;
  SetDefaultNoteType: MethodDefinition<
    _learningmotors_pb_emr_notetypes_SetDefaultNoteTypeRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_emr_notetypes_SetDefaultNoteTypeRequest__Output,
    _google_protobuf_Empty__Output
  >;
}
