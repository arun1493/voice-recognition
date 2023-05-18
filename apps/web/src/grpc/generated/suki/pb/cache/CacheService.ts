// Original file: node_modules/protobufs/src/suki/pb/cache/cache.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  DeleteRequest as _suki_pb_cache_DeleteRequest,
  DeleteRequest__Output as _suki_pb_cache_DeleteRequest__Output
} from "../../../suki/pb/cache/DeleteRequest";
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output
} from "../../../google/protobuf/Empty";
import type {
  GetRequest as _suki_pb_cache_GetRequest,
  GetRequest__Output as _suki_pb_cache_GetRequest__Output
} from "../../../suki/pb/cache/GetRequest";
import type {
  GetResponse as _suki_pb_cache_GetResponse,
  GetResponse__Output as _suki_pb_cache_GetResponse__Output
} from "../../../suki/pb/cache/GetResponse";
import type {
  JsonGetRequest as _suki_pb_cache_JsonGetRequest,
  JsonGetRequest__Output as _suki_pb_cache_JsonGetRequest__Output
} from "../../../suki/pb/cache/JsonGetRequest";
import type {
  JsonGetResponse as _suki_pb_cache_JsonGetResponse,
  JsonGetResponse__Output as _suki_pb_cache_JsonGetResponse__Output
} from "../../../suki/pb/cache/JsonGetResponse";
import type {
  JsonSetRequest as _suki_pb_cache_JsonSetRequest,
  JsonSetRequest__Output as _suki_pb_cache_JsonSetRequest__Output
} from "../../../suki/pb/cache/JsonSetRequest";
import type {
  SetRequest as _suki_pb_cache_SetRequest,
  SetRequest__Output as _suki_pb_cache_SetRequest__Output
} from "../../../suki/pb/cache/SetRequest";

