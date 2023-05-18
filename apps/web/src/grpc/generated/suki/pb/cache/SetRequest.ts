// Original file: node_modules/protobufs/src/suki/pb/cache/cache.proto

import type {
  Duration as _google_protobuf_Duration,
  Duration__Output as _google_protobuf_Duration__Output
} from "../../../google/protobuf/Duration";

export interface SetRequest {
  key?: string;
  value?: string;
  expiry?: _google_protobuf_Duration | null;
}

export interface SetRequest__Output {
  key: string;
  value: string;
  expiry: _google_protobuf_Duration__Output | null;
}
