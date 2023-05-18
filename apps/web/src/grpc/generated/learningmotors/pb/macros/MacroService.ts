// Original file: node_modules/protobufs/src/learningmotors/pb/macros/macros.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  CopyMacroBySpecialtiesRequest as _learningmotors_pb_macros_CopyMacroBySpecialtiesRequest,
  CopyMacroBySpecialtiesRequest__Output as _learningmotors_pb_macros_CopyMacroBySpecialtiesRequest__Output
} from "../../../learningmotors/pb/macros/CopyMacroBySpecialtiesRequest";
import type {
  CopyMacroBySpecialtiesResponse as _learningmotors_pb_macros_CopyMacroBySpecialtiesResponse,
  CopyMacroBySpecialtiesResponse__Output as _learningmotors_pb_macros_CopyMacroBySpecialtiesResponse__Output
} from "../../../learningmotors/pb/macros/CopyMacroBySpecialtiesResponse";
import type {
  CopyMacroRequest as _learningmotors_pb_macros_CopyMacroRequest,
  CopyMacroRequest__Output as _learningmotors_pb_macros_CopyMacroRequest__Output
} from "../../../learningmotors/pb/macros/CopyMacroRequest";
import type {
  CopyMacroResponse as _learningmotors_pb_macros_CopyMacroResponse,
  CopyMacroResponse__Output as _learningmotors_pb_macros_CopyMacroResponse__Output
} from "../../../learningmotors/pb/macros/CopyMacroResponse";
import type {
  CreateMacroRequest as _learningmotors_pb_macros_CreateMacroRequest,
  CreateMacroRequest__Output as _learningmotors_pb_macros_CreateMacroRequest__Output
} from "../../../learningmotors/pb/macros/CreateMacroRequest";
import type {
  CreateMacroResponse as _learningmotors_pb_macros_CreateMacroResponse,
  CreateMacroResponse__Output as _learningmotors_pb_macros_CreateMacroResponse__Output
} from "../../../learningmotors/pb/macros/CreateMacroResponse";
import type {
  DeleteMacrosRequest as _learningmotors_pb_macros_DeleteMacrosRequest,
  DeleteMacrosRequest__Output as _learningmotors_pb_macros_DeleteMacrosRequest__Output
} from "../../../learningmotors/pb/macros/DeleteMacrosRequest";
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output
} from "../../../google/protobuf/Empty";
import type {
  GetMacrosRequest as _learningmotors_pb_macros_GetMacrosRequest,
  GetMacrosRequest__Output as _learningmotors_pb_macros_GetMacrosRequest__Output
} from "../../../learningmotors/pb/macros/GetMacrosRequest";
import type {
  GetMacrosResponse as _learningmotors_pb_macros_GetMacrosResponse,
  GetMacrosResponse__Output as _learningmotors_pb_macros_GetMacrosResponse__Output
} from "../../../learningmotors/pb/macros/GetMacrosResponse";
import type {
  MigrateSlateRequest as _learningmotors_pb_macros_MigrateSlateRequest,
  MigrateSlateRequest__Output as _learningmotors_pb_macros_MigrateSlateRequest__Output
} from "../../../learningmotors/pb/macros/MigrateSlateRequest";
import type {
  SyncOrganizationDefaultMacrosRequest as _learningmotors_pb_macros_SyncOrganizationDefaultMacrosRequest,
  SyncOrganizationDefaultMacrosRequest__Output as _learningmotors_pb_macros_SyncOrganizationDefaultMacrosRequest__Output
} from "../../../learningmotors/pb/macros/SyncOrganizationDefaultMacrosRequest";
import type {
  UpdateMacroRequest as _learningmotors_pb_macros_UpdateMacroRequest,
  UpdateMacroRequest__Output as _learningmotors_pb_macros_UpdateMacroRequest__Output
} from "../../../learningmotors/pb/macros/UpdateMacroRequest";
import type {
  UpdateMacroResponse as _learningmotors_pb_macros_UpdateMacroResponse,
  UpdateMacroResponse__Output as _learningmotors_pb_macros_UpdateMacroResponse__Output
} from "../../../learningmotors/pb/macros/UpdateMacroResponse";

