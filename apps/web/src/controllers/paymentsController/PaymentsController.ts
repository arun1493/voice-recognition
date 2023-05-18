import Stripe from "stripe";
import _get from "lodash/get";
import {
  BillingSessionPayload,
  Currencies,
  Products,
  SignUpQueryParameters,
  SUKI_X_COST_PER_MONTH_IN_CENTS,
  SUKI_X_TEST_DEV_ORGANIZATION_ID,
  SUKI_X_TRIAL_PERIOD,
  UserSubscriptionPayload
} from "@suki-web/suki-business";
import _isEmpty from "lodash/isEmpty";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { ERROR_STATEMENTS } from "../../constants";
import { findStripeCustomerByEmail } from "./helpers";
import PaymentsService from "../../services/PaymentsService";
import { cloudLogger, getUrlWithQueryParams } from "../../helpers";
import RegistrationService from "../../services/RegistrationService";
import { createUserRegistrationRequest } from "../registrationController/helpers";
import { CreateUserRegistrationRequest } from "../../grpc/generated/learningmotors/pb/user/CreateUserRegistrationRequest";

class PaymentsController {
  createPaymentIntent = async (req: Request, res: Response) => {
    try {
      cloudLogger.info("Creating payment intent");
      const paymentIntent = await PaymentsService.createPaymentIntent(SUKI_X_COST_PER_MONTH_IN_CENTS, Currencies.USD);
      cloudLogger.info("Completed creating payment intent", req);
      res.status(StatusCodes.OK).json({
        clientSecret: paymentIntent.client_secret
      });
    } catch (error) {
      cloudLogger.error("Error in creating payment intent", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }
  };

  createCheckoutSession = async (req: Request, res: Response) => {
    try {
      cloudLogger.info("Creating checkout session");
      const context = {
        suki_organization_id: SUKI_X_TEST_DEV_ORGANIZATION_ID
      };

      const registrationPayload: UserSubscriptionPayload = req?.body;
      const { affiliatedEmr: emr, practiceName: organizationName, product, user: userPayload } = registrationPayload;
      const { email, person, phoneNumber, specialties } = userPayload;
      const { firstName, lastName } = person;
      const redirectUrl = req.get("origin");

      // Create or update registration
      cloudLogger.info("Creating user registration RPC payload");
      const createUserRegistrationRpcPayload: CreateUserRegistrationRequest =
        createUserRegistrationRequest(registrationPayload);

      const { id: registrationId } = await RegistrationService.createUserRegistration(
        createUserRegistrationRpcPayload,
        context
      );

      // Check if the user already exists on stripe
      cloudLogger.info("Checking if user already exists on stripe");
      const { data: stripeCustomers } = await PaymentsService.getCustomersByEmail(email);
      let user = findStripeCustomerByEmail(stripeCustomers, email);

      // Create the user, if not present on stripe
      if (_isEmpty(user)) {
        cloudLogger.info("Creating user (not present on stripe)");
        const name = `${firstName} ${lastName}`;
        const metadata = {
          environment: process.env.DEPLOYMENT_ENVIRONMENT
        };
        user = await PaymentsService.createCustomer(email, name, metadata);
      }

      // Create a checkout session, use the appropriate price id based on the product
      cloudLogger.info("Creating checkout session");
      const products = [
        {
          price:
            product === Products.SUKI_X_LITE
              ? process.env.STRIPE_LITE_PRODUCT_PRICE_ID
              : process.env.STRIPE_PRODUCT_PRICE_ID,
          quantity: 1
        }
      ];

      // create query string parameters
      const queryParams = {
        [SignUpQueryParameters.EMAIL]: email,
        [SignUpQueryParameters.EMR]: emr,
        [SignUpQueryParameters.FIRST_NAME]: firstName,
        [SignUpQueryParameters.LAST_NAME]: lastName,
        [SignUpQueryParameters.ORGANIZATION_NAME]: organizationName,
        [SignUpQueryParameters.PHONE_NUMBER]: phoneNumber,
        [SignUpQueryParameters.SPECIALTY]: specialties,
        [SignUpQueryParameters.PRODUCT]: product
      };

      const cancelUrl = getUrlWithQueryParams(redirectUrl + "/register?", queryParams);
      const mode: Stripe.Checkout.Session.Mode = "subscription";
      const session = await PaymentsService.createCheckoutSession({
        cancelUrl,
        customerId: user?.id,
        mode,
        products,
        successUrl: `${redirectUrl}/payment/success/${registrationId}?session_id={CHECKOUT_SESSION_ID}`,
        trialPeriod: SUKI_X_TRIAL_PERIOD
      });

      cloudLogger.info("Completed creating checkout session", req);
      res.status(StatusCodes.OK).json({ session });
    } catch (error) {
      cloudLogger.error("Error in creating checkout session", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }
  };

  createBillingSession = async (req: Request, res: Response) => {
    try {
      cloudLogger.info("Creating billing session");
      const redirectUrl = req.get("origin");
      const billingSessionPayload: BillingSessionPayload = req?.body;

      // Destrcuture the payload
      const { email } = billingSessionPayload;

      const { data: stripeCustomers } = await PaymentsService.getCustomersByEmail(email);
      cloudLogger.info("Getting stripe user details");
      const stripeUserDetails = findStripeCustomerByEmail(stripeCustomers, email);

      const stripeCustomerId = _get(stripeUserDetails, "id");
      const session = await PaymentsService.createBillingSession({
        customerId: stripeCustomerId,
        returnUrl: redirectUrl
      });

      cloudLogger.info("Completed creating billing session", req);
      res.status(StatusCodes.OK).json({ session });
    } catch (error) {
      cloudLogger.error("Error in creating billing session", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }
  };
}

export default new PaymentsController();
