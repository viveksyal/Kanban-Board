import { z } from "zod";
import type { NextFunction, Request, Response } from "express";
export declare function validate(schema: z.ZodType): (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=validate.middleware.d.ts.map