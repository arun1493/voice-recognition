import type * as grpc from "@grpc/grpc-js";
import type { MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  CacheServiceClient as _suki_pb_cache_CacheServiceClient,
  CacheServiceDefinition as _suki_pb_cache_CacheServiceDefinition
} from "./suki/pb/cache/CacheService";

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Duration: MessageTypeDefinition;
      Empty: MessageTypeDefinition;
      Timestamp: MessageTypeDefinition;
    };
  };
  suki: {
    pb: {
      cache: {
        CacheService: SubtypeConstructor<typeof grpc.Client, _suki_pb_cache_CacheServiceClient> & {
          service: _suki_pb_cache_CacheServiceDefinition;
        };
        DeleteRequest: MessageTypeDefinition;
        GetRequest: MessageTypeDefinition;
        GetResponse: MessageTypeDefinition;
        JsonGetRequest: MessageTypeDefinition;
        JsonGetResponse: MessageTypeDefinition;
        JsonPath: MessageTypeDefinition;
        JsonSetRequest: MessageTypeDefinition;
        SetRequest: MessageTypeDefinition;
      };
      ssp: {
        v1: {
          dag: {
            action: {
              CacheAction: MessageTypeDefinition;
            };
          };
        };
      };
    };
  };
}
