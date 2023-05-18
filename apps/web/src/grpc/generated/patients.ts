import type * as grpc from "@grpc/grpc-js";
import type { MessageTypeDefinition } from "@grpc/proto-loader";

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
      common: {
        Person: MessageTypeDefinition;
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
}
