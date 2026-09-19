import type { Request, Response, NextFunction } from "express";
import type { AppError } from "../utils/error.utils.js";

export function errorHandler(
    error: AppError,
    req: Request,
    res: Response,
    next: NextFunction
) {

    console.error("Global error: ", error);

    if (error.statusCode){
        res.status(error.statusCode).json({
            error: error.message
        });
        return;
    }



    res.status(500).json({
        error: "Internal server error"
    });

}