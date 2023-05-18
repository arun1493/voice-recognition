// Original file: node_modules/protobufs/src/suki/pb/nvoqauth/nvoqauth.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  CreateAccountPayload as _suki_pb_nvoqauth_CreateAccountPayload,
  CreateAccountPayload__Output as _suki_pb_nvoqauth_CreateAccountPayload__Output
} from "../../../suki/pb/nvoqauth/CreateAccountPayload";
import type {
  CreateAccountRequest as _suki_pb_nvoqauth_CreateAccountRequest,
  CreateAccountRequest__Output as _suki_pb_nvoqauth_CreateAccountRequest__Output
} from "../../../suki/pb/nvoqauth/CreateAccountRequest";
import type {
  CreateOrUpdateUserRequest as _suki_pb_nvoqauth_CreateOrUpdateUserRequest,
  CreateOrUpdateUserRequest__Output as _suki_pb_nvoqauth_CreateOrUpdateUserRequest__Output
} from "../../../suki/pb/nvoqauth/CreateOrUpdateUserRequest";
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output
} from "../../../google/protobuf/Empty";
import type {
  FetchAllNVoqOrganizationsPayload as _suki_pb_nvoqauth_FetchAllNVoqOrganizationsPayload,
  FetchAllNVoqOrganizationsPayload__Output as _suki_pb_nvoqauth_FetchAllNVoqOrganizationsPayload__Output
} from "../../../suki/pb/nvoqauth/FetchAllNVoqOrganizationsPayload";
import type {
  FetchLinkedOrganizationsPayload as _suki_pb_nvoqauth_FetchLinkedOrganizationsPayload,
  FetchLinkedOrganizationsPayload__Output as _suki_pb_nvoqauth_FetchLinkedOrganizationsPayload__Output
} from "../../../suki/pb/nvoqauth/FetchLinkedOrganizationsPayload";
import type {
  FetchUserPayload as _suki_pb_nvoqauth_FetchUserPayload,
  FetchUserPayload__Output as _suki_pb_nvoqauth_FetchUserPayload__Output
} from "../../../suki/pb/nvoqauth/FetchUserPayload";
import type {
  FetchUserRequest as _suki_pb_nvoqauth_FetchUserRequest,
  FetchUserRequest__Output as _suki_pb_nvoqauth_FetchUserRequest__Output
} from "../../../suki/pb/nvoqauth/FetchUserRequest";
import type {
  ForceCreateAndLoginRequest as _suki_pb_nvoqauth_ForceCreateAndLoginRequest,
  ForceCreateAndLoginRequest__Output as _suki_pb_nvoqauth_ForceCreateAndLoginRequest__Output
} from "../../../suki/pb/nvoqauth/ForceCreateAndLoginRequest";
import type {
  LinkSukiOrganizationToNVoqPayload as _suki_pb_nvoqauth_LinkSukiOrganizationToNVoqPayload,
  LinkSukiOrganizationToNVoqPayload__Output as _suki_pb_nvoqauth_LinkSukiOrganizationToNVoqPayload__Output
} from "../../../suki/pb/nvoqauth/LinkSukiOrganizationToNVoqPayload";
import type {
  LinkSukiOrganizationToNVoqRequest as _suki_pb_nvoqauth_LinkSukiOrganizationToNVoqRequest,
  LinkSukiOrganizationToNVoqRequest__Output as _suki_pb_nvoqauth_LinkSukiOrganizationToNVoqRequest__Output
} from "../../../suki/pb/nvoqauth/LinkSukiOrganizationToNVoqRequest";
import type {
  SafeToOnboardPayload as _suki_pb_nvoqauth_SafeToOnboardPayload,
  SafeToOnboardPayload__Output as _suki_pb_nvoqauth_SafeToOnboardPayload__Output
} from "../../../suki/pb/nvoqauth/SafeToOnboardPayload";
import type {
  SafeToOnboardRequest as _suki_pb_nvoqauth_SafeToOnboardRequest,
  SafeToOnboardRequest__Output as _suki_pb_nvoqauth_SafeToOnboardRequest__Output
} from "../../../suki/pb/nvoqauth/SafeToOnboardRequest";
import type {
  TopicsResponse as _suki_pb_nvoqauth_TopicsResponse,
  TopicsResponse__Output as _suki_pb_nvoqauth_TopicsResponse__Output
} from "../../../suki/pb/nvoqauth/TopicsResponse";

