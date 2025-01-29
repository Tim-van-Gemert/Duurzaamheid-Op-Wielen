"use client"
import React from "react";
import HeroThree from '../components/modules/heroThree';

const ArrowIcon = ({ bgColor = 'smoke' }) => (
    <div className={`inline-flex p-2 mr-2 btn-fill-sm btn-${bgColor} bg-[#ADB1FF] h-fit`}> 
      <svg width="10" height="10" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg" className='-rotate-90'>
        <path fillRule="evenodd" clipRule="evenodd" d="M8.99978 0.0429077V14.1287L14.4998 8.62871L15.914 10.0429L7.99978 17.9571L0.0855713 10.0429L1.49979 8.62871L6.99978 14.1287V0.0429077H8.99978Z" className="fill-black"/>
      </svg>
    </div>
  );
  

export default function Insights() {
  return (
    <main className="flex flex-col h-full">
        <div className="overflow-hidden"> 
            <HeroThree />
        </div>
        <section className="container relative w-full mt-[120px] md:mt-[100px] lg:mt-[180px]">
                <div className="relative z-10 grid items-center grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-4 lg:col-span-4 aspect-[2/3] order-2 md:order-1">   
                        <div className="relative z-10 before:absolute before:flex before:w-[90%] before:h-[90%] md:before:bottom-[-24px] md:before:left-[-24px] before:bottom-[-12px] before:left-[-12px] md:before:bg-[#ADB1FF] before:opacity-[30%] before:z-[-1] before:rounded-3xl reveal-on-scroll">
                        <img src="/images/anne-marie-rakhorst.png" className="object-cover object-right w-full h-full" />
                        </div>
                    </div>
                    <div className="order-1 col-span-12 md:col-span-8 lg:col-span-7 lg:col-start-6 md:order-2">
                        <h2 className="mb-8 md:mb-5 text-h2-sm md:text-h2-md lg:text-h2 reveal-on-scroll">Inzichten uit het gesprek met Anne-Marie Rakhorst</h2>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-1 group reveal-on-scroll">
                                <ArrowIcon bgColor="smoke" />
                                <span>Steeds meer foodtruckeigenaren ontdekken de voordelen van duurzaam ondernemen. Of je nu net begint of al jaren onderweg bent, hier vindKern van duurzaamheid: "Duurzaamheid draait om één simpele vraag: 'Deugt het of deugt het niet?'"</span>
                            </li>
                            <li className="flex items-start gap-1 group reveal-on-scroll">
                                <ArrowIcon bgColor="smoke" />
                                <span>Noodzaak van verduurzaming: We overschrijden momenteel de planetaire grenzen, en verandering is nodig. Innovatie en samenwerking spelen hierbij een cruciale rol.</span>
                            </li>
                            <li className="flex items-start gap-1 group reveal-on-scroll">
                                <ArrowIcon bgColor="smoke" />
                                <span>Advies aan ondernemers: Begin klein, bijvoorbeeld met duurzame inkoop, en werk vanuit daar verder. Lokaal inkopen, voedselverspilling tegengaan en jongeren betrekken bij creatieve concepten bieden grote kansen.</span>
                            </li>
                            <li className="flex items-start gap-1 group reveal-on-scroll">
                                <ArrowIcon bgColor="smoke" />
                                <span>Succesvolle bedrijven: Ze begrijpen de huidige uitdagingen en passen zich aan de tijdgeest aan. Dit is essentieel om maatschappelijk relevant te blijven.</span>
                            </li>
                            <li className="flex items-start gap-1 group reveal-on-scroll">
                                <ArrowIcon bgColor="smoke" />
                                <span>Praktische stappen: Kijk naar lokale en herbruikbare alternatieven en wees bereid om te innoveren en aan te passen aan de toekomst. je inspiratie en kennis om jouw foodtruck groener te maken!</span>
                            </li>
                        </ul>
                    </div>
                </div>
        </section>
        <section className=" relative w-full mt-[120px] md:mt-[100px] lg:mt-[180px] py-[64px] md:py-[100px] bg-[#ADB1FF20]">
                <div className="container relative z-10 grid items-center grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-8 lg:col-span-7 ">
                        <h2 className="mb-8 md:mb-5 text-h2-sm md:text-h2-md lg:text-h2 reveal-on-scroll">Inzichten uit het gesprek met Jack Wong</h2>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-1 group reveal-on-scroll">
                                <ArrowIcon bgColor="white" />
                                <span>De eerste elektrische koffiebus in Nederland: Jack Wong ontwikkelde de eerste groene koffiebus, een traject van twee jaar waarbij hij alles zelf moest uitzoeken. De bus is volledig stand-alone en ideaal voor locaties zonder stroom.</span>
                            </li>
                            <li className="flex items-start gap-1 group reveal-on-scroll">
                                <ArrowIcon bgColor="white" />
                                <span>Duurzaamheid in zijn bedrijf: Zijn koffie is biologisch en fairtrade, bekers zijn biologisch afbreekbaar, en hij koopt zoveel mogelijk lokaal in.</span>
                            </li>
                            <li className="flex items-start gap-1 group reveal-on-scroll">
                                <ArrowIcon bgColor="white" />
                                <span>Voordelen van elektrisch rijden: Elektrisch rijden geeft een streepje voor bij gemeentes en grote bedrijven en sluit aan bij de tijdgeest van duurzaamheid.</span>
                            </li>
                            <li className="flex items-start gap-1 group reveal-on-scroll">
                                <ArrowIcon bgColor="white" />
                                <span>Uitdagingen van elektrisch rijden: De actieradius is beperkt, vooral door het gewicht en weersomstandigheden. Goed plannen en bewust rijden is essentieel.</span>
                            </li>
                            <li className="flex items-start gap-1 group reveal-on-scroll">
                                <ArrowIcon bgColor="white" />
                                <span>Toekomst van elektrische voertuigen: Jack verwacht dat kleinere voertuigen zoals foodtrucks elektrisch blijven, terwijl grotere voertuigen mogelijk op waterstof overstappen.</span>
                            </li>
                            <li className="flex items-start gap-1 group reveal-on-scroll">
                                <ArrowIcon bgColor="white" />
                                <span>Advies aan foodtruckeigenaren: "Let op gewicht, kosten en afstand, en plan goed, vooral als je in milieuzones werkt."</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-12 overflow-hidden md:col-span-4 lg:col-span-4 lg:col-start-9 rounded-3xl reveal-on-scroll aspect-[2/3]">   
                        <img src="/images/jack-wong.jpeg" className="object-cover object-center w-full h-full" />
                    </div>
                </div>
        </section>
        <section className="container relative w-full mt-[120px] md:mt-[100px] lg:mt-[180px]">
                <div className="relative z-10 grid items-center grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-4 lg:col-span-4 aspect-[2/3] order-2 md:order-1">   
                        <div className="relative z-10 before:absolute before:flex before:w-[90%] before:h-[90%] md:before:bottom-[-24px] md:before:left-[-24px] before:bottom-[-12px] before:left-[-12px] md:before:bg-[#ADB1FF] before:opacity-[30%] before:z-[-1] before:rounded-3xl reveal-on-scroll">
                        <img src="/images/tessa.jpg" className="object-cover object-right w-full h-full rounded-3xl" />
                        </div>
                    </div>
                    <div className="order-1 col-span-12 md:col-span-8 lg:col-span-7 lg:col-start-6 md:order-2">
                        <h2 className="mb-8 md:mb-5 text-h2-sm md:text-h2-md lg:text-h2 reveal-on-scroll">Belangrijkste inzichten Tessa van Gemert</h2>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-1 group reveal-on-scroll">
                                <ArrowIcon bgColor="smoke" />
                                <span>Het idee achter de website: <br/> Tijdens haar studie ondernemerschap wilde Tessa een duurzame foodtruck starten die zo min mogelijk afval produceert. Uit de praktijk leerde ze dat dit veel uitdagender is dan verwacht, vooral door veranderende duurzaamheidsregels.</span>
                            </li>
                            <li className="flex items-start gap-1 group reveal-on-scroll">
                                <ArrowIcon bgColor="smoke" />
                                <span>Relevantie van duurzaamheid: <br/>De 17 Duurzaamheidsdoelen en de CSRD benadrukken het belang van duurzaam ondernemen. Inzicht in de uitstoot van bus, producten en verpakkingen kan foodtruckeigenaren een voorsprong geven bij samenwerkingen met bedrijven en evenementen.</span>
                            </li>
                            <li className="flex items-start gap-1 group reveal-on-scroll">
                                <ArrowIcon bgColor="smoke" />
                                <span>Praktische tips voor foodtruckeigenaren: 
                                    <ul className="mt-2 ml-4 space-y-2">
                                        <li className="list-disc">Neem een voorbeeldfunctie: Geef klanten duurzame opties zonder iets op te dringen, bijvoorbeeld door bestek en servetten pas te geven als dat nodig is.</li>
                                        <li className="list-disc">Zoek inspiratie buiten de branche: Door gesprekken met mensen uit andere sectoren ontstaan vaak nieuwe inzichten.</li>
                                        <li className="list-disc">Gebruik duurzame schoonmaakmiddelen: Biologisch afbreekbare producten verminderen schadelijke stoffen.</li>
                                        <li className="list-disc">Recycle frituurvet: Laat gebruikt vet ophalen door bedrijven zoals Green Oil Recycling om er biodiesel van te maken.</li>
                                    </ul>
                                </span>
                            </li>
                            <li className="flex items-start gap-1 group reveal-on-scroll">
                                <ArrowIcon bgColor="smoke" />
                                <span>De missie van de website: <br/>Samen kennis delen en leren hoe foodtrucks duurzamer kunnen worden, stap voor stap richting een betere toekomst.</span>
                            </li>
                        </ul>
                    </div>
                </div>
        </section>
        <section className=" relative w-full mt-[120px] md:mt-[100px] lg:mt-[180px] py-[64px] md:py-[100px] bg-[#ADB1FF20]">
                <div className="container relative z-10 grid items-center grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-8 lg:col-span-7 ">
                        <h2 className="mb-8 md:mb-5 text-h2-sm md:text-h2-md lg:text-h2 reveal-on-scroll">Belangrijkste inzichten Willem Schellingerhoud</h2>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-1 group reveal-on-scroll">
                                <ArrowIcon bgColor="white" />
                                <span>Wat zijn emissiezones?<br/> Emissiezones zijn afgebakende stedelijke gebieden met milieuregels die voor alle bedrijfsvoertuigen gelden, ongeacht of ze op diesel of benzine rijden.</span>
                            </li>
                            <li className="flex items-start gap-1 group reveal-on-scroll">
                                <ArrowIcon bgColor="white" />
                                <span>Landelijke richtlijnen, lokale uitvoering: <br/>De regels zijn landelijk bepaald, maar gemeentes voeren ze zelf uit. Sommige gemeentes zijn al actief, terwijl andere pas in 2026 starten.</span>
                            </li>
                            <li className="flex items-start gap-1 group reveal-on-scroll">
                                <ArrowIcon bgColor="white" />
                                <span>Praktische mogelijkheden voor ondernemers: <br/>Willem adviseert ondernemers over hun opties, zoals het aanvragen van dagontheffingen, subsidies en oplossingen voor korte en lange termijn.</span>
                            </li>
                            <li className="flex items-start gap-1 group reveal-on-scroll">
                                <ArrowIcon bgColor="white" />
                                <span>Belangrijke bronnen: <br/>Websites zoals <a href="https://logistiek010.nl/" target="_blank" className="underline">logistiek010.nl</a> en <a href="https://opwegnaarzes.nl/" target="_blank" className="underline">opwegnaarzes.nl</a> geven duidelijkheid over welke voertuigen nog toegang hebben tot emissiezones.</span>
                            </li>
                            <li className="flex items-start gap-1 group reveal-on-scroll">
                                <ArrowIcon bgColor="white" />
                                <span>Advies aan foodtruckeigenaren: <br/>Denk na over de toekomst van je voertuig, zowel op korte als lange termijn. Dit helpt om een duidelijke strategie te bepalen en voorbereid te zijn op de veranderingen.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-12 overflow-hidden md:col-span-4 lg:col-span-4 lg:col-start-9 rounded-3xl reveal-on-scroll aspect-[2/3]">   
                        <img src="/images/willem-schellingerhoud.jpg" className="object-cover object-center w-full h-full" />
                    </div>
                </div>
        </section>
    </main>
  );
} 