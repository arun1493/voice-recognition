import type * as grpc from "@grpc/grpc-js";
import type { MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  DeIdServiceClient as _suki_pb_payattention_DeIdServiceClient,
  DeIdServiceDefinition as _suki_pb_payattention_DeIdServiceDefinition
} from "./suki/pb/payattention/DeIdService";

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  suki: {
    pb: {
      payattention: {
        CustomReplacement: MessageTypeDefinition;
        DeIdRequest: MessageTypeDefinition;
        DeIdResponse: MessageTypeDefinition;
        DeIdService: SubtypeConstructor<typeof grpc.Client, _suki_pb_payattention_DeIdServiceClient> & {
          service: _suki_pb_payattention_DeIdServiceDefinition;
        };
        TransformationConfig: MessageTypeDefinition;
      };
    };
  };
}
