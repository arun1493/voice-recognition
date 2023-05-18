import { Router } from "express";

import SectionsController from "../../controllers/sectionsController";

const sectionsRoutes = Router();

sectionsRoutes
  .route("/")
  .get(SectionsController.getSections)

sectionsRoutes
  .route("/:sectionId")
  .get(SectionsController.getSections)

export default sectionsRoutes;
