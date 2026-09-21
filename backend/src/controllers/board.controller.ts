import type { Request, Response } from "express";
import { createBoard, getBoards } from "../services/board.service.js";


export async function createBoardController(req: Request, res: Response){
    const {title} = req.body;
    const userId = req.user.userId
    const boardData = await createBoard({userId,title});
    res.status(201).json({
        message: "board created successfully",
        id: boardData.id,
        title: boardData.title,
        ownerId: boardData.ownerId
    })
}

export async function getBoardsController(req: Request, res: Response){
    const userId = req.user.userId;
    const boards = await getBoards(userId);
    res.status(200).json({
        message: "Boards fetched successfully",
        boards
    })
}