import type * as grpc from "@grpc/grpc-js";
import type { EnumTypeDefinition, MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  OktaServiceClient as _learningmotors_pb_okta_OktaServiceClient,
  OktaServiceDefinition as _learningmotors_pb_okta_OktaServiceDefinition
} from "./learningmotors/pb/okta/OktaService";
import type {
  S3OktaServiceClient as _learningmotors_pb_okta_S3OktaServiceClient,
  S3OktaServiceDefinition as _learningmotors_pb_okta_S3OktaServiceDefinition
} from "./learningmotors/pb/okta/S3OktaService";

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
      emrtypes: {
        EMRSecondaryType: EnumTypeDefinition;
        EMRType: EnumTypeDefinition;
      };
      okta: {
        ActivateRequest: MessageTypeDefinition;
        CreateAccountAndAssignAppRequest: MessageTypeDefinition;
        CreateAccountAndAssignAppResponse: MessageTypeDefinition;
        CreateAccountWithPasswordRequest: MessageTypeDefinition;
        CreateAccountWithPasswordResponse: MessageTypeDefinition;
        CreateRequest: MessageTypeDefinition;
        CreateResponse: MessageTypeDefinition;
        DeleteRequest: MessageTypeDefinition;
        OktaService: SubtypeConstructor<typeof grpc.Client, _learningmotors_pb_okta_OktaServiceClient> & {
          service: _learningmotors_pb_okta_OktaServiceDefinition;
        };
        ProfileAttribute: MessageTypeDefinition;
        ResetRequest: MessageTypeDefinition;
        S3OktaService: SubtypeConstructor<typeof grpc.Client, _learningmotors_pb_okta_S3OktaServiceClient> & {
          service: _learningmotors_pb_okta_S3OktaServiceDefinition;
        };
        UpdateRequest: MessageTypeDefinition;
        UpdateResponse: MessageTypeDefinition;
      };
      scope: {
        Scope: MessageTypeDefinition;
      };
      user: {
        ActivateRequest: MessageTypeDefinition;
        Consent: MessageTypeDefinition;
        CreateRequest: MessageTypeDefinition;
        CreateResponse: MessageTypeDefinition;
        CreateUserRegistrationRequest: MessageTypeDefinition;
        CreateUserRegistrationResponse: MessageTypeDefinition;
        CreateWithPasswordRequest: MessageTypeDefinition;
        CreateWithPasswordResponse: MessageTypeDefinition;
        DeleteRequest: MessageTypeDefinition;
        DeleteUserRegistrationRequest: MessageTypeDefinition;
        EnhancedReviewOption: EnumTypeDefinition;
        GetRequest: MessageTypeDefinition;
        GetResponse: MessageTypeDefinition;
        GetUserRegistrationsRequest: MessageTypeDefinition;
        GetUserRegistrationsResponse: MessageTypeDefinition;
        RegisterMarketplaceUserRequest: MessageTypeDefinition;
        RegisterMarketplaceUserResponse: MessageTypeDefinition;
        RegisterRequest: MessageTypeDefinition;
        RegisterStage: EnumTypeDefinition;
        Role: MessageTypeDefinition;
        SendDemoEmailRequest: MessageTypeDefinition;
        SendGcpUsageMetricsRequest: MessageTypeDefinition;
        SendGcpUsageMetricsResponse: MessageTypeDefinition;
        SendVerificationEmailRequest: MessageTypeDefinition;
        Specialty: EnumTypeDefinition;
        SubscriptionStatus: EnumTypeDefinition;
        UpdateRegistrationStageRequest: MessageTypeDefinition;
        UpdateRequest: MessageTypeDefinition;
        UpdateResponse: MessageTypeDefinition;
        User: MessageTypeDefinition;
        UserConsent: MessageTypeDefinition;
        UserRegistration: MessageTypeDefinition;
        ValidateVerificationTokenRequest: MessageTypeDefinition;
        ValidateVerificationTokenResponse: MessageTypeDefinition;
      };
    };
  };
  suki: {
    pb: {
      accounts: {
        PasswordRecoveryQuestion: MessageTypeDefinition;
      };
    };
  };
}
