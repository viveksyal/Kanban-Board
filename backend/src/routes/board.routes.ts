import { Router } from "express";
import { validate } from "../middlewares/validate.middleware.js";
import { authentication } from "../middlewares/auth.middleware.js";
import { BoardParamsSchema, BoardSchema } from "../validators/board.validator.js";
import { createBoardController, deleteBoardController, getBoardController, getBoardsController, updateBoardController } from "../controllers/board.controller.js";

const router = Router();


router.post("/", authentication, validate(BoardSchema, "body"), createBoardController);
router.get("/", authentication, getBoardsController);
router.get("/:boardId", authentication, validate(BoardParamsSchema, "params"), getBoardController);
router.patch("/:boardId", authentication, validate(BoardParamsSchema, "params"), validate(BoardSchema, "body"), updateBoardController);
router.delete("/:boardId", authentication, validate(BoardParamsSchema, "params"), deleteBoardController);
export default router;