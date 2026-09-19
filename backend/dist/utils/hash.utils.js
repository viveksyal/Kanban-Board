import bcrypt from "bcrypt";
export async function hashPassword(password) {
    const salt = 10;
    return await bcrypt.hash(password, salt);
}
export async function comparePassword(plainPassword, hashedPassword) {
    return await bcrypt.compare(plainPassword, hashedPassword);
}
//# sourceMappingURL=hash.utils.js.map