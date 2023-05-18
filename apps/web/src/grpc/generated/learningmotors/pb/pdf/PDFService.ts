// Original file: node_modules/protobufs/src/learningmotors/pb/pdf/pdf.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  BulkPrintRequest as _learningmotors_pb_pdf_BulkPrintRequest,
  BulkPrintRequest__Output as _learningmotors_pb_pdf_BulkPrintRequest__Output
} from "../../../learningmotors/pb/pdf/BulkPrintRequest";
import type {
  BulkPrintResponse as _learningmotors_pb_pdf_BulkPrintResponse,
  BulkPrintResponse__Output as _learningmotors_pb_pdf_BulkPrintResponse__Output
} from "../../../learningmotors/pb/pdf/BulkPrintResponse";
import type {
  BulkSaveRequest as _learningmotors_pb_pdf_BulkSaveRequest,
  BulkSaveRequest__Output as _learningmotors_pb_pdf_BulkSaveRequest__Output
} from "../../../learningmotors/pb/pdf/BulkSaveRequest";
import type {
  BulkSaveResponse as _learningmotors_pb_pdf_BulkSaveResponse,
  BulkSaveResponse__Output as _learningmotors_pb_pdf_BulkSaveResponse__Output
} from "../../../learningmotors/pb/pdf/BulkSaveResponse";
import type {
  ConditionRequest as _learningmotors_pb_pdf_ConditionRequest,
  ConditionRequest__Output as _learningmotors_pb_pdf_ConditionRequest__Output
} from "../../../learningmotors/pb/pdf/ConditionRequest";
import type {
  ConditionResponse as _learningmotors_pb_pdf_ConditionResponse,
  ConditionResponse__Output as _learningmotors_pb_pdf_ConditionResponse__Output
} from "../../../learningmotors/pb/pdf/ConditionResponse";
import type {
  DocumentReferenceRequest as _learningmotors_pb_pdf_DocumentReferenceRequest,
  DocumentReferenceRequest__Output as _learningmotors_pb_pdf_DocumentReferenceRequest__Output
} from "../../../learningmotors/pb/pdf/DocumentReferenceRequest";
import type {
  DocumentReferenceResponse as _learningmotors_pb_pdf_DocumentReferenceResponse,
  DocumentReferenceResponse__Output as _learningmotors_pb_pdf_DocumentReferenceResponse__Output
} from "../../../learningmotors/pb/pdf/DocumentReferenceResponse";
import type {
  NoteRequest as _learningmotors_pb_pdf_NoteRequest,
  NoteRequest__Output as _learningmotors_pb_pdf_NoteRequest__Output
} from "../../../learningmotors/pb/pdf/NoteRequest";
import type {
  NoteResponse as _learningmotors_pb_pdf_NoteResponse,
  NoteResponse__Output as _learningmotors_pb_pdf_NoteResponse__Output
} from "../../../learningmotors/pb/pdf/NoteResponse";

export interface PDFServiceClient extends grpc.Client {
  BulkPrint(
    argument: _learningmotors_pb_pdf_BulkPrintRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_pdf_BulkPrintResponse__Output>
  ): grpc.ClientUnaryCall;
  BulkPrint(
    argument: _learningmotors_pb_pdf_BulkPrintRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_pdf_BulkPrintResponse__Output>
  ): grpc.ClientUnaryCall;
  BulkPrint(
    argument: _learningmotors_pb_pdf_BulkPrintRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_pdf_BulkPrintResponse__Output>
  ): grpc.ClientUnaryCall;
  BulkPrint(
    argument: _learningmotors_pb_pdf_BulkPrintRequest,
    callback: grpc.requestCallback<_learningmotors_pb_pdf_BulkPrintResponse__Output>
  ): grpc.ClientUnaryCall;
  bulkPrint(
    argument: _learningmotors_pb_pdf_BulkPrintRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_pdf_BulkPrintResponse__Output>
  ): grpc.ClientUnaryCall;
  bulkPrint(
    argument: _learningmotors_pb_pdf_BulkPrintRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_pdf_BulkPrintResponse__Output>
  ): grpc.ClientUnaryCall;
  bulkPrint(
    argument: _learningmotors_pb_pdf_BulkPrintRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_pdf_BulkPrintResponse__Output>
  ): grpc.ClientUnaryCall;
  bulkPrint(
    argument: _learningmotors_pb_pdf_BulkPrintRequest,
    callback: grpc.requestCallback<_learningmotors_pb_pdf_BulkPrintResponse__Output>
  ): grpc.ClientUnaryCall;

