import type * as grpc from "@grpc/grpc-js";
import type { MessageTypeDefinition } from "@grpc/proto-loader";

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Any: MessageTypeDefinition;
      Timestamp: MessageTypeDefinition;
    };
  };
  suki: {
    pb: {
      ssp: {
        ce: {
          AudioEncoding: MessageTypeDefinition;
          AudioInfo: MessageTypeDefinition;
          ClientContext: MessageTypeDefinition;
          DetectIntentResult: MessageTypeDefinition;
          DetectIntentSlot: MessageTypeDefinition;
          DetectIntentSlotValues: MessageTypeDefinition;
          Intent: MessageTypeDefinition;
          PingRequest: MessageTypeDefinition;
          PingRequestAuth: MessageTypeDefinition;
          PingResponse: MessageTypeDefinition;
          PingResponseAuth: MessageTypeDefinition;
          Status: MessageTypeDefinition;
        };
      };
    };
  };
}
