// Original file: node_modules/protobufs/src/learningmotors/pb/pager.proto

import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../google/protobuf/Timestamp";

export interface _learningmotors_pb_PageResponse_PageCursors {
  before?: number;
  after?: number;
}

export interface _learningmotors_pb_PageResponse_PageCursors__Output {
  before: number;
  after: number;
}

export interface _learningmotors_pb_PageResponse_PageTime {
  until?: _google_protobuf_Timestamp | null;
}

export interface _learningmotors_pb_PageResponse_PageTime__Output {
  until: _google_protobuf_Timestamp__Output | null;
}

export interface PageResponse {
  time?: _learningmotors_pb_PageResponse_PageTime | null;
  cursors?: _learningmotors_pb_PageResponse_PageCursors | null;
  response?: "time" | "cursors";
}

export interface PageResponse__Output {
  time?: _learningmotors_pb_PageResponse_PageTime__Output | null;
  cursors?: _learningmotors_pb_PageResponse_PageCursors__Output | null;
  response: "time" | "cursors";
}
