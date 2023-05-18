// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  AddAnalyticsTransactionRequest as _suki_pb_ingester_AddAnalyticsTransactionRequest,
  AddAnalyticsTransactionRequest__Output as _suki_pb_ingester_AddAnalyticsTransactionRequest__Output
} from "../../../suki/pb/ingester/AddAnalyticsTransactionRequest";
import type {
  DeleteAPLocationRequest as _suki_pb_ingester_DeleteAPLocationRequest,
  DeleteAPLocationRequest__Output as _suki_pb_ingester_DeleteAPLocationRequest__Output
} from "../../../suki/pb/ingester/DeleteAPLocationRequest";
import type {
  DeleteContactRequest as _suki_pb_ingester_DeleteContactRequest,
  DeleteContactRequest__Output as _suki_pb_ingester_DeleteContactRequest__Output
} from "../../../suki/pb/ingester/DeleteContactRequest";
import type {
  DeleteFacilityRequest as _suki_pb_ingester_DeleteFacilityRequest,
  DeleteFacilityRequest__Output as _suki_pb_ingester_DeleteFacilityRequest__Output
} from "../../../suki/pb/ingester/DeleteFacilityRequest";
import type {
  DeleteGroupRequest as _suki_pb_ingester_DeleteGroupRequest,
  DeleteGroupRequest__Output as _suki_pb_ingester_DeleteGroupRequest__Output
} from "../../../suki/pb/ingester/DeleteGroupRequest";
import type {
  DeleteOutsideBuddyRequest as _suki_pb_ingester_DeleteOutsideBuddyRequest,
  DeleteOutsideBuddyRequest__Output as _suki_pb_ingester_DeleteOutsideBuddyRequest__Output
} from "../../../suki/pb/ingester/DeleteOutsideBuddyRequest";
import type {
  DeleteUserRequest as _suki_pb_ingester_DeleteUserRequest,
  DeleteUserRequest__Output as _suki_pb_ingester_DeleteUserRequest__Output
} from "../../../suki/pb/ingester/DeleteUserRequest";
import type {
  DeleteVoceraBuddyRequest as _suki_pb_ingester_DeleteVoceraBuddyRequest,
  DeleteVoceraBuddyRequest__Output as _suki_pb_ingester_DeleteVoceraBuddyRequest__Output
} from "../../../suki/pb/ingester/DeleteVoceraBuddyRequest";
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output
} from "../../../google/protobuf/Empty";
import type {
  GetAPLocationsRequest as _suki_pb_ingester_GetAPLocationsRequest,
  GetAPLocationsRequest__Output as _suki_pb_ingester_GetAPLocationsRequest__Output
} from "../../../suki/pb/ingester/GetAPLocationsRequest";
import type {
  GetAPLocationsResponse as _suki_pb_ingester_GetAPLocationsResponse,
  GetAPLocationsResponse__Output as _suki_pb_ingester_GetAPLocationsResponse__Output
} from "../../../suki/pb/ingester/GetAPLocationsResponse";
import type {
  GetAnalyticsTransactionsRequest as _suki_pb_ingester_GetAnalyticsTransactionsRequest,
  GetAnalyticsTransactionsRequest__Output as _suki_pb_ingester_GetAnalyticsTransactionsRequest__Output
} from "../../../suki/pb/ingester/GetAnalyticsTransactionsRequest";
import type {
  GetAnalyticsTransactionsResponse as _suki_pb_ingester_GetAnalyticsTransactionsResponse,
  GetAnalyticsTransactionsResponse__Output as _suki_pb_ingester_GetAnalyticsTransactionsResponse__Output
} from "../../../suki/pb/ingester/GetAnalyticsTransactionsResponse";
import type {
  GetContactsRequest as _suki_pb_ingester_GetContactsRequest,
  GetContactsRequest__Output as _suki_pb_ingester_GetContactsRequest__Output
} from "../../../suki/pb/ingester/GetContactsRequest";
import type {
  GetContactsResponse as _suki_pb_ingester_GetContactsResponse,
  GetContactsResponse__Output as _suki_pb_ingester_GetContactsResponse__Output
} from "../../../suki/pb/ingester/GetContactsResponse";
import type {
  GetFacilitiesRequest as _suki_pb_ingester_GetFacilitiesRequest,
  GetFacilitiesRequest__Output as _suki_pb_ingester_GetFacilitiesRequest__Output
} from "../../../suki/pb/ingester/GetFacilitiesRequest";
import type {
  GetFacilitiesResponse as _suki_pb_ingester_GetFacilitiesResponse,
  GetFacilitiesResponse__Output as _suki_pb_ingester_GetFacilitiesResponse__Output
} from "../../../suki/pb/ingester/GetFacilitiesResponse";
import type {
  GetGroupsRequest as _suki_pb_ingester_GetGroupsRequest,
  GetGroupsRequest__Output as _suki_pb_ingester_GetGroupsRequest__Output
} from "../../../suki/pb/ingester/GetGroupsRequest";
import type {
  GetGroupsResponse as _suki_pb_ingester_GetGroupsResponse,
  GetGroupsResponse__Output as _suki_pb_ingester_GetGroupsResponse__Output
} from "../../../suki/pb/ingester/GetGroupsResponse";
import type {
  GetOutsideBuddiesRequest as _suki_pb_ingester_GetOutsideBuddiesRequest,
  GetOutsideBuddiesRequest__Output as _suki_pb_ingester_GetOutsideBuddiesRequest__Output
} from "../../../suki/pb/ingester/GetOutsideBuddiesRequest";
import type {
  GetOutsideBuddiesResponse as _suki_pb_ingester_GetOutsideBuddiesResponse,
  GetOutsideBuddiesResponse__Output as _suki_pb_ingester_GetOutsideBuddiesResponse__Output
} from "../../../suki/pb/ingester/GetOutsideBuddiesResponse";
import type {
  GetProjectIdsResponse as _suki_pb_ingester_GetProjectIdsResponse,
  GetProjectIdsResponse__Output as _suki_pb_ingester_GetProjectIdsResponse__Output
} from "../../../suki/pb/ingester/GetProjectIdsResponse";
import type {
  GetUsersRequest as _suki_pb_ingester_GetUsersRequest,
  GetUsersRequest__Output as _suki_pb_ingester_GetUsersRequest__Output
} from "../../../suki/pb/ingester/GetUsersRequest";
import type {
  GetUsersResponse as _suki_pb_ingester_GetUsersResponse,
  GetUsersResponse__Output as _suki_pb_ingester_GetUsersResponse__Output
} from "../../../suki/pb/ingester/GetUsersResponse";
import type {
  GetVoceraBuddiesRequest as _suki_pb_ingester_GetVoceraBuddiesRequest,
  GetVoceraBuddiesRequest__Output as _suki_pb_ingester_GetVoceraBuddiesRequest__Output
} from "../../../suki/pb/ingester/GetVoceraBuddiesRequest";
import type {
  GetVoceraBuddiesResponse as _suki_pb_ingester_GetVoceraBuddiesResponse,
  GetVoceraBuddiesResponse__Output as _suki_pb_ingester_GetVoceraBuddiesResponse__Output
} from "../../../suki/pb/ingester/GetVoceraBuddiesResponse";
import type {
  UpsertAPLocationsRequest as _suki_pb_ingester_UpsertAPLocationsRequest,
  UpsertAPLocationsRequest__Output as _suki_pb_ingester_UpsertAPLocationsRequest__Output
} from "../../../suki/pb/ingester/UpsertAPLocationsRequest";
import type {
  UpsertAPLocationsResponse as _suki_pb_ingester_UpsertAPLocationsResponse,
  UpsertAPLocationsResponse__Output as _suki_pb_ingester_UpsertAPLocationsResponse__Output
} from "../../../suki/pb/ingester/UpsertAPLocationsResponse";
import type {
  UpsertContactsRequest as _suki_pb_ingester_UpsertContactsRequest,
  UpsertContactsRequest__Output as _suki_pb_ingester_UpsertContactsRequest__Output
} from "../../../suki/pb/ingester/UpsertContactsRequest";
import type {
  UpsertContactsResponse as _suki_pb_ingester_UpsertContactsResponse,
  UpsertContactsResponse__Output as _suki_pb_ingester_UpsertContactsResponse__Output
} from "../../../suki/pb/ingester/UpsertContactsResponse";
import type {
  UpsertFacilitiesRequest as _suki_pb_ingester_UpsertFacilitiesRequest,
  UpsertFacilitiesRequest__Output as _suki_pb_ingester_UpsertFacilitiesRequest__Output
} from "../../../suki/pb/ingester/UpsertFacilitiesRequest";
import type {
  UpsertFacilitiesResponse as _suki_pb_ingester_UpsertFacilitiesResponse,
  UpsertFacilitiesResponse__Output as _suki_pb_ingester_UpsertFacilitiesResponse__Output
} from "../../../suki/pb/ingester/UpsertFacilitiesResponse";
import type {
  UpsertGroupsRequest as _suki_pb_ingester_UpsertGroupsRequest,
  UpsertGroupsRequest__Output as _suki_pb_ingester_UpsertGroupsRequest__Output
} from "../../../suki/pb/ingester/UpsertGroupsRequest";
import type {
  UpsertGroupsResponse as _suki_pb_ingester_UpsertGroupsResponse,
  UpsertGroupsResponse__Output as _suki_pb_ingester_UpsertGroupsResponse__Output
} from "../../../suki/pb/ingester/UpsertGroupsResponse";
import type {
  UpsertIntentsRequest as _suki_pb_ingester_UpsertIntentsRequest,
  UpsertIntentsRequest__Output as _suki_pb_ingester_UpsertIntentsRequest__Output
} from "../../../suki/pb/ingester/UpsertIntentsRequest";
import type {
  UpsertIntentsResponse as _suki_pb_ingester_UpsertIntentsResponse,
  UpsertIntentsResponse__Output as _suki_pb_ingester_UpsertIntentsResponse__Output
} from "../../../suki/pb/ingester/UpsertIntentsResponse";
import type {
  UpsertOutsideBuddiesRequest as _suki_pb_ingester_UpsertOutsideBuddiesRequest,
  UpsertOutsideBuddiesRequest__Output as _suki_pb_ingester_UpsertOutsideBuddiesRequest__Output
} from "../../../suki/pb/ingester/UpsertOutsideBuddiesRequest";
import type {
  UpsertOutsideBuddiesResponse as _suki_pb_ingester_UpsertOutsideBuddiesResponse,
  UpsertOutsideBuddiesResponse__Output as _suki_pb_ingester_UpsertOutsideBuddiesResponse__Output
} from "../../../suki/pb/ingester/UpsertOutsideBuddiesResponse";
import type {
  UpsertSlotTypesRequest as _suki_pb_ingester_UpsertSlotTypesRequest,
  UpsertSlotTypesRequest__Output as _suki_pb_ingester_UpsertSlotTypesRequest__Output
} from "../../../suki/pb/ingester/UpsertSlotTypesRequest";
import type {
  UpsertSlotTypesResponse as _suki_pb_ingester_UpsertSlotTypesResponse,
  UpsertSlotTypesResponse__Output as _suki_pb_ingester_UpsertSlotTypesResponse__Output
} from "../../../suki/pb/ingester/UpsertSlotTypesResponse";
import type {
  UpsertSlotValueTypesRequest as _suki_pb_ingester_UpsertSlotValueTypesRequest,
  UpsertSlotValueTypesRequest__Output as _suki_pb_ingester_UpsertSlotValueTypesRequest__Output
} from "../../../suki/pb/ingester/UpsertSlotValueTypesRequest";
import type {
  UpsertSlotValueTypesResponse as _suki_pb_ingester_UpsertSlotValueTypesResponse,
  UpsertSlotValueTypesResponse__Output as _suki_pb_ingester_UpsertSlotValueTypesResponse__Output
} from "../../../suki/pb/ingester/UpsertSlotValueTypesResponse";
import type {
  UpsertUsersRequest as _suki_pb_ingester_UpsertUsersRequest,
  UpsertUsersRequest__Output as _suki_pb_ingester_UpsertUsersRequest__Output
} from "../../../suki/pb/ingester/UpsertUsersRequest";
import type {
  UpsertUsersResponse as _suki_pb_ingester_UpsertUsersResponse,
  UpsertUsersResponse__Output as _suki_pb_ingester_UpsertUsersResponse__Output
} from "../../../suki/pb/ingester/UpsertUsersResponse";
import type {
  UpsertVoceraBuddiesRequest as _suki_pb_ingester_UpsertVoceraBuddiesRequest,
  UpsertVoceraBuddiesRequest__Output as _suki_pb_ingester_UpsertVoceraBuddiesRequest__Output
} from "../../../suki/pb/ingester/UpsertVoceraBuddiesRequest";
import type {
  UpsertVoceraBuddiesResponse as _suki_pb_ingester_UpsertVoceraBuddiesResponse,
  UpsertVoceraBuddiesResponse__Output as _suki_pb_ingester_UpsertVoceraBuddiesResponse__Output
} from "../../../suki/pb/ingester/UpsertVoceraBuddiesResponse";

