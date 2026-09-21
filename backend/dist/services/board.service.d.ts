type CreateBoardType = {
    userId: string;
    title: string;
};
export declare function createBoard({ userId, title }: CreateBoardType): Promise<{
    id: string;
    title: string;
    ownerId: string;
}>;
export declare function getBoards(userId: string): Promise<{
    id: string;
    title: string;
}[]>;
export {};
//# sourceMappingURL=board.service.d.ts.map