// Original file: node_modules/protobufs/src/learningmotors/pb/replay/replay.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  ReplayAudioRequest as _learningmotors_pb_replay_ReplayAudioRequest,
  ReplayAudioRequest__Output as _learningmotors_pb_replay_ReplayAudioRequest__Output
} from "../../../learningmotors/pb/replay/ReplayAudioRequest";
import type {
  ReplayAudioResponse as _learningmotors_pb_replay_ReplayAudioResponse,
  ReplayAudioResponse__Output as _learningmotors_pb_replay_ReplayAudioResponse__Output
} from "../../../learningmotors/pb/replay/ReplayAudioResponse";

export interface ReplayServiceClient extends grpc.Client {
  ReplayAudio(
    argument: _learningmotors_pb_replay_ReplayAudioRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_replay_ReplayAudioResponse__Output>
  ): grpc.ClientUnaryCall;
  ReplayAudio(
    argument: _learningmotors_pb_replay_ReplayAudioRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_replay_ReplayAudioResponse__Output>
  ): grpc.ClientUnaryCall;
  ReplayAudio(
    argument: _learningmotors_pb_replay_ReplayAudioRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_replay_ReplayAudioResponse__Output>
  ): grpc.ClientUnaryCall;
  ReplayAudio(
    argument: _learningmotors_pb_replay_ReplayAudioRequest,
    callback: grpc.requestCallback<_learningmotors_pb_replay_ReplayAudioResponse__Output>
  ): grpc.ClientUnaryCall;
  replayAudio(
    argument: _learningmotors_pb_replay_ReplayAudioRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_replay_ReplayAudioResponse__Output>
  ): grpc.ClientUnaryCall;
  replayAudio(
    argument: _learningmotors_pb_replay_ReplayAudioRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_replay_ReplayAudioResponse__Output>
  ): grpc.ClientUnaryCall;
  replayAudio(
    argument: _learningmotors_pb_replay_ReplayAudioRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_replay_ReplayAudioResponse__Output>
  ): grpc.ClientUnaryCall;
  replayAudio(
    argument: _learningmotors_pb_replay_ReplayAudioRequest,
    callback: grpc.requestCallback<_learningmotors_pb_replay_ReplayAudioResponse__Output>
  ): grpc.ClientUnaryCall;
}

export interface ReplayServiceHandlers extends grpc.UntypedServiceImplementation {
  ReplayAudio: grpc.handleUnaryCall<
    _learningmotors_pb_replay_ReplayAudioRequest__Output,
    _learningmotors_pb_replay_ReplayAudioResponse
  >;
}

export interface ReplayServiceDefinition extends grpc.ServiceDefinition {
  ReplayAudio: MethodDefinition<
    _learningmotors_pb_replay_ReplayAudioRequest,
    _learningmotors_pb_replay_ReplayAudioResponse,
    _learningmotors_pb_replay_ReplayAudioRequest__Output,
    _learningmotors_pb_replay_ReplayAudioResponse__Output
  >;
}
