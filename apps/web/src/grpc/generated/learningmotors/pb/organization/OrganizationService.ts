// Original file: node_modules/protobufs/src/learningmotors/pb/organization/organization_service.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  CreateEmbeddedOrganizationRequest as _learningmotors_pb_organization_CreateEmbeddedOrganizationRequest,
  CreateEmbeddedOrganizationRequest__Output as _learningmotors_pb_organization_CreateEmbeddedOrganizationRequest__Output
} from "../../../learningmotors/pb/organization/CreateEmbeddedOrganizationRequest";
import type {
  CreateEmbeddedOrganizationResponse as _learningmotors_pb_organization_CreateEmbeddedOrganizationResponse,
  CreateEmbeddedOrganizationResponse__Output as _learningmotors_pb_organization_CreateEmbeddedOrganizationResponse__Output
} from "../../../learningmotors/pb/organization/CreateEmbeddedOrganizationResponse";
import type {
  CreateRequest as _learningmotors_pb_organization_CreateRequest,
  CreateRequest__Output as _learningmotors_pb_organization_CreateRequest__Output
} from "../../../learningmotors/pb/organization/CreateRequest";
import type {
  CreateResponse as _learningmotors_pb_organization_CreateResponse,
  CreateResponse__Output as _learningmotors_pb_organization_CreateResponse__Output
} from "../../../learningmotors/pb/organization/CreateResponse";
import type {
  DeleteEmbeddedOrganizationRequest as _learningmotors_pb_organization_DeleteEmbeddedOrganizationRequest,
  DeleteEmbeddedOrganizationRequest__Output as _learningmotors_pb_organization_DeleteEmbeddedOrganizationRequest__Output
} from "../../../learningmotors/pb/organization/DeleteEmbeddedOrganizationRequest";
import type {
  DeleteRequest as _learningmotors_pb_organization_DeleteRequest,
  DeleteRequest__Output as _learningmotors_pb_organization_DeleteRequest__Output
} from "../../../learningmotors/pb/organization/DeleteRequest";
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output
} from "../../../google/protobuf/Empty";
import type {
  GetByNameRequest as _learningmotors_pb_organization_GetByNameRequest,
  GetByNameRequest__Output as _learningmotors_pb_organization_GetByNameRequest__Output
} from "../../../learningmotors/pb/organization/GetByNameRequest";
import type {
  GetEmbeddedOrganizationRequest as _learningmotors_pb_organization_GetEmbeddedOrganizationRequest,
  GetEmbeddedOrganizationRequest__Output as _learningmotors_pb_organization_GetEmbeddedOrganizationRequest__Output
} from "../../../learningmotors/pb/organization/GetEmbeddedOrganizationRequest";
import type {
  GetEmbeddedOrganizationResponse as _learningmotors_pb_organization_GetEmbeddedOrganizationResponse,
  GetEmbeddedOrganizationResponse__Output as _learningmotors_pb_organization_GetEmbeddedOrganizationResponse__Output
} from "../../../learningmotors/pb/organization/GetEmbeddedOrganizationResponse";
import type {
  GetRequest as _learningmotors_pb_organization_GetRequest,
  GetRequest__Output as _learningmotors_pb_organization_GetRequest__Output
} from "../../../learningmotors/pb/organization/GetRequest";
import type {
  GetResponse as _learningmotors_pb_organization_GetResponse,
  GetResponse__Output as _learningmotors_pb_organization_GetResponse__Output
} from "../../../learningmotors/pb/organization/GetResponse";
import type {
  UpdateEmbeddedOrganizationRequest as _learningmotors_pb_organization_UpdateEmbeddedOrganizationRequest,
  UpdateEmbeddedOrganizationRequest__Output as _learningmotors_pb_organization_UpdateEmbeddedOrganizationRequest__Output
} from "../../../learningmotors/pb/organization/UpdateEmbeddedOrganizationRequest";
import type {
  UpdateEmbeddedOrganizationResponse as _learningmotors_pb_organization_UpdateEmbeddedOrganizationResponse,
  UpdateEmbeddedOrganizationResponse__Output as _learningmotors_pb_organization_UpdateEmbeddedOrganizationResponse__Output
} from "../../../learningmotors/pb/organization/UpdateEmbeddedOrganizationResponse";
import type {
  UpdateRequest as _learningmotors_pb_organization_UpdateRequest,
  UpdateRequest__Output as _learningmotors_pb_organization_UpdateRequest__Output
} from "../../../learningmotors/pb/organization/UpdateRequest";
import type {
  UpdateResponse as _learningmotors_pb_organization_UpdateResponse,
  UpdateResponse__Output as _learningmotors_pb_organization_UpdateResponse__Output
} from "../../../learningmotors/pb/organization/UpdateResponse";

