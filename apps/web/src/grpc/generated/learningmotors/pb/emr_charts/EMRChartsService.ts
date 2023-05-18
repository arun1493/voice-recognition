// Original file: node_modules/protobufs/src/learningmotors/pb/emr_charts/emr_charts.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output
} from "../../../google/protobuf/Empty";
import type {
  RefreshChartsDataRequest as _learningmotors_pb_emr_charts_RefreshChartsDataRequest,
  RefreshChartsDataRequest__Output as _learningmotors_pb_emr_charts_RefreshChartsDataRequest__Output
} from "../../../learningmotors/pb/emr_charts/RefreshChartsDataRequest";

export interface EMRChartsServiceClient extends grpc.Client {
  RefreshChartsData(
    argument: _learningmotors_pb_emr_charts_RefreshChartsDataRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  RefreshChartsData(
    argument: _learningmotors_pb_emr_charts_RefreshChartsDataRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  RefreshChartsData(
    argument: _learningmotors_pb_emr_charts_RefreshChartsDataRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  RefreshChartsData(
    argument: _learningmotors_pb_emr_charts_RefreshChartsDataRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  refreshChartsData(
    argument: _learningmotors_pb_emr_charts_RefreshChartsDataRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  refreshChartsData(
    argument: _learningmotors_pb_emr_charts_RefreshChartsDataRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  refreshChartsData(
    argument: _learningmotors_pb_emr_charts_RefreshChartsDataRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  refreshChartsData(
    argument: _learningmotors_pb_emr_charts_RefreshChartsDataRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
}

export interface EMRChartsServiceHandlers extends grpc.UntypedServiceImplementation {
  RefreshChartsData: grpc.handleUnaryCall<
    _learningmotors_pb_emr_charts_RefreshChartsDataRequest__Output,
    _google_protobuf_Empty
  >;
}

export interface EMRChartsServiceDefinition extends grpc.ServiceDefinition {
  RefreshChartsData: MethodDefinition<
    _learningmotors_pb_emr_charts_RefreshChartsDataRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_emr_charts_RefreshChartsDataRequest__Output,
    _google_protobuf_Empty__Output
  >;
}
