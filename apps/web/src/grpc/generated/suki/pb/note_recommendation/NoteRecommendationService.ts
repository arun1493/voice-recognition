// Original file: node_modules/protobufs/src/suki/pb/note_recommendation/note_recommendation.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  CreateRequest as _suki_pb_note_recommendation_CreateRequest,
  CreateRequest__Output as _suki_pb_note_recommendation_CreateRequest__Output
} from "../../../suki/pb/note_recommendation/CreateRequest";
import type {
  CreateResponse as _suki_pb_note_recommendation_CreateResponse,
  CreateResponse__Output as _suki_pb_note_recommendation_CreateResponse__Output
} from "../../../suki/pb/note_recommendation/CreateResponse";
import type {
  GetRequest as _suki_pb_note_recommendation_GetRequest,
  GetRequest__Output as _suki_pb_note_recommendation_GetRequest__Output
} from "../../../suki/pb/note_recommendation/GetRequest";
import type {
  GetResponse as _suki_pb_note_recommendation_GetResponse,
  GetResponse__Output as _suki_pb_note_recommendation_GetResponse__Output
} from "../../../suki/pb/note_recommendation/GetResponse";
import type {
  UpdateRequest as _suki_pb_note_recommendation_UpdateRequest,
  UpdateRequest__Output as _suki_pb_note_recommendation_UpdateRequest__Output
} from "../../../suki/pb/note_recommendation/UpdateRequest";
import type {
  UpdateResponse as _suki_pb_note_recommendation_UpdateResponse,
  UpdateResponse__Output as _suki_pb_note_recommendation_UpdateResponse__Output
} from "../../../suki/pb/note_recommendation/UpdateResponse";

export interface NoteRecommendationServiceClient extends grpc.Client {
  Create(
    argument: _suki_pb_note_recommendation_CreateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_note_recommendation_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  Create(
    argument: _suki_pb_note_recommendation_CreateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_note_recommendation_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  Create(
    argument: _suki_pb_note_recommendation_CreateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_note_recommendation_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  Create(
    argument: _suki_pb_note_recommendation_CreateRequest,
    callback: grpc.requestCallback<_suki_pb_note_recommendation_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  create(
    argument: _suki_pb_note_recommendation_CreateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_note_recommendation_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  create(
    argument: _suki_pb_note_recommendation_CreateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_note_recommendation_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  create(
    argument: _suki_pb_note_recommendation_CreateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_note_recommendation_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  create(
    argument: _suki_pb_note_recommendation_CreateRequest,
    callback: grpc.requestCallback<_suki_pb_note_recommendation_CreateResponse__Output>
  ): grpc.ClientUnaryCall;

  Get(
    argument: _suki_pb_note_recommendation_GetRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_note_recommendation_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  Get(
    argument: _suki_pb_note_recommendation_GetRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_note_recommendation_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  Get(
    argument: _suki_pb_note_recommendation_GetRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_note_recommendation_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  Get(
    argument: _suki_pb_note_recommendation_GetRequest,
    callback: grpc.requestCallback<_suki_pb_note_recommendation_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _suki_pb_note_recommendation_GetRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_note_recommendation_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _suki_pb_note_recommendation_GetRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_note_recommendation_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _suki_pb_note_recommendation_GetRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_note_recommendation_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _suki_pb_note_recommendation_GetRequest,
    callback: grpc.requestCallback<_suki_pb_note_recommendation_GetResponse__Output>
  ): grpc.ClientUnaryCall;

  Update(
    argument: _suki_pb_note_recommendation_UpdateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_note_recommendation_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  Update(
    argument: _suki_pb_note_recommendation_UpdateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_note_recommendation_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  Update(
    argument: _suki_pb_note_recommendation_UpdateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_note_recommendation_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  Update(
    argument: _suki_pb_note_recommendation_UpdateRequest,
    callback: grpc.requestCallback<_suki_pb_note_recommendation_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  update(
    argument: _suki_pb_note_recommendation_UpdateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_note_recommendation_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  update(
    argument: _suki_pb_note_recommendation_UpdateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_note_recommendation_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  update(
    argument: _suki_pb_note_recommendation_UpdateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_note_recommendation_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  update(
    argument: _suki_pb_note_recommendation_UpdateRequest,
    callback: grpc.requestCallback<_suki_pb_note_recommendation_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
}

export interface NoteRecommendationServiceHandlers extends grpc.UntypedServiceImplementation {
  Create: grpc.handleUnaryCall<
    _suki_pb_note_recommendation_CreateRequest__Output,
    _suki_pb_note_recommendation_CreateResponse
  >;

  Get: grpc.handleUnaryCall<_suki_pb_note_recommendation_GetRequest__Output, _suki_pb_note_recommendation_GetResponse>;

  Update: grpc.handleUnaryCall<
    _suki_pb_note_recommendation_UpdateRequest__Output,
    _suki_pb_note_recommendation_UpdateResponse
  >;
}

export interface NoteRecommendationServiceDefinition extends grpc.ServiceDefinition {
  Create: MethodDefinition<
    _suki_pb_note_recommendation_CreateRequest,
    _suki_pb_note_recommendation_CreateResponse,
    _suki_pb_note_recommendation_CreateRequest__Output,
    _suki_pb_note_recommendation_CreateResponse__Output
  >;
  Get: MethodDefinition<
    _suki_pb_note_recommendation_GetRequest,
    _suki_pb_note_recommendation_GetResponse,
    _suki_pb_note_recommendation_GetRequest__Output,
    _suki_pb_note_recommendation_GetResponse__Output
  >;
  Update: MethodDefinition<
    _suki_pb_note_recommendation_UpdateRequest,
    _suki_pb_note_recommendation_UpdateResponse,
    _suki_pb_note_recommendation_UpdateRequest__Output,
    _suki_pb_note_recommendation_UpdateResponse__Output
  >;
}
