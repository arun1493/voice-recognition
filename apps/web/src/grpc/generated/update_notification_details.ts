import type * as grpc from "@grpc/grpc-js";
import type { EnumTypeDefinition, MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  EmrNoteTypesServiceClient as _learningmotors_pb_emr_notetypes_EmrNoteTypesServiceClient,
  EmrNoteTypesServiceDefinition as _learningmotors_pb_emr_notetypes_EmrNoteTypesServiceDefinition
} from "./learningmotors/pb/emr_notetypes/EmrNoteTypesService";
import type {
  EMRAccountsServiceClient as _learningmotors_pb_emraccounts_EMRAccountsServiceClient,
  EMRAccountsServiceDefinition as _learningmotors_pb_emraccounts_EMRAccountsServiceDefinition
} from "./learningmotors/pb/emraccounts/EMRAccountsService";

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
      emr: {
        EMRIdentifiers: MessageTypeDefinition;
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
      emr_scheduler: {
        UpdateNotificationDetails: MessageTypeDefinition;
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
