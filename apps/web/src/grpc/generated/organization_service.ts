import type * as grpc from "@grpc/grpc-js";
import type { MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  OrganizationServiceClient as _learningmotors_pb_organization_OrganizationServiceClient,
  OrganizationServiceDefinition as _learningmotors_pb_organization_OrganizationServiceDefinition
} from "./learningmotors/pb/organization/OrganizationService";

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Empty: MessageTypeDefinition;
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
        OrganizationService: SubtypeConstructor<
          typeof grpc.Client,
          _learningmotors_pb_organization_OrganizationServiceClient
        > & { service: _learningmotors_pb_organization_OrganizationServiceDefinition };
        UpdateEmbeddedOrganizationRequest: MessageTypeDefinition;
        UpdateEmbeddedOrganizationResponse: MessageTypeDefinition;
        UpdateRequest: MessageTypeDefinition;
        UpdateResponse: MessageTypeDefinition;
      };
    };
  };
}
