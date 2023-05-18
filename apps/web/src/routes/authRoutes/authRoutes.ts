import { Router } from "express";

import AuthController from "../../controllers/authController";

const authRouter = Router();

authRouter
  .route("/session-token")
  .get(AuthController.getSessionToken);

authRouter
  .route("/password/reset")
  .post(AuthController.resetPassword);

authRouter
  .route("/me")
  .get(AuthController.getUserDetails);

authRouter
  .route("/is-valid-token")
  .get(AuthController.validateIdToken);

authRouter
  .route("/user-tokens")
  .post(AuthController.getAuthenticatedUserTokens);

authRouter
  .route("/revoke")
  .post(AuthController.revoke);

export default authRouter;
