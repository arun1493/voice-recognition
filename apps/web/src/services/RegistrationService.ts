import { createMetadata } from "../helpers";
import ClientFactory from "../factories/ClientFactory";
import { Empty__Output } from "../grpc/generated/google/protobuf/Empty";
import { UserServiceClient } from "../grpc/generated/learningmotors/pb/user/UserService";
import { GetUserRegistrationsResponse } from "../grpc/generated/learningmotors/pb/user/GetUserRegistrationsResponse";
import { CreateUserRegistrationResponse } from "../grpc/generated/learningmotors/pb/user/CreateUserRegistrationResponse";
import { ValidateVerificationTokenResponse } from "../grpc/generated/learningmotors/pb/user/ValidateVerificationTokenResponse";

class RegistrationService {
  // Currently registration rpcs are defined on userService
  public client: UserServiceClient;

  constructor() {
    ClientFactory.getUserServiceClient().then((client) => (this.client = client));
  }

  createUserRegistration(input, ctx): Promise<CreateUserRegistrationResponse> {
    return new Promise((resolve, reject) => {
      return this.client.createUserRegistration(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  createPassword(input, ctx): Promise<Empty__Output> {
    return new Promise((resolve, reject) => {
      return this.client.Register(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  getUserRegistrations(input, ctx): Promise<GetUserRegistrationsResponse> {
    return new Promise((resolve, reject) => {
      return this.client.getUserRegistrations(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  sendVerificationEmail(input, ctx): Promise<Empty__Output> {
    return new Promise((resolve, reject) => {
      return this.client.sendVerificationEmail(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  validateVerificationToken(input, ctx): Promise<ValidateVerificationTokenResponse> {
    return new Promise((resolve, reject) => {
      return this.client.validateVerificationToken(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }
}

export default new RegistrationService();
