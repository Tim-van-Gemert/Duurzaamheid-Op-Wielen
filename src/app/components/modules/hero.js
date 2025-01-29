"use client"
import React from 'react';

export default function Hero() {
  return (
    <section className="container relative w-full grid grid-cols-12 gap-6 mt-[90px] md:mt-[100px] lg:mt-[196px] z-30 md:pb-10 lg:b-0">
      <div className="absolute left-[-700px] z-[-10] top-[-1550px] md:top-[-1500px] inset-0">
        <svg width="2869" height="1973" viewBox="0 0 2869 1973" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2789.62 279.541C2841.77 288.885 2876.47 338.732 2867.12 390.878V390.878C2680.06 1434.84 1682.11 2129.5 638.147 1942.44L102.19 1846.4C35.2585 1834.41 -9.27782 1770.43 2.7153 1703.5L160.427 823.338C257.739 280.255 776.882 -81.1126 1319.96 16.1998L2789.62 279.541Z" fill="url(#paint0_linear_25_41)" fillOpacity="0.3"/>
          <defs>
            <linearGradient id="paint0_linear_25_41" x1="1177.08" y1="977.167" x2="949.321" y2="1596.65" gradientUnits="userSpaceOnUse">
              <stop offset="0.445" stopColor="#ADB1FF"/>
            </linearGradient> 
          </defs>
        </svg>
      </div>

      <div className="absolute left-[-700px] z-[-10] top-[-1450px] lg:top-[-1420px] inset-0">
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
        <h1 className="mb-8 text-h1-sm md:text-h1-md lg:text-h1 reveal-on-scroll">Er word nog gewerkt aan deze website!</h1>
        <p className="text-sm md:text-base reveal-on-scroll">
            kom later terug voor de interviews!
        </p>
        {/* <a href="#interviews" className="flex justify-start items-center w-fit mt-10 md:mt-[52px] group reveal-on-scroll">
          <span className="text-xs btn-fill btn-white group-hover:bg-black group-hover:text-white">Bekijk de interviews</span>
          <div className="btn-fill btn-white h-fit group-hover:bg-black"> 
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M8.99978 0.0429077V14.1287L14.4998 8.62871L15.914 10.0429L7.99978 17.9571L0.0855713 10.0429L1.49979 8.62871L6.99978 14.1287V0.0429077H8.99978Z" className="group-hover:fill-white fill-black"/>
            </svg>
          </div>
        </a> */}
      </div>
      {/* <div className="col-span-12 md:col-span-6 grid grid-cols-7 md:grid-cols-6 relative mt-6 md:mt-0 lg:mt-[-91px] ">
        <div className="col-span-3 col-start-5  md:col-start-4 row-start-1 md:min-w-[230px] lg:min-w-[322px]  aspect-[2/3] rounded-3xl overflow-hidden reveal-on-scroll shadow-lg">
          <img src="/images/interview_anne-marie_rakhorst.jpeg" alt="Interview met Anne-Marie Rakhorst" className="object-cover object-center w-full h-full " />
        </div>
        <div className="col-span-3 col-start-3 md:col-start-2 row-start-1  md:min-w-[230px] lg:min-w-[322px] relative z-10 aspect-[2/3] rounded-3xl overflow-hidden mt-20 sm:mt-32 md:mt-[140px] lg:mt-[179px] reveal-on-scroll">
          <img src="/images/interview_vroemvroemkoffie.webp" alt="Interview met Vroemvroemkoffie" className="object-cover object-right w-full h-full" />
        </div>
      </div> */}
    </section>
  );
} 