  BulkSave(
    argument: _learningmotors_pb_pdf_BulkSaveRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_pdf_BulkSaveResponse__Output>
  ): grpc.ClientUnaryCall;
  BulkSave(
    argument: _learningmotors_pb_pdf_BulkSaveRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_pdf_BulkSaveResponse__Output>
  ): grpc.ClientUnaryCall;
  BulkSave(
    argument: _learningmotors_pb_pdf_BulkSaveRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_pdf_BulkSaveResponse__Output>
  ): grpc.ClientUnaryCall;
  BulkSave(
    argument: _learningmotors_pb_pdf_BulkSaveRequest,
    callback: grpc.requestCallback<_learningmotors_pb_pdf_BulkSaveResponse__Output>
  ): grpc.ClientUnaryCall;
  bulkSave(
    argument: _learningmotors_pb_pdf_BulkSaveRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_pdf_BulkSaveResponse__Output>
  ): grpc.ClientUnaryCall;
  bulkSave(
    argument: _learningmotors_pb_pdf_BulkSaveRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_pdf_BulkSaveResponse__Output>
  ): grpc.ClientUnaryCall;
  bulkSave(
    argument: _learningmotors_pb_pdf_BulkSaveRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_pdf_BulkSaveResponse__Output>
  ): grpc.ClientUnaryCall;
  bulkSave(
    argument: _learningmotors_pb_pdf_BulkSaveRequest,
    callback: grpc.requestCallback<_learningmotors_pb_pdf_BulkSaveResponse__Output>
  ): grpc.ClientUnaryCall;

  ConvertCompositionToConditions(
    argument: _learningmotors_pb_pdf_ConditionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_pdf_ConditionResponse__Output>
  ): grpc.ClientUnaryCall;
  ConvertCompositionToConditions(
    argument: _learningmotors_pb_pdf_ConditionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_pdf_ConditionResponse__Output>
  ): grpc.ClientUnaryCall;
  ConvertCompositionToConditions(
    argument: _learningmotors_pb_pdf_ConditionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_pdf_ConditionResponse__Output>
  ): grpc.ClientUnaryCall;
  ConvertCompositionToConditions(
    argument: _learningmotors_pb_pdf_ConditionRequest,
    callback: grpc.requestCallback<_learningmotors_pb_pdf_ConditionResponse__Output>
  ): grpc.ClientUnaryCall;
  convertCompositionToConditions(
    argument: _learningmotors_pb_pdf_ConditionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_pdf_ConditionResponse__Output>
  ): grpc.ClientUnaryCall;
  convertCompositionToConditions(
    argument: _learningmotors_pb_pdf_ConditionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_pdf_ConditionResponse__Output>
  ): grpc.ClientUnaryCall;
  convertCompositionToConditions(
    argument: _learningmotors_pb_pdf_ConditionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_pdf_ConditionResponse__Output>
  ): grpc.ClientUnaryCall;
  convertCompositionToConditions(
    argument: _learningmotors_pb_pdf_ConditionRequest,
    callback: grpc.requestCallback<_learningmotors_pb_pdf_ConditionResponse__Output>
  ): grpc.ClientUnaryCall;

  ConvertCompositionToDocumentReference(
    argument: _learningmotors_pb_pdf_DocumentReferenceRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_pdf_DocumentReferenceResponse__Output>
  ): grpc.ClientUnaryCall;
  ConvertCompositionToDocumentReference(
    argument: _learningmotors_pb_pdf_DocumentReferenceRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_pdf_DocumentReferenceResponse__Output>
  ): grpc.ClientUnaryCall;
  ConvertCompositionToDocumentReference(
    argument: _learningmotors_pb_pdf_DocumentReferenceRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_pdf_DocumentReferenceResponse__Output>
  ): grpc.ClientUnaryCall;
  ConvertCompositionToDocumentReference(
    argument: _learningmotors_pb_pdf_DocumentReferenceRequest,
    callback: grpc.requestCallback<_learningmotors_pb_pdf_DocumentReferenceResponse__Output>
  ): grpc.ClientUnaryCall;
  convertCompositionToDocumentReference(
    argument: _learningmotors_pb_pdf_DocumentReferenceRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_pdf_DocumentReferenceResponse__Output>
  ): grpc.ClientUnaryCall;
  convertCompositionToDocumentReference(
    argument: _learningmotors_pb_pdf_DocumentReferenceRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_pdf_DocumentReferenceResponse__Output>
  ): grpc.ClientUnaryCall;
  convertCompositionToDocumentReference(
    argument: _learningmotors_pb_pdf_DocumentReferenceRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_pdf_DocumentReferenceResponse__Output>
  ): grpc.ClientUnaryCall;
  convertCompositionToDocumentReference(
    argument: _learningmotors_pb_pdf_DocumentReferenceRequest,
    callback: grpc.requestCallback<_learningmotors_pb_pdf_DocumentReferenceResponse__Output>
  ): grpc.ClientUnaryCall;

