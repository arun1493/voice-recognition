// Original file: node_modules/protobufs/src/learningmotors/pb/rules/rules.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type {
  Rule as _learningmotors_pb_rules_Rule,
  Rule__Output as _learningmotors_pb_rules_Rule__Output
} from "../../../learningmotors/pb/rules/Rule";

export interface UpdateRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  rule?: _learningmotors_pb_rules_Rule | null;
}

export interface UpdateRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  rule: _learningmotors_pb_rules_Rule__Output | null;
}
