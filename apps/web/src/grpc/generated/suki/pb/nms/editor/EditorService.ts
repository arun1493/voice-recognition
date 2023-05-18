// Original file: node_modules/protobufs/src/suki/pb/nms/editor/editor.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output
} from "../../../../google/protobuf/Empty";
import type {
  StartNoteEditingRequest as _suki_pb_nms_editor_StartNoteEditingRequest,
  StartNoteEditingRequest__Output as _suki_pb_nms_editor_StartNoteEditingRequest__Output
} from "../../../../suki/pb/nms/editor/StartNoteEditingRequest";

export interface EditorServiceClient extends grpc.Client {
  StartNoteEditing(
    argument: _suki_pb_nms_editor_StartNoteEditingRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  StartNoteEditing(
    argument: _suki_pb_nms_editor_StartNoteEditingRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  StartNoteEditing(
    argument: _suki_pb_nms_editor_StartNoteEditingRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  StartNoteEditing(
    argument: _suki_pb_nms_editor_StartNoteEditingRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  startNoteEditing(
    argument: _suki_pb_nms_editor_StartNoteEditingRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  startNoteEditing(
    argument: _suki_pb_nms_editor_StartNoteEditingRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  startNoteEditing(
    argument: _suki_pb_nms_editor_StartNoteEditingRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  startNoteEditing(
    argument: _suki_pb_nms_editor_StartNoteEditingRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
}

export interface EditorServiceHandlers extends grpc.UntypedServiceImplementation {
  StartNoteEditing: grpc.handleUnaryCall<_suki_pb_nms_editor_StartNoteEditingRequest__Output, _google_protobuf_Empty>;
}

export interface EditorServiceDefinition extends grpc.ServiceDefinition {
  StartNoteEditing: MethodDefinition<
    _suki_pb_nms_editor_StartNoteEditingRequest,
    _google_protobuf_Empty,
    _suki_pb_nms_editor_StartNoteEditingRequest__Output,
    _google_protobuf_Empty__Output
  >;
}
