import { Router } from "express";
import { validate } from "../middlewares/validate.middleware.js";
import { LoginSchema, RegisterSchema } from "../validators/auth.validator.js";
import { loginController, registerController } from "../controllers/auth.controller.js";
const router = Router();

router.post("/register", validate(RegisterSchema) , registerController);
router.post("/login", validate(LoginSchema), loginController)

export default router;