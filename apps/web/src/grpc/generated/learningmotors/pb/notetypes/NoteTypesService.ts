// Original file: node_modules/protobufs/src/learningmotors/pb/notetypes/notetypes.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  CopyBySpecialtiesRequest as _learningmotors_pb_notetypes_CopyBySpecialtiesRequest,
  CopyBySpecialtiesRequest__Output as _learningmotors_pb_notetypes_CopyBySpecialtiesRequest__Output
} from "../../../learningmotors/pb/notetypes/CopyBySpecialtiesRequest";
import type {
  CopyBySpecialtiesResponse as _learningmotors_pb_notetypes_CopyBySpecialtiesResponse,
  CopyBySpecialtiesResponse__Output as _learningmotors_pb_notetypes_CopyBySpecialtiesResponse__Output
} from "../../../learningmotors/pb/notetypes/CopyBySpecialtiesResponse";
import type {
  CopyRequest as _learningmotors_pb_notetypes_CopyRequest,
  CopyRequest__Output as _learningmotors_pb_notetypes_CopyRequest__Output
} from "../../../learningmotors/pb/notetypes/CopyRequest";
import type {
  CopyResponse as _learningmotors_pb_notetypes_CopyResponse,
  CopyResponse__Output as _learningmotors_pb_notetypes_CopyResponse__Output
} from "../../../learningmotors/pb/notetypes/CopyResponse";
import type {
  CreateRequest as _learningmotors_pb_notetypes_CreateRequest,
  CreateRequest__Output as _learningmotors_pb_notetypes_CreateRequest__Output
} from "../../../learningmotors/pb/notetypes/CreateRequest";
import type {
  CreateResponse as _learningmotors_pb_notetypes_CreateResponse,
  CreateResponse__Output as _learningmotors_pb_notetypes_CreateResponse__Output
} from "../../../learningmotors/pb/notetypes/CreateResponse";
import type {
  DeleteRequest as _learningmotors_pb_notetypes_DeleteRequest,
  DeleteRequest__Output as _learningmotors_pb_notetypes_DeleteRequest__Output
} from "../../../learningmotors/pb/notetypes/DeleteRequest";
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output
} from "../../../google/protobuf/Empty";
import type {
  GetRequest as _learningmotors_pb_notetypes_GetRequest,
  GetRequest__Output as _learningmotors_pb_notetypes_GetRequest__Output
} from "../../../learningmotors/pb/notetypes/GetRequest";
import type {
  GetResponse as _learningmotors_pb_notetypes_GetResponse,
  GetResponse__Output as _learningmotors_pb_notetypes_GetResponse__Output
} from "../../../learningmotors/pb/notetypes/GetResponse";
import type {
  MigrateSlateRequest as _learningmotors_pb_notetypes_MigrateSlateRequest,
  MigrateSlateRequest__Output as _learningmotors_pb_notetypes_MigrateSlateRequest__Output
} from "../../../learningmotors/pb/notetypes/MigrateSlateRequest";
import type {
  UpdateRequest as _learningmotors_pb_notetypes_UpdateRequest,
  UpdateRequest__Output as _learningmotors_pb_notetypes_UpdateRequest__Output
} from "../../../learningmotors/pb/notetypes/UpdateRequest";
import type {
  UpdateResponse as _learningmotors_pb_notetypes_UpdateResponse,
  UpdateResponse__Output as _learningmotors_pb_notetypes_UpdateResponse__Output
} from "../../../learningmotors/pb/notetypes/UpdateResponse";

export interface NoteTypesServiceClient extends grpc.Client {
  Copy(
    argument: _learningmotors_pb_notetypes_CopyRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_notetypes_CopyResponse__Output>
  ): grpc.ClientUnaryCall;
  Copy(
    argument: _learningmotors_pb_notetypes_CopyRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_notetypes_CopyResponse__Output>
  ): grpc.ClientUnaryCall;
  Copy(
    argument: _learningmotors_pb_notetypes_CopyRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_notetypes_CopyResponse__Output>
  ): grpc.ClientUnaryCall;
  Copy(
    argument: _learningmotors_pb_notetypes_CopyRequest,
    callback: grpc.requestCallback<_learningmotors_pb_notetypes_CopyResponse__Output>
  ): grpc.ClientUnaryCall;
  copy(
    argument: _learningmotors_pb_notetypes_CopyRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_notetypes_CopyResponse__Output>
  ): grpc.ClientUnaryCall;
  copy(
    argument: _learningmotors_pb_notetypes_CopyRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_notetypes_CopyResponse__Output>
  ): grpc.ClientUnaryCall;
  copy(
    argument: _learningmotors_pb_notetypes_CopyRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_notetypes_CopyResponse__Output>
  ): grpc.ClientUnaryCall;
  copy(
    argument: _learningmotors_pb_notetypes_CopyRequest,
    callback: grpc.requestCallback<_learningmotors_pb_notetypes_CopyResponse__Output>
  ): grpc.ClientUnaryCall;

