import ClientFactory from "../factories/ClientFactory";
import { convertOrganizationFromProto, createMetadata } from "../helpers";
import { GetResponse__Output } from "../grpc/generated/learningmotors/pb/organization/GetResponse";
import { OrganizationServiceClient } from "../grpc/generated/learningmotors/pb/organization/OrganizationService";

class OrganizationsService {
  public client: OrganizationServiceClient;

  constructor() {
    ClientFactory.getOrganizationsServiceClient().then((client) => (this.client = client));
  }

  getOrganizations(input, ctx): Promise<GetResponse__Output> {
    return new Promise((resolve, reject) => {
      return this.client.get(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }
}

export default new OrganizationsService();
