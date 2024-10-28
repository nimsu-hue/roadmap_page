'use client';

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
    const [openNavBar, setOpenNavBar] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    const HandlerOpenNavBar = () => {
        setOpenNavBar(!openNavBar);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            if (openNavBar) {
                setOpenNavBar(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [openNavBar]);

    return (
        <>
            <header className={`flex justify-between items-center px-[25px] h-[80px] transition-all duration-300 z-50 ${isScrolled ? 'fixed top-0 left-0 w-full bg-white shadow-lg' : 'relative'}`}>
                <Link href='/' className="flex justify-center items-center gap-[5px]">
                    <img src="/intellimind-icon.png" alt="página principal de intellimind" className='max-w-[150px]' />
                </Link>
                <nav className={`${openNavBar ? 'block' : 'hidden'} absolute top-[80px] left-0 w-full height-full bg-gray md:relative md:top-0 md:w-auto md:h-auto md:bg-white md:block`}>
                    <ul className="w-full h-full flex flex-col justify-center items-center gap-[20px] md:flex-row">
                        <li><Link href="/" className="px-[18px] py-[6px] rounded-[5px] md:hover:bg-gray inline">Inicio</Link></li>
                        <li><Link href="/roadmaps" className="px-[18px] py-[6px] rounded-[5px] md:hover:bg-gray inline">Roadmaps</Link></li>
                        {/* <li><Link href="/acerca-de" className="px-[18px] py-[6px] rounded-[5px] md:hover:bg-gray inline">Acerca De</Link></li> */}
                    </ul>
                </nav>
                <button className='block md:hidden' onClick={HandlerOpenNavBar}>
                    <img src='/menu.svg' alt="Desplegar menú" />
                </button>
            </header>
            {isScrolled && <div style={{ height: '80px' }}></div>}
        </>
    );
}
