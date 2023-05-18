// Original file: node_modules/protobufs/src/learningmotors/pb/appointments.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  BackfillAppointmentDataRequest as _learningmotors_pb_BackfillAppointmentDataRequest,
  BackfillAppointmentDataRequest__Output as _learningmotors_pb_BackfillAppointmentDataRequest__Output
} from "../../learningmotors/pb/BackfillAppointmentDataRequest";
import type {
  CreateOrUpdateAppointmentRequest as _learningmotors_pb_CreateOrUpdateAppointmentRequest,
  CreateOrUpdateAppointmentRequest__Output as _learningmotors_pb_CreateOrUpdateAppointmentRequest__Output
} from "../../learningmotors/pb/CreateOrUpdateAppointmentRequest";
import type {
  CreateOrUpdateAppointmentResponse as _learningmotors_pb_CreateOrUpdateAppointmentResponse,
  CreateOrUpdateAppointmentResponse__Output as _learningmotors_pb_CreateOrUpdateAppointmentResponse__Output
} from "../../learningmotors/pb/CreateOrUpdateAppointmentResponse";
import type {
  DeleteAppointmentsRequest as _learningmotors_pb_DeleteAppointmentsRequest,
  DeleteAppointmentsRequest__Output as _learningmotors_pb_DeleteAppointmentsRequest__Output
} from "../../learningmotors/pb/DeleteAppointmentsRequest";
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output
} from "../../google/protobuf/Empty";
import type {
  GetAppointmentFromEMRRequest as _learningmotors_pb_GetAppointmentFromEMRRequest,
  GetAppointmentFromEMRRequest__Output as _learningmotors_pb_GetAppointmentFromEMRRequest__Output
} from "../../learningmotors/pb/GetAppointmentFromEMRRequest";
import type {
  GetAppointmentFromEMRResponse as _learningmotors_pb_GetAppointmentFromEMRResponse,
  GetAppointmentFromEMRResponse__Output as _learningmotors_pb_GetAppointmentFromEMRResponse__Output
} from "../../learningmotors/pb/GetAppointmentFromEMRResponse";
import type {
  GetAppointmentsRequest as _learningmotors_pb_GetAppointmentsRequest,
  GetAppointmentsRequest__Output as _learningmotors_pb_GetAppointmentsRequest__Output
} from "../../learningmotors/pb/GetAppointmentsRequest";
import type {
  GetAppointmentsResponse as _learningmotors_pb_GetAppointmentsResponse,
  GetAppointmentsResponse__Output as _learningmotors_pb_GetAppointmentsResponse__Output
} from "../../learningmotors/pb/GetAppointmentsResponse";
import type {
  GetMostRecentAppointmentRequest as _learningmotors_pb_GetMostRecentAppointmentRequest,
  GetMostRecentAppointmentRequest__Output as _learningmotors_pb_GetMostRecentAppointmentRequest__Output
} from "../../learningmotors/pb/GetMostRecentAppointmentRequest";
import type {
  GetMostRecentAppointmentResponse as _learningmotors_pb_GetMostRecentAppointmentResponse,
  GetMostRecentAppointmentResponse__Output as _learningmotors_pb_GetMostRecentAppointmentResponse__Output
} from "../../learningmotors/pb/GetMostRecentAppointmentResponse";
import type {
  MoveCompositionToNewAppointmentRequest as _learningmotors_pb_MoveCompositionToNewAppointmentRequest,
  MoveCompositionToNewAppointmentRequest__Output as _learningmotors_pb_MoveCompositionToNewAppointmentRequest__Output
} from "../../learningmotors/pb/MoveCompositionToNewAppointmentRequest";
import type {
  MoveCompositionToNewAppointmentResponse as _learningmotors_pb_MoveCompositionToNewAppointmentResponse,
  MoveCompositionToNewAppointmentResponse__Output as _learningmotors_pb_MoveCompositionToNewAppointmentResponse__Output
} from "../../learningmotors/pb/MoveCompositionToNewAppointmentResponse";
import type {
  UpdateAppointmentCompositionRequest as _learningmotors_pb_UpdateAppointmentCompositionRequest,
  UpdateAppointmentCompositionRequest__Output as _learningmotors_pb_UpdateAppointmentCompositionRequest__Output
} from "../../learningmotors/pb/UpdateAppointmentCompositionRequest";
import type {
  UpdateAppointmentCompositionResponse as _learningmotors_pb_UpdateAppointmentCompositionResponse,
  UpdateAppointmentCompositionResponse__Output as _learningmotors_pb_UpdateAppointmentCompositionResponse__Output
} from "../../learningmotors/pb/UpdateAppointmentCompositionResponse";

