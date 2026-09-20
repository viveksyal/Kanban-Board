import { verifyToken } from "../utils/jwt.utils.js";
export function authentication(req, res, next) {
    const token = req.cookies['token'];
    if (!token) {
        res.status(401).json({
            message: "Invalid token"
        });
        return;
    }
    const decoded = verifyToken(token);
    const userId = decoded.userId;
    req.user = { userId };
    next();
}
//# sourceMappingURL=auth.middleware.js.map