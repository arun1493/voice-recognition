// Original file: node_modules/protobufs/src/learningmotors/pb/lighthouse.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  SessionDetailsRequest as _learningmotors_pb_SessionDetailsRequest,
  SessionDetailsRequest__Output as _learningmotors_pb_SessionDetailsRequest__Output
} from "../../learningmotors/pb/SessionDetailsRequest";
import type {
  SessionDetailsResponse as _learningmotors_pb_SessionDetailsResponse,
  SessionDetailsResponse__Output as _learningmotors_pb_SessionDetailsResponse__Output
} from "../../learningmotors/pb/SessionDetailsResponse";

export interface LighthouseClient extends grpc.Client {
  SessionDetails(
    argument: _learningmotors_pb_SessionDetailsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_SessionDetailsResponse__Output>
  ): grpc.ClientUnaryCall;
  SessionDetails(
    argument: _learningmotors_pb_SessionDetailsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_SessionDetailsResponse__Output>
  ): grpc.ClientUnaryCall;
  SessionDetails(
    argument: _learningmotors_pb_SessionDetailsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_SessionDetailsResponse__Output>
  ): grpc.ClientUnaryCall;
  SessionDetails(
    argument: _learningmotors_pb_SessionDetailsRequest,
    callback: grpc.requestCallback<_learningmotors_pb_SessionDetailsResponse__Output>
  ): grpc.ClientUnaryCall;
  sessionDetails(
    argument: _learningmotors_pb_SessionDetailsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_SessionDetailsResponse__Output>
  ): grpc.ClientUnaryCall;
  sessionDetails(
    argument: _learningmotors_pb_SessionDetailsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_SessionDetailsResponse__Output>
  ): grpc.ClientUnaryCall;
  sessionDetails(
    argument: _learningmotors_pb_SessionDetailsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_SessionDetailsResponse__Output>
  ): grpc.ClientUnaryCall;
  sessionDetails(
    argument: _learningmotors_pb_SessionDetailsRequest,
    callback: grpc.requestCallback<_learningmotors_pb_SessionDetailsResponse__Output>
  ): grpc.ClientUnaryCall;
}

export interface LighthouseHandlers extends grpc.UntypedServiceImplementation {
  SessionDetails: grpc.handleUnaryCall<
    _learningmotors_pb_SessionDetailsRequest__Output,
    _learningmotors_pb_SessionDetailsResponse
  >;
}

export interface LighthouseDefinition extends grpc.ServiceDefinition {
  SessionDetails: MethodDefinition<
    _learningmotors_pb_SessionDetailsRequest,
    _learningmotors_pb_SessionDetailsResponse,
    _learningmotors_pb_SessionDetailsRequest__Output,
    _learningmotors_pb_SessionDetailsResponse__Output
  >;
}
