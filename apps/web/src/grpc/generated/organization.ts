import type * as grpc from "@grpc/grpc-js";
import type { MessageTypeDefinition } from "@grpc/proto-loader";

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
      organization: {
        CreateRequest: MessageTypeDefinition;
        CreateResponse: MessageTypeDefinition;
        DeleteRequest: MessageTypeDefinition;
        GetByNameRequest: MessageTypeDefinition;
        GetRequest: MessageTypeDefinition;
        GetResponse: MessageTypeDefinition;
        Organization: MessageTypeDefinition;
        UpdateRequest: MessageTypeDefinition;
        UpdateResponse: MessageTypeDefinition;
      };
    };
  };
}
