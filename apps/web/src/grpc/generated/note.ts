import type * as grpc from "@grpc/grpc-js";
import type { EnumTypeDefinition, MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  AppointmentServiceClient as _learningmotors_pb_AppointmentServiceClient,
  AppointmentServiceDefinition as _learningmotors_pb_AppointmentServiceDefinition
} from "./learningmotors/pb/AppointmentService";
import type {
  ComposerServiceClient as _learningmotors_pb_composer_ComposerServiceClient,
  ComposerServiceDefinition as _learningmotors_pb_composer_ComposerServiceDefinition
} from "./learningmotors/pb/composer/ComposerService";
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
  PatientNotesServiceClient as _learningmotors_pb_patientnotes_PatientNotesServiceClient,
  PatientNotesServiceDefinition as _learningmotors_pb_patientnotes_PatientNotesServiceDefinition
} from "./learningmotors/pb/patientnotes/PatientNotesService";
import type {
  PatientServiceClient as _learningmotors_pb_patients_PatientServiceClient,
  PatientServiceDefinition as _learningmotors_pb_patients_PatientServiceDefinition
} from "./learningmotors/pb/patients/PatientService";
import type {
  DiagnosisServiceClient as _suki_pb_diagnosis_DiagnosisServiceClient,
  DiagnosisServiceDefinition as _suki_pb_diagnosis_DiagnosisServiceDefinition
} from "./suki/pb/diagnosis/DiagnosisService";
import type {
  S2_StreamerClient as _suki_pb_s2_S2_StreamerClient,
  S2_StreamerDefinition as _suki_pb_s2_S2_StreamerDefinition
} from "./suki/pb/s2/S2_Streamer";
import type {
  SMSClient as _suki_pb_sms_SMSClient,
  SMSDefinition as _suki_pb_sms_SMSDefinition
} from "./suki/pb/sms/SMS";

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  Content: MessageTypeDefinition;
  SectionContent: MessageTypeDefinition;
  TextSource: EnumTypeDefinition;
  google: {
    protobuf: {
      Any: MessageTypeDefinition;
      Duration: MessageTypeDefinition;
      Empty: MessageTypeDefinition;
      Timestamp: MessageTypeDefinition;
    };
  };
  learningmotors: {
    pb: {
      Appointment: MessageTypeDefinition;
      AppointmentService: SubtypeConstructor<typeof grpc.Client, _learningmotors_pb_AppointmentServiceClient> & {
        service: _learningmotors_pb_AppointmentServiceDefinition;
      };
      BackfillAppointmentDataRequest: MessageTypeDefinition;
      Context: MessageTypeDefinition;
      CreateOrUpdateAppointmentRequest: MessageTypeDefinition;
      CreateOrUpdateAppointmentResponse: MessageTypeDefinition;
      DeleteAppointmentsRequest: MessageTypeDefinition;
      GetAppointmentFromEMRRequest: MessageTypeDefinition;
      GetAppointmentFromEMRResponse: MessageTypeDefinition;
      GetAppointmentsRequest: MessageTypeDefinition;
      GetAppointmentsResponse: MessageTypeDefinition;
      GetMostRecentAppointmentRequest: MessageTypeDefinition;
      GetMostRecentAppointmentResponse: MessageTypeDefinition;
      MoveCompositionToNewAppointmentRequest: MessageTypeDefinition;
      MoveCompositionToNewAppointmentResponse: MessageTypeDefinition;
      PageRequest: MessageTypeDefinition;
      PageResponse: MessageTypeDefinition;
      SubsectionInfo: MessageTypeDefinition;
      UpdateAppointmentCompositionRequest: MessageTypeDefinition;
      UpdateAppointmentCompositionResponse: MessageTypeDefinition;
      address: {
        Address: MessageTypeDefinition;
      };
      asr: {
        Transcript: MessageTypeDefinition;
      };
      common: {
        CursorPosition: MessageTypeDefinition;
        Person: MessageTypeDefinition;
      };
      composer: {
        Actor: EnumTypeDefinition;
        AddSectionRequest: MessageTypeDefinition;
        AddSectionResponse: MessageTypeDefinition;
        Author: MessageTypeDefinition;
        ComposerService: SubtypeConstructor<typeof grpc.Client, _learningmotors_pb_composer_ComposerServiceClient> & {
          service: _learningmotors_pb_composer_ComposerServiceDefinition;
        };
        Composition: MessageTypeDefinition;
        CompositionUpdateEvent: MessageTypeDefinition;
        CreateRequest: MessageTypeDefinition;
        CreateResponse: MessageTypeDefinition;
        Cursor: MessageTypeDefinition;
        DeleteRequest: MessageTypeDefinition;
        DeleteSectionRequest: MessageTypeDefinition;
        DetailedDisplay: MessageTypeDefinition;
        DiagnosisEntry: MessageTypeDefinition;
        EMRStatus: MessageTypeDefinition;
        Footer: MessageTypeDefinition;
        GetCompositionOrNoteRequest: MessageTypeDefinition;
        GetCompositionOrNoteResponse: MessageTypeDefinition;
        GetNeedsReviewNoScopeRequest: MessageTypeDefinition;
        GetNeedsReviewRequest: MessageTypeDefinition;
        GetNeedsReviewResponse: MessageTypeDefinition;
        GetRequest: MessageTypeDefinition;
        GetResponse: MessageTypeDefinition;
        GetSectionsRequest: MessageTypeDefinition;
        GetSectionsResponse: MessageTypeDefinition;
        GetVersionedRequest: MessageTypeDefinition;
        GetVersionedResponse: MessageTypeDefinition;
        Metadata: MessageTypeDefinition;
        MetadataEntry: MessageTypeDefinition;
        MigrateCompositionsInput: MessageTypeDefinition;
        PartialDictation: MessageTypeDefinition;
        Section: MessageTypeDefinition;
        SectionContentFormat: EnumTypeDefinition;
        SectionEntries: MessageTypeDefinition;
        SectionEntry: MessageTypeDefinition;
        SectionS2: MessageTypeDefinition;
        SectionS2Entries: MessageTypeDefinition;
        SectionS2Entry: MessageTypeDefinition;
        SectionUpdateEvent: MessageTypeDefinition;
        Source: MessageTypeDefinition;
        SubmitRequest: MessageTypeDefinition;
        SubmitResponse: MessageTypeDefinition;
        Tag: MessageTypeDefinition;
        UpdateRequest: MessageTypeDefinition;
        UpdateResponse: MessageTypeDefinition;
        VersionedComposition: MessageTypeDefinition;
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
      patientnotes: {
        ExportNotesAsJsonRequest: MessageTypeDefinition;
        ExportRawNoteAudioRequest: MessageTypeDefinition;
        ExportRawTranscriptsRequest: MessageTypeDefinition;
        ExportStuffForSudheerRequest: MessageTypeDefinition;
        ExportType: EnumTypeDefinition;
        GetForVerbatimRequest: MessageTypeDefinition;
        GetRequest: MessageTypeDefinition;
        GetResponse: MessageTypeDefinition;
        GetVersionedRequest: MessageTypeDefinition;
        GetVersionedResponse: MessageTypeDefinition;
        MarkNoteTranscribedRequest: MessageTypeDefinition;
        Note: MessageTypeDefinition;
        PatientNotesService: SubtypeConstructor<
          typeof grpc.Client,
          _learningmotors_pb_patientnotes_PatientNotesServiceClient
        > & { service: _learningmotors_pb_patientnotes_PatientNotesServiceDefinition };
        SectionEntries: MessageTypeDefinition;
        UpsertRequest: MessageTypeDefinition;
        UpsertResponse: MessageTypeDefinition;
        VersionedNote: MessageTypeDefinition;
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
      emr: {
        Destination: EnumTypeDefinition;
        Section: MessageTypeDefinition;
        SubmissionInformation: MessageTypeDefinition;
        SubmissionStatus: MessageTypeDefinition;
        SubmissionWarning: MessageTypeDefinition;
      };
      nms: {
        Chunk: MessageTypeDefinition;
        ChunkReference: MessageTypeDefinition;
        ClickEvent: MessageTypeDefinition;
        ClickType: EnumTypeDefinition;
        CommandEvent: MessageTypeDefinition;
        Content: MessageTypeDefinition;
        EventContext: MessageTypeDefinition;
        EventType: EnumTypeDefinition;
        Events: MessageTypeDefinition;
        KeyboardEvent: MessageTypeDefinition;
        KeyboardEventType: EnumTypeDefinition;
        Metadata: MessageTypeDefinition;
        NMSEvent: MessageTypeDefinition;
        Note: MessageTypeDefinition;
        SignalEvent: MessageTypeDefinition;
        SignalEventType: EnumTypeDefinition;
        Versions: MessageTypeDefinition;
        VoiceToTextEvent: MessageTypeDefinition;
        property_engine: {
          DisplayProperties: EnumTypeDefinition;
          EhrProperties: EnumTypeDefinition;
          EventProperties: EnumTypeDefinition;
          LabResultProperties: EnumTypeDefinition;
          LabTestProperties: EnumTypeDefinition;
          MedicalCodeProperties: EnumTypeDefinition;
          Property: MessageTypeDefinition;
          RecommendationProperties: EnumTypeDefinition;
          ScribeProperties: EnumTypeDefinition;
          SukiEntityProperties: EnumTypeDefinition;
          TextSourceProperties: EnumTypeDefinition;
          VersionProperties: EnumTypeDefinition;
        };
      };
      platform: {
        ClientType: EnumTypeDefinition;
      };
      s2: {
        AudioEncoding: MessageTypeDefinition;
        AudioInfo: MessageTypeDefinition;
        CompositionCreatedResponse: MessageTypeDefinition;
        CompositionResponse: MessageTypeDefinition;
        CursorPosition: MessageTypeDefinition;
        DeleteCompositionRequest: MessageTypeDefinition;
        DeleteCompositionResponse: MessageTypeDefinition;
        DialogRequest: MessageTypeDefinition;
        DialogResponse: MessageTypeDefinition;
        Error: MessageTypeDefinition;
        GetCompositionOrNoteRequest: MessageTypeDefinition;
        GetCompositionOrNoteResponse: MessageTypeDefinition;
        Notetypes: MessageTypeDefinition;
        PingRequest: MessageTypeDefinition;
        PongReply: MessageTypeDefinition;
        Recommendation: MessageTypeDefinition;
        RecommendationResponse: MessageTypeDefinition;
        Request: MessageTypeDefinition;
        S2_Streamer: SubtypeConstructor<typeof grpc.Client, _suki_pb_s2_S2_StreamerClient> & {
          service: _suki_pb_s2_S2_StreamerDefinition;
        };
        SectionContentById: MessageTypeDefinition;
        SectionContentResponse: MessageTypeDefinition;
        SectionResponse: MessageTypeDefinition;
        ServerResponse: MessageTypeDefinition;
        ServerSubmissionResponse: MessageTypeDefinition;
        SubsectionInfo: MessageTypeDefinition;
        UIContext: MessageTypeDefinition;
      };
      sms: {
        CheckIfCompositionIsBeingEditedRequest: MessageTypeDefinition;
        CheckIfCompositionIsBeingEditedResponse: MessageTypeDefinition;
        CreateCompositionRequest: MessageTypeDefinition;
        CreateCompositionResponse: MessageTypeDefinition;
        DeleteCompositionRequest: MessageTypeDefinition;
        DeleteCompositionResponse: MessageTypeDefinition;
        DeleteSectionRequest: MessageTypeDefinition;
        DeleteSectionResponse: MessageTypeDefinition;
        GetCompositionNeedsReviewNoScopeRequest: MessageTypeDefinition;
        GetCompositionNeedsReviewNoScopeResponse: MessageTypeDefinition;
        GetCompositionNeedsReviewRequest: MessageTypeDefinition;
        GetCompositionNeedsReviewResponse: MessageTypeDefinition;
        GetCompositionOrNoteRequest: MessageTypeDefinition;
        GetCompositionOrNoteResponse: MessageTypeDefinition;
        GetCompositionRequest: MessageTypeDefinition;
        GetCompositionResponse: MessageTypeDefinition;
        GetNoteRequest: MessageTypeDefinition;
        GetNoteResponse: MessageTypeDefinition;
        GetVersionedCompositionRequest: MessageTypeDefinition;
        GetVersionedCompositionResponse: MessageTypeDefinition;
        GetVersionedNoteRequest: MessageTypeDefinition;
        GetVersionedNoteResponse: MessageTypeDefinition;
        InsertAudioSectionTranscriptRequest: MessageTypeDefinition;
        InsertAudioSectionTranscriptResponse: MessageTypeDefinition;
        InsertSubmissionErrorCompositionAsNoteRequest: MessageTypeDefinition;
        InsertSubmissionErrorCompositionAsNoteResponse: MessageTypeDefinition;
        InsertVersionedNoteRequest: MessageTypeDefinition;
        InsertVersionedNoteResponse: MessageTypeDefinition;
        SMS: SubtypeConstructor<typeof grpc.Client, _suki_pb_sms_SMSClient> & { service: _suki_pb_sms_SMSDefinition };
        SetCompositionIsBeingEditedRequest: MessageTypeDefinition;
        SetCompositionIsBeingEditedResponse: MessageTypeDefinition;
        SetCompositionIsNotBeingEditedRequest: MessageTypeDefinition;
        SetCompositionIsNotBeingEditedResponse: MessageTypeDefinition;
        SubmitCompositionRequest: MessageTypeDefinition;
        SubmitCompositionResponse: MessageTypeDefinition;
        UndoRequest: MessageTypeDefinition;
        UndoResponse: MessageTypeDefinition;
        UpdateCompositionAppointmentRequest: MessageTypeDefinition;
        UpdateCompositionAppointmentResponse: MessageTypeDefinition;
        UpdateCompositionRequest: MessageTypeDefinition;
        UpdateCompositionResponse: MessageTypeDefinition;
        UpdateVersionedNoteRequest: MessageTypeDefinition;
        UpdateVersionedNoteResponse: MessageTypeDefinition;
      };
      ssp: {
        v1: {
          ASR: EnumTypeDefinition;
          AudioConfig: MessageTypeDefinition;
          AudioEncoding: EnumTypeDefinition;
          CommandResult: MessageTypeDefinition;
          CustomData: MessageTypeDefinition;
          ErrorSignals: EnumTypeDefinition;
          IntentResult: MessageTypeDefinition;
          ModelConfig: MessageTypeDefinition;
          PhraseBias: MessageTypeDefinition;
          PhraseTolerance: MessageTypeDefinition;
          RequestSignals: EnumTypeDefinition;
          ResponseSignals: EnumTypeDefinition;
          Slot: MessageTypeDefinition;
          SpeechAdaptation: MessageTypeDefinition;
          SpeechConfig: MessageTypeDefinition;
          SpeechContent: MessageTypeDefinition;
          SpeechResult: MessageTypeDefinition;
          SpeechStartResult: MessageTypeDefinition;
          TranscriptResult: MessageTypeDefinition;
          TranscriptionConfig: MessageTypeDefinition;
          WordMetadata: MessageTypeDefinition;
        };
      };
      voice: {
        speechapis: {
          SpeechAPI: EnumTypeDefinition;
        };
      };
    };
  };
}
