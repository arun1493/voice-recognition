// Original file: node_modules/protobufs/src/suki/pb/ssp/v1/ssp_speech.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  ChangeSpeechConfigRequest as _suki_pb_ssp_v1_ChangeSpeechConfigRequest,
  ChangeSpeechConfigRequest__Output as _suki_pb_ssp_v1_ChangeSpeechConfigRequest__Output
} from "../../../../suki/pb/ssp/v1/ChangeSpeechConfigRequest";
import type {
  ChangeSpeechConfigResponse as _suki_pb_ssp_v1_ChangeSpeechConfigResponse,
  ChangeSpeechConfigResponse__Output as _suki_pb_ssp_v1_ChangeSpeechConfigResponse__Output
} from "../../../../suki/pb/ssp/v1/ChangeSpeechConfigResponse";
import type {
  PingRequest as _suki_pb_ssp_v1_PingRequest,
  PingRequest__Output as _suki_pb_ssp_v1_PingRequest__Output
} from "../../../../suki/pb/ssp/v1/PingRequest";
import type {
  PongReply as _suki_pb_ssp_v1_PongReply,
  PongReply__Output as _suki_pb_ssp_v1_PongReply__Output
} from "../../../../suki/pb/ssp/v1/PongReply";
import type {
  RecognizeCommandRequest as _suki_pb_ssp_v1_RecognizeCommandRequest,
  RecognizeCommandRequest__Output as _suki_pb_ssp_v1_RecognizeCommandRequest__Output
} from "../../../../suki/pb/ssp/v1/RecognizeCommandRequest";
import type {
  RecognizeCommandResponse as _suki_pb_ssp_v1_RecognizeCommandResponse,
  RecognizeCommandResponse__Output as _suki_pb_ssp_v1_RecognizeCommandResponse__Output
} from "../../../../suki/pb/ssp/v1/RecognizeCommandResponse";
import type {
  SpeechStartRequest as _suki_pb_ssp_v1_SpeechStartRequest,
  SpeechStartRequest__Output as _suki_pb_ssp_v1_SpeechStartRequest__Output
} from "../../../../suki/pb/ssp/v1/SpeechStartRequest";
import type {
  SpeechStartResponse as _suki_pb_ssp_v1_SpeechStartResponse,
  SpeechStartResponse__Output as _suki_pb_ssp_v1_SpeechStartResponse__Output
} from "../../../../suki/pb/ssp/v1/SpeechStartResponse";
import type {
  StreamingRecognizeCommandRequest as _suki_pb_ssp_v1_StreamingRecognizeCommandRequest,
  StreamingRecognizeCommandRequest__Output as _suki_pb_ssp_v1_StreamingRecognizeCommandRequest__Output
} from "../../../../suki/pb/ssp/v1/StreamingRecognizeCommandRequest";
import type {
  StreamingRecognizeCommandResponse as _suki_pb_ssp_v1_StreamingRecognizeCommandResponse,
  StreamingRecognizeCommandResponse__Output as _suki_pb_ssp_v1_StreamingRecognizeCommandResponse__Output
} from "../../../../suki/pb/ssp/v1/StreamingRecognizeCommandResponse";
import type {
  StreamingRecognizeDictationRequest as _suki_pb_ssp_v1_StreamingRecognizeDictationRequest,
  StreamingRecognizeDictationRequest__Output as _suki_pb_ssp_v1_StreamingRecognizeDictationRequest__Output
} from "../../../../suki/pb/ssp/v1/StreamingRecognizeDictationRequest";
import type {
  StreamingRecognizeDictationResponse as _suki_pb_ssp_v1_StreamingRecognizeDictationResponse,
  StreamingRecognizeDictationResponse__Output as _suki_pb_ssp_v1_StreamingRecognizeDictationResponse__Output
} from "../../../../suki/pb/ssp/v1/StreamingRecognizeDictationResponse";

