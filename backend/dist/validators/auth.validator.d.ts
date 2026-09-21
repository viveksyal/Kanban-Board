import { z } from "zod";
export declare const RegisterSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    name: z.ZodString;
}, z.core.$strip>;
export declare const LoginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export declare const BoardSchema: z.ZodObject<{
    title: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=auth.validator.d.ts.map