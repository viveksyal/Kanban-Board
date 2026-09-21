import { prisma } from "../lib/prisma.js";


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