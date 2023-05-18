// Original file: node_modules/protobufs/src/learningmotors/pb/emrsubmitter/emrsubmitter.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  OrderMedicationRequest as _learningmotors_pb_emrsubmitter_OrderMedicationRequest,
  OrderMedicationRequest__Output as _learningmotors_pb_emrsubmitter_OrderMedicationRequest__Output
} from "../../../learningmotors/pb/emrsubmitter/OrderMedicationRequest";
import type {
  OrderMedicationResponse as _learningmotors_pb_emrsubmitter_OrderMedicationResponse,
  OrderMedicationResponse__Output as _learningmotors_pb_emrsubmitter_OrderMedicationResponse__Output
} from "../../../learningmotors/pb/emrsubmitter/OrderMedicationResponse";
import type {
  SubmitCompositionRequest as _learningmotors_pb_emrsubmitter_SubmitCompositionRequest,
  SubmitCompositionRequest__Output as _learningmotors_pb_emrsubmitter_SubmitCompositionRequest__Output
} from "../../../learningmotors/pb/emrsubmitter/SubmitCompositionRequest";
import type {
  SubmitCompositionResponse as _learningmotors_pb_emrsubmitter_SubmitCompositionResponse,
  SubmitCompositionResponse__Output as _learningmotors_pb_emrsubmitter_SubmitCompositionResponse__Output
} from "../../../learningmotors/pb/emrsubmitter/SubmitCompositionResponse";

