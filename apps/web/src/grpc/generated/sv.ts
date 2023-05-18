import type * as grpc from "@grpc/grpc-js";
import type { EnumTypeDefinition, MessageTypeDefinition } from "@grpc/proto-loader";

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Any: MessageTypeDefinition;
    };
  };
  suki: {
    pb: {
      vocera: {
        DetechIntentSlotValues: MessageTypeDefinition;
        DetectIntentResult: MessageTypeDefinition;
        DetectIntentSlot: MessageTypeDefinition;
        Intent: MessageTypeDefinition;
        IntentResponse: MessageTypeDefinition;
        SpeechEventType: EnumTypeDefinition;
        Status: MessageTypeDefinition;
      };
    };
  };
}
