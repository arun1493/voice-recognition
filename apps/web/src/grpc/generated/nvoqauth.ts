import type * as grpc from "@grpc/grpc-js";
import type { MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  MsNvoqAuthenticatorClient as _suki_pb_nvoqauth_MsNvoqAuthenticatorClient,
  MsNvoqAuthenticatorDefinition as _suki_pb_nvoqauth_MsNvoqAuthenticatorDefinition
} from "./suki/pb/nvoqauth/MsNvoqAuthenticator";

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
      common: {
        Person: MessageTypeDefinition;
      };
      scope: {
        Scope: MessageTypeDefinition;
      };
    };
  };
  suki: {
    pb: {
      nvoqauth: {
        CreateAccountPayload: MessageTypeDefinition;
        CreateAccountRequest: MessageTypeDefinition;
        CreateOrUpdateUserRequest: MessageTypeDefinition;
        FetchAllNVoqOrganizationsPayload: MessageTypeDefinition;
        FetchLinkedOrganizationsPayload: MessageTypeDefinition;
        FetchUserPayload: MessageTypeDefinition;
        FetchUserRequest: MessageTypeDefinition;
        ForceCreateAndLoginRequest: MessageTypeDefinition;
        LinkSukiOrganizationToNVoqPayload: MessageTypeDefinition;
        LinkSukiOrganizationToNVoqRequest: MessageTypeDefinition;
        LinkedNVoqOrganizations: MessageTypeDefinition;
        MsNvoqAuthenticator: SubtypeConstructor<typeof grpc.Client, _suki_pb_nvoqauth_MsNvoqAuthenticatorClient> & {
          service: _suki_pb_nvoqauth_MsNvoqAuthenticatorDefinition;
        };
        NVoqOrganizations: MessageTypeDefinition;
        NvoqInformation: MessageTypeDefinition;
        SafeToOnboardPayload: MessageTypeDefinition;
        SafeToOnboardRequest: MessageTypeDefinition;
        TopicsResponse: MessageTypeDefinition;
      };
    };
  };
}
