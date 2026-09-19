import { hashPassword } from "../utils/hash.utils.js";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });


export async function registerUser(password: string, email: string,name: string){
    
    const userExists = await prisma.user.findUnique({
        where: {email},
        select: {id: true}
    });
    
    if (userExists){
        throw new Error ("Email is already registered")
    }
    
    const hashedPassword = await hashPassword(password);

    const newUser = await prisma.user.create({
        data: {
            email,
            password: hashedPassword,
            name
        }
    })
    return newUser;
}