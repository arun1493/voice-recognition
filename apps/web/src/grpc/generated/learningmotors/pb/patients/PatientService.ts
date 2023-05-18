// Original file: node_modules/protobufs/src/learningmotors/pb/patients/patients.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  AddToPatientListRequest as _learningmotors_pb_patients_AddToPatientListRequest,
  AddToPatientListRequest__Output as _learningmotors_pb_patients_AddToPatientListRequest__Output
} from "../../../learningmotors/pb/patients/AddToPatientListRequest";
import type {
  AddToPatientListResponse as _learningmotors_pb_patients_AddToPatientListResponse,
  AddToPatientListResponse__Output as _learningmotors_pb_patients_AddToPatientListResponse__Output
} from "../../../learningmotors/pb/patients/AddToPatientListResponse";
import type {
  CreateOrUpdatePatientsRequest as _learningmotors_pb_patients_CreateOrUpdatePatientsRequest,
  CreateOrUpdatePatientsRequest__Output as _learningmotors_pb_patients_CreateOrUpdatePatientsRequest__Output
} from "../../../learningmotors/pb/patients/CreateOrUpdatePatientsRequest";
import type {
  CreateOrUpdatePatientsResponse as _learningmotors_pb_patients_CreateOrUpdatePatientsResponse,
  CreateOrUpdatePatientsResponse__Output as _learningmotors_pb_patients_CreateOrUpdatePatientsResponse__Output
} from "../../../learningmotors/pb/patients/CreateOrUpdatePatientsResponse";
import type {
  DeletePatientsRequest as _learningmotors_pb_patients_DeletePatientsRequest,
  DeletePatientsRequest__Output as _learningmotors_pb_patients_DeletePatientsRequest__Output
} from "../../../learningmotors/pb/patients/DeletePatientsRequest";
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output
} from "../../../google/protobuf/Empty";
import type {
  GetPatientListRequest as _learningmotors_pb_patients_GetPatientListRequest,
  GetPatientListRequest__Output as _learningmotors_pb_patients_GetPatientListRequest__Output
} from "../../../learningmotors/pb/patients/GetPatientListRequest";
import type {
  GetPatientListResponse as _learningmotors_pb_patients_GetPatientListResponse,
  GetPatientListResponse__Output as _learningmotors_pb_patients_GetPatientListResponse__Output
} from "../../../learningmotors/pb/patients/GetPatientListResponse";
import type {
  GetPatientsRequest as _learningmotors_pb_patients_GetPatientsRequest,
  GetPatientsRequest__Output as _learningmotors_pb_patients_GetPatientsRequest__Output
} from "../../../learningmotors/pb/patients/GetPatientsRequest";
import type {
  GetPatientsResponse as _learningmotors_pb_patients_GetPatientsResponse,
  GetPatientsResponse__Output as _learningmotors_pb_patients_GetPatientsResponse__Output
} from "../../../learningmotors/pb/patients/GetPatientsResponse";
import type {
  RemoveFromPatientListRequest as _learningmotors_pb_patients_RemoveFromPatientListRequest,
  RemoveFromPatientListRequest__Output as _learningmotors_pb_patients_RemoveFromPatientListRequest__Output
} from "../../../learningmotors/pb/patients/RemoveFromPatientListRequest";
import type {
  RemoveFromPatientListResponse as _learningmotors_pb_patients_RemoveFromPatientListResponse,
  RemoveFromPatientListResponse__Output as _learningmotors_pb_patients_RemoveFromPatientListResponse__Output
} from "../../../learningmotors/pb/patients/RemoveFromPatientListResponse";
import type {
  SearchPatientsRequest as _learningmotors_pb_patients_SearchPatientsRequest,
  SearchPatientsRequest__Output as _learningmotors_pb_patients_SearchPatientsRequest__Output
} from "../../../learningmotors/pb/patients/SearchPatientsRequest";
import type {
  SearchPatientsResponse as _learningmotors_pb_patients_SearchPatientsResponse,
  SearchPatientsResponse__Output as _learningmotors_pb_patients_SearchPatientsResponse__Output
} from "../../../learningmotors/pb/patients/SearchPatientsResponse";

