"use client"
import React from "react";
import HeroTwo from '../components/modules/heroTwo';
import WhySlider from '../components/modules/WhySlider';
import InitiativesGrid from '../components/modules/InitiativesGrid';
export default function SustainableInitiatives() {
  return (
    <main className="flex flex-col h-full overflow-hidden">
      <div className=""> 
        <HeroTwo />
      </div>
      <div  id="initiatieven">
        <WhySlider />
      </div>
      <InitiativesGrid />
    </main>
  );
} 