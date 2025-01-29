"use client";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const menuItems = [
        {
            label: "Home",
            link: '/'
        },
        {
            label: "Inzichten",
            link: '/inzichten'
        },
        {
            label: "Interviews",
            link: '/#interviews'
        },
        {
            label: "Duurzame initiatieven",
            link: '/duurzame-initiatieven'
        },
        {
            label: 'Contact',
            link: 'mailto:tessa.vg@hotmail.com'
        },
    ];

    const isActive = (link) => {
        if (link.startsWith('mailto:')) return false;
        if (link.includes('#')) {
            return pathname === '/' && window.location.hash === link.split('#')[1];
        }
        return pathname === link;
    };

    return (
        <header className='absolute z-50 flex items-center justify-center w-full py-6 md:py-10 '>
            {/* Desktop Navigation */}
            <div className="container items-center justify-start hidden w-full nav-bar:flex">
                <ul className="relative z-10 flex items-center gap-6 w-fit">
                    {menuItems.map((item, index) => (
                        <li key={item.link + index}>
                            <a 
                                className={`btn-bare btn-black-bare text-serif text-md relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:transition-all hover:before:w-full hover:before:left-0 ${
                                    isActive(item.link) ? 'before:w-full before:left-0' : 'before:left-1/2'
                                }`} 
                                href={item.link}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Navigation */}
            <div className="container w-full nav-bar:hidden">
                <div className="flex items-center justify-end">
                    {/* Hamburger Button */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="relative z-50 p-2 mr-2"
                        aria-label="Toggle Menu"
                    >
                        <div className={`w-6 h-0.5 bg-black transition-all ${isMenuOpen ? 'rotate-45 translate-y-[0.25rem]' : ''}`} />
                        <div className={`w-6 h-0.5 bg-black transition-all mt-1 ${isMenuOpen ? 'opacity-0' : ''}`} />
                        <div className={`w-6 h-0.5 bg-black transition-all mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-[0.5rem]' : ''}`} />
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                    <div className="container pt-24 mobile-menu">
                        <ul className="flex flex-col gap-4">
                            {menuItems.map((item, index) => (
                                <li className='' key={item.link + index}>
                                    <a 
                                        className={`block w-full text-2xl reveal-on-scroll relative before:absolute before:bottom-0  before:w-0 before:h-[1px] before:bg-black before:transition-all hover:before:w-full hover:before:left-0 active:text-blue active:before:bg-blue`}
                                        href={item.link}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}
