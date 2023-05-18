import Stripe from "stripe";
import _property from "lodash/property";

const url = _property<Stripe.BillingPortal.Session, string>("url");

export default { url };
