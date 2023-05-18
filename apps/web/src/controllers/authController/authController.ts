import axios from "axios";
import _get from "lodash/get";
import sha512 from "crypto-js/sha512";
import _isEmpty from "lodash/isEmpty";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import {
  buildScope,
  cloudLogger,
  convertUserFromProto,
  getContext,
  getOktaAuthInstance,
  isValidIdToken
} from "../../helpers";
import { redis } from "../../redis";
import OktaService from "../../services/OktaService";
import UserService from "../../services/UserService";
import { ENCODING, ERROR_STATEMENTS, REVOKED_TOKENS_IN_REDIS } from "../../constants";

class AuthController {
  resetPassword = async (req: Request, res: Response) => {
    const email = _get(req, "body.email");
    const ctx = getContext(req);

    const rpcUsersInput = {
      scope: buildScope(ctx),
      email
    };

    try {
      cloudLogger.info("Initialized resetting password");
      const users = await UserService.getUserByEmailAddress(rpcUsersInput, ctx);
      const userId = _get(users, "users.0.id");
      const organizationId = _get(users, "users.0.organization_id");

      const oktaCtx = getContext({ userId, organizationId }, true, true);
      cloudLogger.info(`Getting context for OrgId: ${organizationId} | UserId: ${userId}`);

      const rpcOktaInput = {
        scope: buildScope(oktaCtx),
        user_id: userId
      };

      await OktaService.resetPassword(rpcOktaInput, oktaCtx);
      cloudLogger.info("Successfully completed resetting password", req, { email });
      res.sendStatus(StatusCodes.OK);
    } catch (error) {
      cloudLogger.error("Error in resetting password", req, { error });
      res.status(StatusCodes.BAD_REQUEST).json({
        code: StatusCodes.BAD_REQUEST,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.BAD_REQUEST]
      });
    }
  };

  getUserDetails = async (req: Request, res: Response) => {
    const email = _get(req, "query.email");
    const onLogin = _get(req, "query.onLogin");
    const userId = _get(req, "query.userId");
    const organizationId = _get(req, "query.organizationId");

    const ctx = getContext({ organizationId, userId }, true, true);

    const rpcUsersInput = {
      email,
      ids: [userId],
      on_login: onLogin === "true",
      scope: buildScope(ctx)
    };

    try {
      cloudLogger.info("Getting user details");
      const users = await UserService.getUsers(rpcUsersInput, ctx);
      const user = convertUserFromProto(_get(users, "users.0"));
      cloudLogger.info("Successfully completed getting the user details", req, { rpcUsersInput });
      res.status(StatusCodes.OK).json({ user });
    } catch (error) {
      cloudLogger.error("Error getting user details", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }
  };

  validateIdToken = async (req: Request, res: Response) => {
    const authToken = _get(req, "headers.authorization");

    if (!isValidIdToken(authToken)) {
      cloudLogger.error("Invalid authentication token");
      res.status(StatusCodes.UNAUTHORIZED).json({
        error: {
          code: StatusCodes.UNAUTHORIZED,
          message: "Invalid Authentication Token"
        }
      });
      return;
    }
    cloudLogger.info("Successfully completed validating the token", req);
    res.status(StatusCodes.OK).json({ isValid: true });
  };

  getAuthenticatedUserTokens = async (req: Request, res: Response) => {
    cloudLogger.info("Getting authenticated user tokens");
    const { username, password } = req.body;
    const url = `${process.env.OKTA_ISSUER_URL}/v1/token?grant_type=password&password=${password}&scope=openid&username=${username}&client_id=${process.env.OKTA_DESKTOP_CLIENT_ID}`;
    axios
      .post(url)
      .then(function (response) {
        cloudLogger.info("Successfully completed getting authenticated user tokens", req, { url });
        res.status(StatusCodes.OK).json(response["data"]);
      })
      .catch(function (error) {
        cloudLogger.error("Error getting authenticated user tokens", req, { error });
        res.status(StatusCodes.UNAUTHORIZED).json({
          code: StatusCodes.UNAUTHORIZED,
          details: error,
          message: ERROR_STATEMENTS[StatusCodes.UNAUTHORIZED]
        });
      });
  };

  getSessionToken = async (req: Request, res: Response) => {
    const encodedCredentials = _get(req, "query.encodedCredentials");
    const decodedCredentials = Buffer.from(encodedCredentials, ENCODING.BASE64).toString(ENCODING.BINARY);
    const credentials = JSON.parse(decodedCredentials);

    try {
      const oktaInstance = getOktaAuthInstance(null);
      const results = await oktaInstance.signInWithCredentials({
        password: credentials.password,
        username: credentials.email
      });
      const { status, sessionToken } = results;
      if (status === "SUCCESS") {
        if (_isEmpty(sessionToken)) {
          cloudLogger.error(`Authentication Error: Invalid sessionToken ${sessionToken}`, req);
          res.status(StatusCodes.UNAUTHORIZED).json("Authentication Error: Invalid sessionToken" + sessionToken);
        }
        cloudLogger.info("Successfully completed getting session token", req);
        res.status(StatusCodes.OK).json({ success: true, sessionToken });
      }
    } catch (error) {
      cloudLogger.error("Error getting session token", req, { error });
      res.status(StatusCodes.UNAUTHORIZED).json({
        code: StatusCodes.UNAUTHORIZED,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.UNAUTHORIZED]
      });
    }
  };

  revoke = (req: Request, res: Response) => {
    const accessToken = _get(req, "headers.authorization");
    const encryptedAccessToken = sha512(accessToken, process.env.SUKI_SALT).toString();
    const encryptedTokenObject = {
      [encryptedAccessToken]: "true"
    };
    redis
      .getRedisData(`${REVOKED_TOKENS_IN_REDIS}`)
      .then((accessTokensInRedis) => {
        if (accessTokensInRedis) {
          const accessTokensInJson = JSON.parse(accessTokensInRedis);
          accessTokensInJson[encryptedAccessToken] = "true";
          const updatedAccessTokensInJson = JSON.stringify(accessTokensInJson);
          redis.setRedisData(`${REVOKED_TOKENS_IN_REDIS}`, updatedAccessTokensInJson);
        } else {
          cloudLogger.info("No previous data found in redis", req);
          redis.setRedisData(`${REVOKED_TOKENS_IN_REDIS}`, JSON.stringify(encryptedTokenObject));
        }
      })
      .catch((error) => {
        cloudLogger.error("Error in getting data from redis", req, { error });
      });
    res.status(StatusCodes.OK).json({
      message: "Successfully set authToken in redis as invalid"
    });
  };
}

export default new AuthController();
