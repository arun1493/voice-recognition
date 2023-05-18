// Original file: node_modules/protobufs/src/learningmotors/pb/emrsubmitter/emrsubmitter.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type {
  Composition as _learningmotors_pb_composer_Composition,
  Composition__Output as _learningmotors_pb_composer_Composition__Output
} from "../../../learningmotors/pb/composer/Composition";

export interface SubmitCompositionRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  composition?: _learningmotors_pb_composer_Composition | null;
  emr_access_token?: string;
}

export interface SubmitCompositionRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  composition: _learningmotors_pb_composer_Composition__Output | null;
  emr_access_token: string;
}
