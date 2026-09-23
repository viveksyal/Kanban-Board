import { prisma } from "../lib/prisma.js";
import { appError } from "../utils/error.utils.js";

type CreateCardType = {
    userId: string,
    title: string,
    description?: string
    listId: string
}


export async function createCard({userId, title, description, listId}: CreateCardType){
    const listData = await prisma.list.findFirst({
        where: {
            id: listId,
            board: {ownerId: userId}
        },
        select: {
            cards: {
                orderBy: {
                    order: "desc"
                },
                take: 1,
                select: {order: true}
            }
        }
    })

    if (listData === null){
        throw appError("List not found", 404)
    }

    const lastOrder = listData.cards[0]?.order ?? 0;
    const newOrder = lastOrder + 1000;
    const cardData = await prisma.card.create({
        data: {
            title,
            description: description ?? null,
            order: newOrder,
            listId: listId
        }
    });
    return cardData;
}