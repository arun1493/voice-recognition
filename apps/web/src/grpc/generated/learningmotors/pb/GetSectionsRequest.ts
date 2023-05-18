// Original file: node_modules/protobufs/src/learningmotors/pb/sectionsservice.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../learningmotors/pb/scope/Scope";

export interface GetSectionsRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  ids?: string[];
  prefix?: string;
  include_hidden?: boolean;
}

export interface GetSectionsRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  ids: string[];
  prefix: string;
  include_hidden: boolean;
}
