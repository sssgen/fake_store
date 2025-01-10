import GoodsGridSkeleton from "@/components/goods-grid/GoodsGridSkeleton";
import dynamic from "next/dynamic";

const GoodsGrid = dynamic(() => import("@/components/goods-grid/GoodsGrid"), {
    loading: () => <GoodsGridSkeleton className='w-full gap-y-16 gap-x-4 mb-8 pt-[90px]' />,
});

const page = () => {
    return (
        <main className='w-full'>
            <GoodsGrid className='gap-y-12 gap-x-4 mb-8 sm:px-12 px-2 w-full pt-[90px]' />
        </main>
    );
};

export default page;
