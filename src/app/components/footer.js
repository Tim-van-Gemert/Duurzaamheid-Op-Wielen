"use client";
import Contact from './modules/contact';
export default function Footer() {

    return (
        <footer className="flex flex-col">
            <Contact />
            <div className="container flex flex-col items-center w-full gap-2 p-8 md:gap-5 md:flex-row md:justify-between">
                <span className="text-sm">© 2025 duurzaam-op-wielen.nl</span>
                <span className="text-sm">Website door <a href="mailto:timvangemert@outlook.com" className="relative before:absolute before:bottom-0 before:w-full before:h-[1px] before:bg-black before:transition-all hover:before:w-1/2 hover:before:left-1/4 before:left-0 w-fit">Tim van Gemert</a></span>
            </div>
        </footer>
    )
}
