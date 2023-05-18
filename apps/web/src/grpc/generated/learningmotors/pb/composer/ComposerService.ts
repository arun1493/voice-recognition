// Original file: node_modules/protobufs/src/learningmotors/pb/composer/compositions.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  AddSectionRequest as _learningmotors_pb_composer_AddSectionRequest,
  AddSectionRequest__Output as _learningmotors_pb_composer_AddSectionRequest__Output
} from "../../../learningmotors/pb/composer/AddSectionRequest";
import type {
  AddSectionResponse as _learningmotors_pb_composer_AddSectionResponse,
  AddSectionResponse__Output as _learningmotors_pb_composer_AddSectionResponse__Output
} from "../../../learningmotors/pb/composer/AddSectionResponse";
import type {
  CreateRequest as _learningmotors_pb_composer_CreateRequest,
  CreateRequest__Output as _learningmotors_pb_composer_CreateRequest__Output
} from "../../../learningmotors/pb/composer/CreateRequest";
import type {
  CreateResponse as _learningmotors_pb_composer_CreateResponse,
  CreateResponse__Output as _learningmotors_pb_composer_CreateResponse__Output
} from "../../../learningmotors/pb/composer/CreateResponse";
import type {
  DeleteRequest as _learningmotors_pb_composer_DeleteRequest,
  DeleteRequest__Output as _learningmotors_pb_composer_DeleteRequest__Output
} from "../../../learningmotors/pb/composer/DeleteRequest";
import type {
  DeleteSectionRequest as _learningmotors_pb_composer_DeleteSectionRequest,
  DeleteSectionRequest__Output as _learningmotors_pb_composer_DeleteSectionRequest__Output
} from "../../../learningmotors/pb/composer/DeleteSectionRequest";
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output
} from "../../../google/protobuf/Empty";
import type {
  GetCompositionOrNoteRequest as _learningmotors_pb_composer_GetCompositionOrNoteRequest,
  GetCompositionOrNoteRequest__Output as _learningmotors_pb_composer_GetCompositionOrNoteRequest__Output
} from "../../../learningmotors/pb/composer/GetCompositionOrNoteRequest";
import type {
  GetCompositionOrNoteResponse as _learningmotors_pb_composer_GetCompositionOrNoteResponse,
  GetCompositionOrNoteResponse__Output as _learningmotors_pb_composer_GetCompositionOrNoteResponse__Output
} from "../../../learningmotors/pb/composer/GetCompositionOrNoteResponse";
import type {
  GetNeedsReviewNoScopeRequest as _learningmotors_pb_composer_GetNeedsReviewNoScopeRequest,
  GetNeedsReviewNoScopeRequest__Output as _learningmotors_pb_composer_GetNeedsReviewNoScopeRequest__Output
} from "../../../learningmotors/pb/composer/GetNeedsReviewNoScopeRequest";
import type {
  GetNeedsReviewRequest as _learningmotors_pb_composer_GetNeedsReviewRequest,
  GetNeedsReviewRequest__Output as _learningmotors_pb_composer_GetNeedsReviewRequest__Output
} from "../../../learningmotors/pb/composer/GetNeedsReviewRequest";
import type {
  GetNeedsReviewResponse as _learningmotors_pb_composer_GetNeedsReviewResponse,
  GetNeedsReviewResponse__Output as _learningmotors_pb_composer_GetNeedsReviewResponse__Output
} from "../../../learningmotors/pb/composer/GetNeedsReviewResponse";
import type {
  GetRequest as _learningmotors_pb_composer_GetRequest,
  GetRequest__Output as _learningmotors_pb_composer_GetRequest__Output
} from "../../../learningmotors/pb/composer/GetRequest";
import type {
  GetResponse as _learningmotors_pb_composer_GetResponse,
  GetResponse__Output as _learningmotors_pb_composer_GetResponse__Output
} from "../../../learningmotors/pb/composer/GetResponse";
import type {
  GetSectionsRequest as _learningmotors_pb_composer_GetSectionsRequest,
  GetSectionsRequest__Output as _learningmotors_pb_composer_GetSectionsRequest__Output
} from "../../../learningmotors/pb/composer/GetSectionsRequest";
import type {
  GetSectionsResponse as _learningmotors_pb_composer_GetSectionsResponse,
  GetSectionsResponse__Output as _learningmotors_pb_composer_GetSectionsResponse__Output
} from "../../../learningmotors/pb/composer/GetSectionsResponse";
import type {
  GetVersionedRequest as _learningmotors_pb_composer_GetVersionedRequest,
  GetVersionedRequest__Output as _learningmotors_pb_composer_GetVersionedRequest__Output
} from "../../../learningmotors/pb/composer/GetVersionedRequest";
import type {
  GetVersionedResponse as _learningmotors_pb_composer_GetVersionedResponse,
  GetVersionedResponse__Output as _learningmotors_pb_composer_GetVersionedResponse__Output
} from "../../../learningmotors/pb/composer/GetVersionedResponse";
import type {
  MigrateCompositionsInput as _learningmotors_pb_composer_MigrateCompositionsInput,
  MigrateCompositionsInput__Output as _learningmotors_pb_composer_MigrateCompositionsInput__Output
} from "../../../learningmotors/pb/composer/MigrateCompositionsInput";
import type {
  SubmitRequest as _learningmotors_pb_composer_SubmitRequest,
  SubmitRequest__Output as _learningmotors_pb_composer_SubmitRequest__Output
} from "../../../learningmotors/pb/composer/SubmitRequest";
import type {
  SubmitResponse as _learningmotors_pb_composer_SubmitResponse,
  SubmitResponse__Output as _learningmotors_pb_composer_SubmitResponse__Output
} from "../../../learningmotors/pb/composer/SubmitResponse";
import type {
  UpdateRequest as _learningmotors_pb_composer_UpdateRequest,
  UpdateRequest__Output as _learningmotors_pb_composer_UpdateRequest__Output
} from "../../../learningmotors/pb/composer/UpdateRequest";
import type {
  UpdateResponse as _learningmotors_pb_composer_UpdateResponse,
  UpdateResponse__Output as _learningmotors_pb_composer_UpdateResponse__Output
} from "../../../learningmotors/pb/composer/UpdateResponse";

