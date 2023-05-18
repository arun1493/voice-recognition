// Original file: node_modules/protobufs/src/suki/pb/patientcharts/patientcharts.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output
} from "../../../google/protobuf/Empty";
import type {
  GetDynamicChartsDataRequest as _suki_pb_patientcharts_GetDynamicChartsDataRequest,
  GetDynamicChartsDataRequest__Output as _suki_pb_patientcharts_GetDynamicChartsDataRequest__Output
} from "../../../suki/pb/patientcharts/GetDynamicChartsDataRequest";
import type {
  GetDynamicChartsDataResponse as _suki_pb_patientcharts_GetDynamicChartsDataResponse,
  GetDynamicChartsDataResponse__Output as _suki_pb_patientcharts_GetDynamicChartsDataResponse__Output
} from "../../../suki/pb/patientcharts/GetDynamicChartsDataResponse";
import type {
  GetEncounterDiagnosesRequest as _suki_pb_patientcharts_GetEncounterDiagnosesRequest,
  GetEncounterDiagnosesRequest__Output as _suki_pb_patientcharts_GetEncounterDiagnosesRequest__Output
} from "../../../suki/pb/patientcharts/GetEncounterDiagnosesRequest";
import type {
  GetEncounterDiagnosesResponse as _suki_pb_patientcharts_GetEncounterDiagnosesResponse,
  GetEncounterDiagnosesResponse__Output as _suki_pb_patientcharts_GetEncounterDiagnosesResponse__Output
} from "../../../suki/pb/patientcharts/GetEncounterDiagnosesResponse";
import type {
  GetEncounterDiagnosesSectionsRequest as _suki_pb_patientcharts_GetEncounterDiagnosesSectionsRequest,
  GetEncounterDiagnosesSectionsRequest__Output as _suki_pb_patientcharts_GetEncounterDiagnosesSectionsRequest__Output
} from "../../../suki/pb/patientcharts/GetEncounterDiagnosesSectionsRequest";
import type {
  GetEncounterDiagnosesSectionsResponse as _suki_pb_patientcharts_GetEncounterDiagnosesSectionsResponse,
  GetEncounterDiagnosesSectionsResponse__Output as _suki_pb_patientcharts_GetEncounterDiagnosesSectionsResponse__Output
} from "../../../suki/pb/patientcharts/GetEncounterDiagnosesSectionsResponse";
import type {
  GetMedicationsRequest as _suki_pb_patientcharts_GetMedicationsRequest,
  GetMedicationsRequest__Output as _suki_pb_patientcharts_GetMedicationsRequest__Output
} from "../../../suki/pb/patientcharts/GetMedicationsRequest";
import type {
  GetMedicationsResponse as _suki_pb_patientcharts_GetMedicationsResponse,
  GetMedicationsResponse__Output as _suki_pb_patientcharts_GetMedicationsResponse__Output
} from "../../../suki/pb/patientcharts/GetMedicationsResponse";
import type {
  GetProblemListRequest as _suki_pb_patientcharts_GetProblemListRequest,
  GetProblemListRequest__Output as _suki_pb_patientcharts_GetProblemListRequest__Output
} from "../../../suki/pb/patientcharts/GetProblemListRequest";
import type {
  GetProblemListResponse as _suki_pb_patientcharts_GetProblemListResponse,
  GetProblemListResponse__Output as _suki_pb_patientcharts_GetProblemListResponse__Output
} from "../../../suki/pb/patientcharts/GetProblemListResponse";
import type {
  StoreMedicationsRequest as _suki_pb_patientcharts_StoreMedicationsRequest,
  StoreMedicationsRequest__Output as _suki_pb_patientcharts_StoreMedicationsRequest__Output
} from "../../../suki/pb/patientcharts/StoreMedicationsRequest";
import type {
  SyncChartsDataRequest as _suki_pb_patientcharts_SyncChartsDataRequest,
  SyncChartsDataRequest__Output as _suki_pb_patientcharts_SyncChartsDataRequest__Output
} from "../../../suki/pb/patientcharts/SyncChartsDataRequest";
import type {
  SyncChartsDataResponse as _suki_pb_patientcharts_SyncChartsDataResponse,
  SyncChartsDataResponse__Output as _suki_pb_patientcharts_SyncChartsDataResponse__Output
} from "../../../suki/pb/patientcharts/SyncChartsDataResponse";
import type {
  SyncDynamicChartsDataRequest as _suki_pb_patientcharts_SyncDynamicChartsDataRequest,
  SyncDynamicChartsDataRequest__Output as _suki_pb_patientcharts_SyncDynamicChartsDataRequest__Output
} from "../../../suki/pb/patientcharts/SyncDynamicChartsDataRequest";
import type {
  SyncDynamicChartsDataResponse as _suki_pb_patientcharts_SyncDynamicChartsDataResponse,
  SyncDynamicChartsDataResponse__Output as _suki_pb_patientcharts_SyncDynamicChartsDataResponse__Output
} from "../../../suki/pb/patientcharts/SyncDynamicChartsDataResponse";
import type {
  SyncEMRNoteRequest as _suki_pb_patientcharts_SyncEMRNoteRequest,
  SyncEMRNoteRequest__Output as _suki_pb_patientcharts_SyncEMRNoteRequest__Output
} from "../../../suki/pb/patientcharts/SyncEMRNoteRequest";
import type {
  SyncEMRNoteResponse as _suki_pb_patientcharts_SyncEMRNoteResponse,
  SyncEMRNoteResponse__Output as _suki_pb_patientcharts_SyncEMRNoteResponse__Output
} from "../../../suki/pb/patientcharts/SyncEMRNoteResponse";
import type {
  UpsertEncounterDiagnosesRequest as _suki_pb_patientcharts_UpsertEncounterDiagnosesRequest,
  UpsertEncounterDiagnosesRequest__Output as _suki_pb_patientcharts_UpsertEncounterDiagnosesRequest__Output
} from "../../../suki/pb/patientcharts/UpsertEncounterDiagnosesRequest";
import type {
  UpsertEncounterDiagnosesResponse as _suki_pb_patientcharts_UpsertEncounterDiagnosesResponse,
  UpsertEncounterDiagnosesResponse__Output as _suki_pb_patientcharts_UpsertEncounterDiagnosesResponse__Output
} from "../../../suki/pb/patientcharts/UpsertEncounterDiagnosesResponse";
import type {
  UpsertProblemListRequest as _suki_pb_patientcharts_UpsertProblemListRequest,
  UpsertProblemListRequest__Output as _suki_pb_patientcharts_UpsertProblemListRequest__Output
} from "../../../suki/pb/patientcharts/UpsertProblemListRequest";
import type {
  UpsertProblemListResponse as _suki_pb_patientcharts_UpsertProblemListResponse,
  UpsertProblemListResponse__Output as _suki_pb_patientcharts_UpsertProblemListResponse__Output
} from "../../../suki/pb/patientcharts/UpsertProblemListResponse";

