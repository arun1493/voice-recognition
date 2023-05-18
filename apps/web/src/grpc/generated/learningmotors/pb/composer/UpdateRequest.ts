// Original file: node_modules/protobufs/src/learningmotors/pb/composer/compositions.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type {
  Metadata as _learningmotors_pb_composer_Metadata,
  Metadata__Output as _learningmotors_pb_composer_Metadata__Output
} from "../../../learningmotors/pb/composer/Metadata";
import type {
  Section as _learningmotors_pb_composer_Section,
  Section__Output as _learningmotors_pb_composer_Section__Output
} from "../../../learningmotors/pb/composer/Section";

// Original file: node_modules/protobufs/src/learningmotors/pb/composer/compositions.proto

export enum _learningmotors_pb_composer_UpdateRequest_UpdateReason {
  DEFAULT = 0,
  TRANSCRIPTION = 1,
  MANUAL_EDIT = 2,
  MACRO = 3,
  MACHINE_EDIT = 4,
  COPY_FORWARD = 5
}

export interface UpdateRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  id?: string;
  metadata?: _learningmotors_pb_composer_Metadata | null;
  sections?: _learningmotors_pb_composer_Section[];
  reason?:
    | _learningmotors_pb_composer_UpdateRequest_UpdateReason
    | keyof typeof _learningmotors_pb_composer_UpdateRequest_UpdateReason;
  is_final_asr_transcript?: boolean;
}

export interface UpdateRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  id: string;
  metadata: _learningmotors_pb_composer_Metadata__Output | null;
  sections: _learningmotors_pb_composer_Section__Output[];
  reason: keyof typeof _learningmotors_pb_composer_UpdateRequest_UpdateReason;
  is_final_asr_transcript: boolean;
}
