// Original file: node_modules/protobufs/src/suki/pb/examples/ms_crud_example.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type {
  Thing as _suki_pb_examples_Thing,
  Thing__Output as _suki_pb_examples_Thing__Output
} from "../../../suki/pb/examples/Thing";

export interface UpdateThingRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  thing?: _suki_pb_examples_Thing | null;
}

export interface UpdateThingRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  thing: _suki_pb_examples_Thing__Output | null;
}
