"use client";
import type { GoodsItemType } from "@/types/GoodsItem";
import { create } from "zustand";
import saveBasketToLocalStorage from "@/lib/utils/saveBasketToLocalStorage";

interface BasketStoreType {
    goodsItems: GoodsItemType[];
    isBasketModalOpened: boolean;

    // goods
    addGoodsItems: (items: GoodsItemType[]) => void;
    setGoodsFromLocalStorage: () => void;
    increaseAddedToBasketByItemId: (itemId: number) => void;
    decreaseAddedToBasketByItemId: (itemId: number) => void;
    deleteItemFromBasketById: (itemId: number) => void;

    // modal
    setIsBasketModalOpened: (bool: boolean) => void;
}

export const useBasketStore = create<BasketStoreType>()((set) => ({
    goodsItems: [],
    isBasketModalOpened: false,

    setGoodsFromLocalStorage: () => {
        if (typeof window !== "undefined") {
            const storedGoods = window.localStorage.getItem("goodsItems");
            set(() => ({
                goodsItems: storedGoods ? JSON.parse(storedGoods) : [],
            }));
        }
    },

    addGoodsItems: (newGoodsItems: GoodsItemType[]) => {
        set((state) => {
            const goodsItemsMap = new Map<number, GoodsItemType>();
            state.goodsItems.forEach((item) =>
                goodsItemsMap.set(item.id, item)
            );

            newGoodsItems.forEach((newItem) => {
                if (goodsItemsMap.has(newItem.id)) {
                    // Перевірка для уникнення перебору повного масиву
                    const existingItem = goodsItemsMap.get(newItem.id);

                    existingItem!.addedToBasketCount =
                        (existingItem!.addedToBasketCount || 0) +
                        (newItem.addedToBasketCount || 1);
                } else {
                    // Якщо товару немає, то додаємо новий
                    goodsItemsMap.set(newItem.id, {
                        ...newItem,
                        addedToBasketCount: newItem.addedToBasketCount || 1,
                    });
                }
            });

            const finalUpdatedGoods = Array.from(goodsItemsMap.values());

            saveBasketToLocalStorage(finalUpdatedGoods);

            return { goodsItems: finalUpdatedGoods };
        });
    },

    increaseAddedToBasketByItemId: (itemId: number) => {
        set((state) => {
            const updatedGoodsItems = state.goodsItems.map((item) => {
                if (item.id === itemId) {
                    return {
                        ...item,
                        addedToBasketCount: (item.addedToBasketCount || 0) + 1,
                    };
                }

                return item;
            });

            saveBasketToLocalStorage(updatedGoodsItems);

            return { goodsItems: updatedGoodsItems };
        });
    },

    decreaseAddedToBasketByItemId: (itemId: number) => {
        set((state) => {
            const updatedGoodsItems = state.goodsItems.map((item) => {
                if (item.id === itemId) {
                    return {
                        ...item,
                        addedToBasketCount: Math.max(
                            (item.addedToBasketCount || 0) - 1,
                            0
                        ),
                    };
                }

                return item;
            });

            saveBasketToLocalStorage(updatedGoodsItems);

            return { goodsItems: updatedGoodsItems };
        });
    },

    deleteItemFromBasketById: (itemId: number) => {
        set((state) => {
            const updatedGoodsItems = state.goodsItems.filter(
                (item) => item.id !== itemId
            );

            saveBasketToLocalStorage(updatedGoodsItems);

            return { goodsItems: updatedGoodsItems };
        });
    },

    setIsBasketModalOpened: (bool: boolean) => {
        set(() => ({
            isBasketModalOpened: bool,
        }));
    },
}));
