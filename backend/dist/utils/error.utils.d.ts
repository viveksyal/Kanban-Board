export type AppError = Error & {
    statusCode: number;
};
export declare function appError(message: string, statusCode: number): AppError;
//# sourceMappingURL=error.utils.d.ts.map