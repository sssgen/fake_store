import { GoodsItemType } from "@/types/GoodsItem";

export default function getAddedToBasketCountById(
    itemsArray: GoodsItemType[],
    itemId: number
) {
    if (itemsArray.length <= 0) return 0;

    const foundItem = itemsArray.find((item) => item.id === itemId);

    return foundItem?.addedToBasketCount ? foundItem.addedToBasketCount : 0;
}
