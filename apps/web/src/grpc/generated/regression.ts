import type * as grpc from "@grpc/grpc-js";
import type { EnumTypeDefinition, MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  EmrNoteTypesServiceClient as _learningmotors_pb_emr_notetypes_EmrNoteTypesServiceClient,
  EmrNoteTypesServiceDefinition as _learningmotors_pb_emr_notetypes_EmrNoteTypesServiceDefinition
} from "./learningmotors/pb/emr_notetypes/EmrNoteTypesService";
import type {
  MacroServiceClient as _learningmotors_pb_macros_MacroServiceClient,
  MacroServiceDefinition as _learningmotors_pb_macros_MacroServiceDefinition
} from "./learningmotors/pb/macros/MacroService";
import type {
  NoteTypesServiceClient as _learningmotors_pb_notetypes_NoteTypesServiceClient,
  NoteTypesServiceDefinition as _learningmotors_pb_notetypes_NoteTypesServiceDefinition
} from "./learningmotors/pb/notetypes/NoteTypesService";
import type {
  PatientServiceClient as _learningmotors_pb_patients_PatientServiceClient,
  PatientServiceDefinition as _learningmotors_pb_patients_PatientServiceDefinition
} from "./learningmotors/pb/patients/PatientService";
import type {
  DiagnosisServiceClient as _suki_pb_diagnosis_DiagnosisServiceClient,
  DiagnosisServiceDefinition as _suki_pb_diagnosis_DiagnosisServiceDefinition
} from "./suki/pb/diagnosis/DiagnosisService";

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
      AudioEncoding: MessageTypeDefinition;
      AudioFile: MessageTypeDefinition;
      Context: MessageTypeDefinition;
      PageRequest: MessageTypeDefinition;
      PageResponse: MessageTypeDefinition;
      SubsectionInfo: MessageTypeDefinition;
      asr: {
        Transcript: MessageTypeDefinition;
      };
      common: {
        CursorPosition: MessageTypeDefinition;
        Person: MessageTypeDefinition;
      };
      composer: {
        Actor: EnumTypeDefinition;
        Author: MessageTypeDefinition;
        Cursor: MessageTypeDefinition;
        DetailedDisplay: MessageTypeDefinition;
        DiagnosisEntry: MessageTypeDefinition;
        Section: MessageTypeDefinition;
        SectionEntries: MessageTypeDefinition;
        SectionEntry: MessageTypeDefinition;
        Tag: MessageTypeDefinition;
      };
      emr_notetypes: {
        CreateOrUpdateRequest: MessageTypeDefinition;
        CreateOrUpdateResponse: MessageTypeDefinition;
        DeleteRequest: MessageTypeDefinition;
        EmrNoteType: MessageTypeDefinition;
        EmrNoteTypesService: SubtypeConstructor<
          typeof grpc.Client,
          _learningmotors_pb_emr_notetypes_EmrNoteTypesServiceClient
        > & { service: _learningmotors_pb_emr_notetypes_EmrNoteTypesServiceDefinition };
        GetDefaultNoteTypeRequest: MessageTypeDefinition;
        GetDefaultNoteTypeResponse: MessageTypeDefinition;
        GetRequest: MessageTypeDefinition;
        GetResponse: MessageTypeDefinition;
        SetDefaultNoteTypeRequest: MessageTypeDefinition;
        SpecialtyType: EnumTypeDefinition;
      };
      emrtypes: {
        EMRSecondaryType: EnumTypeDefinition;
        EMRType: EnumTypeDefinition;
      };
      idl: {
        Intent: MessageTypeDefinition;
        IntentDefinition: MessageTypeDefinition;
        IntentDefinitionConfig: MessageTypeDefinition;
        Location: MessageTypeDefinition;
        Slot: MessageTypeDefinition;
        SlotDefinition: MessageTypeDefinition;
        SlotName: MessageTypeDefinition;
        SlotValue: MessageTypeDefinition;
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
      notetypes: {
        CopyBySpecialtiesRequest: MessageTypeDefinition;
        CopyBySpecialtiesResponse: MessageTypeDefinition;
        CopyRequest: MessageTypeDefinition;
        CopyResponse: MessageTypeDefinition;
        CreateRequest: MessageTypeDefinition;
        CreateResponse: MessageTypeDefinition;
        DeleteRequest: MessageTypeDefinition;
        GetRequest: MessageTypeDefinition;
        GetResponse: MessageTypeDefinition;
        MigrateSlateRequest: MessageTypeDefinition;
        NoteType: MessageTypeDefinition;
        NoteTypesService: SubtypeConstructor<
          typeof grpc.Client,
          _learningmotors_pb_notetypes_NoteTypesServiceClient
        > & { service: _learningmotors_pb_notetypes_NoteTypesServiceDefinition };
        UpdateRequest: MessageTypeDefinition;
        UpdateResponse: MessageTypeDefinition;
      };
      patients: {
        AddToPatientListRequest: MessageTypeDefinition;
        AddToPatientListResponse: MessageTypeDefinition;
        CreateOrUpdatePatientsRequest: MessageTypeDefinition;
        CreateOrUpdatePatientsResponse: MessageTypeDefinition;
        DeletePatientsRequest: MessageTypeDefinition;
        GetPatientListRequest: MessageTypeDefinition;
        GetPatientListResponse: MessageTypeDefinition;
        GetPatientsRequest: MessageTypeDefinition;
        GetPatientsResponse: MessageTypeDefinition;
        Patient: MessageTypeDefinition;
        PatientList: MessageTypeDefinition;
        PatientService: SubtypeConstructor<typeof grpc.Client, _learningmotors_pb_patients_PatientServiceClient> & {
          service: _learningmotors_pb_patients_PatientServiceDefinition;
        };
        RemoveFromPatientListRequest: MessageTypeDefinition;
        RemoveFromPatientListResponse: MessageTypeDefinition;
        SearchPatientsRequest: MessageTypeDefinition;
        SearchPatientsResponse: MessageTypeDefinition;
      };
      regression: {
        DataPoint: MessageTypeDefinition;
        RegressionSet: MessageTypeDefinition;
        RegressionTestOutput: MessageTypeDefinition;
        Sample: MessageTypeDefinition;
        SampleComparison: MessageTypeDefinition;
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
      emr: {
        Destination: EnumTypeDefinition;
        Section: MessageTypeDefinition;
        SubmissionInformation: MessageTypeDefinition;
        SubmissionStatus: MessageTypeDefinition;
        SubmissionWarning: MessageTypeDefinition;
      };
      voice: {
        speechapis: {
          SpeechAPI: EnumTypeDefinition;
        };
      };
    };
  };
}