export interface ComposerServiceClient extends grpc.Client {
  AddSection(
    argument: _learningmotors_pb_composer_AddSectionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_composer_AddSectionResponse__Output>
  ): grpc.ClientUnaryCall;
  AddSection(
    argument: _learningmotors_pb_composer_AddSectionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_composer_AddSectionResponse__Output>
  ): grpc.ClientUnaryCall;
  AddSection(
    argument: _learningmotors_pb_composer_AddSectionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_composer_AddSectionResponse__Output>
  ): grpc.ClientUnaryCall;
  AddSection(
    argument: _learningmotors_pb_composer_AddSectionRequest,
    callback: grpc.requestCallback<_learningmotors_pb_composer_AddSectionResponse__Output>
  ): grpc.ClientUnaryCall;
  addSection(
    argument: _learningmotors_pb_composer_AddSectionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_composer_AddSectionResponse__Output>
  ): grpc.ClientUnaryCall;
  addSection(
    argument: _learningmotors_pb_composer_AddSectionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_composer_AddSectionResponse__Output>
  ): grpc.ClientUnaryCall;
  addSection(
    argument: _learningmotors_pb_composer_AddSectionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_composer_AddSectionResponse__Output>
  ): grpc.ClientUnaryCall;
  addSection(
    argument: _learningmotors_pb_composer_AddSectionRequest,
    callback: grpc.requestCallback<_learningmotors_pb_composer_AddSectionResponse__Output>
  ): grpc.ClientUnaryCall;

