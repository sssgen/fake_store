type FooterComponentType = {
    className?: string;
};

const Footer = ({ className = "" }: FooterComponentType) => {
    return (
        <footer
            className={`${className} flex items-center justify-between sm:px-24 px-2 border-t border-t-gray-200 mt-auto`}
        >
            <p className='font-semibold'>© All rights reserved</p>
            <p className='font-semibold'>{new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;