export interface MacroServiceClient extends grpc.Client {
  CopyMacro(
    argument: _learningmotors_pb_macros_CopyMacroRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_macros_CopyMacroResponse__Output>
  ): grpc.ClientUnaryCall;
  CopyMacro(
    argument: _learningmotors_pb_macros_CopyMacroRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_macros_CopyMacroResponse__Output>
  ): grpc.ClientUnaryCall;
  CopyMacro(
    argument: _learningmotors_pb_macros_CopyMacroRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_macros_CopyMacroResponse__Output>
  ): grpc.ClientUnaryCall;
  CopyMacro(
    argument: _learningmotors_pb_macros_CopyMacroRequest,
    callback: grpc.requestCallback<_learningmotors_pb_macros_CopyMacroResponse__Output>
  ): grpc.ClientUnaryCall;
  copyMacro(
    argument: _learningmotors_pb_macros_CopyMacroRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_macros_CopyMacroResponse__Output>
  ): grpc.ClientUnaryCall;
  copyMacro(
    argument: _learningmotors_pb_macros_CopyMacroRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_macros_CopyMacroResponse__Output>
  ): grpc.ClientUnaryCall;
  copyMacro(
    argument: _learningmotors_pb_macros_CopyMacroRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_macros_CopyMacroResponse__Output>
  ): grpc.ClientUnaryCall;
  copyMacro(
    argument: _learningmotors_pb_macros_CopyMacroRequest,
    callback: grpc.requestCallback<_learningmotors_pb_macros_CopyMacroResponse__Output>
  ): grpc.ClientUnaryCall;

  CopyMacroBySpecialties(
    argument: _learningmotors_pb_macros_CopyMacroBySpecialtiesRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_macros_CopyMacroBySpecialtiesResponse__Output>
  ): grpc.ClientUnaryCall;
  CopyMacroBySpecialties(
    argument: _learningmotors_pb_macros_CopyMacroBySpecialtiesRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_macros_CopyMacroBySpecialtiesResponse__Output>
  ): grpc.ClientUnaryCall;
  CopyMacroBySpecialties(
    argument: _learningmotors_pb_macros_CopyMacroBySpecialtiesRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_macros_CopyMacroBySpecialtiesResponse__Output>
  ): grpc.ClientUnaryCall;
  CopyMacroBySpecialties(
    argument: _learningmotors_pb_macros_CopyMacroBySpecialtiesRequest,
    callback: grpc.requestCallback<_learningmotors_pb_macros_CopyMacroBySpecialtiesResponse__Output>
  ): grpc.ClientUnaryCall;
  copyMacroBySpecialties(
    argument: _learningmotors_pb_macros_CopyMacroBySpecialtiesRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_macros_CopyMacroBySpecialtiesResponse__Output>
  ): grpc.ClientUnaryCall;
  copyMacroBySpecialties(
    argument: _learningmotors_pb_macros_CopyMacroBySpecialtiesRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_macros_CopyMacroBySpecialtiesResponse__Output>
  ): grpc.ClientUnaryCall;
  copyMacroBySpecialties(
    argument: _learningmotors_pb_macros_CopyMacroBySpecialtiesRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_macros_CopyMacroBySpecialtiesResponse__Output>
  ): grpc.ClientUnaryCall;
  copyMacroBySpecialties(
    argument: _learningmotors_pb_macros_CopyMacroBySpecialtiesRequest,
    callback: grpc.requestCallback<_learningmotors_pb_macros_CopyMacroBySpecialtiesResponse__Output>
  ): grpc.ClientUnaryCall;

