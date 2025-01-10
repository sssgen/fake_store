import Link from "next/link";

type LogoComponentType = {
    className?: string;
};

const Logo = ({ className = "" }: LogoComponentType) => {
    return (
        <div className={`${className} flex items-center justify-center`}>
            <Link href='/'>
                <h1 className='font-bold text-2xl cursor-pointer hover:scale-110'>
                    FakeStore
                </h1>
            </Link>
        </div>
    );
};

export default Logo;
