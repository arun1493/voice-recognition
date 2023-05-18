// Original file: node_modules/protobufs/src/suki/pb/ssp/v1/resource.proto

import type {
  Duration as _google_protobuf_Duration,
  Duration__Output as _google_protobuf_Duration__Output
} from "../../../../google/protobuf/Duration";

export interface WordMetadata {
  word?: string;
  start_time?: _google_protobuf_Duration | null;
  end_time?: _google_protobuf_Duration | null;
}

export interface WordMetadata__Output {
  word: string;
  start_time: _google_protobuf_Duration__Output | null;
  end_time: _google_protobuf_Duration__Output | null;
}
