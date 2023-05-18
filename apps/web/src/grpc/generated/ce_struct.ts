import type * as grpc from "@grpc/grpc-js";
import type { EnumTypeDefinition, MessageTypeDefinition } from "@grpc/proto-loader";

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Any: MessageTypeDefinition;
      ListValue: MessageTypeDefinition;
      NullValue: EnumTypeDefinition;
      Struct: MessageTypeDefinition;
      Timestamp: MessageTypeDefinition;
      Value: MessageTypeDefinition;
    };
  };
  suki: {
    pb: {
      ssp: {
        ce: {
          AudioEncoding: MessageTypeDefinition;
          AudioInfo: MessageTypeDefinition;
          ClientContext: MessageTypeDefinition;
          DetechIntentSlotValues: MessageTypeDefinition;
          DetectIntentResult: MessageTypeDefinition;
          DetectIntentSlot: MessageTypeDefinition;
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
