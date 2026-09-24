import { Router } from "express";
import { validate } from "../middlewares/validate.middleware.js";
import { authentication } from "../middlewares/auth.middleware.js";
import { CardParamsSchema, CardSchema, UpdateCardSchema } from "../validators/card.validator.js";
import { createCardController, deleteCardController, getCardsController, updateCardController } from "../controllers/card.controller.js";
import { ListParamsSchema } from "../validators/list.validator.js";
const router = Router();

router.post("/lists/:listId/cards", authentication, validate(ListParamsSchema, "params"), validate(CardSchema, "body"), createCardController);
router.get("/lists/:listId/cards", authentication, validate(ListParamsSchema, "params"), getCardsController);
router.patch("/cards/:cardId", authentication, validate(CardParamsSchema, "params"), validate(UpdateCardSchema, "body"), updateCardController);
router.delete("/cards/:cardId", authentication, validate(CardParamsSchema, "params"), deleteCardController);

export default router;