import { BillingSessionPayload, EMPTY_OBJECT, UserSubscriptionPayload } from "@suki-web/suki-business";

import axios from "./config";

enum EndPoints {
  CREATE_BILLING_SESSION = "/payments/create-billing-session",
  CREATE_CHECKOUT_SESSION = "/payments/create-checkout-session",
  CREATE_PAYMENT_INTENT = "/payments/create-intent"
}

const createPaymentIntent = () => {
  return axios.post(EndPoints.CREATE_PAYMENT_INTENT, EMPTY_OBJECT);
};

const createCheckoutSession = (payload: UserSubscriptionPayload) => {
  return axios.post(EndPoints.CREATE_CHECKOUT_SESSION, payload).then((response) => response?.data);
};

const createBillingSession = (payload: BillingSessionPayload) => {
  return axios.post(EndPoints.CREATE_BILLING_SESSION, payload).then((response) => response?.data);
};

export { createBillingSession, createCheckoutSession, createPaymentIntent };
