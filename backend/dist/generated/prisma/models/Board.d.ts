import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Board
 *
 */
export type BoardModel = runtime.Types.Result.DefaultSelection<Prisma.$BoardPayload>;
export type AggregateBoard = {
    _count: BoardCountAggregateOutputType | null;
    _min: BoardMinAggregateOutputType | null;
    _max: BoardMaxAggregateOutputType | null;
};
export type BoardMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    ownerId: string | null;
};
export type BoardMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    ownerId: string | null;
};
export type BoardCountAggregateOutputType = {
    id: number;
    title: number;
    ownerId: number;
    _all: number;
};
export type BoardMinAggregateInputType = {
    id?: true;
    title?: true;
    ownerId?: true;
};
export type BoardMaxAggregateInputType = {
    id?: true;
    title?: true;
    ownerId?: true;
};
export type BoardCountAggregateInputType = {
    id?: true;
    title?: true;
    ownerId?: true;
    _all?: true;
};
export type BoardAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Board to aggregate.
     */
    where?: Prisma.BoardWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Boards to fetch.
     */
    orderBy?: Prisma.BoardOrderByWithRelationInput | Prisma.BoardOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.BoardWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Boards.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Boards
    **/
    _count?: true | BoardCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: BoardMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: BoardMaxAggregateInputType;
};
export type GetBoardAggregateType<T extends BoardAggregateArgs> = {
    [P in keyof T & keyof AggregateBoard]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBoard[P]> : Prisma.GetScalarType<T[P], AggregateBoard[P]>;
};
export type BoardGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BoardWhereInput;
    orderBy?: Prisma.BoardOrderByWithAggregationInput | Prisma.BoardOrderByWithAggregationInput[];
    by: Prisma.BoardScalarFieldEnum[] | Prisma.BoardScalarFieldEnum;
    having?: Prisma.BoardScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BoardCountAggregateInputType | true;
    _min?: BoardMinAggregateInputType;
    _max?: BoardMaxAggregateInputType;
};
export type BoardGroupByOutputType = {
    id: string;
    title: string;
    ownerId: string;
    _count: BoardCountAggregateOutputType | null;
    _min: BoardMinAggregateOutputType | null;
    _max: BoardMaxAggregateOutputType | null;
};
export type GetBoardGroupByPayload<T extends BoardGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BoardGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BoardGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BoardGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BoardGroupByOutputType[P]>;
}>>;
export type BoardWhereInput = {
    AND?: Prisma.BoardWhereInput | Prisma.BoardWhereInput[];
    OR?: Prisma.BoardWhereInput[];
    NOT?: Prisma.BoardWhereInput | Prisma.BoardWhereInput[];
    id?: Prisma.StringFilter<"Board"> | string;
    title?: Prisma.StringFilter<"Board"> | string;
    ownerId?: Prisma.StringFilter<"Board"> | string;
    owner?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    lists?: Prisma.ListListRelationFilter;
};
export type BoardOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    owner?: Prisma.UserOrderByWithRelationInput;
    lists?: Prisma.ListOrderByRelationAggregateInput;
};
export type BoardWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.BoardWhereInput | Prisma.BoardWhereInput[];
    OR?: Prisma.BoardWhereInput[];
    NOT?: Prisma.BoardWhereInput | Prisma.BoardWhereInput[];
    title?: Prisma.StringFilter<"Board"> | string;
    ownerId?: Prisma.StringFilter<"Board"> | string;
    owner?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    lists?: Prisma.ListListRelationFilter;
}, "id">;
export type BoardOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    _count?: Prisma.BoardCountOrderByAggregateInput;
    _max?: Prisma.BoardMaxOrderByAggregateInput;
    _min?: Prisma.BoardMinOrderByAggregateInput;
};
export type BoardScalarWhereWithAggregatesInput = {
    AND?: Prisma.BoardScalarWhereWithAggregatesInput | Prisma.BoardScalarWhereWithAggregatesInput[];
    OR?: Prisma.BoardScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BoardScalarWhereWithAggregatesInput | Prisma.BoardScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Board"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Board"> | string;
    ownerId?: Prisma.StringWithAggregatesFilter<"Board"> | string;
};
export type BoardCreateInput = {
    id?: string;
    title: string;
    owner: Prisma.UserCreateNestedOneWithoutBoardsInput;
    lists?: Prisma.ListCreateNestedManyWithoutBoardInput;
};
export type BoardUncheckedCreateInput = {
    id?: string;
    title: string;
    ownerId: string;
    lists?: Prisma.ListUncheckedCreateNestedManyWithoutBoardInput;
};
export type BoardUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    owner?: Prisma.UserUpdateOneRequiredWithoutBoardsNestedInput;
    lists?: Prisma.ListUpdateManyWithoutBoardNestedInput;
};
export type BoardUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    lists?: Prisma.ListUncheckedUpdateManyWithoutBoardNestedInput;
};
export type BoardCreateManyInput = {
    id?: string;
    title: string;
    ownerId: string;
};
export type BoardUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BoardUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BoardListRelationFilter = {
    every?: Prisma.BoardWhereInput;
    some?: Prisma.BoardWhereInput;
    none?: Prisma.BoardWhereInput;
};
export type BoardOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BoardCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
};
export type BoardMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
};
export type BoardMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
};
export type BoardScalarRelationFilter = {
    is?: Prisma.BoardWhereInput;
    isNot?: Prisma.BoardWhereInput;
};
export type BoardCreateNestedManyWithoutOwnerInput = {
    create?: Prisma.XOR<Prisma.BoardCreateWithoutOwnerInput, Prisma.BoardUncheckedCreateWithoutOwnerInput> | Prisma.BoardCreateWithoutOwnerInput[] | Prisma.BoardUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.BoardCreateOrConnectWithoutOwnerInput | Prisma.BoardCreateOrConnectWithoutOwnerInput[];
    createMany?: Prisma.BoardCreateManyOwnerInputEnvelope;
    connect?: Prisma.BoardWhereUniqueInput | Prisma.BoardWhereUniqueInput[];
};
export type BoardUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: Prisma.XOR<Prisma.BoardCreateWithoutOwnerInput, Prisma.BoardUncheckedCreateWithoutOwnerInput> | Prisma.BoardCreateWithoutOwnerInput[] | Prisma.BoardUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.BoardCreateOrConnectWithoutOwnerInput | Prisma.BoardCreateOrConnectWithoutOwnerInput[];
    createMany?: Prisma.BoardCreateManyOwnerInputEnvelope;
    connect?: Prisma.BoardWhereUniqueInput | Prisma.BoardWhereUniqueInput[];
};
export type BoardUpdateManyWithoutOwnerNestedInput = {
    create?: Prisma.XOR<Prisma.BoardCreateWithoutOwnerInput, Prisma.BoardUncheckedCreateWithoutOwnerInput> | Prisma.BoardCreateWithoutOwnerInput[] | Prisma.BoardUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.BoardCreateOrConnectWithoutOwnerInput | Prisma.BoardCreateOrConnectWithoutOwnerInput[];
    upsert?: Prisma.BoardUpsertWithWhereUniqueWithoutOwnerInput | Prisma.BoardUpsertWithWhereUniqueWithoutOwnerInput[];
    createMany?: Prisma.BoardCreateManyOwnerInputEnvelope;
    set?: Prisma.BoardWhereUniqueInput | Prisma.BoardWhereUniqueInput[];
    disconnect?: Prisma.BoardWhereUniqueInput | Prisma.BoardWhereUniqueInput[];
    delete?: Prisma.BoardWhereUniqueInput | Prisma.BoardWhereUniqueInput[];
    connect?: Prisma.BoardWhereUniqueInput | Prisma.BoardWhereUniqueInput[];
    update?: Prisma.BoardUpdateWithWhereUniqueWithoutOwnerInput | Prisma.BoardUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?: Prisma.BoardUpdateManyWithWhereWithoutOwnerInput | Prisma.BoardUpdateManyWithWhereWithoutOwnerInput[];
    deleteMany?: Prisma.BoardScalarWhereInput | Prisma.BoardScalarWhereInput[];
};
export type BoardUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: Prisma.XOR<Prisma.BoardCreateWithoutOwnerInput, Prisma.BoardUncheckedCreateWithoutOwnerInput> | Prisma.BoardCreateWithoutOwnerInput[] | Prisma.BoardUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.BoardCreateOrConnectWithoutOwnerInput | Prisma.BoardCreateOrConnectWithoutOwnerInput[];
    upsert?: Prisma.BoardUpsertWithWhereUniqueWithoutOwnerInput | Prisma.BoardUpsertWithWhereUniqueWithoutOwnerInput[];
    createMany?: Prisma.BoardCreateManyOwnerInputEnvelope;
    set?: Prisma.BoardWhereUniqueInput | Prisma.BoardWhereUniqueInput[];
    disconnect?: Prisma.BoardWhereUniqueInput | Prisma.BoardWhereUniqueInput[];
    delete?: Prisma.BoardWhereUniqueInput | Prisma.BoardWhereUniqueInput[];
    connect?: Prisma.BoardWhereUniqueInput | Prisma.BoardWhereUniqueInput[];
    update?: Prisma.BoardUpdateWithWhereUniqueWithoutOwnerInput | Prisma.BoardUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?: Prisma.BoardUpdateManyWithWhereWithoutOwnerInput | Prisma.BoardUpdateManyWithWhereWithoutOwnerInput[];
    deleteMany?: Prisma.BoardScalarWhereInput | Prisma.BoardScalarWhereInput[];
};
export type BoardCreateNestedOneWithoutListsInput = {
    create?: Prisma.XOR<Prisma.BoardCreateWithoutListsInput, Prisma.BoardUncheckedCreateWithoutListsInput>;
    connectOrCreate?: Prisma.BoardCreateOrConnectWithoutListsInput;
    connect?: Prisma.BoardWhereUniqueInput;
};
export type BoardUpdateOneRequiredWithoutListsNestedInput = {
    create?: Prisma.XOR<Prisma.BoardCreateWithoutListsInput, Prisma.BoardUncheckedCreateWithoutListsInput>;
    connectOrCreate?: Prisma.BoardCreateOrConnectWithoutListsInput;
    upsert?: Prisma.BoardUpsertWithoutListsInput;
    connect?: Prisma.BoardWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BoardUpdateToOneWithWhereWithoutListsInput, Prisma.BoardUpdateWithoutListsInput>, Prisma.BoardUncheckedUpdateWithoutListsInput>;
};
export type BoardCreateWithoutOwnerInput = {
    id?: string;
    title: string;
    lists?: Prisma.ListCreateNestedManyWithoutBoardInput;
};
export type BoardUncheckedCreateWithoutOwnerInput = {
    id?: string;
    title: string;
    lists?: Prisma.ListUncheckedCreateNestedManyWithoutBoardInput;
};
export type BoardCreateOrConnectWithoutOwnerInput = {
    where: Prisma.BoardWhereUniqueInput;
    create: Prisma.XOR<Prisma.BoardCreateWithoutOwnerInput, Prisma.BoardUncheckedCreateWithoutOwnerInput>;
};
export type BoardCreateManyOwnerInputEnvelope = {
    data: Prisma.BoardCreateManyOwnerInput | Prisma.BoardCreateManyOwnerInput[];
    skipDuplicates?: boolean;
};
export type BoardUpsertWithWhereUniqueWithoutOwnerInput = {
    where: Prisma.BoardWhereUniqueInput;
    update: Prisma.XOR<Prisma.BoardUpdateWithoutOwnerInput, Prisma.BoardUncheckedUpdateWithoutOwnerInput>;
    create: Prisma.XOR<Prisma.BoardCreateWithoutOwnerInput, Prisma.BoardUncheckedCreateWithoutOwnerInput>;
};
export type BoardUpdateWithWhereUniqueWithoutOwnerInput = {
    where: Prisma.BoardWhereUniqueInput;
    data: Prisma.XOR<Prisma.BoardUpdateWithoutOwnerInput, Prisma.BoardUncheckedUpdateWithoutOwnerInput>;
};
export type BoardUpdateManyWithWhereWithoutOwnerInput = {
    where: Prisma.BoardScalarWhereInput;
    data: Prisma.XOR<Prisma.BoardUpdateManyMutationInput, Prisma.BoardUncheckedUpdateManyWithoutOwnerInput>;
};
export type BoardScalarWhereInput = {
    AND?: Prisma.BoardScalarWhereInput | Prisma.BoardScalarWhereInput[];
    OR?: Prisma.BoardScalarWhereInput[];
    NOT?: Prisma.BoardScalarWhereInput | Prisma.BoardScalarWhereInput[];
    id?: Prisma.StringFilter<"Board"> | string;
    title?: Prisma.StringFilter<"Board"> | string;
    ownerId?: Prisma.StringFilter<"Board"> | string;
};
export type BoardCreateWithoutListsInput = {
    id?: string;
    title: string;
    owner: Prisma.UserCreateNestedOneWithoutBoardsInput;
};
export type BoardUncheckedCreateWithoutListsInput = {
    id?: string;
    title: string;
    ownerId: string;
};
export type BoardCreateOrConnectWithoutListsInput = {
    where: Prisma.BoardWhereUniqueInput;
    create: Prisma.XOR<Prisma.BoardCreateWithoutListsInput, Prisma.BoardUncheckedCreateWithoutListsInput>;
};
export type BoardUpsertWithoutListsInput = {
    update: Prisma.XOR<Prisma.BoardUpdateWithoutListsInput, Prisma.BoardUncheckedUpdateWithoutListsInput>;
    create: Prisma.XOR<Prisma.BoardCreateWithoutListsInput, Prisma.BoardUncheckedCreateWithoutListsInput>;
    where?: Prisma.BoardWhereInput;
};
export type BoardUpdateToOneWithWhereWithoutListsInput = {
    where?: Prisma.BoardWhereInput;
    data: Prisma.XOR<Prisma.BoardUpdateWithoutListsInput, Prisma.BoardUncheckedUpdateWithoutListsInput>;
};
export type BoardUpdateWithoutListsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    owner?: Prisma.UserUpdateOneRequiredWithoutBoardsNestedInput;
};
export type BoardUncheckedUpdateWithoutListsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BoardCreateManyOwnerInput = {
    id?: string;
    title: string;
};
export type BoardUpdateWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    lists?: Prisma.ListUpdateManyWithoutBoardNestedInput;
};
export type BoardUncheckedUpdateWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    lists?: Prisma.ListUncheckedUpdateManyWithoutBoardNestedInput;
};
export type BoardUncheckedUpdateManyWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
};
/**
 * Count Type BoardCountOutputType
 */
