"use client";
import { useState } from "react";

import { useBasketStore } from "@/lib/store/useBasketStore";
import getAddedToBasketCountById from "@/lib/utils/getAddedToBasketCountById";

import { MinusIcon, PlusIcon } from "lucide-react";

type BasketItemCounterComponentType = {
    className?: string;
    itemId: number;
};

const BasketItemCounter = ({
    className = "",
    itemId,
}: BasketItemCounterComponentType) => {
    const {
        goodsItems,
        increaseAddedToBasketByItemId,
        decreaseAddedToBasketByItemId,
    } = useBasketStore((state) => state);
    const [counter, setCounter] = useState<number>(
        getAddedToBasketCountById(goodsItems, itemId)
    );

    const handleMinus = () => {
        if (counter > 0) {
            setCounter((prev) => prev - 1);
            decreaseAddedToBasketByItemId(itemId);
        }
    };

    const handlePlus = () => {
        setCounter((prev) => prev + 1);
        increaseAddedToBasketByItemId(itemId);
    };

    return (
        <div className={`${className} flex items-center w-full select-none`}>
            <MinusIcon
                onClick={() => handleMinus()}
                className='cursor-pointer h-4'
            />
            <p className='text-lg'>{counter}</p>
            <PlusIcon
                onClick={() => handlePlus()}
                className='cursor-pointer h-4'
            />
        </div>
    );
};

export default BasketItemCounter;
