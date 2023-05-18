// Original file: node_modules/protobufs/src/suki/pb/auther/auther.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  DeactivateTokenRequest as _suki_pb_auther_DeactivateTokenRequest,
  DeactivateTokenRequest__Output as _suki_pb_auther_DeactivateTokenRequest__Output
} from "../../../suki/pb/auther/DeactivateTokenRequest";
import type {
  DeleteOrganizationRequest as _suki_pb_auther_DeleteOrganizationRequest,
  DeleteOrganizationRequest__Output as _suki_pb_auther_DeleteOrganizationRequest__Output
} from "../../../suki/pb/auther/DeleteOrganizationRequest";
import type {
  DeleteUserRequest as _suki_pb_auther_DeleteUserRequest,
  DeleteUserRequest__Output as _suki_pb_auther_DeleteUserRequest__Output
} from "../../../suki/pb/auther/DeleteUserRequest";
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output
} from "../../../google/protobuf/Empty";
import type {
  GetOrganizationsRequest as _suki_pb_auther_GetOrganizationsRequest,
  GetOrganizationsRequest__Output as _suki_pb_auther_GetOrganizationsRequest__Output
} from "../../../suki/pb/auther/GetOrganizationsRequest";
import type {
  GetOrganizationsResponse as _suki_pb_auther_GetOrganizationsResponse,
  GetOrganizationsResponse__Output as _suki_pb_auther_GetOrganizationsResponse__Output
} from "../../../suki/pb/auther/GetOrganizationsResponse";
import type {
  GetTokensRequest as _suki_pb_auther_GetTokensRequest,
  GetTokensRequest__Output as _suki_pb_auther_GetTokensRequest__Output
} from "../../../suki/pb/auther/GetTokensRequest";
import type {
  GetTokensResponse as _suki_pb_auther_GetTokensResponse,
  GetTokensResponse__Output as _suki_pb_auther_GetTokensResponse__Output
} from "../../../suki/pb/auther/GetTokensResponse";
import type {
  GetUsersRequest as _suki_pb_auther_GetUsersRequest,
  GetUsersRequest__Output as _suki_pb_auther_GetUsersRequest__Output
} from "../../../suki/pb/auther/GetUsersRequest";
import type {
  GetUsersResponse as _suki_pb_auther_GetUsersResponse,
  GetUsersResponse__Output as _suki_pb_auther_GetUsersResponse__Output
} from "../../../suki/pb/auther/GetUsersResponse";
import type {
  UpsertOrganizationRequest as _suki_pb_auther_UpsertOrganizationRequest,
  UpsertOrganizationRequest__Output as _suki_pb_auther_UpsertOrganizationRequest__Output
} from "../../../suki/pb/auther/UpsertOrganizationRequest";
import type {
  UpsertTokenMessage as _suki_pb_auther_UpsertTokenMessage,
  UpsertTokenMessage__Output as _suki_pb_auther_UpsertTokenMessage__Output
} from "../../../suki/pb/auther/UpsertTokenMessage";
import type {
  UpsertUserRequest as _suki_pb_auther_UpsertUserRequest,
  UpsertUserRequest__Output as _suki_pb_auther_UpsertUserRequest__Output
} from "../../../suki/pb/auther/UpsertUserRequest";
import type {
  ValidateTokenRequest as _suki_pb_auther_ValidateTokenRequest,
  ValidateTokenRequest__Output as _suki_pb_auther_ValidateTokenRequest__Output
} from "../../../suki/pb/auther/ValidateTokenRequest";
import type {
  ValidateTokenResponse as _suki_pb_auther_ValidateTokenResponse,
  ValidateTokenResponse__Output as _suki_pb_auther_ValidateTokenResponse__Output
} from "../../../suki/pb/auther/ValidateTokenResponse";

