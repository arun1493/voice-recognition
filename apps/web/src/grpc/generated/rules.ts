import type * as grpc from "@grpc/grpc-js";
import type { MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  RulesServiceClient as _learningmotors_pb_rules_RulesServiceClient,
  RulesServiceDefinition as _learningmotors_pb_rules_RulesServiceDefinition
} from "./learningmotors/pb/rules/RulesService";

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
      rules: {
        CreateRequest: MessageTypeDefinition;
        CreateResponse: MessageTypeDefinition;
        DeleteRequest: MessageTypeDefinition;
        GetRequest: MessageTypeDefinition;
        GetResponse: MessageTypeDefinition;
        Rule: MessageTypeDefinition;
        RulesService: SubtypeConstructor<typeof grpc.Client, _learningmotors_pb_rules_RulesServiceClient> & {
          service: _learningmotors_pb_rules_RulesServiceDefinition;
        };
        UpdateRequest: MessageTypeDefinition;
        UpdateResponse: MessageTypeDefinition;
      };
      scope: {
        Scope: MessageTypeDefinition;
      };
    };
  };
}
