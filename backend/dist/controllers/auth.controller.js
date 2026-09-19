import { registerUser } from "../services/auth.service.js";
export async function registerController(req, res) {
    const { email, password, name } = req.body;
    const newUser = await registerUser({ email, password, name });
    return res.status(201).json({
        message: "User registered successfully",
        name: newUser.name,
        email: newUser.email
    });
}
//# sourceMappingURL=auth.controller.js.map