"use client"
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Replace with just the core CSS
import 'swiper/css';

const swiperStyles = {
  '.swiper-pagination': {
    display: 'none'
  },
  '.swiper-button-next, .swiper-button-prev': {
    display: 'none'
  }
};

const slides = [
  {
    number: "1.",
    text: "De 17 Duurzaamheidsdoelen van de Verenigde Naties vormen een wereldwijd plan om te werken aan een betere toekomst. Ze richten zich op grote thema's zoals klimaatverandering, duurzaamheid en ongelijkheid. Voor ondernemers betekent dit dat verduurzaming een belangrijke rol speelt in het bijdragen aan deze doelen én het voldoen aan de groeiende vraag naar bewuste keuzes."
  },
  {
    number: "2.",
    text: "De CSRD (Corporate Sustainability Reporting Directive) verplicht grote bedrijven om hun impact op het milieu, zoals CO2-uitstoot, te rapporteren. Dit raakt ook kleinere ondernemers, omdat grotere bedrijven deze informatie van hun leveranciers nodig hebben."
  },
  {
    number: "3.",
    text: "Als foodtruckeigenaar kun je een voorsprong krijgen door inzicht te hebben in de uitstoot van je bus, producten en verpakkingen. Door te laten zien dat je bewust bezig bent met duurzaamheid, maak je jouw foodtruck aantrekkelijker voor samenwerkingen met bedrijven en evenementen."
  }
];

export default function WhySlider() {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [swiperKey, setSwiperKey] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setSwiperKey(prev => prev + 1);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="container relative w-full mt-[140px] md:mt-[100px] lg:mt-[200px] flex flex-col md:block reveal-on-scroll ">

        <h2 className="flex mb-6 text-h2-sm reveal-on-scroll md:hidden">
            Waarom verduurzamen belangrijk is
        </h2>
        
        
        <div className="flex flex-col order-2 md:items-center md:flex-row md:justify-between md:order-1">
            <h2 className="hidden text-h2-sm md:text-h2-md lg:text-h2 reveal-on-scroll md:flex">
                Waarom verduurzamen belangrijk is
            </h2>
        
            <div className="flex items-center justify-end gap-2 mt-4 md:mt-0 ">
                <button className={`swiper-button-prev group reveal-on-scroll`} disabled={isBeginning}>
                    <div className={`rotate-180 btn-fill btn-smoke h-fit ${isBeginning ? 'opacity-[30%] group-hover:bg-smoke' : 'group-hover:bg-black'}`}> 
                        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg" className='-rotate-90'>
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.99978 0.0429077V14.1287L14.4998 8.62871L15.914 10.0429L7.99978 17.9571L0.0855713 10.0429L1.49979 8.62871L6.99978 14.1287V0.0429077H8.99978Z" className={`${isBeginning ? 'fill-black' : 'group-hover:fill-white fill-black'}`}/>
                        </svg>
                    </div>
                </button>
                <button className={`swiper-button-next group reveal-on-scroll`} disabled={isEnd}>
                    <div className={`btn-fill btn-smoke h-fit ${isEnd ? 'opacity-[30%] group-hover:bg-smoke' : 'group-hover:bg-black'}`}> 
                        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg" className='-rotate-90'>
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.99978 0.0429077V14.1287L14.4998 8.62871L15.914 10.0429L7.99978 17.9571L0.0855713 10.0429L1.49979 8.62871L6.99978 14.1287V0.0429077H8.99978Z" className={`${isEnd ? 'fill-black' : 'group-hover:fill-white fill-black'}`}/>
                        </svg>
                    </div>
                </button>
            </div>
    
        </div>


      <div className="relative order-1 md:mt-10 md:order-2">
        <Swiper
          key={swiperKey}
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          autoHeight={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            }
          }}
          className='h-full'
        >
          {slides.map((slide, index) => (
            <SwiperSlide style={{ height: '100%' }} key={index}>
              <div className="bg-[#ADB1FF20] p-6 md:p-8 rounded-3xl flex flex-col  h-full" style={{ height: '100%' }} >
                <span className="mb-4 font-sans text-h2-sm">{slide.number}</span>
                <p className="text-sm md:text-base">{slide.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>


      </div>
    </section>
  );
} 