export interface MsNvoqAuthenticatorClient extends grpc.Client {
  CreateAccount(
    argument: _suki_pb_nvoqauth_CreateAccountRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_CreateAccountPayload__Output>
  ): grpc.ClientUnaryCall;
  CreateAccount(
    argument: _suki_pb_nvoqauth_CreateAccountRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_CreateAccountPayload__Output>
  ): grpc.ClientUnaryCall;
  CreateAccount(
    argument: _suki_pb_nvoqauth_CreateAccountRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_CreateAccountPayload__Output>
  ): grpc.ClientUnaryCall;
  CreateAccount(
    argument: _suki_pb_nvoqauth_CreateAccountRequest,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_CreateAccountPayload__Output>
  ): grpc.ClientUnaryCall;
  createAccount(
    argument: _suki_pb_nvoqauth_CreateAccountRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_CreateAccountPayload__Output>
  ): grpc.ClientUnaryCall;
  createAccount(
    argument: _suki_pb_nvoqauth_CreateAccountRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_CreateAccountPayload__Output>
  ): grpc.ClientUnaryCall;
  createAccount(
    argument: _suki_pb_nvoqauth_CreateAccountRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_CreateAccountPayload__Output>
  ): grpc.ClientUnaryCall;
  createAccount(
    argument: _suki_pb_nvoqauth_CreateAccountRequest,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_CreateAccountPayload__Output>
  ): grpc.ClientUnaryCall;

  CreateOrUpdateUser(
    argument: _suki_pb_nvoqauth_CreateOrUpdateUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_CreateAccountPayload__Output>
  ): grpc.ClientUnaryCall;
  CreateOrUpdateUser(
    argument: _suki_pb_nvoqauth_CreateOrUpdateUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_CreateAccountPayload__Output>
  ): grpc.ClientUnaryCall;
  CreateOrUpdateUser(
    argument: _suki_pb_nvoqauth_CreateOrUpdateUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_CreateAccountPayload__Output>
  ): grpc.ClientUnaryCall;
  CreateOrUpdateUser(
    argument: _suki_pb_nvoqauth_CreateOrUpdateUserRequest,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_CreateAccountPayload__Output>
  ): grpc.ClientUnaryCall;
  createOrUpdateUser(
    argument: _suki_pb_nvoqauth_CreateOrUpdateUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_CreateAccountPayload__Output>
  ): grpc.ClientUnaryCall;
  createOrUpdateUser(
    argument: _suki_pb_nvoqauth_CreateOrUpdateUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_CreateAccountPayload__Output>
  ): grpc.ClientUnaryCall;
  createOrUpdateUser(
    argument: _suki_pb_nvoqauth_CreateOrUpdateUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_CreateAccountPayload__Output>
  ): grpc.ClientUnaryCall;
  createOrUpdateUser(
    argument: _suki_pb_nvoqauth_CreateOrUpdateUserRequest,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_CreateAccountPayload__Output>
  ): grpc.ClientUnaryCall;

