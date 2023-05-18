import type * as grpc from "@grpc/grpc-js";
import type { EnumTypeDefinition, MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  CloseEncountersServiceClient as _learningmotors_pb_closeencounters_CloseEncountersServiceClient,
  CloseEncountersServiceDefinition as _learningmotors_pb_closeencounters_CloseEncountersServiceDefinition
} from "./learningmotors/pb/closeencounters/CloseEncountersService";

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
      closeencounters: {
        CloseEncountersService: SubtypeConstructor<
          typeof grpc.Client,
          _learningmotors_pb_closeencounters_CloseEncountersServiceClient
        > & { service: _learningmotors_pb_closeencounters_CloseEncountersServiceDefinition };
        Encounter: MessageTypeDefinition;
        GetRequest: MessageTypeDefinition;
        GetResponse: MessageTypeDefinition;
        TriggerRefreshRequest: MessageTypeDefinition;
      };
      emrtypes: {
        EMRSecondaryType: EnumTypeDefinition;
        EMRType: EnumTypeDefinition;
      };
      scope: {
        Scope: MessageTypeDefinition;
      };
    };
  };
}
