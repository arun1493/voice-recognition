// Original file: node_modules/protobufs/src/suki/pb/examples/thing.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";

export interface Thing {
  scope?: _learningmotors_pb_scope_Scope | null;
  id?: string;
  name?: string;
}

export interface Thing__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  id: string;
  name: string;
}
