"use client";
import Button from "@/components/ui/Button";
import { MoveLeftIcon, MoveRightIcon } from "lucide-react";

import Link from "next/link";
import dynamic from "next/dynamic";

const OverallComponent = dynamic(
    () => import("@/components/OverallComponent"),
    {
        loading: () => <p>Loading...</p>,
    }
);

type OrderPageType = {
    className?: string;
};

const page = ({ className = "" }: OrderPageType) => {
    return (
        <main
            className={`${className} flex flex-col items-center justify-center w-screen h-screen`}
        >
            <OverallComponent />
            <Link href='/' className='h-fit w-fit my-8'>
                <Button className='text-lg md:text-2xl py-2 w-full gap-2'>
                    Place the order
                    <MoveRightIcon className='mt-2' />
                </Button>
            </Link>
            <Link href='/' className='h-fit w-fit my-8'>
                <Button className='text-lg md:text-2xl py-2 w-full gap-2'>
                    <MoveLeftIcon className='mt-2' />
                    Back
                </Button>
            </Link>
        </main>
    );
};

export default page;
