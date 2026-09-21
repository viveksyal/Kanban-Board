import {z} from "zod";

export const RegisterSchema = z.object({
        email: z.string().email({message: "Invalid email format"}).trim(),
        password: z.string().min(8).max(72),
        name: z.string().trim().min(1).max(32)
})

export const LoginSchema = z.object({
        email: z.string().email({message: "Invalid email format"}).trim(),
        password: z.string().min(8)
})
