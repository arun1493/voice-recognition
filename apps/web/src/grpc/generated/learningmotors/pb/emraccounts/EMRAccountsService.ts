// Original file: node_modules/protobufs/src/learningmotors/pb/emraccounts/emraccounts.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  CreateOrganizationRequest as _learningmotors_pb_emraccounts_CreateOrganizationRequest,
  CreateOrganizationRequest__Output as _learningmotors_pb_emraccounts_CreateOrganizationRequest__Output
} from "../../../learningmotors/pb/emraccounts/CreateOrganizationRequest";
import type {
  CreateOrganizationResponse as _learningmotors_pb_emraccounts_CreateOrganizationResponse,
  CreateOrganizationResponse__Output as _learningmotors_pb_emraccounts_CreateOrganizationResponse__Output
} from "../../../learningmotors/pb/emraccounts/CreateOrganizationResponse";
import type {
  CreateUserRequest as _learningmotors_pb_emraccounts_CreateUserRequest,
  CreateUserRequest__Output as _learningmotors_pb_emraccounts_CreateUserRequest__Output
} from "../../../learningmotors/pb/emraccounts/CreateUserRequest";
import type {
  CreateUserResponse as _learningmotors_pb_emraccounts_CreateUserResponse,
  CreateUserResponse__Output as _learningmotors_pb_emraccounts_CreateUserResponse__Output
} from "../../../learningmotors/pb/emraccounts/CreateUserResponse";
import type {
  DeleteOrganizationRequest as _learningmotors_pb_emraccounts_DeleteOrganizationRequest,
  DeleteOrganizationRequest__Output as _learningmotors_pb_emraccounts_DeleteOrganizationRequest__Output
} from "../../../learningmotors/pb/emraccounts/DeleteOrganizationRequest";
import type {
  DeleteUsersRequest as _learningmotors_pb_emraccounts_DeleteUsersRequest,
  DeleteUsersRequest__Output as _learningmotors_pb_emraccounts_DeleteUsersRequest__Output
} from "../../../learningmotors/pb/emraccounts/DeleteUsersRequest";
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output
} from "../../../google/protobuf/Empty";
import type {
  GetAPICredentialsRequest as _learningmotors_pb_emraccounts_GetAPICredentialsRequest,
  GetAPICredentialsRequest__Output as _learningmotors_pb_emraccounts_GetAPICredentialsRequest__Output
} from "../../../learningmotors/pb/emraccounts/GetAPICredentialsRequest";
import type {
  GetAPICredentialsResponse as _learningmotors_pb_emraccounts_GetAPICredentialsResponse,
  GetAPICredentialsResponse__Output as _learningmotors_pb_emraccounts_GetAPICredentialsResponse__Output
} from "../../../learningmotors/pb/emraccounts/GetAPICredentialsResponse";
import type {
  GetAllOrganizationsRequest as _learningmotors_pb_emraccounts_GetAllOrganizationsRequest,
  GetAllOrganizationsRequest__Output as _learningmotors_pb_emraccounts_GetAllOrganizationsRequest__Output
} from "../../../learningmotors/pb/emraccounts/GetAllOrganizationsRequest";
import type {
  GetAllOrganizationsResponse as _learningmotors_pb_emraccounts_GetAllOrganizationsResponse,
  GetAllOrganizationsResponse__Output as _learningmotors_pb_emraccounts_GetAllOrganizationsResponse__Output
} from "../../../learningmotors/pb/emraccounts/GetAllOrganizationsResponse";
import type {
  GetOrganizationRequest as _learningmotors_pb_emraccounts_GetOrganizationRequest,
  GetOrganizationRequest__Output as _learningmotors_pb_emraccounts_GetOrganizationRequest__Output
} from "../../../learningmotors/pb/emraccounts/GetOrganizationRequest";
import type {
  GetOrganizationResponse as _learningmotors_pb_emraccounts_GetOrganizationResponse,
  GetOrganizationResponse__Output as _learningmotors_pb_emraccounts_GetOrganizationResponse__Output
} from "../../../learningmotors/pb/emraccounts/GetOrganizationResponse";
import type {
  GetUserByEmrIdentifiersRequest as _learningmotors_pb_emraccounts_GetUserByEmrIdentifiersRequest,
  GetUserByEmrIdentifiersRequest__Output as _learningmotors_pb_emraccounts_GetUserByEmrIdentifiersRequest__Output
} from "../../../learningmotors/pb/emraccounts/GetUserByEmrIdentifiersRequest";
import type {
  GetUserByEmrIdentifiersResponse as _learningmotors_pb_emraccounts_GetUserByEmrIdentifiersResponse,
  GetUserByEmrIdentifiersResponse__Output as _learningmotors_pb_emraccounts_GetUserByEmrIdentifiersResponse__Output
} from "../../../learningmotors/pb/emraccounts/GetUserByEmrIdentifiersResponse";
import type {
  GetUsersRequest as _learningmotors_pb_emraccounts_GetUsersRequest,
  GetUsersRequest__Output as _learningmotors_pb_emraccounts_GetUsersRequest__Output
} from "../../../learningmotors/pb/emraccounts/GetUsersRequest";
import type {
  GetUsersResponse as _learningmotors_pb_emraccounts_GetUsersResponse,
  GetUsersResponse__Output as _learningmotors_pb_emraccounts_GetUsersResponse__Output
} from "../../../learningmotors/pb/emraccounts/GetUsersResponse";
import type {
  LinkEMRUserRequest as _learningmotors_pb_emraccounts_LinkEMRUserRequest,
  LinkEMRUserRequest__Output as _learningmotors_pb_emraccounts_LinkEMRUserRequest__Output
} from "../../../learningmotors/pb/emraccounts/LinkEMRUserRequest";
import type {
  LinkEMRUserResponse as _learningmotors_pb_emraccounts_LinkEMRUserResponse,
  LinkEMRUserResponse__Output as _learningmotors_pb_emraccounts_LinkEMRUserResponse__Output
} from "../../../learningmotors/pb/emraccounts/LinkEMRUserResponse";
import type {
  SearchEMRUsersRequest as _learningmotors_pb_emraccounts_SearchEMRUsersRequest,
  SearchEMRUsersRequest__Output as _learningmotors_pb_emraccounts_SearchEMRUsersRequest__Output
} from "../../../learningmotors/pb/emraccounts/SearchEMRUsersRequest";
import type {
  SearchEMRUsersResponse as _learningmotors_pb_emraccounts_SearchEMRUsersResponse,
  SearchEMRUsersResponse__Output as _learningmotors_pb_emraccounts_SearchEMRUsersResponse__Output
} from "../../../learningmotors/pb/emraccounts/SearchEMRUsersResponse";
import type {
  UnlinkEMRUserRequest as _learningmotors_pb_emraccounts_UnlinkEMRUserRequest,
  UnlinkEMRUserRequest__Output as _learningmotors_pb_emraccounts_UnlinkEMRUserRequest__Output
} from "../../../learningmotors/pb/emraccounts/UnlinkEMRUserRequest";
import type {
  UnlinkEMRUserResponse as _learningmotors_pb_emraccounts_UnlinkEMRUserResponse,
  UnlinkEMRUserResponse__Output as _learningmotors_pb_emraccounts_UnlinkEMRUserResponse__Output
} from "../../../learningmotors/pb/emraccounts/UnlinkEMRUserResponse";
import type {
  UpdateOrganizationRequest as _learningmotors_pb_emraccounts_UpdateOrganizationRequest,
  UpdateOrganizationRequest__Output as _learningmotors_pb_emraccounts_UpdateOrganizationRequest__Output
} from "../../../learningmotors/pb/emraccounts/UpdateOrganizationRequest";
import type {
  UpdateOrganizationResponse as _learningmotors_pb_emraccounts_UpdateOrganizationResponse,
  UpdateOrganizationResponse__Output as _learningmotors_pb_emraccounts_UpdateOrganizationResponse__Output
} from "../../../learningmotors/pb/emraccounts/UpdateOrganizationResponse";
import type {
  UpdateUserRequest as _learningmotors_pb_emraccounts_UpdateUserRequest,
  UpdateUserRequest__Output as _learningmotors_pb_emraccounts_UpdateUserRequest__Output
} from "../../../learningmotors/pb/emraccounts/UpdateUserRequest";
import type {
  UpdateUserResponse as _learningmotors_pb_emraccounts_UpdateUserResponse,
  UpdateUserResponse__Output as _learningmotors_pb_emraccounts_UpdateUserResponse__Output
} from "../../../learningmotors/pb/emraccounts/UpdateUserResponse";