export interface SspSpeechClient extends grpc.Client {
  ChangeSpeechConfig(
    argument: _suki_pb_ssp_v1_ChangeSpeechConfigRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ssp_v1_ChangeSpeechConfigResponse__Output>
  ): grpc.ClientUnaryCall;
  ChangeSpeechConfig(
    argument: _suki_pb_ssp_v1_ChangeSpeechConfigRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ssp_v1_ChangeSpeechConfigResponse__Output>
  ): grpc.ClientUnaryCall;
  ChangeSpeechConfig(
    argument: _suki_pb_ssp_v1_ChangeSpeechConfigRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ssp_v1_ChangeSpeechConfigResponse__Output>
  ): grpc.ClientUnaryCall;
  ChangeSpeechConfig(
    argument: _suki_pb_ssp_v1_ChangeSpeechConfigRequest,
    callback: grpc.requestCallback<_suki_pb_ssp_v1_ChangeSpeechConfigResponse__Output>
  ): grpc.ClientUnaryCall;
  changeSpeechConfig(
    argument: _suki_pb_ssp_v1_ChangeSpeechConfigRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ssp_v1_ChangeSpeechConfigResponse__Output>
  ): grpc.ClientUnaryCall;
  changeSpeechConfig(
    argument: _suki_pb_ssp_v1_ChangeSpeechConfigRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ssp_v1_ChangeSpeechConfigResponse__Output>
  ): grpc.ClientUnaryCall;
  changeSpeechConfig(
    argument: _suki_pb_ssp_v1_ChangeSpeechConfigRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ssp_v1_ChangeSpeechConfigResponse__Output>
  ): grpc.ClientUnaryCall;
  changeSpeechConfig(
    argument: _suki_pb_ssp_v1_ChangeSpeechConfigRequest,
    callback: grpc.requestCallback<_suki_pb_ssp_v1_ChangeSpeechConfigResponse__Output>
  ): grpc.ClientUnaryCall;

  PingPong(
    argument: _suki_pb_ssp_v1_PingRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ssp_v1_PongReply__Output>
  ): grpc.ClientUnaryCall;
  PingPong(
    argument: _suki_pb_ssp_v1_PingRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ssp_v1_PongReply__Output>
  ): grpc.ClientUnaryCall;
  PingPong(
    argument: _suki_pb_ssp_v1_PingRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ssp_v1_PongReply__Output>
  ): grpc.ClientUnaryCall;
  PingPong(
    argument: _suki_pb_ssp_v1_PingRequest,
    callback: grpc.requestCallback<_suki_pb_ssp_v1_PongReply__Output>
  ): grpc.ClientUnaryCall;
  pingPong(
    argument: _suki_pb_ssp_v1_PingRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ssp_v1_PongReply__Output>
  ): grpc.ClientUnaryCall;
  pingPong(
    argument: _suki_pb_ssp_v1_PingRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ssp_v1_PongReply__Output>
  ): grpc.ClientUnaryCall;
  pingPong(
    argument: _suki_pb_ssp_v1_PingRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ssp_v1_PongReply__Output>
  ): grpc.ClientUnaryCall;
  pingPong(
    argument: _suki_pb_ssp_v1_PingRequest,
    callback: grpc.requestCallback<_suki_pb_ssp_v1_PongReply__Output>
  ): grpc.ClientUnaryCall;