  Create(
    argument: _learningmotors_pb_composer_CreateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_composer_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  Create(
    argument: _learningmotors_pb_composer_CreateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_composer_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  Create(
    argument: _learningmotors_pb_composer_CreateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_composer_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  Create(
    argument: _learningmotors_pb_composer_CreateRequest,
    callback: grpc.requestCallback<_learningmotors_pb_composer_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  create(
    argument: _learningmotors_pb_composer_CreateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_composer_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  create(
    argument: _learningmotors_pb_composer_CreateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_composer_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  create(
    argument: _learningmotors_pb_composer_CreateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_composer_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  create(
    argument: _learningmotors_pb_composer_CreateRequest,
    callback: grpc.requestCallback<_learningmotors_pb_composer_CreateResponse__Output>
  ): grpc.ClientUnaryCall;

  Delete(
    argument: _learningmotors_pb_composer_DeleteRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Delete(
    argument: _learningmotors_pb_composer_DeleteRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Delete(
    argument: _learningmotors_pb_composer_DeleteRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  Delete(
    argument: _learningmotors_pb_composer_DeleteRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  delete(
    argument: _learningmotors_pb_composer_DeleteRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  delete(
    argument: _learningmotors_pb_composer_DeleteRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  delete(
    argument: _learningmotors_pb_composer_DeleteRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  delete(
    argument: _learningmotors_pb_composer_DeleteRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  DeleteSection(
    argument: _learningmotors_pb_composer_DeleteSectionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteSection(
    argument: _learningmotors_pb_composer_DeleteSectionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteSection(
    argument: _learningmotors_pb_composer_DeleteSectionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteSection(
    argument: _learningmotors_pb_composer_DeleteSectionRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteSection(
    argument: _learningmotors_pb_composer_DeleteSectionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteSection(
    argument: _learningmotors_pb_composer_DeleteSectionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteSection(
    argument: _learningmotors_pb_composer_DeleteSectionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteSection(
    argument: _learningmotors_pb_composer_DeleteSectionRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  Get(
    argument: _learningmotors_pb_composer_GetRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  Get(
    argument: _learningmotors_pb_composer_GetRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  Get(
    argument: _learningmotors_pb_composer_GetRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  Get(
    argument: _learningmotors_pb_composer_GetRequest,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_composer_GetRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_composer_GetRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_composer_GetRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetResponse__Output>
  ): grpc.ClientUnaryCall;
  get(
    argument: _learningmotors_pb_composer_GetRequest,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetResponse__Output>
  ): grpc.ClientUnaryCall;

  GetCompositionOrNote(
    argument: _learningmotors_pb_composer_GetCompositionOrNoteRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetCompositionOrNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  GetCompositionOrNote(
    argument: _learningmotors_pb_composer_GetCompositionOrNoteRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetCompositionOrNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  GetCompositionOrNote(
    argument: _learningmotors_pb_composer_GetCompositionOrNoteRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetCompositionOrNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  GetCompositionOrNote(
    argument: _learningmotors_pb_composer_GetCompositionOrNoteRequest,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetCompositionOrNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  getCompositionOrNote(
    argument: _learningmotors_pb_composer_GetCompositionOrNoteRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetCompositionOrNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  getCompositionOrNote(
    argument: _learningmotors_pb_composer_GetCompositionOrNoteRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetCompositionOrNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  getCompositionOrNote(
    argument: _learningmotors_pb_composer_GetCompositionOrNoteRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetCompositionOrNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  getCompositionOrNote(
    argument: _learningmotors_pb_composer_GetCompositionOrNoteRequest,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetCompositionOrNoteResponse__Output>
  ): grpc.ClientUnaryCall;

  GetNeedsReview(
    argument: _learningmotors_pb_composer_GetNeedsReviewRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetNeedsReviewResponse__Output>
  ): grpc.ClientUnaryCall;
  GetNeedsReview(
    argument: _learningmotors_pb_composer_GetNeedsReviewRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetNeedsReviewResponse__Output>
  ): grpc.ClientUnaryCall;
  GetNeedsReview(
    argument: _learningmotors_pb_composer_GetNeedsReviewRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetNeedsReviewResponse__Output>
  ): grpc.ClientUnaryCall;
  GetNeedsReview(
    argument: _learningmotors_pb_composer_GetNeedsReviewRequest,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetNeedsReviewResponse__Output>
  ): grpc.ClientUnaryCall;
  getNeedsReview(
    argument: _learningmotors_pb_composer_GetNeedsReviewRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetNeedsReviewResponse__Output>
  ): grpc.ClientUnaryCall;
  getNeedsReview(
    argument: _learningmotors_pb_composer_GetNeedsReviewRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetNeedsReviewResponse__Output>
  ): grpc.ClientUnaryCall;
  getNeedsReview(
    argument: _learningmotors_pb_composer_GetNeedsReviewRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetNeedsReviewResponse__Output>
  ): grpc.ClientUnaryCall;
  getNeedsReview(
    argument: _learningmotors_pb_composer_GetNeedsReviewRequest,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetNeedsReviewResponse__Output>
  ): grpc.ClientUnaryCall;

  GetNeedsReviewNoScope(
    argument: _learningmotors_pb_composer_GetNeedsReviewNoScopeRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetNeedsReviewResponse__Output>
  ): grpc.ClientUnaryCall;
  GetNeedsReviewNoScope(
    argument: _learningmotors_pb_composer_GetNeedsReviewNoScopeRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetNeedsReviewResponse__Output>
  ): grpc.ClientUnaryCall;
  GetNeedsReviewNoScope(
    argument: _learningmotors_pb_composer_GetNeedsReviewNoScopeRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetNeedsReviewResponse__Output>
  ): grpc.ClientUnaryCall;
  GetNeedsReviewNoScope(
    argument: _learningmotors_pb_composer_GetNeedsReviewNoScopeRequest,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetNeedsReviewResponse__Output>
  ): grpc.ClientUnaryCall;
  getNeedsReviewNoScope(
    argument: _learningmotors_pb_composer_GetNeedsReviewNoScopeRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetNeedsReviewResponse__Output>
  ): grpc.ClientUnaryCall;
  getNeedsReviewNoScope(
    argument: _learningmotors_pb_composer_GetNeedsReviewNoScopeRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetNeedsReviewResponse__Output>
  ): grpc.ClientUnaryCall;
  getNeedsReviewNoScope(
    argument: _learningmotors_pb_composer_GetNeedsReviewNoScopeRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetNeedsReviewResponse__Output>
  ): grpc.ClientUnaryCall;
  getNeedsReviewNoScope(
    argument: _learningmotors_pb_composer_GetNeedsReviewNoScopeRequest,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetNeedsReviewResponse__Output>
  ): grpc.ClientUnaryCall;

  GetSections(
    argument: _learningmotors_pb_composer_GetSectionsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetSectionsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetSections(
    argument: _learningmotors_pb_composer_GetSectionsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetSectionsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetSections(
    argument: _learningmotors_pb_composer_GetSectionsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetSectionsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetSections(
    argument: _learningmotors_pb_composer_GetSectionsRequest,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetSectionsResponse__Output>
  ): grpc.ClientUnaryCall;
  getSections(
    argument: _learningmotors_pb_composer_GetSectionsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetSectionsResponse__Output>
  ): grpc.ClientUnaryCall;
  getSections(
    argument: _learningmotors_pb_composer_GetSectionsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetSectionsResponse__Output>
  ): grpc.ClientUnaryCall;
  getSections(
    argument: _learningmotors_pb_composer_GetSectionsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetSectionsResponse__Output>
  ): grpc.ClientUnaryCall;
  getSections(
    argument: _learningmotors_pb_composer_GetSectionsRequest,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetSectionsResponse__Output>
  ): grpc.ClientUnaryCall;

  GetVersioned(
    argument: _learningmotors_pb_composer_GetVersionedRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetVersionedResponse__Output>
  ): grpc.ClientUnaryCall;
  GetVersioned(
    argument: _learningmotors_pb_composer_GetVersionedRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetVersionedResponse__Output>
  ): grpc.ClientUnaryCall;
  GetVersioned(
    argument: _learningmotors_pb_composer_GetVersionedRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetVersionedResponse__Output>
  ): grpc.ClientUnaryCall;
  GetVersioned(
    argument: _learningmotors_pb_composer_GetVersionedRequest,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetVersionedResponse__Output>
  ): grpc.ClientUnaryCall;
  getVersioned(
    argument: _learningmotors_pb_composer_GetVersionedRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetVersionedResponse__Output>
  ): grpc.ClientUnaryCall;
  getVersioned(
    argument: _learningmotors_pb_composer_GetVersionedRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetVersionedResponse__Output>
  ): grpc.ClientUnaryCall;
  getVersioned(
    argument: _learningmotors_pb_composer_GetVersionedRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetVersionedResponse__Output>
  ): grpc.ClientUnaryCall;
  getVersioned(
    argument: _learningmotors_pb_composer_GetVersionedRequest,
    callback: grpc.requestCallback<_learningmotors_pb_composer_GetVersionedResponse__Output>
  ): grpc.ClientUnaryCall;

  MigrateCompositionsToS2(
    argument: _learningmotors_pb_composer_MigrateCompositionsInput,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  MigrateCompositionsToS2(
    argument: _learningmotors_pb_composer_MigrateCompositionsInput,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  MigrateCompositionsToS2(
    argument: _learningmotors_pb_composer_MigrateCompositionsInput,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  MigrateCompositionsToS2(
    argument: _learningmotors_pb_composer_MigrateCompositionsInput,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  migrateCompositionsToS2(
    argument: _learningmotors_pb_composer_MigrateCompositionsInput,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  migrateCompositionsToS2(
    argument: _learningmotors_pb_composer_MigrateCompositionsInput,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  migrateCompositionsToS2(
    argument: _learningmotors_pb_composer_MigrateCompositionsInput,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  migrateCompositionsToS2(
    argument: _learningmotors_pb_composer_MigrateCompositionsInput,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  Submit(
    argument: _learningmotors_pb_composer_SubmitRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_composer_SubmitResponse__Output>
  ): grpc.ClientUnaryCall;
  Submit(
    argument: _learningmotors_pb_composer_SubmitRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_composer_SubmitResponse__Output>
  ): grpc.ClientUnaryCall;
  Submit(
    argument: _learningmotors_pb_composer_SubmitRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_composer_SubmitResponse__Output>
  ): grpc.ClientUnaryCall;
  Submit(
    argument: _learningmotors_pb_composer_SubmitRequest,
    callback: grpc.requestCallback<_learningmotors_pb_composer_SubmitResponse__Output>
  ): grpc.ClientUnaryCall;
  submit(
    argument: _learningmotors_pb_composer_SubmitRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_composer_SubmitResponse__Output>
  ): grpc.ClientUnaryCall;
  submit(
    argument: _learningmotors_pb_composer_SubmitRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_composer_SubmitResponse__Output>
  ): grpc.ClientUnaryCall;
  submit(
    argument: _learningmotors_pb_composer_SubmitRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_composer_SubmitResponse__Output>
  ): grpc.ClientUnaryCall;
  submit(
    argument: _learningmotors_pb_composer_SubmitRequest,
    callback: grpc.requestCallback<_learningmotors_pb_composer_SubmitResponse__Output>
  ): grpc.ClientUnaryCall;

  Update(
    argument: _learningmotors_pb_composer_UpdateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_composer_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  Update(
    argument: _learningmotors_pb_composer_UpdateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_composer_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  Update(
    argument: _learningmotors_pb_composer_UpdateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_composer_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  Update(
    argument: _learningmotors_pb_composer_UpdateRequest,
    callback: grpc.requestCallback<_learningmotors_pb_composer_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  update(
    argument: _learningmotors_pb_composer_UpdateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_composer_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  update(
    argument: _learningmotors_pb_composer_UpdateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_composer_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  update(
    argument: _learningmotors_pb_composer_UpdateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_composer_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  update(
    argument: _learningmotors_pb_composer_UpdateRequest,
    callback: grpc.requestCallback<_learningmotors_pb_composer_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
}

export interface ComposerServiceHandlers extends grpc.UntypedServiceImplementation {
  AddSection: grpc.handleUnaryCall<
    _learningmotors_pb_composer_AddSectionRequest__Output,
    _learningmotors_pb_composer_AddSectionResponse
  >;

  Create: grpc.handleUnaryCall<
    _learningmotors_pb_composer_CreateRequest__Output,
    _learningmotors_pb_composer_CreateResponse
  >;

  Delete: grpc.handleUnaryCall<_learningmotors_pb_composer_DeleteRequest__Output, _google_protobuf_Empty>;

  DeleteSection: grpc.handleUnaryCall<_learningmotors_pb_composer_DeleteSectionRequest__Output, _google_protobuf_Empty>;

  Get: grpc.handleUnaryCall<_learningmotors_pb_composer_GetRequest__Output, _learningmotors_pb_composer_GetResponse>;

  GetCompositionOrNote: grpc.handleUnaryCall<
    _learningmotors_pb_composer_GetCompositionOrNoteRequest__Output,
    _learningmotors_pb_composer_GetCompositionOrNoteResponse
  >;

  GetNeedsReview: grpc.handleUnaryCall<
    _learningmotors_pb_composer_GetNeedsReviewRequest__Output,
    _learningmotors_pb_composer_GetNeedsReviewResponse
  >;

  GetNeedsReviewNoScope: grpc.handleUnaryCall<
    _learningmotors_pb_composer_GetNeedsReviewNoScopeRequest__Output,
    _learningmotors_pb_composer_GetNeedsReviewResponse
  >;

  GetSections: grpc.handleUnaryCall<
    _learningmotors_pb_composer_GetSectionsRequest__Output,
    _learningmotors_pb_composer_GetSectionsResponse
  >;

  GetVersioned: grpc.handleUnaryCall<
    _learningmotors_pb_composer_GetVersionedRequest__Output,
    _learningmotors_pb_composer_GetVersionedResponse
  >;

  MigrateCompositionsToS2: grpc.handleUnaryCall<
    _learningmotors_pb_composer_MigrateCompositionsInput__Output,
    _google_protobuf_Empty
  >;

  Submit: grpc.handleUnaryCall<
    _learningmotors_pb_composer_SubmitRequest__Output,
    _learningmotors_pb_composer_SubmitResponse
  >;

  Update: grpc.handleUnaryCall<
    _learningmotors_pb_composer_UpdateRequest__Output,
    _learningmotors_pb_composer_UpdateResponse
  >;
}

export interface ComposerServiceDefinition extends grpc.ServiceDefinition {
  AddSection: MethodDefinition<
    _learningmotors_pb_composer_AddSectionRequest,
    _learningmotors_pb_composer_AddSectionResponse,
    _learningmotors_pb_composer_AddSectionRequest__Output,
    _learningmotors_pb_composer_AddSectionResponse__Output
  >;
  Create: MethodDefinition<
    _learningmotors_pb_composer_CreateRequest,
    _learningmotors_pb_composer_CreateResponse,
    _learningmotors_pb_composer_CreateRequest__Output,
    _learningmotors_pb_composer_CreateResponse__Output
  >;
  Delete: MethodDefinition<
    _learningmotors_pb_composer_DeleteRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_composer_DeleteRequest__Output,
    _google_protobuf_Empty__Output
  >;
  DeleteSection: MethodDefinition<
    _learningmotors_pb_composer_DeleteSectionRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_composer_DeleteSectionRequest__Output,
    _google_protobuf_Empty__Output
  >;
  Get: MethodDefinition<
    _learningmotors_pb_composer_GetRequest,
    _learningmotors_pb_composer_GetResponse,
    _learningmotors_pb_composer_GetRequest__Output,
    _learningmotors_pb_composer_GetResponse__Output
  >;
  GetCompositionOrNote: MethodDefinition<
    _learningmotors_pb_composer_GetCompositionOrNoteRequest,
    _learningmotors_pb_composer_GetCompositionOrNoteResponse,
    _learningmotors_pb_composer_GetCompositionOrNoteRequest__Output,
    _learningmotors_pb_composer_GetCompositionOrNoteResponse__Output
  >;
  GetNeedsReview: MethodDefinition<
    _learningmotors_pb_composer_GetNeedsReviewRequest,
    _learningmotors_pb_composer_GetNeedsReviewResponse,
    _learningmotors_pb_composer_GetNeedsReviewRequest__Output,
    _learningmotors_pb_composer_GetNeedsReviewResponse__Output
  >;
  GetNeedsReviewNoScope: MethodDefinition<
    _learningmotors_pb_composer_GetNeedsReviewNoScopeRequest,
    _learningmotors_pb_composer_GetNeedsReviewResponse,
    _learningmotors_pb_composer_GetNeedsReviewNoScopeRequest__Output,
    _learningmotors_pb_composer_GetNeedsReviewResponse__Output
  >;
  GetSections: MethodDefinition<
    _learningmotors_pb_composer_GetSectionsRequest,
    _learningmotors_pb_composer_GetSectionsResponse,
    _learningmotors_pb_composer_GetSectionsRequest__Output,
    _learningmotors_pb_composer_GetSectionsResponse__Output
  >;
  GetVersioned: MethodDefinition<
    _learningmotors_pb_composer_GetVersionedRequest,
    _learningmotors_pb_composer_GetVersionedResponse,
    _learningmotors_pb_composer_GetVersionedRequest__Output,
    _learningmotors_pb_composer_GetVersionedResponse__Output
  >;
  MigrateCompositionsToS2: MethodDefinition<
    _learningmotors_pb_composer_MigrateCompositionsInput,
    _google_protobuf_Empty,
    _learningmotors_pb_composer_MigrateCompositionsInput__Output,
    _google_protobuf_Empty__Output
  >;
  Submit: MethodDefinition<
    _learningmotors_pb_composer_SubmitRequest,
    _learningmotors_pb_composer_SubmitResponse,
    _learningmotors_pb_composer_SubmitRequest__Output,
    _learningmotors_pb_composer_SubmitResponse__Output
  >;
  Update: MethodDefinition<
    _learningmotors_pb_composer_UpdateRequest,
    _learningmotors_pb_composer_UpdateResponse,
    _learningmotors_pb_composer_UpdateRequest__Output,
    _learningmotors_pb_composer_UpdateResponse__Output
  >;
}