export interface CacheServiceClient extends grpc.Client {
  Delete(
    argument: _suki_pb_cache_DeleteRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Delete(
    argument: _suki_pb_cache_DeleteRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Delete(
    argument: _suki_pb_cache_DeleteRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Delete(
    argument: _suki_pb_cache_DeleteRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  delete(
    argument: _suki_pb_cache_DeleteRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  delete(
    argument: _suki_pb_cache_DeleteRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  delete(
    argument: _suki_pb_cache_DeleteRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  delete(
    argument: _suki_pb_cache_DeleteRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  FlushStore(
    argument: _google_protobuf_Empty,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  FlushStore(
    argument: _google_protobuf_Empty,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  FlushStore(
    argument: _google_protobuf_Empty,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  FlushStore(
    argument: _google_protobuf_Empty,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  flushStore(
    argument: _google_protobuf_Empty,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  flushStore(
    argument: _google_protobuf_Empty,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  flushStore(
    argument: _google_protobuf_Empty,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  flushStore(
    argument: _google_protobuf_Empty,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  Get(
    argument: _suki_pb_cache_GetRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_cache_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  Get(
    argument: _suki_pb_cache_GetRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_cache_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  Get(
    argument: _suki_pb_cache_GetRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_cache_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  Get(
    argument: _suki_pb_cache_GetRequest,
    callback: grpc.requestCallback<_suki_pb_cache_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _suki_pb_cache_GetRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_cache_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _suki_pb_cache_GetRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_cache_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _suki_pb_cache_GetRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_cache_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _suki_pb_cache_GetRequest,
    callback: grpc.requestCallback<_suki_pb_cache_GetResponse__Output>
  ): grpc.ClientUnaryCall;

  JSONGet(
    argument: _suki_pb_cache_JsonGetRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_cache_JsonGetResponse__Output>
  ): grpc.ClientUnaryCall;
  JSONGet(
    argument: _suki_pb_cache_JsonGetRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_cache_JsonGetResponse__Output>
  ): grpc.ClientUnaryCall;
  JSONGet(
    argument: _suki_pb_cache_JsonGetRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_cache_JsonGetResponse__Output>
  ): grpc.ClientUnaryCall;
  JSONGet(
    argument: _suki_pb_cache_JsonGetRequest,
    callback: grpc.requestCallback<_suki_pb_cache_JsonGetResponse__Output>
  ): grpc.ClientUnaryCall;
  jsonGet(
    argument: _suki_pb_cache_JsonGetRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_cache_JsonGetResponse__Output>
  ): grpc.ClientUnaryCall;
  jsonGet(
    argument: _suki_pb_cache_JsonGetRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_cache_JsonGetResponse__Output>
  ): grpc.ClientUnaryCall;
  jsonGet(
    argument: _suki_pb_cache_JsonGetRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_cache_JsonGetResponse__Output>
  ): grpc.ClientUnaryCall;
  jsonGet(
    argument: _suki_pb_cache_JsonGetRequest,
    callback: grpc.requestCallback<_suki_pb_cache_JsonGetResponse__Output>
  ): grpc.ClientUnaryCall;

  JSONSet(
    argument: _suki_pb_cache_JsonSetRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  JSONSet(
    argument: _suki_pb_cache_JsonSetRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  JSONSet(
    argument: _suki_pb_cache_JsonSetRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  JSONSet(
    argument: _suki_pb_cache_JsonSetRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  jsonSet(
    argument: _suki_pb_cache_JsonSetRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  jsonSet(
    argument: _suki_pb_cache_JsonSetRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  jsonSet(
    argument: _suki_pb_cache_JsonSetRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  jsonSet(
    argument: _suki_pb_cache_JsonSetRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  Set(
    argument: _suki_pb_cache_SetRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Set(
    argument: _suki_pb_cache_SetRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Set(
    argument: _suki_pb_cache_SetRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Set(
    argument: _suki_pb_cache_SetRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  set(
    argument: _suki_pb_cache_SetRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  set(
    argument: _suki_pb_cache_SetRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  set(
    argument: _suki_pb_cache_SetRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  set(
    argument: _suki_pb_cache_SetRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
}

export interface CacheServiceHandlers extends grpc.UntypedServiceImplementation {
  Delete: grpc.handleUnaryCall<_suki_pb_cache_DeleteRequest__Output, _google_protobuf_Empty>;

  FlushStore: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _google_protobuf_Empty>;

  Get: grpc.handleUnaryCall<_suki_pb_cache_GetRequest__Output, _suki_pb_cache_GetResponse>;

  JSONGet: grpc.handleUnaryCall<_suki_pb_cache_JsonGetRequest__Output, _suki_pb_cache_JsonGetResponse>;

  JSONSet: grpc.handleUnaryCall<_suki_pb_cache_JsonSetRequest__Output, _google_protobuf_Empty>;

  Set: grpc.handleUnaryCall<_suki_pb_cache_SetRequest__Output, _google_protobuf_Empty>;
}

export interface CacheServiceDefinition extends grpc.ServiceDefinition {
  Delete: MethodDefinition<
    _suki_pb_cache_DeleteRequest,
    _google_protobuf_Empty,
    _suki_pb_cache_DeleteRequest__Output,
    _google_protobuf_Empty__Output
  >;
  FlushStore: MethodDefinition<
    _google_protobuf_Empty,
    _google_protobuf_Empty,
    _google_protobuf_Empty__Output,
    _google_protobuf_Empty__Output
  >;
  Get: MethodDefinition<
    _suki_pb_cache_GetRequest,
    _suki_pb_cache_GetResponse,
    _suki_pb_cache_GetRequest__Output,
    _suki_pb_cache_GetResponse__Output
  >;
  JSONGet: MethodDefinition<
    _suki_pb_cache_JsonGetRequest,
    _suki_pb_cache_JsonGetResponse,
    _suki_pb_cache_JsonGetRequest__Output,
    _suki_pb_cache_JsonGetResponse__Output
  >;
  JSONSet: MethodDefinition<
    _suki_pb_cache_JsonSetRequest,
    _google_protobuf_Empty,
    _suki_pb_cache_JsonSetRequest__Output,
    _google_protobuf_Empty__Output
  >;
  Set: MethodDefinition<
    _suki_pb_cache_SetRequest,
    _google_protobuf_Empty,
    _suki_pb_cache_SetRequest__Output,
    _google_protobuf_Empty__Output
  >;
}
