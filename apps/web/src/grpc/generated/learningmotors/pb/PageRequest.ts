// Original file: node_modules/protobufs/src/learningmotors/pb/pager.proto

import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../google/protobuf/Timestamp";

export interface _learningmotors_pb_PageRequest_PageCursors {
  before?: string;
  after?: string;
  limit?: number;
  offset?: number;
}

export interface _learningmotors_pb_PageRequest_PageCursors__Output {
  before: string;
  after: string;
  limit: number;
  offset: number;
}

export interface _learningmotors_pb_PageRequest_PageTime {
  since?: _google_protobuf_Timestamp | null;
  until?: _google_protobuf_Timestamp | null;
  limit?: number;
}

export interface _learningmotors_pb_PageRequest_PageTime__Output {
  since: _google_protobuf_Timestamp__Output | null;
  until: _google_protobuf_Timestamp__Output | null;
  limit: number;
}

// Original file: node_modules/protobufs/src/learningmotors/pb/pager.proto

export enum _learningmotors_pb_PageRequest_Type {
  DEFAULT = 0,
  TIME = 1,
  CURSOR = 2
}

export interface PageRequest {
  type?: _learningmotors_pb_PageRequest_Type | keyof typeof _learningmotors_pb_PageRequest_Type;
  time?: _learningmotors_pb_PageRequest_PageTime | null;
  cursors?: _learningmotors_pb_PageRequest_PageCursors | null;
  request?: "time" | "cursors";
}

export interface PageRequest__Output {
  type: keyof typeof _learningmotors_pb_PageRequest_Type;
  time?: _learningmotors_pb_PageRequest_PageTime__Output | null;
  cursors?: _learningmotors_pb_PageRequest_PageCursors__Output | null;
  request: "time" | "cursors";
}
