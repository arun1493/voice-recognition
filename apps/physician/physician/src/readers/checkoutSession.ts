import Stripe from "stripe";
import _property from "lodash/property";

const url = _property<Stripe.Checkout.Session, string>("url");

export default { url };
