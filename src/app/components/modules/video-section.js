"use client"
import React from 'react';
import Video from '../Video';

export default function VideoSection({ 
  thumbnailUrl, 
  videoUrl, 
  title, 
  description,
  className = "", // Optional className prop for custom positioning
  isReversed = false // New prop to control section layout
}) {
  return (
    <section className={`container relative w-full grid grid-cols-12 gap-6 items-center ${className}`}>
      {/* Video Section */}
      <div className={`order-first md:order-none col-span-12 md:col-span-6 relative ${
        isReversed ? 'md:col-start-7 md:row-start-1' : ''
      } before:absolute before:flex before:w-[90%] before:h-[90%] before:top-[-16px] md:before:top-[-32px] before:from-[#ADB1FF] before:via-[#ADB1FF] before:to-white before:opacity-20 before:z-[-1] before:rounded-3xl before:bg-gradient-to-br ${
        isReversed ? 'before:right-[-16px] md:before:right-[-32px]' : 'before:left-[-16px] md:before:left-[-32px]'
      } reveal-on-scroll`}>
        <Video 
          thumbnailUrl={thumbnailUrl}
          videoUrl={videoUrl}
          title={title}
        />
      </div>
      
      {/* Text Section */}
      <div className={`order-first md:order-none col-span-12 md:col-span-5 h-full flex flex-col justify-center items-start mb-6 md:mb-0 ${
        isReversed ? 'md:row-start-1' : 'md:col-start-8'
      }`}>
        <h2 className="text-h2-sm md:text-h2-md lg:text-h2 reveal-on-scroll">
          {title}
        </h2>
        <p className="mt-6 text-sm md:text-base reveal-on-scroll">
          {description}
        </p>
      </div>
    </section>
  );
} 