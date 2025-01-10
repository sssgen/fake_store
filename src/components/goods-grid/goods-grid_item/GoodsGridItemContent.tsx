import Button from "@/components/ui/Button";
import { useGridItemStore } from "@/lib/store/useGridItemStore";
import { PackageIcon } from "lucide-react";
import { useState } from "react";
import GoodsGridItemCounter from "./GoodsGridItemCounter";
import { useBasketStore } from "@/lib/store/useBasketStore";
import type { GoodsItemType } from "@/types/GoodsItem";

type GoodsGridItemContentComponentType = {
    className?: string;
};

const GoodsGridItemContent = ({
    className = "",
}: GoodsGridItemContentComponentType) => {
    const currentGoodsItem = useGridItemStore((state) => state.currentGridItem);
    const [countToAdd, setCountToAdd] = useState<number>(1);
    const { addGoodsItems } = useBasketStore((state) => state);

    if (!currentGoodsItem) return;

    const handleAddClick = () => {
        const newGoodsItem: GoodsItemType = {
            ...currentGoodsItem,
            addedToBasketCount: currentGoodsItem.addedToBasketCount
                ? currentGoodsItem.addedToBasketCount + countToAdd
                : countToAdd,
        };

        addGoodsItems([newGoodsItem]);
    };

    return (
        <div
            className={`${className} w-full h-full flex flex-col items-center sm:flex-row justify-between px-0.5 box-content sm:px-[10vh] pb-[5vh] sm:pb-[10vh] gap-8 overflow-y-auto`}
        >
            <div className='h-80 mx-auto min-w-80 max-w-1/2 relative flex flex-col gap-2 items-center justify-center p-10 border-4 rounded-lg border-foreground/80'>
                <PackageIcon
                    className='absolute block h-8 w-8'
                    width={32}
                    height={32}
                />
            </div>
            <div className='w-full sm:w-1/2 flex flex-col h-full sm:pr-[10vh] pt-[5vh] sm:pt-[10vh]'>
                <h2 className='text-xl font-semibold text-left my-8'>
                    {currentGoodsItem.name}
                    <br />
                    <span className='text-sm ml-2'>{`${currentGoodsItem.price} UAH`}</span>
                </h2>
                <div className='flex flex-col sm:flex-row items-center justify-between'>
                    <GoodsGridItemCounter
                        count={countToAdd}
                        setCount={setCountToAdd}
                        className="justify-center my-2 sm:my-0"
                    />
                    <Button
                        className='w-full sm:max-w-[50%]'
                        onClick={() => handleAddClick()}
                    >
                        Add to Basket
                    </Button>
                </div>
                <p className='inline-flex text-base mt-16 max-h-full'>
                    {currentGoodsItem.description}
                </p>
            </div>
        </div>
    );
};

export default GoodsGridItemContent;
