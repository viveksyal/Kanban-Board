import { prisma } from "../lib/prisma.js";
import { appError } from "../utils/error.utils.js";


type CreateBoardType = {
    userId: string,
    title: string
}


export async function createBoard({userId, title}: CreateBoardType){
    const boardData = await prisma.board.create({
        data: {
            title,
            ownerId: userId
        }
    });
    return boardData;
}

export async function getBoards(userId: string){
    const boards = await prisma.board.findMany({
        where: {ownerId: userId},
        select: {id: true, title: true}
    });
    return boards;
}

export async function getBoard({userId, boardId}: {userId: string, boardId: string}){
    const board = await prisma.board.findFirst({
        where: {ownerId: userId, id: boardId},
        select: {id: true, title: true}
    });
    if (board === null){
        throw appError("Board not found", 404);
    }
    return board;
}

export async function updateBoard({userId, boardId, title}: {userId: string, boardId: string, title: string}){
    const boardExists = await prisma.board.findFirst({
        where: {ownerId: userId, id: boardId},
        select: {id: true, title: true}
    });
    if (boardExists === null){
        throw appError("Board not found", 404);
    }
    const board = await prisma.board.update({
        where: {id: boardId},
        data: {title: title},
        select: {id: true, title: true}
    });
    return board;
}