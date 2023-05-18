// Original file: node_modules/protobufs/src/learningmotors/pb/user/user_service.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  ActivateRequest as _learningmotors_pb_user_ActivateRequest,
  ActivateRequest__Output as _learningmotors_pb_user_ActivateRequest__Output
} from "../../../learningmotors/pb/user/ActivateRequest";
import type {
  CreateEmbeddedUserRequest as _learningmotors_pb_user_CreateEmbeddedUserRequest,
  CreateEmbeddedUserRequest__Output as _learningmotors_pb_user_CreateEmbeddedUserRequest__Output
} from "../../../learningmotors/pb/user/CreateEmbeddedUserRequest";
import type {
  CreateEmbeddedUserResponse as _learningmotors_pb_user_CreateEmbeddedUserResponse,
  CreateEmbeddedUserResponse__Output as _learningmotors_pb_user_CreateEmbeddedUserResponse__Output
} from "../../../learningmotors/pb/user/CreateEmbeddedUserResponse";
import type {
  CreateRequest as _learningmotors_pb_user_CreateRequest,
  CreateRequest__Output as _learningmotors_pb_user_CreateRequest__Output
} from "../../../learningmotors/pb/user/CreateRequest";
import type {
  CreateResponse as _learningmotors_pb_user_CreateResponse,
  CreateResponse__Output as _learningmotors_pb_user_CreateResponse__Output
} from "../../../learningmotors/pb/user/CreateResponse";
import type {
  CreateUserRegistrationRequest as _learningmotors_pb_user_CreateUserRegistrationRequest,
  CreateUserRegistrationRequest__Output as _learningmotors_pb_user_CreateUserRegistrationRequest__Output
} from "../../../learningmotors/pb/user/CreateUserRegistrationRequest";
import type {
  CreateUserRegistrationResponse as _learningmotors_pb_user_CreateUserRegistrationResponse,
  CreateUserRegistrationResponse__Output as _learningmotors_pb_user_CreateUserRegistrationResponse__Output
} from "../../../learningmotors/pb/user/CreateUserRegistrationResponse";
import type {
  CreateWithPasswordRequest as _learningmotors_pb_user_CreateWithPasswordRequest,
  CreateWithPasswordRequest__Output as _learningmotors_pb_user_CreateWithPasswordRequest__Output
} from "../../../learningmotors/pb/user/CreateWithPasswordRequest";
import type {
  CreateWithPasswordResponse as _learningmotors_pb_user_CreateWithPasswordResponse,
  CreateWithPasswordResponse__Output as _learningmotors_pb_user_CreateWithPasswordResponse__Output
} from "../../../learningmotors/pb/user/CreateWithPasswordResponse";
import type {
  DeleteRequest as _learningmotors_pb_user_DeleteRequest,
  DeleteRequest__Output as _learningmotors_pb_user_DeleteRequest__Output
} from "../../../learningmotors/pb/user/DeleteRequest";
import type {
  DeleteUserRegistrationRequest as _learningmotors_pb_user_DeleteUserRegistrationRequest,
  DeleteUserRegistrationRequest__Output as _learningmotors_pb_user_DeleteUserRegistrationRequest__Output
} from "../../../learningmotors/pb/user/DeleteUserRegistrationRequest";
import type {
  EmbeddedUserRequest as _learningmotors_pb_user_EmbeddedUserRequest,
  EmbeddedUserRequest__Output as _learningmotors_pb_user_EmbeddedUserRequest__Output
} from "../../../learningmotors/pb/user/EmbeddedUserRequest";
import type {
  EmbeddedUserResponse as _learningmotors_pb_user_EmbeddedUserResponse,
  EmbeddedUserResponse__Output as _learningmotors_pb_user_EmbeddedUserResponse__Output
} from "../../../learningmotors/pb/user/EmbeddedUserResponse";
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output
} from "../../../google/protobuf/Empty";
import type {
  EpicUserRequest as _learningmotors_pb_user_EpicUserRequest,
  EpicUserRequest__Output as _learningmotors_pb_user_EpicUserRequest__Output
} from "../../../learningmotors/pb/user/EpicUserRequest";
import type {
  FHIRUserPayload as _learningmotors_pb_user_FHIRUserPayload,
  FHIRUserPayload__Output as _learningmotors_pb_user_FHIRUserPayload__Output
} from "../../../learningmotors/pb/user/FHIRUserPayload";
import type {
  FHIRUserRequest as _learningmotors_pb_user_FHIRUserRequest,
  FHIRUserRequest__Output as _learningmotors_pb_user_FHIRUserRequest__Output
} from "../../../learningmotors/pb/user/FHIRUserRequest";
import type {
  GetRequest as _learningmotors_pb_user_GetRequest,
  GetRequest__Output as _learningmotors_pb_user_GetRequest__Output
} from "../../../learningmotors/pb/user/GetRequest";
import type {
  GetResponse as _learningmotors_pb_user_GetResponse,
  GetResponse__Output as _learningmotors_pb_user_GetResponse__Output
} from "../../../learningmotors/pb/user/GetResponse";
import type {
  GetUserRegistrationsRequest as _learningmotors_pb_user_GetUserRegistrationsRequest,
  GetUserRegistrationsRequest__Output as _learningmotors_pb_user_GetUserRegistrationsRequest__Output
} from "../../../learningmotors/pb/user/GetUserRegistrationsRequest";
import type {
  GetUserRegistrationsResponse as _learningmotors_pb_user_GetUserRegistrationsResponse,
  GetUserRegistrationsResponse__Output as _learningmotors_pb_user_GetUserRegistrationsResponse__Output
} from "../../../learningmotors/pb/user/GetUserRegistrationsResponse";
import type {
  RegisterMarketplaceUserRequest as _learningmotors_pb_user_RegisterMarketplaceUserRequest,
  RegisterMarketplaceUserRequest__Output as _learningmotors_pb_user_RegisterMarketplaceUserRequest__Output
} from "../../../learningmotors/pb/user/RegisterMarketplaceUserRequest";
import type {
  RegisterMarketplaceUserResponse as _learningmotors_pb_user_RegisterMarketplaceUserResponse,
  RegisterMarketplaceUserResponse__Output as _learningmotors_pb_user_RegisterMarketplaceUserResponse__Output
} from "../../../learningmotors/pb/user/RegisterMarketplaceUserResponse";
import type {
  RegisterRequest as _learningmotors_pb_user_RegisterRequest,
  RegisterRequest__Output as _learningmotors_pb_user_RegisterRequest__Output
} from "../../../learningmotors/pb/user/RegisterRequest";
import type {
  SendDemoEmailRequest as _learningmotors_pb_user_SendDemoEmailRequest,
  SendDemoEmailRequest__Output as _learningmotors_pb_user_SendDemoEmailRequest__Output
} from "../../../learningmotors/pb/user/SendDemoEmailRequest";
import type {
  SendGcpUsageMetricsRequest as _learningmotors_pb_user_SendGcpUsageMetricsRequest,
  SendGcpUsageMetricsRequest__Output as _learningmotors_pb_user_SendGcpUsageMetricsRequest__Output
} from "../../../learningmotors/pb/user/SendGcpUsageMetricsRequest";
import type {
  SendGcpUsageMetricsResponse as _learningmotors_pb_user_SendGcpUsageMetricsResponse,
  SendGcpUsageMetricsResponse__Output as _learningmotors_pb_user_SendGcpUsageMetricsResponse__Output
} from "../../../learningmotors/pb/user/SendGcpUsageMetricsResponse";
import type {
  SendVerificationEmailRequest as _learningmotors_pb_user_SendVerificationEmailRequest,
  SendVerificationEmailRequest__Output as _learningmotors_pb_user_SendVerificationEmailRequest__Output
} from "../../../learningmotors/pb/user/SendVerificationEmailRequest";
import type {
  UpdateRegistrationStageRequest as _learningmotors_pb_user_UpdateRegistrationStageRequest,
  UpdateRegistrationStageRequest__Output as _learningmotors_pb_user_UpdateRegistrationStageRequest__Output
} from "../../../learningmotors/pb/user/UpdateRegistrationStageRequest";
import type {
  UpdateRequest as _learningmotors_pb_user_UpdateRequest,
  UpdateRequest__Output as _learningmotors_pb_user_UpdateRequest__Output
} from "../../../learningmotors/pb/user/UpdateRequest";
import type {
  UpdateResponse as _learningmotors_pb_user_UpdateResponse,
  UpdateResponse__Output as _learningmotors_pb_user_UpdateResponse__Output
} from "../../../learningmotors/pb/user/UpdateResponse";
import type {
  ValidateVerificationTokenRequest as _learningmotors_pb_user_ValidateVerificationTokenRequest,
  ValidateVerificationTokenRequest__Output as _learningmotors_pb_user_ValidateVerificationTokenRequest__Output
} from "../../../learningmotors/pb/user/ValidateVerificationTokenRequest";
import type {
  ValidateVerificationTokenResponse as _learningmotors_pb_user_ValidateVerificationTokenResponse,
  ValidateVerificationTokenResponse__Output as _learningmotors_pb_user_ValidateVerificationTokenResponse__Output
} from "../../../learningmotors/pb/user/ValidateVerificationTokenResponse";

