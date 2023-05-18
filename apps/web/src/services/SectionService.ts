import { createMetadata } from "../helpers";
import ClientFactory from "../factories/ClientFactory";
import { SectionServiceClient } from "../grpc/generated/learningmotors/pb/SectionService";
import { GetSectionsResponse__Output } from "../grpc/generated/learningmotors/pb/GetSectionsResponse";

class SectionService {
  public client: SectionServiceClient;

  constructor() {
    ClientFactory.getSectionsServiceClient().then((client) => (this.client = client));
  }

  getSections(input, ctx): Promise<GetSectionsResponse__Output> {
    return new Promise((resolve, reject) => {
      return this.client.getSections(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }
}

export default new SectionService();
