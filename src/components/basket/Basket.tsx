"use client";
import { useEffect } from "react";
import { ShoppingBasketIcon } from "lucide-react";

import BasketModal from "@/components/basket/BasketModal";
import { useBasketStore } from "@/lib/store/useBasketStore";

type BasketComponentType = {
    className?: string;
};

const Basket = ({ className = "" }: BasketComponentType) => {
    const {
        setGoodsFromLocalStorage,
        goodsItems,
        isBasketModalOpened,
        setIsBasketModalOpened,
    } = useBasketStore((state) => state);

    useEffect(() => {
        setGoodsFromLocalStorage();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div
                className={`${className} relative p-2 rounded-md hover:bg-slate-200 transition-all duration-300 cursor-pointer`}
                onClick={() => setIsBasketModalOpened(!isBasketModalOpened)}
            >
                <ShoppingBasketIcon className='h-6 w-6 mt-auto mr-auto' />
                <p className='absolute -top-2 pointer-events-none select-none right-6 sm:-right-4 text-white bg-red-500 rounded-full h-6 w-6 inline-flex items-center justify-center'>{`${goodsItems.length}`}</p>
            </div>
            {isBasketModalOpened && <BasketModal />}
        </>
    );
};

export default Basket;
