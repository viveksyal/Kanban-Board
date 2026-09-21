import { Router } from "express";
import { validate } from "../middlewares/validate.middleware.js";
import { LoginSchema, RegisterSchema } from "../validators/auth.validator.js";
import { loginController, meController, registerController } from "../controllers/auth.controller.js";
import { authentication } from "../middlewares/auth.middleware.js";
const router = Router();
router.post("/register", validate(RegisterSchema), registerController);
router.post("/login", validate(LoginSchema), loginController);
router.get("/me", authentication, meController);
export default router;
//# sourceMappingURL=auth.routes.js.map