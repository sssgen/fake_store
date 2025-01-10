"use client";
import type { GoodsItemType } from "@/types/GoodsItem";
import { create } from "zustand";

interface BasketStoreType {
    currentGridItem: GoodsItemType | null;
    setCurrentGridItem: (newCurrentItem: GoodsItemType) => void;
}

export const useGridItemStore = create<BasketStoreType>()((set) => ({
    currentGridItem: null,

    setCurrentGridItem: (newCurrentItem: GoodsItemType) => {
        set(() => ({
            currentGridItem: newCurrentItem,
        }));
    },
}));
