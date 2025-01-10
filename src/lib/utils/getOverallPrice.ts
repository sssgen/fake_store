import { GoodsItemType } from "@/types/GoodsItem";

export default function getOverallPrice(goodsItems: GoodsItemType[]) {
    let overall = 0;

    for (const item of goodsItems) {
        const count = item.addedToBasketCount || 0;
        overall += item.price * count;
    }

    return Number(overall);
}
