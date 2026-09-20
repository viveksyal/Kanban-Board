type RegisterUserType = {
    email: string;
    password: string;
    name: string;
};
type LoginUserType = {
    email: string;
    password: string;
};
export declare function registerUser({ email, password, name }: RegisterUserType): Promise<{
    id: string;
    email: string;
    password: string;
    name: string;
}>;
export declare function loginUser({ email, password }: LoginUserType): Promise<string>;
export {};
//# sourceMappingURL=auth.service.d.ts.map