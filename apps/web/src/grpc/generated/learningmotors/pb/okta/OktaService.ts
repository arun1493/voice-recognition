// Original file: node_modules/protobufs/src/learningmotors/pb/okta/okta.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  ActivateRequest as _learningmotors_pb_okta_ActivateRequest,
  ActivateRequest__Output as _learningmotors_pb_okta_ActivateRequest__Output
} from "../../../learningmotors/pb/okta/ActivateRequest";
import type {
  CreateAccountAndAssignAppRequest as _learningmotors_pb_okta_CreateAccountAndAssignAppRequest,
  CreateAccountAndAssignAppRequest__Output as _learningmotors_pb_okta_CreateAccountAndAssignAppRequest__Output
} from "../../../learningmotors/pb/okta/CreateAccountAndAssignAppRequest";
import type {
  CreateAccountAndAssignAppResponse as _learningmotors_pb_okta_CreateAccountAndAssignAppResponse,
  CreateAccountAndAssignAppResponse__Output as _learningmotors_pb_okta_CreateAccountAndAssignAppResponse__Output
} from "../../../learningmotors/pb/okta/CreateAccountAndAssignAppResponse";
import type {
  CreateAccountWithPasswordRequest as _learningmotors_pb_okta_CreateAccountWithPasswordRequest,
  CreateAccountWithPasswordRequest__Output as _learningmotors_pb_okta_CreateAccountWithPasswordRequest__Output
} from "../../../learningmotors/pb/okta/CreateAccountWithPasswordRequest";
import type {
  CreateAccountWithPasswordResponse as _learningmotors_pb_okta_CreateAccountWithPasswordResponse,
  CreateAccountWithPasswordResponse__Output as _learningmotors_pb_okta_CreateAccountWithPasswordResponse__Output
} from "../../../learningmotors/pb/okta/CreateAccountWithPasswordResponse";
import type {
  CreateRequest as _learningmotors_pb_okta_CreateRequest,
  CreateRequest__Output as _learningmotors_pb_okta_CreateRequest__Output
} from "../../../learningmotors/pb/okta/CreateRequest";
import type {
  CreateResponse as _learningmotors_pb_okta_CreateResponse,
  CreateResponse__Output as _learningmotors_pb_okta_CreateResponse__Output
} from "../../../learningmotors/pb/okta/CreateResponse";
import type {
  DeleteRequest as _learningmotors_pb_okta_DeleteRequest,
  DeleteRequest__Output as _learningmotors_pb_okta_DeleteRequest__Output
} from "../../../learningmotors/pb/okta/DeleteRequest";
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output
} from "../../../google/protobuf/Empty";
import type {
  ResetRequest as _learningmotors_pb_okta_ResetRequest,
  ResetRequest__Output as _learningmotors_pb_okta_ResetRequest__Output
} from "../../../learningmotors/pb/okta/ResetRequest";
import type {
  UpdateRequest as _learningmotors_pb_okta_UpdateRequest,
  UpdateRequest__Output as _learningmotors_pb_okta_UpdateRequest__Output
} from "../../../learningmotors/pb/okta/UpdateRequest";
import type {
  UpdateResponse as _learningmotors_pb_okta_UpdateResponse,
  UpdateResponse__Output as _learningmotors_pb_okta_UpdateResponse__Output
} from "../../../learningmotors/pb/okta/UpdateResponse";

