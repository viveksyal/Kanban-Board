import { prisma } from "../lib/prisma.js";
import { appError } from "../utils/error.utils.js";

type CardType = {
    userId: string,
    title: string,
    description?: string
    listId: string
}

type UpdateCardType = {
    userId: string,
    title?: string,
    description?: string
    cardId: string
}

type DeleteCardType = {
    userId: string,
    cardId: string
}

type GetCardsType = {
    userId: string,
    listId: string
}


export async function createCard({userId, title, description, listId}: CardType){
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

export async function getCards({userId, listId}: GetCardsType){
    const listData = await prisma.list.findFirst({
        where: {
            id: listId,
            board: {ownerId: userId}
        },
        select: {
            cards: {
                orderBy: {
                    order: "asc"
                },
                select: {id: true, title: true, description:true, order: true,}
            }
        }
    })

    if (listData === null){
        throw appError("List not found", 404)
    }

    return listData.cards;
}

export async function updateCard({userId, title, description, cardId}: UpdateCardType){
    const data: { title?: string; description?: string } = {};

    const cardExists = await prisma.card.findFirst({
        where: {
            id: cardId,
            list: {
                board: {ownerId: userId}
            }
        },
        select : {id: true}
    })

    if (cardExists === null){
        throw appError("Card not found", 404)
    }

    if (title !== undefined) {
        data.title = title;
    }

    if (description !== undefined) {
        data.description = description;
    }

    const card = await prisma.card.update({
        where: {id: cardId},
        data
    })

    return card;
}

export async function deleteCard({userId, cardId}: DeleteCardType){

    const cardExists = await prisma.card.findFirst({
        where: {
            id: cardId,
            list: {
                board: {ownerId: userId}
            }
        },
        select : {id: true}
    })

    if (cardExists === null){
        throw appError("Card not found", 404)
    }

    const card = await prisma.card.delete({
        where: {id: cardId},
        select: {id: true, title: true, description: true, order: true}
    })

    return card;
}