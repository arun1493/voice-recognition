// Original file: node_modules/protobufs/src/suki/pb/sms/sms.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  CheckIfCompositionIsBeingEditedRequest as _suki_pb_sms_CheckIfCompositionIsBeingEditedRequest,
  CheckIfCompositionIsBeingEditedRequest__Output as _suki_pb_sms_CheckIfCompositionIsBeingEditedRequest__Output
} from "../../../suki/pb/sms/CheckIfCompositionIsBeingEditedRequest";
import type {
  CheckIfCompositionIsBeingEditedResponse as _suki_pb_sms_CheckIfCompositionIsBeingEditedResponse,
  CheckIfCompositionIsBeingEditedResponse__Output as _suki_pb_sms_CheckIfCompositionIsBeingEditedResponse__Output
} from "../../../suki/pb/sms/CheckIfCompositionIsBeingEditedResponse";
import type {
  CreateCompositionRequest as _suki_pb_sms_CreateCompositionRequest,
  CreateCompositionRequest__Output as _suki_pb_sms_CreateCompositionRequest__Output
} from "../../../suki/pb/sms/CreateCompositionRequest";
import type {
  CreateCompositionResponse as _suki_pb_sms_CreateCompositionResponse,
  CreateCompositionResponse__Output as _suki_pb_sms_CreateCompositionResponse__Output
} from "../../../suki/pb/sms/CreateCompositionResponse";
import type {
  DeleteCompositionRequest as _suki_pb_sms_DeleteCompositionRequest,
  DeleteCompositionRequest__Output as _suki_pb_sms_DeleteCompositionRequest__Output
} from "../../../suki/pb/sms/DeleteCompositionRequest";
import type {
  DeleteCompositionResponse as _suki_pb_sms_DeleteCompositionResponse,
  DeleteCompositionResponse__Output as _suki_pb_sms_DeleteCompositionResponse__Output
} from "../../../suki/pb/sms/DeleteCompositionResponse";
import type {
  DeleteSectionRequest as _suki_pb_sms_DeleteSectionRequest,
  DeleteSectionRequest__Output as _suki_pb_sms_DeleteSectionRequest__Output
} from "../../../suki/pb/sms/DeleteSectionRequest";
import type {
  DeleteSectionResponse as _suki_pb_sms_DeleteSectionResponse,
  DeleteSectionResponse__Output as _suki_pb_sms_DeleteSectionResponse__Output
} from "../../../suki/pb/sms/DeleteSectionResponse";
import type {
  GetCompositionNeedsReviewNoScopeRequest as _suki_pb_sms_GetCompositionNeedsReviewNoScopeRequest,
  GetCompositionNeedsReviewNoScopeRequest__Output as _suki_pb_sms_GetCompositionNeedsReviewNoScopeRequest__Output
} from "../../../suki/pb/sms/GetCompositionNeedsReviewNoScopeRequest";
import type {
  GetCompositionNeedsReviewNoScopeResponse as _suki_pb_sms_GetCompositionNeedsReviewNoScopeResponse,
  GetCompositionNeedsReviewNoScopeResponse__Output as _suki_pb_sms_GetCompositionNeedsReviewNoScopeResponse__Output
} from "../../../suki/pb/sms/GetCompositionNeedsReviewNoScopeResponse";
import type {
  GetCompositionNeedsReviewRequest as _suki_pb_sms_GetCompositionNeedsReviewRequest,
  GetCompositionNeedsReviewRequest__Output as _suki_pb_sms_GetCompositionNeedsReviewRequest__Output
} from "../../../suki/pb/sms/GetCompositionNeedsReviewRequest";
import type {
  GetCompositionNeedsReviewResponse as _suki_pb_sms_GetCompositionNeedsReviewResponse,
  GetCompositionNeedsReviewResponse__Output as _suki_pb_sms_GetCompositionNeedsReviewResponse__Output
} from "../../../suki/pb/sms/GetCompositionNeedsReviewResponse";
import type {
  GetCompositionOrNoteRequest as _suki_pb_sms_GetCompositionOrNoteRequest,
  GetCompositionOrNoteRequest__Output as _suki_pb_sms_GetCompositionOrNoteRequest__Output
} from "../../../suki/pb/sms/GetCompositionOrNoteRequest";
import type {
  GetCompositionOrNoteResponse as _suki_pb_sms_GetCompositionOrNoteResponse,
  GetCompositionOrNoteResponse__Output as _suki_pb_sms_GetCompositionOrNoteResponse__Output
} from "../../../suki/pb/sms/GetCompositionOrNoteResponse";
import type {
  GetCompositionRequest as _suki_pb_sms_GetCompositionRequest,
  GetCompositionRequest__Output as _suki_pb_sms_GetCompositionRequest__Output
} from "../../../suki/pb/sms/GetCompositionRequest";
import type {
  GetCompositionResponse as _suki_pb_sms_GetCompositionResponse,
  GetCompositionResponse__Output as _suki_pb_sms_GetCompositionResponse__Output
} from "../../../suki/pb/sms/GetCompositionResponse";
import type {
  GetNoteRequest as _suki_pb_sms_GetNoteRequest,
  GetNoteRequest__Output as _suki_pb_sms_GetNoteRequest__Output
} from "../../../suki/pb/sms/GetNoteRequest";
import type {
  GetNoteResponse as _suki_pb_sms_GetNoteResponse,
  GetNoteResponse__Output as _suki_pb_sms_GetNoteResponse__Output
} from "../../../suki/pb/sms/GetNoteResponse";
import type {
  GetVersionedCompositionRequest as _suki_pb_sms_GetVersionedCompositionRequest,
  GetVersionedCompositionRequest__Output as _suki_pb_sms_GetVersionedCompositionRequest__Output
} from "../../../suki/pb/sms/GetVersionedCompositionRequest";
import type {
  GetVersionedCompositionResponse as _suki_pb_sms_GetVersionedCompositionResponse,
  GetVersionedCompositionResponse__Output as _suki_pb_sms_GetVersionedCompositionResponse__Output
} from "../../../suki/pb/sms/GetVersionedCompositionResponse";
import type {
  GetVersionedNoteRequest as _suki_pb_sms_GetVersionedNoteRequest,
  GetVersionedNoteRequest__Output as _suki_pb_sms_GetVersionedNoteRequest__Output
} from "../../../suki/pb/sms/GetVersionedNoteRequest";
import type {
  GetVersionedNoteResponse as _suki_pb_sms_GetVersionedNoteResponse,
  GetVersionedNoteResponse__Output as _suki_pb_sms_GetVersionedNoteResponse__Output
} from "../../../suki/pb/sms/GetVersionedNoteResponse";
import type {
  InsertAudioSectionTranscriptRequest as _suki_pb_sms_InsertAudioSectionTranscriptRequest,
  InsertAudioSectionTranscriptRequest__Output as _suki_pb_sms_InsertAudioSectionTranscriptRequest__Output
} from "../../../suki/pb/sms/InsertAudioSectionTranscriptRequest";
import type {
  InsertAudioSectionTranscriptResponse as _suki_pb_sms_InsertAudioSectionTranscriptResponse,
  InsertAudioSectionTranscriptResponse__Output as _suki_pb_sms_InsertAudioSectionTranscriptResponse__Output
} from "../../../suki/pb/sms/InsertAudioSectionTranscriptResponse";
import type {
  InsertSubmissionErrorCompositionAsNoteRequest as _suki_pb_sms_InsertSubmissionErrorCompositionAsNoteRequest,
  InsertSubmissionErrorCompositionAsNoteRequest__Output as _suki_pb_sms_InsertSubmissionErrorCompositionAsNoteRequest__Output
} from "../../../suki/pb/sms/InsertSubmissionErrorCompositionAsNoteRequest";
import type {
  InsertSubmissionErrorCompositionAsNoteResponse as _suki_pb_sms_InsertSubmissionErrorCompositionAsNoteResponse,
  InsertSubmissionErrorCompositionAsNoteResponse__Output as _suki_pb_sms_InsertSubmissionErrorCompositionAsNoteResponse__Output
} from "../../../suki/pb/sms/InsertSubmissionErrorCompositionAsNoteResponse";
import type {
  InsertVersionedNoteRequest as _suki_pb_sms_InsertVersionedNoteRequest,
  InsertVersionedNoteRequest__Output as _suki_pb_sms_InsertVersionedNoteRequest__Output
} from "../../../suki/pb/sms/InsertVersionedNoteRequest";
import type {
  InsertVersionedNoteResponse as _suki_pb_sms_InsertVersionedNoteResponse,
  InsertVersionedNoteResponse__Output as _suki_pb_sms_InsertVersionedNoteResponse__Output
} from "../../../suki/pb/sms/InsertVersionedNoteResponse";
import type {
  SetCompositionIsBeingEditedRequest as _suki_pb_sms_SetCompositionIsBeingEditedRequest,
  SetCompositionIsBeingEditedRequest__Output as _suki_pb_sms_SetCompositionIsBeingEditedRequest__Output
} from "../../../suki/pb/sms/SetCompositionIsBeingEditedRequest";
import type {
  SetCompositionIsBeingEditedResponse as _suki_pb_sms_SetCompositionIsBeingEditedResponse,
  SetCompositionIsBeingEditedResponse__Output as _suki_pb_sms_SetCompositionIsBeingEditedResponse__Output
} from "../../../suki/pb/sms/SetCompositionIsBeingEditedResponse";
import type {
  SetCompositionIsNotBeingEditedRequest as _suki_pb_sms_SetCompositionIsNotBeingEditedRequest,
  SetCompositionIsNotBeingEditedRequest__Output as _suki_pb_sms_SetCompositionIsNotBeingEditedRequest__Output
} from "../../../suki/pb/sms/SetCompositionIsNotBeingEditedRequest";
import type {
  SetCompositionIsNotBeingEditedResponse as _suki_pb_sms_SetCompositionIsNotBeingEditedResponse,
  SetCompositionIsNotBeingEditedResponse__Output as _suki_pb_sms_SetCompositionIsNotBeingEditedResponse__Output
} from "../../../suki/pb/sms/SetCompositionIsNotBeingEditedResponse";
import type {
  SubmitCompositionRequest as _suki_pb_sms_SubmitCompositionRequest,
  SubmitCompositionRequest__Output as _suki_pb_sms_SubmitCompositionRequest__Output
} from "../../../suki/pb/sms/SubmitCompositionRequest";
import type {
  SubmitCompositionResponse as _suki_pb_sms_SubmitCompositionResponse,
  SubmitCompositionResponse__Output as _suki_pb_sms_SubmitCompositionResponse__Output
} from "../../../suki/pb/sms/SubmitCompositionResponse";
import type {
  UndoRequest as _suki_pb_sms_UndoRequest,
  UndoRequest__Output as _suki_pb_sms_UndoRequest__Output
} from "../../../suki/pb/sms/UndoRequest";
import type {
  UndoResponse as _suki_pb_sms_UndoResponse,
  UndoResponse__Output as _suki_pb_sms_UndoResponse__Output
} from "../../../suki/pb/sms/UndoResponse";
import type {
  UpdateCompositionAppointmentRequest as _suki_pb_sms_UpdateCompositionAppointmentRequest,
  UpdateCompositionAppointmentRequest__Output as _suki_pb_sms_UpdateCompositionAppointmentRequest__Output
} from "../../../suki/pb/sms/UpdateCompositionAppointmentRequest";
import type {
  UpdateCompositionAppointmentResponse as _suki_pb_sms_UpdateCompositionAppointmentResponse,
  UpdateCompositionAppointmentResponse__Output as _suki_pb_sms_UpdateCompositionAppointmentResponse__Output
} from "../../../suki/pb/sms/UpdateCompositionAppointmentResponse";
import type {
  UpdateCompositionRequest as _suki_pb_sms_UpdateCompositionRequest,
  UpdateCompositionRequest__Output as _suki_pb_sms_UpdateCompositionRequest__Output
} from "../../../suki/pb/sms/UpdateCompositionRequest";
import type {
  UpdateCompositionResponse as _suki_pb_sms_UpdateCompositionResponse,
  UpdateCompositionResponse__Output as _suki_pb_sms_UpdateCompositionResponse__Output
} from "../../../suki/pb/sms/UpdateCompositionResponse";
import type {
  UpdateVersionedNoteRequest as _suki_pb_sms_UpdateVersionedNoteRequest,
  UpdateVersionedNoteRequest__Output as _suki_pb_sms_UpdateVersionedNoteRequest__Output
} from "../../../suki/pb/sms/UpdateVersionedNoteRequest";
import type {
  UpdateVersionedNoteResponse as _suki_pb_sms_UpdateVersionedNoteResponse,
  UpdateVersionedNoteResponse__Output as _suki_pb_sms_UpdateVersionedNoteResponse__Output
} from "../../../suki/pb/sms/UpdateVersionedNoteResponse";

