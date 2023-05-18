import type * as grpc from "@grpc/grpc-js";
import type { EnumTypeDefinition, MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  DiagnosisServiceClient as _suki_pb_diagnosis_DiagnosisServiceClient,
  DiagnosisServiceDefinition as _suki_pb_diagnosis_DiagnosisServiceDefinition
} from "./suki/pb/diagnosis/DiagnosisService";

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  Content: MessageTypeDefinition;
  SectionContent: MessageTypeDefinition;
  TextSource: EnumTypeDefinition;
  google: {
    protobuf: {
      Timestamp: MessageTypeDefinition;
    };
  };
  learningmotors: {
    pb: {
      common: {
        Person: MessageTypeDefinition;
      };
      composer: {
        Actor: EnumTypeDefinition;
        Author: MessageTypeDefinition;
        Cursor: MessageTypeDefinition;
        DetailedDisplay: MessageTypeDefinition;
        DiagnosisEntry: MessageTypeDefinition;
        Footer: MessageTypeDefinition;
        Section: MessageTypeDefinition;
        SectionContentFormat: EnumTypeDefinition;
        SectionEntries: MessageTypeDefinition;
        SectionEntry: MessageTypeDefinition;
        SectionS2: MessageTypeDefinition;
        SectionS2Entries: MessageTypeDefinition;
        SectionS2Entry: MessageTypeDefinition;
        Tag: MessageTypeDefinition;
      };
      emrtypes: {
        EMRSecondaryType: EnumTypeDefinition;
        EMRType: EnumTypeDefinition;
      };
      scope: {
        Scope: MessageTypeDefinition;
      };
      textmarkuptag: {
        TextMarkupTag: MessageTypeDefinition;
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
      diagnosis: {
        Diagnosis: MessageTypeDefinition;
        DiagnosisService: SubtypeConstructor<typeof grpc.Client, _suki_pb_diagnosis_DiagnosisServiceClient> & {
          service: _suki_pb_diagnosis_DiagnosisServiceDefinition;
        };
        DiagnosisWithChildren: MessageTypeDefinition;
        ExistingDiagnosis: MessageTypeDefinition;
        GetHCCSuggestionsRequest: MessageTypeDefinition;
        GetHCCSuggestionsResponse: MessageTypeDefinition;
        HCCSuggestion: MessageTypeDefinition;
        ICD10EDGMapping: MessageTypeDefinition;
        LookupEDGRequest: MessageTypeDefinition;
        LookupEDGResponse: MessageTypeDefinition;
        SearchMLRequest: MessageTypeDefinition;
        SearchMLResponse: MessageTypeDefinition;
        SuggestionType: EnumTypeDefinition;
      };
    };
  };
}
