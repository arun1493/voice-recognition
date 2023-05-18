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
      nms: {
        Chunk: MessageTypeDefinition;
        ChunkReference: MessageTypeDefinition;
        Metadata: MessageTypeDefinition;
        property_engine: {
          DisplayProperties: EnumTypeDefinition;
          EhrProperties: EnumTypeDefinition;
          EventProperties: EnumTypeDefinition;
          LabResultProperties: EnumTypeDefinition;
          LabTestProperties: EnumTypeDefinition;
          MedicalCodeProperties: EnumTypeDefinition;
          Property: MessageTypeDefinition;
          RecommendationProperties: EnumTypeDefinition;
          ScribeProperties: EnumTypeDefinition;
          SukiEntityProperties: EnumTypeDefinition;
          TextSourceProperties: EnumTypeDefinition;
          VersionProperties: EnumTypeDefinition;
        };
      };
    };
  };
}
