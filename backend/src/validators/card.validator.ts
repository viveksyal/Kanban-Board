import {z} from "zod";

export const CardSchema = z.object({
        title: z.string().trim().min(1).max(100),
        description: z.string().trim().optional()
})

export const UpdateCardSchema = z.object({
        title: z.string().trim().min(1).max(100).optional(),
        description: z.string().trim().optional()
}).refine(
        data => data.title !== undefined || data.description !== undefined
)

export const CardParamsSchema = z.object({
        cardId: z.string().trim()
})