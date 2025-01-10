import { useBasketStore } from "@/lib/store/useBasketStore";
import BasketGridItem from "./BasketGridItem";
import Button from "../ui/Button";
import Link from "next/link";
import getOverallPrice from "@/lib/utils/getOverallPrice";

const BasketGrid = () => {
    const { goodsItems, setIsBasketModalOpened } = useBasketStore(
        (state) => state
    );

    return (
        <>
            <h2 className='text-center text-2xl font-bold mb-8'>Корзина</h2>
            <div className='flex flex-col items-center box-content overflow-y-auto overflow-x-hidden gap-8 sm:gap-4 max-h-[50vh] sm:max-h-[70vh]'>
                {goodsItems.map((basketItem) => (
                    <BasketGridItem key={basketItem.id} {...basketItem} />
                ))}
            </div>
            <p className='font-semibold'>
                Overall: {getOverallPrice(goodsItems)}₴
            </p>
            <div className='flex items-center justify-between gap-4 mt-8'>
                <Link
                    href='/order'
                    className='w-2/3'
                    onClick={() => setIsBasketModalOpened(false)}
                >
                    <Button className='w-full'>Buy now</Button>
                </Link>
                <Button
                    className='w-1/3'
                    onClick={() => setIsBasketModalOpened(false)}
                >
                    Close
                </Button>
            </div>
        </>
    );
};

export default BasketGrid;