export interface PatientServiceClient extends grpc.Client {
  AddToPatientList(
    argument: _learningmotors_pb_patients_AddToPatientListRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_patients_AddToPatientListResponse__Output>
  ): grpc.ClientUnaryCall;
  AddToPatientList(
    argument: _learningmotors_pb_patients_AddToPatientListRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_patients_AddToPatientListResponse__Output>
  ): grpc.ClientUnaryCall;
  AddToPatientList(
    argument: _learningmotors_pb_patients_AddToPatientListRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_patients_AddToPatientListResponse__Output>
  ): grpc.ClientUnaryCall;
  AddToPatientList(
    argument: _learningmotors_pb_patients_AddToPatientListRequest,
    callback: grpc.requestCallback<_learningmotors_pb_patients_AddToPatientListResponse__Output>
  ): grpc.ClientUnaryCall;
  addToPatientList(
    argument: _learningmotors_pb_patients_AddToPatientListRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_patients_AddToPatientListResponse__Output>
  ): grpc.ClientUnaryCall;
  addToPatientList(
    argument: _learningmotors_pb_patients_AddToPatientListRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_patients_AddToPatientListResponse__Output>
  ): grpc.ClientUnaryCall;
  addToPatientList(
    argument: _learningmotors_pb_patients_AddToPatientListRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_patients_AddToPatientListResponse__Output>
  ): grpc.ClientUnaryCall;
  addToPatientList(
    argument: _learningmotors_pb_patients_AddToPatientListRequest,
    callback: grpc.requestCallback<_learningmotors_pb_patients_AddToPatientListResponse__Output>
  ): grpc.ClientUnaryCall;

