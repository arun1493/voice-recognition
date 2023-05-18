import type * as grpc from "@grpc/grpc-js";
import type { MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  SectionMapperClient as _learningmotors_pb_sectionmappper_SectionMapperClient,
  SectionMapperDefinition as _learningmotors_pb_sectionmappper_SectionMapperDefinition
} from "./learningmotors/pb/sectionmappper/SectionMapper";

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Empty: MessageTypeDefinition;
    };
  };
  learningmotors: {
    pb: {
      scope: {
        Scope: MessageTypeDefinition;
      };
      sectionmappper: {
        GetRequest: MessageTypeDefinition;
        GetResponse: MessageTypeDefinition;
        SectionMapper: SubtypeConstructor<typeof grpc.Client, _learningmotors_pb_sectionmappper_SectionMapperClient> & {
          service: _learningmotors_pb_sectionmappper_SectionMapperDefinition;
        };
        UpsertRequest: MessageTypeDefinition;
      };
    };
  };
}