export interface SMSClient extends grpc.Client {
  CheckIfCompositionIsBeingEdited(
    argument: _suki_pb_sms_CheckIfCompositionIsBeingEditedRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_CheckIfCompositionIsBeingEditedResponse__Output>
  ): grpc.ClientUnaryCall;
  CheckIfCompositionIsBeingEdited(
    argument: _suki_pb_sms_CheckIfCompositionIsBeingEditedRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_sms_CheckIfCompositionIsBeingEditedResponse__Output>
  ): grpc.ClientUnaryCall;
  CheckIfCompositionIsBeingEdited(
    argument: _suki_pb_sms_CheckIfCompositionIsBeingEditedRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_CheckIfCompositionIsBeingEditedResponse__Output>
  ): grpc.ClientUnaryCall;
  CheckIfCompositionIsBeingEdited(
    argument: _suki_pb_sms_CheckIfCompositionIsBeingEditedRequest,
    callback: grpc.requestCallback<_suki_pb_sms_CheckIfCompositionIsBeingEditedResponse__Output>
  ): grpc.ClientUnaryCall;
  checkIfCompositionIsBeingEdited(
    argument: _suki_pb_sms_CheckIfCompositionIsBeingEditedRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_CheckIfCompositionIsBeingEditedResponse__Output>
  ): grpc.ClientUnaryCall;
  checkIfCompositionIsBeingEdited(
    argument: _suki_pb_sms_CheckIfCompositionIsBeingEditedRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_sms_CheckIfCompositionIsBeingEditedResponse__Output>
  ): grpc.ClientUnaryCall;
  checkIfCompositionIsBeingEdited(
    argument: _suki_pb_sms_CheckIfCompositionIsBeingEditedRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_CheckIfCompositionIsBeingEditedResponse__Output>
  ): grpc.ClientUnaryCall;
  checkIfCompositionIsBeingEdited(
    argument: _suki_pb_sms_CheckIfCompositionIsBeingEditedRequest,
    callback: grpc.requestCallback<_suki_pb_sms_CheckIfCompositionIsBeingEditedResponse__Output>
  ): grpc.ClientUnaryCall;

