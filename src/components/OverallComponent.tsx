"use client";
import { useBasketStore } from "@/lib/store/useBasketStore";
import getOverallPrice from "@/lib/utils/getOverallPrice";
import { useEffect, useState } from "react";

const OverallComponents = () => {
    const { goodsItems } = useBasketStore((state) => state);
    const [overall, setOverAll] = useState<string>("Loading...");

    useEffect(() => {
        setOverAll(`${getOverallPrice(goodsItems)}₴`);
    }, [goodsItems]);

    return (
        <p className='text-3xl font-bold text-center text-foreground'>
            Overall: {overall}
        </p>
    );
};

export default OverallComponents;
