import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Card
 *
 */
export type CardModel = runtime.Types.Result.DefaultSelection<Prisma.$CardPayload>;
export type AggregateCard = {
    _count: CardCountAggregateOutputType | null;
    _avg: CardAvgAggregateOutputType | null;
    _sum: CardSumAggregateOutputType | null;
    _min: CardMinAggregateOutputType | null;
    _max: CardMaxAggregateOutputType | null;
};
export type CardAvgAggregateOutputType = {
    order: number | null;
};
export type CardSumAggregateOutputType = {
    order: number | null;
};
export type CardMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    order: number | null;
    listId: string | null;
};
export type CardMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    order: number | null;
    listId: string | null;
};
export type CardCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    order: number;
    listId: number;
    _all: number;
};
export type CardAvgAggregateInputType = {
    order?: true;
};
export type CardSumAggregateInputType = {
    order?: true;
};
export type CardMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    order?: true;
    listId?: true;
};
export type CardMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    order?: true;
    listId?: true;
};
export type CardCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    order?: true;
    listId?: true;
    _all?: true;
};
export type CardAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Card to aggregate.
     */
    where?: Prisma.CardWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Cards to fetch.
     */
    orderBy?: Prisma.CardOrderByWithRelationInput | Prisma.CardOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CardWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Cards.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Cards
    **/
    _count?: true | CardCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: CardAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: CardSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CardMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CardMaxAggregateInputType;
};
export type GetCardAggregateType<T extends CardAggregateArgs> = {
    [P in keyof T & keyof AggregateCard]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCard[P]> : Prisma.GetScalarType<T[P], AggregateCard[P]>;
};
export type CardGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CardWhereInput;
    orderBy?: Prisma.CardOrderByWithAggregationInput | Prisma.CardOrderByWithAggregationInput[];
    by: Prisma.CardScalarFieldEnum[] | Prisma.CardScalarFieldEnum;
    having?: Prisma.CardScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CardCountAggregateInputType | true;
    _avg?: CardAvgAggregateInputType;
    _sum?: CardSumAggregateInputType;
    _min?: CardMinAggregateInputType;
    _max?: CardMaxAggregateInputType;
};
export type CardGroupByOutputType = {
    id: string;
    title: string;
    description: string | null;
    order: number;
    listId: string;
    _count: CardCountAggregateOutputType | null;
    _avg: CardAvgAggregateOutputType | null;
    _sum: CardSumAggregateOutputType | null;
    _min: CardMinAggregateOutputType | null;
    _max: CardMaxAggregateOutputType | null;
};
export type GetCardGroupByPayload<T extends CardGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CardGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CardGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CardGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CardGroupByOutputType[P]>;
}>>;
export type CardWhereInput = {
    AND?: Prisma.CardWhereInput | Prisma.CardWhereInput[];
    OR?: Prisma.CardWhereInput[];
    NOT?: Prisma.CardWhereInput | Prisma.CardWhereInput[];
    id?: Prisma.StringFilter<"Card"> | string;
    title?: Prisma.StringFilter<"Card"> | string;
    description?: Prisma.StringNullableFilter<"Card"> | string | null;
    order?: Prisma.IntFilter<"Card"> | number;
    listId?: Prisma.StringFilter<"Card"> | string;
    list?: Prisma.XOR<Prisma.ListScalarRelationFilter, Prisma.ListWhereInput>;
};
export type CardOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    order?: Prisma.SortOrder;
    listId?: Prisma.SortOrder;
    list?: Prisma.ListOrderByWithRelationInput;
};
export type CardWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CardWhereInput | Prisma.CardWhereInput[];
    OR?: Prisma.CardWhereInput[];
    NOT?: Prisma.CardWhereInput | Prisma.CardWhereInput[];
    title?: Prisma.StringFilter<"Card"> | string;
    description?: Prisma.StringNullableFilter<"Card"> | string | null;
    order?: Prisma.IntFilter<"Card"> | number;
    listId?: Prisma.StringFilter<"Card"> | string;
    list?: Prisma.XOR<Prisma.ListScalarRelationFilter, Prisma.ListWhereInput>;
}, "id">;
export type CardOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    order?: Prisma.SortOrder;
    listId?: Prisma.SortOrder;
    _count?: Prisma.CardCountOrderByAggregateInput;
    _avg?: Prisma.CardAvgOrderByAggregateInput;
    _max?: Prisma.CardMaxOrderByAggregateInput;
    _min?: Prisma.CardMinOrderByAggregateInput;
    _sum?: Prisma.CardSumOrderByAggregateInput;
};
export type CardScalarWhereWithAggregatesInput = {
    AND?: Prisma.CardScalarWhereWithAggregatesInput | Prisma.CardScalarWhereWithAggregatesInput[];
    OR?: Prisma.CardScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CardScalarWhereWithAggregatesInput | Prisma.CardScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Card"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Card"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Card"> | string | null;
    order?: Prisma.IntWithAggregatesFilter<"Card"> | number;
    listId?: Prisma.StringWithAggregatesFilter<"Card"> | string;
};
export type CardCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    order: number;
    list: Prisma.ListCreateNestedOneWithoutCardsInput;
};
export type CardUncheckedCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    order: number;
    listId: string;
};
export type CardUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    list?: Prisma.ListUpdateOneRequiredWithoutCardsNestedInput;
};
export type CardUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    listId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CardCreateManyInput = {
    id?: string;
    title: string;
    description?: string | null;
    order: number;
    listId: string;
};
export type CardUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CardUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    listId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CardListRelationFilter = {
    every?: Prisma.CardWhereInput;
    some?: Prisma.CardWhereInput;
    none?: Prisma.CardWhereInput;
};
export type CardOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CardCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    listId?: Prisma.SortOrder;
};
export type CardAvgOrderByAggregateInput = {
    order?: Prisma.SortOrder;
};
export type CardMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    listId?: Prisma.SortOrder;
};
export type CardMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    listId?: Prisma.SortOrder;
};
export type CardSumOrderByAggregateInput = {
    order?: Prisma.SortOrder;
};
export type CardCreateNestedManyWithoutListInput = {
    create?: Prisma.XOR<Prisma.CardCreateWithoutListInput, Prisma.CardUncheckedCreateWithoutListInput> | Prisma.CardCreateWithoutListInput[] | Prisma.CardUncheckedCreateWithoutListInput[];
    connectOrCreate?: Prisma.CardCreateOrConnectWithoutListInput | Prisma.CardCreateOrConnectWithoutListInput[];
    createMany?: Prisma.CardCreateManyListInputEnvelope;
    connect?: Prisma.CardWhereUniqueInput | Prisma.CardWhereUniqueInput[];
};
export type CardUncheckedCreateNestedManyWithoutListInput = {
    create?: Prisma.XOR<Prisma.CardCreateWithoutListInput, Prisma.CardUncheckedCreateWithoutListInput> | Prisma.CardCreateWithoutListInput[] | Prisma.CardUncheckedCreateWithoutListInput[];
    connectOrCreate?: Prisma.CardCreateOrConnectWithoutListInput | Prisma.CardCreateOrConnectWithoutListInput[];
    createMany?: Prisma.CardCreateManyListInputEnvelope;
    connect?: Prisma.CardWhereUniqueInput | Prisma.CardWhereUniqueInput[];
};
export type CardUpdateManyWithoutListNestedInput = {
    create?: Prisma.XOR<Prisma.CardCreateWithoutListInput, Prisma.CardUncheckedCreateWithoutListInput> | Prisma.CardCreateWithoutListInput[] | Prisma.CardUncheckedCreateWithoutListInput[];
    connectOrCreate?: Prisma.CardCreateOrConnectWithoutListInput | Prisma.CardCreateOrConnectWithoutListInput[];
    upsert?: Prisma.CardUpsertWithWhereUniqueWithoutListInput | Prisma.CardUpsertWithWhereUniqueWithoutListInput[];
    createMany?: Prisma.CardCreateManyListInputEnvelope;
    set?: Prisma.CardWhereUniqueInput | Prisma.CardWhereUniqueInput[];
    disconnect?: Prisma.CardWhereUniqueInput | Prisma.CardWhereUniqueInput[];
    delete?: Prisma.CardWhereUniqueInput | Prisma.CardWhereUniqueInput[];
    connect?: Prisma.CardWhereUniqueInput | Prisma.CardWhereUniqueInput[];
    update?: Prisma.CardUpdateWithWhereUniqueWithoutListInput | Prisma.CardUpdateWithWhereUniqueWithoutListInput[];
    updateMany?: Prisma.CardUpdateManyWithWhereWithoutListInput | Prisma.CardUpdateManyWithWhereWithoutListInput[];
    deleteMany?: Prisma.CardScalarWhereInput | Prisma.CardScalarWhereInput[];
};
export type CardUncheckedUpdateManyWithoutListNestedInput = {
    create?: Prisma.XOR<Prisma.CardCreateWithoutListInput, Prisma.CardUncheckedCreateWithoutListInput> | Prisma.CardCreateWithoutListInput[] | Prisma.CardUncheckedCreateWithoutListInput[];
    connectOrCreate?: Prisma.CardCreateOrConnectWithoutListInput | Prisma.CardCreateOrConnectWithoutListInput[];
    upsert?: Prisma.CardUpsertWithWhereUniqueWithoutListInput | Prisma.CardUpsertWithWhereUniqueWithoutListInput[];
    createMany?: Prisma.CardCreateManyListInputEnvelope;
    set?: Prisma.CardWhereUniqueInput | Prisma.CardWhereUniqueInput[];
    disconnect?: Prisma.CardWhereUniqueInput | Prisma.CardWhereUniqueInput[];
    delete?: Prisma.CardWhereUniqueInput | Prisma.CardWhereUniqueInput[];
    connect?: Prisma.CardWhereUniqueInput | Prisma.CardWhereUniqueInput[];
    update?: Prisma.CardUpdateWithWhereUniqueWithoutListInput | Prisma.CardUpdateWithWhereUniqueWithoutListInput[];
    updateMany?: Prisma.CardUpdateManyWithWhereWithoutListInput | Prisma.CardUpdateManyWithWhereWithoutListInput[];
    deleteMany?: Prisma.CardScalarWhereInput | Prisma.CardScalarWhereInput[];
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type CardCreateWithoutListInput = {
    id?: string;
    title: string;
    description?: string | null;
    order: number;
};
export type CardUncheckedCreateWithoutListInput = {
    id?: string;
    title: string;
    description?: string | null;
    order: number;
};
export type CardCreateOrConnectWithoutListInput = {
    where: Prisma.CardWhereUniqueInput;
    create: Prisma.XOR<Prisma.CardCreateWithoutListInput, Prisma.CardUncheckedCreateWithoutListInput>;
};
export type CardCreateManyListInputEnvelope = {
    data: Prisma.CardCreateManyListInput | Prisma.CardCreateManyListInput[];
    skipDuplicates?: boolean;
};
export type CardUpsertWithWhereUniqueWithoutListInput = {
    where: Prisma.CardWhereUniqueInput;
    update: Prisma.XOR<Prisma.CardUpdateWithoutListInput, Prisma.CardUncheckedUpdateWithoutListInput>;
    create: Prisma.XOR<Prisma.CardCreateWithoutListInput, Prisma.CardUncheckedCreateWithoutListInput>;
};
export type CardUpdateWithWhereUniqueWithoutListInput = {
    where: Prisma.CardWhereUniqueInput;
    data: Prisma.XOR<Prisma.CardUpdateWithoutListInput, Prisma.CardUncheckedUpdateWithoutListInput>;
};
export type CardUpdateManyWithWhereWithoutListInput = {
    where: Prisma.CardScalarWhereInput;
    data: Prisma.XOR<Prisma.CardUpdateManyMutationInput, Prisma.CardUncheckedUpdateManyWithoutListInput>;
};
export type CardScalarWhereInput = {
    AND?: Prisma.CardScalarWhereInput | Prisma.CardScalarWhereInput[];
    OR?: Prisma.CardScalarWhereInput[];
    NOT?: Prisma.CardScalarWhereInput | Prisma.CardScalarWhereInput[];
    id?: Prisma.StringFilter<"Card"> | string;
    title?: Prisma.StringFilter<"Card"> | string;
    description?: Prisma.StringNullableFilter<"Card"> | string | null;
    order?: Prisma.IntFilter<"Card"> | number;
    listId?: Prisma.StringFilter<"Card"> | string;
};
export type CardCreateManyListInput = {
    id?: string;
    title: string;
    description?: string | null;
    order: number;
};
export type CardUpdateWithoutListInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CardUncheckedUpdateWithoutListInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CardUncheckedUpdateManyWithoutListInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CardSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    order?: boolean;
    listId?: boolean;
    list?: boolean | Prisma.ListDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["card"]>;
export type CardSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    order?: boolean;
    listId?: boolean;
    list?: boolean | Prisma.ListDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["card"]>;
export type CardSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    order?: boolean;
    listId?: boolean;
    list?: boolean | Prisma.ListDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["card"]>;
export type CardSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    order?: boolean;
    listId?: boolean;
};
export type CardOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "description" | "order" | "listId", ExtArgs["result"]["card"]>;
export type CardInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    list?: boolean | Prisma.ListDefaultArgs<ExtArgs>;
};
export type CardIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    list?: boolean | Prisma.ListDefaultArgs<ExtArgs>;
};
export type CardIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    list?: boolean | Prisma.ListDefaultArgs<ExtArgs>;
};
export type $CardPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Card";
    objects: {
        list: Prisma.$ListPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        description: string | null;
        order: number;
        listId: string;
    }, ExtArgs["result"]["card"]>;
    composites: {};
};
export type CardGetPayload<S extends boolean | null | undefined | CardDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CardPayload, S>;
export type CardCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CardCountAggregateInputType | true;
};
export interface CardDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Card'];
        meta: {
            name: 'Card';
        };
    };
    /**
     * Find zero or one Card that matches the filter.
     * @param {CardFindUniqueArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardFindUniqueArgs>(args: Prisma.SelectSubset<T, CardFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CardClient<runtime.Types.Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Card that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CardFindUniqueOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CardFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CardClient<runtime.Types.Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Card that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardFindFirstArgs>(args?: Prisma.SelectSubset<T, CardFindFirstArgs<ExtArgs>>): Prisma.Prisma__CardClient<runtime.Types.Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Card that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CardFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CardClient<runtime.Types.Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Cards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cards
     * const cards = await prisma.card.findMany()
     *
     * // Get first 10 Cards
     * const cards = await prisma.card.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const cardWithIdOnly = await prisma.card.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CardFindManyArgs>(args?: Prisma.SelectSubset<T, CardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Card.
     * @param {CardCreateArgs} args - Arguments to create a Card.
     * @example
     * // Create one Card
     * const Card = await prisma.card.create({
     *   data: {
     *     // ... data to create a Card
     *   }
     * })
     *
     */
    create<T extends CardCreateArgs>(args: Prisma.SelectSubset<T, CardCreateArgs<ExtArgs>>): Prisma.Prisma__CardClient<runtime.Types.Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Cards.
     * @param {CardCreateManyArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const card = await prisma.card.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CardCreateManyArgs>(args?: Prisma.SelectSubset<T, CardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Cards and returns the data saved in the database.
     * @param {CardCreateManyAndReturnArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const card = await prisma.card.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Cards and only return the `id`
     * const cardWithIdOnly = await prisma.card.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CardCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Card.
     * @param {CardDeleteArgs} args - Arguments to delete one Card.
     * @example
     * // Delete one Card
     * const Card = await prisma.card.delete({
     *   where: {
     *     // ... filter to delete one Card
     *   }
     * })
     *
     */
    delete<T extends CardDeleteArgs>(args: Prisma.SelectSubset<T, CardDeleteArgs<ExtArgs>>): Prisma.Prisma__CardClient<runtime.Types.Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Card.
     * @param {CardUpdateArgs} args - Arguments to update one Card.
     * @example
     * // Update one Card
     * const card = await prisma.card.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CardUpdateArgs>(args: Prisma.SelectSubset<T, CardUpdateArgs<ExtArgs>>): Prisma.Prisma__CardClient<runtime.Types.Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Cards.
     * @param {CardDeleteManyArgs} args - Arguments to filter Cards to delete.
     * @example
     * // Delete a few Cards
     * const { count } = await prisma.card.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CardDeleteManyArgs>(args?: Prisma.SelectSubset<T, CardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cards
     * const card = await prisma.card.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CardUpdateManyArgs>(args: Prisma.SelectSubset<T, CardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Cards and returns the data updated in the database.
     * @param {CardUpdateManyAndReturnArgs} args - Arguments to update many Cards.
     * @example
     * // Update many Cards
     * const card = await prisma.card.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Cards and only return the `id`
     * const cardWithIdOnly = await prisma.card.updateManyAndReturn({
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
    updateManyAndReturn<T extends CardUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Card.
     * @param {CardUpsertArgs} args - Arguments to update or create a Card.
     * @example
     * // Update or create a Card
     * const card = await prisma.card.upsert({
     *   create: {
     *     // ... data to create a Card
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Card we want to update
     *   }
     * })
     */
    upsert<T extends CardUpsertArgs>(args: Prisma.SelectSubset<T, CardUpsertArgs<ExtArgs>>): Prisma.Prisma__CardClient<runtime.Types.Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardCountArgs} args - Arguments to filter Cards to count.
     * @example
     * // Count the number of Cards
     * const count = await prisma.card.count({
     *   where: {
     *     // ... the filter for the Cards we want to count
     *   }
     * })
    **/
    count<T extends CardCountArgs>(args?: Prisma.Subset<T, CardCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CardCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CardAggregateArgs>(args: Prisma.Subset<T, CardAggregateArgs>): Prisma.PrismaPromise<GetCardAggregateType<T>>;
    /**
     * Group by Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardGroupByArgs} args - Group by arguments.
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
    groupBy<T extends CardGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CardGroupByArgs['orderBy'];
    } : {
        orderBy?: CardGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Card model
     */
    readonly fields: CardFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Card.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CardClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    list<T extends Prisma.ListDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ListDefaultArgs<ExtArgs>>): Prisma.Prisma__ListClient<runtime.Types.Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Card model
 */
export interface CardFieldRefs {
    readonly id: Prisma.FieldRef<"Card", 'String'>;
    readonly title: Prisma.FieldRef<"Card", 'String'>;
    readonly description: Prisma.FieldRef<"Card", 'String'>;
    readonly order: Prisma.FieldRef<"Card", 'Int'>;
    readonly listId: Prisma.FieldRef<"Card", 'String'>;
}
/**
 * Card findUnique
 */
export type CardFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: Prisma.CardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Card
     */
    omit?: Prisma.CardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CardInclude<ExtArgs> | null;
    /**
     * Filter, which Card to fetch.
     */
    where: Prisma.CardWhereUniqueInput;
};
/**
 * Card findUniqueOrThrow
 */
export type CardFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: Prisma.CardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Card
     */
    omit?: Prisma.CardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CardInclude<ExtArgs> | null;
    /**
     * Filter, which Card to fetch.
     */
    where: Prisma.CardWhereUniqueInput;
};
/**
 * Card findFirst
 */
export type CardFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: Prisma.CardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Card
     */
    omit?: Prisma.CardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CardInclude<ExtArgs> | null;
    /**
     * Filter, which Card to fetch.
     */
    where?: Prisma.CardWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Cards to fetch.
     */
    orderBy?: Prisma.CardOrderByWithRelationInput | Prisma.CardOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Cards.
     */
    cursor?: Prisma.CardWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Cards.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Cards.
     */
    distinct?: Prisma.CardScalarFieldEnum | Prisma.CardScalarFieldEnum[];
};
/**
 * Card findFirstOrThrow
 */
export type CardFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: Prisma.CardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Card
     */
    omit?: Prisma.CardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CardInclude<ExtArgs> | null;
    /**
     * Filter, which Card to fetch.
     */
    where?: Prisma.CardWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Cards to fetch.
     */
    orderBy?: Prisma.CardOrderByWithRelationInput | Prisma.CardOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Cards.
     */
    cursor?: Prisma.CardWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Cards.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Cards.
     */
    distinct?: Prisma.CardScalarFieldEnum | Prisma.CardScalarFieldEnum[];
};
/**
 * Card findMany
 */
export type CardFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: Prisma.CardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Card
     */
    omit?: Prisma.CardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CardInclude<ExtArgs> | null;
    /**
     * Filter, which Cards to fetch.
     */
    where?: Prisma.CardWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Cards to fetch.
     */
    orderBy?: Prisma.CardOrderByWithRelationInput | Prisma.CardOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Cards.
     */
    cursor?: Prisma.CardWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Cards.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Cards.
     */
    distinct?: Prisma.CardScalarFieldEnum | Prisma.CardScalarFieldEnum[];
};
/**
 * Card create
 */
export type CardCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: Prisma.CardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Card
     */
    omit?: Prisma.CardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CardInclude<ExtArgs> | null;
    /**
     * The data needed to create a Card.
     */
    data: Prisma.XOR<Prisma.CardCreateInput, Prisma.CardUncheckedCreateInput>;
};
/**
 * Card createMany
 */
