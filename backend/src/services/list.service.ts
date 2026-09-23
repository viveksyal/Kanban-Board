import { prisma } from "../lib/prisma.js";
import { appError } from "../utils/error.utils.js";

type CreateListType = {
    userId: string,
    title: string,
    boardId: string
}


export async function createList({userId, title, boardId}: CreateListType){
    const boardData = await prisma.board.findFirst({
        where: {id: boardId, ownerId: userId},
        select: {
            lists: {
                orderBy: {
                    order: "desc"
                },
                take: 1,
                select: {order: true}
            }
        }
    })

    if (boardData === null){
        throw appError("Board not found", 404)
    }

    const lastOrder = boardData.lists[0]?.order ?? 0;
    const newOrder = lastOrder + 1000;

    const listData = await prisma.list.create({
        data: {
            title,
            order: newOrder,
            boardId: boardId
        }
    });
    return listData;
}