  CreateOrUpdatePatients(
    argument: _learningmotors_pb_patients_CreateOrUpdatePatientsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_patients_CreateOrUpdatePatientsResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateOrUpdatePatients(
    argument: _learningmotors_pb_patients_CreateOrUpdatePatientsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_patients_CreateOrUpdatePatientsResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateOrUpdatePatients(
    argument: _learningmotors_pb_patients_CreateOrUpdatePatientsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_patients_CreateOrUpdatePatientsResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateOrUpdatePatients(
    argument: _learningmotors_pb_patients_CreateOrUpdatePatientsRequest,
    callback: grpc.requestCallback<_learningmotors_pb_patients_CreateOrUpdatePatientsResponse__Output>
  ): grpc.ClientUnaryCall;
  createOrUpdatePatients(
    argument: _learningmotors_pb_patients_CreateOrUpdatePatientsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_patients_CreateOrUpdatePatientsResponse__Output>
  ): grpc.ClientUnaryCall;
  createOrUpdatePatients(
    argument: _learningmotors_pb_patients_CreateOrUpdatePatientsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_patients_CreateOrUpdatePatientsResponse__Output>
  ): grpc.ClientUnaryCall;
  createOrUpdatePatients(
    argument: _learningmotors_pb_patients_CreateOrUpdatePatientsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_patients_CreateOrUpdatePatientsResponse__Output>
  ): grpc.ClientUnaryCall;
  createOrUpdatePatients(
    argument: _learningmotors_pb_patients_CreateOrUpdatePatientsRequest,
    callback: grpc.requestCallback<_learningmotors_pb_patients_CreateOrUpdatePatientsResponse__Output>
  ): grpc.ClientUnaryCall;

  DeletePatients(
    argument: _learningmotors_pb_patients_DeletePatientsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeletePatients(
    argument: _learningmotors_pb_patients_DeletePatientsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeletePatients(
    argument: _learningmotors_pb_patients_DeletePatientsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeletePatients(
    argument: _learningmotors_pb_patients_DeletePatientsRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deletePatients(
    argument: _learningmotors_pb_patients_DeletePatientsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deletePatients(
    argument: _learningmotors_pb_patients_DeletePatientsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deletePatients(
    argument: _learningmotors_pb_patients_DeletePatientsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deletePatients(
    argument: _learningmotors_pb_patients_DeletePatientsRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  GetPatientList(
    argument: _learningmotors_pb_patients_GetPatientListRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_patients_GetPatientListResponse__Output>
  ): grpc.ClientUnaryCall;
  GetPatientList(
    argument: _learningmotors_pb_patients_GetPatientListRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_patients_GetPatientListResponse__Output>
  ): grpc.ClientUnaryCall;
  GetPatientList(
    argument: _learningmotors_pb_patients_GetPatientListRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_patients_GetPatientListResponse__Output>
  ): grpc.ClientUnaryCall;
  GetPatientList(
    argument: _learningmotors_pb_patients_GetPatientListRequest,
    callback: grpc.requestCallback<_learningmotors_pb_patients_GetPatientListResponse__Output>
  ): grpc.ClientUnaryCall;
  getPatientList(
    argument: _learningmotors_pb_patients_GetPatientListRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_patients_GetPatientListResponse__Output>
  ): grpc.ClientUnaryCall;
  getPatientList(
    argument: _learningmotors_pb_patients_GetPatientListRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_patients_GetPatientListResponse__Output>
  ): grpc.ClientUnaryCall;
  getPatientList(
    argument: _learningmotors_pb_patients_GetPatientListRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_patients_GetPatientListResponse__Output>
  ): grpc.ClientUnaryCall;
  getPatientList(
    argument: _learningmotors_pb_patients_GetPatientListRequest,
    callback: grpc.requestCallback<_learningmotors_pb_patients_GetPatientListResponse__Output>
  ): grpc.ClientUnaryCall;

  GetPatients(
    argument: _learningmotors_pb_patients_GetPatientsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_patients_GetPatientsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetPatients(
    argument: _learningmotors_pb_patients_GetPatientsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_patients_GetPatientsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetPatients(
    argument: _learningmotors_pb_patients_GetPatientsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_patients_GetPatientsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetPatients(
    argument: _learningmotors_pb_patients_GetPatientsRequest,
    callback: grpc.requestCallback<_learningmotors_pb_patients_GetPatientsResponse__Output>
  ): grpc.ClientUnaryCall;
  getPatients(
    argument: _learningmotors_pb_patients_GetPatientsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_patients_GetPatientsResponse__Output>
  ): grpc.ClientUnaryCall;
  getPatients(
    argument: _learningmotors_pb_patients_GetPatientsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_patients_GetPatientsResponse__Output>
  ): grpc.ClientUnaryCall;
  getPatients(
    argument: _learningmotors_pb_patients_GetPatientsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_patients_GetPatientsResponse__Output>
  ): grpc.ClientUnaryCall;
  getPatients(
    argument: _learningmotors_pb_patients_GetPatientsRequest,
    callback: grpc.requestCallback<_learningmotors_pb_patients_GetPatientsResponse__Output>
  ): grpc.ClientUnaryCall;

  RemoveFromPatientList(
    argument: _learningmotors_pb_patients_RemoveFromPatientListRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_patients_RemoveFromPatientListResponse__Output>
  ): grpc.ClientUnaryCall;
  RemoveFromPatientList(
    argument: _learningmotors_pb_patients_RemoveFromPatientListRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_patients_RemoveFromPatientListResponse__Output>
  ): grpc.ClientUnaryCall;
  RemoveFromPatientList(
    argument: _learningmotors_pb_patients_RemoveFromPatientListRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_patients_RemoveFromPatientListResponse__Output>
  ): grpc.ClientUnaryCall;
  RemoveFromPatientList(
    argument: _learningmotors_pb_patients_RemoveFromPatientListRequest,
    callback: grpc.requestCallback<_learningmotors_pb_patients_RemoveFromPatientListResponse__Output>
  ): grpc.ClientUnaryCall;
  removeFromPatientList(
    argument: _learningmotors_pb_patients_RemoveFromPatientListRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_patients_RemoveFromPatientListResponse__Output>
  ): grpc.ClientUnaryCall;
  removeFromPatientList(
    argument: _learningmotors_pb_patients_RemoveFromPatientListRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_patients_RemoveFromPatientListResponse__Output>
  ): grpc.ClientUnaryCall;
  removeFromPatientList(
    argument: _learningmotors_pb_patients_RemoveFromPatientListRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_patients_RemoveFromPatientListResponse__Output>
  ): grpc.ClientUnaryCall;
  removeFromPatientList(
    argument: _learningmotors_pb_patients_RemoveFromPatientListRequest,
    callback: grpc.requestCallback<_learningmotors_pb_patients_RemoveFromPatientListResponse__Output>
  ): grpc.ClientUnaryCall;

  SearchPatients(
    argument: _learningmotors_pb_patients_SearchPatientsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_patients_SearchPatientsResponse__Output>
  ): grpc.ClientUnaryCall;
  SearchPatients(
    argument: _learningmotors_pb_patients_SearchPatientsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_patients_SearchPatientsResponse__Output>
  ): grpc.ClientUnaryCall;
  SearchPatients(
    argument: _learningmotors_pb_patients_SearchPatientsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_patients_SearchPatientsResponse__Output>
  ): grpc.ClientUnaryCall;
  SearchPatients(
    argument: _learningmotors_pb_patients_SearchPatientsRequest,
    callback: grpc.requestCallback<_learningmotors_pb_patients_SearchPatientsResponse__Output>
  ): grpc.ClientUnaryCall;
  searchPatients(
    argument: _learningmotors_pb_patients_SearchPatientsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_patients_SearchPatientsResponse__Output>
  ): grpc.ClientUnaryCall;
  searchPatients(
    argument: _learningmotors_pb_patients_SearchPatientsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_patients_SearchPatientsResponse__Output>
  ): grpc.ClientUnaryCall;
  searchPatients(
    argument: _learningmotors_pb_patients_SearchPatientsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_patients_SearchPatientsResponse__Output>
  ): grpc.ClientUnaryCall;
  searchPatients(
    argument: _learningmotors_pb_patients_SearchPatientsRequest,
    callback: grpc.requestCallback<_learningmotors_pb_patients_SearchPatientsResponse__Output>
  ): grpc.ClientUnaryCall;
}

export interface PatientServiceHandlers extends grpc.UntypedServiceImplementation {
  AddToPatientList: grpc.handleUnaryCall<
    _learningmotors_pb_patients_AddToPatientListRequest__Output,
    _learningmotors_pb_patients_AddToPatientListResponse
  >;

  CreateOrUpdatePatients: grpc.handleUnaryCall<
    _learningmotors_pb_patients_CreateOrUpdatePatientsRequest__Output,
    _learningmotors_pb_patients_CreateOrUpdatePatientsResponse
  >;

  DeletePatients: grpc.handleUnaryCall<
    _learningmotors_pb_patients_DeletePatientsRequest__Output,
    _google_protobuf_Empty
  >;

  GetPatientList: grpc.handleUnaryCall<
    _learningmotors_pb_patients_GetPatientListRequest__Output,
    _learningmotors_pb_patients_GetPatientListResponse
  >;

  GetPatients: grpc.handleUnaryCall<
    _learningmotors_pb_patients_GetPatientsRequest__Output,
    _learningmotors_pb_patients_GetPatientsResponse
  >;

  RemoveFromPatientList: grpc.handleUnaryCall<
    _learningmotors_pb_patients_RemoveFromPatientListRequest__Output,
    _learningmotors_pb_patients_RemoveFromPatientListResponse
  >;

  SearchPatients: grpc.handleUnaryCall<
    _learningmotors_pb_patients_SearchPatientsRequest__Output,
    _learningmotors_pb_patients_SearchPatientsResponse
  >;
}

export interface PatientServiceDefinition extends grpc.ServiceDefinition {
  AddToPatientList: MethodDefinition<
    _learningmotors_pb_patients_AddToPatientListRequest,
    _learningmotors_pb_patients_AddToPatientListResponse,
    _learningmotors_pb_patients_AddToPatientListRequest__Output,
    _learningmotors_pb_patients_AddToPatientListResponse__Output
  >;
  CreateOrUpdatePatients: MethodDefinition<
    _learningmotors_pb_patients_CreateOrUpdatePatientsRequest,
    _learningmotors_pb_patients_CreateOrUpdatePatientsResponse,
    _learningmotors_pb_patients_CreateOrUpdatePatientsRequest__Output,
    _learningmotors_pb_patients_CreateOrUpdatePatientsResponse__Output
  >;
  DeletePatients: MethodDefinition<
    _learningmotors_pb_patients_DeletePatientsRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_patients_DeletePatientsRequest__Output,
    _google_protobuf_Empty__Output
  >;
  GetPatientList: MethodDefinition<
    _learningmotors_pb_patients_GetPatientListRequest,
    _learningmotors_pb_patients_GetPatientListResponse,
    _learningmotors_pb_patients_GetPatientListRequest__Output,
    _learningmotors_pb_patients_GetPatientListResponse__Output
  >;
  GetPatients: MethodDefinition<
    _learningmotors_pb_patients_GetPatientsRequest,
    _learningmotors_pb_patients_GetPatientsResponse,
    _learningmotors_pb_patients_GetPatientsRequest__Output,
    _learningmotors_pb_patients_GetPatientsResponse__Output
  >;
  RemoveFromPatientList: MethodDefinition<
    _learningmotors_pb_patients_RemoveFromPatientListRequest,
    _learningmotors_pb_patients_RemoveFromPatientListResponse,
    _learningmotors_pb_patients_RemoveFromPatientListRequest__Output,
    _learningmotors_pb_patients_RemoveFromPatientListResponse__Output
  >;
  SearchPatients: MethodDefinition<
    _learningmotors_pb_patients_SearchPatientsRequest,
    _learningmotors_pb_patients_SearchPatientsResponse,
    _learningmotors_pb_patients_SearchPatientsRequest__Output,
    _learningmotors_pb_patients_SearchPatientsResponse__Output
  >;
}
