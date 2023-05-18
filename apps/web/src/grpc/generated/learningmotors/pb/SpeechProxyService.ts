// Original file: node_modules/protobufs/src/learningmotors/pb/speechproxy.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  StreamingRecognizeRequest as _learningmotors_pb_StreamingRecognizeRequest,
  StreamingRecognizeRequest__Output as _learningmotors_pb_StreamingRecognizeRequest__Output
} from "../../learningmotors/pb/StreamingRecognizeRequest";
import type {
  StreamingRecognizeResponse as _learningmotors_pb_StreamingRecognizeResponse,
  StreamingRecognizeResponse__Output as _learningmotors_pb_StreamingRecognizeResponse__Output
} from "../../learningmotors/pb/StreamingRecognizeResponse";

export interface SpeechProxyServiceClient extends grpc.Client {
  SpeechProxyRecognize(
    metadata: grpc.Metadata,
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<
    _learningmotors_pb_StreamingRecognizeRequest,
    _learningmotors_pb_StreamingRecognizeResponse__Output
  >;
  SpeechProxyRecognize(
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<
    _learningmotors_pb_StreamingRecognizeRequest,
    _learningmotors_pb_StreamingRecognizeResponse__Output
  >;
  speechProxyRecognize(
    metadata: grpc.Metadata,
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<
    _learningmotors_pb_StreamingRecognizeRequest,
    _learningmotors_pb_StreamingRecognizeResponse__Output
  >;
  speechProxyRecognize(
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<
    _learningmotors_pb_StreamingRecognizeRequest,
    _learningmotors_pb_StreamingRecognizeResponse__Output
  >;
}

export interface SpeechProxyServiceHandlers extends grpc.UntypedServiceImplementation {
  SpeechProxyRecognize: grpc.handleBidiStreamingCall<
    _learningmotors_pb_StreamingRecognizeRequest__Output,
    _learningmotors_pb_StreamingRecognizeResponse
  >;
}

export interface SpeechProxyServiceDefinition extends grpc.ServiceDefinition {
  SpeechProxyRecognize: MethodDefinition<
    _learningmotors_pb_StreamingRecognizeRequest,
    _learningmotors_pb_StreamingRecognizeResponse,
    _learningmotors_pb_StreamingRecognizeRequest__Output,
    _learningmotors_pb_StreamingRecognizeResponse__Output
  >;
}
