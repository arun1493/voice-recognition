import type * as grpc from "@grpc/grpc-js";
import type { MessageTypeDefinition } from "@grpc/proto-loader";

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  learningmotors: {
    pb: {
      user: {
        EpicPractitioner: MessageTypeDefinition;
        EpicUserRequest: MessageTypeDefinition;
        FHIRUser: MessageTypeDefinition;
        FHIRUserPayload: MessageTypeDefinition;
        FHIRUserRequest: MessageTypeDefinition;
        Identifier: MessageTypeDefinition;
        Name: MessageTypeDefinition;
        Type: MessageTypeDefinition;
      };
    };
  };
}
