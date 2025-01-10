import type { ButtonHTMLAttributes } from "react";

const buttonStyles = {
    default:
        "px-4 md:px-8 py-2 text-foreground bg-transparent hover:bg-foreground/90 active:bg-black/40 hover:bg-black/20 duration-300 border-2 border-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium disabled:pointer-events-none disabled:opacity-50",
};

type ButtonComponentType = ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
};

const Button = ({ className, children, ...props }: ButtonComponentType) => {
    return (
        <button className={`${className} ${buttonStyles.default}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
