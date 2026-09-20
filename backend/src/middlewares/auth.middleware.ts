import type { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.utils.js";

type AuthPayload = {
    userId: string
}

export function authentication(req: Request, res: Response, next: NextFunction){
    const token = req.cookies['token'];
    if(!token){
        res.status(401).json({
            message: "Invalid token"
        });
        return;
    }
    const decoded: AuthPayload = verifyToken(token);
    const userId = decoded.userId;
    req.user = {userId};
    next();
}