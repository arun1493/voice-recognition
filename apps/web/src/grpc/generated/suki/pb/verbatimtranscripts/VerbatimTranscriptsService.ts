// Original file: node_modules/protobufs/src/suki/pb/verbatimtranscripts/verbatimtranscripts.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output
} from "../../../google/protobuf/Empty";
import type {
  ExportAllRequest as _suki_pb_ml_ExportAllRequest,
  ExportAllRequest__Output as _suki_pb_ml_ExportAllRequest__Output
} from "../../../suki/pb/ml/ExportAllRequest";
import type {
  ExportAllResponse as _suki_pb_ml_ExportAllResponse,
  ExportAllResponse__Output as _suki_pb_ml_ExportAllResponse__Output
} from "../../../suki/pb/ml/ExportAllResponse";
import type {
  GetNoteForTranscriptionRequest as _suki_pb_verbatimtranscripts_GetNoteForTranscriptionRequest,
  GetNoteForTranscriptionRequest__Output as _suki_pb_verbatimtranscripts_GetNoteForTranscriptionRequest__Output
} from "../../../suki/pb/verbatimtranscripts/GetNoteForTranscriptionRequest";
import type {
  GetNoteForTranscriptionResponse as _suki_pb_verbatimtranscripts_GetNoteForTranscriptionResponse,
  GetNoteForTranscriptionResponse__Output as _suki_pb_verbatimtranscripts_GetNoteForTranscriptionResponse__Output
} from "../../../suki/pb/verbatimtranscripts/GetNoteForTranscriptionResponse";
import type {
  SubmitNoteTranscriptsRequest as _suki_pb_verbatimtranscripts_SubmitNoteTranscriptsRequest,
  SubmitNoteTranscriptsRequest__Output as _suki_pb_verbatimtranscripts_SubmitNoteTranscriptsRequest__Output
} from "../../../suki/pb/verbatimtranscripts/SubmitNoteTranscriptsRequest";

export interface VerbatimTranscriptsServiceClient extends grpc.Client {
  ExportAll(
    argument: _suki_pb_ml_ExportAllRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ml_ExportAllResponse__Output>
  ): grpc.ClientUnaryCall;
  ExportAll(
    argument: _suki_pb_ml_ExportAllRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ml_ExportAllResponse__Output>
  ): grpc.ClientUnaryCall;
  ExportAll(
    argument: _suki_pb_ml_ExportAllRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ml_ExportAllResponse__Output>
  ): grpc.ClientUnaryCall;
  ExportAll(
    argument: _suki_pb_ml_ExportAllRequest,
    callback: grpc.requestCallback<_suki_pb_ml_ExportAllResponse__Output>
  ): grpc.ClientUnaryCall;
  exportAll(
    argument: _suki_pb_ml_ExportAllRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ml_ExportAllResponse__Output>
  ): grpc.ClientUnaryCall;
  exportAll(
    argument: _suki_pb_ml_ExportAllRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ml_ExportAllResponse__Output>
  ): grpc.ClientUnaryCall;
  exportAll(
    argument: _suki_pb_ml_ExportAllRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ml_ExportAllResponse__Output>
  ): grpc.ClientUnaryCall;
  exportAll(
    argument: _suki_pb_ml_ExportAllRequest,
    callback: grpc.requestCallback<_suki_pb_ml_ExportAllResponse__Output>
  ): grpc.ClientUnaryCall;

