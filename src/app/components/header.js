"use client";
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        {
            label:'Introductie',
            link:'#introductie'
        },
        {
            label:"Video's",
            link:'#videos'
        },
        {
            label:'Contact',
            link:'#contact'
        },
    ];

    return (
        <header className='w-full py-6 md;py-10 absolute flex items-center justify-center'>
            {/* Desktop Navigation */}
            <div className="container hidden nav-bar:flex w-full items-center justify-between">
                <ul className="flex w-full relative z-10 items-center">
                    <div className="flex gap-6">
                        {menuItems.slice(0, -1).map((item, index) => (
                            <li key={item.link + index}>
                                <a className="btn-bare btn-black-bare text-md" href={item.link}>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </div>
                    <div className="ml-auto">
                        <li>
                            <a className="btn-bare btn-black-bare text-md" href={menuItems[menuItems.length - 1].link}>
                                {menuItems[menuItems.length - 1].label}
                            </a>
                        </li>
                    </div>
                </ul>
            </div>

            {/* Mobile Navigation */}
            <div className="container nav-bar:hidden w-full">
                <div className="flex justify-end items-center">
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
                    <div className="container pt-24">
                        <ul className="flex flex-col gap-6">
                            {menuItems.map((item, index) => (
                                <li key={item.link + index}>
                                    <a 
                                        className="btn-bare btn-black-bare text-xl" 
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
