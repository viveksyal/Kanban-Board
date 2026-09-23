import type { Request, Response } from "express";
import { createCard } from "../services/card.service.js";


export async function createCardController(req: Request <{listId: string}>, res: Response){
    const {title, description} = req.body;
    const userId = req.user.userId
    const listId = req.params.listId
    const cardData = await createCard({userId, title, description, listId});
    res.status(201).json({
        message: "Card created successfully",
        id: cardData.id,
        title: cardData.title,
        description: cardData.description,
        order: cardData.order
    })
}