import type * as grpc from "@grpc/grpc-js";
import type { MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  PayAttentionClient as _suki_pb_payattention_PayAttentionClient,
  PayAttentionDefinition as _suki_pb_payattention_PayAttentionDefinition
} from "./suki/pb/payattention/PayAttention";

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Empty: MessageTypeDefinition;
    };
  };
  suki: {
    pb: {
      payattention: {
        AmbientNoteRequest: MessageTypeDefinition;
        FileStorageEvent: MessageTypeDefinition;
        PayAttention: SubtypeConstructor<typeof grpc.Client, _suki_pb_payattention_PayAttentionClient> & {
          service: _suki_pb_payattention_PayAttentionDefinition;
        };
      };
    };
  };
}
