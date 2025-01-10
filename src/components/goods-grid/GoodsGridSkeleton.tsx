import { SKELETON_PRELOADER_COUNT } from "@/lib/consts";

type GoodsGridSkeletonType = {
    className?: string;
};

const GoodsGridSkeleton = async ({ className = "" }: GoodsGridSkeletonType) => {
    return (
        <div
            className={`${className} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center`}
        >
            {[...Array(SKELETON_PRELOADER_COUNT)].map((_, index: number) => (
                <div
                    key={index}
                    className={`${className} w-full flex flex-col items-center justify-center content-around`}
                >
                    <div className='h-80 max-w-80 mx-auto flex-col gap-2 items-center justify-center p-10 w-full block animate-pulse rounded-lg bg-black/20' />
                    <div className='w-full h-12 flex justify-between align-center max-w-80'>
                        <div className='animate-pulse rounded-md bg-black/20 w-1/2 h-full' />
                        <div className='animate-pulse rounded-md bg-black/20 w-1/3 h-full' />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GoodsGridSkeleton;