  Note(
    argument: _learningmotors_pb_pdf_NoteRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_pdf_NoteResponse__Output>
  ): grpc.ClientUnaryCall;
  Note(
    argument: _learningmotors_pb_pdf_NoteRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_pdf_NoteResponse__Output>
  ): grpc.ClientUnaryCall;
  Note(
    argument: _learningmotors_pb_pdf_NoteRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_pdf_NoteResponse__Output>
  ): grpc.ClientUnaryCall;
  Note(
    argument: _learningmotors_pb_pdf_NoteRequest,
    callback: grpc.requestCallback<_learningmotors_pb_pdf_NoteResponse__Output>
  ): grpc.ClientUnaryCall;
  note(
    argument: _learningmotors_pb_pdf_NoteRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_pdf_NoteResponse__Output>
  ): grpc.ClientUnaryCall;
  note(
    argument: _learningmotors_pb_pdf_NoteRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_pdf_NoteResponse__Output>
  ): grpc.ClientUnaryCall;
  note(
    argument: _learningmotors_pb_pdf_NoteRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_pdf_NoteResponse__Output>
  ): grpc.ClientUnaryCall;
  note(
    argument: _learningmotors_pb_pdf_NoteRequest,
    callback: grpc.requestCallback<_learningmotors_pb_pdf_NoteResponse__Output>
  ): grpc.ClientUnaryCall;
}

export interface PDFServiceHandlers extends grpc.UntypedServiceImplementation {
  BulkPrint: grpc.handleUnaryCall<
    _learningmotors_pb_pdf_BulkPrintRequest__Output,
    _learningmotors_pb_pdf_BulkPrintResponse
  >;

  BulkSave: grpc.handleUnaryCall<
    _learningmotors_pb_pdf_BulkSaveRequest__Output,
    _learningmotors_pb_pdf_BulkSaveResponse
  >;

  ConvertCompositionToConditions: grpc.handleUnaryCall<
    _learningmotors_pb_pdf_ConditionRequest__Output,
    _learningmotors_pb_pdf_ConditionResponse
  >;

  ConvertCompositionToDocumentReference: grpc.handleUnaryCall<
    _learningmotors_pb_pdf_DocumentReferenceRequest__Output,
    _learningmotors_pb_pdf_DocumentReferenceResponse
  >;

  Note: grpc.handleUnaryCall<_learningmotors_pb_pdf_NoteRequest__Output, _learningmotors_pb_pdf_NoteResponse>;
}

export interface PDFServiceDefinition extends grpc.ServiceDefinition {
  BulkPrint: MethodDefinition<
    _learningmotors_pb_pdf_BulkPrintRequest,
    _learningmotors_pb_pdf_BulkPrintResponse,
    _learningmotors_pb_pdf_BulkPrintRequest__Output,
    _learningmotors_pb_pdf_BulkPrintResponse__Output
  >;
  BulkSave: MethodDefinition<
    _learningmotors_pb_pdf_BulkSaveRequest,
    _learningmotors_pb_pdf_BulkSaveResponse,
    _learningmotors_pb_pdf_BulkSaveRequest__Output,
    _learningmotors_pb_pdf_BulkSaveResponse__Output
  >;
  ConvertCompositionToConditions: MethodDefinition<
    _learningmotors_pb_pdf_ConditionRequest,
    _learningmotors_pb_pdf_ConditionResponse,
    _learningmotors_pb_pdf_ConditionRequest__Output,
    _learningmotors_pb_pdf_ConditionResponse__Output
  >;
  ConvertCompositionToDocumentReference: MethodDefinition<
    _learningmotors_pb_pdf_DocumentReferenceRequest,
    _learningmotors_pb_pdf_DocumentReferenceResponse,
    _learningmotors_pb_pdf_DocumentReferenceRequest__Output,
    _learningmotors_pb_pdf_DocumentReferenceResponse__Output
  >;
  Note: MethodDefinition<
    _learningmotors_pb_pdf_NoteRequest,
    _learningmotors_pb_pdf_NoteResponse,
    _learningmotors_pb_pdf_NoteRequest__Output,
    _learningmotors_pb_pdf_NoteResponse__Output
  >;
}
