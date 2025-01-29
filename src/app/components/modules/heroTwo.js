"use client"
import React from 'react';

export default function HeroTwo() {
  return (
    <section className="container relative w-full grid grid-cols-12 gap-6 mt-[90px] md:mt-[100px] lg:mt-[196px] z-30 md:pb-10 lg:b-0 ">
      <div className="absolute left-[-700px] z-[-10] top-[-1575px] inset-0 reveal-on-scroll">
        <svg width="2869" height="1973" viewBox="0 0 2869 1973" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2789.62 279.541C2841.77 288.885 2876.47 338.732 2867.12 390.878V390.878C2680.06 1434.84 1682.11 2129.5 638.147 1942.44L102.19 1846.4C35.2585 1834.41 -9.27782 1770.43 2.7153 1703.5L160.427 823.338C257.739 280.255 776.882 -81.1126 1319.96 16.1998L2789.62 279.541Z" fill="url(#paint0_linear_25_41)" fillOpacity="0.3"/>
          <defs>
            <linearGradient id="paint0_linear_25_41" x1="1177.08" y1="977.167" x2="949.321" y2="1596.65" gradientUnits="userSpaceOnUse">
              <stop offset="0.445" stopColor="#ADB1FF"/>
            </linearGradient> 
          </defs>
        </svg>
      </div>

      <div className="absolute left-[-700px] z-[-10] top-[-1520px] lg:top-[-1500px] inset-0 reveal-on-scroll">
        <svg width="2869" height="1973" viewBox="0 0 2869 1973" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2789.62 279.541C2841.77 288.885 2876.47 338.732 2867.12 390.878V390.878C2680.06 1434.84 1682.11 2129.5 638.147 1942.44L102.19 1846.4C35.2585 1834.41 -9.27782 1770.43 2.7153 1703.5L160.427 823.338C257.739 280.255 776.882 -81.1126 1319.96 16.1998L2789.62 279.541Z" fill="url(#paint0_linear_25_41)" fillOpacity="0.1"/>
            <defs>
              <linearGradient id="paint0_linear_25_41" x1="1177.08" y1="977.167" x2="949.321" y2="1596.65" gradientUnits="userSpaceOnUse">
                <stop stopColor="white"/>
                <stop offset="0.445" stopColor="#ADB1FF"/>
              </linearGradient> 
            </defs>
        </svg>
      </div>


      <div className="flex flex-col col-span-12 md:col-span-6 ">
        <h1 className="mb-8 text-h1-sm md:text-h1-md lg:text-h1 reveal-on-scroll">Duurzame initiatieven</h1>
        <p className="text-sm md:text-base reveal-on-scroll">
            Hier vind je een overzicht van inspirerende duurzame initiatieven die je als foodtruckeigenaar kunt benutten. Deze initiatieven helpen je om bewuster te ondernemen, van voedselverspilling tegengaan tot duurzamer transport en verpakkingen.
        </p>
        <a href="#initiatieven" className="flex items-center justify-start mt-10 w-fit group reveal-on-scroll">
          <span className="text-xs btn-fill btn-white group-hover:bg-black group-hover:text-white">Bekijk de initiatieven</span>
          <div className="btn-fill btn-white h-fit group-hover:bg-black"> 
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M8.99978 0.0429077V14.1287L14.4998 8.62871L15.914 10.0429L7.99978 17.9571L0.0855713 10.0429L1.49979 8.62871L6.99978 14.1287V0.0429077H8.99978Z" className="group-hover:fill-white fill-black"/>
            </svg>
          </div>
        </a>
      </div>

      <div className="col-span-6 col-start-7 md:col-span-4 md:col-start-9 lg:col-span-3 lg:col-start-10 lg:mt-[-50px] rounded-3xl ">
        <div className="aspect-[2/3] rounded-3xl reveal-on-scroll shadow-lg relative z-10 before:absolute before:flex before:w-[90%] before:h-[90%] md:before:bottom-[-24px] md:before:right-[-24px] before:bottom-[-12px] before:right-[-12px] before:bg-[#ADB1FF] before:opacity-[30%] before:z-[-1] before:rounded-3xl">
          <img src="/images/trailer.jpg" className="object-cover object-center w-full h-full rounded-3xl" />
        </div>

      </div>
      
    </section>
  );
}
