// Original file: node_modules/protobufs/src/suki/pb/ssp/asr_manager/asr_manager.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output
} from "../../../../../google/protobuf/Empty";
import type {
  GetStatusRequest as _suki_pb_ssp_v1_asr_manager_GetStatusRequest,
  GetStatusRequest__Output as _suki_pb_ssp_v1_asr_manager_GetStatusRequest__Output
} from "../../../../../suki/pb/ssp/v1/asr_manager/GetStatusRequest";
import type {
  GetStatusResponse as _suki_pb_ssp_v1_asr_manager_GetStatusResponse,
  GetStatusResponse__Output as _suki_pb_ssp_v1_asr_manager_GetStatusResponse__Output
} from "../../../../../suki/pb/ssp/v1/asr_manager/GetStatusResponse";
import type {
  StartSpeechRequest as _suki_pb_ssp_v1_asr_manager_StartSpeechRequest,
  StartSpeechRequest__Output as _suki_pb_ssp_v1_asr_manager_StartSpeechRequest__Output
} from "../../../../../suki/pb/ssp/v1/asr_manager/StartSpeechRequest";

export interface ASRManagerClient extends grpc.Client {
  GetStatus(
    argument: _suki_pb_ssp_v1_asr_manager_GetStatusRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ssp_v1_asr_manager_GetStatusResponse__Output>
  ): grpc.ClientUnaryCall;
  GetStatus(
    argument: _suki_pb_ssp_v1_asr_manager_GetStatusRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ssp_v1_asr_manager_GetStatusResponse__Output>
  ): grpc.ClientUnaryCall;
  GetStatus(
    argument: _suki_pb_ssp_v1_asr_manager_GetStatusRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ssp_v1_asr_manager_GetStatusResponse__Output>
  ): grpc.ClientUnaryCall;
  GetStatus(
    argument: _suki_pb_ssp_v1_asr_manager_GetStatusRequest,
    callback: grpc.requestCallback<_suki_pb_ssp_v1_asr_manager_GetStatusResponse__Output>
  ): grpc.ClientUnaryCall;
  getStatus(
    argument: _suki_pb_ssp_v1_asr_manager_GetStatusRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ssp_v1_asr_manager_GetStatusResponse__Output>
  ): grpc.ClientUnaryCall;
  getStatus(
    argument: _suki_pb_ssp_v1_asr_manager_GetStatusRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ssp_v1_asr_manager_GetStatusResponse__Output>
  ): grpc.ClientUnaryCall;
  getStatus(
    argument: _suki_pb_ssp_v1_asr_manager_GetStatusRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ssp_v1_asr_manager_GetStatusResponse__Output>
  ): grpc.ClientUnaryCall;
  getStatus(
    argument: _suki_pb_ssp_v1_asr_manager_GetStatusRequest,
    callback: grpc.requestCallback<_suki_pb_ssp_v1_asr_manager_GetStatusResponse__Output>
  ): grpc.ClientUnaryCall;

  StartSpeech(
    argument: _suki_pb_ssp_v1_asr_manager_StartSpeechRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  StartSpeech(
    argument: _suki_pb_ssp_v1_asr_manager_StartSpeechRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  StartSpeech(
    argument: _suki_pb_ssp_v1_asr_manager_StartSpeechRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  StartSpeech(
    argument: _suki_pb_ssp_v1_asr_manager_StartSpeechRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  startSpeech(
    argument: _suki_pb_ssp_v1_asr_manager_StartSpeechRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  startSpeech(
    argument: _suki_pb_ssp_v1_asr_manager_StartSpeechRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  startSpeech(
    argument: _suki_pb_ssp_v1_asr_manager_StartSpeechRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  startSpeech(
    argument: _suki_pb_ssp_v1_asr_manager_StartSpeechRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
}

export interface ASRManagerHandlers extends grpc.UntypedServiceImplementation {
  GetStatus: grpc.handleUnaryCall<
    _suki_pb_ssp_v1_asr_manager_GetStatusRequest__Output,
    _suki_pb_ssp_v1_asr_manager_GetStatusResponse
  >;

  StartSpeech: grpc.handleUnaryCall<_suki_pb_ssp_v1_asr_manager_StartSpeechRequest__Output, _google_protobuf_Empty>;
}

export interface ASRManagerDefinition extends grpc.ServiceDefinition {
  GetStatus: MethodDefinition<
    _suki_pb_ssp_v1_asr_manager_GetStatusRequest,
    _suki_pb_ssp_v1_asr_manager_GetStatusResponse,
    _suki_pb_ssp_v1_asr_manager_GetStatusRequest__Output,
    _suki_pb_ssp_v1_asr_manager_GetStatusResponse__Output
  >;
  StartSpeech: MethodDefinition<
    _suki_pb_ssp_v1_asr_manager_StartSpeechRequest,
    _google_protobuf_Empty,
    _suki_pb_ssp_v1_asr_manager_StartSpeechRequest__Output,
    _google_protobuf_Empty__Output
  >;
}
