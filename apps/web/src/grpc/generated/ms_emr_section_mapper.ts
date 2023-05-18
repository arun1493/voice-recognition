import type * as grpc from "@grpc/grpc-js";
import type { MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  MsEmrSectionMapperClient as _suki_pb_emr_section_mapper_MsEmrSectionMapperClient,
  MsEmrSectionMapperDefinition as _suki_pb_emr_section_mapper_MsEmrSectionMapperDefinition
} from "./suki/pb/emr/section_mapper/MsEmrSectionMapper";

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
    };
  };
  suki: {
    pb: {
      emr: {
        Section: MessageTypeDefinition;
        section_mapper: {
          CreateRequest: MessageTypeDefinition;
          DeleteRequest: MessageTypeDefinition;
          GetRequest: MessageTypeDefinition;
          GetResponse: MessageTypeDefinition;
          Mapping: MessageTypeDefinition;
          MsEmrSectionMapper: SubtypeConstructor<
            typeof grpc.Client,
            _suki_pb_emr_section_mapper_MsEmrSectionMapperClient
          > & { service: _suki_pb_emr_section_mapper_MsEmrSectionMapperDefinition };
          UpdateRequest: MessageTypeDefinition;
        };
      };
    };
  };
}
