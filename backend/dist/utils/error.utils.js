export function appError(message, statusCode) {
    const error = new Error(message);
    error.statusCode = statusCode;
    return error;
}
//# sourceMappingURL=error.utils.js.map