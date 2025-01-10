import type { GoodsItemType } from "@/types/GoodsItem";

import BasketGridItemCounter from "@/components/basket/BasketItemCounter";
import DeleteBasketGridItem from "@/components/basket/DeleteBasketGridItem";

import { PackageIcon } from "lucide-react";

type BasketGridItemComponentType = GoodsItemType & {
    className?: string;
};

const BasketGridItem = ({
    className = "",
    ...goodsItem
}: BasketGridItemComponentType) => {
    return (
        <div
            className={`${className} w-full flex flex-col items-center sm:flex-row sm:items-start justify-start gap-2`}
        >
            <div className='h-8 w-8 relative my-auto flex flex-col gap-2 items-center justify-center p-10 border-4 rounded-lg border-foreground/80'>
                <PackageIcon className='absolute block h-8 w-8' width={32} height={32} />
            </div>
            <div className='flex flex-col w-full'>
                <div className='flex items-center justify-start ml-2 mt-2 max-w-full truncate px-0.5 w-full'>
                    <h2 className='text-sm font-semibold'>
                        {goodsItem.name}
                        <br />
                        <span className='text-sm'>{`${goodsItem.addedToBasketCount} x ${goodsItem.price} UAH`}</span>
                    </h2>
                </div>
                <div className='flex justify-between items-center ml-2'>
                    <DeleteBasketGridItem itemId={goodsItem.id} />
                    <BasketGridItemCounter
                        className='justify-end'
                        itemId={goodsItem.id}
                    />
                </div>
            </div>
        </div>
    );
};

export default BasketGridItem;
