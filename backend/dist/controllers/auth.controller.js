import { registerUser } from "../services/auth.service.js";
export async function registerController(req, res) {
    try {
        const { email, password, name } = req.body;
        const newUser = await registerUser(email, password, name);
        return res.status(201).json({
            message: "User registered successfully",
            name: newUser.name,
            email: newUser.email
        });
    }
    catch (error) {
        if (error instanceof Error && error.message === "Email is already registered") {
            return res.status(409).json({ error: error.message });
        }
        console.error("Registration error:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}
//# sourceMappingURL=auth.controller.js.map