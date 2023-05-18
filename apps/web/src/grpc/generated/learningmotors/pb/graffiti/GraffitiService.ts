// Original file: node_modules/protobufs/src/learningmotors/pb/graffiti/graffiti.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  CreateRequest as _learningmotors_pb_graffiti_CreateRequest,
  CreateRequest__Output as _learningmotors_pb_graffiti_CreateRequest__Output
} from "../../../learningmotors/pb/graffiti/CreateRequest";
import type {
  CreateResponse as _learningmotors_pb_graffiti_CreateResponse,
  CreateResponse__Output as _learningmotors_pb_graffiti_CreateResponse__Output
} from "../../../learningmotors/pb/graffiti/CreateResponse";
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output
} from "../../../google/protobuf/Empty";
import type {
  InsertRequest as _learningmotors_pb_graffiti_InsertRequest,
  InsertRequest__Output as _learningmotors_pb_graffiti_InsertRequest__Output
} from "../../../learningmotors/pb/graffiti/InsertRequest";
import type {
  InsertResponse as _learningmotors_pb_graffiti_InsertResponse,
  InsertResponse__Output as _learningmotors_pb_graffiti_InsertResponse__Output
} from "../../../learningmotors/pb/graffiti/InsertResponse";
import type {
  IntentEvent as _learningmotors_pb_graffiti_IntentEvent,
  IntentEvent__Output as _learningmotors_pb_graffiti_IntentEvent__Output
} from "../../../learningmotors/pb/graffiti/IntentEvent";
import type {
  UpdatePatientRequest as _learningmotors_pb_graffiti_UpdatePatientRequest,
  UpdatePatientRequest__Output as _learningmotors_pb_graffiti_UpdatePatientRequest__Output
} from "../../../learningmotors/pb/graffiti/UpdatePatientRequest";
import type {
  UpdatePatientResponse as _learningmotors_pb_graffiti_UpdatePatientResponse,
  UpdatePatientResponse__Output as _learningmotors_pb_graffiti_UpdatePatientResponse__Output
} from "../../../learningmotors/pb/graffiti/UpdatePatientResponse";
import type {
  UpdateRequest as _learningmotors_pb_graffiti_UpdateRequest,
  UpdateRequest__Output as _learningmotors_pb_graffiti_UpdateRequest__Output
} from "../../../learningmotors/pb/graffiti/UpdateRequest";
import type {
  UpdateResponse as _learningmotors_pb_graffiti_UpdateResponse,
  UpdateResponse__Output as _learningmotors_pb_graffiti_UpdateResponse__Output
} from "../../../learningmotors/pb/graffiti/UpdateResponse";