export interface EMRSubmitterServiceClient extends grpc.Client {
  CheckNonEncounterSectionWarnings(
    argument: _learningmotors_pb_emrsubmitter_SubmitCompositionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emrsubmitter_SubmitCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  CheckNonEncounterSectionWarnings(
    argument: _learningmotors_pb_emrsubmitter_SubmitCompositionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emrsubmitter_SubmitCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  CheckNonEncounterSectionWarnings(
    argument: _learningmotors_pb_emrsubmitter_SubmitCompositionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emrsubmitter_SubmitCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  CheckNonEncounterSectionWarnings(
    argument: _learningmotors_pb_emrsubmitter_SubmitCompositionRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emrsubmitter_SubmitCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  checkNonEncounterSectionWarnings(
    argument: _learningmotors_pb_emrsubmitter_SubmitCompositionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emrsubmitter_SubmitCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  checkNonEncounterSectionWarnings(
    argument: _learningmotors_pb_emrsubmitter_SubmitCompositionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emrsubmitter_SubmitCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  checkNonEncounterSectionWarnings(
    argument: _learningmotors_pb_emrsubmitter_SubmitCompositionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emrsubmitter_SubmitCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  checkNonEncounterSectionWarnings(
    argument: _learningmotors_pb_emrsubmitter_SubmitCompositionRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emrsubmitter_SubmitCompositionResponse__Output>
  ): grpc.ClientUnaryCall;

  OrderMedication(
    argument: _learningmotors_pb_emrsubmitter_OrderMedicationRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emrsubmitter_OrderMedicationResponse__Output>
  ): grpc.ClientUnaryCall;
  OrderMedication(
    argument: _learningmotors_pb_emrsubmitter_OrderMedicationRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emrsubmitter_OrderMedicationResponse__Output>
  ): grpc.ClientUnaryCall;
  OrderMedication(
    argument: _learningmotors_pb_emrsubmitter_OrderMedicationRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emrsubmitter_OrderMedicationResponse__Output>
  ): grpc.ClientUnaryCall;
  OrderMedication(
    argument: _learningmotors_pb_emrsubmitter_OrderMedicationRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emrsubmitter_OrderMedicationResponse__Output>
  ): grpc.ClientUnaryCall;
  orderMedication(
    argument: _learningmotors_pb_emrsubmitter_OrderMedicationRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emrsubmitter_OrderMedicationResponse__Output>
  ): grpc.ClientUnaryCall;
  orderMedication(
    argument: _learningmotors_pb_emrsubmitter_OrderMedicationRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emrsubmitter_OrderMedicationResponse__Output>
  ): grpc.ClientUnaryCall;
  orderMedication(
    argument: _learningmotors_pb_emrsubmitter_OrderMedicationRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emrsubmitter_OrderMedicationResponse__Output>
  ): grpc.ClientUnaryCall;
  orderMedication(
    argument: _learningmotors_pb_emrsubmitter_OrderMedicationRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emrsubmitter_OrderMedicationResponse__Output>
  ): grpc.ClientUnaryCall;

  SubmitComposition(
    argument: _learningmotors_pb_emrsubmitter_SubmitCompositionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emrsubmitter_SubmitCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  SubmitComposition(
    argument: _learningmotors_pb_emrsubmitter_SubmitCompositionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emrsubmitter_SubmitCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  SubmitComposition(
    argument: _learningmotors_pb_emrsubmitter_SubmitCompositionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emrsubmitter_SubmitCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  SubmitComposition(
    argument: _learningmotors_pb_emrsubmitter_SubmitCompositionRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emrsubmitter_SubmitCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  submitComposition(
    argument: _learningmotors_pb_emrsubmitter_SubmitCompositionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emrsubmitter_SubmitCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  submitComposition(
    argument: _learningmotors_pb_emrsubmitter_SubmitCompositionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_emrsubmitter_SubmitCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  submitComposition(
    argument: _learningmotors_pb_emrsubmitter_SubmitCompositionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_emrsubmitter_SubmitCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
  submitComposition(
    argument: _learningmotors_pb_emrsubmitter_SubmitCompositionRequest,
    callback: grpc.requestCallback<_learningmotors_pb_emrsubmitter_SubmitCompositionResponse__Output>
  ): grpc.ClientUnaryCall;
}

export interface EMRSubmitterServiceHandlers extends grpc.UntypedServiceImplementation {
  CheckNonEncounterSectionWarnings: grpc.handleUnaryCall<
    _learningmotors_pb_emrsubmitter_SubmitCompositionRequest__Output,
    _learningmotors_pb_emrsubmitter_SubmitCompositionResponse
  >;

  OrderMedication: grpc.handleUnaryCall<
    _learningmotors_pb_emrsubmitter_OrderMedicationRequest__Output,
    _learningmotors_pb_emrsubmitter_OrderMedicationResponse
  >;

  SubmitComposition: grpc.handleUnaryCall<
    _learningmotors_pb_emrsubmitter_SubmitCompositionRequest__Output,
    _learningmotors_pb_emrsubmitter_SubmitCompositionResponse
  >;
}

export interface EMRSubmitterServiceDefinition extends grpc.ServiceDefinition {
  CheckNonEncounterSectionWarnings: MethodDefinition<
    _learningmotors_pb_emrsubmitter_SubmitCompositionRequest,
    _learningmotors_pb_emrsubmitter_SubmitCompositionResponse,
    _learningmotors_pb_emrsubmitter_SubmitCompositionRequest__Output,
    _learningmotors_pb_emrsubmitter_SubmitCompositionResponse__Output
  >;
  OrderMedication: MethodDefinition<
    _learningmotors_pb_emrsubmitter_OrderMedicationRequest,
    _learningmotors_pb_emrsubmitter_OrderMedicationResponse,
    _learningmotors_pb_emrsubmitter_OrderMedicationRequest__Output,
    _learningmotors_pb_emrsubmitter_OrderMedicationResponse__Output
  >;
  SubmitComposition: MethodDefinition<
    _learningmotors_pb_emrsubmitter_SubmitCompositionRequest,
    _learningmotors_pb_emrsubmitter_SubmitCompositionResponse,
    _learningmotors_pb_emrsubmitter_SubmitCompositionRequest__Output,
    _learningmotors_pb_emrsubmitter_SubmitCompositionResponse__Output
  >;
}
