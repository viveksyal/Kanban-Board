import { comparePassword, hashPassword } from "../utils/hash.utils.js";
import { appError } from "../utils/error.utils.js";
import { signToken } from "../utils/jwt.utils.js";
import { prisma } from "../lib/prisma.js";

type RegisterUserType = {
    email: string,
    password: string,
    name: string
}

type LoginUserType = {
    email: string,
    password: string,
}


export async function registerUser({email, password, name}: RegisterUserType){
    
    const userExists = await prisma.user.findUnique({
        where: {email},
        select: {id: true}
    });
    
    if (userExists){
        throw appError("Email is already registered", 409);
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

export async function loginUser({email, password}: LoginUserType){
    const userExists = await prisma.user.findUnique({
        where: {email},
        select: {password: true, id: true}
    });

    if (!userExists){
        throw appError("Invalid credentials", 401);
    }
    const isPasswordCorrect = await comparePassword(password, userExists.password)
    if (!isPasswordCorrect){
        throw appError("Invalid credentials", 401);
    }
    return signToken({userId: userExists.id});
}
export async function getMe(userId: string){
    const userData = await prisma.user.findUnique({
        where: {id: userId},
        select: {id: true, name: true, email: true}
    });
    if (userData === null){
        throw appError("Invalid session", 401);
    }
    return userData;
}