export interface UserServiceClient extends grpc.Client {
  Activate(
    argument: _learningmotors_pb_user_ActivateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Activate(
    argument: _learningmotors_pb_user_ActivateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Activate(
    argument: _learningmotors_pb_user_ActivateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Activate(
    argument: _learningmotors_pb_user_ActivateRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  activate(
    argument: _learningmotors_pb_user_ActivateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  activate(
    argument: _learningmotors_pb_user_ActivateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  activate(
    argument: _learningmotors_pb_user_ActivateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  activate(
    argument: _learningmotors_pb_user_ActivateRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  Create(
    argument: _learningmotors_pb_user_CreateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  Create(
    argument: _learningmotors_pb_user_CreateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_user_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  Create(
    argument: _learningmotors_pb_user_CreateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  Create(
    argument: _learningmotors_pb_user_CreateRequest,
    callback: grpc.requestCallback<_learningmotors_pb_user_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  create(
    argument: _learningmotors_pb_user_CreateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  create(
    argument: _learningmotors_pb_user_CreateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_user_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  create(
    argument: _learningmotors_pb_user_CreateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  create(
    argument: _learningmotors_pb_user_CreateRequest,
    callback: grpc.requestCallback<_learningmotors_pb_user_CreateResponse__Output>
  ): grpc.ClientUnaryCall;

  CreateEmbeddedUser(
    argument: _learningmotors_pb_user_CreateEmbeddedUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_CreateEmbeddedUserResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateEmbeddedUser(
    argument: _learningmotors_pb_user_CreateEmbeddedUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_user_CreateEmbeddedUserResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateEmbeddedUser(
    argument: _learningmotors_pb_user_CreateEmbeddedUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_CreateEmbeddedUserResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateEmbeddedUser(
    argument: _learningmotors_pb_user_CreateEmbeddedUserRequest,
    callback: grpc.requestCallback<_learningmotors_pb_user_CreateEmbeddedUserResponse__Output>
  ): grpc.ClientUnaryCall;
  createEmbeddedUser(
    argument: _learningmotors_pb_user_CreateEmbeddedUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_CreateEmbeddedUserResponse__Output>
  ): grpc.ClientUnaryCall;
  createEmbeddedUser(
    argument: _learningmotors_pb_user_CreateEmbeddedUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_user_CreateEmbeddedUserResponse__Output>
  ): grpc.ClientUnaryCall;
  createEmbeddedUser(
    argument: _learningmotors_pb_user_CreateEmbeddedUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_CreateEmbeddedUserResponse__Output>
  ): grpc.ClientUnaryCall;
  createEmbeddedUser(
    argument: _learningmotors_pb_user_CreateEmbeddedUserRequest,
    callback: grpc.requestCallback<_learningmotors_pb_user_CreateEmbeddedUserResponse__Output>
  ): grpc.ClientUnaryCall;

  CreateUserRegistration(
    argument: _learningmotors_pb_user_CreateUserRegistrationRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_CreateUserRegistrationResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateUserRegistration(
    argument: _learningmotors_pb_user_CreateUserRegistrationRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_user_CreateUserRegistrationResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateUserRegistration(
    argument: _learningmotors_pb_user_CreateUserRegistrationRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_CreateUserRegistrationResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateUserRegistration(
    argument: _learningmotors_pb_user_CreateUserRegistrationRequest,
    callback: grpc.requestCallback<_learningmotors_pb_user_CreateUserRegistrationResponse__Output>
  ): grpc.ClientUnaryCall;
  createUserRegistration(
    argument: _learningmotors_pb_user_CreateUserRegistrationRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_CreateUserRegistrationResponse__Output>
  ): grpc.ClientUnaryCall;
  createUserRegistration(
    argument: _learningmotors_pb_user_CreateUserRegistrationRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_user_CreateUserRegistrationResponse__Output>
  ): grpc.ClientUnaryCall;
  createUserRegistration(
    argument: _learningmotors_pb_user_CreateUserRegistrationRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_CreateUserRegistrationResponse__Output>
  ): grpc.ClientUnaryCall;
  createUserRegistration(
    argument: _learningmotors_pb_user_CreateUserRegistrationRequest,
    callback: grpc.requestCallback<_learningmotors_pb_user_CreateUserRegistrationResponse__Output>
  ): grpc.ClientUnaryCall;

  CreateWithPassword(
    argument: _learningmotors_pb_user_CreateWithPasswordRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_CreateWithPasswordResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateWithPassword(
    argument: _learningmotors_pb_user_CreateWithPasswordRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_user_CreateWithPasswordResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateWithPassword(
    argument: _learningmotors_pb_user_CreateWithPasswordRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_CreateWithPasswordResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateWithPassword(
    argument: _learningmotors_pb_user_CreateWithPasswordRequest,
    callback: grpc.requestCallback<_learningmotors_pb_user_CreateWithPasswordResponse__Output>
  ): grpc.ClientUnaryCall;
  createWithPassword(
    argument: _learningmotors_pb_user_CreateWithPasswordRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_CreateWithPasswordResponse__Output>
  ): grpc.ClientUnaryCall;
  createWithPassword(
    argument: _learningmotors_pb_user_CreateWithPasswordRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_user_CreateWithPasswordResponse__Output>
  ): grpc.ClientUnaryCall;
  createWithPassword(
    argument: _learningmotors_pb_user_CreateWithPasswordRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_CreateWithPasswordResponse__Output>
  ): grpc.ClientUnaryCall;
  createWithPassword(
    argument: _learningmotors_pb_user_CreateWithPasswordRequest,
    callback: grpc.requestCallback<_learningmotors_pb_user_CreateWithPasswordResponse__Output>
  ): grpc.ClientUnaryCall;

  Delete(
    argument: _learningmotors_pb_user_DeleteRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Delete(
    argument: _learningmotors_pb_user_DeleteRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Delete(
    argument: _learningmotors_pb_user_DeleteRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Delete(
    argument: _learningmotors_pb_user_DeleteRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  delete(
    argument: _learningmotors_pb_user_DeleteRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  delete(
    argument: _learningmotors_pb_user_DeleteRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  delete(
    argument: _learningmotors_pb_user_DeleteRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  delete(
    argument: _learningmotors_pb_user_DeleteRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  DeleteUserRegistration(
    argument: _learningmotors_pb_user_DeleteUserRegistrationRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteUserRegistration(
    argument: _learningmotors_pb_user_DeleteUserRegistrationRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteUserRegistration(
    argument: _learningmotors_pb_user_DeleteUserRegistrationRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteUserRegistration(
    argument: _learningmotors_pb_user_DeleteUserRegistrationRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteUserRegistration(
    argument: _learningmotors_pb_user_DeleteUserRegistrationRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteUserRegistration(
    argument: _learningmotors_pb_user_DeleteUserRegistrationRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteUserRegistration(
    argument: _learningmotors_pb_user_DeleteUserRegistrationRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteUserRegistration(
    argument: _learningmotors_pb_user_DeleteUserRegistrationRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  Get(
    argument: _learningmotors_pb_user_GetRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  Get(
    argument: _learningmotors_pb_user_GetRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_user_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  Get(
    argument: _learningmotors_pb_user_GetRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  Get(
    argument: _learningmotors_pb_user_GetRequest,
    callback: grpc.requestCallback<_learningmotors_pb_user_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_user_GetRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_user_GetRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_user_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_user_GetRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_user_GetRequest,
    callback: grpc.requestCallback<_learningmotors_pb_user_GetResponse__Output>
  ): grpc.ClientUnaryCall;

  GetEmbeddedUser(
    argument: _learningmotors_pb_user_EmbeddedUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_EmbeddedUserResponse__Output>
  ): grpc.ClientUnaryCall;
  GetEmbeddedUser(
    argument: _learningmotors_pb_user_EmbeddedUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_user_EmbeddedUserResponse__Output>
  ): grpc.ClientUnaryCall;
  GetEmbeddedUser(
    argument: _learningmotors_pb_user_EmbeddedUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_EmbeddedUserResponse__Output>
  ): grpc.ClientUnaryCall;
  GetEmbeddedUser(
    argument: _learningmotors_pb_user_EmbeddedUserRequest,
    callback: grpc.requestCallback<_learningmotors_pb_user_EmbeddedUserResponse__Output>
  ): grpc.ClientUnaryCall;
  getEmbeddedUser(
    argument: _learningmotors_pb_user_EmbeddedUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_EmbeddedUserResponse__Output>
  ): grpc.ClientUnaryCall;
  getEmbeddedUser(
    argument: _learningmotors_pb_user_EmbeddedUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_user_EmbeddedUserResponse__Output>
  ): grpc.ClientUnaryCall;
  getEmbeddedUser(
    argument: _learningmotors_pb_user_EmbeddedUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_EmbeddedUserResponse__Output>
  ): grpc.ClientUnaryCall;
  getEmbeddedUser(
    argument: _learningmotors_pb_user_EmbeddedUserRequest,
    callback: grpc.requestCallback<_learningmotors_pb_user_EmbeddedUserResponse__Output>
  ): grpc.ClientUnaryCall;

  GetEpicFHIRUser(
    argument: _learningmotors_pb_user_EpicUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_FHIRUserPayload__Output>
  ): grpc.ClientUnaryCall;
  GetEpicFHIRUser(
    argument: _learningmotors_pb_user_EpicUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_user_FHIRUserPayload__Output>
  ): grpc.ClientUnaryCall;
  GetEpicFHIRUser(
    argument: _learningmotors_pb_user_EpicUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_FHIRUserPayload__Output>
  ): grpc.ClientUnaryCall;
  GetEpicFHIRUser(
    argument: _learningmotors_pb_user_EpicUserRequest,
    callback: grpc.requestCallback<_learningmotors_pb_user_FHIRUserPayload__Output>
  ): grpc.ClientUnaryCall;
  getEpicFhirUser(
    argument: _learningmotors_pb_user_EpicUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_FHIRUserPayload__Output>
  ): grpc.ClientUnaryCall;
  getEpicFhirUser(
    argument: _learningmotors_pb_user_EpicUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_user_FHIRUserPayload__Output>
  ): grpc.ClientUnaryCall;
  getEpicFhirUser(
    argument: _learningmotors_pb_user_EpicUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_FHIRUserPayload__Output>
  ): grpc.ClientUnaryCall;
  getEpicFhirUser(
    argument: _learningmotors_pb_user_EpicUserRequest,
    callback: grpc.requestCallback<_learningmotors_pb_user_FHIRUserPayload__Output>
  ): grpc.ClientUnaryCall;

  GetFHIRUser(
    argument: _learningmotors_pb_user_FHIRUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_FHIRUserPayload__Output>
  ): grpc.ClientUnaryCall;
  GetFHIRUser(
    argument: _learningmotors_pb_user_FHIRUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_user_FHIRUserPayload__Output>
  ): grpc.ClientUnaryCall;
  GetFHIRUser(
    argument: _learningmotors_pb_user_FHIRUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_FHIRUserPayload__Output>
  ): grpc.ClientUnaryCall;
  GetFHIRUser(
    argument: _learningmotors_pb_user_FHIRUserRequest,
    callback: grpc.requestCallback<_learningmotors_pb_user_FHIRUserPayload__Output>
  ): grpc.ClientUnaryCall;
  getFhirUser(
    argument: _learningmotors_pb_user_FHIRUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_FHIRUserPayload__Output>
  ): grpc.ClientUnaryCall;
  getFhirUser(
    argument: _learningmotors_pb_user_FHIRUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_user_FHIRUserPayload__Output>
  ): grpc.ClientUnaryCall;
  getFhirUser(
    argument: _learningmotors_pb_user_FHIRUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_FHIRUserPayload__Output>
  ): grpc.ClientUnaryCall;
  getFhirUser(
    argument: _learningmotors_pb_user_FHIRUserRequest,
    callback: grpc.requestCallback<_learningmotors_pb_user_FHIRUserPayload__Output>
  ): grpc.ClientUnaryCall;

  GetUserByEmail(
    argument: _learningmotors_pb_user_GetRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  GetUserByEmail(
    argument: _learningmotors_pb_user_GetRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_user_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  GetUserByEmail(
    argument: _learningmotors_pb_user_GetRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  GetUserByEmail(
    argument: _learningmotors_pb_user_GetRequest,
    callback: grpc.requestCallback<_learningmotors_pb_user_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  getUserByEmail(
    argument: _learningmotors_pb_user_GetRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  getUserByEmail(
    argument: _learningmotors_pb_user_GetRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_user_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  getUserByEmail(
    argument: _learningmotors_pb_user_GetRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  getUserByEmail(
    argument: _learningmotors_pb_user_GetRequest,
    callback: grpc.requestCallback<_learningmotors_pb_user_GetResponse__Output>
  ): grpc.ClientUnaryCall;

  GetUserRegistrations(
    argument: _learningmotors_pb_user_GetUserRegistrationsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_GetUserRegistrationsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetUserRegistrations(
    argument: _learningmotors_pb_user_GetUserRegistrationsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_user_GetUserRegistrationsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetUserRegistrations(
    argument: _learningmotors_pb_user_GetUserRegistrationsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_GetUserRegistrationsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetUserRegistrations(
    argument: _learningmotors_pb_user_GetUserRegistrationsRequest,
    callback: grpc.requestCallback<_learningmotors_pb_user_GetUserRegistrationsResponse__Output>
  ): grpc.ClientUnaryCall;
  getUserRegistrations(
    argument: _learningmotors_pb_user_GetUserRegistrationsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_GetUserRegistrationsResponse__Output>
  ): grpc.ClientUnaryCall;
  getUserRegistrations(
    argument: _learningmotors_pb_user_GetUserRegistrationsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_user_GetUserRegistrationsResponse__Output>
  ): grpc.ClientUnaryCall;
  getUserRegistrations(
    argument: _learningmotors_pb_user_GetUserRegistrationsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_GetUserRegistrationsResponse__Output>
  ): grpc.ClientUnaryCall;
  getUserRegistrations(
    argument: _learningmotors_pb_user_GetUserRegistrationsRequest,
    callback: grpc.requestCallback<_learningmotors_pb_user_GetUserRegistrationsResponse__Output>
  ): grpc.ClientUnaryCall;

  Register(
    argument: _learningmotors_pb_user_RegisterRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Register(
    argument: _learningmotors_pb_user_RegisterRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Register(
    argument: _learningmotors_pb_user_RegisterRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Register(
    argument: _learningmotors_pb_user_RegisterRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  register(
    argument: _learningmotors_pb_user_RegisterRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  register(
    argument: _learningmotors_pb_user_RegisterRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  register(
    argument: _learningmotors_pb_user_RegisterRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  register(
    argument: _learningmotors_pb_user_RegisterRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  RegisterMarketplaceUser(
    argument: _learningmotors_pb_user_RegisterMarketplaceUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_RegisterMarketplaceUserResponse__Output>
  ): grpc.ClientUnaryCall;
  RegisterMarketplaceUser(
    argument: _learningmotors_pb_user_RegisterMarketplaceUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_user_RegisterMarketplaceUserResponse__Output>
  ): grpc.ClientUnaryCall;
  RegisterMarketplaceUser(
    argument: _learningmotors_pb_user_RegisterMarketplaceUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_RegisterMarketplaceUserResponse__Output>
  ): grpc.ClientUnaryCall;
  RegisterMarketplaceUser(
    argument: _learningmotors_pb_user_RegisterMarketplaceUserRequest,
    callback: grpc.requestCallback<_learningmotors_pb_user_RegisterMarketplaceUserResponse__Output>
  ): grpc.ClientUnaryCall;
  registerMarketplaceUser(
    argument: _learningmotors_pb_user_RegisterMarketplaceUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_RegisterMarketplaceUserResponse__Output>
  ): grpc.ClientUnaryCall;
  registerMarketplaceUser(
    argument: _learningmotors_pb_user_RegisterMarketplaceUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_user_RegisterMarketplaceUserResponse__Output>
  ): grpc.ClientUnaryCall;
  registerMarketplaceUser(
    argument: _learningmotors_pb_user_RegisterMarketplaceUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_RegisterMarketplaceUserResponse__Output>
  ): grpc.ClientUnaryCall;
  registerMarketplaceUser(
    argument: _learningmotors_pb_user_RegisterMarketplaceUserRequest,
    callback: grpc.requestCallback<_learningmotors_pb_user_RegisterMarketplaceUserResponse__Output>
  ): grpc.ClientUnaryCall;

  SendDemoEmail(
    argument: _learningmotors_pb_user_SendDemoEmailRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  SendDemoEmail(
    argument: _learningmotors_pb_user_SendDemoEmailRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  SendDemoEmail(
    argument: _learningmotors_pb_user_SendDemoEmailRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  SendDemoEmail(
    argument: _learningmotors_pb_user_SendDemoEmailRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  sendDemoEmail(
    argument: _learningmotors_pb_user_SendDemoEmailRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  sendDemoEmail(
    argument: _learningmotors_pb_user_SendDemoEmailRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  sendDemoEmail(
    argument: _learningmotors_pb_user_SendDemoEmailRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  sendDemoEmail(
    argument: _learningmotors_pb_user_SendDemoEmailRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  SendGcpUsageMetrics(
    argument: _learningmotors_pb_user_SendGcpUsageMetricsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_SendGcpUsageMetricsResponse__Output>
  ): grpc.ClientUnaryCall;
  SendGcpUsageMetrics(
    argument: _learningmotors_pb_user_SendGcpUsageMetricsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_user_SendGcpUsageMetricsResponse__Output>
  ): grpc.ClientUnaryCall;
  SendGcpUsageMetrics(
    argument: _learningmotors_pb_user_SendGcpUsageMetricsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_SendGcpUsageMetricsResponse__Output>
  ): grpc.ClientUnaryCall;
  SendGcpUsageMetrics(
    argument: _learningmotors_pb_user_SendGcpUsageMetricsRequest,
    callback: grpc.requestCallback<_learningmotors_pb_user_SendGcpUsageMetricsResponse__Output>
  ): grpc.ClientUnaryCall;
  sendGcpUsageMetrics(
    argument: _learningmotors_pb_user_SendGcpUsageMetricsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_SendGcpUsageMetricsResponse__Output>
  ): grpc.ClientUnaryCall;
  sendGcpUsageMetrics(
    argument: _learningmotors_pb_user_SendGcpUsageMetricsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_user_SendGcpUsageMetricsResponse__Output>
  ): grpc.ClientUnaryCall;
  sendGcpUsageMetrics(
    argument: _learningmotors_pb_user_SendGcpUsageMetricsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_SendGcpUsageMetricsResponse__Output>
  ): grpc.ClientUnaryCall;
  sendGcpUsageMetrics(
    argument: _learningmotors_pb_user_SendGcpUsageMetricsRequest,
    callback: grpc.requestCallback<_learningmotors_pb_user_SendGcpUsageMetricsResponse__Output>
  ): grpc.ClientUnaryCall;

  SendVerificationEmail(
    argument: _learningmotors_pb_user_SendVerificationEmailRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  SendVerificationEmail(
    argument: _learningmotors_pb_user_SendVerificationEmailRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  SendVerificationEmail(
    argument: _learningmotors_pb_user_SendVerificationEmailRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  SendVerificationEmail(
    argument: _learningmotors_pb_user_SendVerificationEmailRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  sendVerificationEmail(
    argument: _learningmotors_pb_user_SendVerificationEmailRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  sendVerificationEmail(
    argument: _learningmotors_pb_user_SendVerificationEmailRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  sendVerificationEmail(
    argument: _learningmotors_pb_user_SendVerificationEmailRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  sendVerificationEmail(
    argument: _learningmotors_pb_user_SendVerificationEmailRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  Update(
    argument: _learningmotors_pb_user_UpdateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  Update(
    argument: _learningmotors_pb_user_UpdateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_user_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  Update(
    argument: _learningmotors_pb_user_UpdateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  Update(
    argument: _learningmotors_pb_user_UpdateRequest,
    callback: grpc.requestCallback<_learningmotors_pb_user_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  update(
    argument: _learningmotors_pb_user_UpdateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  update(
    argument: _learningmotors_pb_user_UpdateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_user_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  update(
    argument: _learningmotors_pb_user_UpdateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  update(
    argument: _learningmotors_pb_user_UpdateRequest,
    callback: grpc.requestCallback<_learningmotors_pb_user_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;

  UpdateFHIRUser(
    argument: _learningmotors_pb_user_FHIRUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_FHIRUserPayload__Output>
  ): grpc.ClientUnaryCall;
  UpdateFHIRUser(
    argument: _learningmotors_pb_user_FHIRUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_user_FHIRUserPayload__Output>
  ): grpc.ClientUnaryCall;
  UpdateFHIRUser(
    argument: _learningmotors_pb_user_FHIRUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_FHIRUserPayload__Output>
  ): grpc.ClientUnaryCall;
  UpdateFHIRUser(
    argument: _learningmotors_pb_user_FHIRUserRequest,
    callback: grpc.requestCallback<_learningmotors_pb_user_FHIRUserPayload__Output>
  ): grpc.ClientUnaryCall;
  updateFhirUser(
    argument: _learningmotors_pb_user_FHIRUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_FHIRUserPayload__Output>
  ): grpc.ClientUnaryCall;
  updateFhirUser(
    argument: _learningmotors_pb_user_FHIRUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_user_FHIRUserPayload__Output>
  ): grpc.ClientUnaryCall;
  updateFhirUser(
    argument: _learningmotors_pb_user_FHIRUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_FHIRUserPayload__Output>
  ): grpc.ClientUnaryCall;
  updateFhirUser(
    argument: _learningmotors_pb_user_FHIRUserRequest,
    callback: grpc.requestCallback<_learningmotors_pb_user_FHIRUserPayload__Output>
  ): grpc.ClientUnaryCall;

  UpdateRegistrationStage(
    argument: _learningmotors_pb_user_UpdateRegistrationStageRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  UpdateRegistrationStage(
    argument: _learningmotors_pb_user_UpdateRegistrationStageRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  UpdateRegistrationStage(
    argument: _learningmotors_pb_user_UpdateRegistrationStageRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  UpdateRegistrationStage(
    argument: _learningmotors_pb_user_UpdateRegistrationStageRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  updateRegistrationStage(
    argument: _learningmotors_pb_user_UpdateRegistrationStageRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  updateRegistrationStage(
    argument: _learningmotors_pb_user_UpdateRegistrationStageRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  updateRegistrationStage(
    argument: _learningmotors_pb_user_UpdateRegistrationStageRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  updateRegistrationStage(
    argument: _learningmotors_pb_user_UpdateRegistrationStageRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  ValidateVerificationToken(
    argument: _learningmotors_pb_user_ValidateVerificationTokenRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_ValidateVerificationTokenResponse__Output>
  ): grpc.ClientUnaryCall;
  ValidateVerificationToken(
    argument: _learningmotors_pb_user_ValidateVerificationTokenRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_user_ValidateVerificationTokenResponse__Output>
  ): grpc.ClientUnaryCall;
  ValidateVerificationToken(
    argument: _learningmotors_pb_user_ValidateVerificationTokenRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_ValidateVerificationTokenResponse__Output>
  ): grpc.ClientUnaryCall;
  ValidateVerificationToken(
    argument: _learningmotors_pb_user_ValidateVerificationTokenRequest,
    callback: grpc.requestCallback<_learningmotors_pb_user_ValidateVerificationTokenResponse__Output>
  ): grpc.ClientUnaryCall;
  validateVerificationToken(
    argument: _learningmotors_pb_user_ValidateVerificationTokenRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_ValidateVerificationTokenResponse__Output>
  ): grpc.ClientUnaryCall;
  validateVerificationToken(
    argument: _learningmotors_pb_user_ValidateVerificationTokenRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_user_ValidateVerificationTokenResponse__Output>
  ): grpc.ClientUnaryCall;
  validateVerificationToken(
    argument: _learningmotors_pb_user_ValidateVerificationTokenRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_user_ValidateVerificationTokenResponse__Output>
  ): grpc.ClientUnaryCall;
  validateVerificationToken(
    argument: _learningmotors_pb_user_ValidateVerificationTokenRequest,
    callback: grpc.requestCallback<_learningmotors_pb_user_ValidateVerificationTokenResponse__Output>
  ): grpc.ClientUnaryCall;
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  Activate: grpc.handleUnaryCall<_learningmotors_pb_user_ActivateRequest__Output, _google_protobuf_Empty>;

  Create: grpc.handleUnaryCall<_learningmotors_pb_user_CreateRequest__Output, _learningmotors_pb_user_CreateResponse>;

  CreateEmbeddedUser: grpc.handleUnaryCall<
    _learningmotors_pb_user_CreateEmbeddedUserRequest__Output,
    _learningmotors_pb_user_CreateEmbeddedUserResponse
  >;

  CreateUserRegistration: grpc.handleUnaryCall<
    _learningmotors_pb_user_CreateUserRegistrationRequest__Output,
    _learningmotors_pb_user_CreateUserRegistrationResponse
  >;

  CreateWithPassword: grpc.handleUnaryCall<
    _learningmotors_pb_user_CreateWithPasswordRequest__Output,
    _learningmotors_pb_user_CreateWithPasswordResponse
  >;

  Delete: grpc.handleUnaryCall<_learningmotors_pb_user_DeleteRequest__Output, _google_protobuf_Empty>;

  DeleteUserRegistration: grpc.handleUnaryCall<
    _learningmotors_pb_user_DeleteUserRegistrationRequest__Output,
    _google_protobuf_Empty
  >;

  Get: grpc.handleUnaryCall<_learningmotors_pb_user_GetRequest__Output, _learningmotors_pb_user_GetResponse>;

  GetEmbeddedUser: grpc.handleUnaryCall<
    _learningmotors_pb_user_EmbeddedUserRequest__Output,
    _learningmotors_pb_user_EmbeddedUserResponse
  >;

  GetEpicFHIRUser: grpc.handleUnaryCall<
    _learningmotors_pb_user_EpicUserRequest__Output,
    _learningmotors_pb_user_FHIRUserPayload
  >;

  GetFHIRUser: grpc.handleUnaryCall<
    _learningmotors_pb_user_FHIRUserRequest__Output,
    _learningmotors_pb_user_FHIRUserPayload
  >;

  GetUserByEmail: grpc.handleUnaryCall<_learningmotors_pb_user_GetRequest__Output, _learningmotors_pb_user_GetResponse>;

  GetUserRegistrations: grpc.handleUnaryCall<
    _learningmotors_pb_user_GetUserRegistrationsRequest__Output,
    _learningmotors_pb_user_GetUserRegistrationsResponse
  >;

  Register: grpc.handleUnaryCall<_learningmotors_pb_user_RegisterRequest__Output, _google_protobuf_Empty>;

  RegisterMarketplaceUser: grpc.handleUnaryCall<
    _learningmotors_pb_user_RegisterMarketplaceUserRequest__Output,
    _learningmotors_pb_user_RegisterMarketplaceUserResponse
  >;

  SendDemoEmail: grpc.handleUnaryCall<_learningmotors_pb_user_SendDemoEmailRequest__Output, _google_protobuf_Empty>;

  SendGcpUsageMetrics: grpc.handleUnaryCall<
    _learningmotors_pb_user_SendGcpUsageMetricsRequest__Output,
    _learningmotors_pb_user_SendGcpUsageMetricsResponse
  >;

  SendVerificationEmail: grpc.handleUnaryCall<
    _learningmotors_pb_user_SendVerificationEmailRequest__Output,
    _google_protobuf_Empty
  >;

  Update: grpc.handleUnaryCall<_learningmotors_pb_user_UpdateRequest__Output, _learningmotors_pb_user_UpdateResponse>;

  UpdateFHIRUser: grpc.handleUnaryCall<
    _learningmotors_pb_user_FHIRUserRequest__Output,
    _learningmotors_pb_user_FHIRUserPayload
  >;

  UpdateRegistrationStage: grpc.handleUnaryCall<
    _learningmotors_pb_user_UpdateRegistrationStageRequest__Output,
    _google_protobuf_Empty
  >;

  ValidateVerificationToken: grpc.handleUnaryCall<
    _learningmotors_pb_user_ValidateVerificationTokenRequest__Output,
    _learningmotors_pb_user_ValidateVerificationTokenResponse
  >;
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  Activate: MethodDefinition<
    _learningmotors_pb_user_ActivateRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_user_ActivateRequest__Output,
    _google_protobuf_Empty__Output
  >;
  Create: MethodDefinition<
    _learningmotors_pb_user_CreateRequest,
    _learningmotors_pb_user_CreateResponse,
    _learningmotors_pb_user_CreateRequest__Output,
    _learningmotors_pb_user_CreateResponse__Output
  >;
  CreateEmbeddedUser: MethodDefinition<
    _learningmotors_pb_user_CreateEmbeddedUserRequest,
    _learningmotors_pb_user_CreateEmbeddedUserResponse,
    _learningmotors_pb_user_CreateEmbeddedUserRequest__Output,
    _learningmotors_pb_user_CreateEmbeddedUserResponse__Output
  >;
  CreateUserRegistration: MethodDefinition<
    _learningmotors_pb_user_CreateUserRegistrationRequest,
    _learningmotors_pb_user_CreateUserRegistrationResponse,
    _learningmotors_pb_user_CreateUserRegistrationRequest__Output,
    _learningmotors_pb_user_CreateUserRegistrationResponse__Output
  >;
  CreateWithPassword: MethodDefinition<
    _learningmotors_pb_user_CreateWithPasswordRequest,
    _learningmotors_pb_user_CreateWithPasswordResponse,
    _learningmotors_pb_user_CreateWithPasswordRequest__Output,
    _learningmotors_pb_user_CreateWithPasswordResponse__Output
  >;
  Delete: MethodDefinition<
    _learningmotors_pb_user_DeleteRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_user_DeleteRequest__Output,
    _google_protobuf_Empty__Output
  >;
  DeleteUserRegistration: MethodDefinition<
    _learningmotors_pb_user_DeleteUserRegistrationRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_user_DeleteUserRegistrationRequest__Output,
    _google_protobuf_Empty__Output
  >;
  Get: MethodDefinition<
    _learningmotors_pb_user_GetRequest,
    _learningmotors_pb_user_GetResponse,
    _learningmotors_pb_user_GetRequest__Output,
    _learningmotors_pb_user_GetResponse__Output
  >;
  GetEmbeddedUser: MethodDefinition<
    _learningmotors_pb_user_EmbeddedUserRequest,
    _learningmotors_pb_user_EmbeddedUserResponse,
    _learningmotors_pb_user_EmbeddedUserRequest__Output,
    _learningmotors_pb_user_EmbeddedUserResponse__Output
  >;
  GetEpicFHIRUser: MethodDefinition<
    _learningmotors_pb_user_EpicUserRequest,
    _learningmotors_pb_user_FHIRUserPayload,
    _learningmotors_pb_user_EpicUserRequest__Output,
    _learningmotors_pb_user_FHIRUserPayload__Output
  >;
  GetFHIRUser: MethodDefinition<
    _learningmotors_pb_user_FHIRUserRequest,
    _learningmotors_pb_user_FHIRUserPayload,
    _learningmotors_pb_user_FHIRUserRequest__Output,
    _learningmotors_pb_user_FHIRUserPayload__Output
  >;
  GetUserByEmail: MethodDefinition<
    _learningmotors_pb_user_GetRequest,
    _learningmotors_pb_user_GetResponse,
    _learningmotors_pb_user_GetRequest__Output,
    _learningmotors_pb_user_GetResponse__Output
  >;
  GetUserRegistrations: MethodDefinition<
    _learningmotors_pb_user_GetUserRegistrationsRequest,
    _learningmotors_pb_user_GetUserRegistrationsResponse,
    _learningmotors_pb_user_GetUserRegistrationsRequest__Output,
    _learningmotors_pb_user_GetUserRegistrationsResponse__Output
  >;
  Register: MethodDefinition<
    _learningmotors_pb_user_RegisterRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_user_RegisterRequest__Output,
    _google_protobuf_Empty__Output
  >;
  RegisterMarketplaceUser: MethodDefinition<
    _learningmotors_pb_user_RegisterMarketplaceUserRequest,
    _learningmotors_pb_user_RegisterMarketplaceUserResponse,
    _learningmotors_pb_user_RegisterMarketplaceUserRequest__Output,
    _learningmotors_pb_user_RegisterMarketplaceUserResponse__Output
  >;
  SendDemoEmail: MethodDefinition<
    _learningmotors_pb_user_SendDemoEmailRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_user_SendDemoEmailRequest__Output,
    _google_protobuf_Empty__Output
  >;
  SendGcpUsageMetrics: MethodDefinition<
    _learningmotors_pb_user_SendGcpUsageMetricsRequest,
    _learningmotors_pb_user_SendGcpUsageMetricsResponse,
    _learningmotors_pb_user_SendGcpUsageMetricsRequest__Output,
    _learningmotors_pb_user_SendGcpUsageMetricsResponse__Output
  >;
  SendVerificationEmail: MethodDefinition<
    _learningmotors_pb_user_SendVerificationEmailRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_user_SendVerificationEmailRequest__Output,
    _google_protobuf_Empty__Output
  >;
  Update: MethodDefinition<
    _learningmotors_pb_user_UpdateRequest,
    _learningmotors_pb_user_UpdateResponse,
    _learningmotors_pb_user_UpdateRequest__Output,
    _learningmotors_pb_user_UpdateResponse__Output
  >;
  UpdateFHIRUser: MethodDefinition<
    _learningmotors_pb_user_FHIRUserRequest,
    _learningmotors_pb_user_FHIRUserPayload,
    _learningmotors_pb_user_FHIRUserRequest__Output,
    _learningmotors_pb_user_FHIRUserPayload__Output
  >;
  UpdateRegistrationStage: MethodDefinition<
    _learningmotors_pb_user_UpdateRegistrationStageRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_user_UpdateRegistrationStageRequest__Output,
    _google_protobuf_Empty__Output
  >;
  ValidateVerificationToken: MethodDefinition<
    _learningmotors_pb_user_ValidateVerificationTokenRequest,
    _learningmotors_pb_user_ValidateVerificationTokenResponse,
    _learningmotors_pb_user_ValidateVerificationTokenRequest__Output,
    _learningmotors_pb_user_ValidateVerificationTokenResponse__Output
  >;
}
