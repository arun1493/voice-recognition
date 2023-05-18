import type * as grpc from "@grpc/grpc-js";
import type { EnumTypeDefinition, MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  AppointmentServiceClient as _learningmotors_pb_AppointmentServiceClient,
  AppointmentServiceDefinition as _learningmotors_pb_AppointmentServiceDefinition
} from "./learningmotors/pb/AppointmentService";
import type {
  EMRSchedulerServiceClient as _learningmotors_pb_emr_scheduler_EMRSchedulerServiceClient,
  EMRSchedulerServiceDefinition as _learningmotors_pb_emr_scheduler_EMRSchedulerServiceDefinition
} from "./learningmotors/pb/emr_scheduler/EMRSchedulerService";
import type {
  EMRAccountsServiceClient as _learningmotors_pb_emraccounts_EMRAccountsServiceClient,
  EMRAccountsServiceDefinition as _learningmotors_pb_emraccounts_EMRAccountsServiceDefinition
} from "./learningmotors/pb/emraccounts/EMRAccountsService";
import type {
  PatientServiceClient as _learningmotors_pb_patients_PatientServiceClient,
  PatientServiceDefinition as _learningmotors_pb_patients_PatientServiceDefinition
} from "./learningmotors/pb/patients/PatientService";

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
      Appointment: MessageTypeDefinition;
      AppointmentService: SubtypeConstructor<typeof grpc.Client, _learningmotors_pb_AppointmentServiceClient> & {
        service: _learningmotors_pb_AppointmentServiceDefinition;
      };
      BackfillAppointmentDataRequest: MessageTypeDefinition;
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
      UpdateAppointmentCompositionRequest: MessageTypeDefinition;
      UpdateAppointmentCompositionResponse: MessageTypeDefinition;
      common: {
        Person: MessageTypeDefinition;
      };
      emr_scheduler: {
        CheckNoteHealthRequest: MessageTypeDefinition;
        CheckNoteHealthResponse: MessageTypeDefinition;
        CheckScheduleHealthRequest: MessageTypeDefinition;
        CheckScheduleHealthResponse: MessageTypeDefinition;
        EMRSchedulerService: SubtypeConstructor<
          typeof grpc.Client,
          _learningmotors_pb_emr_scheduler_EMRSchedulerServiceClient
        > & { service: _learningmotors_pb_emr_scheduler_EMRSchedulerServiceDefinition };
        NoteIngestionRequest: MessageTypeDefinition;
        RefreshAppointmentsRequest: MessageTypeDefinition;
        RefreshEncounterFieldsRequest: MessageTypeDefinition;
        RefreshEncounterFieldsResponse: MessageTypeDefinition;
        RefreshUserEMRTokenRequest: MessageTypeDefinition;
        SearchAltaisUserRequest: MessageTypeDefinition;
        SearchAltaisUserResponse: MessageTypeDefinition;
        SearchPatientsRequest: MessageTypeDefinition;
        SearchPatientsResponse: MessageTypeDefinition;
      };
      emraccounts: {
        APICredentials: MessageTypeDefinition;
        Capabilities: MessageTypeDefinition;
        CreateOrganizationRequest: MessageTypeDefinition;
        CreateOrganizationResponse: MessageTypeDefinition;
        CreateUserRequest: MessageTypeDefinition;
        CreateUserResponse: MessageTypeDefinition;
        DeleteOrganizationRequest: MessageTypeDefinition;
        DeleteUsersRequest: MessageTypeDefinition;
        EMRAccountsService: SubtypeConstructor<
          typeof grpc.Client,
          _learningmotors_pb_emraccounts_EMRAccountsServiceClient
        > & { service: _learningmotors_pb_emraccounts_EMRAccountsServiceDefinition };
        GetAPICredentialsRequest: MessageTypeDefinition;
        GetAPICredentialsResponse: MessageTypeDefinition;
        GetAllOrganizationsRequest: MessageTypeDefinition;
        GetAllOrganizationsResponse: MessageTypeDefinition;
        GetOrganizationRequest: MessageTypeDefinition;
        GetOrganizationResponse: MessageTypeDefinition;
        GetUserByEmrIdentifiersRequest: MessageTypeDefinition;
        GetUserByEmrIdentifiersResponse: MessageTypeDefinition;
        GetUsersRequest: MessageTypeDefinition;
        GetUsersResponse: MessageTypeDefinition;
        LinkEMRUserRequest: MessageTypeDefinition;
        LinkEMRUserResponse: MessageTypeDefinition;
        Organization: MessageTypeDefinition;
        SearchEMRUsersRequest: MessageTypeDefinition;
        SearchEMRUsersResponse: MessageTypeDefinition;
        UnlinkEMRUserRequest: MessageTypeDefinition;
        UnlinkEMRUserResponse: MessageTypeDefinition;
        UpdateOrganizationRequest: MessageTypeDefinition;
        UpdateOrganizationResponse: MessageTypeDefinition;
        UpdateUserRequest: MessageTypeDefinition;
        UpdateUserResponse: MessageTypeDefinition;
        User: MessageTypeDefinition;
      };
      emrtypes: {
        EMRSecondaryType: EnumTypeDefinition;
        EMRType: EnumTypeDefinition;
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
    };
  };
  suki: {
    pb: {
      emr: {
        Destination: EnumTypeDefinition;
        Section: MessageTypeDefinition;
        SubmissionInformation: MessageTypeDefinition;
        SubmissionStatus: MessageTypeDefinition;
        SubmissionWarning: MessageTypeDefinition;
      };
    };
  };
}
