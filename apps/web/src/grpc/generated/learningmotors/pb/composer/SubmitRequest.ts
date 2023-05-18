// Original file: node_modules/protobufs/src/learningmotors/pb/composer/compositions.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type { Actor as _learningmotors_pb_composer_Actor } from "../../../learningmotors/pb/composer/Actor";

export interface SubmitRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  id?: string;
  actor?: _learningmotors_pb_composer_Actor | keyof typeof _learningmotors_pb_composer_Actor;
  try_all_destinations?: boolean;
  bypass_qa?: boolean;
  is_signed_off?: boolean;
}

export interface SubmitRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  id: string;
  actor: keyof typeof _learningmotors_pb_composer_Actor;
  try_all_destinations: boolean;
  bypass_qa: boolean;
  is_signed_off: boolean;
}