export interface MsPatientChartsClient extends grpc.Client {
  GetDynamicChartsData(
    argument: _suki_pb_patientcharts_GetDynamicChartsDataRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_patientcharts_GetDynamicChartsDataResponse__Output>
  ): grpc.ClientUnaryCall;
  GetDynamicChartsData(
    argument: _suki_pb_patientcharts_GetDynamicChartsDataRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_patientcharts_GetDynamicChartsDataResponse__Output>
  ): grpc.ClientUnaryCall;
  GetDynamicChartsData(
    argument: _suki_pb_patientcharts_GetDynamicChartsDataRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_patientcharts_GetDynamicChartsDataResponse__Output>
  ): grpc.ClientUnaryCall;
  GetDynamicChartsData(
    argument: _suki_pb_patientcharts_GetDynamicChartsDataRequest,
    callback: grpc.requestCallback<_suki_pb_patientcharts_GetDynamicChartsDataResponse__Output>
  ): grpc.ClientUnaryCall;
  getDynamicChartsData(
    argument: _suki_pb_patientcharts_GetDynamicChartsDataRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_patientcharts_GetDynamicChartsDataResponse__Output>
  ): grpc.ClientUnaryCall;
  getDynamicChartsData(
    argument: _suki_pb_patientcharts_GetDynamicChartsDataRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_patientcharts_GetDynamicChartsDataResponse__Output>
  ): grpc.ClientUnaryCall;
  getDynamicChartsData(
    argument: _suki_pb_patientcharts_GetDynamicChartsDataRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_patientcharts_GetDynamicChartsDataResponse__Output>
  ): grpc.ClientUnaryCall;
  getDynamicChartsData(
    argument: _suki_pb_patientcharts_GetDynamicChartsDataRequest,
    callback: grpc.requestCallback<_suki_pb_patientcharts_GetDynamicChartsDataResponse__Output>
  ): grpc.ClientUnaryCall;

