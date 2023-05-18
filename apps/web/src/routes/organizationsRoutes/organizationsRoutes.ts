import { Router } from "express";

import organizationsController from "../../controllers/organizationsController";

const organizationsRouter = Router();

organizationsRouter
  .route("/:id")
  .get(organizationsController.getOrganizationsById)

export default organizationsRouter;

