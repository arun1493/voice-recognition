// Original file: node_modules/protobufs/src/suki/pb/cache/cache.proto

import type {
  JsonPath as _suki_pb_cache_JsonPath,
  JsonPath__Output as _suki_pb_cache_JsonPath__Output
} from "../../../suki/pb/cache/JsonPath";
import type {
  Duration as _google_protobuf_Duration,
  Duration__Output as _google_protobuf_Duration__Output
} from "../../../google/protobuf/Duration";

export interface JsonSetRequest {
  key?: string;
  path?: _suki_pb_cache_JsonPath | null;
  value?: string;
  expiry?: _google_protobuf_Duration | null;
}

export interface JsonSetRequest__Output {
  key: string;
  path: _suki_pb_cache_JsonPath__Output | null;
  value: string;
  expiry: _google_protobuf_Duration__Output | null;
}
