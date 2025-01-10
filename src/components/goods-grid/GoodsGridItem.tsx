"use client";
import { useState } from "react";
import type { GoodsItemType } from "@/types/GoodsItem";

import { useBasketStore } from "@/lib/store/useBasketStore";
import { useGridItemStore } from "@/lib/store/useGridItemStore";

import Button from "@/components/ui/Button";
import GoodsGridItemModal from "@/components/goods-grid/goods-grid_item/GoodsGridItemModal";

import { CheckIcon, Package } from "lucide-react";

type GoodsGridItemComponentType = GoodsItemType & {
    className?: string;
};

const GoodsGridItem = ({
    className = "",
    ...goodsItem
}: GoodsGridItemComponentType) => {
    const addGoodsItems = useBasketStore((state) => state.addGoodsItems);
    const setCurrentGridItem = useGridItemStore(
        (state) => state.setCurrentGridItem
    );
    const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
    const [isBought, setIsBought] = useState<boolean>(false);

    const handleBuyClick = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.stopPropagation();
        addGoodsItems([goodsItem]);
        if (!isBought) setIsBought(true);

        setTimeout(() => {
            setIsBought(false);
        }, 500);
    };

    const handleGoodsItemClick = (item: GoodsItemType) => {
        setIsModalOpened(!isModalOpened);
        setCurrentGridItem(item);
    };

    return (
        <>
            <div
                className={`${className} py-12 px-4 w-full flex flex-col items-center justify-center content-around cursor-pointer hover:bg-slate-200/40 active:bg-slate-200/90 rounded-lg duration-300`}
                onClick={() => handleGoodsItemClick(goodsItem)}
            >
                <div className='h-80 max-w-80 mx-auto w-full flex flex-col gap-2 items-center justify-center p-10 border-4 rounded-lg border-foreground/80'>
                    <Package className='h-full w-full block' />
                    <span className='text-black/30'>
                        {"API doesn't provide images :C"}
                    </span>
                </div>
                <div className='flex items-center justify-center gap-4 sm:gap-12 mt-6 px-0.5 w-full'>
                    <h1 className='text-base md:text-lg lg:text-xl font-semibold max-w-full sm:max-w-52 md:max-w-56 lg:max-w-48 xl:max-w-60 truncate'>
                        {goodsItem.name}
                        <br />
                        <span className='text-sm md:text-base lg:text-lg'>{`${goodsItem.price} UAH`}</span>
                    </h1>
                    {isBought ? (
                        <CheckIcon className='text-green-600 h-8 w-8' />
                    ) : (
                        <Button onClick={handleBuyClick}>Buy</Button>
                    )}
                </div>
            </div>

            <GoodsGridItemModal
                isOpened={isModalOpened}
                setIsOpened={setIsModalOpened}
            />
        </>
    );
};

export default GoodsGridItem;