export type BoardCountOutputType = {
    lists: number;
};
export type BoardCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lists?: boolean | BoardCountOutputTypeCountListsArgs;
};
/**
 * BoardCountOutputType without action
 */
export type BoardCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardCountOutputType
     */
    select?: Prisma.BoardCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * BoardCountOutputType without action
 */
export type BoardCountOutputTypeCountListsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ListWhereInput;
};
export type BoardSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    ownerId?: boolean;
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    lists?: boolean | Prisma.Board$listsArgs<ExtArgs>;
    _count?: boolean | Prisma.BoardCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["board"]>;
export type BoardSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    ownerId?: boolean;
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["board"]>;
export type BoardSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    ownerId?: boolean;
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["board"]>;
export type BoardSelectScalar = {
    id?: boolean;
    title?: boolean;
    ownerId?: boolean;
};
export type BoardOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "ownerId", ExtArgs["result"]["board"]>;
export type BoardInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    lists?: boolean | Prisma.Board$listsArgs<ExtArgs>;
    _count?: boolean | Prisma.BoardCountOutputTypeDefaultArgs<ExtArgs>;
};
export type BoardIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type BoardIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $BoardPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Board";
    objects: {
        owner: Prisma.$UserPayload<ExtArgs>;
        lists: Prisma.$ListPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        ownerId: string;
    }, ExtArgs["result"]["board"]>;
    composites: {};
};
export type BoardGetPayload<S extends boolean | null | undefined | BoardDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BoardPayload, S>;
export type BoardCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BoardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BoardCountAggregateInputType | true;
};
export interface BoardDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Board'];
        meta: {
            name: 'Board';
        };
    };
    /**
     * Find zero or one Board that matches the filter.
     * @param {BoardFindUniqueArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BoardFindUniqueArgs>(args: Prisma.SelectSubset<T, BoardFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BoardClient<runtime.Types.Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Board that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BoardFindUniqueOrThrowArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BoardFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BoardFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BoardClient<runtime.Types.Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Board that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindFirstArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BoardFindFirstArgs>(args?: Prisma.SelectSubset<T, BoardFindFirstArgs<ExtArgs>>): Prisma.Prisma__BoardClient<runtime.Types.Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Board that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindFirstOrThrowArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BoardFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BoardFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BoardClient<runtime.Types.Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Boards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Boards
     * const boards = await prisma.board.findMany()
     *
     * // Get first 10 Boards
     * const boards = await prisma.board.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const boardWithIdOnly = await prisma.board.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BoardFindManyArgs>(args?: Prisma.SelectSubset<T, BoardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Board.
     * @param {BoardCreateArgs} args - Arguments to create a Board.
     * @example
     * // Create one Board
     * const Board = await prisma.board.create({
     *   data: {
     *     // ... data to create a Board
     *   }
     * })
     *
     */
    create<T extends BoardCreateArgs>(args: Prisma.SelectSubset<T, BoardCreateArgs<ExtArgs>>): Prisma.Prisma__BoardClient<runtime.Types.Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Boards.
     * @param {BoardCreateManyArgs} args - Arguments to create many Boards.
     * @example
     * // Create many Boards
     * const board = await prisma.board.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BoardCreateManyArgs>(args?: Prisma.SelectSubset<T, BoardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Boards and returns the data saved in the database.
     * @param {BoardCreateManyAndReturnArgs} args - Arguments to create many Boards.
     * @example
     * // Create many Boards
     * const board = await prisma.board.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Boards and only return the `id`
     * const boardWithIdOnly = await prisma.board.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BoardCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BoardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Board.
     * @param {BoardDeleteArgs} args - Arguments to delete one Board.
     * @example
     * // Delete one Board
     * const Board = await prisma.board.delete({
     *   where: {
     *     // ... filter to delete one Board
     *   }
     * })
     *
     */
    delete<T extends BoardDeleteArgs>(args: Prisma.SelectSubset<T, BoardDeleteArgs<ExtArgs>>): Prisma.Prisma__BoardClient<runtime.Types.Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Board.
     * @param {BoardUpdateArgs} args - Arguments to update one Board.
     * @example
     * // Update one Board
     * const board = await prisma.board.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BoardUpdateArgs>(args: Prisma.SelectSubset<T, BoardUpdateArgs<ExtArgs>>): Prisma.Prisma__BoardClient<runtime.Types.Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Boards.
     * @param {BoardDeleteManyArgs} args - Arguments to filter Boards to delete.
     * @example
     * // Delete a few Boards
     * const { count } = await prisma.board.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BoardDeleteManyArgs>(args?: Prisma.SelectSubset<T, BoardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Boards
     * const board = await prisma.board.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BoardUpdateManyArgs>(args: Prisma.SelectSubset<T, BoardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Boards and returns the data updated in the database.
     * @param {BoardUpdateManyAndReturnArgs} args - Arguments to update many Boards.
     * @example
     * // Update many Boards
     * const board = await prisma.board.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Boards and only return the `id`
     * const boardWithIdOnly = await prisma.board.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends BoardUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BoardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Board.
     * @param {BoardUpsertArgs} args - Arguments to update or create a Board.
     * @example
     * // Update or create a Board
     * const board = await prisma.board.upsert({
     *   create: {
     *     // ... data to create a Board
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Board we want to update
     *   }
     * })
     */
    upsert<T extends BoardUpsertArgs>(args: Prisma.SelectSubset<T, BoardUpsertArgs<ExtArgs>>): Prisma.Prisma__BoardClient<runtime.Types.Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardCountArgs} args - Arguments to filter Boards to count.
     * @example
     * // Count the number of Boards
     * const count = await prisma.board.count({
     *   where: {
     *     // ... the filter for the Boards we want to count
     *   }
     * })
    **/
    count<T extends BoardCountArgs>(args?: Prisma.Subset<T, BoardCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BoardCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BoardAggregateArgs>(args: Prisma.Subset<T, BoardAggregateArgs>): Prisma.PrismaPromise<GetBoardAggregateType<T>>;
    /**
     * Group by Board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends BoardGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BoardGroupByArgs['orderBy'];
    } : {
        orderBy?: BoardGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BoardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Board model
     */
    readonly fields: BoardFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Board.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__BoardClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    owner<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    lists<T extends Prisma.Board$listsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Board$listsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Board model
 */
export interface BoardFieldRefs {
    readonly id: Prisma.FieldRef<"Board", 'String'>;
    readonly title: Prisma.FieldRef<"Board", 'String'>;
    readonly ownerId: Prisma.FieldRef<"Board", 'String'>;
}
/**
 * Board findUnique
 */
export type BoardFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: Prisma.BoardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Board
     */
    omit?: Prisma.BoardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BoardInclude<ExtArgs> | null;
    /**
     * Filter, which Board to fetch.
     */
    where: Prisma.BoardWhereUniqueInput;
};
/**
 * Board findUniqueOrThrow
 */
export type BoardFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: Prisma.BoardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Board
     */
    omit?: Prisma.BoardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BoardInclude<ExtArgs> | null;
    /**
     * Filter, which Board to fetch.
     */
    where: Prisma.BoardWhereUniqueInput;
};
/**
 * Board findFirst
 */
export type BoardFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: Prisma.BoardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Board
     */
    omit?: Prisma.BoardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BoardInclude<ExtArgs> | null;
    /**
     * Filter, which Board to fetch.
     */
    where?: Prisma.BoardWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Boards to fetch.
     */
    orderBy?: Prisma.BoardOrderByWithRelationInput | Prisma.BoardOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Boards.
     */
    cursor?: Prisma.BoardWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Boards.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Boards.
     */
    distinct?: Prisma.BoardScalarFieldEnum | Prisma.BoardScalarFieldEnum[];
};
/**
 * Board findFirstOrThrow
 */
