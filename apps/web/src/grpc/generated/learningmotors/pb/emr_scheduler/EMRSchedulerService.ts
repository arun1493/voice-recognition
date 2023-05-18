// Original file: node_modules/protobufs/src/learningmotors/pb/emr_scheduler/emr_scheduler.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  CheckNoteHealthRequest as _learningmotors_pb_emr_scheduler_CheckNoteHealthRequest,
  CheckNoteHealthRequest__Output as _learningmotors_pb_emr_scheduler_CheckNoteHealthRequest__Output
} from "../../../learningmotors/pb/emr_scheduler/CheckNoteHealthRequest";
import type {
  CheckNoteHealthResponse as _learningmotors_pb_emr_scheduler_CheckNoteHealthResponse,
  CheckNoteHealthResponse__Output as _learningmotors_pb_emr_scheduler_CheckNoteHealthResponse__Output
} from "../../../learningmotors/pb/emr_scheduler/CheckNoteHealthResponse";
import type {
  CheckScheduleHealthRequest as _learningmotors_pb_emr_scheduler_CheckScheduleHealthRequest,
  CheckScheduleHealthRequest__Output as _learningmotors_pb_emr_scheduler_CheckScheduleHealthRequest__Output
} from "../../../learningmotors/pb/emr_scheduler/CheckScheduleHealthRequest";
import type {
  CheckScheduleHealthResponse as _learningmotors_pb_emr_scheduler_CheckScheduleHealthResponse,
  CheckScheduleHealthResponse__Output as _learningmotors_pb_emr_scheduler_CheckScheduleHealthResponse__Output
} from "../../../learningmotors/pb/emr_scheduler/CheckScheduleHealthResponse";
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output
} from "../../../google/protobuf/Empty";
import type {
  NoteIngestionRequest as _learningmotors_pb_emr_scheduler_NoteIngestionRequest,
  NoteIngestionRequest__Output as _learningmotors_pb_emr_scheduler_NoteIngestionRequest__Output
} from "../../../learningmotors/pb/emr_scheduler/NoteIngestionRequest";
import type {
  RefreshAppointmentsRequest as _learningmotors_pb_emr_scheduler_RefreshAppointmentsRequest,
  RefreshAppointmentsRequest__Output as _learningmotors_pb_emr_scheduler_RefreshAppointmentsRequest__Output
} from "../../../learningmotors/pb/emr_scheduler/RefreshAppointmentsRequest";
import type {
  RefreshEncounterFieldsRequest as _learningmotors_pb_emr_scheduler_RefreshEncounterFieldsRequest,
  RefreshEncounterFieldsRequest__Output as _learningmotors_pb_emr_scheduler_RefreshEncounterFieldsRequest__Output
} from "../../../learningmotors/pb/emr_scheduler/RefreshEncounterFieldsRequest";
import type {
  RefreshEncounterFieldsResponse as _learningmotors_pb_emr_scheduler_RefreshEncounterFieldsResponse,
  RefreshEncounterFieldsResponse__Output as _learningmotors_pb_emr_scheduler_RefreshEncounterFieldsResponse__Output
} from "../../../learningmotors/pb/emr_scheduler/RefreshEncounterFieldsResponse";
import type {
  RefreshUserEMRTokenRequest as _learningmotors_pb_emr_scheduler_RefreshUserEMRTokenRequest,
  RefreshUserEMRTokenRequest__Output as _learningmotors_pb_emr_scheduler_RefreshUserEMRTokenRequest__Output
} from "../../../learningmotors/pb/emr_scheduler/RefreshUserEMRTokenRequest";
import type {
  SearchAltaisUserRequest as _learningmotors_pb_emr_scheduler_SearchAltaisUserRequest,
  SearchAltaisUserRequest__Output as _learningmotors_pb_emr_scheduler_SearchAltaisUserRequest__Output
} from "../../../learningmotors/pb/emr_scheduler/SearchAltaisUserRequest";
import type {
  SearchAltaisUserResponse as _learningmotors_pb_emr_scheduler_SearchAltaisUserResponse,
  SearchAltaisUserResponse__Output as _learningmotors_pb_emr_scheduler_SearchAltaisUserResponse__Output
} from "../../../learningmotors/pb/emr_scheduler/SearchAltaisUserResponse";
import type {
  SearchPatientsRequest as _learningmotors_pb_emr_scheduler_SearchPatientsRequest,
  SearchPatientsRequest__Output as _learningmotors_pb_emr_scheduler_SearchPatientsRequest__Output
} from "../../../learningmotors/pb/emr_scheduler/SearchPatientsRequest";
import type {
  SearchPatientsResponse as _learningmotors_pb_emr_scheduler_SearchPatientsResponse,
  SearchPatientsResponse__Output as _learningmotors_pb_emr_scheduler_SearchPatientsResponse__Output
} from "../../../learningmotors/pb/emr_scheduler/SearchPatientsResponse";

