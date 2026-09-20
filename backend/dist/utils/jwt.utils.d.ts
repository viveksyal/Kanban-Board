import "dotenv/config";
type AuthPayload = {
    userId: string;
};
export declare function signToken(payload: {
    userId: string;
}): string;
export declare function verifyToken(token: string): AuthPayload;
export {};
//# sourceMappingURL=jwt.utils.d.ts.map