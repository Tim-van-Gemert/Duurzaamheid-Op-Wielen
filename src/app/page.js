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
          thumbnailUrl="/images/interview_anne-marie_rakhorst.jpeg"
          videoUrl="https://www.youtube.com/watch?v=OuY0LUjMG20"
          title="Interview met Anne-Marie Rakhorst"
          description="Anne-Marie Rakhorst is ondernemer, inversteerder en voorloper in duurzaamheid en innovatie. Als oprichtster van duurzaamheid.nl en auteur stimuleert ze bewustwording en versnelt duurzame oplossingen."
          className="mt-[140px] md:mt-[100px] lg:mt-[200px]"
          objectPosition="center"
          isReversed={false}
        />
        
        <VideoSection 
          thumbnailUrl="/images/interview_vroemvroemkoffie.webp"
          videoUrl="https://www.youtube.com/watch?v=9r0_LfYH6Js"
          title="Interview met Jack Wong"
          description="Jack Wong is de oprichter van VroemVroemKoffie, de eerste elektrische koffiebus in Nederland. Hij begon zijn avontuur met een koffie-tuktuk en groeide uit tot een duurzaam pionier in de mobiele horeca."
          className="mt-[120px] md:mt-[100px] lg:mt-[180px]"
          objectPosition="center"
          isReversed={true}
        />

        <VideoSection 
          thumbnailUrl="/images/willem-schellingerhoud.jpg"
          videoUrl="https://www.youtube.com/watch?v=UsXGtXZoPiQ"
          title="Interview met Willem Schellingerhoud"
          description="Willem Schellingerhoud, logistiek adviseur bij de gemeente Rotterdam, geeft inzicht in emissiezones en helpt foodtruckeigenaren met praktische mogelijkheden om zich hierop aan te passen en voor te bereiden."
          className="mt-[140px] md:mt-[100px] lg:mt-[200px]"
          objectPosition="top"
          isReversed={false}
        />

        <VideoSection 
          thumbnailUrl="/images/tessa.jpg"
          videoUrl="https://www.youtube.com/watch?v=g-fyF0zpAIw"
          title="Over deze website – met Tessa van Gemert"
          description="Tijdens mijn studie ondernemerschap ontdekte ik hoe uitdagend het is om een foodtruck écht duurzaam te maken. Daarom heb ik deze website opgezet om kennis te delen en samen te ontdekken hoe we foodtrucks duurzamer kunnen maken."
          className="mt-[140px] md:mt-[100px] lg:mt-[200px] [&_img]:object-[90%_15%]"
          objectPosition="top"
          isReversed={true}
        />
      </div>

    </main>
  );
}
