import type * as grpc from "@grpc/grpc-js";
import type { MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  UserHintsClient as _learningmotors_pb_userhints_UserHintsClient,
  UserHintsDefinition as _learningmotors_pb_userhints_UserHintsDefinition
} from "./learningmotors/pb/userhints/UserHints";

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
      userhints: {
        CreateUserHintRequest: MessageTypeDefinition;
        CreateUserHintResponse: MessageTypeDefinition;
        DeleteUserHintsRequest: MessageTypeDefinition;
        GetUserHintsRequest: MessageTypeDefinition;
        GetUserHintsResponse: MessageTypeDefinition;
        UpdateUserHintsRequest: MessageTypeDefinition;
        UpdateUserHintsResponse: MessageTypeDefinition;
        UserHint: MessageTypeDefinition;
        UserHints: SubtypeConstructor<typeof grpc.Client, _learningmotors_pb_userhints_UserHintsClient> & {
          service: _learningmotors_pb_userhints_UserHintsDefinition;
        };
      };
    };
  };
}