  CreateMacro(
    argument: _learningmotors_pb_macros_CreateMacroRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_macros_CreateMacroResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateMacro(
    argument: _learningmotors_pb_macros_CreateMacroRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_macros_CreateMacroResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateMacro(
    argument: _learningmotors_pb_macros_CreateMacroRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_macros_CreateMacroResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateMacro(
    argument: _learningmotors_pb_macros_CreateMacroRequest,
    callback: grpc.requestCallback<_learningmotors_pb_macros_CreateMacroResponse__Output>
  ): grpc.ClientUnaryCall;
  createMacro(
    argument: _learningmotors_pb_macros_CreateMacroRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_macros_CreateMacroResponse__Output>
  ): grpc.ClientUnaryCall;
  createMacro(
    argument: _learningmotors_pb_macros_CreateMacroRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_macros_CreateMacroResponse__Output>
  ): grpc.ClientUnaryCall;
  createMacro(
    argument: _learningmotors_pb_macros_CreateMacroRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_macros_CreateMacroResponse__Output>
  ): grpc.ClientUnaryCall;
  createMacro(
    argument: _learningmotors_pb_macros_CreateMacroRequest,
    callback: grpc.requestCallback<_learningmotors_pb_macros_CreateMacroResponse__Output>
  ): grpc.ClientUnaryCall;

  DeleteMacros(
    argument: _learningmotors_pb_macros_DeleteMacrosRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteMacros(
    argument: _learningmotors_pb_macros_DeleteMacrosRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteMacros(
    argument: _learningmotors_pb_macros_DeleteMacrosRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteMacros(
    argument: _learningmotors_pb_macros_DeleteMacrosRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteMacros(
    argument: _learningmotors_pb_macros_DeleteMacrosRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteMacros(
    argument: _learningmotors_pb_macros_DeleteMacrosRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteMacros(
    argument: _learningmotors_pb_macros_DeleteMacrosRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteMacros(
    argument: _learningmotors_pb_macros_DeleteMacrosRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  GetMacros(
    argument: _learningmotors_pb_macros_GetMacrosRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_macros_GetMacrosResponse__Output>
  ): grpc.ClientUnaryCall;
  GetMacros(
    argument: _learningmotors_pb_macros_GetMacrosRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_macros_GetMacrosResponse__Output>
  ): grpc.ClientUnaryCall;
  GetMacros(
    argument: _learningmotors_pb_macros_GetMacrosRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_macros_GetMacrosResponse__Output>
  ): grpc.ClientUnaryCall;
  GetMacros(
    argument: _learningmotors_pb_macros_GetMacrosRequest,
    callback: grpc.requestCallback<_learningmotors_pb_macros_GetMacrosResponse__Output>
  ): grpc.ClientUnaryCall;
  getMacros(
    argument: _learningmotors_pb_macros_GetMacrosRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_macros_GetMacrosResponse__Output>
  ): grpc.ClientUnaryCall;
  getMacros(
    argument: _learningmotors_pb_macros_GetMacrosRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_macros_GetMacrosResponse__Output>
  ): grpc.ClientUnaryCall;
  getMacros(
    argument: _learningmotors_pb_macros_GetMacrosRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_macros_GetMacrosResponse__Output>
  ): grpc.ClientUnaryCall;
  getMacros(
    argument: _learningmotors_pb_macros_GetMacrosRequest,
    callback: grpc.requestCallback<_learningmotors_pb_macros_GetMacrosResponse__Output>
  ): grpc.ClientUnaryCall;

  MigrateSlate(
    argument: _learningmotors_pb_macros_MigrateSlateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  MigrateSlate(
    argument: _learningmotors_pb_macros_MigrateSlateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  MigrateSlate(
    argument: _learningmotors_pb_macros_MigrateSlateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  MigrateSlate(
    argument: _learningmotors_pb_macros_MigrateSlateRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  migrateSlate(
    argument: _learningmotors_pb_macros_MigrateSlateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  migrateSlate(
    argument: _learningmotors_pb_macros_MigrateSlateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  migrateSlate(
    argument: _learningmotors_pb_macros_MigrateSlateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  migrateSlate(
    argument: _learningmotors_pb_macros_MigrateSlateRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  SyncOrganizationDefaultMacros(
    argument: _learningmotors_pb_macros_SyncOrganizationDefaultMacrosRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  SyncOrganizationDefaultMacros(
    argument: _learningmotors_pb_macros_SyncOrganizationDefaultMacrosRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  SyncOrganizationDefaultMacros(
    argument: _learningmotors_pb_macros_SyncOrganizationDefaultMacrosRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  SyncOrganizationDefaultMacros(
    argument: _learningmotors_pb_macros_SyncOrganizationDefaultMacrosRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  syncOrganizationDefaultMacros(
    argument: _learningmotors_pb_macros_SyncOrganizationDefaultMacrosRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  syncOrganizationDefaultMacros(
    argument: _learningmotors_pb_macros_SyncOrganizationDefaultMacrosRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  syncOrganizationDefaultMacros(
    argument: _learningmotors_pb_macros_SyncOrganizationDefaultMacrosRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  syncOrganizationDefaultMacros(
    argument: _learningmotors_pb_macros_SyncOrganizationDefaultMacrosRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  UpdateMacro(
    argument: _learningmotors_pb_macros_UpdateMacroRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_macros_UpdateMacroResponse__Output>
  ): grpc.ClientUnaryCall;
  UpdateMacro(
    argument: _learningmotors_pb_macros_UpdateMacroRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_macros_UpdateMacroResponse__Output>
  ): grpc.ClientUnaryCall;
  UpdateMacro(
    argument: _learningmotors_pb_macros_UpdateMacroRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_macros_UpdateMacroResponse__Output>
  ): grpc.ClientUnaryCall;
  UpdateMacro(
    argument: _learningmotors_pb_macros_UpdateMacroRequest,
    callback: grpc.requestCallback<_learningmotors_pb_macros_UpdateMacroResponse__Output>
  ): grpc.ClientUnaryCall;
  updateMacro(
    argument: _learningmotors_pb_macros_UpdateMacroRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_macros_UpdateMacroResponse__Output>
  ): grpc.ClientUnaryCall;
  updateMacro(
    argument: _learningmotors_pb_macros_UpdateMacroRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_macros_UpdateMacroResponse__Output>
  ): grpc.ClientUnaryCall;
  updateMacro(
    argument: _learningmotors_pb_macros_UpdateMacroRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_macros_UpdateMacroResponse__Output>
  ): grpc.ClientUnaryCall;
  updateMacro(
    argument: _learningmotors_pb_macros_UpdateMacroRequest,
    callback: grpc.requestCallback<_learningmotors_pb_macros_UpdateMacroResponse__Output>
  ): grpc.ClientUnaryCall;
}

export interface MacroServiceHandlers extends grpc.UntypedServiceImplementation {
  CopyMacro: grpc.handleUnaryCall<
    _learningmotors_pb_macros_CopyMacroRequest__Output,
    _learningmotors_pb_macros_CopyMacroResponse
  >;

  CopyMacroBySpecialties: grpc.handleUnaryCall<
    _learningmotors_pb_macros_CopyMacroBySpecialtiesRequest__Output,
    _learningmotors_pb_macros_CopyMacroBySpecialtiesResponse
  >;

  CreateMacro: grpc.handleUnaryCall<
    _learningmotors_pb_macros_CreateMacroRequest__Output,
    _learningmotors_pb_macros_CreateMacroResponse
  >;

  DeleteMacros: grpc.handleUnaryCall<_learningmotors_pb_macros_DeleteMacrosRequest__Output, _google_protobuf_Empty>;

  GetMacros: grpc.handleUnaryCall<
    _learningmotors_pb_macros_GetMacrosRequest__Output,
    _learningmotors_pb_macros_GetMacrosResponse
  >;

  MigrateSlate: grpc.handleUnaryCall<_learningmotors_pb_macros_MigrateSlateRequest__Output, _google_protobuf_Empty>;

  SyncOrganizationDefaultMacros: grpc.handleUnaryCall<
    _learningmotors_pb_macros_SyncOrganizationDefaultMacrosRequest__Output,
    _google_protobuf_Empty
  >;

  UpdateMacro: grpc.handleUnaryCall<
    _learningmotors_pb_macros_UpdateMacroRequest__Output,
    _learningmotors_pb_macros_UpdateMacroResponse
  >;
}

export interface MacroServiceDefinition extends grpc.ServiceDefinition {
  CopyMacro: MethodDefinition<
    _learningmotors_pb_macros_CopyMacroRequest,
    _learningmotors_pb_macros_CopyMacroResponse,
    _learningmotors_pb_macros_CopyMacroRequest__Output,
    _learningmotors_pb_macros_CopyMacroResponse__Output
  >;
  CopyMacroBySpecialties: MethodDefinition<
    _learningmotors_pb_macros_CopyMacroBySpecialtiesRequest,
    _learningmotors_pb_macros_CopyMacroBySpecialtiesResponse,
    _learningmotors_pb_macros_CopyMacroBySpecialtiesRequest__Output,
    _learningmotors_pb_macros_CopyMacroBySpecialtiesResponse__Output
  >;
  CreateMacro: MethodDefinition<
    _learningmotors_pb_macros_CreateMacroRequest,
    _learningmotors_pb_macros_CreateMacroResponse,
    _learningmotors_pb_macros_CreateMacroRequest__Output,
    _learningmotors_pb_macros_CreateMacroResponse__Output
  >;
  DeleteMacros: MethodDefinition<
    _learningmotors_pb_macros_DeleteMacrosRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_macros_DeleteMacrosRequest__Output,
    _google_protobuf_Empty__Output
  >;
  GetMacros: MethodDefinition<
    _learningmotors_pb_macros_GetMacrosRequest,
    _learningmotors_pb_macros_GetMacrosResponse,
    _learningmotors_pb_macros_GetMacrosRequest__Output,
    _learningmotors_pb_macros_GetMacrosResponse__Output
  >;
  MigrateSlate: MethodDefinition<
    _learningmotors_pb_macros_MigrateSlateRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_macros_MigrateSlateRequest__Output,
    _google_protobuf_Empty__Output
  >;
  SyncOrganizationDefaultMacros: MethodDefinition<
    _learningmotors_pb_macros_SyncOrganizationDefaultMacrosRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_macros_SyncOrganizationDefaultMacrosRequest__Output,
    _google_protobuf_Empty__Output
  >;
  UpdateMacro: MethodDefinition<
    _learningmotors_pb_macros_UpdateMacroRequest,
    _learningmotors_pb_macros_UpdateMacroResponse,
    _learningmotors_pb_macros_UpdateMacroRequest__Output,
    _learningmotors_pb_macros_UpdateMacroResponse__Output
  >;
}
