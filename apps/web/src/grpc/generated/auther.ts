import type * as grpc from "@grpc/grpc-js";
import type { EnumTypeDefinition, MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  AutherClient as _suki_pb_auther_AutherClient,
  AutherDefinition as _suki_pb_auther_AutherDefinition
} from "./suki/pb/auther/Auther";

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
  suki: {
    pb: {
      auther: {
        Auther: SubtypeConstructor<typeof grpc.Client, _suki_pb_auther_AutherClient> & {
          service: _suki_pb_auther_AutherDefinition;
        };
        DeactivateTokenRequest: MessageTypeDefinition;
        DeleteOrganizationRequest: MessageTypeDefinition;
        DeleteUserRequest: MessageTypeDefinition;
        GetOrganizationsRequest: MessageTypeDefinition;
        GetOrganizationsResponse: MessageTypeDefinition;
        GetTokensRequest: MessageTypeDefinition;
        GetTokensResponse: MessageTypeDefinition;
        GetUsersRequest: MessageTypeDefinition;
        GetUsersResponse: MessageTypeDefinition;
        Organization: MessageTypeDefinition;
        Role: EnumTypeDefinition;
        Token: MessageTypeDefinition;
        UpsertOrganizationRequest: MessageTypeDefinition;
        UpsertTokenMessage: MessageTypeDefinition;
        UpsertUserRequest: MessageTypeDefinition;
        User: MessageTypeDefinition;
        ValidateTokenRequest: MessageTypeDefinition;
        ValidateTokenResponse: MessageTypeDefinition;
      };
    };
  };
}
