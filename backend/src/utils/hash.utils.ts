import bcrypt from "bcrypt"

export async function hashPassword(password: string){
    const salt = 10;
    return await bcrypt.hash(password, salt)
}

export async function comparePassword(plainPassword: string, hashedPassword: string){

    return await bcrypt.compare(plainPassword, hashedPassword);
}