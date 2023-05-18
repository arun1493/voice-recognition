import type * as grpc from "@grpc/grpc-js";
import type { EnumTypeDefinition, MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  MacroServiceClient as _learningmotors_pb_macros_MacroServiceClient,
  MacroServiceDefinition as _learningmotors_pb_macros_MacroServiceDefinition
} from "./learningmotors/pb/macros/MacroService";

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
      PageRequest: MessageTypeDefinition;
      PageResponse: MessageTypeDefinition;
      common: {
        Person: MessageTypeDefinition;
      };
      emrtypes: {
        EMRSecondaryType: EnumTypeDefinition;
        EMRType: EnumTypeDefinition;
      };
      macros: {
        Block: MessageTypeDefinition;
        CopyMacroBySpecialtiesRequest: MessageTypeDefinition;
        CopyMacroBySpecialtiesResponse: MessageTypeDefinition;
        CopyMacroRequest: MessageTypeDefinition;
        CopyMacroResponse: MessageTypeDefinition;
        CreateMacroRequest: MessageTypeDefinition;
        CreateMacroResponse: MessageTypeDefinition;
        DeleteMacrosRequest: MessageTypeDefinition;
        GetMacrosRequest: MessageTypeDefinition;
        GetMacrosResponse: MessageTypeDefinition;
        Macro: MessageTypeDefinition;
        MacroService: SubtypeConstructor<typeof grpc.Client, _learningmotors_pb_macros_MacroServiceClient> & {
          service: _learningmotors_pb_macros_MacroServiceDefinition;
        };
        MigrateSlateRequest: MessageTypeDefinition;
        SlotName: MessageTypeDefinition;
        SyncOrganizationDefaultMacrosRequest: MessageTypeDefinition;
        Tag: MessageTypeDefinition;
        UpdateMacroRequest: MessageTypeDefinition;
        UpdateMacroResponse: MessageTypeDefinition;
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