export interface EMRSchedulerServiceClient extends grpc.Client {
  CheckNoteHealth(
    argument: _learningmotors_pb_emr_scheduler_CheckNoteHealthRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emr_scheduler_CheckNoteHealthResponse__Output>
  ): grpc.ClientUnaryCall;
  CheckNoteHealth(
    argument: _learningmotors_pb_emr_scheduler_CheckNoteHealthRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emr_scheduler_CheckNoteHealthResponse__Output>
  ): grpc.ClientUnaryCall;
  CheckNoteHealth(
    argument: _learningmotors_pb_emr_scheduler_CheckNoteHealthRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emr_scheduler_CheckNoteHealthResponse__Output>
  ): grpc.ClientUnaryCall;
  CheckNoteHealth(
    argument: _learningmotors_pb_emr_scheduler_CheckNoteHealthRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emr_scheduler_CheckNoteHealthResponse__Output>
  ): grpc.ClientUnaryCall;
  checkNoteHealth(
    argument: _learningmotors_pb_emr_scheduler_CheckNoteHealthRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emr_scheduler_CheckNoteHealthResponse__Output>
  ): grpc.ClientUnaryCall;
  checkNoteHealth(
    argument: _learningmotors_pb_emr_scheduler_CheckNoteHealthRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emr_scheduler_CheckNoteHealthResponse__Output>
  ): grpc.ClientUnaryCall;
  checkNoteHealth(
    argument: _learningmotors_pb_emr_scheduler_CheckNoteHealthRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emr_scheduler_CheckNoteHealthResponse__Output>
  ): grpc.ClientUnaryCall;
  checkNoteHealth(
    argument: _learningmotors_pb_emr_scheduler_CheckNoteHealthRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emr_scheduler_CheckNoteHealthResponse__Output>
  ): grpc.ClientUnaryCall;

  CheckScheduleHealth(
    argument: _learningmotors_pb_emr_scheduler_CheckScheduleHealthRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emr_scheduler_CheckScheduleHealthResponse__Output>
  ): grpc.ClientUnaryCall;
  CheckScheduleHealth(
    argument: _learningmotors_pb_emr_scheduler_CheckScheduleHealthRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emr_scheduler_CheckScheduleHealthResponse__Output>
  ): grpc.ClientUnaryCall;
  CheckScheduleHealth(
    argument: _learningmotors_pb_emr_scheduler_CheckScheduleHealthRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emr_scheduler_CheckScheduleHealthResponse__Output>
  ): grpc.ClientUnaryCall;
  CheckScheduleHealth(
    argument: _learningmotors_pb_emr_scheduler_CheckScheduleHealthRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emr_scheduler_CheckScheduleHealthResponse__Output>
  ): grpc.ClientUnaryCall;
  checkScheduleHealth(
    argument: _learningmotors_pb_emr_scheduler_CheckScheduleHealthRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emr_scheduler_CheckScheduleHealthResponse__Output>
  ): grpc.ClientUnaryCall;
  checkScheduleHealth(
    argument: _learningmotors_pb_emr_scheduler_CheckScheduleHealthRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emr_scheduler_CheckScheduleHealthResponse__Output>
  ): grpc.ClientUnaryCall;
  checkScheduleHealth(
    argument: _learningmotors_pb_emr_scheduler_CheckScheduleHealthRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emr_scheduler_CheckScheduleHealthResponse__Output>
  ): grpc.ClientUnaryCall;
  checkScheduleHealth(
    argument: _learningmotors_pb_emr_scheduler_CheckScheduleHealthRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emr_scheduler_CheckScheduleHealthResponse__Output>
  ): grpc.ClientUnaryCall;

