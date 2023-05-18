import type * as grpc from "@grpc/grpc-js";
import type { MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  SectionServiceClient as _learningmotors_pb_SectionServiceClient,
  SectionServiceDefinition as _learningmotors_pb_SectionServiceDefinition
} from "./learningmotors/pb/SectionService";

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
      CreateSectionRequest: MessageTypeDefinition;
      CreateSectionResponse: MessageTypeDefinition;
      DeleteSectionRequest: MessageTypeDefinition;
      GetSectionsRequest: MessageTypeDefinition;
      GetSectionsResponse: MessageTypeDefinition;
      Section: MessageTypeDefinition;
      SectionService: SubtypeConstructor<typeof grpc.Client, _learningmotors_pb_SectionServiceClient> & {
        service: _learningmotors_pb_SectionServiceDefinition;
      };
      UpdateSectionRequest: MessageTypeDefinition;
      UpdateSectionResponse: MessageTypeDefinition;
      scope: {
        Scope: MessageTypeDefinition;
      };
    };
  };
}