export type BoardFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: Prisma.BoardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Board
     */
    omit?: Prisma.BoardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BoardInclude<ExtArgs> | null;
    /**
     * Filter, which Board to fetch.
     */
    where?: Prisma.BoardWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Boards to fetch.
     */
    orderBy?: Prisma.BoardOrderByWithRelationInput | Prisma.BoardOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Boards.
     */
    cursor?: Prisma.BoardWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Boards.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Boards.
     */
    distinct?: Prisma.BoardScalarFieldEnum | Prisma.BoardScalarFieldEnum[];
};
/**
 * Board findMany
 */
export type BoardFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: Prisma.BoardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Board
     */
    omit?: Prisma.BoardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BoardInclude<ExtArgs> | null;
    /**
     * Filter, which Boards to fetch.
     */
    where?: Prisma.BoardWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Boards to fetch.
     */
    orderBy?: Prisma.BoardOrderByWithRelationInput | Prisma.BoardOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Boards.
     */
    cursor?: Prisma.BoardWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Boards.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Boards.
     */
    distinct?: Prisma.BoardScalarFieldEnum | Prisma.BoardScalarFieldEnum[];
};
/**
 * Board create
 */
export type BoardCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: Prisma.BoardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Board
     */
    omit?: Prisma.BoardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BoardInclude<ExtArgs> | null;
    /**
     * The data needed to create a Board.
     */
    data: Prisma.XOR<Prisma.BoardCreateInput, Prisma.BoardUncheckedCreateInput>;
};
/**
 * Board createMany
 */
