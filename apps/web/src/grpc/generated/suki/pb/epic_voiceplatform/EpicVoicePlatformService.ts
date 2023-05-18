// Original file: node_modules/protobufs/src/suki/pb/epic_voiceplatform/epic_voiceplatform.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  InitializeSessionRequest as _suki_pb_epic_voiceplatform_InitializeSessionRequest,
  InitializeSessionRequest__Output as _suki_pb_epic_voiceplatform_InitializeSessionRequest__Output
} from "../../../suki/pb/epic_voiceplatform/InitializeSessionRequest";
import type {
  InitializeSessionResponse as _suki_pb_epic_voiceplatform_InitializeSessionResponse,
  InitializeSessionResponse__Output as _suki_pb_epic_voiceplatform_InitializeSessionResponse__Output
} from "../../../suki/pb/epic_voiceplatform/InitializeSessionResponse";
import type {
  KeepAliveSessionRequest as _suki_pb_epic_voiceplatform_KeepAliveSessionRequest,
  KeepAliveSessionRequest__Output as _suki_pb_epic_voiceplatform_KeepAliveSessionRequest__Output
} from "../../../suki/pb/epic_voiceplatform/KeepAliveSessionRequest";
import type {
  KeepAliveSessionResponse as _suki_pb_epic_voiceplatform_KeepAliveSessionResponse,
  KeepAliveSessionResponse__Output as _suki_pb_epic_voiceplatform_KeepAliveSessionResponse__Output
} from "../../../suki/pb/epic_voiceplatform/KeepAliveSessionResponse";
import type {
  ProcessTextRequest as _suki_pb_epic_voiceplatform_ProcessTextRequest,
  ProcessTextRequest__Output as _suki_pb_epic_voiceplatform_ProcessTextRequest__Output
} from "../../../suki/pb/epic_voiceplatform/ProcessTextRequest";
import type {
  ProcessTextResponse as _suki_pb_epic_voiceplatform_ProcessTextResponse,
  ProcessTextResponse__Output as _suki_pb_epic_voiceplatform_ProcessTextResponse__Output
} from "../../../suki/pb/epic_voiceplatform/ProcessTextResponse";
import type {
  TerminateSessionRequest as _suki_pb_epic_voiceplatform_TerminateSessionRequest,
  TerminateSessionRequest__Output as _suki_pb_epic_voiceplatform_TerminateSessionRequest__Output
} from "../../../suki/pb/epic_voiceplatform/TerminateSessionRequest";
import type {
  TerminateSessionResponse as _suki_pb_epic_voiceplatform_TerminateSessionResponse,
  TerminateSessionResponse__Output as _suki_pb_epic_voiceplatform_TerminateSessionResponse__Output
} from "../../../suki/pb/epic_voiceplatform/TerminateSessionResponse";

export interface EpicVoicePlatformServiceClient extends grpc.Client {
  InitializeSession(
    argument: _suki_pb_epic_voiceplatform_InitializeSessionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_InitializeSessionResponse__Output>
  ): grpc.ClientUnaryCall;
  InitializeSession(
    argument: _suki_pb_epic_voiceplatform_InitializeSessionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_InitializeSessionResponse__Output>
  ): grpc.ClientUnaryCall;
  InitializeSession(
    argument: _suki_pb_epic_voiceplatform_InitializeSessionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_InitializeSessionResponse__Output>
  ): grpc.ClientUnaryCall;
  InitializeSession(
    argument: _suki_pb_epic_voiceplatform_InitializeSessionRequest,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_InitializeSessionResponse__Output>
  ): grpc.ClientUnaryCall;
  initializeSession(
    argument: _suki_pb_epic_voiceplatform_InitializeSessionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_InitializeSessionResponse__Output>
  ): grpc.ClientUnaryCall;
  initializeSession(
    argument: _suki_pb_epic_voiceplatform_InitializeSessionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_InitializeSessionResponse__Output>
  ): grpc.ClientUnaryCall;
  initializeSession(
    argument: _suki_pb_epic_voiceplatform_InitializeSessionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_InitializeSessionResponse__Output>
  ): grpc.ClientUnaryCall;
  initializeSession(
    argument: _suki_pb_epic_voiceplatform_InitializeSessionRequest,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_InitializeSessionResponse__Output>
  ): grpc.ClientUnaryCall;

  KeepAliveSession(
    argument: _suki_pb_epic_voiceplatform_KeepAliveSessionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_KeepAliveSessionResponse__Output>
  ): grpc.ClientUnaryCall;
  KeepAliveSession(
    argument: _suki_pb_epic_voiceplatform_KeepAliveSessionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_KeepAliveSessionResponse__Output>
  ): grpc.ClientUnaryCall;
  KeepAliveSession(
    argument: _suki_pb_epic_voiceplatform_KeepAliveSessionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_KeepAliveSessionResponse__Output>
  ): grpc.ClientUnaryCall;
  KeepAliveSession(
    argument: _suki_pb_epic_voiceplatform_KeepAliveSessionRequest,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_KeepAliveSessionResponse__Output>
  ): grpc.ClientUnaryCall;
  keepAliveSession(
    argument: _suki_pb_epic_voiceplatform_KeepAliveSessionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_KeepAliveSessionResponse__Output>
  ): grpc.ClientUnaryCall;
  keepAliveSession(
    argument: _suki_pb_epic_voiceplatform_KeepAliveSessionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_KeepAliveSessionResponse__Output>
  ): grpc.ClientUnaryCall;
  keepAliveSession(
    argument: _suki_pb_epic_voiceplatform_KeepAliveSessionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_KeepAliveSessionResponse__Output>
  ): grpc.ClientUnaryCall;
  keepAliveSession(
    argument: _suki_pb_epic_voiceplatform_KeepAliveSessionRequest,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_KeepAliveSessionResponse__Output>
  ): grpc.ClientUnaryCall;

