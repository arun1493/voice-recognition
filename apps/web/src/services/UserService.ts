import _get from "lodash/get";

import EmrAccountsService from "./EmrAccountsService";
import ClientFactory from "../factories/ClientFactory";
import { UserServiceClient } from "../grpc/generated/learningmotors/pb/user/UserService";
import { GetResponse__Output } from "../grpc/generated/learningmotors/pb/user/GetResponse";
import { EmbeddedUserResponse__Output } from "../grpc/generated/learningmotors/pb/user/EmbeddedUserResponse";
import { buildScope, convertEMRUserFromProto, convertUserFromProto, createMetadata, sortBy } from "../helpers";

class UserService {
  public client: UserServiceClient;

  constructor() {
    ClientFactory.getUserServiceClient().then((client) => (this.client = client));
  }

  getUserByEmailAddress(input, ctx): Promise<GetResponse__Output> {
    return new Promise((resolve, reject) => {
      return this.client.getUserByEmail(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  getUsers(input, ctx): Promise<GetResponse__Output> {
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

  getEmbeddedUser(input, ctx): Promise<EmbeddedUserResponse__Output> {
    return new Promise((resolve, reject) => {
      return this.client.getEmbeddedUser(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  getAllUsers = async (input, ctx) => {
    const { ids, onLogin, email, withEmrInfo } = input;
    const rpcInput = {
      scope: buildScope(ctx),
      ids,
      on_login: onLogin,
      email
    };

    try {
      const response = await this.getUsers(rpcInput, ctx);
      let users = _get(response, "users", []).map(convertUserFromProto);
      users.sort((a, b) => sortBy(a.person.lastName, b.person.lastName));

      if (users.length && withEmrInfo) {
        const rpcInput = {
          scope: buildScope(ctx),
          suki_user_ids: ids
        };

        const emrResponse = await EmrAccountsService.getUsers(rpcInput, ctx);
        const emrUsers = emrResponse.users.map(convertEMRUserFromProto);
        users = users.map((user) => {
          const matchingEMRUser = emrUsers.find((emrUser) => emrUser.sukiUserId === user.id);
          const { emrUserId, emrUserIdList, emrDepartmentId, scheduleHealthcheckTimestamp, noteHealthcheckTimestamp } =
            matchingEMRUser;
          return {
            ...user,
            emrUserId,
            emrUserIdList,
            emrDepartmentId,
            scheduleHealthcheckTimestamp,
            noteHealthcheckTimestamp
          };
        });
      }

      return {
        count: users.length,
        results: users
      };
    } catch (error) {
      return Promise.reject(error);
    }
  };

  createEmbeddedUser(input, ctx): Promise<EmbeddedUserResponse__Output> {
    return new Promise((resolve, reject) => {
      return this.client.createEmbeddedUser(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }
}

export default new UserService();