export interface AppointmentServiceClient extends grpc.Client {
  AddCompositionToAppointment(
    argument: _learningmotors_pb_UpdateAppointmentCompositionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_UpdateAppointmentCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  AddCompositionToAppointment(
    argument: _learningmotors_pb_UpdateAppointmentCompositionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_UpdateAppointmentCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  AddCompositionToAppointment(
    argument: _learningmotors_pb_UpdateAppointmentCompositionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_UpdateAppointmentCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  AddCompositionToAppointment(
    argument: _learningmotors_pb_UpdateAppointmentCompositionRequest,
    callback: grpc.requestCallback<_learningmotors_pb_UpdateAppointmentCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  addCompositionToAppointment(
    argument: _learningmotors_pb_UpdateAppointmentCompositionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_UpdateAppointmentCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  addCompositionToAppointment(
    argument: _learningmotors_pb_UpdateAppointmentCompositionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_UpdateAppointmentCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  addCompositionToAppointment(
    argument: _learningmotors_pb_UpdateAppointmentCompositionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_UpdateAppointmentCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  addCompositionToAppointment(
    argument: _learningmotors_pb_UpdateAppointmentCompositionRequest,
    callback: grpc.requestCallback<_learningmotors_pb_UpdateAppointmentCompositionResponse__Output>
  ): grpc.ClientUnaryCall;

  BackfillAppointmentData(
    argument: _learningmotors_pb_BackfillAppointmentDataRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  BackfillAppointmentData(
    argument: _learningmotors_pb_BackfillAppointmentDataRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  BackfillAppointmentData(
    argument: _learningmotors_pb_BackfillAppointmentDataRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  BackfillAppointmentData(
    argument: _learningmotors_pb_BackfillAppointmentDataRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  backfillAppointmentData(
    argument: _learningmotors_pb_BackfillAppointmentDataRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  backfillAppointmentData(
    argument: _learningmotors_pb_BackfillAppointmentDataRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  backfillAppointmentData(
    argument: _learningmotors_pb_BackfillAppointmentDataRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  backfillAppointmentData(
    argument: _learningmotors_pb_BackfillAppointmentDataRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  CreateOrUpdateAppointment(
    argument: _learningmotors_pb_CreateOrUpdateAppointmentRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_CreateOrUpdateAppointmentResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateOrUpdateAppointment(
    argument: _learningmotors_pb_CreateOrUpdateAppointmentRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_CreateOrUpdateAppointmentResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateOrUpdateAppointment(
    argument: _learningmotors_pb_CreateOrUpdateAppointmentRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_CreateOrUpdateAppointmentResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateOrUpdateAppointment(
    argument: _learningmotors_pb_CreateOrUpdateAppointmentRequest,
    callback: grpc.requestCallback<_learningmotors_pb_CreateOrUpdateAppointmentResponse__Output>
  ): grpc.ClientUnaryCall;
  createOrUpdateAppointment(
    argument: _learningmotors_pb_CreateOrUpdateAppointmentRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_CreateOrUpdateAppointmentResponse__Output>
  ): grpc.ClientUnaryCall;
  createOrUpdateAppointment(
    argument: _learningmotors_pb_CreateOrUpdateAppointmentRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_CreateOrUpdateAppointmentResponse__Output>
  ): grpc.ClientUnaryCall;
  createOrUpdateAppointment(
    argument: _learningmotors_pb_CreateOrUpdateAppointmentRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_CreateOrUpdateAppointmentResponse__Output>
  ): grpc.ClientUnaryCall;
  createOrUpdateAppointment(
    argument: _learningmotors_pb_CreateOrUpdateAppointmentRequest,
    callback: grpc.requestCallback<_learningmotors_pb_CreateOrUpdateAppointmentResponse__Output>
  ): grpc.ClientUnaryCall;

  DeleteAppointments(
    argument: _learningmotors_pb_DeleteAppointmentsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteAppointments(
    argument: _learningmotors_pb_DeleteAppointmentsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteAppointments(
    argument: _learningmotors_pb_DeleteAppointmentsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteAppointments(
    argument: _learningmotors_pb_DeleteAppointmentsRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteAppointments(
    argument: _learningmotors_pb_DeleteAppointmentsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteAppointments(
    argument: _learningmotors_pb_DeleteAppointmentsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteAppointments(
    argument: _learningmotors_pb_DeleteAppointmentsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteAppointments(
    argument: _learningmotors_pb_DeleteAppointmentsRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  GetAppointments(
    argument: _learningmotors_pb_GetAppointmentsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_GetAppointmentsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetAppointments(
    argument: _learningmotors_pb_GetAppointmentsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_GetAppointmentsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetAppointments(
    argument: _learningmotors_pb_GetAppointmentsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_GetAppointmentsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetAppointments(
    argument: _learningmotors_pb_GetAppointmentsRequest,
    callback: grpc.requestCallback<_learningmotors_pb_GetAppointmentsResponse__Output>
  ): grpc.ClientUnaryCall;
  getAppointments(
    argument: _learningmotors_pb_GetAppointmentsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_GetAppointmentsResponse__Output>
  ): grpc.ClientUnaryCall;
  getAppointments(
    argument: _learningmotors_pb_GetAppointmentsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_GetAppointmentsResponse__Output>
  ): grpc.ClientUnaryCall;
  getAppointments(
    argument: _learningmotors_pb_GetAppointmentsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_GetAppointmentsResponse__Output>
  ): grpc.ClientUnaryCall;
  getAppointments(
    argument: _learningmotors_pb_GetAppointmentsRequest,
    callback: grpc.requestCallback<_learningmotors_pb_GetAppointmentsResponse__Output>
  ): grpc.ClientUnaryCall;

  GetAppointmentsFromEMR(
    argument: _learningmotors_pb_GetAppointmentFromEMRRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_GetAppointmentFromEMRResponse__Output>
  ): grpc.ClientUnaryCall;
  GetAppointmentsFromEMR(
    argument: _learningmotors_pb_GetAppointmentFromEMRRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_GetAppointmentFromEMRResponse__Output>
  ): grpc.ClientUnaryCall;
  GetAppointmentsFromEMR(
    argument: _learningmotors_pb_GetAppointmentFromEMRRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_GetAppointmentFromEMRResponse__Output>
  ): grpc.ClientUnaryCall;
  GetAppointmentsFromEMR(
    argument: _learningmotors_pb_GetAppointmentFromEMRRequest,
    callback: grpc.requestCallback<_learningmotors_pb_GetAppointmentFromEMRResponse__Output>
  ): grpc.ClientUnaryCall;
  getAppointmentsFromEmr(
    argument: _learningmotors_pb_GetAppointmentFromEMRRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_GetAppointmentFromEMRResponse__Output>
  ): grpc.ClientUnaryCall;
  getAppointmentsFromEmr(
    argument: _learningmotors_pb_GetAppointmentFromEMRRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_GetAppointmentFromEMRResponse__Output>
  ): grpc.ClientUnaryCall;
  getAppointmentsFromEmr(
    argument: _learningmotors_pb_GetAppointmentFromEMRRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_GetAppointmentFromEMRResponse__Output>
  ): grpc.ClientUnaryCall;
  getAppointmentsFromEmr(
    argument: _learningmotors_pb_GetAppointmentFromEMRRequest,
    callback: grpc.requestCallback<_learningmotors_pb_GetAppointmentFromEMRResponse__Output>
  ): grpc.ClientUnaryCall;

  GetMostRecentAppointment(
    argument: _learningmotors_pb_GetMostRecentAppointmentRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_GetMostRecentAppointmentResponse__Output>
  ): grpc.ClientUnaryCall;
  GetMostRecentAppointment(
    argument: _learningmotors_pb_GetMostRecentAppointmentRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_GetMostRecentAppointmentResponse__Output>
  ): grpc.ClientUnaryCall;
  GetMostRecentAppointment(
    argument: _learningmotors_pb_GetMostRecentAppointmentRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_GetMostRecentAppointmentResponse__Output>
  ): grpc.ClientUnaryCall;
  GetMostRecentAppointment(
    argument: _learningmotors_pb_GetMostRecentAppointmentRequest,
    callback: grpc.requestCallback<_learningmotors_pb_GetMostRecentAppointmentResponse__Output>
  ): grpc.ClientUnaryCall;
  getMostRecentAppointment(
    argument: _learningmotors_pb_GetMostRecentAppointmentRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_GetMostRecentAppointmentResponse__Output>
  ): grpc.ClientUnaryCall;
  getMostRecentAppointment(
    argument: _learningmotors_pb_GetMostRecentAppointmentRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_GetMostRecentAppointmentResponse__Output>
  ): grpc.ClientUnaryCall;
  getMostRecentAppointment(
    argument: _learningmotors_pb_GetMostRecentAppointmentRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_GetMostRecentAppointmentResponse__Output>
  ): grpc.ClientUnaryCall;
  getMostRecentAppointment(
    argument: _learningmotors_pb_GetMostRecentAppointmentRequest,
    callback: grpc.requestCallback<_learningmotors_pb_GetMostRecentAppointmentResponse__Output>
  ): grpc.ClientUnaryCall;

  MoveCompositionToNewAppointment(
    argument: _learningmotors_pb_MoveCompositionToNewAppointmentRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_MoveCompositionToNewAppointmentResponse__Output>
  ): grpc.ClientUnaryCall;
  MoveCompositionToNewAppointment(
    argument: _learningmotors_pb_MoveCompositionToNewAppointmentRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_MoveCompositionToNewAppointmentResponse__Output>
  ): grpc.ClientUnaryCall;
  MoveCompositionToNewAppointment(
    argument: _learningmotors_pb_MoveCompositionToNewAppointmentRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_MoveCompositionToNewAppointmentResponse__Output>
  ): grpc.ClientUnaryCall;
  MoveCompositionToNewAppointment(
    argument: _learningmotors_pb_MoveCompositionToNewAppointmentRequest,
    callback: grpc.requestCallback<_learningmotors_pb_MoveCompositionToNewAppointmentResponse__Output>
  ): grpc.ClientUnaryCall;
  moveCompositionToNewAppointment(
    argument: _learningmotors_pb_MoveCompositionToNewAppointmentRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_MoveCompositionToNewAppointmentResponse__Output>
  ): grpc.ClientUnaryCall;
  moveCompositionToNewAppointment(
    argument: _learningmotors_pb_MoveCompositionToNewAppointmentRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_MoveCompositionToNewAppointmentResponse__Output>
  ): grpc.ClientUnaryCall;
  moveCompositionToNewAppointment(
    argument: _learningmotors_pb_MoveCompositionToNewAppointmentRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_MoveCompositionToNewAppointmentResponse__Output>
  ): grpc.ClientUnaryCall;
  moveCompositionToNewAppointment(
    argument: _learningmotors_pb_MoveCompositionToNewAppointmentRequest,
    callback: grpc.requestCallback<_learningmotors_pb_MoveCompositionToNewAppointmentResponse__Output>
  ): grpc.ClientUnaryCall;

  RemoveCompositionFromAppointment(
    argument: _learningmotors_pb_UpdateAppointmentCompositionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_UpdateAppointmentCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  RemoveCompositionFromAppointment(
    argument: _learningmotors_pb_UpdateAppointmentCompositionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_UpdateAppointmentCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  RemoveCompositionFromAppointment(
    argument: _learningmotors_pb_UpdateAppointmentCompositionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_UpdateAppointmentCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  RemoveCompositionFromAppointment(
    argument: _learningmotors_pb_UpdateAppointmentCompositionRequest,
    callback: grpc.requestCallback<_learningmotors_pb_UpdateAppointmentCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  removeCompositionFromAppointment(
    argument: _learningmotors_pb_UpdateAppointmentCompositionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_UpdateAppointmentCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  removeCompositionFromAppointment(
    argument: _learningmotors_pb_UpdateAppointmentCompositionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_UpdateAppointmentCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  removeCompositionFromAppointment(
    argument: _learningmotors_pb_UpdateAppointmentCompositionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_UpdateAppointmentCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  removeCompositionFromAppointment(
    argument: _learningmotors_pb_UpdateAppointmentCompositionRequest,
    callback: grpc.requestCallback<_learningmotors_pb_UpdateAppointmentCompositionResponse__Output>
  ): grpc.ClientUnaryCall;

  UpdateCompositionIDInAppointment(
    argument: _learningmotors_pb_UpdateAppointmentCompositionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_UpdateAppointmentCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  UpdateCompositionIDInAppointment(
    argument: _learningmotors_pb_UpdateAppointmentCompositionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_UpdateAppointmentCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  UpdateCompositionIDInAppointment(
    argument: _learningmotors_pb_UpdateAppointmentCompositionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_UpdateAppointmentCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  UpdateCompositionIDInAppointment(
    argument: _learningmotors_pb_UpdateAppointmentCompositionRequest,
    callback: grpc.requestCallback<_learningmotors_pb_UpdateAppointmentCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  updateCompositionIdInAppointment(
    argument: _learningmotors_pb_UpdateAppointmentCompositionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_UpdateAppointmentCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  updateCompositionIdInAppointment(
    argument: _learningmotors_pb_UpdateAppointmentCompositionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_UpdateAppointmentCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  updateCompositionIdInAppointment(
    argument: _learningmotors_pb_UpdateAppointmentCompositionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_UpdateAppointmentCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  updateCompositionIdInAppointment(
    argument: _learningmotors_pb_UpdateAppointmentCompositionRequest,
    callback: grpc.requestCallback<_learningmotors_pb_UpdateAppointmentCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
}

export interface AppointmentServiceHandlers extends grpc.UntypedServiceImplementation {
  AddCompositionToAppointment: grpc.handleUnaryCall<
    _learningmotors_pb_UpdateAppointmentCompositionRequest__Output,
    _learningmotors_pb_UpdateAppointmentCompositionResponse
  >;

  BackfillAppointmentData: grpc.handleUnaryCall<
    _learningmotors_pb_BackfillAppointmentDataRequest__Output,
    _google_protobuf_Empty
  >;

  CreateOrUpdateAppointment: grpc.handleUnaryCall<
    _learningmotors_pb_CreateOrUpdateAppointmentRequest__Output,
    _learningmotors_pb_CreateOrUpdateAppointmentResponse
  >;

  DeleteAppointments: grpc.handleUnaryCall<
    _learningmotors_pb_DeleteAppointmentsRequest__Output,
    _google_protobuf_Empty
  >;

  GetAppointments: grpc.handleUnaryCall<
    _learningmotors_pb_GetAppointmentsRequest__Output,
    _learningmotors_pb_GetAppointmentsResponse
  >;

  GetAppointmentsFromEMR: grpc.handleUnaryCall<
    _learningmotors_pb_GetAppointmentFromEMRRequest__Output,
    _learningmotors_pb_GetAppointmentFromEMRResponse
  >;

  GetMostRecentAppointment: grpc.handleUnaryCall<
    _learningmotors_pb_GetMostRecentAppointmentRequest__Output,
    _learningmotors_pb_GetMostRecentAppointmentResponse
  >;

  MoveCompositionToNewAppointment: grpc.handleUnaryCall<
    _learningmotors_pb_MoveCompositionToNewAppointmentRequest__Output,
    _learningmotors_pb_MoveCompositionToNewAppointmentResponse
  >;

  RemoveCompositionFromAppointment: grpc.handleUnaryCall<
    _learningmotors_pb_UpdateAppointmentCompositionRequest__Output,
    _learningmotors_pb_UpdateAppointmentCompositionResponse
  >;

  UpdateCompositionIDInAppointment: grpc.handleUnaryCall<
    _learningmotors_pb_UpdateAppointmentCompositionRequest__Output,
    _learningmotors_pb_UpdateAppointmentCompositionResponse
  >;
}

export interface AppointmentServiceDefinition extends grpc.ServiceDefinition {
  AddCompositionToAppointment: MethodDefinition<
    _learningmotors_pb_UpdateAppointmentCompositionRequest,
    _learningmotors_pb_UpdateAppointmentCompositionResponse,
    _learningmotors_pb_UpdateAppointmentCompositionRequest__Output,
    _learningmotors_pb_UpdateAppointmentCompositionResponse__Output
  >;
  BackfillAppointmentData: MethodDefinition<
    _learningmotors_pb_BackfillAppointmentDataRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_BackfillAppointmentDataRequest__Output,
    _google_protobuf_Empty__Output
  >;
  CreateOrUpdateAppointment: MethodDefinition<
    _learningmotors_pb_CreateOrUpdateAppointmentRequest,
    _learningmotors_pb_CreateOrUpdateAppointmentResponse,
    _learningmotors_pb_CreateOrUpdateAppointmentRequest__Output,
    _learningmotors_pb_CreateOrUpdateAppointmentResponse__Output
  >;
  DeleteAppointments: MethodDefinition<
    _learningmotors_pb_DeleteAppointmentsRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_DeleteAppointmentsRequest__Output,
    _google_protobuf_Empty__Output
  >;
  GetAppointments: MethodDefinition<
    _learningmotors_pb_GetAppointmentsRequest,
    _learningmotors_pb_GetAppointmentsResponse,
    _learningmotors_pb_GetAppointmentsRequest__Output,
    _learningmotors_pb_GetAppointmentsResponse__Output
  >;
  GetAppointmentsFromEMR: MethodDefinition<
    _learningmotors_pb_GetAppointmentFromEMRRequest,
    _learningmotors_pb_GetAppointmentFromEMRResponse,
    _learningmotors_pb_GetAppointmentFromEMRRequest__Output,
    _learningmotors_pb_GetAppointmentFromEMRResponse__Output
  >;
  GetMostRecentAppointment: MethodDefinition<
    _learningmotors_pb_GetMostRecentAppointmentRequest,
    _learningmotors_pb_GetMostRecentAppointmentResponse,
    _learningmotors_pb_GetMostRecentAppointmentRequest__Output,
    _learningmotors_pb_GetMostRecentAppointmentResponse__Output
  >;
  MoveCompositionToNewAppointment: MethodDefinition<
    _learningmotors_pb_MoveCompositionToNewAppointmentRequest,
    _learningmotors_pb_MoveCompositionToNewAppointmentResponse,
    _learningmotors_pb_MoveCompositionToNewAppointmentRequest__Output,
    _learningmotors_pb_MoveCompositionToNewAppointmentResponse__Output
  >;
  RemoveCompositionFromAppointment: MethodDefinition<
    _learningmotors_pb_UpdateAppointmentCompositionRequest,
    _learningmotors_pb_UpdateAppointmentCompositionResponse,
    _learningmotors_pb_UpdateAppointmentCompositionRequest__Output,
    _learningmotors_pb_UpdateAppointmentCompositionResponse__Output
  >;
  UpdateCompositionIDInAppointment: MethodDefinition<
    _learningmotors_pb_UpdateAppointmentCompositionRequest,
    _learningmotors_pb_UpdateAppointmentCompositionResponse,
    _learningmotors_pb_UpdateAppointmentCompositionRequest__Output,
    _learningmotors_pb_UpdateAppointmentCompositionResponse__Output
  >;
}
