"use client"
import React from 'react';
import Video from '../Video';

export default function VideoSection({ 
  thumbnailUrl, 
  videoUrl, 
  title, 
  description,
  className = "", // Optional className prop for custom positioning
  videoOnRight = true // New prop to control video position
}) {
  return (
    <section className={`container relative w-full grid grid-cols-12 gap-6 items-center ${className}`}>
      {/* Video Section */}
      <div className={`col-span-12 md:col-span-6 relative order-2 md:order-none before:absolute before:flex before:w-[90%] before:h-[90%] before:top-[-16px] md:before:top-[-32px] before:from-[#ADB1FF] before:via-[#ADB1FF] before:to-white before:opacity-20 before:z-[-1] before:rounded-3xl reveal-on-scroll ${
        videoOnRight 
          ? 'md:row-start-1 before:bg-gradient-to-br before:left-[-16px] md:before:left-[-32px]' 
          : 'order-2 md:order-1 md:col-start-7 before:bg-gradient-to-bl before:right-[-16px] md:before:right-[-32px]'
      }`}>
        <Video 
          thumbnailUrl={thumbnailUrl}
          videoUrl={videoUrl}
          title={title}
        />
      </div>
      
      {/* Text Section */}
      <div className={`col-span-12 md:col-span-5 h-full flex flex-col justify-center items-start order-1 md:order-none mb-6 md:mb-0 ${
        videoOnRight ? 'md:col-start-8' : 'order-1 md:order-2 '
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