  ProcessText(
    argument: _suki_pb_epic_voiceplatform_ProcessTextRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_ProcessTextResponse__Output>
  ): grpc.ClientUnaryCall;
  ProcessText(
    argument: _suki_pb_epic_voiceplatform_ProcessTextRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_ProcessTextResponse__Output>
  ): grpc.ClientUnaryCall;
  ProcessText(
    argument: _suki_pb_epic_voiceplatform_ProcessTextRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_ProcessTextResponse__Output>
  ): grpc.ClientUnaryCall;
  ProcessText(
    argument: _suki_pb_epic_voiceplatform_ProcessTextRequest,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_ProcessTextResponse__Output>
  ): grpc.ClientUnaryCall;
  processText(
    argument: _suki_pb_epic_voiceplatform_ProcessTextRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_ProcessTextResponse__Output>
  ): grpc.ClientUnaryCall;
  processText(
    argument: _suki_pb_epic_voiceplatform_ProcessTextRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_ProcessTextResponse__Output>
  ): grpc.ClientUnaryCall;
  processText(
    argument: _suki_pb_epic_voiceplatform_ProcessTextRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_ProcessTextResponse__Output>
  ): grpc.ClientUnaryCall;
  processText(
    argument: _suki_pb_epic_voiceplatform_ProcessTextRequest,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_ProcessTextResponse__Output>
  ): grpc.ClientUnaryCall;

  TerminateSession(
    argument: _suki_pb_epic_voiceplatform_TerminateSessionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_TerminateSessionResponse__Output>
  ): grpc.ClientUnaryCall;
  TerminateSession(
    argument: _suki_pb_epic_voiceplatform_TerminateSessionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_TerminateSessionResponse__Output>
  ): grpc.ClientUnaryCall;
  TerminateSession(
    argument: _suki_pb_epic_voiceplatform_TerminateSessionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_TerminateSessionResponse__Output>
  ): grpc.ClientUnaryCall;
  TerminateSession(
    argument: _suki_pb_epic_voiceplatform_TerminateSessionRequest,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_TerminateSessionResponse__Output>
  ): grpc.ClientUnaryCall;
  terminateSession(
    argument: _suki_pb_epic_voiceplatform_TerminateSessionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_TerminateSessionResponse__Output>
  ): grpc.ClientUnaryCall;
  terminateSession(
    argument: _suki_pb_epic_voiceplatform_TerminateSessionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_TerminateSessionResponse__Output>
  ): grpc.ClientUnaryCall;
  terminateSession(
    argument: _suki_pb_epic_voiceplatform_TerminateSessionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_TerminateSessionResponse__Output>
  ): grpc.ClientUnaryCall;
  terminateSession(
    argument: _suki_pb_epic_voiceplatform_TerminateSessionRequest,
    callback: grpc.requestCallback<_suki_pb_epic_voiceplatform_TerminateSessionResponse__Output>
  ): grpc.ClientUnaryCall;
}

export interface EpicVoicePlatformServiceHandlers extends grpc.UntypedServiceImplementation {
  InitializeSession: grpc.handleUnaryCall<
    _suki_pb_epic_voiceplatform_InitializeSessionRequest__Output,
    _suki_pb_epic_voiceplatform_InitializeSessionResponse
  >;

  KeepAliveSession: grpc.handleUnaryCall<
    _suki_pb_epic_voiceplatform_KeepAliveSessionRequest__Output,
    _suki_pb_epic_voiceplatform_KeepAliveSessionResponse
  >;

  ProcessText: grpc.handleUnaryCall<
    _suki_pb_epic_voiceplatform_ProcessTextRequest__Output,
    _suki_pb_epic_voiceplatform_ProcessTextResponse
  >;

  TerminateSession: grpc.handleUnaryCall<
    _suki_pb_epic_voiceplatform_TerminateSessionRequest__Output,
    _suki_pb_epic_voiceplatform_TerminateSessionResponse
  >;
}

export interface EpicVoicePlatformServiceDefinition extends grpc.ServiceDefinition {
  InitializeSession: MethodDefinition<
    _suki_pb_epic_voiceplatform_InitializeSessionRequest,
    _suki_pb_epic_voiceplatform_InitializeSessionResponse,
    _suki_pb_epic_voiceplatform_InitializeSessionRequest__Output,
    _suki_pb_epic_voiceplatform_InitializeSessionResponse__Output
  >;
  KeepAliveSession: MethodDefinition<
    _suki_pb_epic_voiceplatform_KeepAliveSessionRequest,
    _suki_pb_epic_voiceplatform_KeepAliveSessionResponse,
    _suki_pb_epic_voiceplatform_KeepAliveSessionRequest__Output,
    _suki_pb_epic_voiceplatform_KeepAliveSessionResponse__Output
  >;
  ProcessText: MethodDefinition<
    _suki_pb_epic_voiceplatform_ProcessTextRequest,
    _suki_pb_epic_voiceplatform_ProcessTextResponse,
    _suki_pb_epic_voiceplatform_ProcessTextRequest__Output,
    _suki_pb_epic_voiceplatform_ProcessTextResponse__Output
  >;
  TerminateSession: MethodDefinition<
    _suki_pb_epic_voiceplatform_TerminateSessionRequest,
    _suki_pb_epic_voiceplatform_TerminateSessionResponse,
    _suki_pb_epic_voiceplatform_TerminateSessionRequest__Output,
    _suki_pb_epic_voiceplatform_TerminateSessionResponse__Output
  >;
}