  RecognizeCommand(
    argument: _suki_pb_ssp_v1_RecognizeCommandRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ssp_v1_RecognizeCommandResponse__Output>
  ): grpc.ClientUnaryCall;
  RecognizeCommand(
    argument: _suki_pb_ssp_v1_RecognizeCommandRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ssp_v1_RecognizeCommandResponse__Output>
  ): grpc.ClientUnaryCall;
  RecognizeCommand(
    argument: _suki_pb_ssp_v1_RecognizeCommandRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ssp_v1_RecognizeCommandResponse__Output>
  ): grpc.ClientUnaryCall;
  RecognizeCommand(
    argument: _suki_pb_ssp_v1_RecognizeCommandRequest,
    callback: grpc.requestCallback<_suki_pb_ssp_v1_RecognizeCommandResponse__Output>
  ): grpc.ClientUnaryCall;
  recognizeCommand(
    argument: _suki_pb_ssp_v1_RecognizeCommandRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ssp_v1_RecognizeCommandResponse__Output>
  ): grpc.ClientUnaryCall;
  recognizeCommand(
    argument: _suki_pb_ssp_v1_RecognizeCommandRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ssp_v1_RecognizeCommandResponse__Output>
  ): grpc.ClientUnaryCall;
  recognizeCommand(
    argument: _suki_pb_ssp_v1_RecognizeCommandRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ssp_v1_RecognizeCommandResponse__Output>
  ): grpc.ClientUnaryCall;
  recognizeCommand(
    argument: _suki_pb_ssp_v1_RecognizeCommandRequest,
    callback: grpc.requestCallback<_suki_pb_ssp_v1_RecognizeCommandResponse__Output>
  ): grpc.ClientUnaryCall;

  SpeechStart(
    argument: _suki_pb_ssp_v1_SpeechStartRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ssp_v1_SpeechStartResponse__Output>
  ): grpc.ClientUnaryCall;
  SpeechStart(
    argument: _suki_pb_ssp_v1_SpeechStartRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ssp_v1_SpeechStartResponse__Output>
  ): grpc.ClientUnaryCall;
  SpeechStart(
    argument: _suki_pb_ssp_v1_SpeechStartRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ssp_v1_SpeechStartResponse__Output>
  ): grpc.ClientUnaryCall;
  SpeechStart(
    argument: _suki_pb_ssp_v1_SpeechStartRequest,
    callback: grpc.requestCallback<_suki_pb_ssp_v1_SpeechStartResponse__Output>
  ): grpc.ClientUnaryCall;
  speechStart(
    argument: _suki_pb_ssp_v1_SpeechStartRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ssp_v1_SpeechStartResponse__Output>
  ): grpc.ClientUnaryCall;
  speechStart(
    argument: _suki_pb_ssp_v1_SpeechStartRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ssp_v1_SpeechStartResponse__Output>
  ): grpc.ClientUnaryCall;
  speechStart(
    argument: _suki_pb_ssp_v1_SpeechStartRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ssp_v1_SpeechStartResponse__Output>
  ): grpc.ClientUnaryCall;
  speechStart(
    argument: _suki_pb_ssp_v1_SpeechStartRequest,
    callback: grpc.requestCallback<_suki_pb_ssp_v1_SpeechStartResponse__Output>
  ): grpc.ClientUnaryCall;

