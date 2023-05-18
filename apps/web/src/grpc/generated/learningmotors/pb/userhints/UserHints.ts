// Original file: node_modules/protobufs/src/learningmotors/pb/userhints/userhints.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  CreateUserHintRequest as _learningmotors_pb_userhints_CreateUserHintRequest,
  CreateUserHintRequest__Output as _learningmotors_pb_userhints_CreateUserHintRequest__Output
} from "../../../learningmotors/pb/userhints/CreateUserHintRequest";
import type {
  CreateUserHintResponse as _learningmotors_pb_userhints_CreateUserHintResponse,
  CreateUserHintResponse__Output as _learningmotors_pb_userhints_CreateUserHintResponse__Output
} from "../../../learningmotors/pb/userhints/CreateUserHintResponse";
import type {
  DeleteUserHintsRequest as _learningmotors_pb_userhints_DeleteUserHintsRequest,
  DeleteUserHintsRequest__Output as _learningmotors_pb_userhints_DeleteUserHintsRequest__Output
} from "../../../learningmotors/pb/userhints/DeleteUserHintsRequest";
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output
} from "../../../google/protobuf/Empty";
import type {
  GetUserHintsRequest as _learningmotors_pb_userhints_GetUserHintsRequest,
  GetUserHintsRequest__Output as _learningmotors_pb_userhints_GetUserHintsRequest__Output
} from "../../../learningmotors/pb/userhints/GetUserHintsRequest";
import type {
  GetUserHintsResponse as _learningmotors_pb_userhints_GetUserHintsResponse,
  GetUserHintsResponse__Output as _learningmotors_pb_userhints_GetUserHintsResponse__Output
} from "../../../learningmotors/pb/userhints/GetUserHintsResponse";
import type {
  UpdateUserHintsRequest as _learningmotors_pb_userhints_UpdateUserHintsRequest,
  UpdateUserHintsRequest__Output as _learningmotors_pb_userhints_UpdateUserHintsRequest__Output
} from "../../../learningmotors/pb/userhints/UpdateUserHintsRequest";
import type {
  UpdateUserHintsResponse as _learningmotors_pb_userhints_UpdateUserHintsResponse,
  UpdateUserHintsResponse__Output as _learningmotors_pb_userhints_UpdateUserHintsResponse__Output
} from "../../../learningmotors/pb/userhints/UpdateUserHintsResponse";

export interface UserHintsClient extends grpc.Client {
  Create(
    argument: _learningmotors_pb_userhints_CreateUserHintRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_userhints_CreateUserHintResponse__Output>
  ): grpc.ClientUnaryCall;
  Create(
    argument: _learningmotors_pb_userhints_CreateUserHintRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_userhints_CreateUserHintResponse__Output>
  ): grpc.ClientUnaryCall;
  Create(
    argument: _learningmotors_pb_userhints_CreateUserHintRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_userhints_CreateUserHintResponse__Output>
  ): grpc.ClientUnaryCall;
  Create(
    argument: _learningmotors_pb_userhints_CreateUserHintRequest,
    callback: grpc.requestCallback<_learningmotors_pb_userhints_CreateUserHintResponse__Output>
  ): grpc.ClientUnaryCall;
  create(
    argument: _learningmotors_pb_userhints_CreateUserHintRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_userhints_CreateUserHintResponse__Output>
  ): grpc.ClientUnaryCall;
  create(
    argument: _learningmotors_pb_userhints_CreateUserHintRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_userhints_CreateUserHintResponse__Output>
  ): grpc.ClientUnaryCall;
  create(
    argument: _learningmotors_pb_userhints_CreateUserHintRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_userhints_CreateUserHintResponse__Output>
  ): grpc.ClientUnaryCall;
  create(
    argument: _learningmotors_pb_userhints_CreateUserHintRequest,
    callback: grpc.requestCallback<_learningmotors_pb_userhints_CreateUserHintResponse__Output>
  ): grpc.ClientUnaryCall;

