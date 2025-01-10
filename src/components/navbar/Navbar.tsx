import Logo from "@/components/ui/Logo";
import Basket from "@/components/basket/Basket";

type NavbarComponentType = {
    className?: string;
};

const Navbar = ({ className = "" }: NavbarComponentType) => {
    return (
        <nav
            className={`${className} fixed flex items-center justify-between sm:px-24 px-2 border-b border-b-gray-200 mb-auto backdrop-blur-lg`}
        >
            <Logo />
            <Basket />
        </nav>
    );
};

export default Navbar;
