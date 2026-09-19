import { Router } from "express";
import { validate } from "../middlewares/validate.middleware.js";
import { RegisterSchema } from "../validators/auth.validator.js";
import { registerController } from "../controllers/auth.controller.js";
const router = Router();
router.post("/register", validate(RegisterSchema), registerController);
export default router;
//# sourceMappingURL=auth.routes.js.map