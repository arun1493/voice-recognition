// Original file: node_modules/protobufs/src/learningmotors/pb/patientnotes/patientnotes.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output
} from "../../../google/protobuf/Empty";
import type {
  ExportNotesAsJsonRequest as _learningmotors_pb_patientnotes_ExportNotesAsJsonRequest,
  ExportNotesAsJsonRequest__Output as _learningmotors_pb_patientnotes_ExportNotesAsJsonRequest__Output
} from "../../../learningmotors/pb/patientnotes/ExportNotesAsJsonRequest";
import type {
  ExportRawNoteAudioRequest as _learningmotors_pb_patientnotes_ExportRawNoteAudioRequest,
  ExportRawNoteAudioRequest__Output as _learningmotors_pb_patientnotes_ExportRawNoteAudioRequest__Output
} from "../../../learningmotors/pb/patientnotes/ExportRawNoteAudioRequest";
import type {
  ExportRawTranscriptsRequest as _learningmotors_pb_patientnotes_ExportRawTranscriptsRequest,
  ExportRawTranscriptsRequest__Output as _learningmotors_pb_patientnotes_ExportRawTranscriptsRequest__Output
} from "../../../learningmotors/pb/patientnotes/ExportRawTranscriptsRequest";
import type {
  ExportStuffForSudheerRequest as _learningmotors_pb_patientnotes_ExportStuffForSudheerRequest,
  ExportStuffForSudheerRequest__Output as _learningmotors_pb_patientnotes_ExportStuffForSudheerRequest__Output
} from "../../../learningmotors/pb/patientnotes/ExportStuffForSudheerRequest";
import type {
  GetForVerbatimRequest as _learningmotors_pb_patientnotes_GetForVerbatimRequest,
  GetForVerbatimRequest__Output as _learningmotors_pb_patientnotes_GetForVerbatimRequest__Output
} from "../../../learningmotors/pb/patientnotes/GetForVerbatimRequest";
import type {
  GetRequest as _learningmotors_pb_patientnotes_GetRequest,
  GetRequest__Output as _learningmotors_pb_patientnotes_GetRequest__Output
} from "../../../learningmotors/pb/patientnotes/GetRequest";
import type {
  GetResponse as _learningmotors_pb_patientnotes_GetResponse,
  GetResponse__Output as _learningmotors_pb_patientnotes_GetResponse__Output
} from "../../../learningmotors/pb/patientnotes/GetResponse";
import type {
  GetVersionedRequest as _learningmotors_pb_patientnotes_GetVersionedRequest,
  GetVersionedRequest__Output as _learningmotors_pb_patientnotes_GetVersionedRequest__Output
} from "../../../learningmotors/pb/patientnotes/GetVersionedRequest";
import type {
  GetVersionedResponse as _learningmotors_pb_patientnotes_GetVersionedResponse,
  GetVersionedResponse__Output as _learningmotors_pb_patientnotes_GetVersionedResponse__Output
} from "../../../learningmotors/pb/patientnotes/GetVersionedResponse";
import type {
  MarkNoteTranscribedRequest as _learningmotors_pb_patientnotes_MarkNoteTranscribedRequest,
  MarkNoteTranscribedRequest__Output as _learningmotors_pb_patientnotes_MarkNoteTranscribedRequest__Output
} from "../../../learningmotors/pb/patientnotes/MarkNoteTranscribedRequest";
import type {
  UpsertRequest as _learningmotors_pb_patientnotes_UpsertRequest,
  UpsertRequest__Output as _learningmotors_pb_patientnotes_UpsertRequest__Output
} from "../../../learningmotors/pb/patientnotes/UpsertRequest";
import type {
  UpsertResponse as _learningmotors_pb_patientnotes_UpsertResponse,
  UpsertResponse__Output as _learningmotors_pb_patientnotes_UpsertResponse__Output
} from "../../../learningmotors/pb/patientnotes/UpsertResponse";

