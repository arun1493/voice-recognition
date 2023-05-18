// Original file: node_modules/protobufs/src/suki/pb/ssp/dictate/dictate.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  DictationRequest as _suki_pb_ssp_dictate_DictationRequest,
  DictationRequest__Output as _suki_pb_ssp_dictate_DictationRequest__Output
} from "../../../../suki/pb/ssp/dictate/DictationRequest";
import type {
  DictationResponse as _suki_pb_ssp_dictate_DictationResponse,
  DictationResponse__Output as _suki_pb_ssp_dictate_DictationResponse__Output
} from "../../../../suki/pb/ssp/dictate/DictationResponse";

export interface SukiDictationClient extends grpc.Client {
  Dictate(
    metadata: grpc.Metadata,
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<_suki_pb_ssp_dictate_DictationRequest, _suki_pb_ssp_dictate_DictationResponse__Output>;
  Dictate(
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<_suki_pb_ssp_dictate_DictationRequest, _suki_pb_ssp_dictate_DictationResponse__Output>;
  dictate(
    metadata: grpc.Metadata,
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<_suki_pb_ssp_dictate_DictationRequest, _suki_pb_ssp_dictate_DictationResponse__Output>;
  dictate(
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<_suki_pb_ssp_dictate_DictationRequest, _suki_pb_ssp_dictate_DictationResponse__Output>;
}

export interface SukiDictationHandlers extends grpc.UntypedServiceImplementation {
  Dictate: grpc.handleBidiStreamingCall<
    _suki_pb_ssp_dictate_DictationRequest__Output,
    _suki_pb_ssp_dictate_DictationResponse
  >;
}

export interface SukiDictationDefinition extends grpc.ServiceDefinition {
  Dictate: MethodDefinition<
    _suki_pb_ssp_dictate_DictationRequest,
    _suki_pb_ssp_dictate_DictationResponse,
    _suki_pb_ssp_dictate_DictationRequest__Output,
    _suki_pb_ssp_dictate_DictationResponse__Output
  >;
}
