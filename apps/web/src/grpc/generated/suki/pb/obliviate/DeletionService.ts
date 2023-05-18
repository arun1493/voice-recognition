// Original file: node_modules/protobufs/src/suki/pb/obliviate/obliviate.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  DeleteOrganizationRequest as _suki_pb_obliviate_DeleteOrganizationRequest,
  DeleteOrganizationRequest__Output as _suki_pb_obliviate_DeleteOrganizationRequest__Output
} from "../../../suki/pb/obliviate/DeleteOrganizationRequest";
import type {
  DeleteUserRequest as _suki_pb_obliviate_DeleteUserRequest,
  DeleteUserRequest__Output as _suki_pb_obliviate_DeleteUserRequest__Output
} from "../../../suki/pb/obliviate/DeleteUserRequest";
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output
} from "../../../google/protobuf/Empty";

export interface DeletionServiceClient extends grpc.Client {
  DeleteOrganization(
    argument: _suki_pb_obliviate_DeleteOrganizationRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteOrganization(
    argument: _suki_pb_obliviate_DeleteOrganizationRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteOrganization(
    argument: _suki_pb_obliviate_DeleteOrganizationRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteOrganization(
    argument: _suki_pb_obliviate_DeleteOrganizationRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteOrganization(
    argument: _suki_pb_obliviate_DeleteOrganizationRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteOrganization(
    argument: _suki_pb_obliviate_DeleteOrganizationRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteOrganization(
    argument: _suki_pb_obliviate_DeleteOrganizationRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteOrganization(
    argument: _suki_pb_obliviate_DeleteOrganizationRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  DeleteUser(
    argument: _suki_pb_obliviate_DeleteUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteUser(
    argument: _suki_pb_obliviate_DeleteUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteUser(
    argument: _suki_pb_obliviate_DeleteUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteUser(
    argument: _suki_pb_obliviate_DeleteUserRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteUser(
    argument: _suki_pb_obliviate_DeleteUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteUser(
    argument: _suki_pb_obliviate_DeleteUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteUser(
    argument: _suki_pb_obliviate_DeleteUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteUser(
    argument: _suki_pb_obliviate_DeleteUserRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
}

export interface DeletionServiceHandlers extends grpc.UntypedServiceImplementation {
  DeleteOrganization: grpc.handleUnaryCall<
    _suki_pb_obliviate_DeleteOrganizationRequest__Output,
    _google_protobuf_Empty
  >;

  DeleteUser: grpc.handleUnaryCall<_suki_pb_obliviate_DeleteUserRequest__Output, _google_protobuf_Empty>;
}

export interface DeletionServiceDefinition extends grpc.ServiceDefinition {
  DeleteOrganization: MethodDefinition<
    _suki_pb_obliviate_DeleteOrganizationRequest,
    _google_protobuf_Empty,
    _suki_pb_obliviate_DeleteOrganizationRequest__Output,
    _google_protobuf_Empty__Output
  >;
  DeleteUser: MethodDefinition<
    _suki_pb_obliviate_DeleteUserRequest,
    _google_protobuf_Empty,
    _suki_pb_obliviate_DeleteUserRequest__Output,
    _google_protobuf_Empty__Output
  >;
}
