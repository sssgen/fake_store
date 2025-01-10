import type { GoodsItemType } from "@/types/GoodsItem";

import { getProducts } from "@/server/products/getProducts";

import GoodsGridItem from "@/components/goods-grid/GoodsGridItem";

type GoodsGridComponentType = {
    className?: string;
};

const GoodsGrid = async ({ className = "" }: GoodsGridComponentType) => {
    const { data, error } = await getProducts();

    if (error)
        return (
            <p className='text-center text-lg'>
                <span className='font-semibold'>{`[${error.statusCode}]`}</span>{" "}
                There is a problem while loading:{" "}
                <span className='font-semibold'>{`${error.message}`}</span>
            </p>
        );

    if (!data?.length)
        return (
            <p className='text-center text-xl font-semibold'>
                No results were found 😒
            </p>
        );

    return (
        <div
            className={`${className} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center`}
        >
            {data.map((GoodsItem: GoodsItemType, index: number) => (
                <GoodsGridItem key={index} {...GoodsItem} />
            ))}
        </div>
    );
};

export default GoodsGrid;