  GetEncounterDiagnoses(
    argument: _suki_pb_patientcharts_GetEncounterDiagnosesRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_patientcharts_GetEncounterDiagnosesResponse__Output>
  ): grpc.ClientUnaryCall;
  GetEncounterDiagnoses(
    argument: _suki_pb_patientcharts_GetEncounterDiagnosesRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_patientcharts_GetEncounterDiagnosesResponse__Output>
  ): grpc.ClientUnaryCall;
  GetEncounterDiagnoses(
    argument: _suki_pb_patientcharts_GetEncounterDiagnosesRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_patientcharts_GetEncounterDiagnosesResponse__Output>
  ): grpc.ClientUnaryCall;
  GetEncounterDiagnoses(
    argument: _suki_pb_patientcharts_GetEncounterDiagnosesRequest,
    callback: grpc.requestCallback<_suki_pb_patientcharts_GetEncounterDiagnosesResponse__Output>
  ): grpc.ClientUnaryCall;
  getEncounterDiagnoses(
    argument: _suki_pb_patientcharts_GetEncounterDiagnosesRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_patientcharts_GetEncounterDiagnosesResponse__Output>
  ): grpc.ClientUnaryCall;
  getEncounterDiagnoses(
    argument: _suki_pb_patientcharts_GetEncounterDiagnosesRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_patientcharts_GetEncounterDiagnosesResponse__Output>
  ): grpc.ClientUnaryCall;
  getEncounterDiagnoses(
    argument: _suki_pb_patientcharts_GetEncounterDiagnosesRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_patientcharts_GetEncounterDiagnosesResponse__Output>
  ): grpc.ClientUnaryCall;
  getEncounterDiagnoses(
    argument: _suki_pb_patientcharts_GetEncounterDiagnosesRequest,
    callback: grpc.requestCallback<_suki_pb_patientcharts_GetEncounterDiagnosesResponse__Output>
  ): grpc.ClientUnaryCall;

