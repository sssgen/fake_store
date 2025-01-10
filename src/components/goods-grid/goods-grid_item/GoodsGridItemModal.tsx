import { memo } from "react";

import GoodsGridItemContent from "@/components/goods-grid/goods-grid_item/GoodsGridItemContent";

import { XIcon } from "lucide-react";

type GoodsGreedItemModalComponentType = {
    className?: string;
    isOpened: boolean;
    setIsOpened: (bool: boolean) => void;
};

const GoodsGreedItemModal = ({
    className = "",
    isOpened,
    setIsOpened,
}: GoodsGreedItemModalComponentType) => {
    const handleCloseClick = () => {
        setIsOpened(!isOpened);
    };

    return (
        <>
            {/* overlay START*/}
            <div
                className={`${
                    isOpened ? "block" : "hidden"
                } duration-300 fixed top-0 left-0 w-screen h-screen bg-black/40 z-10`}
                onClick={handleCloseClick}
            />
            {/* overlay END*/}

            {/* content window START*/}
            <div
                className={`${className} ${
                    isOpened ? "h-[70vh]" : "hidden"
                } fixed flex flex-col z-50 items-center overflow-hidden bg-background py-6 px-2 sm:px-6 shadow-lg transition border-r sm:max-w-sm top-auto bottom-auto left-auto right-auto max-w-[95vw] min-w-[85vw] sm:min-w-[80vw]`}
            >
                <XIcon
                    className='absoulte cursor-pointer mr-auto ml-2 mb-4'
                    onClick={handleCloseClick}
                />
                <GoodsGridItemContent />
            </div>
            {/* overlay END*/}
        </>
    );
};

export default memo(GoodsGreedItemModal);