  CreateComposition(
    argument: _suki_pb_sms_CreateCompositionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_CreateCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateComposition(
    argument: _suki_pb_sms_CreateCompositionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_sms_CreateCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateComposition(
    argument: _suki_pb_sms_CreateCompositionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_CreateCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateComposition(
    argument: _suki_pb_sms_CreateCompositionRequest,
    callback: grpc.requestCallback<_suki_pb_sms_CreateCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  createComposition(
    argument: _suki_pb_sms_CreateCompositionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_CreateCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  createComposition(
    argument: _suki_pb_sms_CreateCompositionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_sms_CreateCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  createComposition(
    argument: _suki_pb_sms_CreateCompositionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_CreateCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  createComposition(
    argument: _suki_pb_sms_CreateCompositionRequest,
    callback: grpc.requestCallback<_suki_pb_sms_CreateCompositionResponse__Output>
  ): grpc.ClientUnaryCall;

  DeleteComposition(
    argument: _suki_pb_sms_DeleteCompositionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_DeleteCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  DeleteComposition(
    argument: _suki_pb_sms_DeleteCompositionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_sms_DeleteCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  DeleteComposition(
    argument: _suki_pb_sms_DeleteCompositionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_DeleteCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  DeleteComposition(
    argument: _suki_pb_sms_DeleteCompositionRequest,
    callback: grpc.requestCallback<_suki_pb_sms_DeleteCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  deleteComposition(
    argument: _suki_pb_sms_DeleteCompositionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_DeleteCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  deleteComposition(
    argument: _suki_pb_sms_DeleteCompositionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_sms_DeleteCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  deleteComposition(
    argument: _suki_pb_sms_DeleteCompositionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_DeleteCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  deleteComposition(
    argument: _suki_pb_sms_DeleteCompositionRequest,
    callback: grpc.requestCallback<_suki_pb_sms_DeleteCompositionResponse__Output>
  ): grpc.ClientUnaryCall;

  DeleteSection(
    argument: _suki_pb_sms_DeleteSectionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_DeleteSectionResponse__Output>
  ): grpc.ClientUnaryCall;
  DeleteSection(
    argument: _suki_pb_sms_DeleteSectionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_sms_DeleteSectionResponse__Output>
  ): grpc.ClientUnaryCall;
  DeleteSection(
    argument: _suki_pb_sms_DeleteSectionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_DeleteSectionResponse__Output>
  ): grpc.ClientUnaryCall;
  DeleteSection(
    argument: _suki_pb_sms_DeleteSectionRequest,
    callback: grpc.requestCallback<_suki_pb_sms_DeleteSectionResponse__Output>
  ): grpc.ClientUnaryCall;
  deleteSection(
    argument: _suki_pb_sms_DeleteSectionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_DeleteSectionResponse__Output>
  ): grpc.ClientUnaryCall;
  deleteSection(
    argument: _suki_pb_sms_DeleteSectionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_sms_DeleteSectionResponse__Output>
  ): grpc.ClientUnaryCall;
  deleteSection(
    argument: _suki_pb_sms_DeleteSectionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_DeleteSectionResponse__Output>
  ): grpc.ClientUnaryCall;
  deleteSection(
    argument: _suki_pb_sms_DeleteSectionRequest,
    callback: grpc.requestCallback<_suki_pb_sms_DeleteSectionResponse__Output>
  ): grpc.ClientUnaryCall;

  GetComposition(
    argument: _suki_pb_sms_GetCompositionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_GetCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  GetComposition(
    argument: _suki_pb_sms_GetCompositionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_sms_GetCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  GetComposition(
    argument: _suki_pb_sms_GetCompositionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_GetCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  GetComposition(
    argument: _suki_pb_sms_GetCompositionRequest,
    callback: grpc.requestCallback<_suki_pb_sms_GetCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  getComposition(
    argument: _suki_pb_sms_GetCompositionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_GetCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  getComposition(
    argument: _suki_pb_sms_GetCompositionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_sms_GetCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  getComposition(
    argument: _suki_pb_sms_GetCompositionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_GetCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  getComposition(
    argument: _suki_pb_sms_GetCompositionRequest,
    callback: grpc.requestCallback<_suki_pb_sms_GetCompositionResponse__Output>
  ): grpc.ClientUnaryCall;

  GetCompositionNeedsReview(
    argument: _suki_pb_sms_GetCompositionNeedsReviewRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_GetCompositionNeedsReviewResponse__Output>
  ): grpc.ClientUnaryCall;
  GetCompositionNeedsReview(
    argument: _suki_pb_sms_GetCompositionNeedsReviewRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_sms_GetCompositionNeedsReviewResponse__Output>
  ): grpc.ClientUnaryCall;
  GetCompositionNeedsReview(
    argument: _suki_pb_sms_GetCompositionNeedsReviewRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_GetCompositionNeedsReviewResponse__Output>
  ): grpc.ClientUnaryCall;
  GetCompositionNeedsReview(
    argument: _suki_pb_sms_GetCompositionNeedsReviewRequest,
    callback: grpc.requestCallback<_suki_pb_sms_GetCompositionNeedsReviewResponse__Output>
  ): grpc.ClientUnaryCall;
  getCompositionNeedsReview(
    argument: _suki_pb_sms_GetCompositionNeedsReviewRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_GetCompositionNeedsReviewResponse__Output>
  ): grpc.ClientUnaryCall;
  getCompositionNeedsReview(
    argument: _suki_pb_sms_GetCompositionNeedsReviewRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_sms_GetCompositionNeedsReviewResponse__Output>
  ): grpc.ClientUnaryCall;
  getCompositionNeedsReview(
    argument: _suki_pb_sms_GetCompositionNeedsReviewRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_GetCompositionNeedsReviewResponse__Output>
  ): grpc.ClientUnaryCall;
  getCompositionNeedsReview(
    argument: _suki_pb_sms_GetCompositionNeedsReviewRequest,
    callback: grpc.requestCallback<_suki_pb_sms_GetCompositionNeedsReviewResponse__Output>
  ): grpc.ClientUnaryCall;

  GetCompositionNeedsReviewNoScope(
    argument: _suki_pb_sms_GetCompositionNeedsReviewNoScopeRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_GetCompositionNeedsReviewNoScopeResponse__Output>
  ): grpc.ClientUnaryCall;
  GetCompositionNeedsReviewNoScope(
    argument: _suki_pb_sms_GetCompositionNeedsReviewNoScopeRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_sms_GetCompositionNeedsReviewNoScopeResponse__Output>
  ): grpc.ClientUnaryCall;
  GetCompositionNeedsReviewNoScope(
    argument: _suki_pb_sms_GetCompositionNeedsReviewNoScopeRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_GetCompositionNeedsReviewNoScopeResponse__Output>
  ): grpc.ClientUnaryCall;
  GetCompositionNeedsReviewNoScope(
    argument: _suki_pb_sms_GetCompositionNeedsReviewNoScopeRequest,
    callback: grpc.requestCallback<_suki_pb_sms_GetCompositionNeedsReviewNoScopeResponse__Output>
  ): grpc.ClientUnaryCall;
  getCompositionNeedsReviewNoScope(
    argument: _suki_pb_sms_GetCompositionNeedsReviewNoScopeRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_GetCompositionNeedsReviewNoScopeResponse__Output>
  ): grpc.ClientUnaryCall;
  getCompositionNeedsReviewNoScope(
    argument: _suki_pb_sms_GetCompositionNeedsReviewNoScopeRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_sms_GetCompositionNeedsReviewNoScopeResponse__Output>
  ): grpc.ClientUnaryCall;
  getCompositionNeedsReviewNoScope(
    argument: _suki_pb_sms_GetCompositionNeedsReviewNoScopeRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_GetCompositionNeedsReviewNoScopeResponse__Output>
  ): grpc.ClientUnaryCall;
  getCompositionNeedsReviewNoScope(
    argument: _suki_pb_sms_GetCompositionNeedsReviewNoScopeRequest,
    callback: grpc.requestCallback<_suki_pb_sms_GetCompositionNeedsReviewNoScopeResponse__Output>
  ): grpc.ClientUnaryCall;

  GetCompositionOrNote(
    argument: _suki_pb_sms_GetCompositionOrNoteRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_GetCompositionOrNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  GetCompositionOrNote(
    argument: _suki_pb_sms_GetCompositionOrNoteRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_sms_GetCompositionOrNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  GetCompositionOrNote(
    argument: _suki_pb_sms_GetCompositionOrNoteRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_GetCompositionOrNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  GetCompositionOrNote(
    argument: _suki_pb_sms_GetCompositionOrNoteRequest,
    callback: grpc.requestCallback<_suki_pb_sms_GetCompositionOrNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  getCompositionOrNote(
    argument: _suki_pb_sms_GetCompositionOrNoteRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_GetCompositionOrNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  getCompositionOrNote(
    argument: _suki_pb_sms_GetCompositionOrNoteRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_sms_GetCompositionOrNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  getCompositionOrNote(
    argument: _suki_pb_sms_GetCompositionOrNoteRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_GetCompositionOrNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  getCompositionOrNote(
    argument: _suki_pb_sms_GetCompositionOrNoteRequest,
    callback: grpc.requestCallback<_suki_pb_sms_GetCompositionOrNoteResponse__Output>
  ): grpc.ClientUnaryCall;

  GetNote(
    argument: _suki_pb_sms_GetNoteRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_GetNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  GetNote(
    argument: _suki_pb_sms_GetNoteRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_sms_GetNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  GetNote(
    argument: _suki_pb_sms_GetNoteRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_GetNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  GetNote(
    argument: _suki_pb_sms_GetNoteRequest,
    callback: grpc.requestCallback<_suki_pb_sms_GetNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  getNote(
    argument: _suki_pb_sms_GetNoteRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_GetNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  getNote(
    argument: _suki_pb_sms_GetNoteRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_sms_GetNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  getNote(
    argument: _suki_pb_sms_GetNoteRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_GetNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  getNote(
    argument: _suki_pb_sms_GetNoteRequest,
    callback: grpc.requestCallback<_suki_pb_sms_GetNoteResponse__Output>
  ): grpc.ClientUnaryCall;

  GetVersionedComposition(
    argument: _suki_pb_sms_GetVersionedCompositionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_GetVersionedCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  GetVersionedComposition(
    argument: _suki_pb_sms_GetVersionedCompositionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_sms_GetVersionedCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  GetVersionedComposition(
    argument: _suki_pb_sms_GetVersionedCompositionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_GetVersionedCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  GetVersionedComposition(
    argument: _suki_pb_sms_GetVersionedCompositionRequest,
    callback: grpc.requestCallback<_suki_pb_sms_GetVersionedCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  getVersionedComposition(
    argument: _suki_pb_sms_GetVersionedCompositionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_GetVersionedCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  getVersionedComposition(
    argument: _suki_pb_sms_GetVersionedCompositionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_sms_GetVersionedCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  getVersionedComposition(
    argument: _suki_pb_sms_GetVersionedCompositionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_GetVersionedCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  getVersionedComposition(
    argument: _suki_pb_sms_GetVersionedCompositionRequest,
    callback: grpc.requestCallback<_suki_pb_sms_GetVersionedCompositionResponse__Output>
  ): grpc.ClientUnaryCall;

  GetVersionedNote(
    argument: _suki_pb_sms_GetVersionedNoteRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_GetVersionedNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  GetVersionedNote(
    argument: _suki_pb_sms_GetVersionedNoteRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_sms_GetVersionedNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  GetVersionedNote(
    argument: _suki_pb_sms_GetVersionedNoteRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_GetVersionedNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  GetVersionedNote(
    argument: _suki_pb_sms_GetVersionedNoteRequest,
    callback: grpc.requestCallback<_suki_pb_sms_GetVersionedNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  getVersionedNote(
    argument: _suki_pb_sms_GetVersionedNoteRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_GetVersionedNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  getVersionedNote(
    argument: _suki_pb_sms_GetVersionedNoteRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_sms_GetVersionedNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  getVersionedNote(
    argument: _suki_pb_sms_GetVersionedNoteRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_GetVersionedNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  getVersionedNote(
    argument: _suki_pb_sms_GetVersionedNoteRequest,
    callback: grpc.requestCallback<_suki_pb_sms_GetVersionedNoteResponse__Output>
  ): grpc.ClientUnaryCall;

  InsertAudioSectionTranscript(
    argument: _suki_pb_sms_InsertAudioSectionTranscriptRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_InsertAudioSectionTranscriptResponse__Output>
  ): grpc.ClientUnaryCall;
  InsertAudioSectionTranscript(
    argument: _suki_pb_sms_InsertAudioSectionTranscriptRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_sms_InsertAudioSectionTranscriptResponse__Output>
  ): grpc.ClientUnaryCall;
  InsertAudioSectionTranscript(
    argument: _suki_pb_sms_InsertAudioSectionTranscriptRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_InsertAudioSectionTranscriptResponse__Output>
  ): grpc.ClientUnaryCall;
  InsertAudioSectionTranscript(
    argument: _suki_pb_sms_InsertAudioSectionTranscriptRequest,
    callback: grpc.requestCallback<_suki_pb_sms_InsertAudioSectionTranscriptResponse__Output>
  ): grpc.ClientUnaryCall;
  insertAudioSectionTranscript(
    argument: _suki_pb_sms_InsertAudioSectionTranscriptRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_InsertAudioSectionTranscriptResponse__Output>
  ): grpc.ClientUnaryCall;
  insertAudioSectionTranscript(
    argument: _suki_pb_sms_InsertAudioSectionTranscriptRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_sms_InsertAudioSectionTranscriptResponse__Output>
  ): grpc.ClientUnaryCall;
  insertAudioSectionTranscript(
    argument: _suki_pb_sms_InsertAudioSectionTranscriptRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_InsertAudioSectionTranscriptResponse__Output>
  ): grpc.ClientUnaryCall;
  insertAudioSectionTranscript(
    argument: _suki_pb_sms_InsertAudioSectionTranscriptRequest,
    callback: grpc.requestCallback<_suki_pb_sms_InsertAudioSectionTranscriptResponse__Output>
  ): grpc.ClientUnaryCall;

  InsertSubmissionErrorCompositionAsNote(
    argument: _suki_pb_sms_InsertSubmissionErrorCompositionAsNoteRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_InsertSubmissionErrorCompositionAsNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  InsertSubmissionErrorCompositionAsNote(
    argument: _suki_pb_sms_InsertSubmissionErrorCompositionAsNoteRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_sms_InsertSubmissionErrorCompositionAsNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  InsertSubmissionErrorCompositionAsNote(
    argument: _suki_pb_sms_InsertSubmissionErrorCompositionAsNoteRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_InsertSubmissionErrorCompositionAsNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  InsertSubmissionErrorCompositionAsNote(
    argument: _suki_pb_sms_InsertSubmissionErrorCompositionAsNoteRequest,
    callback: grpc.requestCallback<_suki_pb_sms_InsertSubmissionErrorCompositionAsNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  insertSubmissionErrorCompositionAsNote(
    argument: _suki_pb_sms_InsertSubmissionErrorCompositionAsNoteRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_InsertSubmissionErrorCompositionAsNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  insertSubmissionErrorCompositionAsNote(
    argument: _suki_pb_sms_InsertSubmissionErrorCompositionAsNoteRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_sms_InsertSubmissionErrorCompositionAsNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  insertSubmissionErrorCompositionAsNote(
    argument: _suki_pb_sms_InsertSubmissionErrorCompositionAsNoteRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_InsertSubmissionErrorCompositionAsNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  insertSubmissionErrorCompositionAsNote(
    argument: _suki_pb_sms_InsertSubmissionErrorCompositionAsNoteRequest,
    callback: grpc.requestCallback<_suki_pb_sms_InsertSubmissionErrorCompositionAsNoteResponse__Output>
  ): grpc.ClientUnaryCall;

  InsertVersionedNote(
    argument: _suki_pb_sms_InsertVersionedNoteRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_InsertVersionedNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  InsertVersionedNote(
    argument: _suki_pb_sms_InsertVersionedNoteRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_sms_InsertVersionedNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  InsertVersionedNote(
    argument: _suki_pb_sms_InsertVersionedNoteRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_InsertVersionedNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  InsertVersionedNote(
    argument: _suki_pb_sms_InsertVersionedNoteRequest,
    callback: grpc.requestCallback<_suki_pb_sms_InsertVersionedNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  insertVersionedNote(
    argument: _suki_pb_sms_InsertVersionedNoteRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_InsertVersionedNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  insertVersionedNote(
    argument: _suki_pb_sms_InsertVersionedNoteRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_sms_InsertVersionedNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  insertVersionedNote(
    argument: _suki_pb_sms_InsertVersionedNoteRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_InsertVersionedNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  insertVersionedNote(
    argument: _suki_pb_sms_InsertVersionedNoteRequest,
    callback: grpc.requestCallback<_suki_pb_sms_InsertVersionedNoteResponse__Output>
  ): grpc.ClientUnaryCall;

  SetCompositionIsBeingEdited(
    argument: _suki_pb_sms_SetCompositionIsBeingEditedRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_SetCompositionIsBeingEditedResponse__Output>
  ): grpc.ClientUnaryCall;
  SetCompositionIsBeingEdited(
    argument: _suki_pb_sms_SetCompositionIsBeingEditedRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_sms_SetCompositionIsBeingEditedResponse__Output>
  ): grpc.ClientUnaryCall;
  SetCompositionIsBeingEdited(
    argument: _suki_pb_sms_SetCompositionIsBeingEditedRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_SetCompositionIsBeingEditedResponse__Output>
  ): grpc.ClientUnaryCall;
  SetCompositionIsBeingEdited(
    argument: _suki_pb_sms_SetCompositionIsBeingEditedRequest,
    callback: grpc.requestCallback<_suki_pb_sms_SetCompositionIsBeingEditedResponse__Output>
  ): grpc.ClientUnaryCall;
  setCompositionIsBeingEdited(
    argument: _suki_pb_sms_SetCompositionIsBeingEditedRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_SetCompositionIsBeingEditedResponse__Output>
  ): grpc.ClientUnaryCall;
  setCompositionIsBeingEdited(
    argument: _suki_pb_sms_SetCompositionIsBeingEditedRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_sms_SetCompositionIsBeingEditedResponse__Output>
  ): grpc.ClientUnaryCall;
  setCompositionIsBeingEdited(
    argument: _suki_pb_sms_SetCompositionIsBeingEditedRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_SetCompositionIsBeingEditedResponse__Output>
  ): grpc.ClientUnaryCall;
  setCompositionIsBeingEdited(
    argument: _suki_pb_sms_SetCompositionIsBeingEditedRequest,
    callback: grpc.requestCallback<_suki_pb_sms_SetCompositionIsBeingEditedResponse__Output>
  ): grpc.ClientUnaryCall;

  SetCompositionIsNotBeingEdited(
    argument: _suki_pb_sms_SetCompositionIsNotBeingEditedRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_SetCompositionIsNotBeingEditedResponse__Output>
  ): grpc.ClientUnaryCall;
  SetCompositionIsNotBeingEdited(
    argument: _suki_pb_sms_SetCompositionIsNotBeingEditedRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_sms_SetCompositionIsNotBeingEditedResponse__Output>
  ): grpc.ClientUnaryCall;
  SetCompositionIsNotBeingEdited(
    argument: _suki_pb_sms_SetCompositionIsNotBeingEditedRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_SetCompositionIsNotBeingEditedResponse__Output>
  ): grpc.ClientUnaryCall;
  SetCompositionIsNotBeingEdited(
    argument: _suki_pb_sms_SetCompositionIsNotBeingEditedRequest,
    callback: grpc.requestCallback<_suki_pb_sms_SetCompositionIsNotBeingEditedResponse__Output>
  ): grpc.ClientUnaryCall;
  setCompositionIsNotBeingEdited(
    argument: _suki_pb_sms_SetCompositionIsNotBeingEditedRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_SetCompositionIsNotBeingEditedResponse__Output>
  ): grpc.ClientUnaryCall;
  setCompositionIsNotBeingEdited(
    argument: _suki_pb_sms_SetCompositionIsNotBeingEditedRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_sms_SetCompositionIsNotBeingEditedResponse__Output>
  ): grpc.ClientUnaryCall;
  setCompositionIsNotBeingEdited(
    argument: _suki_pb_sms_SetCompositionIsNotBeingEditedRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_SetCompositionIsNotBeingEditedResponse__Output>
  ): grpc.ClientUnaryCall;
  setCompositionIsNotBeingEdited(
    argument: _suki_pb_sms_SetCompositionIsNotBeingEditedRequest,
    callback: grpc.requestCallback<_suki_pb_sms_SetCompositionIsNotBeingEditedResponse__Output>
  ): grpc.ClientUnaryCall;

  SubmitComposition(
    argument: _suki_pb_sms_SubmitCompositionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_SubmitCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  SubmitComposition(
    argument: _suki_pb_sms_SubmitCompositionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_sms_SubmitCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  SubmitComposition(
    argument: _suki_pb_sms_SubmitCompositionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_SubmitCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  SubmitComposition(
    argument: _suki_pb_sms_SubmitCompositionRequest,
    callback: grpc.requestCallback<_suki_pb_sms_SubmitCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  submitComposition(
    argument: _suki_pb_sms_SubmitCompositionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_SubmitCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  submitComposition(
    argument: _suki_pb_sms_SubmitCompositionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_sms_SubmitCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  submitComposition(
    argument: _suki_pb_sms_SubmitCompositionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_SubmitCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  submitComposition(
    argument: _suki_pb_sms_SubmitCompositionRequest,
    callback: grpc.requestCallback<_suki_pb_sms_SubmitCompositionResponse__Output>
  ): grpc.ClientUnaryCall;

  Undo(
    argument: _suki_pb_sms_UndoRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_UndoResponse__Output>
  ): grpc.ClientUnaryCall;
  Undo(
    argument: _suki_pb_sms_UndoRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_sms_UndoResponse__Output>
  ): grpc.ClientUnaryCall;
  Undo(
    argument: _suki_pb_sms_UndoRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_UndoResponse__Output>
  ): grpc.ClientUnaryCall;
  Undo(
    argument: _suki_pb_sms_UndoRequest,
    callback: grpc.requestCallback<_suki_pb_sms_UndoResponse__Output>
  ): grpc.ClientUnaryCall;
  undo(
    argument: _suki_pb_sms_UndoRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_UndoResponse__Output>
  ): grpc.ClientUnaryCall;
  undo(
    argument: _suki_pb_sms_UndoRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_sms_UndoResponse__Output>
  ): grpc.ClientUnaryCall;
  undo(
    argument: _suki_pb_sms_UndoRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_UndoResponse__Output>
  ): grpc.ClientUnaryCall;
  undo(
    argument: _suki_pb_sms_UndoRequest,
    callback: grpc.requestCallback<_suki_pb_sms_UndoResponse__Output>
  ): grpc.ClientUnaryCall;

  UpdateComposition(
    argument: _suki_pb_sms_UpdateCompositionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_UpdateCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  UpdateComposition(
    argument: _suki_pb_sms_UpdateCompositionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_sms_UpdateCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  UpdateComposition(
    argument: _suki_pb_sms_UpdateCompositionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_UpdateCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  UpdateComposition(
    argument: _suki_pb_sms_UpdateCompositionRequest,
    callback: grpc.requestCallback<_suki_pb_sms_UpdateCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  updateComposition(
    argument: _suki_pb_sms_UpdateCompositionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_UpdateCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  updateComposition(
    argument: _suki_pb_sms_UpdateCompositionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_sms_UpdateCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  updateComposition(
    argument: _suki_pb_sms_UpdateCompositionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_UpdateCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  updateComposition(
    argument: _suki_pb_sms_UpdateCompositionRequest,
    callback: grpc.requestCallback<_suki_pb_sms_UpdateCompositionResponse__Output>
  ): grpc.ClientUnaryCall;

  UpdateCompositionAppointment(
    argument: _suki_pb_sms_UpdateCompositionAppointmentRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_UpdateCompositionAppointmentResponse__Output>
  ): grpc.ClientUnaryCall;
  UpdateCompositionAppointment(
    argument: _suki_pb_sms_UpdateCompositionAppointmentRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_sms_UpdateCompositionAppointmentResponse__Output>
  ): grpc.ClientUnaryCall;
  UpdateCompositionAppointment(
    argument: _suki_pb_sms_UpdateCompositionAppointmentRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_UpdateCompositionAppointmentResponse__Output>
  ): grpc.ClientUnaryCall;
  UpdateCompositionAppointment(
    argument: _suki_pb_sms_UpdateCompositionAppointmentRequest,
    callback: grpc.requestCallback<_suki_pb_sms_UpdateCompositionAppointmentResponse__Output>
  ): grpc.ClientUnaryCall;
  updateCompositionAppointment(
    argument: _suki_pb_sms_UpdateCompositionAppointmentRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_UpdateCompositionAppointmentResponse__Output>
  ): grpc.ClientUnaryCall;
  updateCompositionAppointment(
    argument: _suki_pb_sms_UpdateCompositionAppointmentRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_sms_UpdateCompositionAppointmentResponse__Output>
  ): grpc.ClientUnaryCall;
  updateCompositionAppointment(
    argument: _suki_pb_sms_UpdateCompositionAppointmentRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_UpdateCompositionAppointmentResponse__Output>
  ): grpc.ClientUnaryCall;
  updateCompositionAppointment(
    argument: _suki_pb_sms_UpdateCompositionAppointmentRequest,
    callback: grpc.requestCallback<_suki_pb_sms_UpdateCompositionAppointmentResponse__Output>
  ): grpc.ClientUnaryCall;

  UpdateVersionedNote(
    argument: _suki_pb_sms_UpdateVersionedNoteRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_UpdateVersionedNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  UpdateVersionedNote(
    argument: _suki_pb_sms_UpdateVersionedNoteRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_sms_UpdateVersionedNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  UpdateVersionedNote(
    argument: _suki_pb_sms_UpdateVersionedNoteRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_UpdateVersionedNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  UpdateVersionedNote(
    argument: _suki_pb_sms_UpdateVersionedNoteRequest,
    callback: grpc.requestCallback<_suki_pb_sms_UpdateVersionedNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  updateVersionedNote(
    argument: _suki_pb_sms_UpdateVersionedNoteRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_UpdateVersionedNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  updateVersionedNote(
    argument: _suki_pb_sms_UpdateVersionedNoteRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_sms_UpdateVersionedNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  updateVersionedNote(
    argument: _suki_pb_sms_UpdateVersionedNoteRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_sms_UpdateVersionedNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  updateVersionedNote(
    argument: _suki_pb_sms_UpdateVersionedNoteRequest,
    callback: grpc.requestCallback<_suki_pb_sms_UpdateVersionedNoteResponse__Output>
  ): grpc.ClientUnaryCall;
}

export interface SMSHandlers extends grpc.UntypedServiceImplementation {
  CheckIfCompositionIsBeingEdited: grpc.handleUnaryCall<
    _suki_pb_sms_CheckIfCompositionIsBeingEditedRequest__Output,
    _suki_pb_sms_CheckIfCompositionIsBeingEditedResponse
  >;

  CreateComposition: grpc.handleUnaryCall<
    _suki_pb_sms_CreateCompositionRequest__Output,
    _suki_pb_sms_CreateCompositionResponse
  >;

  DeleteComposition: grpc.handleUnaryCall<
    _suki_pb_sms_DeleteCompositionRequest__Output,
    _suki_pb_sms_DeleteCompositionResponse
  >;

  DeleteSection: grpc.handleUnaryCall<_suki_pb_sms_DeleteSectionRequest__Output, _suki_pb_sms_DeleteSectionResponse>;

  GetComposition: grpc.handleUnaryCall<_suki_pb_sms_GetCompositionRequest__Output, _suki_pb_sms_GetCompositionResponse>;

  GetCompositionNeedsReview: grpc.handleUnaryCall<
    _suki_pb_sms_GetCompositionNeedsReviewRequest__Output,
    _suki_pb_sms_GetCompositionNeedsReviewResponse
  >;

  GetCompositionNeedsReviewNoScope: grpc.handleUnaryCall<
    _suki_pb_sms_GetCompositionNeedsReviewNoScopeRequest__Output,
    _suki_pb_sms_GetCompositionNeedsReviewNoScopeResponse
  >;

  GetCompositionOrNote: grpc.handleUnaryCall<
    _suki_pb_sms_GetCompositionOrNoteRequest__Output,
    _suki_pb_sms_GetCompositionOrNoteResponse
  >;

  GetNote: grpc.handleUnaryCall<_suki_pb_sms_GetNoteRequest__Output, _suki_pb_sms_GetNoteResponse>;

  GetVersionedComposition: grpc.handleUnaryCall<
    _suki_pb_sms_GetVersionedCompositionRequest__Output,
    _suki_pb_sms_GetVersionedCompositionResponse
  >;

  GetVersionedNote: grpc.handleUnaryCall<
    _suki_pb_sms_GetVersionedNoteRequest__Output,
    _suki_pb_sms_GetVersionedNoteResponse
  >;

  InsertAudioSectionTranscript: grpc.handleUnaryCall<
    _suki_pb_sms_InsertAudioSectionTranscriptRequest__Output,
    _suki_pb_sms_InsertAudioSectionTranscriptResponse
  >;

  InsertSubmissionErrorCompositionAsNote: grpc.handleUnaryCall<
    _suki_pb_sms_InsertSubmissionErrorCompositionAsNoteRequest__Output,
    _suki_pb_sms_InsertSubmissionErrorCompositionAsNoteResponse
  >;

  InsertVersionedNote: grpc.handleUnaryCall<
    _suki_pb_sms_InsertVersionedNoteRequest__Output,
    _suki_pb_sms_InsertVersionedNoteResponse
  >;

  SetCompositionIsBeingEdited: grpc.handleUnaryCall<
    _suki_pb_sms_SetCompositionIsBeingEditedRequest__Output,
    _suki_pb_sms_SetCompositionIsBeingEditedResponse
  >;

  SetCompositionIsNotBeingEdited: grpc.handleUnaryCall<
    _suki_pb_sms_SetCompositionIsNotBeingEditedRequest__Output,
    _suki_pb_sms_SetCompositionIsNotBeingEditedResponse
  >;

  SubmitComposition: grpc.handleUnaryCall<
    _suki_pb_sms_SubmitCompositionRequest__Output,
    _suki_pb_sms_SubmitCompositionResponse
  >;

  Undo: grpc.handleUnaryCall<_suki_pb_sms_UndoRequest__Output, _suki_pb_sms_UndoResponse>;

  UpdateComposition: grpc.handleUnaryCall<
    _suki_pb_sms_UpdateCompositionRequest__Output,
    _suki_pb_sms_UpdateCompositionResponse
  >;

  UpdateCompositionAppointment: grpc.handleUnaryCall<
    _suki_pb_sms_UpdateCompositionAppointmentRequest__Output,
    _suki_pb_sms_UpdateCompositionAppointmentResponse
  >;

  UpdateVersionedNote: grpc.handleUnaryCall<
    _suki_pb_sms_UpdateVersionedNoteRequest__Output,
    _suki_pb_sms_UpdateVersionedNoteResponse
  >;
}

export interface SMSDefinition extends grpc.ServiceDefinition {
  CheckIfCompositionIsBeingEdited: MethodDefinition<
    _suki_pb_sms_CheckIfCompositionIsBeingEditedRequest,
    _suki_pb_sms_CheckIfCompositionIsBeingEditedResponse,
    _suki_pb_sms_CheckIfCompositionIsBeingEditedRequest__Output,
    _suki_pb_sms_CheckIfCompositionIsBeingEditedResponse__Output
  >;
  CreateComposition: MethodDefinition<
    _suki_pb_sms_CreateCompositionRequest,
    _suki_pb_sms_CreateCompositionResponse,
    _suki_pb_sms_CreateCompositionRequest__Output,
    _suki_pb_sms_CreateCompositionResponse__Output
  >;
  DeleteComposition: MethodDefinition<
    _suki_pb_sms_DeleteCompositionRequest,
    _suki_pb_sms_DeleteCompositionResponse,
    _suki_pb_sms_DeleteCompositionRequest__Output,
    _suki_pb_sms_DeleteCompositionResponse__Output
  >;
  DeleteSection: MethodDefinition<
    _suki_pb_sms_DeleteSectionRequest,
    _suki_pb_sms_DeleteSectionResponse,
    _suki_pb_sms_DeleteSectionRequest__Output,
    _suki_pb_sms_DeleteSectionResponse__Output
  >;
  GetComposition: MethodDefinition<
    _suki_pb_sms_GetCompositionRequest,
    _suki_pb_sms_GetCompositionResponse,
    _suki_pb_sms_GetCompositionRequest__Output,
    _suki_pb_sms_GetCompositionResponse__Output
  >;
  GetCompositionNeedsReview: MethodDefinition<
    _suki_pb_sms_GetCompositionNeedsReviewRequest,
    _suki_pb_sms_GetCompositionNeedsReviewResponse,
    _suki_pb_sms_GetCompositionNeedsReviewRequest__Output,
    _suki_pb_sms_GetCompositionNeedsReviewResponse__Output
  >;
  GetCompositionNeedsReviewNoScope: MethodDefinition<
    _suki_pb_sms_GetCompositionNeedsReviewNoScopeRequest,
    _suki_pb_sms_GetCompositionNeedsReviewNoScopeResponse,
    _suki_pb_sms_GetCompositionNeedsReviewNoScopeRequest__Output,
    _suki_pb_sms_GetCompositionNeedsReviewNoScopeResponse__Output
  >;
  GetCompositionOrNote: MethodDefinition<
    _suki_pb_sms_GetCompositionOrNoteRequest,
    _suki_pb_sms_GetCompositionOrNoteResponse,
    _suki_pb_sms_GetCompositionOrNoteRequest__Output,
    _suki_pb_sms_GetCompositionOrNoteResponse__Output
  >;
  GetNote: MethodDefinition<
    _suki_pb_sms_GetNoteRequest,
    _suki_pb_sms_GetNoteResponse,
    _suki_pb_sms_GetNoteRequest__Output,
    _suki_pb_sms_GetNoteResponse__Output
  >;
  GetVersionedComposition: MethodDefinition<
    _suki_pb_sms_GetVersionedCompositionRequest,
    _suki_pb_sms_GetVersionedCompositionResponse,
    _suki_pb_sms_GetVersionedCompositionRequest__Output,
    _suki_pb_sms_GetVersionedCompositionResponse__Output
  >;
  GetVersionedNote: MethodDefinition<
    _suki_pb_sms_GetVersionedNoteRequest,
    _suki_pb_sms_GetVersionedNoteResponse,
    _suki_pb_sms_GetVersionedNoteRequest__Output,
    _suki_pb_sms_GetVersionedNoteResponse__Output
  >;
  InsertAudioSectionTranscript: MethodDefinition<
    _suki_pb_sms_InsertAudioSectionTranscriptRequest,
    _suki_pb_sms_InsertAudioSectionTranscriptResponse,
    _suki_pb_sms_InsertAudioSectionTranscriptRequest__Output,
    _suki_pb_sms_InsertAudioSectionTranscriptResponse__Output
  >;
  InsertSubmissionErrorCompositionAsNote: MethodDefinition<
    _suki_pb_sms_InsertSubmissionErrorCompositionAsNoteRequest,
    _suki_pb_sms_InsertSubmissionErrorCompositionAsNoteResponse,
    _suki_pb_sms_InsertSubmissionErrorCompositionAsNoteRequest__Output,
    _suki_pb_sms_InsertSubmissionErrorCompositionAsNoteResponse__Output
  >;
  InsertVersionedNote: MethodDefinition<
    _suki_pb_sms_InsertVersionedNoteRequest,
    _suki_pb_sms_InsertVersionedNoteResponse,
    _suki_pb_sms_InsertVersionedNoteRequest__Output,
    _suki_pb_sms_InsertVersionedNoteResponse__Output
  >;
  SetCompositionIsBeingEdited: MethodDefinition<
    _suki_pb_sms_SetCompositionIsBeingEditedRequest,
    _suki_pb_sms_SetCompositionIsBeingEditedResponse,
    _suki_pb_sms_SetCompositionIsBeingEditedRequest__Output,
    _suki_pb_sms_SetCompositionIsBeingEditedResponse__Output
  >;
  SetCompositionIsNotBeingEdited: MethodDefinition<
    _suki_pb_sms_SetCompositionIsNotBeingEditedRequest,
    _suki_pb_sms_SetCompositionIsNotBeingEditedResponse,
    _suki_pb_sms_SetCompositionIsNotBeingEditedRequest__Output,
    _suki_pb_sms_SetCompositionIsNotBeingEditedResponse__Output
  >;
  SubmitComposition: MethodDefinition<
    _suki_pb_sms_SubmitCompositionRequest,
    _suki_pb_sms_SubmitCompositionResponse,
    _suki_pb_sms_SubmitCompositionRequest__Output,
    _suki_pb_sms_SubmitCompositionResponse__Output
  >;
  Undo: MethodDefinition<
    _suki_pb_sms_UndoRequest,
    _suki_pb_sms_UndoResponse,
    _suki_pb_sms_UndoRequest__Output,
    _suki_pb_sms_UndoResponse__Output
  >;
  UpdateComposition: MethodDefinition<
    _suki_pb_sms_UpdateCompositionRequest,
    _suki_pb_sms_UpdateCompositionResponse,
    _suki_pb_sms_UpdateCompositionRequest__Output,
    _suki_pb_sms_UpdateCompositionResponse__Output
  >;
  UpdateCompositionAppointment: MethodDefinition<
    _suki_pb_sms_UpdateCompositionAppointmentRequest,
    _suki_pb_sms_UpdateCompositionAppointmentResponse,
    _suki_pb_sms_UpdateCompositionAppointmentRequest__Output,
    _suki_pb_sms_UpdateCompositionAppointmentResponse__Output
  >;
  UpdateVersionedNote: MethodDefinition<
    _suki_pb_sms_UpdateVersionedNoteRequest,
    _suki_pb_sms_UpdateVersionedNoteResponse,
    _suki_pb_sms_UpdateVersionedNoteRequest__Output,
    _suki_pb_sms_UpdateVersionedNoteResponse__Output
  >;
}