  FetchAllNVoqOrganizations(
    argument: _google_protobuf_Empty,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_FetchAllNVoqOrganizationsPayload__Output>
  ): grpc.ClientUnaryCall;
  FetchAllNVoqOrganizations(
    argument: _google_protobuf_Empty,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_FetchAllNVoqOrganizationsPayload__Output>
  ): grpc.ClientUnaryCall;
  FetchAllNVoqOrganizations(
    argument: _google_protobuf_Empty,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_FetchAllNVoqOrganizationsPayload__Output>
  ): grpc.ClientUnaryCall;
  FetchAllNVoqOrganizations(
    argument: _google_protobuf_Empty,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_FetchAllNVoqOrganizationsPayload__Output>
  ): grpc.ClientUnaryCall;
  fetchAllNVoqOrganizations(
    argument: _google_protobuf_Empty,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_FetchAllNVoqOrganizationsPayload__Output>
  ): grpc.ClientUnaryCall;
  fetchAllNVoqOrganizations(
    argument: _google_protobuf_Empty,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_FetchAllNVoqOrganizationsPayload__Output>
  ): grpc.ClientUnaryCall;
  fetchAllNVoqOrganizations(
    argument: _google_protobuf_Empty,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_FetchAllNVoqOrganizationsPayload__Output>
  ): grpc.ClientUnaryCall;
  fetchAllNVoqOrganizations(
    argument: _google_protobuf_Empty,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_FetchAllNVoqOrganizationsPayload__Output>
  ): grpc.ClientUnaryCall;

  FetchAndLoginUser(
    argument: _suki_pb_nvoqauth_FetchUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_FetchUserPayload__Output>
  ): grpc.ClientUnaryCall;
  FetchAndLoginUser(
    argument: _suki_pb_nvoqauth_FetchUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_FetchUserPayload__Output>
  ): grpc.ClientUnaryCall;
  FetchAndLoginUser(
    argument: _suki_pb_nvoqauth_FetchUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_FetchUserPayload__Output>
  ): grpc.ClientUnaryCall;
  FetchAndLoginUser(
    argument: _suki_pb_nvoqauth_FetchUserRequest,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_FetchUserPayload__Output>
  ): grpc.ClientUnaryCall;
  fetchAndLoginUser(
    argument: _suki_pb_nvoqauth_FetchUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_FetchUserPayload__Output>
  ): grpc.ClientUnaryCall;
  fetchAndLoginUser(
    argument: _suki_pb_nvoqauth_FetchUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_FetchUserPayload__Output>
  ): grpc.ClientUnaryCall;
  fetchAndLoginUser(
    argument: _suki_pb_nvoqauth_FetchUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_FetchUserPayload__Output>
  ): grpc.ClientUnaryCall;
  fetchAndLoginUser(
    argument: _suki_pb_nvoqauth_FetchUserRequest,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_FetchUserPayload__Output>
  ): grpc.ClientUnaryCall;

  FetchLinkedOrganizations(
    argument: _google_protobuf_Empty,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_FetchLinkedOrganizationsPayload__Output>
  ): grpc.ClientUnaryCall;
  FetchLinkedOrganizations(
    argument: _google_protobuf_Empty,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_FetchLinkedOrganizationsPayload__Output>
  ): grpc.ClientUnaryCall;
  FetchLinkedOrganizations(
    argument: _google_protobuf_Empty,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_FetchLinkedOrganizationsPayload__Output>
  ): grpc.ClientUnaryCall;
  FetchLinkedOrganizations(
    argument: _google_protobuf_Empty,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_FetchLinkedOrganizationsPayload__Output>
  ): grpc.ClientUnaryCall;
  fetchLinkedOrganizations(
    argument: _google_protobuf_Empty,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_FetchLinkedOrganizationsPayload__Output>
  ): grpc.ClientUnaryCall;
  fetchLinkedOrganizations(
    argument: _google_protobuf_Empty,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_FetchLinkedOrganizationsPayload__Output>
  ): grpc.ClientUnaryCall;
  fetchLinkedOrganizations(
    argument: _google_protobuf_Empty,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_FetchLinkedOrganizationsPayload__Output>
  ): grpc.ClientUnaryCall;
  fetchLinkedOrganizations(
    argument: _google_protobuf_Empty,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_FetchLinkedOrganizationsPayload__Output>
  ): grpc.ClientUnaryCall;

