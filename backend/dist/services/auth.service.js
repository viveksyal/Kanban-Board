import { hashPassword } from "../utils/hash.utils.js";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { appError } from "../utils/error.utils.js";
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });
export async function registerUser({ email, password, name }) {
    const userExists = await prisma.user.findUnique({
        where: { email },
        select: { id: true }
    });
    if (userExists) {
        throw appError("Email is already registered", 409);
    }
    const hashedPassword = await hashPassword(password);
    const newUser = await prisma.user.create({
        data: {
            email,
            password: hashedPassword,
            name
        }
    });
    return newUser;
}
//# sourceMappingURL=auth.service.js.map