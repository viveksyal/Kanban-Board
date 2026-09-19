import { Router } from "express";
import { RegisterSchema } from "../validators/auth.validator.js";
import { registerUser } from "../services/auth.service.js";

const router = Router();

router.post("/register", async (req, res) => {

    const validation = RegisterSchema.safeParse(req.body);

    if(!validation.success){
        res.status(400).json({
            error: "Validation failed"
        });
        return;
    }

    const {email, password, name} = validation.data;
    const newUser = await registerUser(email, password, name);
    return res.status(201).json({
        message: "User registered successfully",
        name: newUser.name,
        email: newUser.email
    })
});

export default router;