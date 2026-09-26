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

type ReorderListType = {
    userId: string,
    currentListId: string,
    previousListId: string | null,
    nextListId: string | null
}


export async function createList({ userId, title, boardId }: CreateListType) {
    const boardData = await prisma.board.findFirst({
        where: { id: boardId, ownerId: userId },
        select: {
            lists: {
                orderBy: {
                    order: "desc"
                },
                take: 1,
                select: { order: true }
            }
        }
    })

    if (boardData === null) {
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


export async function getLists({ userId, boardId }: GetListType) {
    const boardData = await prisma.board.findFirst({
        where: { id: boardId, ownerId: userId },
        select: {
            lists: {
                orderBy: {
                    order: "asc"
                },
                select: { id: true, title: true, order: true }
            }
        }
    })

    if (boardData === null) {
        throw appError("Board not found", 404)
    }

    return boardData.lists;
}

export async function updateList({ userId, title, listId }: UpdateListType) {
    const listExists = await prisma.list.findFirst({
        where: {
            id: listId,
            board: {
                ownerId: userId
            }
        },
        select: { id: true }
    })

    if (listExists === null) {
        throw appError("List not found", 404)
    }

    const list = await prisma.list.update({
        where: { id: listId },
        data: { title: title }
    })

    return list;
}

export async function deleteList({ userId, listId }: DeleteListType) {
    const listExists = await prisma.list.findFirst({
        where: {
            id: listId,
            board: {
                ownerId: userId
            }
        },
        select: { id: true }
    })

    if (listExists === null) {
        throw appError("List not found", 404)
    }

    const list = await prisma.list.delete({
        where: { id: listId },
        select: { id: true, title: true, order: true }
    })

    return list;
}

export async function reorderList({ userId, previousListId, currentListId, nextListId }: ReorderListType) {
    const listIds = [previousListId, currentListId, nextListId].filter(id => id != null)
    
    const lists = await prisma.list.findMany({
        where: {board:{ ownerId: userId }, id: {in: listIds}},
        select: {id: true, order: true, boardId: true}
    })

    const currentList = lists.find(
        list => list.id === currentListId
    );

    const previousList = lists.find(
        list => list.id === previousListId
    );
    
    const nextList = lists.find(
        list => list.id === nextListId
    );
    
    if (!currentList) {
        throw appError("Current list not found", 404);
    }

    if (!previousList && nextList !== undefined) {
        throw appError("Previous list not found", 404);
    }

    if (!nextList && previousList !== undefined) {
        throw appError("Next list not found", 404);
    }

    if ((previousList && previousList.boardId !== currentList.boardId) || (nextList && nextList.boardId !== currentList.boardId)) {
        throw appError("Lists must belong to the same board", 400);
    }

    let newOrder: number;

    if(!previousList){ 
        newOrder = nextList!.order/2;
    } else if(!nextList){
        newOrder = previousList.order + 1000;
    } else{
        newOrder = (previousList.order + nextList.order)/2;
    }

    const updatedList = await prisma.list.update({
        where: {id: currentListId},
        data: {
            order: newOrder
        }
    });
    return updatedList;
}