  CopyBySpecialties(
    argument: _learningmotors_pb_notetypes_CopyBySpecialtiesRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_notetypes_CopyBySpecialtiesResponse__Output>
  ): grpc.ClientUnaryCall;
  CopyBySpecialties(
    argument: _learningmotors_pb_notetypes_CopyBySpecialtiesRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_notetypes_CopyBySpecialtiesResponse__Output>
  ): grpc.ClientUnaryCall;
  CopyBySpecialties(
    argument: _learningmotors_pb_notetypes_CopyBySpecialtiesRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_notetypes_CopyBySpecialtiesResponse__Output>
  ): grpc.ClientUnaryCall;
  CopyBySpecialties(
    argument: _learningmotors_pb_notetypes_CopyBySpecialtiesRequest,
    callback: grpc.requestCallback<_learningmotors_pb_notetypes_CopyBySpecialtiesResponse__Output>
  ): grpc.ClientUnaryCall;
  copyBySpecialties(
    argument: _learningmotors_pb_notetypes_CopyBySpecialtiesRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_notetypes_CopyBySpecialtiesResponse__Output>
  ): grpc.ClientUnaryCall;
  copyBySpecialties(
    argument: _learningmotors_pb_notetypes_CopyBySpecialtiesRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_notetypes_CopyBySpecialtiesResponse__Output>
  ): grpc.ClientUnaryCall;
  copyBySpecialties(
    argument: _learningmotors_pb_notetypes_CopyBySpecialtiesRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_notetypes_CopyBySpecialtiesResponse__Output>
  ): grpc.ClientUnaryCall;
  copyBySpecialties(
    argument: _learningmotors_pb_notetypes_CopyBySpecialtiesRequest,
    callback: grpc.requestCallback<_learningmotors_pb_notetypes_CopyBySpecialtiesResponse__Output>
  ): grpc.ClientUnaryCall;

