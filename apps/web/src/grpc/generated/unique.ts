import type * as grpc from "@grpc/grpc-js";
import type { MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  UniqueServiceClient as _learningmotors_pb_unique_UniqueServiceClient,
  UniqueServiceDefinition as _learningmotors_pb_unique_UniqueServiceDefinition
} from "./learningmotors/pb/unique/UniqueService";

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
      unique: {
        EnumPreference: MessageTypeDefinition;
        GetRequest: MessageTypeDefinition;
        GetResponse: MessageTypeDefinition;
        Preference: MessageTypeDefinition;
        PreferenceSet: MessageTypeDefinition;
        StringPreference: MessageTypeDefinition;
        UniqueService: SubtypeConstructor<typeof grpc.Client, _learningmotors_pb_unique_UniqueServiceClient> & {
          service: _learningmotors_pb_unique_UniqueServiceDefinition;
        };
        UpdateRequest: MessageTypeDefinition;
      };
    };
  };
}
