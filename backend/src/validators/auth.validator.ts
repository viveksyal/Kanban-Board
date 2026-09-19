import {z} from "zod";

export const RegisterSchema = z.object({
        email: z.string().email({message: "Invalid email format"}).trim(),
        password: z.string().min(8),
        name: z.string().trim()
    })