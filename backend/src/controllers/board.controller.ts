import type { Request, Response } from "express";
import { createBoard, deleteBoard, getBoard, getBoards, updateBoard } from "../services/board.service.js";


export async function createBoardController(req: Request, res: Response){
    const {title} = req.body;
    const userId = req.user.userId
    const boardData = await createBoard({userId,title});
    res.status(201).json({
        message: "Board created successfully",
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

export async function getBoardController(req: Request <{boardId: string}>, res: Response){
    const userId = req.user.userId;
    const boardId = req.params.boardId;
    const board = await getBoard({userId, boardId});
    res.status(200).json({
        message: "Board fetched successfully",
        board
    })
}
export async function updateBoardController(req: Request <{boardId: string}>, res: Response){
    const userId = req.user.userId;
    const boardId = req.params.boardId;
    const {title} = req.body;
    const board = await updateBoard({userId, boardId, title});
    res.status(200).json({
        message: "Board updated successfully",
        board
    })
}
export async function deleteBoardController(req: Request <{boardId: string}>, res: Response){
    const userId = req.user.userId;
    const boardId = req.params.boardId;
    const board = await deleteBoard({userId, boardId});
    res.status(200).json({
        message: "Board deleted successfully",
        board
    })
}