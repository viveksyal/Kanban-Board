import jwt from "jsonwebtoken";
import "dotenv/config";
import { appError } from "./error.utils.js";
export function signToken(payload) {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw appError("Configuration error", 500);
    }
    return jwt.sign(payload, secret, { expiresIn: '7d' });
}
export function verifyToken(token) {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw appError("Configuration error", 500);
    }
    const decoded = jwt.verify(token, secret);
    if (!decoded.userId || typeof decoded.userId !== "string") {
        throw appError("Invalid token", 401);
    }
    return decoded;
}
//# sourceMappingURL=jwt.utils.js.map