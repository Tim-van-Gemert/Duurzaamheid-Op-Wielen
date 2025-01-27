"use client"
import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="container relative w-full grid grid-cols-12 gap-6 mt-[120px] md:mt-[140px] lg:mt-[200px] mb-[120px] reveal-on-scroll">
      {/* Content */}
      <div className="col-span-12 text-center reveal-on-scroll">
        <h2 className="text-h2-sm md:text-h1-md lg:text-h1-md">We waarderen jouw feedback!</h2>
        <p className="max-w-2xl mx-auto mt-6 text-sm md:text-base">
            Er staat een Google Formulier klaar voor jouw feedback. Jouw mening is ontzettend waardevol en helpt ons om de content nog beter af te stemmen op jouw behoeften. Alvast bedankt voor het invullen!
            <br />
            <br />
        </p>
        <div className='flex items-center justify-center w-full mt-2'>
        <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdM0K-x4Yqcewfyd4X0brC74driZWqlRl8vss2t5M8hbSOgGA/viewform?usp=dialog" className="flex items-center justify-start w-fit group reveal-on-scroll">
          <span className="text-xs btn-fill btn-smoke group-hover:bg-black group-hover:text-white">Vul het formulier in</span>
          <div className="btn-fill btn-smoke h-fit group-hover:bg-black"> 
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg" className='-rotate-90'>
              <path fillRule="evenodd" clipRule="evenodd" d="M8.99978 0.0429077V14.1287L14.4998 8.62871L15.914 10.0429L7.99978 17.9571L0.0855713 10.0429L1.49979 8.62871L6.99978 14.1287V0.0429077H8.99978Z" className=" group-hover:fill-white fill-black"/>
            </svg>
          </div>
        </a>
        </div>
        <div className='flex flex-col mt-12 md:mt-10 reveal-on-scroll'>
          <span>Heeft u vragen? stuur gerust een mailtje naar: </span><a href="mailto:tessa.vg@hotmail.com" className="text-[#ADB1FF]">tessa.vg@hotmail.com</a>
        </div>
      </div>

    </section>
  );
}
