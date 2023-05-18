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
  suki: {
    pb: {
      payattention: {
        GenerateNoteRequest: MessageTypeDefinition;
        GenerateNoteResponse: MessageTypeDefinition;
        MetaData: MessageTypeDefinition;
        PatientInfo: MessageTypeDefinition;
        Status: EnumTypeDefinition;
      };
    };
  };
}