  FetchUser(
    argument: _suki_pb_nvoqauth_FetchUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_FetchUserPayload__Output>
  ): grpc.ClientUnaryCall;
  FetchUser(
    argument: _suki_pb_nvoqauth_FetchUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_FetchUserPayload__Output>
  ): grpc.ClientUnaryCall;
  FetchUser(
    argument: _suki_pb_nvoqauth_FetchUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_FetchUserPayload__Output>
  ): grpc.ClientUnaryCall;
  FetchUser(
    argument: _suki_pb_nvoqauth_FetchUserRequest,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_FetchUserPayload__Output>
  ): grpc.ClientUnaryCall;
  fetchUser(
    argument: _suki_pb_nvoqauth_FetchUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_FetchUserPayload__Output>
  ): grpc.ClientUnaryCall;
  fetchUser(
    argument: _suki_pb_nvoqauth_FetchUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_FetchUserPayload__Output>
  ): grpc.ClientUnaryCall;
  fetchUser(
    argument: _suki_pb_nvoqauth_FetchUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_FetchUserPayload__Output>
  ): grpc.ClientUnaryCall;
  fetchUser(
    argument: _suki_pb_nvoqauth_FetchUserRequest,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_FetchUserPayload__Output>
  ): grpc.ClientUnaryCall;