export interface OktaServiceClient extends grpc.Client {
  ActivateAccount(
    argument: _learningmotors_pb_okta_ActivateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  ActivateAccount(
    argument: _learningmotors_pb_okta_ActivateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  ActivateAccount(
    argument: _learningmotors_pb_okta_ActivateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  ActivateAccount(
    argument: _learningmotors_pb_okta_ActivateRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  activateAccount(
    argument: _learningmotors_pb_okta_ActivateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  activateAccount(
    argument: _learningmotors_pb_okta_ActivateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  activateAccount(
    argument: _learningmotors_pb_okta_ActivateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  activateAccount(
    argument: _learningmotors_pb_okta_ActivateRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  CreateAccount(
    argument: _learningmotors_pb_okta_CreateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_okta_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateAccount(
    argument: _learningmotors_pb_okta_CreateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_okta_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateAccount(
    argument: _learningmotors_pb_okta_CreateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_okta_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateAccount(
    argument: _learningmotors_pb_okta_CreateRequest,
    callback: grpc.requestCallback<_learningmotors_pb_okta_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  createAccount(
    argument: _learningmotors_pb_okta_CreateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_okta_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  createAccount(
    argument: _learningmotors_pb_okta_CreateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_okta_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  createAccount(
    argument: _learningmotors_pb_okta_CreateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_okta_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  createAccount(
    argument: _learningmotors_pb_okta_CreateRequest,
    callback: grpc.requestCallback<_learningmotors_pb_okta_CreateResponse__Output>
  ): grpc.ClientUnaryCall;

  CreateAccountAndAssignApp(
    argument: _learningmotors_pb_okta_CreateAccountAndAssignAppRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_okta_CreateAccountAndAssignAppResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateAccountAndAssignApp(
    argument: _learningmotors_pb_okta_CreateAccountAndAssignAppRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_okta_CreateAccountAndAssignAppResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateAccountAndAssignApp(
    argument: _learningmotors_pb_okta_CreateAccountAndAssignAppRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_okta_CreateAccountAndAssignAppResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateAccountAndAssignApp(
    argument: _learningmotors_pb_okta_CreateAccountAndAssignAppRequest,
    callback: grpc.requestCallback<_learningmotors_pb_okta_CreateAccountAndAssignAppResponse__Output>
  ): grpc.ClientUnaryCall;
  createAccountAndAssignApp(
    argument: _learningmotors_pb_okta_CreateAccountAndAssignAppRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_okta_CreateAccountAndAssignAppResponse__Output>
  ): grpc.ClientUnaryCall;
  createAccountAndAssignApp(
    argument: _learningmotors_pb_okta_CreateAccountAndAssignAppRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_okta_CreateAccountAndAssignAppResponse__Output>
  ): grpc.ClientUnaryCall;
  createAccountAndAssignApp(
    argument: _learningmotors_pb_okta_CreateAccountAndAssignAppRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_okta_CreateAccountAndAssignAppResponse__Output>
  ): grpc.ClientUnaryCall;
  createAccountAndAssignApp(
    argument: _learningmotors_pb_okta_CreateAccountAndAssignAppRequest,
    callback: grpc.requestCallback<_learningmotors_pb_okta_CreateAccountAndAssignAppResponse__Output>
  ): grpc.ClientUnaryCall;

  CreateAccountWithPassword(
    argument: _learningmotors_pb_okta_CreateAccountWithPasswordRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_okta_CreateAccountWithPasswordResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateAccountWithPassword(
    argument: _learningmotors_pb_okta_CreateAccountWithPasswordRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_okta_CreateAccountWithPasswordResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateAccountWithPassword(
    argument: _learningmotors_pb_okta_CreateAccountWithPasswordRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_okta_CreateAccountWithPasswordResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateAccountWithPassword(
    argument: _learningmotors_pb_okta_CreateAccountWithPasswordRequest,
    callback: grpc.requestCallback<_learningmotors_pb_okta_CreateAccountWithPasswordResponse__Output>
  ): grpc.ClientUnaryCall;
  createAccountWithPassword(
    argument: _learningmotors_pb_okta_CreateAccountWithPasswordRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_okta_CreateAccountWithPasswordResponse__Output>
  ): grpc.ClientUnaryCall;
  createAccountWithPassword(
    argument: _learningmotors_pb_okta_CreateAccountWithPasswordRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_okta_CreateAccountWithPasswordResponse__Output>
  ): grpc.ClientUnaryCall;
  createAccountWithPassword(
    argument: _learningmotors_pb_okta_CreateAccountWithPasswordRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_okta_CreateAccountWithPasswordResponse__Output>
  ): grpc.ClientUnaryCall;
  createAccountWithPassword(
    argument: _learningmotors_pb_okta_CreateAccountWithPasswordRequest,
    callback: grpc.requestCallback<_learningmotors_pb_okta_CreateAccountWithPasswordResponse__Output>
  ): grpc.ClientUnaryCall;

  DeleteAccount(
    argument: _learningmotors_pb_okta_DeleteRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteAccount(
    argument: _learningmotors_pb_okta_DeleteRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteAccount(
    argument: _learningmotors_pb_okta_DeleteRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteAccount(
    argument: _learningmotors_pb_okta_DeleteRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteAccount(
    argument: _learningmotors_pb_okta_DeleteRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteAccount(
    argument: _learningmotors_pb_okta_DeleteRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteAccount(
    argument: _learningmotors_pb_okta_DeleteRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteAccount(
    argument: _learningmotors_pb_okta_DeleteRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  ResetPassword(
    argument: _learningmotors_pb_okta_ResetRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  ResetPassword(
    argument: _learningmotors_pb_okta_ResetRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  ResetPassword(
    argument: _learningmotors_pb_okta_ResetRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  ResetPassword(
    argument: _learningmotors_pb_okta_ResetRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  resetPassword(
    argument: _learningmotors_pb_okta_ResetRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  resetPassword(
    argument: _learningmotors_pb_okta_ResetRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  resetPassword(
    argument: _learningmotors_pb_okta_ResetRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  resetPassword(
    argument: _learningmotors_pb_okta_ResetRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  UpdateAccount(
    argument: _learningmotors_pb_okta_UpdateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_okta_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  UpdateAccount(
    argument: _learningmotors_pb_okta_UpdateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_okta_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  UpdateAccount(
    argument: _learningmotors_pb_okta_UpdateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_okta_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  UpdateAccount(
    argument: _learningmotors_pb_okta_UpdateRequest,
    callback: grpc.requestCallback<_learningmotors_pb_okta_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  updateAccount(
    argument: _learningmotors_pb_okta_UpdateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_okta_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  updateAccount(
    argument: _learningmotors_pb_okta_UpdateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_okta_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  updateAccount(
    argument: _learningmotors_pb_okta_UpdateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_okta_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  updateAccount(
    argument: _learningmotors_pb_okta_UpdateRequest,
    callback: grpc.requestCallback<_learningmotors_pb_okta_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
}

export interface OktaServiceHandlers extends grpc.UntypedServiceImplementation {
  ActivateAccount: grpc.handleUnaryCall<_learningmotors_pb_okta_ActivateRequest__Output, _google_protobuf_Empty>;

  CreateAccount: grpc.handleUnaryCall<
    _learningmotors_pb_okta_CreateRequest__Output,
    _learningmotors_pb_okta_CreateResponse
  >;

  CreateAccountAndAssignApp: grpc.handleUnaryCall<
    _learningmotors_pb_okta_CreateAccountAndAssignAppRequest__Output,
    _learningmotors_pb_okta_CreateAccountAndAssignAppResponse
  >;

  CreateAccountWithPassword: grpc.handleUnaryCall<
    _learningmotors_pb_okta_CreateAccountWithPasswordRequest__Output,
    _learningmotors_pb_okta_CreateAccountWithPasswordResponse
  >;

  DeleteAccount: grpc.handleUnaryCall<_learningmotors_pb_okta_DeleteRequest__Output, _google_protobuf_Empty>;

  ResetPassword: grpc.handleUnaryCall<_learningmotors_pb_okta_ResetRequest__Output, _google_protobuf_Empty>;

  UpdateAccount: grpc.handleUnaryCall<
    _learningmotors_pb_okta_UpdateRequest__Output,
    _learningmotors_pb_okta_UpdateResponse
  >;
}

export interface OktaServiceDefinition extends grpc.ServiceDefinition {
  ActivateAccount: MethodDefinition<
    _learningmotors_pb_okta_ActivateRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_okta_ActivateRequest__Output,
    _google_protobuf_Empty__Output
  >;
  CreateAccount: MethodDefinition<
    _learningmotors_pb_okta_CreateRequest,
    _learningmotors_pb_okta_CreateResponse,
    _learningmotors_pb_okta_CreateRequest__Output,
    _learningmotors_pb_okta_CreateResponse__Output
  >;
  CreateAccountAndAssignApp: MethodDefinition<
    _learningmotors_pb_okta_CreateAccountAndAssignAppRequest,
    _learningmotors_pb_okta_CreateAccountAndAssignAppResponse,
    _learningmotors_pb_okta_CreateAccountAndAssignAppRequest__Output,
    _learningmotors_pb_okta_CreateAccountAndAssignAppResponse__Output
  >;
  CreateAccountWithPassword: MethodDefinition<
    _learningmotors_pb_okta_CreateAccountWithPasswordRequest,
    _learningmotors_pb_okta_CreateAccountWithPasswordResponse,
    _learningmotors_pb_okta_CreateAccountWithPasswordRequest__Output,
    _learningmotors_pb_okta_CreateAccountWithPasswordResponse__Output
  >;
  DeleteAccount: MethodDefinition<
    _learningmotors_pb_okta_DeleteRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_okta_DeleteRequest__Output,
    _google_protobuf_Empty__Output
  >;
  ResetPassword: MethodDefinition<
    _learningmotors_pb_okta_ResetRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_okta_ResetRequest__Output,
    _google_protobuf_Empty__Output
  >;
  UpdateAccount: MethodDefinition<
    _learningmotors_pb_okta_UpdateRequest,
    _learningmotors_pb_okta_UpdateResponse,
    _learningmotors_pb_okta_UpdateRequest__Output,
    _learningmotors_pb_okta_UpdateResponse__Output
  >;
}
