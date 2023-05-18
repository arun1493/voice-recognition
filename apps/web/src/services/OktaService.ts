import { createMetadata } from "../helpers";
import ClientFactory from "../factories/ClientFactory";
import { Empty__Output } from "../grpc/generated/google/protobuf/Empty";
import { OktaServiceClient } from "../grpc/generated/learningmotors/pb/okta/OktaService";

class OktaService {
  public client: OktaServiceClient;

  constructor() {
    ClientFactory.getOktaServiceClient().then((client) => (this.client = client));
  }

  resetPassword(input, ctx): Promise<Empty__Output> {
    return new Promise((resolve, reject) => {
      return this.client.resetPassword(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }
}

export default new OktaService();