export interface OrganizationServiceClient extends grpc.Client {
  Create(
    argument: _learningmotors_pb_organization_CreateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_organization_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  Create(
    argument: _learningmotors_pb_organization_CreateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_organization_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  Create(
    argument: _learningmotors_pb_organization_CreateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_organization_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  Create(
    argument: _learningmotors_pb_organization_CreateRequest,
    callback: grpc.requestCallback<_learningmotors_pb_organization_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  create(
    argument: _learningmotors_pb_organization_CreateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_organization_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  create(
    argument: _learningmotors_pb_organization_CreateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_organization_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  create(
    argument: _learningmotors_pb_organization_CreateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_organization_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  create(
    argument: _learningmotors_pb_organization_CreateRequest,
    callback: grpc.requestCallback<_learningmotors_pb_organization_CreateResponse__Output>
  ): grpc.ClientUnaryCall;

  CreateEmbeddedOrganization(
    argument: _learningmotors_pb_organization_CreateEmbeddedOrganizationRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_organization_CreateEmbeddedOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateEmbeddedOrganization(
    argument: _learningmotors_pb_organization_CreateEmbeddedOrganizationRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_organization_CreateEmbeddedOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateEmbeddedOrganization(
    argument: _learningmotors_pb_organization_CreateEmbeddedOrganizationRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_organization_CreateEmbeddedOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateEmbeddedOrganization(
    argument: _learningmotors_pb_organization_CreateEmbeddedOrganizationRequest,
    callback: grpc.requestCallback<_learningmotors_pb_organization_CreateEmbeddedOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
  createEmbeddedOrganization(
    argument: _learningmotors_pb_organization_CreateEmbeddedOrganizationRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_organization_CreateEmbeddedOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
  createEmbeddedOrganization(
    argument: _learningmotors_pb_organization_CreateEmbeddedOrganizationRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_organization_CreateEmbeddedOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
  createEmbeddedOrganization(
    argument: _learningmotors_pb_organization_CreateEmbeddedOrganizationRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_organization_CreateEmbeddedOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
  createEmbeddedOrganization(
    argument: _learningmotors_pb_organization_CreateEmbeddedOrganizationRequest,
    callback: grpc.requestCallback<_learningmotors_pb_organization_CreateEmbeddedOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;

  Delete(
    argument: _learningmotors_pb_organization_DeleteRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Delete(
    argument: _learningmotors_pb_organization_DeleteRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Delete(
    argument: _learningmotors_pb_organization_DeleteRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Delete(
    argument: _learningmotors_pb_organization_DeleteRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  delete(
    argument: _learningmotors_pb_organization_DeleteRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  delete(
    argument: _learningmotors_pb_organization_DeleteRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  delete(
    argument: _learningmotors_pb_organization_DeleteRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  delete(
    argument: _learningmotors_pb_organization_DeleteRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  DeleteEmbeddedOrganization(
    argument: _learningmotors_pb_organization_DeleteEmbeddedOrganizationRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteEmbeddedOrganization(
    argument: _learningmotors_pb_organization_DeleteEmbeddedOrganizationRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteEmbeddedOrganization(
    argument: _learningmotors_pb_organization_DeleteEmbeddedOrganizationRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteEmbeddedOrganization(
    argument: _learningmotors_pb_organization_DeleteEmbeddedOrganizationRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteEmbeddedOrganization(
    argument: _learningmotors_pb_organization_DeleteEmbeddedOrganizationRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteEmbeddedOrganization(
    argument: _learningmotors_pb_organization_DeleteEmbeddedOrganizationRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteEmbeddedOrganization(
    argument: _learningmotors_pb_organization_DeleteEmbeddedOrganizationRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteEmbeddedOrganization(
    argument: _learningmotors_pb_organization_DeleteEmbeddedOrganizationRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  Get(
    argument: _learningmotors_pb_organization_GetRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_organization_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  Get(
    argument: _learningmotors_pb_organization_GetRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_organization_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  Get(
    argument: _learningmotors_pb_organization_GetRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_organization_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  Get(
    argument: _learningmotors_pb_organization_GetRequest,
    callback: grpc.requestCallback<_learningmotors_pb_organization_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_organization_GetRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_organization_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_organization_GetRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_organization_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_organization_GetRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_organization_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_organization_GetRequest,
    callback: grpc.requestCallback<_learningmotors_pb_organization_GetResponse__Output>
  ): grpc.ClientUnaryCall;

  GetByName(
    argument: _learningmotors_pb_organization_GetByNameRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_organization_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  GetByName(
    argument: _learningmotors_pb_organization_GetByNameRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_organization_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  GetByName(
    argument: _learningmotors_pb_organization_GetByNameRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_organization_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  GetByName(
    argument: _learningmotors_pb_organization_GetByNameRequest,
    callback: grpc.requestCallback<_learningmotors_pb_organization_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  getByName(
    argument: _learningmotors_pb_organization_GetByNameRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_organization_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  getByName(
    argument: _learningmotors_pb_organization_GetByNameRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_organization_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  getByName(
    argument: _learningmotors_pb_organization_GetByNameRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_organization_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  getByName(
    argument: _learningmotors_pb_organization_GetByNameRequest,
    callback: grpc.requestCallback<_learningmotors_pb_organization_GetResponse__Output>
  ): grpc.ClientUnaryCall;

  GetEmbeddedOrganization(
    argument: _learningmotors_pb_organization_GetEmbeddedOrganizationRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_organization_GetEmbeddedOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
  GetEmbeddedOrganization(
    argument: _learningmotors_pb_organization_GetEmbeddedOrganizationRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_organization_GetEmbeddedOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
  GetEmbeddedOrganization(
    argument: _learningmotors_pb_organization_GetEmbeddedOrganizationRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_organization_GetEmbeddedOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
  GetEmbeddedOrganization(
    argument: _learningmotors_pb_organization_GetEmbeddedOrganizationRequest,
    callback: grpc.requestCallback<_learningmotors_pb_organization_GetEmbeddedOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
  getEmbeddedOrganization(
    argument: _learningmotors_pb_organization_GetEmbeddedOrganizationRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_organization_GetEmbeddedOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
  getEmbeddedOrganization(
    argument: _learningmotors_pb_organization_GetEmbeddedOrganizationRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_organization_GetEmbeddedOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
  getEmbeddedOrganization(
    argument: _learningmotors_pb_organization_GetEmbeddedOrganizationRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_organization_GetEmbeddedOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
  getEmbeddedOrganization(
    argument: _learningmotors_pb_organization_GetEmbeddedOrganizationRequest,
    callback: grpc.requestCallback<_learningmotors_pb_organization_GetEmbeddedOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;

  Update(
    argument: _learningmotors_pb_organization_UpdateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_organization_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  Update(
    argument: _learningmotors_pb_organization_UpdateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_organization_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  Update(
    argument: _learningmotors_pb_organization_UpdateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_organization_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  Update(
    argument: _learningmotors_pb_organization_UpdateRequest,
    callback: grpc.requestCallback<_learningmotors_pb_organization_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  update(
    argument: _learningmotors_pb_organization_UpdateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_organization_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  update(
    argument: _learningmotors_pb_organization_UpdateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_organization_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  update(
    argument: _learningmotors_pb_organization_UpdateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_organization_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  update(
    argument: _learningmotors_pb_organization_UpdateRequest,
    callback: grpc.requestCallback<_learningmotors_pb_organization_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;

  UpdateEmbeddedOrganization(
    argument: _learningmotors_pb_organization_UpdateEmbeddedOrganizationRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_organization_UpdateEmbeddedOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
  UpdateEmbeddedOrganization(
    argument: _learningmotors_pb_organization_UpdateEmbeddedOrganizationRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_organization_UpdateEmbeddedOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
  UpdateEmbeddedOrganization(
    argument: _learningmotors_pb_organization_UpdateEmbeddedOrganizationRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_organization_UpdateEmbeddedOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
  UpdateEmbeddedOrganization(
    argument: _learningmotors_pb_organization_UpdateEmbeddedOrganizationRequest,
    callback: grpc.requestCallback<_learningmotors_pb_organization_UpdateEmbeddedOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
  updateEmbeddedOrganization(
    argument: _learningmotors_pb_organization_UpdateEmbeddedOrganizationRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_organization_UpdateEmbeddedOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
  updateEmbeddedOrganization(
    argument: _learningmotors_pb_organization_UpdateEmbeddedOrganizationRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_organization_UpdateEmbeddedOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
  updateEmbeddedOrganization(
    argument: _learningmotors_pb_organization_UpdateEmbeddedOrganizationRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_organization_UpdateEmbeddedOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
  updateEmbeddedOrganization(
    argument: _learningmotors_pb_organization_UpdateEmbeddedOrganizationRequest,
    callback: grpc.requestCallback<_learningmotors_pb_organization_UpdateEmbeddedOrganizationResponse__Output>
  ): grpc.ClientUnaryCall;
}

export interface OrganizationServiceHandlers extends grpc.UntypedServiceImplementation {
  Create: grpc.handleUnaryCall<
    _learningmotors_pb_organization_CreateRequest__Output,
    _learningmotors_pb_organization_CreateResponse
  >;

  CreateEmbeddedOrganization: grpc.handleUnaryCall<
    _learningmotors_pb_organization_CreateEmbeddedOrganizationRequest__Output,
    _learningmotors_pb_organization_CreateEmbeddedOrganizationResponse
  >;

  Delete: grpc.handleUnaryCall<_learningmotors_pb_organization_DeleteRequest__Output, _google_protobuf_Empty>;

  DeleteEmbeddedOrganization: grpc.handleUnaryCall<
    _learningmotors_pb_organization_DeleteEmbeddedOrganizationRequest__Output,
    _google_protobuf_Empty
  >;

  Get: grpc.handleUnaryCall<
    _learningmotors_pb_organization_GetRequest__Output,
    _learningmotors_pb_organization_GetResponse
  >;

  GetByName: grpc.handleUnaryCall<
    _learningmotors_pb_organization_GetByNameRequest__Output,
    _learningmotors_pb_organization_GetResponse
  >;

  GetEmbeddedOrganization: grpc.handleUnaryCall<
    _learningmotors_pb_organization_GetEmbeddedOrganizationRequest__Output,
    _learningmotors_pb_organization_GetEmbeddedOrganizationResponse
  >;

  Update: grpc.handleUnaryCall<
    _learningmotors_pb_organization_UpdateRequest__Output,
    _learningmotors_pb_organization_UpdateResponse
  >;

  UpdateEmbeddedOrganization: grpc.handleUnaryCall<
    _learningmotors_pb_organization_UpdateEmbeddedOrganizationRequest__Output,
    _learningmotors_pb_organization_UpdateEmbeddedOrganizationResponse
  >;
}

export interface OrganizationServiceDefinition extends grpc.ServiceDefinition {
  Create: MethodDefinition<
    _learningmotors_pb_organization_CreateRequest,
    _learningmotors_pb_organization_CreateResponse,
    _learningmotors_pb_organization_CreateRequest__Output,
    _learningmotors_pb_organization_CreateResponse__Output
  >;
  CreateEmbeddedOrganization: MethodDefinition<
    _learningmotors_pb_organization_CreateEmbeddedOrganizationRequest,
    _learningmotors_pb_organization_CreateEmbeddedOrganizationResponse,
    _learningmotors_pb_organization_CreateEmbeddedOrganizationRequest__Output,
    _learningmotors_pb_organization_CreateEmbeddedOrganizationResponse__Output
  >;
  Delete: MethodDefinition<
    _learningmotors_pb_organization_DeleteRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_organization_DeleteRequest__Output,
    _google_protobuf_Empty__Output
  >;
  DeleteEmbeddedOrganization: MethodDefinition<
    _learningmotors_pb_organization_DeleteEmbeddedOrganizationRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_organization_DeleteEmbeddedOrganizationRequest__Output,
    _google_protobuf_Empty__Output
  >;
  Get: MethodDefinition<
    _learningmotors_pb_organization_GetRequest,
    _learningmotors_pb_organization_GetResponse,
    _learningmotors_pb_organization_GetRequest__Output,
    _learningmotors_pb_organization_GetResponse__Output
  >;
  GetByName: MethodDefinition<
    _learningmotors_pb_organization_GetByNameRequest,
    _learningmotors_pb_organization_GetResponse,
    _learningmotors_pb_organization_GetByNameRequest__Output,
    _learningmotors_pb_organization_GetResponse__Output
  >;
  GetEmbeddedOrganization: MethodDefinition<
    _learningmotors_pb_organization_GetEmbeddedOrganizationRequest,
    _learningmotors_pb_organization_GetEmbeddedOrganizationResponse,
    _learningmotors_pb_organization_GetEmbeddedOrganizationRequest__Output,
    _learningmotors_pb_organization_GetEmbeddedOrganizationResponse__Output
  >;
  Update: MethodDefinition<
    _learningmotors_pb_organization_UpdateRequest,
    _learningmotors_pb_organization_UpdateResponse,
    _learningmotors_pb_organization_UpdateRequest__Output,
    _learningmotors_pb_organization_UpdateResponse__Output
  >;
  UpdateEmbeddedOrganization: MethodDefinition<
    _learningmotors_pb_organization_UpdateEmbeddedOrganizationRequest,
    _learningmotors_pb_organization_UpdateEmbeddedOrganizationResponse,
    _learningmotors_pb_organization_UpdateEmbeddedOrganizationRequest__Output,
    _learningmotors_pb_organization_UpdateEmbeddedOrganizationResponse__Output
  >;
}