  ForceCreateAndLogin(
    argument: _suki_pb_nvoqauth_ForceCreateAndLoginRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  ForceCreateAndLogin(
    argument: _suki_pb_nvoqauth_ForceCreateAndLoginRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  ForceCreateAndLogin(
    argument: _suki_pb_nvoqauth_ForceCreateAndLoginRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  ForceCreateAndLogin(
    argument: _suki_pb_nvoqauth_ForceCreateAndLoginRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  forceCreateAndLogin(
    argument: _suki_pb_nvoqauth_ForceCreateAndLoginRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  forceCreateAndLogin(
    argument: _suki_pb_nvoqauth_ForceCreateAndLoginRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  forceCreateAndLogin(
    argument: _suki_pb_nvoqauth_ForceCreateAndLoginRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  forceCreateAndLogin(
    argument: _suki_pb_nvoqauth_ForceCreateAndLoginRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  GetAvailableTopics(
    argument: _google_protobuf_Empty,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_TopicsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetAvailableTopics(
    argument: _google_protobuf_Empty,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_TopicsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetAvailableTopics(
    argument: _google_protobuf_Empty,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_TopicsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetAvailableTopics(
    argument: _google_protobuf_Empty,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_TopicsResponse__Output>
  ): grpc.ClientUnaryCall;
  getAvailableTopics(
    argument: _google_protobuf_Empty,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_TopicsResponse__Output>
  ): grpc.ClientUnaryCall;
  getAvailableTopics(
    argument: _google_protobuf_Empty,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_TopicsResponse__Output>
  ): grpc.ClientUnaryCall;
  getAvailableTopics(
    argument: _google_protobuf_Empty,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_TopicsResponse__Output>
  ): grpc.ClientUnaryCall;
  getAvailableTopics(
    argument: _google_protobuf_Empty,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_TopicsResponse__Output>
  ): grpc.ClientUnaryCall;

  GetIsSafeToOnboard(
    argument: _suki_pb_nvoqauth_SafeToOnboardRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_SafeToOnboardPayload__Output>
  ): grpc.ClientUnaryCall;
  GetIsSafeToOnboard(
    argument: _suki_pb_nvoqauth_SafeToOnboardRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_SafeToOnboardPayload__Output>
  ): grpc.ClientUnaryCall;
  GetIsSafeToOnboard(
    argument: _suki_pb_nvoqauth_SafeToOnboardRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_SafeToOnboardPayload__Output>
  ): grpc.ClientUnaryCall;
  GetIsSafeToOnboard(
    argument: _suki_pb_nvoqauth_SafeToOnboardRequest,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_SafeToOnboardPayload__Output>
  ): grpc.ClientUnaryCall;
  getIsSafeToOnboard(
    argument: _suki_pb_nvoqauth_SafeToOnboardRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_SafeToOnboardPayload__Output>
  ): grpc.ClientUnaryCall;
  getIsSafeToOnboard(
    argument: _suki_pb_nvoqauth_SafeToOnboardRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_SafeToOnboardPayload__Output>
  ): grpc.ClientUnaryCall;
  getIsSafeToOnboard(
    argument: _suki_pb_nvoqauth_SafeToOnboardRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_SafeToOnboardPayload__Output>
  ): grpc.ClientUnaryCall;
  getIsSafeToOnboard(
    argument: _suki_pb_nvoqauth_SafeToOnboardRequest,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_SafeToOnboardPayload__Output>
  ): grpc.ClientUnaryCall;

  LinkSukiOrganizationToNVoq(
    argument: _suki_pb_nvoqauth_LinkSukiOrganizationToNVoqRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_LinkSukiOrganizationToNVoqPayload__Output>
  ): grpc.ClientUnaryCall;
  LinkSukiOrganizationToNVoq(
    argument: _suki_pb_nvoqauth_LinkSukiOrganizationToNVoqRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_LinkSukiOrganizationToNVoqPayload__Output>
  ): grpc.ClientUnaryCall;
  LinkSukiOrganizationToNVoq(
    argument: _suki_pb_nvoqauth_LinkSukiOrganizationToNVoqRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_LinkSukiOrganizationToNVoqPayload__Output>
  ): grpc.ClientUnaryCall;
  LinkSukiOrganizationToNVoq(
    argument: _suki_pb_nvoqauth_LinkSukiOrganizationToNVoqRequest,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_LinkSukiOrganizationToNVoqPayload__Output>
  ): grpc.ClientUnaryCall;
  linkSukiOrganizationToNVoq(
    argument: _suki_pb_nvoqauth_LinkSukiOrganizationToNVoqRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_LinkSukiOrganizationToNVoqPayload__Output>
  ): grpc.ClientUnaryCall;
  linkSukiOrganizationToNVoq(
    argument: _suki_pb_nvoqauth_LinkSukiOrganizationToNVoqRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_LinkSukiOrganizationToNVoqPayload__Output>
  ): grpc.ClientUnaryCall;
  linkSukiOrganizationToNVoq(
    argument: _suki_pb_nvoqauth_LinkSukiOrganizationToNVoqRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_LinkSukiOrganizationToNVoqPayload__Output>
  ): grpc.ClientUnaryCall;
  linkSukiOrganizationToNVoq(
    argument: _suki_pb_nvoqauth_LinkSukiOrganizationToNVoqRequest,
    callback: grpc.requestCallback<_suki_pb_nvoqauth_LinkSukiOrganizationToNVoqPayload__Output>
  ): grpc.ClientUnaryCall;
}

export interface MsNvoqAuthenticatorHandlers extends grpc.UntypedServiceImplementation {
  CreateAccount: grpc.handleUnaryCall<
    _suki_pb_nvoqauth_CreateAccountRequest__Output,
    _suki_pb_nvoqauth_CreateAccountPayload
  >;

  CreateOrUpdateUser: grpc.handleUnaryCall<
    _suki_pb_nvoqauth_CreateOrUpdateUserRequest__Output,
    _suki_pb_nvoqauth_CreateAccountPayload
  >;

  FetchAllNVoqOrganizations: grpc.handleUnaryCall<
    _google_protobuf_Empty__Output,
    _suki_pb_nvoqauth_FetchAllNVoqOrganizationsPayload
  >;

  FetchAndLoginUser: grpc.handleUnaryCall<
    _suki_pb_nvoqauth_FetchUserRequest__Output,
    _suki_pb_nvoqauth_FetchUserPayload
  >;

  FetchLinkedOrganizations: grpc.handleUnaryCall<
    _google_protobuf_Empty__Output,
    _suki_pb_nvoqauth_FetchLinkedOrganizationsPayload
  >;

  FetchUser: grpc.handleUnaryCall<_suki_pb_nvoqauth_FetchUserRequest__Output, _suki_pb_nvoqauth_FetchUserPayload>;

  ForceCreateAndLogin: grpc.handleUnaryCall<
    _suki_pb_nvoqauth_ForceCreateAndLoginRequest__Output,
    _google_protobuf_Empty
  >;

  GetAvailableTopics: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _suki_pb_nvoqauth_TopicsResponse>;

  GetIsSafeToOnboard: grpc.handleUnaryCall<
    _suki_pb_nvoqauth_SafeToOnboardRequest__Output,
    _suki_pb_nvoqauth_SafeToOnboardPayload
  >;

  LinkSukiOrganizationToNVoq: grpc.handleUnaryCall<
    _suki_pb_nvoqauth_LinkSukiOrganizationToNVoqRequest__Output,
    _suki_pb_nvoqauth_LinkSukiOrganizationToNVoqPayload
  >;
}

export interface MsNvoqAuthenticatorDefinition extends grpc.ServiceDefinition {
  CreateAccount: MethodDefinition<
    _suki_pb_nvoqauth_CreateAccountRequest,
    _suki_pb_nvoqauth_CreateAccountPayload,
    _suki_pb_nvoqauth_CreateAccountRequest__Output,
    _suki_pb_nvoqauth_CreateAccountPayload__Output
  >;
  CreateOrUpdateUser: MethodDefinition<
    _suki_pb_nvoqauth_CreateOrUpdateUserRequest,
    _suki_pb_nvoqauth_CreateAccountPayload,
    _suki_pb_nvoqauth_CreateOrUpdateUserRequest__Output,
    _suki_pb_nvoqauth_CreateAccountPayload__Output
  >;
  FetchAllNVoqOrganizations: MethodDefinition<
    _google_protobuf_Empty,
    _suki_pb_nvoqauth_FetchAllNVoqOrganizationsPayload,
    _google_protobuf_Empty__Output,
    _suki_pb_nvoqauth_FetchAllNVoqOrganizationsPayload__Output
  >;
  FetchAndLoginUser: MethodDefinition<
    _suki_pb_nvoqauth_FetchUserRequest,
    _suki_pb_nvoqauth_FetchUserPayload,
    _suki_pb_nvoqauth_FetchUserRequest__Output,
    _suki_pb_nvoqauth_FetchUserPayload__Output
  >;
  FetchLinkedOrganizations: MethodDefinition<
    _google_protobuf_Empty,
    _suki_pb_nvoqauth_FetchLinkedOrganizationsPayload,
    _google_protobuf_Empty__Output,
    _suki_pb_nvoqauth_FetchLinkedOrganizationsPayload__Output
  >;
  FetchUser: MethodDefinition<
    _suki_pb_nvoqauth_FetchUserRequest,
    _suki_pb_nvoqauth_FetchUserPayload,
    _suki_pb_nvoqauth_FetchUserRequest__Output,
    _suki_pb_nvoqauth_FetchUserPayload__Output
  >;
  ForceCreateAndLogin: MethodDefinition<
    _suki_pb_nvoqauth_ForceCreateAndLoginRequest,
    _google_protobuf_Empty,
    _suki_pb_nvoqauth_ForceCreateAndLoginRequest__Output,
    _google_protobuf_Empty__Output
  >;
  GetAvailableTopics: MethodDefinition<
    _google_protobuf_Empty,
    _suki_pb_nvoqauth_TopicsResponse,
    _google_protobuf_Empty__Output,
    _suki_pb_nvoqauth_TopicsResponse__Output
  >;
  GetIsSafeToOnboard: MethodDefinition<
    _suki_pb_nvoqauth_SafeToOnboardRequest,
    _suki_pb_nvoqauth_SafeToOnboardPayload,
    _suki_pb_nvoqauth_SafeToOnboardRequest__Output,
    _suki_pb_nvoqauth_SafeToOnboardPayload__Output
  >;
  LinkSukiOrganizationToNVoq: MethodDefinition<
    _suki_pb_nvoqauth_LinkSukiOrganizationToNVoqRequest,
    _suki_pb_nvoqauth_LinkSukiOrganizationToNVoqPayload,
    _suki_pb_nvoqauth_LinkSukiOrganizationToNVoqRequest__Output,
    _suki_pb_nvoqauth_LinkSukiOrganizationToNVoqPayload__Output
  >;
}
