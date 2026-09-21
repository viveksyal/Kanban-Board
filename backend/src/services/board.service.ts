import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";


type CreateBoardType = {
    userId: string,
    title: string
}

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

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