import type * as grpc from "@grpc/grpc-js";
import type { EnumTypeDefinition, MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  SukiDictationClient as _suki_pb_ssp_dictate_SukiDictationClient,
  SukiDictationDefinition as _suki_pb_ssp_dictate_SukiDictationDefinition
} from "./suki/pb/ssp/dictate/SukiDictation";

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Timestamp: MessageTypeDefinition;
    };
  };
  suki: {
    pb: {
      ssp: {
        common: {
          AudioEncoding: MessageTypeDefinition;
          AudioInfo: MessageTypeDefinition;
          ClientConfig: MessageTypeDefinition;
          ClientContext: MessageTypeDefinition;
          ResponseType: EnumTypeDefinition;
        };
        dictate: {
          DictationRequest: MessageTypeDefinition;
          DictationResponse: MessageTypeDefinition;
          SukiDictation: SubtypeConstructor<typeof grpc.Client, _suki_pb_ssp_dictate_SukiDictationClient> & {
            service: _suki_pb_ssp_dictate_SukiDictationDefinition;
          };
          Transcript: MessageTypeDefinition;
        };
      };
    };
  };
}
