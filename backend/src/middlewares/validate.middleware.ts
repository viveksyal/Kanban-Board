import {z} from "zod";
import type { NextFunction, Request, Response } from "express";

type ValidationSource = "body" | "params" | "query";


export function validate(schema: z.ZodType, source: ValidationSource){
    return (req: Request, res: Response, next: NextFunction) => {
        const validation = schema.safeParse(req[source]);
        if(!validation.success){
            res.status(400).json({
                error: validation.error.issues
            });
            return;
        }
        req[source] = validation.data
        next();
}}