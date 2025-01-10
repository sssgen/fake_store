import { XIcon } from "lucide-react";
import BasketGrid from "./BasketGrid";
import { memo } from "react";
import { useBasketStore } from "@/lib/store/useBasketStore";

type BasketModalComponentType = {
    className?: string;
};

const BasketModal = ({ className = "" }: BasketModalComponentType) => {
    const { isBasketModalOpened, setIsBasketModalOpened } = useBasketStore(
        (state) => state
    );

    const handleCloseClick = (
        e: React.MouseEvent<HTMLDivElement & SVGSVGElement, MouseEvent>
    ) => {
        e.stopPropagation();
        setIsBasketModalOpened(!isBasketModalOpened);
    };

    return (
        <>
            {/* overlay START*/}
            <div
                className={`${
                    isBasketModalOpened ? "block" : "hidden"
                } duration-300 fixed top-0 left-0 w-screen h-screen bg-black/40 z-10`}
                onClick={handleCloseClick}
            />
            {/* overlay END*/}

            {/* content window START*/}
            <div
                className={`${className} ${
                    isBasketModalOpened
                        ? "block h-screen"
                        : "hidden"
                } fixed z-50 items-center gap-4 bg-background py-6 px-2 sm:px-6 shadow-lg transition inset-y-0 right-0 w-full border-r sm:max-w-sm`}
            >
                <XIcon
                    className='absoulte cursor-pointer'
                    onClick={handleCloseClick}
                />
                <BasketGrid />
            </div>
            {/* content window END*/}
        </>
    );
};

export default memo(BasketModal);
