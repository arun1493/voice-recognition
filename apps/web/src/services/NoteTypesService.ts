import { createMetadata } from "../helpers";
import ClientFactory from "../factories/ClientFactory";
import { Empty__Output } from "../grpc/generated/google/protobuf/Empty";
import { GetResponse__Output } from "../grpc/generated/learningmotors/pb/notetypes/GetResponse";
import { CreateResponse__Output } from "../grpc/generated/learningmotors/pb/notetypes/CreateResponse";
import { UpdateResponse__Output } from "../grpc/generated/learningmotors/pb/notetypes/UpdateResponse";
import { NoteTypesServiceClient } from "../grpc/generated/learningmotors/pb/notetypes/NoteTypesService";

class NoteTypesService {
  public client: NoteTypesServiceClient;

  constructor() {
    ClientFactory.getNoteTypesServiceClient().then((client) => (this.client = client));
  }

  getNoteTypes(input, ctx): Promise<GetResponse__Output> {
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

  deleteNoteTypes(input, ctx): Promise<Empty__Output> {
    return new Promise((resolve, reject) => {
      return this.client.delete(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  createNoteTypes(input, ctx): Promise<CreateResponse__Output> {
    return new Promise((resolve, reject) => {
      return this.client.create(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  updateNoteTypes(input, ctx): Promise<UpdateResponse__Output> {
    return new Promise((resolve, reject) => {
      return this.client.update(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }
}

export default new NoteTypesService();
