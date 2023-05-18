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
  ObliviateDeleteResponse as _suki_pb_obliviate_ObliviateDeleteResponse,
  ObliviateDeleteResponse__Output as _suki_pb_obliviate_ObliviateDeleteResponse__Output
} from "../../../suki/pb/obliviate/ObliviateDeleteResponse";

export interface ObliviateServiceClient extends grpc.Client {
  DeleteOrganization(
    argument: _suki_pb_obliviate_DeleteOrganizationRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_obliviate_ObliviateDeleteResponse__Output>
  ): grpc.ClientUnaryCall;
  DeleteOrganization(
    argument: _suki_pb_obliviate_DeleteOrganizationRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_obliviate_ObliviateDeleteResponse__Output>
  ): grpc.ClientUnaryCall;
  DeleteOrganization(
    argument: _suki_pb_obliviate_DeleteOrganizationRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_obliviate_ObliviateDeleteResponse__Output>
  ): grpc.ClientUnaryCall;
  DeleteOrganization(
    argument: _suki_pb_obliviate_DeleteOrganizationRequest,
    callback: grpc.requestCallback<_suki_pb_obliviate_ObliviateDeleteResponse__Output>
  ): grpc.ClientUnaryCall;
  deleteOrganization(
    argument: _suki_pb_obliviate_DeleteOrganizationRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_obliviate_ObliviateDeleteResponse__Output>
  ): grpc.ClientUnaryCall;
  deleteOrganization(
    argument: _suki_pb_obliviate_DeleteOrganizationRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_obliviate_ObliviateDeleteResponse__Output>
  ): grpc.ClientUnaryCall;
  deleteOrganization(
    argument: _suki_pb_obliviate_DeleteOrganizationRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_obliviate_ObliviateDeleteResponse__Output>
  ): grpc.ClientUnaryCall;
  deleteOrganization(
    argument: _suki_pb_obliviate_DeleteOrganizationRequest,
    callback: grpc.requestCallback<_suki_pb_obliviate_ObliviateDeleteResponse__Output>
  ): grpc.ClientUnaryCall;

  DeleteUser(
    argument: _suki_pb_obliviate_DeleteUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_obliviate_ObliviateDeleteResponse__Output>
  ): grpc.ClientUnaryCall;
  DeleteUser(
    argument: _suki_pb_obliviate_DeleteUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_obliviate_ObliviateDeleteResponse__Output>
  ): grpc.ClientUnaryCall;
  DeleteUser(
    argument: _suki_pb_obliviate_DeleteUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_obliviate_ObliviateDeleteResponse__Output>
  ): grpc.ClientUnaryCall;
  DeleteUser(
    argument: _suki_pb_obliviate_DeleteUserRequest,
    callback: grpc.requestCallback<_suki_pb_obliviate_ObliviateDeleteResponse__Output>
  ): grpc.ClientUnaryCall;
  deleteUser(
    argument: _suki_pb_obliviate_DeleteUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_obliviate_ObliviateDeleteResponse__Output>
  ): grpc.ClientUnaryCall;
  deleteUser(
    argument: _suki_pb_obliviate_DeleteUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_obliviate_ObliviateDeleteResponse__Output>
  ): grpc.ClientUnaryCall;
  deleteUser(
    argument: _suki_pb_obliviate_DeleteUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_obliviate_ObliviateDeleteResponse__Output>
  ): grpc.ClientUnaryCall;
  deleteUser(
    argument: _suki_pb_obliviate_DeleteUserRequest,
    callback: grpc.requestCallback<_suki_pb_obliviate_ObliviateDeleteResponse__Output>
  ): grpc.ClientUnaryCall;
}

export interface ObliviateServiceHandlers extends grpc.UntypedServiceImplementation {
  DeleteOrganization: grpc.handleUnaryCall<
    _suki_pb_obliviate_DeleteOrganizationRequest__Output,
    _suki_pb_obliviate_ObliviateDeleteResponse
  >;

  DeleteUser: grpc.handleUnaryCall<
    _suki_pb_obliviate_DeleteUserRequest__Output,
    _suki_pb_obliviate_ObliviateDeleteResponse
  >;
}

export interface ObliviateServiceDefinition extends grpc.ServiceDefinition {
  DeleteOrganization: MethodDefinition<
    _suki_pb_obliviate_DeleteOrganizationRequest,
    _suki_pb_obliviate_ObliviateDeleteResponse,
    _suki_pb_obliviate_DeleteOrganizationRequest__Output,
    _suki_pb_obliviate_ObliviateDeleteResponse__Output
  >;
  DeleteUser: MethodDefinition<
    _suki_pb_obliviate_DeleteUserRequest,
    _suki_pb_obliviate_ObliviateDeleteResponse,
    _suki_pb_obliviate_DeleteUserRequest__Output,
    _suki_pb_obliviate_ObliviateDeleteResponse__Output
  >;
}