  StreamingRecognizeCommand(
    metadata: grpc.Metadata,
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<
    _suki_pb_ssp_v1_StreamingRecognizeCommandRequest,
    _suki_pb_ssp_v1_StreamingRecognizeCommandResponse__Output
  >;
  StreamingRecognizeCommand(
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<
    _suki_pb_ssp_v1_StreamingRecognizeCommandRequest,
    _suki_pb_ssp_v1_StreamingRecognizeCommandResponse__Output
  >;
  streamingRecognizeCommand(
    metadata: grpc.Metadata,
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<
    _suki_pb_ssp_v1_StreamingRecognizeCommandRequest,
    _suki_pb_ssp_v1_StreamingRecognizeCommandResponse__Output
  >;
  streamingRecognizeCommand(
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<
    _suki_pb_ssp_v1_StreamingRecognizeCommandRequest,
    _suki_pb_ssp_v1_StreamingRecognizeCommandResponse__Output
  >;

  StreamingRecognizeDictation(
    metadata: grpc.Metadata,
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<
    _suki_pb_ssp_v1_StreamingRecognizeDictationRequest,
    _suki_pb_ssp_v1_StreamingRecognizeDictationResponse__Output
  >;
  StreamingRecognizeDictation(
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<
    _suki_pb_ssp_v1_StreamingRecognizeDictationRequest,
    _suki_pb_ssp_v1_StreamingRecognizeDictationResponse__Output
  >;
  streamingRecognizeDictation(
    metadata: grpc.Metadata,
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<
    _suki_pb_ssp_v1_StreamingRecognizeDictationRequest,
    _suki_pb_ssp_v1_StreamingRecognizeDictationResponse__Output
  >;
  streamingRecognizeDictation(
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<
    _suki_pb_ssp_v1_StreamingRecognizeDictationRequest,
    _suki_pb_ssp_v1_StreamingRecognizeDictationResponse__Output
  >;
}

export interface SspSpeechHandlers extends grpc.UntypedServiceImplementation {
  ChangeSpeechConfig: grpc.handleUnaryCall<
    _suki_pb_ssp_v1_ChangeSpeechConfigRequest__Output,
    _suki_pb_ssp_v1_ChangeSpeechConfigResponse
  >;

  PingPong: grpc.handleUnaryCall<_suki_pb_ssp_v1_PingRequest__Output, _suki_pb_ssp_v1_PongReply>;

  RecognizeCommand: grpc.handleUnaryCall<
    _suki_pb_ssp_v1_RecognizeCommandRequest__Output,
    _suki_pb_ssp_v1_RecognizeCommandResponse
  >;

  SpeechStart: grpc.handleUnaryCall<_suki_pb_ssp_v1_SpeechStartRequest__Output, _suki_pb_ssp_v1_SpeechStartResponse>;

  StreamingRecognizeCommand: grpc.handleBidiStreamingCall<
    _suki_pb_ssp_v1_StreamingRecognizeCommandRequest__Output,
    _suki_pb_ssp_v1_StreamingRecognizeCommandResponse
  >;

  StreamingRecognizeDictation: grpc.handleBidiStreamingCall<
    _suki_pb_ssp_v1_StreamingRecognizeDictationRequest__Output,
    _suki_pb_ssp_v1_StreamingRecognizeDictationResponse
  >;
}

export interface SspSpeechDefinition extends grpc.ServiceDefinition {
  ChangeSpeechConfig: MethodDefinition<
    _suki_pb_ssp_v1_ChangeSpeechConfigRequest,
    _suki_pb_ssp_v1_ChangeSpeechConfigResponse,
    _suki_pb_ssp_v1_ChangeSpeechConfigRequest__Output,
    _suki_pb_ssp_v1_ChangeSpeechConfigResponse__Output
  >;
  PingPong: MethodDefinition<
    _suki_pb_ssp_v1_PingRequest,
    _suki_pb_ssp_v1_PongReply,
    _suki_pb_ssp_v1_PingRequest__Output,
    _suki_pb_ssp_v1_PongReply__Output
  >;
  RecognizeCommand: MethodDefinition<
    _suki_pb_ssp_v1_RecognizeCommandRequest,
    _suki_pb_ssp_v1_RecognizeCommandResponse,
    _suki_pb_ssp_v1_RecognizeCommandRequest__Output,
    _suki_pb_ssp_v1_RecognizeCommandResponse__Output
  >;
  SpeechStart: MethodDefinition<
    _suki_pb_ssp_v1_SpeechStartRequest,
    _suki_pb_ssp_v1_SpeechStartResponse,
    _suki_pb_ssp_v1_SpeechStartRequest__Output,
    _suki_pb_ssp_v1_SpeechStartResponse__Output
  >;
  StreamingRecognizeCommand: MethodDefinition<
    _suki_pb_ssp_v1_StreamingRecognizeCommandRequest,
    _suki_pb_ssp_v1_StreamingRecognizeCommandResponse,
    _suki_pb_ssp_v1_StreamingRecognizeCommandRequest__Output,
    _suki_pb_ssp_v1_StreamingRecognizeCommandResponse__Output
  >;
  StreamingRecognizeDictation: MethodDefinition<
    _suki_pb_ssp_v1_StreamingRecognizeDictationRequest,
    _suki_pb_ssp_v1_StreamingRecognizeDictationResponse,
    _suki_pb_ssp_v1_StreamingRecognizeDictationRequest__Output,
    _suki_pb_ssp_v1_StreamingRecognizeDictationResponse__Output
  >;
}
