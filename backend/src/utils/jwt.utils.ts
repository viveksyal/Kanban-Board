import jwt from "jsonwebtoken";
import "dotenv/config";
import { appError } from "./error.utils.js";

type AuthPayload = {
    userId: string
}

export function signToken(payload: {userId: string}){
    const secret = process.env.JWT_SECRET;
    if(!secret){
        throw appError("Configuration error", 500);
    }
    return jwt.sign(payload, secret, {expiresIn: '7d'});
    
}
export function verifyToken(token: string){
    const secret = process.env.JWT_SECRET;
    if(!secret){
        throw appError("Configuration error", 500);
    }
    const decoded =  jwt.verify(token, secret) as AuthPayload;

    if (!decoded.userId || typeof decoded.userId !== "string"){
        throw appError("Invalid token", 401)
    }
    return decoded;
}