"use client"
import React from 'react';
import Video from '../Video';

export default function VideoSection({ 
  thumbnailUrl, 
  videoUrl, 
  title, 
  description,
  className = "",
  isReversed = false,
  objectPosition
}) {
  return (
    <section className={`container relative w-full grid grid-cols-12 gap-6 items-center ${className}`}>
      {/* Video Section */}
      <div className={`order-first md:order-none col-span-12 md:col-span-6 relative ${
        isReversed ? 'md:col-start-7 md:row-start-1' : ''
      } md:before:absolute md:before:flex md:before:w-[90%] md:before:h-[90%] md:before:top-[-32px] before:bg-[#ADB1FF] before:opacity-[30%] before:z-[-1] before:rounded-3xl before:bg-gradient-to-b ${
        isReversed ? 'md:before:right-[-32px]' : 'md:before:left-[-32px]'
      } reveal-on-scroll`}>
        <Video 
          thumbnailUrl={thumbnailUrl}
          videoUrl={videoUrl}
          title={title}
          objectPosition={objectPosition}
        />
      </div>
      
      {/* Text Section */}
      <div className={`order-first md:order-none col-span-12 md:col-span-5 h-full flex flex-col justify-center items-start mb-6 md:mb-0 ${
        isReversed ? 'md:row-start-1' : 'md:col-start-8'
      }`}>
        <h2 className="relative text-h2-sm md:text-h2-md lg:text-h2 reveal-on-scroll">
          {title}
        </h2>
        <p className="mt-6 text-sm md:text-base reveal-on-scroll">
          {description}
        </p>
      </div>
    </section>
  );
} 