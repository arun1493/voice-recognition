// Original file: node_modules/protobufs/src/learningmotors/pb/emrnotes/emrnotes.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output
} from "../../../google/protobuf/Empty";
import type {
  RefreshEMRNotesRequest as _learningmotors_pb_emrnotes_RefreshEMRNotesRequest,
  RefreshEMRNotesRequest__Output as _learningmotors_pb_emrnotes_RefreshEMRNotesRequest__Output
} from "../../../learningmotors/pb/emrnotes/RefreshEMRNotesRequest";

export interface EMRNotesClient extends grpc.Client {
  RefreshEMRNotes(
    argument: _learningmotors_pb_emrnotes_RefreshEMRNotesRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  RefreshEMRNotes(
    argument: _learningmotors_pb_emrnotes_RefreshEMRNotesRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  RefreshEMRNotes(
    argument: _learningmotors_pb_emrnotes_RefreshEMRNotesRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  RefreshEMRNotes(
    argument: _learningmotors_pb_emrnotes_RefreshEMRNotesRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  refreshEmrNotes(
    argument: _learningmotors_pb_emrnotes_RefreshEMRNotesRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  refreshEmrNotes(
    argument: _learningmotors_pb_emrnotes_RefreshEMRNotesRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  refreshEmrNotes(
    argument: _learningmotors_pb_emrnotes_RefreshEMRNotesRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  refreshEmrNotes(
    argument: _learningmotors_pb_emrnotes_RefreshEMRNotesRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
}

export interface EMRNotesHandlers extends grpc.UntypedServiceImplementation {
  RefreshEMRNotes: grpc.handleUnaryCall<
    _learningmotors_pb_emrnotes_RefreshEMRNotesRequest__Output,
    _google_protobuf_Empty
  >;
}

export interface EMRNotesDefinition extends grpc.ServiceDefinition {
  RefreshEMRNotes: MethodDefinition<
    _learningmotors_pb_emrnotes_RefreshEMRNotesRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_emrnotes_RefreshEMRNotesRequest__Output,
    _google_protobuf_Empty__Output
  >;
}