export interface EMRAccountsServiceClient extends grpc.Client {
  CreateOrganization(
    argument: _learningmotors_pb_emraccounts_CreateOrganizationRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_CreateOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateOrganization(
    argument: _learningmotors_pb_emraccounts_CreateOrganizationRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_CreateOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateOrganization(
    argument: _learningmotors_pb_emraccounts_CreateOrganizationRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_CreateOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateOrganization(
    argument: _learningmotors_pb_emraccounts_CreateOrganizationRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_CreateOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
  createOrganization(
    argument: _learningmotors_pb_emraccounts_CreateOrganizationRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_CreateOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
  createOrganization(
    argument: _learningmotors_pb_emraccounts_CreateOrganizationRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_CreateOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
  createOrganization(
    argument: _learningmotors_pb_emraccounts_CreateOrganizationRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_CreateOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
  createOrganization(
    argument: _learningmotors_pb_emraccounts_CreateOrganizationRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_CreateOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;

  CreateUser(
    argument: _learningmotors_pb_emraccounts_CreateUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_CreateUserResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateUser(
    argument: _learningmotors_pb_emraccounts_CreateUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_CreateUserResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateUser(
    argument: _learningmotors_pb_emraccounts_CreateUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_CreateUserResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateUser(
    argument: _learningmotors_pb_emraccounts_CreateUserRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_CreateUserResponse__Output>
  ): grpc.ClientUnaryCall;
  createUser(
    argument: _learningmotors_pb_emraccounts_CreateUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_CreateUserResponse__Output>
  ): grpc.ClientUnaryCall;
  createUser(
    argument: _learningmotors_pb_emraccounts_CreateUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_CreateUserResponse__Output>
  ): grpc.ClientUnaryCall;
  createUser(
    argument: _learningmotors_pb_emraccounts_CreateUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_CreateUserResponse__Output>
  ): grpc.ClientUnaryCall;
  createUser(
    argument: _learningmotors_pb_emraccounts_CreateUserRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_CreateUserResponse__Output>
  ): grpc.ClientUnaryCall;

  DeleteOrganization(
    argument: _learningmotors_pb_emraccounts_DeleteOrganizationRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteOrganization(
    argument: _learningmotors_pb_emraccounts_DeleteOrganizationRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteOrganization(
    argument: _learningmotors_pb_emraccounts_DeleteOrganizationRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteOrganization(
    argument: _learningmotors_pb_emraccounts_DeleteOrganizationRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteOrganization(
    argument: _learningmotors_pb_emraccounts_DeleteOrganizationRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteOrganization(
    argument: _learningmotors_pb_emraccounts_DeleteOrganizationRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteOrganization(
    argument: _learningmotors_pb_emraccounts_DeleteOrganizationRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteOrganization(
    argument: _learningmotors_pb_emraccounts_DeleteOrganizationRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  DeleteUsers(
    argument: _learningmotors_pb_emraccounts_DeleteUsersRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteUsers(
    argument: _learningmotors_pb_emraccounts_DeleteUsersRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteUsers(
    argument: _learningmotors_pb_emraccounts_DeleteUsersRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteUsers(
    argument: _learningmotors_pb_emraccounts_DeleteUsersRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteUsers(
    argument: _learningmotors_pb_emraccounts_DeleteUsersRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteUsers(
    argument: _learningmotors_pb_emraccounts_DeleteUsersRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteUsers(
    argument: _learningmotors_pb_emraccounts_DeleteUsersRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteUsers(
    argument: _learningmotors_pb_emraccounts_DeleteUsersRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  GetAPICredentials(
    argument: _learningmotors_pb_emraccounts_GetAPICredentialsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_GetAPICredentialsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetAPICredentials(
    argument: _learningmotors_pb_emraccounts_GetAPICredentialsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_GetAPICredentialsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetAPICredentials(
    argument: _learningmotors_pb_emraccounts_GetAPICredentialsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_GetAPICredentialsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetAPICredentials(
    argument: _learningmotors_pb_emraccounts_GetAPICredentialsRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_GetAPICredentialsResponse__Output>
  ): grpc.ClientUnaryCall;
  getApiCredentials(
    argument: _learningmotors_pb_emraccounts_GetAPICredentialsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_GetAPICredentialsResponse__Output>
  ): grpc.ClientUnaryCall;
  getApiCredentials(
    argument: _learningmotors_pb_emraccounts_GetAPICredentialsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_GetAPICredentialsResponse__Output>
  ): grpc.ClientUnaryCall;
  getApiCredentials(
    argument: _learningmotors_pb_emraccounts_GetAPICredentialsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_GetAPICredentialsResponse__Output>
  ): grpc.ClientUnaryCall;
  getApiCredentials(
    argument: _learningmotors_pb_emraccounts_GetAPICredentialsRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_GetAPICredentialsResponse__Output>
  ): grpc.ClientUnaryCall;

  GetAllOrganizations(
    argument: _learningmotors_pb_emraccounts_GetAllOrganizationsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_GetAllOrganizationsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetAllOrganizations(
    argument: _learningmotors_pb_emraccounts_GetAllOrganizationsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_GetAllOrganizationsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetAllOrganizations(
    argument: _learningmotors_pb_emraccounts_GetAllOrganizationsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_GetAllOrganizationsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetAllOrganizations(
    argument: _learningmotors_pb_emraccounts_GetAllOrganizationsRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_GetAllOrganizationsResponse__Output>
  ): grpc.ClientUnaryCall;
  getAllOrganizations(
    argument: _learningmotors_pb_emraccounts_GetAllOrganizationsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_GetAllOrganizationsResponse__Output>
  ): grpc.ClientUnaryCall;
  getAllOrganizations(
    argument: _learningmotors_pb_emraccounts_GetAllOrganizationsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_GetAllOrganizationsResponse__Output>
  ): grpc.ClientUnaryCall;
  getAllOrganizations(
    argument: _learningmotors_pb_emraccounts_GetAllOrganizationsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_GetAllOrganizationsResponse__Output>
  ): grpc.ClientUnaryCall;
  getAllOrganizations(
    argument: _learningmotors_pb_emraccounts_GetAllOrganizationsRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_GetAllOrganizationsResponse__Output>
  ): grpc.ClientUnaryCall;

  GetOrganization(
    argument: _learningmotors_pb_emraccounts_GetOrganizationRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_GetOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
  GetOrganization(
    argument: _learningmotors_pb_emraccounts_GetOrganizationRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_GetOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
  GetOrganization(
    argument: _learningmotors_pb_emraccounts_GetOrganizationRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_GetOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
  GetOrganization(
    argument: _learningmotors_pb_emraccounts_GetOrganizationRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_GetOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
  getOrganization(
    argument: _learningmotors_pb_emraccounts_GetOrganizationRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_GetOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
  getOrganization(
    argument: _learningmotors_pb_emraccounts_GetOrganizationRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_GetOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
  getOrganization(
    argument: _learningmotors_pb_emraccounts_GetOrganizationRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_GetOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
  getOrganization(
    argument: _learningmotors_pb_emraccounts_GetOrganizationRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_GetOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;

  GetUserByEmrIdentifiers(
    argument: _learningmotors_pb_emraccounts_GetUserByEmrIdentifiersRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_GetUserByEmrIdentifiersResponse__Output>
  ): grpc.ClientUnaryCall;
  GetUserByEmrIdentifiers(
    argument: _learningmotors_pb_emraccounts_GetUserByEmrIdentifiersRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_GetUserByEmrIdentifiersResponse__Output>
  ): grpc.ClientUnaryCall;
  GetUserByEmrIdentifiers(
    argument: _learningmotors_pb_emraccounts_GetUserByEmrIdentifiersRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_GetUserByEmrIdentifiersResponse__Output>
  ): grpc.ClientUnaryCall;
  GetUserByEmrIdentifiers(
    argument: _learningmotors_pb_emraccounts_GetUserByEmrIdentifiersRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_GetUserByEmrIdentifiersResponse__Output>
  ): grpc.ClientUnaryCall;
  getUserByEmrIdentifiers(
    argument: _learningmotors_pb_emraccounts_GetUserByEmrIdentifiersRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_GetUserByEmrIdentifiersResponse__Output>
  ): grpc.ClientUnaryCall;
  getUserByEmrIdentifiers(
    argument: _learningmotors_pb_emraccounts_GetUserByEmrIdentifiersRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_GetUserByEmrIdentifiersResponse__Output>
  ): grpc.ClientUnaryCall;
  getUserByEmrIdentifiers(
    argument: _learningmotors_pb_emraccounts_GetUserByEmrIdentifiersRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_GetUserByEmrIdentifiersResponse__Output>
  ): grpc.ClientUnaryCall;
  getUserByEmrIdentifiers(
    argument: _learningmotors_pb_emraccounts_GetUserByEmrIdentifiersRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_GetUserByEmrIdentifiersResponse__Output>
  ): grpc.ClientUnaryCall;

  GetUsers(
    argument: _learningmotors_pb_emraccounts_GetUsersRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_GetUsersResponse__Output>
  ): grpc.ClientUnaryCall;
  GetUsers(
    argument: _learningmotors_pb_emraccounts_GetUsersRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_GetUsersResponse__Output>
  ): grpc.ClientUnaryCall;
  GetUsers(
    argument: _learningmotors_pb_emraccounts_GetUsersRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_GetUsersResponse__Output>
  ): grpc.ClientUnaryCall;
  GetUsers(
    argument: _learningmotors_pb_emraccounts_GetUsersRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_GetUsersResponse__Output>
  ): grpc.ClientUnaryCall;
  getUsers(
    argument: _learningmotors_pb_emraccounts_GetUsersRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_GetUsersResponse__Output>
  ): grpc.ClientUnaryCall;
  getUsers(
    argument: _learningmotors_pb_emraccounts_GetUsersRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_GetUsersResponse__Output>
  ): grpc.ClientUnaryCall;
  getUsers(
    argument: _learningmotors_pb_emraccounts_GetUsersRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_GetUsersResponse__Output>
  ): grpc.ClientUnaryCall;
  getUsers(
    argument: _learningmotors_pb_emraccounts_GetUsersRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_GetUsersResponse__Output>
  ): grpc.ClientUnaryCall;

  LinkEMRUser(
    argument: _learningmotors_pb_emraccounts_LinkEMRUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_LinkEMRUserResponse__Output>
  ): grpc.ClientUnaryCall;
  LinkEMRUser(
    argument: _learningmotors_pb_emraccounts_LinkEMRUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_LinkEMRUserResponse__Output>
  ): grpc.ClientUnaryCall;
  LinkEMRUser(
    argument: _learningmotors_pb_emraccounts_LinkEMRUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_LinkEMRUserResponse__Output>
  ): grpc.ClientUnaryCall;
  LinkEMRUser(
    argument: _learningmotors_pb_emraccounts_LinkEMRUserRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_LinkEMRUserResponse__Output>
  ): grpc.ClientUnaryCall;
  linkEmrUser(
    argument: _learningmotors_pb_emraccounts_LinkEMRUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_LinkEMRUserResponse__Output>
  ): grpc.ClientUnaryCall;
  linkEmrUser(
    argument: _learningmotors_pb_emraccounts_LinkEMRUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_LinkEMRUserResponse__Output>
  ): grpc.ClientUnaryCall;
  linkEmrUser(
    argument: _learningmotors_pb_emraccounts_LinkEMRUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_LinkEMRUserResponse__Output>
  ): grpc.ClientUnaryCall;
  linkEmrUser(
    argument: _learningmotors_pb_emraccounts_LinkEMRUserRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_LinkEMRUserResponse__Output>
  ): grpc.ClientUnaryCall;

  SearchEMRUsers(
    argument: _learningmotors_pb_emraccounts_SearchEMRUsersRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_SearchEMRUsersResponse__Output>
  ): grpc.ClientUnaryCall;
  SearchEMRUsers(
    argument: _learningmotors_pb_emraccounts_SearchEMRUsersRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_SearchEMRUsersResponse__Output>
  ): grpc.ClientUnaryCall;
  SearchEMRUsers(
    argument: _learningmotors_pb_emraccounts_SearchEMRUsersRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_SearchEMRUsersResponse__Output>
  ): grpc.ClientUnaryCall;
  SearchEMRUsers(
    argument: _learningmotors_pb_emraccounts_SearchEMRUsersRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_SearchEMRUsersResponse__Output>
  ): grpc.ClientUnaryCall;
  searchEmrUsers(
    argument: _learningmotors_pb_emraccounts_SearchEMRUsersRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_SearchEMRUsersResponse__Output>
  ): grpc.ClientUnaryCall;
  searchEmrUsers(
    argument: _learningmotors_pb_emraccounts_SearchEMRUsersRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_SearchEMRUsersResponse__Output>
  ): grpc.ClientUnaryCall;
  searchEmrUsers(
    argument: _learningmotors_pb_emraccounts_SearchEMRUsersRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_SearchEMRUsersResponse__Output>
  ): grpc.ClientUnaryCall;
  searchEmrUsers(
    argument: _learningmotors_pb_emraccounts_SearchEMRUsersRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_SearchEMRUsersResponse__Output>
  ): grpc.ClientUnaryCall;

  UnlinkEMRUser(
    argument: _learningmotors_pb_emraccounts_UnlinkEMRUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_UnlinkEMRUserResponse__Output>
  ): grpc.ClientUnaryCall;
  UnlinkEMRUser(
    argument: _learningmotors_pb_emraccounts_UnlinkEMRUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_UnlinkEMRUserResponse__Output>
  ): grpc.ClientUnaryCall;
  UnlinkEMRUser(
    argument: _learningmotors_pb_emraccounts_UnlinkEMRUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_UnlinkEMRUserResponse__Output>
  ): grpc.ClientUnaryCall;
  UnlinkEMRUser(
    argument: _learningmotors_pb_emraccounts_UnlinkEMRUserRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_UnlinkEMRUserResponse__Output>
  ): grpc.ClientUnaryCall;
  unlinkEmrUser(
    argument: _learningmotors_pb_emraccounts_UnlinkEMRUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_UnlinkEMRUserResponse__Output>
  ): grpc.ClientUnaryCall;
  unlinkEmrUser(
    argument: _learningmotors_pb_emraccounts_UnlinkEMRUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_UnlinkEMRUserResponse__Output>
  ): grpc.ClientUnaryCall;
  unlinkEmrUser(
    argument: _learningmotors_pb_emraccounts_UnlinkEMRUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_UnlinkEMRUserResponse__Output>
  ): grpc.ClientUnaryCall;
  unlinkEmrUser(
    argument: _learningmotors_pb_emraccounts_UnlinkEMRUserRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_UnlinkEMRUserResponse__Output>
  ): grpc.ClientUnaryCall;

  UpdateOrganization(
    argument: _learningmotors_pb_emraccounts_UpdateOrganizationRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_UpdateOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
  UpdateOrganization(
    argument: _learningmotors_pb_emraccounts_UpdateOrganizationRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_UpdateOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
  UpdateOrganization(
    argument: _learningmotors_pb_emraccounts_UpdateOrganizationRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_UpdateOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
  UpdateOrganization(
    argument: _learningmotors_pb_emraccounts_UpdateOrganizationRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_UpdateOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
  updateOrganization(
    argument: _learningmotors_pb_emraccounts_UpdateOrganizationRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_UpdateOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
  updateOrganization(
    argument: _learningmotors_pb_emraccounts_UpdateOrganizationRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_UpdateOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
  updateOrganization(
    argument: _learningmotors_pb_emraccounts_UpdateOrganizationRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_UpdateOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
  updateOrganization(
    argument: _learningmotors_pb_emraccounts_UpdateOrganizationRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_UpdateOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;

  UpdateUser(
    argument: _learningmotors_pb_emraccounts_UpdateUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_UpdateUserResponse__Output>
  ): grpc.ClientUnaryCall;
  UpdateUser(
    argument: _learningmotors_pb_emraccounts_UpdateUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_UpdateUserResponse__Output>
  ): grpc.ClientUnaryCall;
  UpdateUser(
    argument: _learningmotors_pb_emraccounts_UpdateUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_UpdateUserResponse__Output>
  ): grpc.ClientUnaryCall;
  UpdateUser(
    argument: _learningmotors_pb_emraccounts_UpdateUserRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_UpdateUserResponse__Output>
  ): grpc.ClientUnaryCall;
  updateUser(
    argument: _learningmotors_pb_emraccounts_UpdateUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_UpdateUserResponse__Output>
  ): grpc.ClientUnaryCall;
  updateUser(
    argument: _learningmotors_pb_emraccounts_UpdateUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_UpdateUserResponse__Output>
  ): grpc.ClientUnaryCall;
  updateUser(
    argument: _learningmotors_pb_emraccounts_UpdateUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_UpdateUserResponse__Output>
  ): grpc.ClientUnaryCall;
  updateUser(
    argument: _learningmotors_pb_emraccounts_UpdateUserRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emraccounts_UpdateUserResponse__Output>
  ): grpc.ClientUnaryCall;
}

export interface EMRAccountsServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateOrganization: grpc.handleUnaryCall<
    _learningmotors_pb_emraccounts_CreateOrganizationRequest__Output,
    _learningmotors_pb_emraccounts_CreateOrganizationResponse
  >;

  CreateUser: grpc.handleUnaryCall<
    _learningmotors_pb_emraccounts_CreateUserRequest__Output,
    _learningmotors_pb_emraccounts_CreateUserResponse
  >;

  DeleteOrganization: grpc.handleUnaryCall<
    _learningmotors_pb_emraccounts_DeleteOrganizationRequest__Output,
    _google_protobuf_Empty
  >;

  DeleteUsers: grpc.handleUnaryCall<_learningmotors_pb_emraccounts_DeleteUsersRequest__Output, _google_protobuf_Empty>;

  GetAPICredentials: grpc.handleUnaryCall<
    _learningmotors_pb_emraccounts_GetAPICredentialsRequest__Output,
    _learningmotors_pb_emraccounts_GetAPICredentialsResponse
  >;

  GetAllOrganizations: grpc.handleUnaryCall<
    _learningmotors_pb_emraccounts_GetAllOrganizationsRequest__Output,
    _learningmotors_pb_emraccounts_GetAllOrganizationsResponse
  >;

  GetOrganization: grpc.handleUnaryCall<
    _learningmotors_pb_emraccounts_GetOrganizationRequest__Output,
    _learningmotors_pb_emraccounts_GetOrganizationResponse
  >;

  GetUserByEmrIdentifiers: grpc.handleUnaryCall<
    _learningmotors_pb_emraccounts_GetUserByEmrIdentifiersRequest__Output,
    _learningmotors_pb_emraccounts_GetUserByEmrIdentifiersResponse
  >;

  GetUsers: grpc.handleUnaryCall<
    _learningmotors_pb_emraccounts_GetUsersRequest__Output,
    _learningmotors_pb_emraccounts_GetUsersResponse
  >;

  LinkEMRUser: grpc.handleUnaryCall<
    _learningmotors_pb_emraccounts_LinkEMRUserRequest__Output,
    _learningmotors_pb_emraccounts_LinkEMRUserResponse
  >;

  SearchEMRUsers: grpc.handleUnaryCall<
    _learningmotors_pb_emraccounts_SearchEMRUsersRequest__Output,
    _learningmotors_pb_emraccounts_SearchEMRUsersResponse
  >;

  UnlinkEMRUser: grpc.handleUnaryCall<
    _learningmotors_pb_emraccounts_UnlinkEMRUserRequest__Output,
    _learningmotors_pb_emraccounts_UnlinkEMRUserResponse
  >;

  UpdateOrganization: grpc.handleUnaryCall<
    _learningmotors_pb_emraccounts_UpdateOrganizationRequest__Output,
    _learningmotors_pb_emraccounts_UpdateOrganizationResponse
  >;

  UpdateUser: grpc.handleUnaryCall<
    _learningmotors_pb_emraccounts_UpdateUserRequest__Output,
    _learningmotors_pb_emraccounts_UpdateUserResponse
  >;
}

export interface EMRAccountsServiceDefinition extends grpc.ServiceDefinition {
  CreateOrganization: MethodDefinition<
    _learningmotors_pb_emraccounts_CreateOrganizationRequest,
    _learningmotors_pb_emraccounts_CreateOrganizationResponse,
    _learningmotors_pb_emraccounts_CreateOrganizationRequest__Output,
    _learningmotors_pb_emraccounts_CreateOrganizationResponse__Output
  >;
  CreateUser: MethodDefinition<
    _learningmotors_pb_emraccounts_CreateUserRequest,
    _learningmotors_pb_emraccounts_CreateUserResponse,
    _learningmotors_pb_emraccounts_CreateUserRequest__Output,
    _learningmotors_pb_emraccounts_CreateUserResponse__Output
  >;
  DeleteOrganization: MethodDefinition<
    _learningmotors_pb_emraccounts_DeleteOrganizationRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_emraccounts_DeleteOrganizationRequest__Output,
    _google_protobuf_Empty__Output
  >;
  DeleteUsers: MethodDefinition<
    _learningmotors_pb_emraccounts_DeleteUsersRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_emraccounts_DeleteUsersRequest__Output,
    _google_protobuf_Empty__Output
  >;
  GetAPICredentials: MethodDefinition<
    _learningmotors_pb_emraccounts_GetAPICredentialsRequest,
    _learningmotors_pb_emraccounts_GetAPICredentialsResponse,
    _learningmotors_pb_emraccounts_GetAPICredentialsRequest__Output,
    _learningmotors_pb_emraccounts_GetAPICredentialsResponse__Output
  >;
  GetAllOrganizations: MethodDefinition<
    _learningmotors_pb_emraccounts_GetAllOrganizationsRequest,
    _learningmotors_pb_emraccounts_GetAllOrganizationsResponse,
    _learningmotors_pb_emraccounts_GetAllOrganizationsRequest__Output,
    _learningmotors_pb_emraccounts_GetAllOrganizationsResponse__Output
  >;
  GetOrganization: MethodDefinition<
    _learningmotors_pb_emraccounts_GetOrganizationRequest,
    _learningmotors_pb_emraccounts_GetOrganizationResponse,
    _learningmotors_pb_emraccounts_GetOrganizationRequest__Output,
    _learningmotors_pb_emraccounts_GetOrganizationResponse__Output
  >;
  GetUserByEmrIdentifiers: MethodDefinition<
    _learningmotors_pb_emraccounts_GetUserByEmrIdentifiersRequest,
    _learningmotors_pb_emraccounts_GetUserByEmrIdentifiersResponse,
    _learningmotors_pb_emraccounts_GetUserByEmrIdentifiersRequest__Output,
    _learningmotors_pb_emraccounts_GetUserByEmrIdentifiersResponse__Output
  >;
  GetUsers: MethodDefinition<
    _learningmotors_pb_emraccounts_GetUsersRequest,
    _learningmotors_pb_emraccounts_GetUsersResponse,
    _learningmotors_pb_emraccounts_GetUsersRequest__Output,
    _learningmotors_pb_emraccounts_GetUsersResponse__Output
  >;
  LinkEMRUser: MethodDefinition<
    _learningmotors_pb_emraccounts_LinkEMRUserRequest,
    _learningmotors_pb_emraccounts_LinkEMRUserResponse,
    _learningmotors_pb_emraccounts_LinkEMRUserRequest__Output,
    _learningmotors_pb_emraccounts_LinkEMRUserResponse__Output
  >;
  SearchEMRUsers: MethodDefinition<
    _learningmotors_pb_emraccounts_SearchEMRUsersRequest,
    _learningmotors_pb_emraccounts_SearchEMRUsersResponse,
    _learningmotors_pb_emraccounts_SearchEMRUsersRequest__Output,
    _learningmotors_pb_emraccounts_SearchEMRUsersResponse__Output
  >;
  UnlinkEMRUser: MethodDefinition<
    _learningmotors_pb_emraccounts_UnlinkEMRUserRequest,
    _learningmotors_pb_emraccounts_UnlinkEMRUserResponse,
    _learningmotors_pb_emraccounts_UnlinkEMRUserRequest__Output,
    _learningmotors_pb_emraccounts_UnlinkEMRUserResponse__Output
  >;
  UpdateOrganization: MethodDefinition<
    _learningmotors_pb_emraccounts_UpdateOrganizationRequest,
    _learningmotors_pb_emraccounts_UpdateOrganizationResponse,
    _learningmotors_pb_emraccounts_UpdateOrganizationRequest__Output,
    _learningmotors_pb_emraccounts_UpdateOrganizationResponse__Output
  >;
  UpdateUser: MethodDefinition<
    _learningmotors_pb_emraccounts_UpdateUserRequest,
    _learningmotors_pb_emraccounts_UpdateUserResponse,
    _learningmotors_pb_emraccounts_UpdateUserRequest__Output,
    _learningmotors_pb_emraccounts_UpdateUserResponse__Output
  >;
}
