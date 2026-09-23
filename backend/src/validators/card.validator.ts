import {z} from "zod";

export const CardSchema = z.object({
        title: z.string().trim().min(1).max(100),
        description: z.string().trim().optional()
})

export const CardParamsSchema = z.object({
        listId: z.string().trim()
})