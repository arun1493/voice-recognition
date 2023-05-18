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
        CreateEmbeddedOrganizationRequest: MessageTypeDefinition;
        CreateEmbeddedOrganizationResponse: MessageTypeDefinition;
        CreateRequest: MessageTypeDefinition;
        CreateResponse: MessageTypeDefinition;
        DeleteEmbeddedOrganizationRequest: MessageTypeDefinition;
        DeleteRequest: MessageTypeDefinition;
        EmbeddedOrganization: MessageTypeDefinition;
        GetByNameRequest: MessageTypeDefinition;
        GetEmbeddedOrganizationRequest: MessageTypeDefinition;
        GetEmbeddedOrganizationResponse: MessageTypeDefinition;
        GetRequest: MessageTypeDefinition;
        GetResponse: MessageTypeDefinition;
        Organization: MessageTypeDefinition;
        UpdateEmbeddedOrganizationRequest: MessageTypeDefinition;
        UpdateEmbeddedOrganizationResponse: MessageTypeDefinition;
        UpdateRequest: MessageTypeDefinition;
        UpdateResponse: MessageTypeDefinition;
      };
    };
  };
}