export type BoardCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Boards.
     */
    data: Prisma.BoardCreateManyInput | Prisma.BoardCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Board createManyAndReturn
 */
export type BoardCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: Prisma.BoardSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Board
     */
    omit?: Prisma.BoardOmit<ExtArgs> | null;
    /**
     * The data used to create many Boards.
     */
    data: Prisma.BoardCreateManyInput | Prisma.BoardCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BoardIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Board update
 */
export type BoardUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: Prisma.BoardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Board
     */
    omit?: Prisma.BoardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BoardInclude<ExtArgs> | null;
    /**
     * The data needed to update a Board.
     */
    data: Prisma.XOR<Prisma.BoardUpdateInput, Prisma.BoardUncheckedUpdateInput>;
    /**
     * Choose, which Board to update.
     */
    where: Prisma.BoardWhereUniqueInput;
};
/**
 * Board updateMany
 */
export type BoardUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Boards.
     */
    data: Prisma.XOR<Prisma.BoardUpdateManyMutationInput, Prisma.BoardUncheckedUpdateManyInput>;
    /**
     * Filter which Boards to update
     */
    where?: Prisma.BoardWhereInput;
    /**
     * Limit how many Boards to update.
     */
    limit?: number;
};
/**
 * Board updateManyAndReturn
 */
