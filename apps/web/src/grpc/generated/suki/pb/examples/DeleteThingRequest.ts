// Original file: node_modules/protobufs/src/suki/pb/examples/ms_crud_example.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";

export interface DeleteThingRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  id?: string;
}

export interface DeleteThingRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  id: string;
}
