"use client"
import React from 'react';

export default function HeroThree() {
  return (
    <section className="container relative w-full grid grid-cols-12 gap-6 mt-[90px] md:mt-[100px] lg:mt-[196px] z-30 md:pb-10 lg:b-0">

      <div className="absolute left-[-1000px] sm:left-[100px] z-[-10] top-[-1600px] sm:top-[-1250px] lg:top-[-1850px] inset-0 reveal-on-scroll">
        <svg width="2747" height="2288" viewBox="0 0 2747 2288" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2740.17 2035.7C2759.15 2085.16 2734.44 2140.64 2684.98 2159.61C1694.76 2539.53 584.056 2044.78 204.144 1054.56L9.10264 546.201C-15.2545 482.716 16.4651 411.506 79.9503 387.149L914.791 66.8487C1429.91 -130.786 2007.71 126.588 2205.35 641.708L2740.17 2035.7Z" fill="#ADB1FF" fillOpacity="0.3"/>
        </svg>
      </div>

      <div className="absolute left-[-1000px] sm:left-[50px] z-[-10] top-[-1550px] sm:top-[-1250px] lg:top-[-1825px] inset-0 reveal-on-scroll">
        <svg width="2747" height="2288" viewBox="0 0 2747 2288" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2740.17 2035.7C2759.15 2085.16 2734.44 2140.64 2684.98 2159.61C1694.76 2539.53 584.056 2044.78 204.144 1054.56L9.10264 546.201C-15.2545 482.716 16.4651 411.506 79.9503 387.149L914.791 66.8487C1429.91 -130.786 2007.71 126.588 2205.35 641.708L2740.17 2035.7Z" fill="#ADB1FF" fillOpacity="0.1"/>
        </svg>
      </div>


      <div className="flex flex-col col-span-12 md:col-span-6 ">
        <h1 className="mb-8 text-h1-sm md:text-h1-md lg:text-h1 reveal-on-scroll">Inzichten</h1>
        <p className="text-sm md:text-base reveal-on-scroll">
            Op deze pagina vind je de belangrijkste inzichten uit de interviews met Anne-Marie Rakhorst, Jack Wong, Willem Schellingerhoud en Tessa van Gemert. Elk van hen deelt waardevolle kennis, tips en ervaringen over duurzaamheid, emissiezones en de uitdagingen en kansen voor foodtruckeigenaren.
        </p>
        <a href="#interviews" className="flex justify-start items-center w-fit mt-10 md:mt-[52px] group reveal-on-scroll">
          <span className="text-xs btn-fill btn-smoke group-hover:bg-black group-hover:text-white">Bekijk de inzichten</span>
          <div className="btn-fill btn-smoke h-fit group-hover:bg-black"> 
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M8.99978 0.0429077V14.1287L14.4998 8.62871L15.914 10.0429L7.99978 17.9571L0.0855713 10.0429L1.49979 8.62871L6.99978 14.1287V0.0429077H8.99978Z" className="group-hover:fill-white fill-black"/>
            </svg>
          </div>
        </a>
      </div>
      <div className="col-span-12 md:col-span-6 grid grid-cols-7 md:grid-cols-6 relative mt-6 md:mt-0 lg:mt-[-91px] ">
        <div className="col-span-3 col-start-5  md:col-start-4 row-start-1 md:min-w-[230px] lg:min-w-[322px]  aspect-[2/3] rounded-3xl overflow-hidden reveal-on-scroll shadow-lg">
          <img src="/images/vroem.jpeg" alt="Interview met Anne-Marie Rakhorst" className="object-cover object-left w-full h-full " />
        </div>
        <div className="col-span-3 col-start-3 md:col-start-2 row-start-1  md:min-w-[230px] lg:min-w-[322px] relative z-10 aspect-[2/3] rounded-3xl overflow-hidden mt-20 sm:mt-32 md:mt-[140px] lg:mt-[179px] reveal-on-scroll">
          <img src="/images/truck.jpeg" alt="Interview met Vroemvroemkoffie" className="object-cover object-center w-full h-full" />
        </div>
      </div>
    </section>
  );
}
