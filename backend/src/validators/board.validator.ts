import {z} from "zod";

export const BoardSchema = z.object({
        title: z.string().trim().min(1).max(100),
})