export type CardCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cards.
     */
    data: Prisma.CardCreateManyInput | Prisma.CardCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Card createManyAndReturn
 */
export type CardCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: Prisma.CardSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Card
     */
    omit?: Prisma.CardOmit<ExtArgs> | null;
    /**
     * The data used to create many Cards.
     */
    data: Prisma.CardCreateManyInput | Prisma.CardCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CardIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Card update
 */
export type CardUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: Prisma.CardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Card
     */
    omit?: Prisma.CardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CardInclude<ExtArgs> | null;
    /**
     * The data needed to update a Card.
     */
    data: Prisma.XOR<Prisma.CardUpdateInput, Prisma.CardUncheckedUpdateInput>;
    /**
     * Choose, which Card to update.
     */
    where: Prisma.CardWhereUniqueInput;
};
/**
 * Card updateMany
 */
export type CardUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Cards.
     */
    data: Prisma.XOR<Prisma.CardUpdateManyMutationInput, Prisma.CardUncheckedUpdateManyInput>;
    /**
     * Filter which Cards to update
     */
    where?: Prisma.CardWhereInput;
    /**
     * Limit how many Cards to update.
     */
    limit?: number;
};
/**
 * Card updateManyAndReturn
 */
export type CardUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: Prisma.CardSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Card
     */
    omit?: Prisma.CardOmit<ExtArgs> | null;
    /**
     * The data used to update Cards.
     */
    data: Prisma.XOR<Prisma.CardUpdateManyMutationInput, Prisma.CardUncheckedUpdateManyInput>;
    /**
     * Filter which Cards to update
     */
    where?: Prisma.CardWhereInput;
    /**
     * Limit how many Cards to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CardIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Card upsert
 */
export type CardUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: Prisma.CardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Card
     */
    omit?: Prisma.CardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CardInclude<ExtArgs> | null;
    /**
     * The filter to search for the Card to update in case it exists.
     */
    where: Prisma.CardWhereUniqueInput;
    /**
     * In case the Card found by the `where` argument doesn't exist, create a new Card with this data.
     */
    create: Prisma.XOR<Prisma.CardCreateInput, Prisma.CardUncheckedCreateInput>;
    /**
     * In case the Card was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CardUpdateInput, Prisma.CardUncheckedUpdateInput>;
};
/**
 * Card delete
 */
export type CardDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: Prisma.CardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Card
     */
    omit?: Prisma.CardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CardInclude<ExtArgs> | null;
    /**
     * Filter which Card to delete.
     */
    where: Prisma.CardWhereUniqueInput;
};
/**
 * Card deleteMany
 */
export type CardDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Cards to delete
     */
    where?: Prisma.CardWhereInput;
    /**
     * Limit how many Cards to delete.
     */
    limit?: number;
};
/**
 * Card without action
 */
export type CardDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: Prisma.CardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Card
     */
    omit?: Prisma.CardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CardInclude<ExtArgs> | null;
};
//# sourceMappingURL=Card.d.ts.map