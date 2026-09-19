import {z} from "zod";
import type { NextFunction, Request, Response } from "express";


export function validate(schema: z.ZodType){
    return (req: Request, res: Response, next: NextFunction) => {
        const validation = schema.safeParse(req.body);
        if(!validation.success){
            res.status(400).json({
                error: validation.error.issues
            });
            return;
        }
        req.body = validation.data
        next();
}}