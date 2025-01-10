export type GoodsItemType = {
    createdAt: Date;
    name: string;
    description: string;
    price: number;
    category: string;
    stock: number;
    id: number;
    addedToBasketCount?: number;
};
