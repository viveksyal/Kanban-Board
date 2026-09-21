import { getMe, loginUser, registerUser } from "../services/auth.service.js";
import cookieParser from "cookie-parser";
import { email } from "zod";
export async function registerController(req, res) {
    const { email, password, name } = req.body;
    const newUser = await registerUser({ email, password, name });
    return res.status(201).json({
        message: "User registered successfully",
        name: newUser.name,
        email: newUser.email
    });
}
export async function loginController(req, res) {
    const { email, password } = req.body;
    const token = await loginUser({ email, password });
    res.cookie('token', token, {
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 1000 * 60 * 60 * 24 * 7
    });
    return res.status(200).json({
        message: "User logged in successfully",
    });
}
export async function meController(req, res) {
    const userId = req.user.userId;
    const userData = await getMe(userId);
    res.status(200).json({
        id: userData.id,
        name: userData.name,
        email: userData.email
    });
}
//# sourceMappingURL=auth.controller.js.map