import type { GoodsItemType } from "@/types/GoodsItem";

export default function saveBasketToLocalStorage(goodsItems: GoodsItemType[]) {
    if (typeof window !== "undefined") {
        window.localStorage.setItem("goodsItems", JSON.stringify(goodsItems));
    }
}
