import bcrypt from "bcrypt"
import "dotenv/config";

export async function hashPassword(password: string){
    const salt = Number(process.env.SALT) || 10;
    return await bcrypt.hash(password, salt)
}

export async function comparePassword(plainPassword: string, hashedPassword: string){

    return await bcrypt.compare(plainPassword, hashedPassword);

}