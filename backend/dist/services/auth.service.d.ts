type RegisterUserType = {
    email: string;
    password: string;
    name: string;
};
export declare function registerUser({ email, password, name }: RegisterUserType): Promise<{
    id: string;
    email: string;
    password: string;
    name: string;
}>;
export {};
//# sourceMappingURL=auth.service.d.ts.map