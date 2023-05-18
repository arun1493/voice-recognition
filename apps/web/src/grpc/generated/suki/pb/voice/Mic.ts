// Original file: node_modules/protobufs/src/suki/pb/voice/mic.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output
} from "../../../google/protobuf/Empty";
import type {
  GetTargetResponse as _suki_pb_voice_GetTargetResponse,
  GetTargetResponse__Output as _suki_pb_voice_GetTargetResponse__Output
} from "../../../suki/pb/voice/GetTargetResponse";
import type {
  MicRequest as _suki_pb_voice_MicRequest,
  MicRequest__Output as _suki_pb_voice_MicRequest__Output
} from "../../../suki/pb/voice/MicRequest";
import type {
  MicResponse as _suki_pb_voice_MicResponse,
  MicResponse__Output as _suki_pb_voice_MicResponse__Output
} from "../../../suki/pb/voice/MicResponse";
import type {
  NoteType as _suki_pb_voice_NoteType,
  NoteType__Output as _suki_pb_voice_NoteType__Output
} from "../../../suki/pb/voice/NoteType";

export interface MicClient extends grpc.Client {
  AudioStream(
    metadata: grpc.Metadata,
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<_suki_pb_voice_MicRequest, _suki_pb_voice_MicResponse__Output>;
  AudioStream(
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<_suki_pb_voice_MicRequest, _suki_pb_voice_MicResponse__Output>;
  audioStream(
    metadata: grpc.Metadata,
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<_suki_pb_voice_MicRequest, _suki_pb_voice_MicResponse__Output>;
  audioStream(
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<_suki_pb_voice_MicRequest, _suki_pb_voice_MicResponse__Output>;

  GetTarget(
    argument: _google_protobuf_Empty,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_voice_GetTargetResponse__Output>
  ): grpc.ClientUnaryCall;
  GetTarget(
    argument: _google_protobuf_Empty,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_voice_GetTargetResponse__Output>
  ): grpc.ClientUnaryCall;
  GetTarget(
    argument: _google_protobuf_Empty,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_voice_GetTargetResponse__Output>
  ): grpc.ClientUnaryCall;
  GetTarget(
    argument: _google_protobuf_Empty,
    callback: grpc.requestCallback<_suki_pb_voice_GetTargetResponse__Output>
  ): grpc.ClientUnaryCall;
  getTarget(
    argument: _google_protobuf_Empty,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_voice_GetTargetResponse__Output>
  ): grpc.ClientUnaryCall;
  getTarget(
    argument: _google_protobuf_Empty,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_voice_GetTargetResponse__Output>
  ): grpc.ClientUnaryCall;
  getTarget(
    argument: _google_protobuf_Empty,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_voice_GetTargetResponse__Output>
  ): grpc.ClientUnaryCall;
  getTarget(
    argument: _google_protobuf_Empty,
    callback: grpc.requestCallback<_suki_pb_voice_GetTargetResponse__Output>
  ): grpc.ClientUnaryCall;

  Mic(
    metadata: grpc.Metadata,
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<_suki_pb_voice_MicRequest, _suki_pb_voice_MicResponse__Output>;
  Mic(
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<_suki_pb_voice_MicRequest, _suki_pb_voice_MicResponse__Output>;
  mic(
    metadata: grpc.Metadata,
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<_suki_pb_voice_MicRequest, _suki_pb_voice_MicResponse__Output>;
  mic(
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<_suki_pb_voice_MicRequest, _suki_pb_voice_MicResponse__Output>;

  SendNoteType(
    argument: _suki_pb_voice_NoteType,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  SendNoteType(
    argument: _suki_pb_voice_NoteType,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  SendNoteType(
    argument: _suki_pb_voice_NoteType,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  SendNoteType(
    argument: _suki_pb_voice_NoteType,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  sendNoteType(
    argument: _suki_pb_voice_NoteType,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  sendNoteType(
    argument: _suki_pb_voice_NoteType,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  sendNoteType(
    argument: _suki_pb_voice_NoteType,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  sendNoteType(
    argument: _suki_pb_voice_NoteType,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
}

export interface MicHandlers extends grpc.UntypedServiceImplementation {
  AudioStream: grpc.handleBidiStreamingCall<_suki_pb_voice_MicRequest__Output, _suki_pb_voice_MicResponse>;

  GetTarget: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _suki_pb_voice_GetTargetResponse>;

  Mic: grpc.handleBidiStreamingCall<_suki_pb_voice_MicRequest__Output, _suki_pb_voice_MicResponse>;

  SendNoteType: grpc.handleUnaryCall<_suki_pb_voice_NoteType__Output, _google_protobuf_Empty>;
}

export interface MicDefinition extends grpc.ServiceDefinition {
  AudioStream: MethodDefinition<
    _suki_pb_voice_MicRequest,
    _suki_pb_voice_MicResponse,
    _suki_pb_voice_MicRequest__Output,
    _suki_pb_voice_MicResponse__Output
  >;
  GetTarget: MethodDefinition<
    _google_protobuf_Empty,
    _suki_pb_voice_GetTargetResponse,
    _google_protobuf_Empty__Output,
    _suki_pb_voice_GetTargetResponse__Output
  >;
  Mic: MethodDefinition<
    _suki_pb_voice_MicRequest,
    _suki_pb_voice_MicResponse,
    _suki_pb_voice_MicRequest__Output,
    _suki_pb_voice_MicResponse__Output
  >;
  SendNoteType: MethodDefinition<
    _suki_pb_voice_NoteType,
    _google_protobuf_Empty,
    _suki_pb_voice_NoteType__Output,
    _google_protobuf_Empty__Output
  >;
}
