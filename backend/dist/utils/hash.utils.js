import bcrypt from "bcrypt";
import "dotenv/config";
export async function hashPassword(password) {
    const salt = Number(process.env.SALT) || 10;
    return await bcrypt.hash(password, salt);
}
export async function comparePassword(plainPassword, hashedPassword) {
    return await bcrypt.compare(plainPassword, hashedPassword);
}
//# sourceMappingURL=hash.utils.js.map