  Create(
    argument: _learningmotors_pb_notetypes_CreateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_notetypes_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  Create(
    argument: _learningmotors_pb_notetypes_CreateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_notetypes_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  Create(
    argument: _learningmotors_pb_notetypes_CreateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_notetypes_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  Create(
    argument: _learningmotors_pb_notetypes_CreateRequest,
    callback: grpc.requestCallback<_learningmotors_pb_notetypes_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  create(
    argument: _learningmotors_pb_notetypes_CreateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_notetypes_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  create(
    argument: _learningmotors_pb_notetypes_CreateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_notetypes_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  create(
    argument: _learningmotors_pb_notetypes_CreateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_notetypes_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  create(
    argument: _learningmotors_pb_notetypes_CreateRequest,
    callback: grpc.requestCallback<_learningmotors_pb_notetypes_CreateResponse__Output>
  ): grpc.ClientUnaryCall;

  Delete(
    argument: _learningmotors_pb_notetypes_DeleteRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Delete(
    argument: _learningmotors_pb_notetypes_DeleteRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Delete(
    argument: _learningmotors_pb_notetypes_DeleteRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Delete(
    argument: _learningmotors_pb_notetypes_DeleteRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  delete(
    argument: _learningmotors_pb_notetypes_DeleteRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  delete(
    argument: _learningmotors_pb_notetypes_DeleteRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  delete(
    argument: _learningmotors_pb_notetypes_DeleteRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  delete(
    argument: _learningmotors_pb_notetypes_DeleteRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  Get(
    argument: _learningmotors_pb_notetypes_GetRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_notetypes_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  Get(
    argument: _learningmotors_pb_notetypes_GetRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_notetypes_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  Get(
    argument: _learningmotors_pb_notetypes_GetRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_notetypes_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  Get(
    argument: _learningmotors_pb_notetypes_GetRequest,
    callback: grpc.requestCallback<_learningmotors_pb_notetypes_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_notetypes_GetRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_notetypes_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_notetypes_GetRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_notetypes_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_notetypes_GetRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_notetypes_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_notetypes_GetRequest,
    callback: grpc.requestCallback<_learningmotors_pb_notetypes_GetResponse__Output>
  ): grpc.ClientUnaryCall;

  MigrateSlate(
    argument: _learningmotors_pb_notetypes_MigrateSlateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  MigrateSlate(
    argument: _learningmotors_pb_notetypes_MigrateSlateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  MigrateSlate(
    argument: _learningmotors_pb_notetypes_MigrateSlateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  MigrateSlate(
    argument: _learningmotors_pb_notetypes_MigrateSlateRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  migrateSlate(
    argument: _learningmotors_pb_notetypes_MigrateSlateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  migrateSlate(
    argument: _learningmotors_pb_notetypes_MigrateSlateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  migrateSlate(
    argument: _learningmotors_pb_notetypes_MigrateSlateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  migrateSlate(
    argument: _learningmotors_pb_notetypes_MigrateSlateRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  Update(
    argument: _learningmotors_pb_notetypes_UpdateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_notetypes_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  Update(
    argument: _learningmotors_pb_notetypes_UpdateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_notetypes_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  Update(
    argument: _learningmotors_pb_notetypes_UpdateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_notetypes_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  Update(
    argument: _learningmotors_pb_notetypes_UpdateRequest,
    callback: grpc.requestCallback<_learningmotors_pb_notetypes_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  update(
    argument: _learningmotors_pb_notetypes_UpdateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_notetypes_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  update(
    argument: _learningmotors_pb_notetypes_UpdateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_notetypes_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  update(
    argument: _learningmotors_pb_notetypes_UpdateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_notetypes_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  update(
    argument: _learningmotors_pb_notetypes_UpdateRequest,
    callback: grpc.requestCallback<_learningmotors_pb_notetypes_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
}

export interface NoteTypesServiceHandlers extends grpc.UntypedServiceImplementation {
  Copy: grpc.handleUnaryCall<
    _learningmotors_pb_notetypes_CopyRequest__Output,
    _learningmotors_pb_notetypes_CopyResponse
  >;

  CopyBySpecialties: grpc.handleUnaryCall<
    _learningmotors_pb_notetypes_CopyBySpecialtiesRequest__Output,
    _learningmotors_pb_notetypes_CopyBySpecialtiesResponse
  >;

  Create: grpc.handleUnaryCall<
    _learningmotors_pb_notetypes_CreateRequest__Output,
    _learningmotors_pb_notetypes_CreateResponse
  >;

  Delete: grpc.handleUnaryCall<_learningmotors_pb_notetypes_DeleteRequest__Output, _google_protobuf_Empty>;

  Get: grpc.handleUnaryCall<_learningmotors_pb_notetypes_GetRequest__Output, _learningmotors_pb_notetypes_GetResponse>;

  MigrateSlate: grpc.handleUnaryCall<_learningmotors_pb_notetypes_MigrateSlateRequest__Output, _google_protobuf_Empty>;

  Update: grpc.handleUnaryCall<
    _learningmotors_pb_notetypes_UpdateRequest__Output,
    _learningmotors_pb_notetypes_UpdateResponse
  >;
}

export interface NoteTypesServiceDefinition extends grpc.ServiceDefinition {
  Copy: MethodDefinition<
    _learningmotors_pb_notetypes_CopyRequest,
    _learningmotors_pb_notetypes_CopyResponse,
    _learningmotors_pb_notetypes_CopyRequest__Output,
    _learningmotors_pb_notetypes_CopyResponse__Output
  >;
  CopyBySpecialties: MethodDefinition<
    _learningmotors_pb_notetypes_CopyBySpecialtiesRequest,
    _learningmotors_pb_notetypes_CopyBySpecialtiesResponse,
    _learningmotors_pb_notetypes_CopyBySpecialtiesRequest__Output,
    _learningmotors_pb_notetypes_CopyBySpecialtiesResponse__Output
  >;
  Create: MethodDefinition<
    _learningmotors_pb_notetypes_CreateRequest,
    _learningmotors_pb_notetypes_CreateResponse,
    _learningmotors_pb_notetypes_CreateRequest__Output,
    _learningmotors_pb_notetypes_CreateResponse__Output
  >;
  Delete: MethodDefinition<
    _learningmotors_pb_notetypes_DeleteRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_notetypes_DeleteRequest__Output,
    _google_protobuf_Empty__Output
  >;
  Get: MethodDefinition<
    _learningmotors_pb_notetypes_GetRequest,
    _learningmotors_pb_notetypes_GetResponse,
    _learningmotors_pb_notetypes_GetRequest__Output,
    _learningmotors_pb_notetypes_GetResponse__Output
  >;
  MigrateSlate: MethodDefinition<
    _learningmotors_pb_notetypes_MigrateSlateRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_notetypes_MigrateSlateRequest__Output,
    _google_protobuf_Empty__Output
  >;
  Update: MethodDefinition<
    _learningmotors_pb_notetypes_UpdateRequest,
    _learningmotors_pb_notetypes_UpdateResponse,
    _learningmotors_pb_notetypes_UpdateRequest__Output,
    _learningmotors_pb_notetypes_UpdateResponse__Output
  >;
}
