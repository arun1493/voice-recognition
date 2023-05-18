import _get from "lodash/get";
import {
  PasswordRegistrationPayload,
  RegistrationVerificationTokenPayload,
  SUKI_X_TEST_DEV_ORGANIZATION_ID,
  SUKI_X_TEST_DEV_USER_ID,
  UserSubscriptionPayload,
  VerificationEmailPayload
} from "@suki-web/suki-business";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { cloudLogger } from "../../helpers";
import { ERROR_STATEMENTS } from "../../constants";
import { createUserRegistrationRequest } from "./helpers";
import RegistrationService from "../../services/RegistrationService";
import { RegisterRequest } from "../../grpc/generated/learningmotors/pb/user/RegisterRequest";
import { GetUserRegistrationsRequest } from "../../grpc/generated/learningmotors/pb/user/GetUserRegistrationsRequest";
import { SendVerificationEmailRequest } from "../../grpc/generated/learningmotors/pb/user/SendVerificationEmailRequest";
import { CreateUserRegistrationRequest } from "../../grpc/generated/learningmotors/pb/user/CreateUserRegistrationRequest";
import { ValidateVerificationTokenRequest } from "../../grpc/generated/learningmotors/pb/user/ValidateVerificationTokenRequest";

class RegistrationController {
  createUserRegistration = async (req: Request, res: Response) => {
    try {
      cloudLogger.info("Creating user registration");
      const context = {
        suki_organization_id: SUKI_X_TEST_DEV_ORGANIZATION_ID
      };

      cloudLogger.info("Getting registration payload");
      const registrationPayload: UserSubscriptionPayload = req?.body;
      cloudLogger.info("Creating user registration RPC payload");
      const createUserRegistrationRpcPayload: CreateUserRegistrationRequest =
        createUserRegistrationRequest(registrationPayload);

      const { id: registrationId } = await RegistrationService.createUserRegistration(
        createUserRegistrationRpcPayload,
        context
      );
      cloudLogger.info("Completed creating user registration", req, {
        id: registrationId,
        registrationPayload
      });
      res.status(StatusCodes.OK).json({
        registrationId
      });
    } catch (error) {
      cloudLogger.error("Error in getting note PDF uri", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }
  };

  getUserRegistrations = async (req: Request, res: Response) => {
    try {
      cloudLogger.info("Getting user registrations");
      const email = _get(req, "query.email");

      const context = {
        suki_organization_id: SUKI_X_TEST_DEV_ORGANIZATION_ID
      };

      const getRegistrationRpcPayload: GetUserRegistrationsRequest = {
        emails: [email]
      };
      const { user_registration: registrations } = await RegistrationService.getUserRegistrations(
        getRegistrationRpcPayload,
        context
      );

      cloudLogger.info("Completed getting user registrations", req, { email, registrations });
      res.status(StatusCodes.OK).json({
        registrations
      });
    } catch (error) {
      cloudLogger.error("Error in getting user registrations", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }
  };

  createPassword = async (req: Request, res: Response) => {
    try {
      cloudLogger.info("Creating password");
      const payload: PasswordRegistrationPayload = req?.body;
      const { password, token, user } = payload;
      const context = {
        suki_organization_id: SUKI_X_TEST_DEV_ORGANIZATION_ID,
        suki_user_id: SUKI_X_TEST_DEV_USER_ID
      };

      cloudLogger.info("Getting password registration RPC payload");
      const passwordRegistrationRpcPayload: RegisterRequest = {
        password,
        token,
        user
      };

      await RegistrationService.createPassword(passwordRegistrationRpcPayload, context);
      cloudLogger.info("Completed creating password", req);
      res.sendStatus(StatusCodes.OK);
    } catch (error) {
      cloudLogger.error("Error in creating password", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }
  };

  sendVerificationEmail = async (req: Request, res: Response) => {
    try {
      cloudLogger.info("Sending verification email");
      const context = {
        suki_organization_id: SUKI_X_TEST_DEV_ORGANIZATION_ID
      };

      const payload: VerificationEmailPayload = req?.body;
      const { registrationId } = payload;
      cloudLogger.info("Getting send verification email RPC payload");
      const sendVerificationEmailRpcPayload: SendVerificationEmailRequest = {
        id: registrationId
      };
      await RegistrationService.sendVerificationEmail(sendVerificationEmailRpcPayload, context);
      cloudLogger.info("Completed sending verification email | Email sent successfully", req, {
        registrationId
      });
      res.status(StatusCodes.OK).json({
        message: "Email successfully sent"
      });
    } catch (error) {
      cloudLogger.error("Error in sending verification email", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }
  };

  validateRegistrationVerificationToken = async (req: Request, res: Response) => {
    try {
      cloudLogger.info("Validating registration verification token");
      const payload: RegistrationVerificationTokenPayload = req?.body;
      const { email, token } = payload;
      const context = {
        suki_organization_id: SUKI_X_TEST_DEV_ORGANIZATION_ID
      };

      cloudLogger.info("Getting validate verification token RPC payload");
      const validateVerificationTokenRpcPayload: ValidateVerificationTokenRequest = {
        email,
        token
      };
      const response = await RegistrationService.validateVerificationToken(
        validateVerificationTokenRpcPayload,
        context
      );
      cloudLogger.info("Completed validating registration verification token", req, {
        email
      });
      res.status(StatusCodes.OK).json(response);
    } catch (error) {
      cloudLogger.error("Error in valdiating registration verification token", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }
  };
}

export default new RegistrationController();
