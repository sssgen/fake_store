import { MinusIcon, PlusIcon } from "lucide-react";

type GoodsGridItemCounter = {
    className?: string;
    count: number;
    setCount: (count: (prev: number) => number) => void;
};

const GoodsGridItemCounter = ({
    className = "",
    count,
    setCount,
}: GoodsGridItemCounter) => {
    const handleMinus = () => {
        if (count > 1) {
            setCount((prev) => prev - 1);
        }
    };

    const handlePlus = () => {
        setCount((prev) => prev + 1);
    };

    return (
        <div className={`${className} flex items-center w-full select-none`}>
            <MinusIcon
                onClick={() => handleMinus()}
                className='cursor-pointer h-4'
            />
            <p className='text-lg'>{count}</p>
            <PlusIcon
                onClick={() => handlePlus()}
                className='cursor-pointer h-4'
            />
        </div>
    );
};

export default GoodsGridItemCounter;
