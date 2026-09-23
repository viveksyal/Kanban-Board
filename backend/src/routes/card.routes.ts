import { Router } from "express";
import { validate } from "../middlewares/validate.middleware.js";
import { authentication } from "../middlewares/auth.middleware.js";
import { CardParamsSchema, CardSchema } from "../validators/card.validator.js";
import { createCardController } from "../controllers/card.controller.js";
const router = Router();

router.post("/lists/:listId/cards", authentication, validate(CardParamsSchema, "params"), validate(CardSchema, "body"), createCardController);

export default router;