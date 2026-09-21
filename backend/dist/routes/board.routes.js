import { Router } from "express";
import { validate } from "../middlewares/validate.middleware.js";
import { authentication } from "../middlewares/auth.middleware.js";
import { BoardSchema } from "../validators/auth.validator.js";
import { boardController } from "../controllers/board.controller.js";
const router = Router();
router.post("/", authentication, validate(BoardSchema), boardController);
export default router;
//# sourceMappingURL=board.routes.js.map