export interface GraffitiServiceClient extends grpc.Client {
  Create(
    argument: _learningmotors_pb_graffiti_CreateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_graffiti_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  Create(
    argument: _learningmotors_pb_graffiti_CreateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_graffiti_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  Create(
    argument: _learningmotors_pb_graffiti_CreateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_graffiti_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  Create(
    argument: _learningmotors_pb_graffiti_CreateRequest,
    callback: grpc.requestCallback<_learningmotors_pb_graffiti_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  create(
    argument: _learningmotors_pb_graffiti_CreateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_graffiti_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  create(
    argument: _learningmotors_pb_graffiti_CreateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_graffiti_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  create(
    argument: _learningmotors_pb_graffiti_CreateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_graffiti_CreateResponse__Output>
  ): grpc.ClientUnaryCall;
  create(
    argument: _learningmotors_pb_graffiti_CreateRequest,
    callback: grpc.requestCallback<_learningmotors_pb_graffiti_CreateResponse__Output>
  ): grpc.ClientUnaryCall;

  Insert(
    argument: _learningmotors_pb_graffiti_InsertRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_graffiti_InsertResponse__Output>
  ): grpc.ClientUnaryCall;
  Insert(
    argument: _learningmotors_pb_graffiti_InsertRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_graffiti_InsertResponse__Output>
  ): grpc.ClientUnaryCall;
  Insert(
    argument: _learningmotors_pb_graffiti_InsertRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_graffiti_InsertResponse__Output>
  ): grpc.ClientUnaryCall;
  Insert(
    argument: _learningmotors_pb_graffiti_InsertRequest,
    callback: grpc.requestCallback<_learningmotors_pb_graffiti_InsertResponse__Output>
  ): grpc.ClientUnaryCall;
  insert(
    argument: _learningmotors_pb_graffiti_InsertRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_graffiti_InsertResponse__Output>
  ): grpc.ClientUnaryCall;
  insert(
    argument: _learningmotors_pb_graffiti_InsertRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_graffiti_InsertResponse__Output>
  ): grpc.ClientUnaryCall;
  insert(
    argument: _learningmotors_pb_graffiti_InsertRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_graffiti_InsertResponse__Output>
  ): grpc.ClientUnaryCall;
  insert(
    argument: _learningmotors_pb_graffiti_InsertRequest,
    callback: grpc.requestCallback<_learningmotors_pb_graffiti_InsertResponse__Output>
  ): grpc.ClientUnaryCall;

  IntentRecognition(
    argument: _learningmotors_pb_graffiti_IntentEvent,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  IntentRecognition(
    argument: _learningmotors_pb_graffiti_IntentEvent,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  IntentRecognition(
    argument: _learningmotors_pb_graffiti_IntentEvent,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  IntentRecognition(
    argument: _learningmotors_pb_graffiti_IntentEvent,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  intentRecognition(
    argument: _learningmotors_pb_graffiti_IntentEvent,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  intentRecognition(
    argument: _learningmotors_pb_graffiti_IntentEvent,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  intentRecognition(
    argument: _learningmotors_pb_graffiti_IntentEvent,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  intentRecognition(
    argument: _learningmotors_pb_graffiti_IntentEvent,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  Update(
    argument: _learningmotors_pb_graffiti_UpdateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_graffiti_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  Update(
    argument: _learningmotors_pb_graffiti_UpdateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_graffiti_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  Update(
    argument: _learningmotors_pb_graffiti_UpdateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_graffiti_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  Update(
    argument: _learningmotors_pb_graffiti_UpdateRequest,
    callback: grpc.requestCallback<_learningmotors_pb_graffiti_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  update(
    argument: _learningmotors_pb_graffiti_UpdateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_graffiti_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  update(
    argument: _learningmotors_pb_graffiti_UpdateRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_graffiti_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  update(
    argument: _learningmotors_pb_graffiti_UpdateRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_graffiti_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;
  update(
    argument: _learningmotors_pb_graffiti_UpdateRequest,
    callback: grpc.requestCallback<_learningmotors_pb_graffiti_UpdateResponse__Output>
  ): grpc.ClientUnaryCall;

  UpdatePatient(
    argument: _learningmotors_pb_graffiti_UpdatePatientRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_graffiti_UpdatePatientResponse__Output>
  ): grpc.ClientUnaryCall;
  UpdatePatient(
    argument: _learningmotors_pb_graffiti_UpdatePatientRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_graffiti_UpdatePatientResponse__Output>
  ): grpc.ClientUnaryCall;
  UpdatePatient(
    argument: _learningmotors_pb_graffiti_UpdatePatientRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_graffiti_UpdatePatientResponse__Output>
  ): grpc.ClientUnaryCall;
  UpdatePatient(
    argument: _learningmotors_pb_graffiti_UpdatePatientRequest,
    callback: grpc.requestCallback<_learningmotors_pb_graffiti_UpdatePatientResponse__Output>
  ): grpc.ClientUnaryCall;
  updatePatient(
    argument: _learningmotors_pb_graffiti_UpdatePatientRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_graffiti_UpdatePatientResponse__Output>
  ): grpc.ClientUnaryCall;
  updatePatient(
    argument: _learningmotors_pb_graffiti_UpdatePatientRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_graffiti_UpdatePatientResponse__Output>
  ): grpc.ClientUnaryCall;
  updatePatient(
    argument: _learningmotors_pb_graffiti_UpdatePatientRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_graffiti_UpdatePatientResponse__Output>
  ): grpc.ClientUnaryCall;
  updatePatient(
    argument: _learningmotors_pb_graffiti_UpdatePatientRequest,
    callback: grpc.requestCallback<_learningmotors_pb_graffiti_UpdatePatientResponse__Output>
  ): grpc.ClientUnaryCall;
}

export interface GraffitiServiceHandlers extends grpc.UntypedServiceImplementation {
  Create: grpc.handleUnaryCall<
    _learningmotors_pb_graffiti_CreateRequest__Output,
    _learningmotors_pb_graffiti_CreateResponse
  >;

  Insert: grpc.handleUnaryCall<
    _learningmotors_pb_graffiti_InsertRequest__Output,
    _learningmotors_pb_graffiti_InsertResponse
  >;

  IntentRecognition: grpc.handleUnaryCall<_learningmotors_pb_graffiti_IntentEvent__Output, _google_protobuf_Empty>;

  Update: grpc.handleUnaryCall<
    _learningmotors_pb_graffiti_UpdateRequest__Output,
    _learningmotors_pb_graffiti_UpdateResponse
  >;

  UpdatePatient: grpc.handleUnaryCall<
    _learningmotors_pb_graffiti_UpdatePatientRequest__Output,
    _learningmotors_pb_graffiti_UpdatePatientResponse
  >;
}

export interface GraffitiServiceDefinition extends grpc.ServiceDefinition {
  Create: MethodDefinition<
    _learningmotors_pb_graffiti_CreateRequest,
    _learningmotors_pb_graffiti_CreateResponse,
    _learningmotors_pb_graffiti_CreateRequest__Output,
    _learningmotors_pb_graffiti_CreateResponse__Output
  >;
  Insert: MethodDefinition<
    _learningmotors_pb_graffiti_InsertRequest,
    _learningmotors_pb_graffiti_InsertResponse,
    _learningmotors_pb_graffiti_InsertRequest__Output,
    _learningmotors_pb_graffiti_InsertResponse__Output
  >;
  IntentRecognition: MethodDefinition<
    _learningmotors_pb_graffiti_IntentEvent,
    _google_protobuf_Empty,
    _learningmotors_pb_graffiti_IntentEvent__Output,
    _google_protobuf_Empty__Output
  >;
  Update: MethodDefinition<
    _learningmotors_pb_graffiti_UpdateRequest,
    _learningmotors_pb_graffiti_UpdateResponse,
    _learningmotors_pb_graffiti_UpdateRequest__Output,
    _learningmotors_pb_graffiti_UpdateResponse__Output
  >;
  UpdatePatient: MethodDefinition<
    _learningmotors_pb_graffiti_UpdatePatientRequest,
    _learningmotors_pb_graffiti_UpdatePatientResponse,
    _learningmotors_pb_graffiti_UpdatePatientRequest__Output,
    _learningmotors_pb_graffiti_UpdatePatientResponse__Output
  >;
}
