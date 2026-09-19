export function errorHandler(error, req, res, next) {
    console.error("Global error: ", error);
    if (error.statusCode) {
        res.status(error.statusCode).json({
            error: error.message
        });
        return;
    }
    res.status(500).json({
        error: "Internal server error"
    });
}
//# sourceMappingURL=error.middleware.js.map