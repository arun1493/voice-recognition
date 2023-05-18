// Original file: node_modules/protobufs/src/suki/pb/cache/cache.proto

import type {
  JsonPath as _suki_pb_cache_JsonPath,
  JsonPath__Output as _suki_pb_cache_JsonPath__Output
} from "../../../suki/pb/cache/JsonPath";

export interface JsonGetRequest {
  key?: string;
  path?: _suki_pb_cache_JsonPath | null;
  read_through_on_miss?: boolean;
}

export interface JsonGetRequest__Output {
  key: string;
  path: _suki_pb_cache_JsonPath__Output | null;
  read_through_on_miss: boolean;
}
