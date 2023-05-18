import { createMetadata } from "../helpers";
import ClientFactory from "../factories/ClientFactory";
import { Empty__Output } from "../grpc/generated/google/protobuf/Empty";
import { EMRNotesClient } from "../grpc/generated/learningmotors/pb/emrnotes/EMRNotes";

class EmrNotesService {
  public client: EMRNotesClient;

  constructor() {
    ClientFactory.getEMRNotesClient().then((client) => (this.client = client));
  }

  refreshEmrNotes(input, ctx): Promise<Empty__Output> {
    return new Promise((resolve, reject) => {
      return this.client.refreshEmrNotes(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }
}

export default new EmrNotesService();
