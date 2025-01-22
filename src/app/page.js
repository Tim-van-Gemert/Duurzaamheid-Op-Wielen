"use client"
import React from "react";
import Hero from './components/modules/hero';
import VideoSection from './components/modules/video-section';

export default function Home() {
  return (
    <main className="flex flex-col h-full">
      <div className="overflow-hidden"> 
      <Hero />

      </div>
    

      <div id="interviews">
      <VideoSection 
          thumbnailUrl="/images/interview_annie-marie_rakhorst.jpeg"
          videoUrl="https://www.youtube.com/watch?v=BVdHrTfO2PE"
          title="Interview met Annie-Marie Rakhorst"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          className="mt-[120px] md:mt-[100px] lg:mt-[200px]"
          isReversed={false}
        />
        
        <VideoSection 
          thumbnailUrl="/images/interview_vroemvroemkoffie.webp"
          videoUrl="https://www.youtube.com/watch?v=BVdHrTfO2PE"
          title="Interview met een duurzame foodtruck eigenaar"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          className="mt-[120px] md:mt-[100px] lg:mt-[180px]"
          isReversed={true}
        />
      </div>


    </main>
  );
}
