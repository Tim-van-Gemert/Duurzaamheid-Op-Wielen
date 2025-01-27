"use client"
import React from "react";
import Hero from './components/modules/hero';
import VideoSection from './components/modules/video-section';
import Contact from './components/modules/contact';
export default function Home() {
  return (
    <main className="flex flex-col h-full">
      <div className="overflow-hidden"> 
      <Hero />
      </div>
    
      {/* uncomment when content is ready */}
      {/* <div id="interviews">
      <VideoSection 
          thumbnailUrl="/images/interview_annie-marie_rakhorst.jpeg"
          videoUrl="https://www.youtube.com/watch?v=BVdHrTfO2PE"
          title="Interview met Annie-Marie Rakhorst"
          description="Anne-Marie Rakhorst is ondernemer, inversteerder en voorloper in duurzaamheid en innovatie. Als oprichtster van duurzaamheid.nl en auteur stimuleert ze bewustwording en versnelt duurzame oplossingen."
          className="mt-[120px] md:mt-[100px] lg:mt-[200px]"
          isReversed={false}
        />
        
        <VideoSection 
          thumbnailUrl="/images/interview_vroemvroemkoffie.webp"
          videoUrl="https://www.youtube.com/watch?v=BVdHrTfO2PE"
          title="Interview met Jack Wong"
          description="Jack Wong is de oprichter van VroemVroemKoffie, de eerste elektrische koffiebus in Nederland. Hij begon zijn avontuur met een koffie-tuktuk en groeide uit tot een duurzaam pionier in de mobiele horeca."
          className="mt-[120px] md:mt-[100px] lg:mt-[180px]"
          isReversed={true}
        />
      </div> */}

      <Contact />
    </main>
  );
}
