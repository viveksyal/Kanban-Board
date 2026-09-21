import { comparePassword, hashPassword } from "../utils/hash.utils.js";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { appError } from "../utils/error.utils.js";
import { signToken } from "../utils/jwt.utils.js";
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
export async function loginUser({ email, password }) {
    const userExists = await prisma.user.findUnique({
        where: { email },
        select: { password: true, id: true }
    });
    if (!userExists) {
        throw appError("Invalid credentials", 401);
    }
    const isPasswordCorrect = await comparePassword(password, userExists.password);
    if (!isPasswordCorrect) {
        throw appError("Invalid credentials", 401);
    }
    return signToken({ userId: userExists.id });
}
export async function getMe(userId) {
    const userData = await prisma.user.findUnique({
        where: { id: userId },
        select: { id: true, name: true, email: true }
    });
    if (userData === null) {
        throw appError("Invalid session", 401);
    }
    return userData;
}
//# sourceMappingURL=auth.service.js.map