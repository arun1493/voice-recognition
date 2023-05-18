import { Router } from "express";

import PaymentsController from "../../controllers/paymentsController";

const paymentsRouter = Router();

paymentsRouter
  .route("/create-intent")
  .post(PaymentsController.createPaymentIntent)

paymentsRouter
  .route("/create-checkout-session")
  .post(PaymentsController.createCheckoutSession)

paymentsRouter
  .route("/create-billing-session")
  .post(PaymentsController.createBillingSession)

export default paymentsRouter;