  Delete(
    argument: _learningmotors_pb_userhints_DeleteUserHintsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Delete(
    argument: _learningmotors_pb_userhints_DeleteUserHintsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Delete(
    argument: _learningmotors_pb_userhints_DeleteUserHintsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Delete(
    argument: _learningmotors_pb_userhints_DeleteUserHintsRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  delete(
    argument: _learningmotors_pb_userhints_DeleteUserHintsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  delete(
    argument: _learningmotors_pb_userhints_DeleteUserHintsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  delete(
    argument: _learningmotors_pb_userhints_DeleteUserHintsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  delete(
    argument: _learningmotors_pb_userhints_DeleteUserHintsRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  Get(
    argument: _learningmotors_pb_userhints_GetUserHintsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_userhints_GetUserHintsResponse__Output>
  ): grpc.ClientUnaryCall;
  Get(
    argument: _learningmotors_pb_userhints_GetUserHintsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_userhints_GetUserHintsResponse__Output>
  ): grpc.ClientUnaryCall;
  Get(
    argument: _learningmotors_pb_userhints_GetUserHintsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_userhints_GetUserHintsResponse__Output>
  ): grpc.ClientUnaryCall;
  Get(
    argument: _learningmotors_pb_userhints_GetUserHintsRequest,
    callback: grpc.requestCallback<_learningmotors_pb_userhints_GetUserHintsResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_userhints_GetUserHintsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_userhints_GetUserHintsResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_userhints_GetUserHintsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_userhints_GetUserHintsResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_userhints_GetUserHintsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_userhints_GetUserHintsResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_userhints_GetUserHintsRequest,
    callback: grpc.requestCallback<_learningmotors_pb_userhints_GetUserHintsResponse__Output>
  ): grpc.ClientUnaryCall;

  Update(
    argument: _learningmotors_pb_userhints_UpdateUserHintsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_userhints_UpdateUserHintsResponse__Output>
  ): grpc.ClientUnaryCall;
  Update(
    argument: _learningmotors_pb_userhints_UpdateUserHintsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_userhints_UpdateUserHintsResponse__Output>
  ): grpc.ClientUnaryCall;
  Update(
    argument: _learningmotors_pb_userhints_UpdateUserHintsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_userhints_UpdateUserHintsResponse__Output>
  ): grpc.ClientUnaryCall;
  Update(
    argument: _learningmotors_pb_userhints_UpdateUserHintsRequest,
    callback: grpc.requestCallback<_learningmotors_pb_userhints_UpdateUserHintsResponse__Output>
  ): grpc.ClientUnaryCall;
  update(
    argument: _learningmotors_pb_userhints_UpdateUserHintsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_userhints_UpdateUserHintsResponse__Output>
  ): grpc.ClientUnaryCall;
  update(
    argument: _learningmotors_pb_userhints_UpdateUserHintsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_userhints_UpdateUserHintsResponse__Output>
  ): grpc.ClientUnaryCall;
  update(
    argument: _learningmotors_pb_userhints_UpdateUserHintsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_userhints_UpdateUserHintsResponse__Output>
  ): grpc.ClientUnaryCall;
  update(
    argument: _learningmotors_pb_userhints_UpdateUserHintsRequest,
    callback: grpc.requestCallback<_learningmotors_pb_userhints_UpdateUserHintsResponse__Output>
  ): grpc.ClientUnaryCall;
}

export interface UserHintsHandlers extends grpc.UntypedServiceImplementation {
  Create: grpc.handleUnaryCall<
    _learningmotors_pb_userhints_CreateUserHintRequest__Output,
    _learningmotors_pb_userhints_CreateUserHintResponse
  >;

  Delete: grpc.handleUnaryCall<_learningmotors_pb_userhints_DeleteUserHintsRequest__Output, _google_protobuf_Empty>;

  Get: grpc.handleUnaryCall<
    _learningmotors_pb_userhints_GetUserHintsRequest__Output,
    _learningmotors_pb_userhints_GetUserHintsResponse
  >;

  Update: grpc.handleUnaryCall<
    _learningmotors_pb_userhints_UpdateUserHintsRequest__Output,
    _learningmotors_pb_userhints_UpdateUserHintsResponse
  >;
}

export interface UserHintsDefinition extends grpc.ServiceDefinition {
  Create: MethodDefinition<
    _learningmotors_pb_userhints_CreateUserHintRequest,
    _learningmotors_pb_userhints_CreateUserHintResponse,
    _learningmotors_pb_userhints_CreateUserHintRequest__Output,
    _learningmotors_pb_userhints_CreateUserHintResponse__Output
  >;
  Delete: MethodDefinition<
    _learningmotors_pb_userhints_DeleteUserHintsRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_userhints_DeleteUserHintsRequest__Output,
    _google_protobuf_Empty__Output
  >;
  Get: MethodDefinition<
    _learningmotors_pb_userhints_GetUserHintsRequest,
    _learningmotors_pb_userhints_GetUserHintsResponse,
    _learningmotors_pb_userhints_GetUserHintsRequest__Output,
    _learningmotors_pb_userhints_GetUserHintsResponse__Output
  >;
  Update: MethodDefinition<
    _learningmotors_pb_userhints_UpdateUserHintsRequest,
    _learningmotors_pb_userhints_UpdateUserHintsResponse,
    _learningmotors_pb_userhints_UpdateUserHintsRequest__Output,
    _learningmotors_pb_userhints_UpdateUserHintsResponse__Output
  >;
}
