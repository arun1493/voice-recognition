import { createMetadata } from "../helpers";
import ClientFactory from "../factories/ClientFactory";
import { Empty__Output } from "../grpc/generated/google/protobuf/Empty";
import { MacroServiceClient } from "../grpc/generated/learningmotors/pb/macros/MacroService";
import { GetMacrosResponse__Output } from "../grpc/generated/learningmotors/pb/macros/GetMacrosResponse";
import { CreateMacroResponse__Output } from "../grpc/generated/learningmotors/pb/macros/CreateMacroResponse";
import { UpdateMacroResponse__Output } from "../grpc/generated/learningmotors/pb/macros/UpdateMacroResponse";

class MacrosService {
  public client: MacroServiceClient;

  constructor() {
    ClientFactory.getMacrosServiceClient().then((client) => (this.client = client));
  }

  getMacros(input, ctx): Promise<GetMacrosResponse__Output> {
    return new Promise((resolve, reject) => {
      return this.client.getMacros(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  createMacro(input, ctx): Promise<CreateMacroResponse__Output> {
    return new Promise((resolve, reject) => {
      return this.client.createMacro(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  deleteMacros(input, ctx): Promise<Empty__Output> {
    return new Promise((resolve, reject) => {
      return this.client.deleteMacros(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  updateMacro(input, ctx): Promise<UpdateMacroResponse__Output> {
    return new Promise((resolve, reject) => {
      return this.client.updateMacro(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  syncOrganizationDefaultMacros(input, ctx): Promise<Empty__Output> {
    return new Promise((resolve, reject) => {
      return this.client.SyncOrganizationDefaultMacros(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }
}

export default new MacrosService();
