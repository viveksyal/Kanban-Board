import { z } from "zod";
export function validate(schema) {
    return (req, res, next) => {
        const validation = schema.safeParse(req.body);
        if (!validation.success) {
            res.status(400).json({
                error: validation.error.issues
            });
            return;
        }
        req.body = validation.data;
        next();
    };
}
//# sourceMappingURL=validate.middleware.js.map