import { Router } from "express";
import { validate } from "../middlewares/validate.middleware.js";
import { authentication } from "../middlewares/auth.middleware.js";
import { ListSchema } from "../validators/list.validator.js";
import { createListController } from "../controllers/list.controller.js";
import { BoardParamsSchema } from "../validators/board.validator.js";
const router = Router();

router.post("/boards/:boardId/lists", authentication, validate(BoardParamsSchema, "params"), validate(ListSchema, "body"), createListController);

export default router;