  GetNoteForTranscription(
    argument: _suki_pb_verbatimtranscripts_GetNoteForTranscriptionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_verbatimtranscripts_GetNoteForTranscriptionResponse__Output>
  ): grpc.ClientUnaryCall;
  GetNoteForTranscription(
    argument: _suki_pb_verbatimtranscripts_GetNoteForTranscriptionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_verbatimtranscripts_GetNoteForTranscriptionResponse__Output>
  ): grpc.ClientUnaryCall;
  GetNoteForTranscription(
    argument: _suki_pb_verbatimtranscripts_GetNoteForTranscriptionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_verbatimtranscripts_GetNoteForTranscriptionResponse__Output>
  ): grpc.ClientUnaryCall;
  GetNoteForTranscription(
    argument: _suki_pb_verbatimtranscripts_GetNoteForTranscriptionRequest,
    callback: grpc.requestCallback<_suki_pb_verbatimtranscripts_GetNoteForTranscriptionResponse__Output>
  ): grpc.ClientUnaryCall;
  getNoteForTranscription(
    argument: _suki_pb_verbatimtranscripts_GetNoteForTranscriptionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_verbatimtranscripts_GetNoteForTranscriptionResponse__Output>
  ): grpc.ClientUnaryCall;
  getNoteForTranscription(
    argument: _suki_pb_verbatimtranscripts_GetNoteForTranscriptionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_verbatimtranscripts_GetNoteForTranscriptionResponse__Output>
  ): grpc.ClientUnaryCall;
  getNoteForTranscription(
    argument: _suki_pb_verbatimtranscripts_GetNoteForTranscriptionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_verbatimtranscripts_GetNoteForTranscriptionResponse__Output>
  ): grpc.ClientUnaryCall;
  getNoteForTranscription(
    argument: _suki_pb_verbatimtranscripts_GetNoteForTranscriptionRequest,
    callback: grpc.requestCallback<_suki_pb_verbatimtranscripts_GetNoteForTranscriptionResponse__Output>
  ): grpc.ClientUnaryCall;

  SubmitNoteTranscripts(
    argument: _suki_pb_verbatimtranscripts_SubmitNoteTranscriptsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  SubmitNoteTranscripts(
    argument: _suki_pb_verbatimtranscripts_SubmitNoteTranscriptsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  SubmitNoteTranscripts(
    argument: _suki_pb_verbatimtranscripts_SubmitNoteTranscriptsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  SubmitNoteTranscripts(
    argument: _suki_pb_verbatimtranscripts_SubmitNoteTranscriptsRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  submitNoteTranscripts(
    argument: _suki_pb_verbatimtranscripts_SubmitNoteTranscriptsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  submitNoteTranscripts(
    argument: _suki_pb_verbatimtranscripts_SubmitNoteTranscriptsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  submitNoteTranscripts(
    argument: _suki_pb_verbatimtranscripts_SubmitNoteTranscriptsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  submitNoteTranscripts(
    argument: _suki_pb_verbatimtranscripts_SubmitNoteTranscriptsRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
}

export interface VerbatimTranscriptsServiceHandlers extends grpc.UntypedServiceImplementation {
  ExportAll: grpc.handleUnaryCall<_suki_pb_ml_ExportAllRequest__Output, _suki_pb_ml_ExportAllResponse>;

  GetNoteForTranscription: grpc.handleUnaryCall<
    _suki_pb_verbatimtranscripts_GetNoteForTranscriptionRequest__Output,
    _suki_pb_verbatimtranscripts_GetNoteForTranscriptionResponse
  >;

  SubmitNoteTranscripts: grpc.handleUnaryCall<
    _suki_pb_verbatimtranscripts_SubmitNoteTranscriptsRequest__Output,
    _google_protobuf_Empty
  >;
}

export interface VerbatimTranscriptsServiceDefinition extends grpc.ServiceDefinition {
  ExportAll: MethodDefinition<
    _suki_pb_ml_ExportAllRequest,
    _suki_pb_ml_ExportAllResponse,
    _suki_pb_ml_ExportAllRequest__Output,
    _suki_pb_ml_ExportAllResponse__Output
  >;
  GetNoteForTranscription: MethodDefinition<
    _suki_pb_verbatimtranscripts_GetNoteForTranscriptionRequest,
    _suki_pb_verbatimtranscripts_GetNoteForTranscriptionResponse,
    _suki_pb_verbatimtranscripts_GetNoteForTranscriptionRequest__Output,
    _suki_pb_verbatimtranscripts_GetNoteForTranscriptionResponse__Output
  >;
  SubmitNoteTranscripts: MethodDefinition<
    _suki_pb_verbatimtranscripts_SubmitNoteTranscriptsRequest,
    _google_protobuf_Empty,
    _suki_pb_verbatimtranscripts_SubmitNoteTranscriptsRequest__Output,
    _google_protobuf_Empty__Output
  >;
}
