import { createMetadata } from "../helpers";
import ClientFactory from "../factories/ClientFactory";
import { PatientServiceClient } from "../grpc/generated/learningmotors/pb/patients/PatientService";
import { GetPatientsResponse__Output } from "../grpc/generated/learningmotors/pb/patients/GetPatientsResponse";
import { SearchPatientsResponse__Output } from "../grpc/generated/learningmotors/pb/patients/SearchPatientsResponse";
import { GetPatientListResponse__Output } from "../grpc/generated/learningmotors/pb/patients/GetPatientListResponse";
import { AddToPatientListResponse__Output } from "../grpc/generated/learningmotors/pb/patients/AddToPatientListResponse";
import { RemoveFromPatientListResponse__Output } from "../grpc/generated/learningmotors/pb/patients/RemoveFromPatientListResponse";
import { CreateOrUpdatePatientsResponse__Output } from "../grpc/generated/learningmotors/pb/patients/CreateOrUpdatePatientsResponse";

class PatientsService {
  public client: PatientServiceClient;

  constructor() {
    ClientFactory.getPatientsServiceClient().then((client) => (this.client = client));
  }

  searchPatients(input, ctx): Promise<SearchPatientsResponse__Output> {
    return new Promise((resolve, reject) => {
      return this.client.searchPatients(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  getPatients(input, ctx): Promise<GetPatientsResponse__Output> {
    return new Promise((resolve, reject) => {
      return this.client.getPatients(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  getPatientList(input, ctx): Promise<GetPatientListResponse__Output> {
    return new Promise((resolve, reject) => {
      return this.client.getPatientList(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  addToPatientList(input, ctx): Promise<AddToPatientListResponse__Output> {
    return new Promise((resolve, reject) => {
      return this.client.addToPatientList(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  removeFromPatientList(input, ctx): Promise<RemoveFromPatientListResponse__Output> {
    return new Promise((resolve, reject) => {
      return this.client.removeFromPatientList(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  createOrUpdatePatients(input, ctx): Promise<CreateOrUpdatePatientsResponse__Output> {
    return new Promise((resolve, reject) => {
      return this.client.createOrUpdatePatients(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }
}

export default new PatientsService();
