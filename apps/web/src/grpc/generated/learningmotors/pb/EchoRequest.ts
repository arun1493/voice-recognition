// Original file: node_modules/protobufs/src/learningmotors/pb/example.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../learningmotors/pb/scope/Scope";

export interface EchoRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  message?: string;
}

export interface EchoRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  message: string;
}
