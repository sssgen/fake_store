import "@/styles/globals.css";
import type { Metadata } from "next";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
    title: "Fake Store",
    description:
        "React-застосунок. Стилізований за допомогою TailwindCSS. Використовує глобальне керування станом",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={`antialiased bg-background min-h-screen h-fit w-full overflow-x-hidden overflow-y-auto`}
            >
                <Navbar className='w-full p-2.5'>
                    {/* Лінки на інші сторінки */}
                    {/* <NavbarLink title="..." href="..." /> */}
                </Navbar>
                {children}
                <Footer className='w-full p-2.5' />
            </body>
        </html>
    );
}