  IngestEMRNotes(
    argument: _learningmotors_pb_emr_scheduler_NoteIngestionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  IngestEMRNotes(
    argument: _learningmotors_pb_emr_scheduler_NoteIngestionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  IngestEMRNotes(
    argument: _learningmotors_pb_emr_scheduler_NoteIngestionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  IngestEMRNotes(
    argument: _learningmotors_pb_emr_scheduler_NoteIngestionRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  ingestEmrNotes(
    argument: _learningmotors_pb_emr_scheduler_NoteIngestionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  ingestEmrNotes(
    argument: _learningmotors_pb_emr_scheduler_NoteIngestionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  ingestEmrNotes(
    argument: _learningmotors_pb_emr_scheduler_NoteIngestionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  ingestEmrNotes(
    argument: _learningmotors_pb_emr_scheduler_NoteIngestionRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  RefreshAppointments(
    argument: _learningmotors_pb_emr_scheduler_RefreshAppointmentsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  RefreshAppointments(
    argument: _learningmotors_pb_emr_scheduler_RefreshAppointmentsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  RefreshAppointments(
    argument: _learningmotors_pb_emr_scheduler_RefreshAppointmentsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  RefreshAppointments(
    argument: _learningmotors_pb_emr_scheduler_RefreshAppointmentsRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  refreshAppointments(
    argument: _learningmotors_pb_emr_scheduler_RefreshAppointmentsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  refreshAppointments(
    argument: _learningmotors_pb_emr_scheduler_RefreshAppointmentsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  refreshAppointments(
    argument: _learningmotors_pb_emr_scheduler_RefreshAppointmentsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  refreshAppointments(
    argument: _learningmotors_pb_emr_scheduler_RefreshAppointmentsRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  RefreshEncounterFields(
    argument: _learningmotors_pb_emr_scheduler_RefreshEncounterFieldsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emr_scheduler_RefreshEncounterFieldsResponse__Output>
  ): grpc.ClientUnaryCall;
  RefreshEncounterFields(
    argument: _learningmotors_pb_emr_scheduler_RefreshEncounterFieldsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emr_scheduler_RefreshEncounterFieldsResponse__Output>
  ): grpc.ClientUnaryCall;
  RefreshEncounterFields(
    argument: _learningmotors_pb_emr_scheduler_RefreshEncounterFieldsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emr_scheduler_RefreshEncounterFieldsResponse__Output>
  ): grpc.ClientUnaryCall;
  RefreshEncounterFields(
    argument: _learningmotors_pb_emr_scheduler_RefreshEncounterFieldsRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emr_scheduler_RefreshEncounterFieldsResponse__Output>
  ): grpc.ClientUnaryCall;
  refreshEncounterFields(
    argument: _learningmotors_pb_emr_scheduler_RefreshEncounterFieldsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emr_scheduler_RefreshEncounterFieldsResponse__Output>
  ): grpc.ClientUnaryCall;
  refreshEncounterFields(
    argument: _learningmotors_pb_emr_scheduler_RefreshEncounterFieldsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emr_scheduler_RefreshEncounterFieldsResponse__Output>
  ): grpc.ClientUnaryCall;
  refreshEncounterFields(
    argument: _learningmotors_pb_emr_scheduler_RefreshEncounterFieldsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emr_scheduler_RefreshEncounterFieldsResponse__Output>
  ): grpc.ClientUnaryCall;
  refreshEncounterFields(
    argument: _learningmotors_pb_emr_scheduler_RefreshEncounterFieldsRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emr_scheduler_RefreshEncounterFieldsResponse__Output>
  ): grpc.ClientUnaryCall;

  RefreshUserEMRToken(
    argument: _learningmotors_pb_emr_scheduler_RefreshUserEMRTokenRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  RefreshUserEMRToken(
    argument: _learningmotors_pb_emr_scheduler_RefreshUserEMRTokenRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  RefreshUserEMRToken(
    argument: _learningmotors_pb_emr_scheduler_RefreshUserEMRTokenRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  RefreshUserEMRToken(
    argument: _learningmotors_pb_emr_scheduler_RefreshUserEMRTokenRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  refreshUserEmrToken(
    argument: _learningmotors_pb_emr_scheduler_RefreshUserEMRTokenRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  refreshUserEmrToken(
    argument: _learningmotors_pb_emr_scheduler_RefreshUserEMRTokenRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  refreshUserEmrToken(
    argument: _learningmotors_pb_emr_scheduler_RefreshUserEMRTokenRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  refreshUserEmrToken(
    argument: _learningmotors_pb_emr_scheduler_RefreshUserEMRTokenRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  SearchAltaisUser(
    argument: _learningmotors_pb_emr_scheduler_SearchAltaisUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emr_scheduler_SearchAltaisUserResponse__Output>
  ): grpc.ClientUnaryCall;
  SearchAltaisUser(
    argument: _learningmotors_pb_emr_scheduler_SearchAltaisUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emr_scheduler_SearchAltaisUserResponse__Output>
  ): grpc.ClientUnaryCall;
  SearchAltaisUser(
    argument: _learningmotors_pb_emr_scheduler_SearchAltaisUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emr_scheduler_SearchAltaisUserResponse__Output>
  ): grpc.ClientUnaryCall;
  SearchAltaisUser(
    argument: _learningmotors_pb_emr_scheduler_SearchAltaisUserRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emr_scheduler_SearchAltaisUserResponse__Output>
  ): grpc.ClientUnaryCall;
  searchAltaisUser(
    argument: _learningmotors_pb_emr_scheduler_SearchAltaisUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emr_scheduler_SearchAltaisUserResponse__Output>
  ): grpc.ClientUnaryCall;
  searchAltaisUser(
    argument: _learningmotors_pb_emr_scheduler_SearchAltaisUserRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emr_scheduler_SearchAltaisUserResponse__Output>
  ): grpc.ClientUnaryCall;
  searchAltaisUser(
    argument: _learningmotors_pb_emr_scheduler_SearchAltaisUserRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emr_scheduler_SearchAltaisUserResponse__Output>
  ): grpc.ClientUnaryCall;
  searchAltaisUser(
    argument: _learningmotors_pb_emr_scheduler_SearchAltaisUserRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emr_scheduler_SearchAltaisUserResponse__Output>
  ): grpc.ClientUnaryCall;

  SearchPatients(
    argument: _learningmotors_pb_emr_scheduler_SearchPatientsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emr_scheduler_SearchPatientsResponse__Output>
  ): grpc.ClientUnaryCall;
  SearchPatients(
    argument: _learningmotors_pb_emr_scheduler_SearchPatientsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emr_scheduler_SearchPatientsResponse__Output>
  ): grpc.ClientUnaryCall;
  SearchPatients(
    argument: _learningmotors_pb_emr_scheduler_SearchPatientsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emr_scheduler_SearchPatientsResponse__Output>
  ): grpc.ClientUnaryCall;
  SearchPatients(
    argument: _learningmotors_pb_emr_scheduler_SearchPatientsRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emr_scheduler_SearchPatientsResponse__Output>
  ): grpc.ClientUnaryCall;
  searchPatients(
    argument: _learningmotors_pb_emr_scheduler_SearchPatientsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emr_scheduler_SearchPatientsResponse__Output>
  ): grpc.ClientUnaryCall;
  searchPatients(
    argument: _learningmotors_pb_emr_scheduler_SearchPatientsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emr_scheduler_SearchPatientsResponse__Output>
  ): grpc.ClientUnaryCall;
  searchPatients(
    argument: _learningmotors_pb_emr_scheduler_SearchPatientsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emr_scheduler_SearchPatientsResponse__Output>
  ): grpc.ClientUnaryCall;
  searchPatients(
    argument: _learningmotors_pb_emr_scheduler_SearchPatientsRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emr_scheduler_SearchPatientsResponse__Output>
  ): grpc.ClientUnaryCall;
}

export interface EMRSchedulerServiceHandlers extends grpc.UntypedServiceImplementation {
  CheckNoteHealth: grpc.handleUnaryCall<
    _learningmotors_pb_emr_scheduler_CheckNoteHealthRequest__Output,
    _learningmotors_pb_emr_scheduler_CheckNoteHealthResponse
  >;

  CheckScheduleHealth: grpc.handleUnaryCall<
    _learningmotors_pb_emr_scheduler_CheckScheduleHealthRequest__Output,
    _learningmotors_pb_emr_scheduler_CheckScheduleHealthResponse
  >;

  IngestEMRNotes: grpc.handleUnaryCall<
    _learningmotors_pb_emr_scheduler_NoteIngestionRequest__Output,
    _google_protobuf_Empty
  >;

  RefreshAppointments: grpc.handleUnaryCall<
    _learningmotors_pb_emr_scheduler_RefreshAppointmentsRequest__Output,
    _google_protobuf_Empty
  >;

  RefreshEncounterFields: grpc.handleUnaryCall<
    _learningmotors_pb_emr_scheduler_RefreshEncounterFieldsRequest__Output,
    _learningmotors_pb_emr_scheduler_RefreshEncounterFieldsResponse
  >;

  RefreshUserEMRToken: grpc.handleUnaryCall<
    _learningmotors_pb_emr_scheduler_RefreshUserEMRTokenRequest__Output,
    _google_protobuf_Empty
  >;

  SearchAltaisUser: grpc.handleUnaryCall<
    _learningmotors_pb_emr_scheduler_SearchAltaisUserRequest__Output,
    _learningmotors_pb_emr_scheduler_SearchAltaisUserResponse
  >;

  SearchPatients: grpc.handleUnaryCall<
    _learningmotors_pb_emr_scheduler_SearchPatientsRequest__Output,
    _learningmotors_pb_emr_scheduler_SearchPatientsResponse
  >;
}

export interface EMRSchedulerServiceDefinition extends grpc.ServiceDefinition {
  CheckNoteHealth: MethodDefinition<
    _learningmotors_pb_emr_scheduler_CheckNoteHealthRequest,
    _learningmotors_pb_emr_scheduler_CheckNoteHealthResponse,
    _learningmotors_pb_emr_scheduler_CheckNoteHealthRequest__Output,
    _learningmotors_pb_emr_scheduler_CheckNoteHealthResponse__Output
  >;
  CheckScheduleHealth: MethodDefinition<
    _learningmotors_pb_emr_scheduler_CheckScheduleHealthRequest,
    _learningmotors_pb_emr_scheduler_CheckScheduleHealthResponse,
    _learningmotors_pb_emr_scheduler_CheckScheduleHealthRequest__Output,
    _learningmotors_pb_emr_scheduler_CheckScheduleHealthResponse__Output
  >;
  IngestEMRNotes: MethodDefinition<
    _learningmotors_pb_emr_scheduler_NoteIngestionRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_emr_scheduler_NoteIngestionRequest__Output,
    _google_protobuf_Empty__Output
  >;
  RefreshAppointments: MethodDefinition<
    _learningmotors_pb_emr_scheduler_RefreshAppointmentsRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_emr_scheduler_RefreshAppointmentsRequest__Output,
    _google_protobuf_Empty__Output
  >;
  RefreshEncounterFields: MethodDefinition<
    _learningmotors_pb_emr_scheduler_RefreshEncounterFieldsRequest,
    _learningmotors_pb_emr_scheduler_RefreshEncounterFieldsResponse,
    _learningmotors_pb_emr_scheduler_RefreshEncounterFieldsRequest__Output,
    _learningmotors_pb_emr_scheduler_RefreshEncounterFieldsResponse__Output
  >;
  RefreshUserEMRToken: MethodDefinition<
    _learningmotors_pb_emr_scheduler_RefreshUserEMRTokenRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_emr_scheduler_RefreshUserEMRTokenRequest__Output,
    _google_protobuf_Empty__Output
  >;
  SearchAltaisUser: MethodDefinition<
    _learningmotors_pb_emr_scheduler_SearchAltaisUserRequest,
    _learningmotors_pb_emr_scheduler_SearchAltaisUserResponse,
    _learningmotors_pb_emr_scheduler_SearchAltaisUserRequest__Output,
    _learningmotors_pb_emr_scheduler_SearchAltaisUserResponse__Output
  >;
  SearchPatients: MethodDefinition<
    _learningmotors_pb_emr_scheduler_SearchPatientsRequest,
    _learningmotors_pb_emr_scheduler_SearchPatientsResponse,
    _learningmotors_pb_emr_scheduler_SearchPatientsRequest__Output,
    _learningmotors_pb_emr_scheduler_SearchPatientsResponse__Output
  >;
}
