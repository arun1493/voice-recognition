// Original file: node_modules/protobufs/src/learningmotors/pb/replay/replay.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type {
  GoogleOptions as _learningmotors_pb_replay_GoogleOptions,
  GoogleOptions__Output as _learningmotors_pb_replay_GoogleOptions__Output
} from "../../../learningmotors/pb/replay/GoogleOptions";
import type {
  ProcessingOptions as _learningmotors_pb_replay_ProcessingOptions,
  ProcessingOptions__Output as _learningmotors_pb_replay_ProcessingOptions__Output
} from "../../../learningmotors/pb/replay/ProcessingOptions";

export interface ReplayAudioRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  composition_id?: string;
  section_id?: string;
  hints?: string[];
  google_options?: _learningmotors_pb_replay_GoogleOptions | null;
  note_id?: string;
  processing_options?: _learningmotors_pb_replay_ProcessingOptions | null;
  note_identifier?: "composition_id" | "note_id";
}

export interface ReplayAudioRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  composition_id?: string;
  section_id: string;
  hints: string[];
  google_options: _learningmotors_pb_replay_GoogleOptions__Output | null;
  note_id?: string;
  processing_options: _learningmotors_pb_replay_ProcessingOptions__Output | null;
  note_identifier: "composition_id" | "note_id";
}
