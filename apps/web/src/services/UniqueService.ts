import ClientFactory from "../factories/ClientFactory";
import { Empty__Output } from "../grpc/generated/google/protobuf/Empty";
import { GetResponse__Output } from "../grpc/generated/learningmotors/pb/unique/GetResponse";
import { UniqueServiceClient } from "../grpc/generated/learningmotors/pb/unique/UniqueService";

import { createMetadata } from "../helpers";

class UniqueService {
  public client: UniqueServiceClient;

  constructor() {
    ClientFactory.getUniqueServiceClient().then((client) => (this.client = client));
  }

  getPreferences(input, context): Promise<GetResponse__Output> {
    return new Promise((resolve, reject) => {
      return this.client.get(input, createMetadata(context), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  updatePreferences(input, context): Promise<Empty__Output> {
    return new Promise((resolve, reject) => {
      this.client.update(input, createMetadata(context), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }
}

export default new UniqueService();
