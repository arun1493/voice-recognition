import { createMetadata } from "../helpers";
import ClientFactory from "../factories/ClientFactory";
import { GetUsersResponse__Output } from "../grpc/generated/learningmotors/pb/emraccounts/GetUsersResponse";
import { EMRAccountsServiceClient } from "../grpc/generated/learningmotors/pb/emraccounts/EMRAccountsService";
import { GetOrganizationResponse__Output } from "../grpc/generated/learningmotors/pb/emraccounts/GetOrganizationResponse";

class EmrAccountsService {
  public client: EMRAccountsServiceClient;

  constructor() {
    ClientFactory.getEmrAccountsServiceClient().then((client) => (this.client = client));
  }

  getUsers(input, ctx): Promise<GetUsersResponse__Output> {
    return new Promise((resolve, reject) => {
      return this.client.getUsers(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  getOrganization(input, ctx): Promise<GetOrganizationResponse__Output> {
    return new Promise((resolve, reject) => {
      return this.client.getOrganization(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }
}

export default new EmrAccountsService();
