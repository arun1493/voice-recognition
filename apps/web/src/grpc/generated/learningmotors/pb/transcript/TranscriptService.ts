// Original file: node_modules/protobufs/src/learningmotors/pb/transcript/transcript.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output
} from "../../../google/protobuf/Empty";
import type {
  ExportNoteAudioRequest as _learningmotors_pb_transcript_ExportNoteAudioRequest,
  ExportNoteAudioRequest__Output as _learningmotors_pb_transcript_ExportNoteAudioRequest__Output
} from "../../../learningmotors/pb/transcript/ExportNoteAudioRequest";
import type {
  GetSessionDetailsRequest as _learningmotors_pb_transcript_GetSessionDetailsRequest,
  GetSessionDetailsRequest__Output as _learningmotors_pb_transcript_GetSessionDetailsRequest__Output
} from "../../../learningmotors/pb/transcript/GetSessionDetailsRequest";
import type {
  GetSessionDetailsResponse as _learningmotors_pb_transcript_GetSessionDetailsResponse,
  GetSessionDetailsResponse__Output as _learningmotors_pb_transcript_GetSessionDetailsResponse__Output
} from "../../../learningmotors/pb/transcript/GetSessionDetailsResponse";

export interface TranscriptServiceClient extends grpc.Client {
  ExportNoteAudio(
    argument: _learningmotors_pb_transcript_ExportNoteAudioRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  ExportNoteAudio(
    argument: _learningmotors_pb_transcript_ExportNoteAudioRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  ExportNoteAudio(
    argument: _learningmotors_pb_transcript_ExportNoteAudioRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  ExportNoteAudio(
    argument: _learningmotors_pb_transcript_ExportNoteAudioRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  exportNoteAudio(
    argument: _learningmotors_pb_transcript_ExportNoteAudioRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  exportNoteAudio(
    argument: _learningmotors_pb_transcript_ExportNoteAudioRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  exportNoteAudio(
    argument: _learningmotors_pb_transcript_ExportNoteAudioRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  exportNoteAudio(
    argument: _learningmotors_pb_transcript_ExportNoteAudioRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  GetSessionDetails(
    argument: _learningmotors_pb_transcript_GetSessionDetailsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_transcript_GetSessionDetailsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetSessionDetails(
    argument: _learningmotors_pb_transcript_GetSessionDetailsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_transcript_GetSessionDetailsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetSessionDetails(
    argument: _learningmotors_pb_transcript_GetSessionDetailsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_transcript_GetSessionDetailsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetSessionDetails(
    argument: _learningmotors_pb_transcript_GetSessionDetailsRequest,
    callback: grpc.requestCallback<_learningmotors_pb_transcript_GetSessionDetailsResponse__Output>
  ): grpc.ClientUnaryCall;
  getSessionDetails(
    argument: _learningmotors_pb_transcript_GetSessionDetailsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_transcript_GetSessionDetailsResponse__Output>
  ): grpc.ClientUnaryCall;
  getSessionDetails(
    argument: _learningmotors_pb_transcript_GetSessionDetailsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_transcript_GetSessionDetailsResponse__Output>
  ): grpc.ClientUnaryCall;
  getSessionDetails(
    argument: _learningmotors_pb_transcript_GetSessionDetailsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_transcript_GetSessionDetailsResponse__Output>
  ): grpc.ClientUnaryCall;
  getSessionDetails(
    argument: _learningmotors_pb_transcript_GetSessionDetailsRequest,
    callback: grpc.requestCallback<_learningmotors_pb_transcript_GetSessionDetailsResponse__Output>
  ): grpc.ClientUnaryCall;
}

export interface TranscriptServiceHandlers extends grpc.UntypedServiceImplementation {
  ExportNoteAudio: grpc.handleUnaryCall<
    _learningmotors_pb_transcript_ExportNoteAudioRequest__Output,
    _google_protobuf_Empty
  >;

  GetSessionDetails: grpc.handleUnaryCall<
    _learningmotors_pb_transcript_GetSessionDetailsRequest__Output,
    _learningmotors_pb_transcript_GetSessionDetailsResponse
  >;
}

export interface TranscriptServiceDefinition extends grpc.ServiceDefinition {
  ExportNoteAudio: MethodDefinition<
    _learningmotors_pb_transcript_ExportNoteAudioRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_transcript_ExportNoteAudioRequest__Output,
    _google_protobuf_Empty__Output
  >;
  GetSessionDetails: MethodDefinition<
    _learningmotors_pb_transcript_GetSessionDetailsRequest,
    _learningmotors_pb_transcript_GetSessionDetailsResponse,
    _learningmotors_pb_transcript_GetSessionDetailsRequest__Output,
    _learningmotors_pb_transcript_GetSessionDetailsResponse__Output
  >;
}