export type BoardUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: Prisma.BoardSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Board
     */
    omit?: Prisma.BoardOmit<ExtArgs> | null;
    /**
     * The data used to update Boards.
     */
    data: Prisma.XOR<Prisma.BoardUpdateManyMutationInput, Prisma.BoardUncheckedUpdateManyInput>;
    /**
     * Filter which Boards to update
     */
    where?: Prisma.BoardWhereInput;
    /**
     * Limit how many Boards to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BoardIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Board upsert
 */
export type BoardUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: Prisma.BoardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Board
     */
    omit?: Prisma.BoardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BoardInclude<ExtArgs> | null;
    /**
     * The filter to search for the Board to update in case it exists.
     */
    where: Prisma.BoardWhereUniqueInput;
    /**
     * In case the Board found by the `where` argument doesn't exist, create a new Board with this data.
     */
    create: Prisma.XOR<Prisma.BoardCreateInput, Prisma.BoardUncheckedCreateInput>;
    /**
     * In case the Board was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.BoardUpdateInput, Prisma.BoardUncheckedUpdateInput>;
};
/**
 * Board delete
 */
export type BoardDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: Prisma.BoardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Board
     */
    omit?: Prisma.BoardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BoardInclude<ExtArgs> | null;
    /**
     * Filter which Board to delete.
     */
    where: Prisma.BoardWhereUniqueInput;
};
/**
 * Board deleteMany
 */
export type BoardDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Boards to delete
     */
    where?: Prisma.BoardWhereInput;
    /**
     * Limit how many Boards to delete.
     */
    limit?: number;
};
/**
 * Board.lists
 */
export type Board$listsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: Prisma.ListSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the List
     */
    omit?: Prisma.ListOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ListInclude<ExtArgs> | null;
    where?: Prisma.ListWhereInput;
    orderBy?: Prisma.ListOrderByWithRelationInput | Prisma.ListOrderByWithRelationInput[];
    cursor?: Prisma.ListWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ListScalarFieldEnum | Prisma.ListScalarFieldEnum[];
};
/**
 * Board without action
 */
export type BoardDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: Prisma.BoardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Board
     */
    omit?: Prisma.BoardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BoardInclude<ExtArgs> | null;
};
//# sourceMappingURL=Board.d.ts.map