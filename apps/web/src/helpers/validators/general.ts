import { check } from "express-validator";

const validateSukiUserId = check("sukiUserId", "Missing suki user id").exists();

export { validateSukiUserId };
