import { prisma } from "../lib/prisma.js";
import { appError } from "../utils/error.utils.js";

type CreateListType = {
    userId: string,
    title: string,
    boardId: string
}

type UpdateListType = {
    userId: string,
    title: string,
    listId: string
}

type GetListType = {
    userId: string,
    boardId: string
}

type DeleteListType = {
    userId: string,
    listId: string
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


export async function getLists({userId, boardId}: GetListType){
    const boardData = await prisma.board.findFirst({
        where: {id: boardId, ownerId: userId},
        select: {
            lists: {
                orderBy: {
                    order: "asc"
                },
                select: {id: true, title: true,order: true}
            }
        }
    })

    if (boardData === null){
        throw appError("Board not found", 404)
    }

    return boardData.lists;
}

export async function updateList({userId, title, listId}: UpdateListType){
    const listExists = await prisma.list.findFirst({
        where: {
            id: listId,
            board: {
                ownerId: userId
            }
        },
        select : {id: true}
    })

    if (listExists === null){
        throw appError("List not found", 404)
    }

    const list = await prisma.list.update({
        where: {id: listId},
        data: {title: title}
    })

    return list;
}

export async function deleteList({userId, listId}: DeleteListType){
    const listExists = await prisma.list.findFirst({
        where: {
            id: listId,
            board: {
                ownerId: userId
            }
        },
        select : {id: true}
    })

    if (listExists === null){
        throw appError("List not found", 404)
    }

    const list = await prisma.list.delete({
        where: {id: listId},
        select: {id: true, title: true, order: true}
    })

    return list;
}