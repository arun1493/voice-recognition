// Original file: node_modules/protobufs/src/suki/pb/payattention/payattention.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  AmbientNoteRequest as _suki_pb_payattention_AmbientNoteRequest,
  AmbientNoteRequest__Output as _suki_pb_payattention_AmbientNoteRequest__Output
} from "../../../suki/pb/payattention/AmbientNoteRequest";
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output
} from "../../../google/protobuf/Empty";

export interface PayAttentionClient extends grpc.Client {
  CreateAmbientNote(
    argument: _suki_pb_payattention_AmbientNoteRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  CreateAmbientNote(
    argument: _suki_pb_payattention_AmbientNoteRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  CreateAmbientNote(
    argument: _suki_pb_payattention_AmbientNoteRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  CreateAmbientNote(
    argument: _suki_pb_payattention_AmbientNoteRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  createAmbientNote(
    argument: _suki_pb_payattention_AmbientNoteRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  createAmbientNote(
    argument: _suki_pb_payattention_AmbientNoteRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  createAmbientNote(
    argument: _suki_pb_payattention_AmbientNoteRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  createAmbientNote(
    argument: _suki_pb_payattention_AmbientNoteRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
}

export interface PayAttentionHandlers extends grpc.UntypedServiceImplementation {
  CreateAmbientNote: grpc.handleUnaryCall<_suki_pb_payattention_AmbientNoteRequest__Output, _google_protobuf_Empty>;
}

export interface PayAttentionDefinition extends grpc.ServiceDefinition {
  CreateAmbientNote: MethodDefinition<
    _suki_pb_payattention_AmbientNoteRequest,
    _google_protobuf_Empty,
    _suki_pb_payattention_AmbientNoteRequest__Output,
    _google_protobuf_Empty__Output
  >;
}
