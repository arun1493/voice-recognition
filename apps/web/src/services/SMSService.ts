import { createMetadata } from "../helpers";
import ClientFactory from "../factories/ClientFactory";
import { SMSClient } from "../grpc/generated/suki/pb/sms/SMS";
import { GetNoteResponse__Output } from "../grpc/generated/suki/pb/sms/GetNoteResponse";
import { GetCompositionResponse__Output } from "../grpc/generated/suki/pb/sms/GetCompositionResponse";
import { DeleteCompositionResponse__Output } from "../grpc/generated/suki/pb/s2/DeleteCompositionResponse";
import { UpdateCompositionResponse__Output } from "../grpc/generated/suki/pb/sms/UpdateCompositionResponse";
import { GetCompositionOrNoteResponse__Output } from "../grpc/generated/suki/pb/sms/GetCompositionOrNoteResponse";

class SMSService {
  public client: SMSClient;

  constructor() {
    ClientFactory.getSMSServiceClient().then((client) => (this.client = client));
  }

  getComposition(input, ctx): Promise<GetCompositionResponse__Output> {
    return new Promise((resolve, reject) => {
      return this.client.getComposition(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  getCompositionOrNote(input, ctx): Promise<GetCompositionOrNoteResponse__Output> {
    return new Promise((resolve, reject) => {
      return this.client.getCompositionOrNote(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  getNote(input, ctx): Promise<GetNoteResponse__Output> {
    return new Promise((resolve, reject) => {
      return this.client.getNote(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  deleteComposition = async (input, ctx): Promise<DeleteCompositionResponse__Output> => {
    return new Promise((resolve, reject) => {
      this.client.DeleteComposition(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  };

  updateComposition = async (input, ctx): Promise<UpdateCompositionResponse__Output> => {
    return new Promise((resolve, reject) => {
      this.client.updateComposition(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  };
}

export default new SMSService();
