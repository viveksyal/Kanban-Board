export type AppError = Error & {statusCode: number}

export function appError(message: string, statusCode: number){
    const error = new Error(message) as AppError;
    error.statusCode = statusCode;
    return error;
}