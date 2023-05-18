import type * as grpc from "@grpc/grpc-js";
import type { EnumTypeDefinition, MessageTypeDefinition } from "@grpc/proto-loader";

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Timestamp: MessageTypeDefinition;
    };
  };
  learningmotors: {
    pb: {
      Context: MessageTypeDefinition;
      SubsectionInfo: MessageTypeDefinition;
      common: {
        CursorPosition: MessageTypeDefinition;
      };
    };
  };
  suki: {
    pb: {
      voice: {
        speechapis: {
          SpeechAPI: EnumTypeDefinition;
        };
      };
    };
  };
}