export interface PatientNotesServiceClient extends grpc.Client {
  ExportNotesAsJson(
    argument: _learningmotors_pb_patientnotes_ExportNotesAsJsonRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  ExportNotesAsJson(
    argument: _learningmotors_pb_patientnotes_ExportNotesAsJsonRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  ExportNotesAsJson(
    argument: _learningmotors_pb_patientnotes_ExportNotesAsJsonRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  ExportNotesAsJson(
    argument: _learningmotors_pb_patientnotes_ExportNotesAsJsonRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  exportNotesAsJson(
    argument: _learningmotors_pb_patientnotes_ExportNotesAsJsonRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  exportNotesAsJson(
    argument: _learningmotors_pb_patientnotes_ExportNotesAsJsonRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  exportNotesAsJson(
    argument: _learningmotors_pb_patientnotes_ExportNotesAsJsonRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  exportNotesAsJson(
    argument: _learningmotors_pb_patientnotes_ExportNotesAsJsonRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  ExportRawNoteAudio(
    argument: _learningmotors_pb_patientnotes_ExportRawNoteAudioRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  ExportRawNoteAudio(
    argument: _learningmotors_pb_patientnotes_ExportRawNoteAudioRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  ExportRawNoteAudio(
    argument: _learningmotors_pb_patientnotes_ExportRawNoteAudioRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  ExportRawNoteAudio(
    argument: _learningmotors_pb_patientnotes_ExportRawNoteAudioRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  exportRawNoteAudio(
    argument: _learningmotors_pb_patientnotes_ExportRawNoteAudioRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  exportRawNoteAudio(
    argument: _learningmotors_pb_patientnotes_ExportRawNoteAudioRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  exportRawNoteAudio(
    argument: _learningmotors_pb_patientnotes_ExportRawNoteAudioRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  exportRawNoteAudio(
    argument: _learningmotors_pb_patientnotes_ExportRawNoteAudioRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  ExportRawNoteTranscripts(
    argument: _learningmotors_pb_patientnotes_ExportRawTranscriptsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  ExportRawNoteTranscripts(
    argument: _learningmotors_pb_patientnotes_ExportRawTranscriptsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  ExportRawNoteTranscripts(
    argument: _learningmotors_pb_patientnotes_ExportRawTranscriptsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  ExportRawNoteTranscripts(
    argument: _learningmotors_pb_patientnotes_ExportRawTranscriptsRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  exportRawNoteTranscripts(
    argument: _learningmotors_pb_patientnotes_ExportRawTranscriptsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  exportRawNoteTranscripts(
    argument: _learningmotors_pb_patientnotes_ExportRawTranscriptsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  exportRawNoteTranscripts(
    argument: _learningmotors_pb_patientnotes_ExportRawTranscriptsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  exportRawNoteTranscripts(
    argument: _learningmotors_pb_patientnotes_ExportRawTranscriptsRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  ExportStuffForSudheer(
    argument: _learningmotors_pb_patientnotes_ExportStuffForSudheerRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  ExportStuffForSudheer(
    argument: _learningmotors_pb_patientnotes_ExportStuffForSudheerRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  ExportStuffForSudheer(
    argument: _learningmotors_pb_patientnotes_ExportStuffForSudheerRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  ExportStuffForSudheer(
    argument: _learningmotors_pb_patientnotes_ExportStuffForSudheerRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  exportStuffForSudheer(
    argument: _learningmotors_pb_patientnotes_ExportStuffForSudheerRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  exportStuffForSudheer(
    argument: _learningmotors_pb_patientnotes_ExportStuffForSudheerRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  exportStuffForSudheer(
    argument: _learningmotors_pb_patientnotes_ExportStuffForSudheerRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  exportStuffForSudheer(
    argument: _learningmotors_pb_patientnotes_ExportStuffForSudheerRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  Get(
    argument: _learningmotors_pb_patientnotes_GetRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_patientnotes_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  Get(
    argument: _learningmotors_pb_patientnotes_GetRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_patientnotes_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  Get(
    argument: _learningmotors_pb_patientnotes_GetRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_patientnotes_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  Get(
    argument: _learningmotors_pb_patientnotes_GetRequest,
    callback: grpc.requestCallback<_learningmotors_pb_patientnotes_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_patientnotes_GetRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_patientnotes_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_patientnotes_GetRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_patientnotes_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_patientnotes_GetRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_patientnotes_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_patientnotes_GetRequest,
    callback: grpc.requestCallback<_learningmotors_pb_patientnotes_GetResponse__Output>
  ): grpc.ClientUnaryCall;

  GetNotesForVerbatimTranscription(
    argument: _learningmotors_pb_patientnotes_GetForVerbatimRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_patientnotes_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  GetNotesForVerbatimTranscription(
    argument: _learningmotors_pb_patientnotes_GetForVerbatimRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_patientnotes_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  GetNotesForVerbatimTranscription(
    argument: _learningmotors_pb_patientnotes_GetForVerbatimRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_patientnotes_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  GetNotesForVerbatimTranscription(
    argument: _learningmotors_pb_patientnotes_GetForVerbatimRequest,
    callback: grpc.requestCallback<_learningmotors_pb_patientnotes_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  getNotesForVerbatimTranscription(
    argument: _learningmotors_pb_patientnotes_GetForVerbatimRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_patientnotes_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  getNotesForVerbatimTranscription(
    argument: _learningmotors_pb_patientnotes_GetForVerbatimRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_patientnotes_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  getNotesForVerbatimTranscription(
    argument: _learningmotors_pb_patientnotes_GetForVerbatimRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_patientnotes_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  getNotesForVerbatimTranscription(
    argument: _learningmotors_pb_patientnotes_GetForVerbatimRequest,
    callback: grpc.requestCallback<_learningmotors_pb_patientnotes_GetResponse__Output>
  ): grpc.ClientUnaryCall;

  GetVersioned(
    argument: _learningmotors_pb_patientnotes_GetVersionedRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_patientnotes_GetVersionedResponse__Output>
  ): grpc.ClientUnaryCall;
  GetVersioned(
    argument: _learningmotors_pb_patientnotes_GetVersionedRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_patientnotes_GetVersionedResponse__Output>
  ): grpc.ClientUnaryCall;
  GetVersioned(
    argument: _learningmotors_pb_patientnotes_GetVersionedRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_patientnotes_GetVersionedResponse__Output>
  ): grpc.ClientUnaryCall;
  GetVersioned(
    argument: _learningmotors_pb_patientnotes_GetVersionedRequest,
    callback: grpc.requestCallback<_learningmotors_pb_patientnotes_GetVersionedResponse__Output>
  ): grpc.ClientUnaryCall;
  getVersioned(
    argument: _learningmotors_pb_patientnotes_GetVersionedRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_patientnotes_GetVersionedResponse__Output>
  ): grpc.ClientUnaryCall;
  getVersioned(
    argument: _learningmotors_pb_patientnotes_GetVersionedRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_patientnotes_GetVersionedResponse__Output>
  ): grpc.ClientUnaryCall;
  getVersioned(
    argument: _learningmotors_pb_patientnotes_GetVersionedRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_patientnotes_GetVersionedResponse__Output>
  ): grpc.ClientUnaryCall;
  getVersioned(
    argument: _learningmotors_pb_patientnotes_GetVersionedRequest,
    callback: grpc.requestCallback<_learningmotors_pb_patientnotes_GetVersionedResponse__Output>
  ): grpc.ClientUnaryCall;

  MarkNoteAsVerbatimTranscribed(
    argument: _learningmotors_pb_patientnotes_MarkNoteTranscribedRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  MarkNoteAsVerbatimTranscribed(
    argument: _learningmotors_pb_patientnotes_MarkNoteTranscribedRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  MarkNoteAsVerbatimTranscribed(
    argument: _learningmotors_pb_patientnotes_MarkNoteTranscribedRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  MarkNoteAsVerbatimTranscribed(
    argument: _learningmotors_pb_patientnotes_MarkNoteTranscribedRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  markNoteAsVerbatimTranscribed(
    argument: _learningmotors_pb_patientnotes_MarkNoteTranscribedRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  markNoteAsVerbatimTranscribed(
    argument: _learningmotors_pb_patientnotes_MarkNoteTranscribedRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  markNoteAsVerbatimTranscribed(
    argument: _learningmotors_pb_patientnotes_MarkNoteTranscribedRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  markNoteAsVerbatimTranscribed(
    argument: _learningmotors_pb_patientnotes_MarkNoteTranscribedRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  Upsert(
    argument: _learningmotors_pb_patientnotes_UpsertRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_patientnotes_UpsertResponse__Output>
  ): grpc.ClientUnaryCall;
  Upsert(
    argument: _learningmotors_pb_patientnotes_UpsertRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_patientnotes_UpsertResponse__Output>
  ): grpc.ClientUnaryCall;
  Upsert(
    argument: _learningmotors_pb_patientnotes_UpsertRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_patientnotes_UpsertResponse__Output>
  ): grpc.ClientUnaryCall;
  Upsert(
    argument: _learningmotors_pb_patientnotes_UpsertRequest,
    callback: grpc.requestCallback<_learningmotors_pb_patientnotes_UpsertResponse__Output>
  ): grpc.ClientUnaryCall;
  upsert(
    argument: _learningmotors_pb_patientnotes_UpsertRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_patientnotes_UpsertResponse__Output>
  ): grpc.ClientUnaryCall;
  upsert(
    argument: _learningmotors_pb_patientnotes_UpsertRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_patientnotes_UpsertResponse__Output>
  ): grpc.ClientUnaryCall;
  upsert(
    argument: _learningmotors_pb_patientnotes_UpsertRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_patientnotes_UpsertResponse__Output>
  ): grpc.ClientUnaryCall;
  upsert(
    argument: _learningmotors_pb_patientnotes_UpsertRequest,
    callback: grpc.requestCallback<_learningmotors_pb_patientnotes_UpsertResponse__Output>
  ): grpc.ClientUnaryCall;
}

export interface PatientNotesServiceHandlers extends grpc.UntypedServiceImplementation {
  ExportNotesAsJson: grpc.handleUnaryCall<
    _learningmotors_pb_patientnotes_ExportNotesAsJsonRequest__Output,
    _google_protobuf_Empty
  >;

  ExportRawNoteAudio: grpc.handleUnaryCall<
    _learningmotors_pb_patientnotes_ExportRawNoteAudioRequest__Output,
    _google_protobuf_Empty
  >;

  ExportRawNoteTranscripts: grpc.handleUnaryCall<
    _learningmotors_pb_patientnotes_ExportRawTranscriptsRequest__Output,
    _google_protobuf_Empty
  >;

  ExportStuffForSudheer: grpc.handleUnaryCall<
    _learningmotors_pb_patientnotes_ExportStuffForSudheerRequest__Output,
    _google_protobuf_Empty
  >;

  Get: grpc.handleUnaryCall<
    _learningmotors_pb_patientnotes_GetRequest__Output,
    _learningmotors_pb_patientnotes_GetResponse
  >;

  GetNotesForVerbatimTranscription: grpc.handleUnaryCall<
    _learningmotors_pb_patientnotes_GetForVerbatimRequest__Output,
    _learningmotors_pb_patientnotes_GetResponse
  >;

  GetVersioned: grpc.handleUnaryCall<
    _learningmotors_pb_patientnotes_GetVersionedRequest__Output,
    _learningmotors_pb_patientnotes_GetVersionedResponse
  >;

  MarkNoteAsVerbatimTranscribed: grpc.handleUnaryCall<
    _learningmotors_pb_patientnotes_MarkNoteTranscribedRequest__Output,
    _google_protobuf_Empty
  >;

  Upsert: grpc.handleUnaryCall<
    _learningmotors_pb_patientnotes_UpsertRequest__Output,
    _learningmotors_pb_patientnotes_UpsertResponse
  >;
}

export interface PatientNotesServiceDefinition extends grpc.ServiceDefinition {
  ExportNotesAsJson: MethodDefinition<
    _learningmotors_pb_patientnotes_ExportNotesAsJsonRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_patientnotes_ExportNotesAsJsonRequest__Output,
    _google_protobuf_Empty__Output
  >;
  ExportRawNoteAudio: MethodDefinition<
    _learningmotors_pb_patientnotes_ExportRawNoteAudioRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_patientnotes_ExportRawNoteAudioRequest__Output,
    _google_protobuf_Empty__Output
  >;
  ExportRawNoteTranscripts: MethodDefinition<
    _learningmotors_pb_patientnotes_ExportRawTranscriptsRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_patientnotes_ExportRawTranscriptsRequest__Output,
    _google_protobuf_Empty__Output
  >;
  ExportStuffForSudheer: MethodDefinition<
    _learningmotors_pb_patientnotes_ExportStuffForSudheerRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_patientnotes_ExportStuffForSudheerRequest__Output,
    _google_protobuf_Empty__Output
  >;
  Get: MethodDefinition<
    _learningmotors_pb_patientnotes_GetRequest,
    _learningmotors_pb_patientnotes_GetResponse,
    _learningmotors_pb_patientnotes_GetRequest__Output,
    _learningmotors_pb_patientnotes_GetResponse__Output
  >;
  GetNotesForVerbatimTranscription: MethodDefinition<
    _learningmotors_pb_patientnotes_GetForVerbatimRequest,
    _learningmotors_pb_patientnotes_GetResponse,
    _learningmotors_pb_patientnotes_GetForVerbatimRequest__Output,
    _learningmotors_pb_patientnotes_GetResponse__Output
  >;
  GetVersioned: MethodDefinition<
    _learningmotors_pb_patientnotes_GetVersionedRequest,
    _learningmotors_pb_patientnotes_GetVersionedResponse,
    _learningmotors_pb_patientnotes_GetVersionedRequest__Output,
    _learningmotors_pb_patientnotes_GetVersionedResponse__Output
  >;
  MarkNoteAsVerbatimTranscribed: MethodDefinition<
    _learningmotors_pb_patientnotes_MarkNoteTranscribedRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_patientnotes_MarkNoteTranscribedRequest__Output,
    _google_protobuf_Empty__Output
  >;
  Upsert: MethodDefinition<
    _learningmotors_pb_patientnotes_UpsertRequest,
    _learningmotors_pb_patientnotes_UpsertResponse,
    _learningmotors_pb_patientnotes_UpsertRequest__Output,
    _learningmotors_pb_patientnotes_UpsertResponse__Output
  >;
}
