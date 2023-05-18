// Original file: node_modules/protobufs/src/learningmotors/pb/rules/rules.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  CreateRequest as _learningmotors_pb_rules_CreateRequest,
  CreateRequest__Output as _learningmotors_pb_rules_CreateRequest__Output
} from "../../../learningmotors/pb/rules/CreateRequest";
import type {
  CreateResponse as _learningmotors_pb_rules_CreateResponse,
  CreateResponse__Output as _learningmotors_pb_rules_CreateResponse__Output
} from "../../../learningmotors/pb/rules/CreateResponse";
import type {
  DeleteRequest as _learningmotors_pb_rules_DeleteRequest,
  DeleteRequest__Output as _learningmotors_pb_rules_DeleteRequest__Output
} from "../../../learningmotors/pb/rules/DeleteRequest";
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output
} from "../../../google/protobuf/Empty";
import type {
  GetRequest as _learningmotors_pb_rules_GetRequest,
  GetRequest__Output as _learningmotors_pb_rules_GetRequest__Output
} from "../../../learningmotors/pb/rules/GetRequest";
import type {
  GetResponse as _learningmotors_pb_rules_GetResponse,
  GetResponse__Output as _learningmotors_pb_rules_GetResponse__Output
} from "../../../learningmotors/pb/rules/GetResponse";
import type {
  UpdateRequest as _learningmotors_pb_rules_UpdateRequest,
  UpdateRequest__Output as _learningmotors_pb_rules_UpdateRequest__Output
} from "../../../learningmotors/pb/rules/UpdateRequest";
import type {
  UpdateResponse as _learningmotors_pb_rules_UpdateResponse,
  UpdateResponse__Output as _learningmotors_pb_rules_UpdateResponse__Output
} from "../../../learningmotors/pb/rules/UpdateResponse";

export interface RulesServiceClient extends grpc.Client {
  Create(
    argument: _learningmotors_pb_rules_CreateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_rules_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  Create(
    argument: _learningmotors_pb_rules_CreateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_rules_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  Create(
    argument: _learningmotors_pb_rules_CreateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_rules_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  Create(
    argument: _learningmotors_pb_rules_CreateRequest,
    callback: grpc.requestCallback<_learningmotors_pb_rules_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  create(
    argument: _learningmotors_pb_rules_CreateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_rules_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  create(
    argument: _learningmotors_pb_rules_CreateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_rules_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  create(
    argument: _learningmotors_pb_rules_CreateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_rules_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  create(
    argument: _learningmotors_pb_rules_CreateRequest,
    callback: grpc.requestCallback<_learningmotors_pb_rules_CreateResponse__Output>
  ): grpc.ClientUnaryCall;

  Delete(
    argument: _learningmotors_pb_rules_DeleteRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Delete(
    argument: _learningmotors_pb_rules_DeleteRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Delete(
    argument: _learningmotors_pb_rules_DeleteRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Delete(
    argument: _learningmotors_pb_rules_DeleteRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  delete(
    argument: _learningmotors_pb_rules_DeleteRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  delete(
    argument: _learningmotors_pb_rules_DeleteRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  delete(
    argument: _learningmotors_pb_rules_DeleteRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  delete(
    argument: _learningmotors_pb_rules_DeleteRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  Get(
    argument: _learningmotors_pb_rules_GetRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_rules_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  Get(
    argument: _learningmotors_pb_rules_GetRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_rules_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  Get(
    argument: _learningmotors_pb_rules_GetRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_rules_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  Get(
    argument: _learningmotors_pb_rules_GetRequest,
    callback: grpc.requestCallback<_learningmotors_pb_rules_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_rules_GetRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_rules_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_rules_GetRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_rules_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_rules_GetRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_rules_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_rules_GetRequest,
    callback: grpc.requestCallback<_learningmotors_pb_rules_GetResponse__Output>
  ): grpc.ClientUnaryCall;

  Update(
    argument: _learningmotors_pb_rules_UpdateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_rules_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  Update(
    argument: _learningmotors_pb_rules_UpdateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_rules_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  Update(
    argument: _learningmotors_pb_rules_UpdateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_rules_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  Update(
    argument: _learningmotors_pb_rules_UpdateRequest,
    callback: grpc.requestCallback<_learningmotors_pb_rules_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  update(
    argument: _learningmotors_pb_rules_UpdateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_rules_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  update(
    argument: _learningmotors_pb_rules_UpdateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_rules_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  update(
    argument: _learningmotors_pb_rules_UpdateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_rules_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  update(
    argument: _learningmotors_pb_rules_UpdateRequest,
    callback: grpc.requestCallback<_learningmotors_pb_rules_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
}

export interface RulesServiceHandlers extends grpc.UntypedServiceImplementation {
  Create: grpc.handleUnaryCall<_learningmotors_pb_rules_CreateRequest__Output, _learningmotors_pb_rules_CreateResponse>;

  Delete: grpc.handleUnaryCall<_learningmotors_pb_rules_DeleteRequest__Output, _google_protobuf_Empty>;

  Get: grpc.handleUnaryCall<_learningmotors_pb_rules_GetRequest__Output, _learningmotors_pb_rules_GetResponse>;

  Update: grpc.handleUnaryCall<_learningmotors_pb_rules_UpdateRequest__Output, _learningmotors_pb_rules_UpdateResponse>;
}

export interface RulesServiceDefinition extends grpc.ServiceDefinition {
  Create: MethodDefinition<
    _learningmotors_pb_rules_CreateRequest,
    _learningmotors_pb_rules_CreateResponse,
    _learningmotors_pb_rules_CreateRequest__Output,
    _learningmotors_pb_rules_CreateResponse__Output
  >;
  Delete: MethodDefinition<
    _learningmotors_pb_rules_DeleteRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_rules_DeleteRequest__Output,
    _google_protobuf_Empty__Output
  >;
  Get: MethodDefinition<
    _learningmotors_pb_rules_GetRequest,
    _learningmotors_pb_rules_GetResponse,
    _learningmotors_pb_rules_GetRequest__Output,
    _learningmotors_pb_rules_GetResponse__Output
  >;
  Update: MethodDefinition<
    _learningmotors_pb_rules_UpdateRequest,
    _learningmotors_pb_rules_UpdateResponse,
    _learningmotors_pb_rules_UpdateRequest__Output,
    _learningmotors_pb_rules_UpdateResponse__Output
  >;
}
