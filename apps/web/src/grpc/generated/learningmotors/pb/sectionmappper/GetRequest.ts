// Original file: node_modules/protobufs/src/learningmotors/pb/sectionmapper/sectionmapper.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";

// Original file: node_modules/protobufs/src/learningmotors/pb/sectionmapper/sectionmapper.proto

export enum _learningmotors_pb_sectionmappper_GetRequest_Direction {
  SUKI2EMR = 0,
  EMR2SUKI = 1
}

export interface GetRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  map_dir?:
    | _learningmotors_pb_sectionmappper_GetRequest_Direction
    | keyof typeof _learningmotors_pb_sectionmappper_GetRequest_Direction;
}

export interface GetRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  map_dir: keyof typeof _learningmotors_pb_sectionmappper_GetRequest_Direction;
}
