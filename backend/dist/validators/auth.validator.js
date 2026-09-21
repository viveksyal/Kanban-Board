import { time } from "console";
import { z } from "zod";
import { describe } from "zod/v4/core";
export const RegisterSchema = z.object({
    email: z.string().email({ message: "Invalid email format" }).trim(),
    password: z.string().min(8).max(16),
    name: z.string().trim().min(1).max(32)
});
export const LoginSchema = z.object({
    email: z.string().email({ message: "Invalid email format" }).trim(),
    password: z.string().min(8)
});
export const BoardSchema = z.object({
    title: z.string().trim().min(1).max(100),
});
//# sourceMappingURL=auth.validator.js.map