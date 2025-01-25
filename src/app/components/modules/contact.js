"use client"
import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="container relative w-full grid grid-cols-12 gap-6 mt-[120px] md:mt-[140px] lg:mt-[200px]">
      {/* Content */}
      <div className="col-span-12 mb-12 text-center reveal-on-scroll">
        <h2 className="text-h2-sm md:text-h2-md lg:text-h2">Contact opnemen?</h2>
        <p className="max-w-2xl mx-auto mt-6 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
          nostrud exercitation ullamco
        </p>
      </div>

    </section>
  );
}
