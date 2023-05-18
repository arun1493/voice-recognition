import Stripe from "stripe";
import { Currencies } from "@suki-web/suki-business";

class PaymentsService {
  stripe: Stripe;

  constructor() {
    // TO-DO: Move the api keys to environment variables

    this.stripe = new Stripe(process.env.STRIPE_API_KEY, {
      apiVersion: "2022-11-15"
    });
  }

  createCheckoutSession({
    cancelUrl,
    customerId,
    mode,
    products,
    successUrl,
    trialPeriod
  }): Promise<Stripe.Response<Stripe.Checkout.Session>> {
    const checkoutSession = this.stripe.checkout.sessions.create({
      line_items: products,
      customer: customerId,
      mode,
      success_url: successUrl,
      cancel_url: cancelUrl,
      subscription_data: {
        trial_period_days: trialPeriod
      }
    });

    return checkoutSession;
  }

  createBillingSession({ customerId, returnUrl }): Promise<Stripe.Response<Stripe.BillingPortal.Session>> {
    const checkoutSession = this.stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: returnUrl
    });

    return checkoutSession;
  }

  createPaymentIntent(amount: number, currency: Currencies): Promise<Stripe.Response<Stripe.PaymentIntent>> {
    const paymentIntent = this.stripe.paymentIntents.create({
      currency,
      amount,
      automatic_payment_methods: {
        enabled: true // Enable automatic payment method detection from Stripe dashboard
      }
    });

    return paymentIntent;
  }

  createCustomer(
    email: string,
    username: string,
    metadata: Record<string, string>
  ): Promise<Stripe.Response<Stripe.Customer>> {
    const user = this.stripe.customers.create({
      email: email,
      name: username,
      metadata
    });

    return user;
  }

  getCustomersByEmail(email: string) {
    const users = this.stripe.customers.search({
      query: `email:\"${email}\" AND metadata[\'environment\']:\"${process.env.DEPLOYMENT_ENVIRONMENT}\"`
    });
    return users;
  }

  createCustomerPortalSession(
    customerId: string,
    returnUrl: string
  ): Promise<Stripe.Response<Stripe.BillingPortal.Session>> {
    const customerPortalSession = this.stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: returnUrl
    });
    return customerPortalSession;
  }
}

export default new PaymentsService();
