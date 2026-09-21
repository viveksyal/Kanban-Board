import { Router } from "express";
import { validate } from "../middlewares/validate.middleware.js";
import { authentication } from "../middlewares/auth.middleware.js";
import { BoardSchema } from "../validators/board.validator.js";
import { createBoardController, getBoardsController } from "../controllers/board.controller.js";

const router = Router();


router.post("/", authentication, validate(BoardSchema), createBoardController);
router.get("/", authentication, getBoardsController);

export default router;