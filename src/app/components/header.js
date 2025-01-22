"use client";
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        {
            label:"Interviews",
            link:'#interviews'
        },
        {
            label:'Contact',
            link:'#contact'
        },
    ];

    return (
        <header className='absolute z-50 flex items-center justify-center w-full py-6 md:py-10'>
            {/* Desktop Navigation */}
            <div className="container items-center justify-between hidden w-full nav-bar:flex">
                <ul className="relative z-10 flex items-center w-full">
                    <div className="flex gap-6">
                        {menuItems.slice(0, -1).map((item, index) => (
                            <li key={item.link + index}>
                                <a className="btn-bare btn-black-bare text-md relative before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[1px] before:bg-black before:transition-all hover:before:w-full hover:before:left-0" href={item.link}>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </div>
                    <div className="ml-auto">
                        <li>
                            <a className="btn-bare btn-black-bare text-md relative before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[1px] before:bg-black before:transition-all hover:before:w-full hover:before:left-0" href={menuItems[menuItems.length - 1].link}>
                                {menuItems[menuItems.length - 1].label}
                            </a>
                        </li>
                    </div>
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
                                        className="block w-full text-2xl reveal-on-scroll relative before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[1px] before:bg-black before:transition-all hover:before:w-full hover:before:left-0 active:text-blue active:before:bg-blue" 
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
