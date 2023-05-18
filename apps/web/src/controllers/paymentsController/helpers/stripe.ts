import _find from "lodash/find";
import Stripe from "stripe";

const isMatchingStripeCustomerEmail = (email: string) => (stripeCustomer: Stripe.Customer) =>
  stripeCustomer.email === email;

const findStripeCustomerByEmail = (stripeCustomers: Stripe.Customer[], email: string) =>
  _find(stripeCustomers, isMatchingStripeCustomerEmail(email));

export { findStripeCustomerByEmail };