  GetEncounterDiagnosesSections(
    argument: _suki_pb_patientcharts_GetEncounterDiagnosesSectionsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_patientcharts_GetEncounterDiagnosesSectionsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetEncounterDiagnosesSections(
    argument: _suki_pb_patientcharts_GetEncounterDiagnosesSectionsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_patientcharts_GetEncounterDiagnosesSectionsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetEncounterDiagnosesSections(
    argument: _suki_pb_patientcharts_GetEncounterDiagnosesSectionsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_patientcharts_GetEncounterDiagnosesSectionsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetEncounterDiagnosesSections(
    argument: _suki_pb_patientcharts_GetEncounterDiagnosesSectionsRequest,
    callback: grpc.requestCallback<_suki_pb_patientcharts_GetEncounterDiagnosesSectionsResponse__Output>
  ): grpc.ClientUnaryCall;
  getEncounterDiagnosesSections(
    argument: _suki_pb_patientcharts_GetEncounterDiagnosesSectionsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_patientcharts_GetEncounterDiagnosesSectionsResponse__Output>
  ): grpc.ClientUnaryCall;
  getEncounterDiagnosesSections(
    argument: _suki_pb_patientcharts_GetEncounterDiagnosesSectionsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_patientcharts_GetEncounterDiagnosesSectionsResponse__Output>
  ): grpc.ClientUnaryCall;
  getEncounterDiagnosesSections(
    argument: _suki_pb_patientcharts_GetEncounterDiagnosesSectionsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_patientcharts_GetEncounterDiagnosesSectionsResponse__Output>
  ): grpc.ClientUnaryCall;
  getEncounterDiagnosesSections(
    argument: _suki_pb_patientcharts_GetEncounterDiagnosesSectionsRequest,
    callback: grpc.requestCallback<_suki_pb_patientcharts_GetEncounterDiagnosesSectionsResponse__Output>
  ): grpc.ClientUnaryCall;

  GetMedications(
    argument: _suki_pb_patientcharts_GetMedicationsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_patientcharts_GetMedicationsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetMedications(
    argument: _suki_pb_patientcharts_GetMedicationsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_patientcharts_GetMedicationsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetMedications(
    argument: _suki_pb_patientcharts_GetMedicationsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_patientcharts_GetMedicationsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetMedications(
    argument: _suki_pb_patientcharts_GetMedicationsRequest,
    callback: grpc.requestCallback<_suki_pb_patientcharts_GetMedicationsResponse__Output>
  ): grpc.ClientUnaryCall;
  getMedications(
    argument: _suki_pb_patientcharts_GetMedicationsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_patientcharts_GetMedicationsResponse__Output>
  ): grpc.ClientUnaryCall;
  getMedications(
    argument: _suki_pb_patientcharts_GetMedicationsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_patientcharts_GetMedicationsResponse__Output>
  ): grpc.ClientUnaryCall;
  getMedications(
    argument: _suki_pb_patientcharts_GetMedicationsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_patientcharts_GetMedicationsResponse__Output>
  ): grpc.ClientUnaryCall;
  getMedications(
    argument: _suki_pb_patientcharts_GetMedicationsRequest,
    callback: grpc.requestCallback<_suki_pb_patientcharts_GetMedicationsResponse__Output>
  ): grpc.ClientUnaryCall;

  GetProblemList(
    argument: _suki_pb_patientcharts_GetProblemListRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_patientcharts_GetProblemListResponse__Output>
  ): grpc.ClientUnaryCall;
  GetProblemList(
    argument: _suki_pb_patientcharts_GetProblemListRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_patientcharts_GetProblemListResponse__Output>
  ): grpc.ClientUnaryCall;
  GetProblemList(
    argument: _suki_pb_patientcharts_GetProblemListRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_patientcharts_GetProblemListResponse__Output>
  ): grpc.ClientUnaryCall;
  GetProblemList(
    argument: _suki_pb_patientcharts_GetProblemListRequest,
    callback: grpc.requestCallback<_suki_pb_patientcharts_GetProblemListResponse__Output>
  ): grpc.ClientUnaryCall;
  getProblemList(
    argument: _suki_pb_patientcharts_GetProblemListRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_patientcharts_GetProblemListResponse__Output>
  ): grpc.ClientUnaryCall;
  getProblemList(
    argument: _suki_pb_patientcharts_GetProblemListRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_patientcharts_GetProblemListResponse__Output>
  ): grpc.ClientUnaryCall;
  getProblemList(
    argument: _suki_pb_patientcharts_GetProblemListRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_patientcharts_GetProblemListResponse__Output>
  ): grpc.ClientUnaryCall;
  getProblemList(
    argument: _suki_pb_patientcharts_GetProblemListRequest,
    callback: grpc.requestCallback<_suki_pb_patientcharts_GetProblemListResponse__Output>
  ): grpc.ClientUnaryCall;

  StoreMedications(
    argument: _suki_pb_patientcharts_StoreMedicationsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  StoreMedications(
    argument: _suki_pb_patientcharts_StoreMedicationsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  StoreMedications(
    argument: _suki_pb_patientcharts_StoreMedicationsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  StoreMedications(
    argument: _suki_pb_patientcharts_StoreMedicationsRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  storeMedications(
    argument: _suki_pb_patientcharts_StoreMedicationsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  storeMedications(
    argument: _suki_pb_patientcharts_StoreMedicationsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  storeMedications(
    argument: _suki_pb_patientcharts_StoreMedicationsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  storeMedications(
    argument: _suki_pb_patientcharts_StoreMedicationsRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  SyncChartsData(
    argument: _suki_pb_patientcharts_SyncChartsDataRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_patientcharts_SyncChartsDataResponse__Output>
  ): grpc.ClientUnaryCall;
  SyncChartsData(
    argument: _suki_pb_patientcharts_SyncChartsDataRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_patientcharts_SyncChartsDataResponse__Output>
  ): grpc.ClientUnaryCall;
  SyncChartsData(
    argument: _suki_pb_patientcharts_SyncChartsDataRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_patientcharts_SyncChartsDataResponse__Output>
  ): grpc.ClientUnaryCall;
  SyncChartsData(
    argument: _suki_pb_patientcharts_SyncChartsDataRequest,
    callback: grpc.requestCallback<_suki_pb_patientcharts_SyncChartsDataResponse__Output>
  ): grpc.ClientUnaryCall;
  syncChartsData(
    argument: _suki_pb_patientcharts_SyncChartsDataRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_patientcharts_SyncChartsDataResponse__Output>
  ): grpc.ClientUnaryCall;
  syncChartsData(
    argument: _suki_pb_patientcharts_SyncChartsDataRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_patientcharts_SyncChartsDataResponse__Output>
  ): grpc.ClientUnaryCall;
  syncChartsData(
    argument: _suki_pb_patientcharts_SyncChartsDataRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_patientcharts_SyncChartsDataResponse__Output>
  ): grpc.ClientUnaryCall;
  syncChartsData(
    argument: _suki_pb_patientcharts_SyncChartsDataRequest,
    callback: grpc.requestCallback<_suki_pb_patientcharts_SyncChartsDataResponse__Output>
  ): grpc.ClientUnaryCall;

  SyncDynamicChartsData(
    argument: _suki_pb_patientcharts_SyncDynamicChartsDataRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_patientcharts_SyncDynamicChartsDataResponse__Output>
  ): grpc.ClientUnaryCall;
  SyncDynamicChartsData(
    argument: _suki_pb_patientcharts_SyncDynamicChartsDataRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_patientcharts_SyncDynamicChartsDataResponse__Output>
  ): grpc.ClientUnaryCall;
  SyncDynamicChartsData(
    argument: _suki_pb_patientcharts_SyncDynamicChartsDataRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_patientcharts_SyncDynamicChartsDataResponse__Output>
  ): grpc.ClientUnaryCall;
  SyncDynamicChartsData(
    argument: _suki_pb_patientcharts_SyncDynamicChartsDataRequest,
    callback: grpc.requestCallback<_suki_pb_patientcharts_SyncDynamicChartsDataResponse__Output>
  ): grpc.ClientUnaryCall;
  syncDynamicChartsData(
    argument: _suki_pb_patientcharts_SyncDynamicChartsDataRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_patientcharts_SyncDynamicChartsDataResponse__Output>
  ): grpc.ClientUnaryCall;
  syncDynamicChartsData(
    argument: _suki_pb_patientcharts_SyncDynamicChartsDataRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_patientcharts_SyncDynamicChartsDataResponse__Output>
  ): grpc.ClientUnaryCall;
  syncDynamicChartsData(
    argument: _suki_pb_patientcharts_SyncDynamicChartsDataRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_patientcharts_SyncDynamicChartsDataResponse__Output>
  ): grpc.ClientUnaryCall;
  syncDynamicChartsData(
    argument: _suki_pb_patientcharts_SyncDynamicChartsDataRequest,
    callback: grpc.requestCallback<_suki_pb_patientcharts_SyncDynamicChartsDataResponse__Output>
  ): grpc.ClientUnaryCall;

  SyncEMRNote(
    argument: _suki_pb_patientcharts_SyncEMRNoteRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_patientcharts_SyncEMRNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  SyncEMRNote(
    argument: _suki_pb_patientcharts_SyncEMRNoteRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_patientcharts_SyncEMRNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  SyncEMRNote(
    argument: _suki_pb_patientcharts_SyncEMRNoteRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_patientcharts_SyncEMRNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  SyncEMRNote(
    argument: _suki_pb_patientcharts_SyncEMRNoteRequest,
    callback: grpc.requestCallback<_suki_pb_patientcharts_SyncEMRNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  syncEmrNote(
    argument: _suki_pb_patientcharts_SyncEMRNoteRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_patientcharts_SyncEMRNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  syncEmrNote(
    argument: _suki_pb_patientcharts_SyncEMRNoteRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_patientcharts_SyncEMRNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  syncEmrNote(
    argument: _suki_pb_patientcharts_SyncEMRNoteRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_patientcharts_SyncEMRNoteResponse__Output>
  ): grpc.ClientUnaryCall;
  syncEmrNote(
    argument: _suki_pb_patientcharts_SyncEMRNoteRequest,
    callback: grpc.requestCallback<_suki_pb_patientcharts_SyncEMRNoteResponse__Output>
  ): grpc.ClientUnaryCall;

  UpsertEncounterDiagnoses(
    argument: _suki_pb_patientcharts_UpsertEncounterDiagnosesRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_patientcharts_UpsertEncounterDiagnosesResponse__Output>
  ): grpc.ClientUnaryCall;
  UpsertEncounterDiagnoses(
    argument: _suki_pb_patientcharts_UpsertEncounterDiagnosesRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_patientcharts_UpsertEncounterDiagnosesResponse__Output>
  ): grpc.ClientUnaryCall;
  UpsertEncounterDiagnoses(
    argument: _suki_pb_patientcharts_UpsertEncounterDiagnosesRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_patientcharts_UpsertEncounterDiagnosesResponse__Output>
  ): grpc.ClientUnaryCall;
  UpsertEncounterDiagnoses(
    argument: _suki_pb_patientcharts_UpsertEncounterDiagnosesRequest,
    callback: grpc.requestCallback<_suki_pb_patientcharts_UpsertEncounterDiagnosesResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertEncounterDiagnoses(
    argument: _suki_pb_patientcharts_UpsertEncounterDiagnosesRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_patientcharts_UpsertEncounterDiagnosesResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertEncounterDiagnoses(
    argument: _suki_pb_patientcharts_UpsertEncounterDiagnosesRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_patientcharts_UpsertEncounterDiagnosesResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertEncounterDiagnoses(
    argument: _suki_pb_patientcharts_UpsertEncounterDiagnosesRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_patientcharts_UpsertEncounterDiagnosesResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertEncounterDiagnoses(
    argument: _suki_pb_patientcharts_UpsertEncounterDiagnosesRequest,
    callback: grpc.requestCallback<_suki_pb_patientcharts_UpsertEncounterDiagnosesResponse__Output>
  ): grpc.ClientUnaryCall;

  UpsertProblemList(
    argument: _suki_pb_patientcharts_UpsertProblemListRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_patientcharts_UpsertProblemListResponse__Output>
  ): grpc.ClientUnaryCall;
  UpsertProblemList(
    argument: _suki_pb_patientcharts_UpsertProblemListRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_patientcharts_UpsertProblemListResponse__Output>
  ): grpc.ClientUnaryCall;
  UpsertProblemList(
    argument: _suki_pb_patientcharts_UpsertProblemListRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_patientcharts_UpsertProblemListResponse__Output>
  ): grpc.ClientUnaryCall;
  UpsertProblemList(
    argument: _suki_pb_patientcharts_UpsertProblemListRequest,
    callback: grpc.requestCallback<_suki_pb_patientcharts_UpsertProblemListResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertProblemList(
    argument: _suki_pb_patientcharts_UpsertProblemListRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_patientcharts_UpsertProblemListResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertProblemList(
    argument: _suki_pb_patientcharts_UpsertProblemListRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_patientcharts_UpsertProblemListResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertProblemList(
    argument: _suki_pb_patientcharts_UpsertProblemListRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_patientcharts_UpsertProblemListResponse__Output>
  ): grpc.ClientUnaryCall;
  upsertProblemList(
    argument: _suki_pb_patientcharts_UpsertProblemListRequest,
    callback: grpc.requestCallback<_suki_pb_patientcharts_UpsertProblemListResponse__Output>
  ): grpc.ClientUnaryCall;
}

export interface MsPatientChartsHandlers extends grpc.UntypedServiceImplementation {
  GetDynamicChartsData: grpc.handleUnaryCall<
    _suki_pb_patientcharts_GetDynamicChartsDataRequest__Output,
    _suki_pb_patientcharts_GetDynamicChartsDataResponse
  >;

  GetEncounterDiagnoses: grpc.handleUnaryCall<
    _suki_pb_patientcharts_GetEncounterDiagnosesRequest__Output,
    _suki_pb_patientcharts_GetEncounterDiagnosesResponse
  >;

  GetEncounterDiagnosesSections: grpc.handleUnaryCall<
    _suki_pb_patientcharts_GetEncounterDiagnosesSectionsRequest__Output,
    _suki_pb_patientcharts_GetEncounterDiagnosesSectionsResponse
  >;

  GetMedications: grpc.handleUnaryCall<
    _suki_pb_patientcharts_GetMedicationsRequest__Output,
    _suki_pb_patientcharts_GetMedicationsResponse
  >;

  GetProblemList: grpc.handleUnaryCall<
    _suki_pb_patientcharts_GetProblemListRequest__Output,
    _suki_pb_patientcharts_GetProblemListResponse
  >;

  StoreMedications: grpc.handleUnaryCall<
    _suki_pb_patientcharts_StoreMedicationsRequest__Output,
    _google_protobuf_Empty
  >;

  SyncChartsData: grpc.handleUnaryCall<
    _suki_pb_patientcharts_SyncChartsDataRequest__Output,
    _suki_pb_patientcharts_SyncChartsDataResponse
  >;

  SyncDynamicChartsData: grpc.handleUnaryCall<
    _suki_pb_patientcharts_SyncDynamicChartsDataRequest__Output,
    _suki_pb_patientcharts_SyncDynamicChartsDataResponse
  >;

  SyncEMRNote: grpc.handleUnaryCall<
    _suki_pb_patientcharts_SyncEMRNoteRequest__Output,
    _suki_pb_patientcharts_SyncEMRNoteResponse
  >;

  UpsertEncounterDiagnoses: grpc.handleUnaryCall<
    _suki_pb_patientcharts_UpsertEncounterDiagnosesRequest__Output,
    _suki_pb_patientcharts_UpsertEncounterDiagnosesResponse
  >;

  UpsertProblemList: grpc.handleUnaryCall<
    _suki_pb_patientcharts_UpsertProblemListRequest__Output,
    _suki_pb_patientcharts_UpsertProblemListResponse
  >;
}

export interface MsPatientChartsDefinition extends grpc.ServiceDefinition {
  GetDynamicChartsData: MethodDefinition<
    _suki_pb_patientcharts_GetDynamicChartsDataRequest,
    _suki_pb_patientcharts_GetDynamicChartsDataResponse,
    _suki_pb_patientcharts_GetDynamicChartsDataRequest__Output,
    _suki_pb_patientcharts_GetDynamicChartsDataResponse__Output
  >;
  GetEncounterDiagnoses: MethodDefinition<
    _suki_pb_patientcharts_GetEncounterDiagnosesRequest,
    _suki_pb_patientcharts_GetEncounterDiagnosesResponse,
    _suki_pb_patientcharts_GetEncounterDiagnosesRequest__Output,
    _suki_pb_patientcharts_GetEncounterDiagnosesResponse__Output
  >;
  GetEncounterDiagnosesSections: MethodDefinition<
    _suki_pb_patientcharts_GetEncounterDiagnosesSectionsRequest,
    _suki_pb_patientcharts_GetEncounterDiagnosesSectionsResponse,
    _suki_pb_patientcharts_GetEncounterDiagnosesSectionsRequest__Output,
    _suki_pb_patientcharts_GetEncounterDiagnosesSectionsResponse__Output
  >;
  GetMedications: MethodDefinition<
    _suki_pb_patientcharts_GetMedicationsRequest,
    _suki_pb_patientcharts_GetMedicationsResponse,
    _suki_pb_patientcharts_GetMedicationsRequest__Output,
    _suki_pb_patientcharts_GetMedicationsResponse__Output
  >;
  GetProblemList: MethodDefinition<
    _suki_pb_patientcharts_GetProblemListRequest,
    _suki_pb_patientcharts_GetProblemListResponse,
    _suki_pb_patientcharts_GetProblemListRequest__Output,
    _suki_pb_patientcharts_GetProblemListResponse__Output
  >;
  StoreMedications: MethodDefinition<
    _suki_pb_patientcharts_StoreMedicationsRequest,
    _google_protobuf_Empty,
    _suki_pb_patientcharts_StoreMedicationsRequest__Output,
    _google_protobuf_Empty__Output
  >;
  SyncChartsData: MethodDefinition<
    _suki_pb_patientcharts_SyncChartsDataRequest,
    _suki_pb_patientcharts_SyncChartsDataResponse,
    _suki_pb_patientcharts_SyncChartsDataRequest__Output,
    _suki_pb_patientcharts_SyncChartsDataResponse__Output
  >;
  SyncDynamicChartsData: MethodDefinition<
    _suki_pb_patientcharts_SyncDynamicChartsDataRequest,
    _suki_pb_patientcharts_SyncDynamicChartsDataResponse,
    _suki_pb_patientcharts_SyncDynamicChartsDataRequest__Output,
    _suki_pb_patientcharts_SyncDynamicChartsDataResponse__Output
  >;
  SyncEMRNote: MethodDefinition<
    _suki_pb_patientcharts_SyncEMRNoteRequest,
    _suki_pb_patientcharts_SyncEMRNoteResponse,
    _suki_pb_patientcharts_SyncEMRNoteRequest__Output,
    _suki_pb_patientcharts_SyncEMRNoteResponse__Output
  >;
  UpsertEncounterDiagnoses: MethodDefinition<
    _suki_pb_patientcharts_UpsertEncounterDiagnosesRequest,
    _suki_pb_patientcharts_UpsertEncounterDiagnosesResponse,
    _suki_pb_patientcharts_UpsertEncounterDiagnosesRequest__Output,
    _suki_pb_patientcharts_UpsertEncounterDiagnosesResponse__Output
  >;
  UpsertProblemList: MethodDefinition<
    _suki_pb_patientcharts_UpsertProblemListRequest,
    _suki_pb_patientcharts_UpsertProblemListResponse,
    _suki_pb_patientcharts_UpsertProblemListRequest__Output,
    _suki_pb_patientcharts_UpsertProblemListResponse__Output
  >;
}
