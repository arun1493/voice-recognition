import { Router } from "express";

import MacrosController from "../../controllers/macrosController";

const macrosRoutes = Router();

macrosRoutes
  .route("/")
  .get(MacrosController.getMacros)
  .post(MacrosController.createMacro);

macrosRoutes
  .route("/:scriptId")
  .get(MacrosController.getMacros)
  .put(MacrosController.updateMacro)
  .delete(MacrosController.deleteMacros);

export default macrosRoutes;
