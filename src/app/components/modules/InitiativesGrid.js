"use client"
import React from 'react';

const ArrowIcon = () => (
  <div className="inline-flex p-2 mr-2 btn-fill-sm btn-smoke bg-[#ADB1FF]  h-fit"> 
    <svg width="10" height="10" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg" className='-rotate-90'>
      <path fillRule="evenodd" clipRule="evenodd" d="M8.99978 0.0429077V14.1287L14.4998 8.62871L15.914 10.0429L7.99978 17.9571L0.0855713 10.0429L1.49979 8.62871L6.99978 14.1287V0.0429077H8.99978Z" className="fill-black"/>
    </svg>
  </div>
);

export default function InitiativesGrid() {

    return (
    <div className="container relative w-full mt-[120px] md:mt-[100px] lg:mt-[180px]">

      <div className="relative z-10 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-8 lg:col-span-12">
          <h2 className="mb-6 md:mb-12 text-h2-sm md:text-h2-md lg:text-h2 reveal-on-scroll">Initiatieven</h2>
          
          <div className="space-y-8">
            <section>
              <h3 className="mb-5 font-serif text-lg font-normal md:text-h2-sm reveal-on-scroll">Duurzaamheid en mobiliteit:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-1 group reveal-on-scroll">
                  <ArrowIcon />
                  <span className=''><a href="https://opwegnaarzes.nl" target="_blank" className="relative before:absolute before:bottom-0 before:w-full before:h-[1px] before:bg-black before:transition-all hover:before:w-1/2 hover:before:left-1/4 before:left-0 w-fit">opwegnaarzes.nl</a> - Alles over emissiezonnes en overstap naar een duurzamer voertuig</span>
                </li>
                <li className="flex items-start gap-1 group reveal-on-scroll">
                  <ArrowIcon />
                  <span>Rijksdienst voor Ondernemend Nederland (RVO) - Subsidies en regelingen voor duurzame voertuigen en verduurzaming</span>
                </li>
                <li className="flex items-start gap-1 group reveal-on-scroll">
                  <ArrowIcon />
                  <span>Milieu centraal - Praktische tips voor ondernemers om duurzamer te werken, inclusief energie - en vervoersadvies</span>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="mb-5 font-serif text-lg font-normal md:text-h2-sm reveal-on-scroll">Afval en verpakkingen:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-1 group reveal-on-scroll">
                  <ArrowIcon />
                  <span>Zero Waste Nederland – Praktische tips om minder afval te produceren in je foodtruck</span>
                </li>
                <li className="flex items-start gap-1 group reveal-on-scroll">
                  <ArrowIcon />
                  <span>Algemene duurzaamheid en inspiratie: Duurzaamheid.nl – kennisplatform met informatie over duurzame initiatieven en innovaties</span>
                </li>
                <li className="flex items-start gap-1 group reveal-on-scroll">
                  <ArrowIcon />
                  <span>Circulair Friesland – Samenwerkingsplatform voor ondernemers met innovatieve ideeën</span>
                </li>
              </ul>
            </section>
            
            <section>
              <h3 className="mb-5 font-serif text-lg font-normal md:text-h2-sm reveal-on-scroll">Voedsel en inkoop:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-1 group reveal-on-scroll">
                  <ArrowIcon />
                  <span>Samen Tegen Voedselverspilling – inspiratie en tools om voedselverspilling tegen te gaan</span>
                </li>
                <li className="flex items-start gap-1 group reveal-on-scroll">
                  <ArrowIcon />
                  <span>Fairtrade Nederland – Hoe je als ondernemer kunt bijdragen aan eerlijke handel</span>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="mb-5 font-serif text-lg font-normal md:text-h2-sm reveal-on-scroll">Duurzame boereninitiatieven:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-1 group reveal-on-scroll ">
                  <ArrowIcon />
                  <span>Herenboeren Nederland – Coöperaties waarin consumenten samenwerken met boeren om lokaal, duurzaam voedsel te produceren</span>
                </li>
                <li className="flex items-start gap-1 group reveal-on-scroll">
                  <ArrowIcon />
                  <span>Bionext – Het netwerk voor biologische landbouw, dat ondernemers ondersteunt met informatie en verbindingen binnen de biologische sector</span>
                </li>
                <li className="flex items-start gap-1 group reveal-on-scroll">
                  <ArrowIcon />
                  <span>Land van ons – Een collectief dat landbouwgrond koopt om dit duurzaam te beheren en biodiversiteit te herstellen</span>
                </li>
                <li className="flex items-start gap-1 group reveal-on-scroll">
                  <ArrowIcon />
                  <span>Lenteland – Gericht op regeneratieve landbouw en het herstel van bodemgezondheid via lokale landbouwprojecten</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 