export interface IngesterServiceClient extends grpc.Client {
  AddAnalyticsTransaction(
    argument: _suki_pb_ingester_AddAnalyticsTransactionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  AddAnalyticsTransaction(
    argument: _suki_pb_ingester_AddAnalyticsTransactionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  AddAnalyticsTransaction(
    argument: _suki_pb_ingester_AddAnalyticsTransactionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  AddAnalyticsTransaction(
    argument: _suki_pb_ingester_AddAnalyticsTransactionRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  addAnalyticsTransaction(
    argument: _suki_pb_ingester_AddAnalyticsTransactionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  addAnalyticsTransaction(
    argument: _suki_pb_ingester_AddAnalyticsTransactionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  addAnalyticsTransaction(
    argument: _suki_pb_ingester_AddAnalyticsTransactionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  addAnalyticsTransaction(
    argument: _suki_pb_ingester_AddAnalyticsTransactionRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  DeleteAPLocation(
    argument: _suki_pb_ingester_DeleteAPLocationRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteAPLocation(
    argument: _suki_pb_ingester_DeleteAPLocationRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteAPLocation(
    argument: _suki_pb_ingester_DeleteAPLocationRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteAPLocation(
    argument: _suki_pb_ingester_DeleteAPLocationRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteApLocation(
    argument: _suki_pb_ingester_DeleteAPLocationRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteApLocation(
    argument: _suki_pb_ingester_DeleteAPLocationRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteApLocation(
    argument: _suki_pb_ingester_DeleteAPLocationRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteApLocation(
    argument: _suki_pb_ingester_DeleteAPLocationRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  DeleteContact(
    argument: _suki_pb_ingester_DeleteContactRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteContact(
    argument: _suki_pb_ingester_DeleteContactRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteContact(
    argument: _suki_pb_ingester_DeleteContactRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteContact(
    argument: _suki_pb_ingester_DeleteContactRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteContact(
    argument: _suki_pb_ingester_DeleteContactRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteContact(
    argument: _suki_pb_ingester_DeleteContactRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteContact(
    argument: _suki_pb_ingester_DeleteContactRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteContact(
    argument: _suki_pb_ingester_DeleteContactRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  DeleteFacility(
    argument: _suki_pb_ingester_DeleteFacilityRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteFacility(
    argument: _suki_pb_ingester_DeleteFacilityRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteFacility(
    argument: _suki_pb_ingester_DeleteFacilityRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteFacility(
    argument: _suki_pb_ingester_DeleteFacilityRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteFacility(
    argument: _suki_pb_ingester_DeleteFacilityRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteFacility(
    argument: _suki_pb_ingester_DeleteFacilityRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteFacility(
    argument: _suki_pb_ingester_DeleteFacilityRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteFacility(
    argument: _suki_pb_ingester_DeleteFacilityRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  DeleteGroup(
    argument: _suki_pb_ingester_DeleteGroupRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteGroup(
    argument: _suki_pb_ingester_DeleteGroupRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteGroup(
    argument: _suki_pb_ingester_DeleteGroupRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteGroup(
    argument: _suki_pb_ingester_DeleteGroupRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteGroup(
    argument: _suki_pb_ingester_DeleteGroupRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteGroup(
    argument: _suki_pb_ingester_DeleteGroupRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteGroup(
    argument: _suki_pb_ingester_DeleteGroupRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteGroup(
    argument: _suki_pb_ingester_DeleteGroupRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  DeleteOutsideBuddy(
    argument: _suki_pb_ingester_DeleteOutsideBuddyRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteOutsideBuddy(
    argument: _suki_pb_ingester_DeleteOutsideBuddyRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteOutsideBuddy(
    argument: _suki_pb_ingester_DeleteOutsideBuddyRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteOutsideBuddy(
    argument: _suki_pb_ingester_DeleteOutsideBuddyRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteOutsideBuddy(
    argument: _suki_pb_ingester_DeleteOutsideBuddyRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteOutsideBuddy(
    argument: _suki_pb_ingester_DeleteOutsideBuddyRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteOutsideBuddy(
    argument: _suki_pb_ingester_DeleteOutsideBuddyRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteOutsideBuddy(
    argument: _suki_pb_ingester_DeleteOutsideBuddyRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  DeleteUser(
    argument: _suki_pb_ingester_DeleteUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteUser(
    argument: _suki_pb_ingester_DeleteUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteUser(
    argument: _suki_pb_ingester_DeleteUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteUser(
    argument: _suki_pb_ingester_DeleteUserRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteUser(
    argument: _suki_pb_ingester_DeleteUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteUser(
    argument: _suki_pb_ingester_DeleteUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteUser(
    argument: _suki_pb_ingester_DeleteUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteUser(
    argument: _suki_pb_ingester_DeleteUserRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  DeleteVoceraBuddy(
    argument: _suki_pb_ingester_DeleteVoceraBuddyRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteVoceraBuddy(
    argument: _suki_pb_ingester_DeleteVoceraBuddyRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteVoceraBuddy(
    argument: _suki_pb_ingester_DeleteVoceraBuddyRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteVoceraBuddy(
    argument: _suki_pb_ingester_DeleteVoceraBuddyRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteVoceraBuddy(
    argument: _suki_pb_ingester_DeleteVoceraBuddyRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteVoceraBuddy(
    argument: _suki_pb_ingester_DeleteVoceraBuddyRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteVoceraBuddy(
    argument: _suki_pb_ingester_DeleteVoceraBuddyRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteVoceraBuddy(
    argument: _suki_pb_ingester_DeleteVoceraBuddyRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  GetAPLocations(
    argument: _suki_pb_ingester_GetAPLocationsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_GetAPLocationsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetAPLocations(
    argument: _suki_pb_ingester_GetAPLocationsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ingester_GetAPLocationsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetAPLocations(
    argument: _suki_pb_ingester_GetAPLocationsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_GetAPLocationsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetAPLocations(
    argument: _suki_pb_ingester_GetAPLocationsRequest,
    callback: grpc.requestCallback<_suki_pb_ingester_GetAPLocationsResponse__Output>
  ): grpc.ClientUnaryCall;
  getApLocations(
    argument: _suki_pb_ingester_GetAPLocationsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_GetAPLocationsResponse__Output>
  ): grpc.ClientUnaryCall;
  getApLocations(
    argument: _suki_pb_ingester_GetAPLocationsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ingester_GetAPLocationsResponse__Output>
  ): grpc.ClientUnaryCall;
  getApLocations(
    argument: _suki_pb_ingester_GetAPLocationsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_GetAPLocationsResponse__Output>
  ): grpc.ClientUnaryCall;
  getApLocations(
    argument: _suki_pb_ingester_GetAPLocationsRequest,
    callback: grpc.requestCallback<_suki_pb_ingester_GetAPLocationsResponse__Output>
  ): grpc.ClientUnaryCall;

  GetAnalyticsTransactions(
    argument: _suki_pb_ingester_GetAnalyticsTransactionsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_GetAnalyticsTransactionsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetAnalyticsTransactions(
    argument: _suki_pb_ingester_GetAnalyticsTransactionsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ingester_GetAnalyticsTransactionsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetAnalyticsTransactions(
    argument: _suki_pb_ingester_GetAnalyticsTransactionsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_GetAnalyticsTransactionsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetAnalyticsTransactions(
    argument: _suki_pb_ingester_GetAnalyticsTransactionsRequest,
    callback: grpc.requestCallback<_suki_pb_ingester_GetAnalyticsTransactionsResponse__Output>
  ): grpc.ClientUnaryCall;
  getAnalyticsTransactions(
    argument: _suki_pb_ingester_GetAnalyticsTransactionsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_GetAnalyticsTransactionsResponse__Output>
  ): grpc.ClientUnaryCall;
  getAnalyticsTransactions(
    argument: _suki_pb_ingester_GetAnalyticsTransactionsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ingester_GetAnalyticsTransactionsResponse__Output>
  ): grpc.ClientUnaryCall;
  getAnalyticsTransactions(
    argument: _suki_pb_ingester_GetAnalyticsTransactionsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_GetAnalyticsTransactionsResponse__Output>
  ): grpc.ClientUnaryCall;
  getAnalyticsTransactions(
    argument: _suki_pb_ingester_GetAnalyticsTransactionsRequest,
    callback: grpc.requestCallback<_suki_pb_ingester_GetAnalyticsTransactionsResponse__Output>
  ): grpc.ClientUnaryCall;

  GetContacts(
    argument: _suki_pb_ingester_GetContactsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_GetContactsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetContacts(
    argument: _suki_pb_ingester_GetContactsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ingester_GetContactsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetContacts(
    argument: _suki_pb_ingester_GetContactsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_GetContactsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetContacts(
    argument: _suki_pb_ingester_GetContactsRequest,
    callback: grpc.requestCallback<_suki_pb_ingester_GetContactsResponse__Output>
  ): grpc.ClientUnaryCall;
  getContacts(
    argument: _suki_pb_ingester_GetContactsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_GetContactsResponse__Output>
  ): grpc.ClientUnaryCall;
  getContacts(
    argument: _suki_pb_ingester_GetContactsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ingester_GetContactsResponse__Output>
  ): grpc.ClientUnaryCall;
  getContacts(
    argument: _suki_pb_ingester_GetContactsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_GetContactsResponse__Output>
  ): grpc.ClientUnaryCall;
  getContacts(
    argument: _suki_pb_ingester_GetContactsRequest,
    callback: grpc.requestCallback<_suki_pb_ingester_GetContactsResponse__Output>
  ): grpc.ClientUnaryCall;

  GetFacilities(
    argument: _suki_pb_ingester_GetFacilitiesRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_GetFacilitiesResponse__Output>
  ): grpc.ClientUnaryCall;
  GetFacilities(
    argument: _suki_pb_ingester_GetFacilitiesRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ingester_GetFacilitiesResponse__Output>
  ): grpc.ClientUnaryCall;
  GetFacilities(
    argument: _suki_pb_ingester_GetFacilitiesRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_GetFacilitiesResponse__Output>
  ): grpc.ClientUnaryCall;
  GetFacilities(
    argument: _suki_pb_ingester_GetFacilitiesRequest,
    callback: grpc.requestCallback<_suki_pb_ingester_GetFacilitiesResponse__Output>
  ): grpc.ClientUnaryCall;
  getFacilities(
    argument: _suki_pb_ingester_GetFacilitiesRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_GetFacilitiesResponse__Output>
  ): grpc.ClientUnaryCall;
  getFacilities(
    argument: _suki_pb_ingester_GetFacilitiesRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ingester_GetFacilitiesResponse__Output>
  ): grpc.ClientUnaryCall;
  getFacilities(
    argument: _suki_pb_ingester_GetFacilitiesRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_GetFacilitiesResponse__Output>
  ): grpc.ClientUnaryCall;
  getFacilities(
    argument: _suki_pb_ingester_GetFacilitiesRequest,
    callback: grpc.requestCallback<_suki_pb_ingester_GetFacilitiesResponse__Output>
  ): grpc.ClientUnaryCall;

  GetGroups(
    argument: _suki_pb_ingester_GetGroupsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_GetGroupsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetGroups(
    argument: _suki_pb_ingester_GetGroupsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ingester_GetGroupsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetGroups(
    argument: _suki_pb_ingester_GetGroupsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_GetGroupsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetGroups(
    argument: _suki_pb_ingester_GetGroupsRequest,
    callback: grpc.requestCallback<_suki_pb_ingester_GetGroupsResponse__Output>
  ): grpc.ClientUnaryCall;
  getGroups(
    argument: _suki_pb_ingester_GetGroupsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_GetGroupsResponse__Output>
  ): grpc.ClientUnaryCall;
  getGroups(
    argument: _suki_pb_ingester_GetGroupsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ingester_GetGroupsResponse__Output>
  ): grpc.ClientUnaryCall;
  getGroups(
    argument: _suki_pb_ingester_GetGroupsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_GetGroupsResponse__Output>
  ): grpc.ClientUnaryCall;
  getGroups(
    argument: _suki_pb_ingester_GetGroupsRequest,
    callback: grpc.requestCallback<_suki_pb_ingester_GetGroupsResponse__Output>
  ): grpc.ClientUnaryCall;

  GetOutsideBuddies(
    argument: _suki_pb_ingester_GetOutsideBuddiesRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_GetOutsideBuddiesResponse__Output>
  ): grpc.ClientUnaryCall;
  GetOutsideBuddies(
    argument: _suki_pb_ingester_GetOutsideBuddiesRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ingester_GetOutsideBuddiesResponse__Output>
  ): grpc.ClientUnaryCall;
  GetOutsideBuddies(
    argument: _suki_pb_ingester_GetOutsideBuddiesRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_GetOutsideBuddiesResponse__Output>
  ): grpc.ClientUnaryCall;
  GetOutsideBuddies(
    argument: _suki_pb_ingester_GetOutsideBuddiesRequest,
    callback: grpc.requestCallback<_suki_pb_ingester_GetOutsideBuddiesResponse__Output>
  ): grpc.ClientUnaryCall;
  getOutsideBuddies(
    argument: _suki_pb_ingester_GetOutsideBuddiesRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_GetOutsideBuddiesResponse__Output>
  ): grpc.ClientUnaryCall;
  getOutsideBuddies(
    argument: _suki_pb_ingester_GetOutsideBuddiesRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ingester_GetOutsideBuddiesResponse__Output>
  ): grpc.ClientUnaryCall;
  getOutsideBuddies(
    argument: _suki_pb_ingester_GetOutsideBuddiesRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_GetOutsideBuddiesResponse__Output>
  ): grpc.ClientUnaryCall;
  getOutsideBuddies(
    argument: _suki_pb_ingester_GetOutsideBuddiesRequest,
    callback: grpc.requestCallback<_suki_pb_ingester_GetOutsideBuddiesResponse__Output>
  ): grpc.ClientUnaryCall;

  GetProjectIds(
    argument: _google_protobuf_Empty,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_GetProjectIdsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetProjectIds(
    argument: _google_protobuf_Empty,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ingester_GetProjectIdsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetProjectIds(
    argument: _google_protobuf_Empty,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_GetProjectIdsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetProjectIds(
    argument: _google_protobuf_Empty,
    callback: grpc.requestCallback<_suki_pb_ingester_GetProjectIdsResponse__Output>
  ): grpc.ClientUnaryCall;
  getProjectIds(
    argument: _google_protobuf_Empty,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_GetProjectIdsResponse__Output>
  ): grpc.ClientUnaryCall;
  getProjectIds(
    argument: _google_protobuf_Empty,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ingester_GetProjectIdsResponse__Output>
  ): grpc.ClientUnaryCall;
  getProjectIds(
    argument: _google_protobuf_Empty,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_GetProjectIdsResponse__Output>
  ): grpc.ClientUnaryCall;
  getProjectIds(
    argument: _google_protobuf_Empty,
    callback: grpc.requestCallback<_suki_pb_ingester_GetProjectIdsResponse__Output>
  ): grpc.ClientUnaryCall;

  GetUsers(
    argument: _suki_pb_ingester_GetUsersRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_GetUsersResponse__Output>
  ): grpc.ClientUnaryCall;
  GetUsers(
    argument: _suki_pb_ingester_GetUsersRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ingester_GetUsersResponse__Output>
  ): grpc.ClientUnaryCall;
  GetUsers(
    argument: _suki_pb_ingester_GetUsersRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_GetUsersResponse__Output>
  ): grpc.ClientUnaryCall;
  GetUsers(
    argument: _suki_pb_ingester_GetUsersRequest,
    callback: grpc.requestCallback<_suki_pb_ingester_GetUsersResponse__Output>
  ): grpc.ClientUnaryCall;
  getUsers(
    argument: _suki_pb_ingester_GetUsersRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_GetUsersResponse__Output>
  ): grpc.ClientUnaryCall;
  getUsers(
    argument: _suki_pb_ingester_GetUsersRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ingester_GetUsersResponse__Output>
  ): grpc.ClientUnaryCall;
  getUsers(
    argument: _suki_pb_ingester_GetUsersRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_GetUsersResponse__Output>
  ): grpc.ClientUnaryCall;
  getUsers(
    argument: _suki_pb_ingester_GetUsersRequest,
    callback: grpc.requestCallback<_suki_pb_ingester_GetUsersResponse__Output>
  ): grpc.ClientUnaryCall;

  GetVoceraBuddies(
    argument: _suki_pb_ingester_GetVoceraBuddiesRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_GetVoceraBuddiesResponse__Output>
  ): grpc.ClientUnaryCall;
  GetVoceraBuddies(
    argument: _suki_pb_ingester_GetVoceraBuddiesRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ingester_GetVoceraBuddiesResponse__Output>
  ): grpc.ClientUnaryCall;
  GetVoceraBuddies(
    argument: _suki_pb_ingester_GetVoceraBuddiesRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_GetVoceraBuddiesResponse__Output>
  ): grpc.ClientUnaryCall;
  GetVoceraBuddies(
    argument: _suki_pb_ingester_GetVoceraBuddiesRequest,
    callback: grpc.requestCallback<_suki_pb_ingester_GetVoceraBuddiesResponse__Output>
  ): grpc.ClientUnaryCall;
  getVoceraBuddies(
    argument: _suki_pb_ingester_GetVoceraBuddiesRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_GetVoceraBuddiesResponse__Output>
  ): grpc.ClientUnaryCall;
  getVoceraBuddies(
    argument: _suki_pb_ingester_GetVoceraBuddiesRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ingester_GetVoceraBuddiesResponse__Output>
  ): grpc.ClientUnaryCall;
  getVoceraBuddies(
    argument: _suki_pb_ingester_GetVoceraBuddiesRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_GetVoceraBuddiesResponse__Output>
  ): grpc.ClientUnaryCall;
  getVoceraBuddies(
    argument: _suki_pb_ingester_GetVoceraBuddiesRequest,
    callback: grpc.requestCallback<_suki_pb_ingester_GetVoceraBuddiesResponse__Output>
  ): grpc.ClientUnaryCall;

  UpsertAPLocations(
    argument: _suki_pb_ingester_UpsertAPLocationsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertAPLocationsResponse__Output>
  ): grpc.ClientUnaryCall;
  UpsertAPLocations(
    argument: _suki_pb_ingester_UpsertAPLocationsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertAPLocationsResponse__Output>
  ): grpc.ClientUnaryCall;
  UpsertAPLocations(
    argument: _suki_pb_ingester_UpsertAPLocationsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertAPLocationsResponse__Output>
  ): grpc.ClientUnaryCall;
  UpsertAPLocations(
    argument: _suki_pb_ingester_UpsertAPLocationsRequest,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertAPLocationsResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertApLocations(
    argument: _suki_pb_ingester_UpsertAPLocationsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertAPLocationsResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertApLocations(
    argument: _suki_pb_ingester_UpsertAPLocationsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertAPLocationsResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertApLocations(
    argument: _suki_pb_ingester_UpsertAPLocationsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertAPLocationsResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertApLocations(
    argument: _suki_pb_ingester_UpsertAPLocationsRequest,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertAPLocationsResponse__Output>
  ): grpc.ClientUnaryCall;

  UpsertContacts(
    argument: _suki_pb_ingester_UpsertContactsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertContactsResponse__Output>
  ): grpc.ClientUnaryCall;
  UpsertContacts(
    argument: _suki_pb_ingester_UpsertContactsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertContactsResponse__Output>
  ): grpc.ClientUnaryCall;
  UpsertContacts(
    argument: _suki_pb_ingester_UpsertContactsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertContactsResponse__Output>
  ): grpc.ClientUnaryCall;
  UpsertContacts(
    argument: _suki_pb_ingester_UpsertContactsRequest,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertContactsResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertContacts(
    argument: _suki_pb_ingester_UpsertContactsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertContactsResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertContacts(
    argument: _suki_pb_ingester_UpsertContactsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertContactsResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertContacts(
    argument: _suki_pb_ingester_UpsertContactsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertContactsResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertContacts(
    argument: _suki_pb_ingester_UpsertContactsRequest,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertContactsResponse__Output>
  ): grpc.ClientUnaryCall;

  UpsertFacilities(
    argument: _suki_pb_ingester_UpsertFacilitiesRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertFacilitiesResponse__Output>
  ): grpc.ClientUnaryCall;
  UpsertFacilities(
    argument: _suki_pb_ingester_UpsertFacilitiesRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertFacilitiesResponse__Output>
  ): grpc.ClientUnaryCall;
  UpsertFacilities(
    argument: _suki_pb_ingester_UpsertFacilitiesRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertFacilitiesResponse__Output>
  ): grpc.ClientUnaryCall;
  UpsertFacilities(
    argument: _suki_pb_ingester_UpsertFacilitiesRequest,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertFacilitiesResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertFacilities(
    argument: _suki_pb_ingester_UpsertFacilitiesRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertFacilitiesResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertFacilities(
    argument: _suki_pb_ingester_UpsertFacilitiesRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertFacilitiesResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertFacilities(
    argument: _suki_pb_ingester_UpsertFacilitiesRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertFacilitiesResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertFacilities(
    argument: _suki_pb_ingester_UpsertFacilitiesRequest,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertFacilitiesResponse__Output>
  ): grpc.ClientUnaryCall;

  UpsertGroups(
    argument: _suki_pb_ingester_UpsertGroupsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertGroupsResponse__Output>
  ): grpc.ClientUnaryCall;
  UpsertGroups(
    argument: _suki_pb_ingester_UpsertGroupsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertGroupsResponse__Output>
  ): grpc.ClientUnaryCall;
  UpsertGroups(
    argument: _suki_pb_ingester_UpsertGroupsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertGroupsResponse__Output>
  ): grpc.ClientUnaryCall;
  UpsertGroups(
    argument: _suki_pb_ingester_UpsertGroupsRequest,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertGroupsResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertGroups(
    argument: _suki_pb_ingester_UpsertGroupsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertGroupsResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertGroups(
    argument: _suki_pb_ingester_UpsertGroupsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertGroupsResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertGroups(
    argument: _suki_pb_ingester_UpsertGroupsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertGroupsResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertGroups(
    argument: _suki_pb_ingester_UpsertGroupsRequest,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertGroupsResponse__Output>
  ): grpc.ClientUnaryCall;

  UpsertIntents(
    argument: _suki_pb_ingester_UpsertIntentsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertIntentsResponse__Output>
  ): grpc.ClientUnaryCall;
  UpsertIntents(
    argument: _suki_pb_ingester_UpsertIntentsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertIntentsResponse__Output>
  ): grpc.ClientUnaryCall;
  UpsertIntents(
    argument: _suki_pb_ingester_UpsertIntentsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertIntentsResponse__Output>
  ): grpc.ClientUnaryCall;
  UpsertIntents(
    argument: _suki_pb_ingester_UpsertIntentsRequest,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertIntentsResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertIntents(
    argument: _suki_pb_ingester_UpsertIntentsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertIntentsResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertIntents(
    argument: _suki_pb_ingester_UpsertIntentsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertIntentsResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertIntents(
    argument: _suki_pb_ingester_UpsertIntentsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertIntentsResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertIntents(
    argument: _suki_pb_ingester_UpsertIntentsRequest,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertIntentsResponse__Output>
  ): grpc.ClientUnaryCall;

  UpsertOutsideBuddies(
    argument: _suki_pb_ingester_UpsertOutsideBuddiesRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertOutsideBuddiesResponse__Output>
  ): grpc.ClientUnaryCall;
  UpsertOutsideBuddies(
    argument: _suki_pb_ingester_UpsertOutsideBuddiesRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertOutsideBuddiesResponse__Output>
  ): grpc.ClientUnaryCall;
  UpsertOutsideBuddies(
    argument: _suki_pb_ingester_UpsertOutsideBuddiesRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertOutsideBuddiesResponse__Output>
  ): grpc.ClientUnaryCall;
  UpsertOutsideBuddies(
    argument: _suki_pb_ingester_UpsertOutsideBuddiesRequest,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertOutsideBuddiesResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertOutsideBuddies(
    argument: _suki_pb_ingester_UpsertOutsideBuddiesRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertOutsideBuddiesResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertOutsideBuddies(
    argument: _suki_pb_ingester_UpsertOutsideBuddiesRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertOutsideBuddiesResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertOutsideBuddies(
    argument: _suki_pb_ingester_UpsertOutsideBuddiesRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertOutsideBuddiesResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertOutsideBuddies(
    argument: _suki_pb_ingester_UpsertOutsideBuddiesRequest,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertOutsideBuddiesResponse__Output>
  ): grpc.ClientUnaryCall;

  UpsertSlotTypes(
    argument: _suki_pb_ingester_UpsertSlotTypesRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertSlotTypesResponse__Output>
  ): grpc.ClientUnaryCall;
  UpsertSlotTypes(
    argument: _suki_pb_ingester_UpsertSlotTypesRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertSlotTypesResponse__Output>
  ): grpc.ClientUnaryCall;
  UpsertSlotTypes(
    argument: _suki_pb_ingester_UpsertSlotTypesRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertSlotTypesResponse__Output>
  ): grpc.ClientUnaryCall;
  UpsertSlotTypes(
    argument: _suki_pb_ingester_UpsertSlotTypesRequest,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertSlotTypesResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertSlotTypes(
    argument: _suki_pb_ingester_UpsertSlotTypesRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertSlotTypesResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertSlotTypes(
    argument: _suki_pb_ingester_UpsertSlotTypesRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertSlotTypesResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertSlotTypes(
    argument: _suki_pb_ingester_UpsertSlotTypesRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertSlotTypesResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertSlotTypes(
    argument: _suki_pb_ingester_UpsertSlotTypesRequest,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertSlotTypesResponse__Output>
  ): grpc.ClientUnaryCall;

  UpsertSlotValueTypes(
    argument: _suki_pb_ingester_UpsertSlotValueTypesRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertSlotValueTypesResponse__Output>
  ): grpc.ClientUnaryCall;
  UpsertSlotValueTypes(
    argument: _suki_pb_ingester_UpsertSlotValueTypesRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertSlotValueTypesResponse__Output>
  ): grpc.ClientUnaryCall;
  UpsertSlotValueTypes(
    argument: _suki_pb_ingester_UpsertSlotValueTypesRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertSlotValueTypesResponse__Output>
  ): grpc.ClientUnaryCall;
  UpsertSlotValueTypes(
    argument: _suki_pb_ingester_UpsertSlotValueTypesRequest,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertSlotValueTypesResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertSlotValueTypes(
    argument: _suki_pb_ingester_UpsertSlotValueTypesRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertSlotValueTypesResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertSlotValueTypes(
    argument: _suki_pb_ingester_UpsertSlotValueTypesRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertSlotValueTypesResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertSlotValueTypes(
    argument: _suki_pb_ingester_UpsertSlotValueTypesRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertSlotValueTypesResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertSlotValueTypes(
    argument: _suki_pb_ingester_UpsertSlotValueTypesRequest,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertSlotValueTypesResponse__Output>
  ): grpc.ClientUnaryCall;

  UpsertUsers(
    argument: _suki_pb_ingester_UpsertUsersRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertUsersResponse__Output>
  ): grpc.ClientUnaryCall;
  UpsertUsers(
    argument: _suki_pb_ingester_UpsertUsersRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertUsersResponse__Output>
  ): grpc.ClientUnaryCall;
  UpsertUsers(
    argument: _suki_pb_ingester_UpsertUsersRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertUsersResponse__Output>
  ): grpc.ClientUnaryCall;
  UpsertUsers(
    argument: _suki_pb_ingester_UpsertUsersRequest,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertUsersResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertUsers(
    argument: _suki_pb_ingester_UpsertUsersRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertUsersResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertUsers(
    argument: _suki_pb_ingester_UpsertUsersRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertUsersResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertUsers(
    argument: _suki_pb_ingester_UpsertUsersRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertUsersResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertUsers(
    argument: _suki_pb_ingester_UpsertUsersRequest,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertUsersResponse__Output>
  ): grpc.ClientUnaryCall;

  UpsertVoceraBuddies(
    argument: _suki_pb_ingester_UpsertVoceraBuddiesRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertVoceraBuddiesResponse__Output>
  ): grpc.ClientUnaryCall;
  UpsertVoceraBuddies(
    argument: _suki_pb_ingester_UpsertVoceraBuddiesRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertVoceraBuddiesResponse__Output>
  ): grpc.ClientUnaryCall;
  UpsertVoceraBuddies(
    argument: _suki_pb_ingester_UpsertVoceraBuddiesRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertVoceraBuddiesResponse__Output>
  ): grpc.ClientUnaryCall;
  UpsertVoceraBuddies(
    argument: _suki_pb_ingester_UpsertVoceraBuddiesRequest,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertVoceraBuddiesResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertVoceraBuddies(
    argument: _suki_pb_ingester_UpsertVoceraBuddiesRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertVoceraBuddiesResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertVoceraBuddies(
    argument: _suki_pb_ingester_UpsertVoceraBuddiesRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertVoceraBuddiesResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertVoceraBuddies(
    argument: _suki_pb_ingester_UpsertVoceraBuddiesRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertVoceraBuddiesResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertVoceraBuddies(
    argument: _suki_pb_ingester_UpsertVoceraBuddiesRequest,
    callback: grpc.requestCallback<_suki_pb_ingester_UpsertVoceraBuddiesResponse__Output>
  ): grpc.ClientUnaryCall;
}

export interface IngesterServiceHandlers extends grpc.UntypedServiceImplementation {
  AddAnalyticsTransaction: grpc.handleUnaryCall<
    _suki_pb_ingester_AddAnalyticsTransactionRequest__Output,
    _google_protobuf_Empty
  >;

  DeleteAPLocation: grpc.handleUnaryCall<_suki_pb_ingester_DeleteAPLocationRequest__Output, _google_protobuf_Empty>;

  DeleteContact: grpc.handleUnaryCall<_suki_pb_ingester_DeleteContactRequest__Output, _google_protobuf_Empty>;

  DeleteFacility: grpc.handleUnaryCall<_suki_pb_ingester_DeleteFacilityRequest__Output, _google_protobuf_Empty>;

  DeleteGroup: grpc.handleUnaryCall<_suki_pb_ingester_DeleteGroupRequest__Output, _google_protobuf_Empty>;

  DeleteOutsideBuddy: grpc.handleUnaryCall<_suki_pb_ingester_DeleteOutsideBuddyRequest__Output, _google_protobuf_Empty>;

  DeleteUser: grpc.handleUnaryCall<_suki_pb_ingester_DeleteUserRequest__Output, _google_protobuf_Empty>;

  DeleteVoceraBuddy: grpc.handleUnaryCall<_suki_pb_ingester_DeleteVoceraBuddyRequest__Output, _google_protobuf_Empty>;

  GetAPLocations: grpc.handleUnaryCall<
    _suki_pb_ingester_GetAPLocationsRequest__Output,
    _suki_pb_ingester_GetAPLocationsResponse
  >;

  GetAnalyticsTransactions: grpc.handleUnaryCall<
    _suki_pb_ingester_GetAnalyticsTransactionsRequest__Output,
    _suki_pb_ingester_GetAnalyticsTransactionsResponse
  >;

  GetContacts: grpc.handleUnaryCall<
    _suki_pb_ingester_GetContactsRequest__Output,
    _suki_pb_ingester_GetContactsResponse
  >;

  GetFacilities: grpc.handleUnaryCall<
    _suki_pb_ingester_GetFacilitiesRequest__Output,
    _suki_pb_ingester_GetFacilitiesResponse
  >;

  GetGroups: grpc.handleUnaryCall<_suki_pb_ingester_GetGroupsRequest__Output, _suki_pb_ingester_GetGroupsResponse>;

  GetOutsideBuddies: grpc.handleUnaryCall<
    _suki_pb_ingester_GetOutsideBuddiesRequest__Output,
    _suki_pb_ingester_GetOutsideBuddiesResponse
  >;

  GetProjectIds: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _suki_pb_ingester_GetProjectIdsResponse>;

  GetUsers: grpc.handleUnaryCall<_suki_pb_ingester_GetUsersRequest__Output, _suki_pb_ingester_GetUsersResponse>;

  GetVoceraBuddies: grpc.handleUnaryCall<
    _suki_pb_ingester_GetVoceraBuddiesRequest__Output,
    _suki_pb_ingester_GetVoceraBuddiesResponse
  >;

  UpsertAPLocations: grpc.handleUnaryCall<
    _suki_pb_ingester_UpsertAPLocationsRequest__Output,
    _suki_pb_ingester_UpsertAPLocationsResponse
  >;

  UpsertContacts: grpc.handleUnaryCall<
    _suki_pb_ingester_UpsertContactsRequest__Output,
    _suki_pb_ingester_UpsertContactsResponse
  >;

  UpsertFacilities: grpc.handleUnaryCall<
    _suki_pb_ingester_UpsertFacilitiesRequest__Output,
    _suki_pb_ingester_UpsertFacilitiesResponse
  >;

  UpsertGroups: grpc.handleUnaryCall<
    _suki_pb_ingester_UpsertGroupsRequest__Output,
    _suki_pb_ingester_UpsertGroupsResponse
  >;

  UpsertIntents: grpc.handleUnaryCall<
    _suki_pb_ingester_UpsertIntentsRequest__Output,
    _suki_pb_ingester_UpsertIntentsResponse
  >;

  UpsertOutsideBuddies: grpc.handleUnaryCall<
    _suki_pb_ingester_UpsertOutsideBuddiesRequest__Output,
    _suki_pb_ingester_UpsertOutsideBuddiesResponse
  >;

  UpsertSlotTypes: grpc.handleUnaryCall<
    _suki_pb_ingester_UpsertSlotTypesRequest__Output,
    _suki_pb_ingester_UpsertSlotTypesResponse
  >;

  UpsertSlotValueTypes: grpc.handleUnaryCall<
    _suki_pb_ingester_UpsertSlotValueTypesRequest__Output,
    _suki_pb_ingester_UpsertSlotValueTypesResponse
  >;

  UpsertUsers: grpc.handleUnaryCall<
    _suki_pb_ingester_UpsertUsersRequest__Output,
    _suki_pb_ingester_UpsertUsersResponse
  >;

  UpsertVoceraBuddies: grpc.handleUnaryCall<
    _suki_pb_ingester_UpsertVoceraBuddiesRequest__Output,
    _suki_pb_ingester_UpsertVoceraBuddiesResponse
  >;
}

export interface IngesterServiceDefinition extends grpc.ServiceDefinition {
  AddAnalyticsTransaction: MethodDefinition<
    _suki_pb_ingester_AddAnalyticsTransactionRequest,
    _google_protobuf_Empty,
    _suki_pb_ingester_AddAnalyticsTransactionRequest__Output,
    _google_protobuf_Empty__Output
  >;
  DeleteAPLocation: MethodDefinition<
    _suki_pb_ingester_DeleteAPLocationRequest,
    _google_protobuf_Empty,
    _suki_pb_ingester_DeleteAPLocationRequest__Output,
    _google_protobuf_Empty__Output
  >;
  DeleteContact: MethodDefinition<
    _suki_pb_ingester_DeleteContactRequest,
    _google_protobuf_Empty,
    _suki_pb_ingester_DeleteContactRequest__Output,
    _google_protobuf_Empty__Output
  >;
  DeleteFacility: MethodDefinition<
    _suki_pb_ingester_DeleteFacilityRequest,
    _google_protobuf_Empty,
    _suki_pb_ingester_DeleteFacilityRequest__Output,
    _google_protobuf_Empty__Output
  >;
  DeleteGroup: MethodDefinition<
    _suki_pb_ingester_DeleteGroupRequest,
    _google_protobuf_Empty,
    _suki_pb_ingester_DeleteGroupRequest__Output,
    _google_protobuf_Empty__Output
  >;
  DeleteOutsideBuddy: MethodDefinition<
    _suki_pb_ingester_DeleteOutsideBuddyRequest,
    _google_protobuf_Empty,
    _suki_pb_ingester_DeleteOutsideBuddyRequest__Output,
    _google_protobuf_Empty__Output
  >;
  DeleteUser: MethodDefinition<
    _suki_pb_ingester_DeleteUserRequest,
    _google_protobuf_Empty,
    _suki_pb_ingester_DeleteUserRequest__Output,
    _google_protobuf_Empty__Output
  >;
  DeleteVoceraBuddy: MethodDefinition<
    _suki_pb_ingester_DeleteVoceraBuddyRequest,
    _google_protobuf_Empty,
    _suki_pb_ingester_DeleteVoceraBuddyRequest__Output,
    _google_protobuf_Empty__Output
  >;
  GetAPLocations: MethodDefinition<
    _suki_pb_ingester_GetAPLocationsRequest,
    _suki_pb_ingester_GetAPLocationsResponse,
    _suki_pb_ingester_GetAPLocationsRequest__Output,
    _suki_pb_ingester_GetAPLocationsResponse__Output
  >;
  GetAnalyticsTransactions: MethodDefinition<
    _suki_pb_ingester_GetAnalyticsTransactionsRequest,
    _suki_pb_ingester_GetAnalyticsTransactionsResponse,
    _suki_pb_ingester_GetAnalyticsTransactionsRequest__Output,
    _suki_pb_ingester_GetAnalyticsTransactionsResponse__Output
  >;
  GetContacts: MethodDefinition<
    _suki_pb_ingester_GetContactsRequest,
    _suki_pb_ingester_GetContactsResponse,
    _suki_pb_ingester_GetContactsRequest__Output,
    _suki_pb_ingester_GetContactsResponse__Output
  >;
  GetFacilities: MethodDefinition<
    _suki_pb_ingester_GetFacilitiesRequest,
    _suki_pb_ingester_GetFacilitiesResponse,
    _suki_pb_ingester_GetFacilitiesRequest__Output,
    _suki_pb_ingester_GetFacilitiesResponse__Output
  >;
  GetGroups: MethodDefinition<
    _suki_pb_ingester_GetGroupsRequest,
    _suki_pb_ingester_GetGroupsResponse,
    _suki_pb_ingester_GetGroupsRequest__Output,
    _suki_pb_ingester_GetGroupsResponse__Output
  >;
  GetOutsideBuddies: MethodDefinition<
    _suki_pb_ingester_GetOutsideBuddiesRequest,
    _suki_pb_ingester_GetOutsideBuddiesResponse,
    _suki_pb_ingester_GetOutsideBuddiesRequest__Output,
    _suki_pb_ingester_GetOutsideBuddiesResponse__Output
  >;
  GetProjectIds: MethodDefinition<
    _google_protobuf_Empty,
    _suki_pb_ingester_GetProjectIdsResponse,
    _google_protobuf_Empty__Output,
    _suki_pb_ingester_GetProjectIdsResponse__Output
  >;
  GetUsers: MethodDefinition<
    _suki_pb_ingester_GetUsersRequest,
    _suki_pb_ingester_GetUsersResponse,
    _suki_pb_ingester_GetUsersRequest__Output,
    _suki_pb_ingester_GetUsersResponse__Output
  >;
  GetVoceraBuddies: MethodDefinition<
    _suki_pb_ingester_GetVoceraBuddiesRequest,
    _suki_pb_ingester_GetVoceraBuddiesResponse,
    _suki_pb_ingester_GetVoceraBuddiesRequest__Output,
    _suki_pb_ingester_GetVoceraBuddiesResponse__Output
  >;
  UpsertAPLocations: MethodDefinition<
    _suki_pb_ingester_UpsertAPLocationsRequest,
    _suki_pb_ingester_UpsertAPLocationsResponse,
    _suki_pb_ingester_UpsertAPLocationsRequest__Output,
    _suki_pb_ingester_UpsertAPLocationsResponse__Output
  >;
  UpsertContacts: MethodDefinition<
    _suki_pb_ingester_UpsertContactsRequest,
    _suki_pb_ingester_UpsertContactsResponse,
    _suki_pb_ingester_UpsertContactsRequest__Output,
    _suki_pb_ingester_UpsertContactsResponse__Output
  >;
  UpsertFacilities: MethodDefinition<
    _suki_pb_ingester_UpsertFacilitiesRequest,
    _suki_pb_ingester_UpsertFacilitiesResponse,
    _suki_pb_ingester_UpsertFacilitiesRequest__Output,
    _suki_pb_ingester_UpsertFacilitiesResponse__Output
  >;
  UpsertGroups: MethodDefinition<
    _suki_pb_ingester_UpsertGroupsRequest,
    _suki_pb_ingester_UpsertGroupsResponse,
    _suki_pb_ingester_UpsertGroupsRequest__Output,
    _suki_pb_ingester_UpsertGroupsResponse__Output
  >;
  UpsertIntents: MethodDefinition<
    _suki_pb_ingester_UpsertIntentsRequest,
    _suki_pb_ingester_UpsertIntentsResponse,
    _suki_pb_ingester_UpsertIntentsRequest__Output,
    _suki_pb_ingester_UpsertIntentsResponse__Output
  >;
  UpsertOutsideBuddies: MethodDefinition<
    _suki_pb_ingester_UpsertOutsideBuddiesRequest,
    _suki_pb_ingester_UpsertOutsideBuddiesResponse,
    _suki_pb_ingester_UpsertOutsideBuddiesRequest__Output,
    _suki_pb_ingester_UpsertOutsideBuddiesResponse__Output
  >;
  UpsertSlotTypes: MethodDefinition<
    _suki_pb_ingester_UpsertSlotTypesRequest,
    _suki_pb_ingester_UpsertSlotTypesResponse,
    _suki_pb_ingester_UpsertSlotTypesRequest__Output,
    _suki_pb_ingester_UpsertSlotTypesResponse__Output
  >;
  UpsertSlotValueTypes: MethodDefinition<
    _suki_pb_ingester_UpsertSlotValueTypesRequest,
    _suki_pb_ingester_UpsertSlotValueTypesResponse,
    _suki_pb_ingester_UpsertSlotValueTypesRequest__Output,
    _suki_pb_ingester_UpsertSlotValueTypesResponse__Output
  >;
  UpsertUsers: MethodDefinition<
    _suki_pb_ingester_UpsertUsersRequest,
    _suki_pb_ingester_UpsertUsersResponse,
    _suki_pb_ingester_UpsertUsersRequest__Output,
    _suki_pb_ingester_UpsertUsersResponse__Output
  >;
  UpsertVoceraBuddies: MethodDefinition<
    _suki_pb_ingester_UpsertVoceraBuddiesRequest,
    _suki_pb_ingester_UpsertVoceraBuddiesResponse,
    _suki_pb_ingester_UpsertVoceraBuddiesRequest__Output,
    _suki_pb_ingester_UpsertVoceraBuddiesResponse__Output
  >;
}