export interface AutherClient extends grpc.Client {
  DeactivateToken(
    argument: _suki_pb_auther_DeactivateTokenRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeactivateToken(
    argument: _suki_pb_auther_DeactivateTokenRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeactivateToken(
    argument: _suki_pb_auther_DeactivateTokenRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeactivateToken(
    argument: _suki_pb_auther_DeactivateTokenRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deactivateToken(
    argument: _suki_pb_auther_DeactivateTokenRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deactivateToken(
    argument: _suki_pb_auther_DeactivateTokenRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deactivateToken(
    argument: _suki_pb_auther_DeactivateTokenRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deactivateToken(
    argument: _suki_pb_auther_DeactivateTokenRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  DeleteOrganization(
    argument: _suki_pb_auther_DeleteOrganizationRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteOrganization(
    argument: _suki_pb_auther_DeleteOrganizationRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteOrganization(
    argument: _suki_pb_auther_DeleteOrganizationRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteOrganization(
    argument: _suki_pb_auther_DeleteOrganizationRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteOrganization(
    argument: _suki_pb_auther_DeleteOrganizationRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteOrganization(
    argument: _suki_pb_auther_DeleteOrganizationRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteOrganization(
    argument: _suki_pb_auther_DeleteOrganizationRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteOrganization(
    argument: _suki_pb_auther_DeleteOrganizationRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  DeleteUser(
    argument: _suki_pb_auther_DeleteUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteUser(
    argument: _suki_pb_auther_DeleteUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteUser(
    argument: _suki_pb_auther_DeleteUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteUser(
    argument: _suki_pb_auther_DeleteUserRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteUser(
    argument: _suki_pb_auther_DeleteUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteUser(
    argument: _suki_pb_auther_DeleteUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteUser(
    argument: _suki_pb_auther_DeleteUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteUser(
    argument: _suki_pb_auther_DeleteUserRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  GetOrganizations(
    argument: _suki_pb_auther_GetOrganizationsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_auther_GetOrganizationsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetOrganizations(
    argument: _suki_pb_auther_GetOrganizationsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_auther_GetOrganizationsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetOrganizations(
    argument: _suki_pb_auther_GetOrganizationsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_auther_GetOrganizationsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetOrganizations(
    argument: _suki_pb_auther_GetOrganizationsRequest,
    callback: grpc.requestCallback<_suki_pb_auther_GetOrganizationsResponse__Output>
  ): grpc.ClientUnaryCall;
  getOrganizations(
    argument: _suki_pb_auther_GetOrganizationsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_auther_GetOrganizationsResponse__Output>
  ): grpc.ClientUnaryCall;
  getOrganizations(
    argument: _suki_pb_auther_GetOrganizationsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_auther_GetOrganizationsResponse__Output>
  ): grpc.ClientUnaryCall;
  getOrganizations(
    argument: _suki_pb_auther_GetOrganizationsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_auther_GetOrganizationsResponse__Output>
  ): grpc.ClientUnaryCall;
  getOrganizations(
    argument: _suki_pb_auther_GetOrganizationsRequest,
    callback: grpc.requestCallback<_suki_pb_auther_GetOrganizationsResponse__Output>
  ): grpc.ClientUnaryCall;

  GetTokens(
    argument: _suki_pb_auther_GetTokensRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_auther_GetTokensResponse__Output>
  ): grpc.ClientUnaryCall;
  GetTokens(
    argument: _suki_pb_auther_GetTokensRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_auther_GetTokensResponse__Output>
  ): grpc.ClientUnaryCall;
  GetTokens(
    argument: _suki_pb_auther_GetTokensRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_auther_GetTokensResponse__Output>
  ): grpc.ClientUnaryCall;
  GetTokens(
    argument: _suki_pb_auther_GetTokensRequest,
    callback: grpc.requestCallback<_suki_pb_auther_GetTokensResponse__Output>
  ): grpc.ClientUnaryCall;
  getTokens(
    argument: _suki_pb_auther_GetTokensRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_auther_GetTokensResponse__Output>
  ): grpc.ClientUnaryCall;
  getTokens(
    argument: _suki_pb_auther_GetTokensRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_auther_GetTokensResponse__Output>
  ): grpc.ClientUnaryCall;
  getTokens(
    argument: _suki_pb_auther_GetTokensRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_auther_GetTokensResponse__Output>
  ): grpc.ClientUnaryCall;
  getTokens(
    argument: _suki_pb_auther_GetTokensRequest,
    callback: grpc.requestCallback<_suki_pb_auther_GetTokensResponse__Output>
  ): grpc.ClientUnaryCall;

  GetUsers(
    argument: _suki_pb_auther_GetUsersRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_auther_GetUsersResponse__Output>
  ): grpc.ClientUnaryCall;
  GetUsers(
    argument: _suki_pb_auther_GetUsersRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_auther_GetUsersResponse__Output>
  ): grpc.ClientUnaryCall;
  GetUsers(
    argument: _suki_pb_auther_GetUsersRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_auther_GetUsersResponse__Output>
  ): grpc.ClientUnaryCall;
  GetUsers(
    argument: _suki_pb_auther_GetUsersRequest,
    callback: grpc.requestCallback<_suki_pb_auther_GetUsersResponse__Output>
  ): grpc.ClientUnaryCall;
  getUsers(
    argument: _suki_pb_auther_GetUsersRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_auther_GetUsersResponse__Output>
  ): grpc.ClientUnaryCall;
  getUsers(
    argument: _suki_pb_auther_GetUsersRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_auther_GetUsersResponse__Output>
  ): grpc.ClientUnaryCall;
  getUsers(
    argument: _suki_pb_auther_GetUsersRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_auther_GetUsersResponse__Output>
  ): grpc.ClientUnaryCall;
  getUsers(
    argument: _suki_pb_auther_GetUsersRequest,
    callback: grpc.requestCallback<_suki_pb_auther_GetUsersResponse__Output>
  ): grpc.ClientUnaryCall;

  UpsertOrganization(
    argument: _suki_pb_auther_UpsertOrganizationRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  UpsertOrganization(
    argument: _suki_pb_auther_UpsertOrganizationRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  UpsertOrganization(
    argument: _suki_pb_auther_UpsertOrganizationRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  UpsertOrganization(
    argument: _suki_pb_auther_UpsertOrganizationRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  upsertOrganization(
    argument: _suki_pb_auther_UpsertOrganizationRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  upsertOrganization(
    argument: _suki_pb_auther_UpsertOrganizationRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  upsertOrganization(
    argument: _suki_pb_auther_UpsertOrganizationRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  upsertOrganization(
    argument: _suki_pb_auther_UpsertOrganizationRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  UpsertToken(
    argument: _suki_pb_auther_UpsertTokenMessage,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_auther_UpsertTokenMessage__Output>
  ): grpc.ClientUnaryCall;
  UpsertToken(
    argument: _suki_pb_auther_UpsertTokenMessage,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_auther_UpsertTokenMessage__Output>
  ): grpc.ClientUnaryCall;
  UpsertToken(
    argument: _suki_pb_auther_UpsertTokenMessage,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_auther_UpsertTokenMessage__Output>
  ): grpc.ClientUnaryCall;
  UpsertToken(
    argument: _suki_pb_auther_UpsertTokenMessage,
    callback: grpc.requestCallback<_suki_pb_auther_UpsertTokenMessage__Output>
  ): grpc.ClientUnaryCall;
  upsertToken(
    argument: _suki_pb_auther_UpsertTokenMessage,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_auther_UpsertTokenMessage__Output>
  ): grpc.ClientUnaryCall;
  upsertToken(
    argument: _suki_pb_auther_UpsertTokenMessage,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_auther_UpsertTokenMessage__Output>
  ): grpc.ClientUnaryCall;
  upsertToken(
    argument: _suki_pb_auther_UpsertTokenMessage,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_auther_UpsertTokenMessage__Output>
  ): grpc.ClientUnaryCall;
  upsertToken(
    argument: _suki_pb_auther_UpsertTokenMessage,
    callback: grpc.requestCallback<_suki_pb_auther_UpsertTokenMessage__Output>
  ): grpc.ClientUnaryCall;

  UpsertUser(
    argument: _suki_pb_auther_UpsertUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  UpsertUser(
    argument: _suki_pb_auther_UpsertUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  UpsertUser(
    argument: _suki_pb_auther_UpsertUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  UpsertUser(
    argument: _suki_pb_auther_UpsertUserRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  upsertUser(
    argument: _suki_pb_auther_UpsertUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  upsertUser(
    argument: _suki_pb_auther_UpsertUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  upsertUser(
    argument: _suki_pb_auther_UpsertUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  upsertUser(
    argument: _suki_pb_auther_UpsertUserRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  ValidateToken(
    argument: _suki_pb_auther_ValidateTokenRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_auther_ValidateTokenResponse__Output>
  ): grpc.ClientUnaryCall;
  ValidateToken(
    argument: _suki_pb_auther_ValidateTokenRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_auther_ValidateTokenResponse__Output>
  ): grpc.ClientUnaryCall;
  ValidateToken(
    argument: _suki_pb_auther_ValidateTokenRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_auther_ValidateTokenResponse__Output>
  ): grpc.ClientUnaryCall;
  ValidateToken(
    argument: _suki_pb_auther_ValidateTokenRequest,
    callback: grpc.requestCallback<_suki_pb_auther_ValidateTokenResponse__Output>
  ): grpc.ClientUnaryCall;
  validateToken(
    argument: _suki_pb_auther_ValidateTokenRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_auther_ValidateTokenResponse__Output>
  ): grpc.ClientUnaryCall;
  validateToken(
    argument: _suki_pb_auther_ValidateTokenRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_auther_ValidateTokenResponse__Output>
  ): grpc.ClientUnaryCall;
  validateToken(
    argument: _suki_pb_auther_ValidateTokenRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_auther_ValidateTokenResponse__Output>
  ): grpc.ClientUnaryCall;
  validateToken(
    argument: _suki_pb_auther_ValidateTokenRequest,
    callback: grpc.requestCallback<_suki_pb_auther_ValidateTokenResponse__Output>
  ): grpc.ClientUnaryCall;
}

export interface AutherHandlers extends grpc.UntypedServiceImplementation {
  DeactivateToken: grpc.handleUnaryCall<_suki_pb_auther_DeactivateTokenRequest__Output, _google_protobuf_Empty>;

  DeleteOrganization: grpc.handleUnaryCall<_suki_pb_auther_DeleteOrganizationRequest__Output, _google_protobuf_Empty>;

  DeleteUser: grpc.handleUnaryCall<_suki_pb_auther_DeleteUserRequest__Output, _google_protobuf_Empty>;

  GetOrganizations: grpc.handleUnaryCall<
    _suki_pb_auther_GetOrganizationsRequest__Output,
    _suki_pb_auther_GetOrganizationsResponse
  >;

  GetTokens: grpc.handleUnaryCall<_suki_pb_auther_GetTokensRequest__Output, _suki_pb_auther_GetTokensResponse>;

  GetUsers: grpc.handleUnaryCall<_suki_pb_auther_GetUsersRequest__Output, _suki_pb_auther_GetUsersResponse>;

  UpsertOrganization: grpc.handleUnaryCall<_suki_pb_auther_UpsertOrganizationRequest__Output, _google_protobuf_Empty>;

  UpsertToken: grpc.handleUnaryCall<_suki_pb_auther_UpsertTokenMessage__Output, _suki_pb_auther_UpsertTokenMessage>;

  UpsertUser: grpc.handleUnaryCall<_suki_pb_auther_UpsertUserRequest__Output, _google_protobuf_Empty>;

  ValidateToken: grpc.handleUnaryCall<
    _suki_pb_auther_ValidateTokenRequest__Output,
    _suki_pb_auther_ValidateTokenResponse
  >;
}

export interface AutherDefinition extends grpc.ServiceDefinition {
  DeactivateToken: MethodDefinition<
    _suki_pb_auther_DeactivateTokenRequest,
    _google_protobuf_Empty,
    _suki_pb_auther_DeactivateTokenRequest__Output,
    _google_protobuf_Empty__Output
  >;
  DeleteOrganization: MethodDefinition<
    _suki_pb_auther_DeleteOrganizationRequest,
    _google_protobuf_Empty,
    _suki_pb_auther_DeleteOrganizationRequest__Output,
    _google_protobuf_Empty__Output
  >;
  DeleteUser: MethodDefinition<
    _suki_pb_auther_DeleteUserRequest,
    _google_protobuf_Empty,
    _suki_pb_auther_DeleteUserRequest__Output,
    _google_protobuf_Empty__Output
  >;
  GetOrganizations: MethodDefinition<
    _suki_pb_auther_GetOrganizationsRequest,
    _suki_pb_auther_GetOrganizationsResponse,
    _suki_pb_auther_GetOrganizationsRequest__Output,
    _suki_pb_auther_GetOrganizationsResponse__Output
  >;
  GetTokens: MethodDefinition<
    _suki_pb_auther_GetTokensRequest,
    _suki_pb_auther_GetTokensResponse,
    _suki_pb_auther_GetTokensRequest__Output,
    _suki_pb_auther_GetTokensResponse__Output
  >;
  GetUsers: MethodDefinition<
    _suki_pb_auther_GetUsersRequest,
    _suki_pb_auther_GetUsersResponse,
    _suki_pb_auther_GetUsersRequest__Output,
    _suki_pb_auther_GetUsersResponse__Output
  >;
  UpsertOrganization: MethodDefinition<
    _suki_pb_auther_UpsertOrganizationRequest,
    _google_protobuf_Empty,
    _suki_pb_auther_UpsertOrganizationRequest__Output,
    _google_protobuf_Empty__Output
  >;
  UpsertToken: MethodDefinition<
    _suki_pb_auther_UpsertTokenMessage,
    _suki_pb_auther_UpsertTokenMessage,
    _suki_pb_auther_UpsertTokenMessage__Output,
    _suki_pb_auther_UpsertTokenMessage__Output
  >;
  UpsertUser: MethodDefinition<
    _suki_pb_auther_UpsertUserRequest,
    _google_protobuf_Empty,
    _suki_pb_auther_UpsertUserRequest__Output,
    _google_protobuf_Empty__Output
  >;
  ValidateToken: MethodDefinition<
    _suki_pb_auther_ValidateTokenRequest,
    _suki_pb_auther_ValidateTokenResponse,
    _suki_pb_auther_ValidateTokenRequest__Output,
    _suki_pb_auther_ValidateTokenResponse__Output
  >;
}
