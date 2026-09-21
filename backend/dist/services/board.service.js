import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });
export async function createBoard({ userId, title }) {
    const boardData = await prisma.board.create({
        data: {
            title,
            ownerId: userId
        }
    });
    return boardData;
}
//# sourceMappingURL=board.service.js.map