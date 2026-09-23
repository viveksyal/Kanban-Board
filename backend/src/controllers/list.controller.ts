import type { Request, Response } from "express";
import { createList, getLists } from "../services/list.service.js";


export async function createListController(req: Request <{boardId: string}>, res: Response){
    const {title} = req.body;
    const userId = req.user.userId
    const boardId = req.params.boardId
    const listData = await createList({userId, title, boardId});
    res.status(201).json({
        message: "List created successfully",
        id: listData.id,
        title: listData.title,
        order: listData.order,
        boardId: listData.boardId
    })
}

export async function getListsController(req: Request <{boardId: string}>, res: Response){
    const userId = req.user.userId
    const boardId = req.params.boardId
    const lists = await getLists({userId, boardId});
    res.status(200).json({
        message: "Lists fetched successfully",
        lists
    })
}

export async function updateListController(req: Request <{boardId: string}>, res: Response){
    const {title} = req.body;
    const userId = req.user.userId
    const boardId = req.params.boardId
    const listData = await createList({userId, title, boardId});
    res.status(201).json({
        message: "List created successfully",
        id: listData.id,
        title: listData.title,
        order: listData.order,
        boardId: listData.boardId
    })
}