"use client";
import { useEffect, useState } from 'react';

export default function RevealOnScroll() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersection = (entries) => {
      // Reset delay for each new batch of intersecting elements
      let delay = 0;
      
      // Filter only elements that are intersecting and not already revealed
      const elementsToReveal = entries.filter(entry => 
        entry.isIntersecting && !entry.target.classList.contains('revealed')
      );

      elementsToReveal.forEach(entry => {
        const isMobileMenu = entry.target.closest('.mobile-menu');
        // Use shorter delay for mobile menu items
        const delayIncrement = isMobileMenu ? 150 : 150;
        
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, delay);
        delay += delayIncrement;
        
        observer.unobserve(entry.target);
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    // Only observe elements that don't have the 'revealed' class
    const elements = document.querySelectorAll('.reveal-on-scroll:not(.revealed)');
    elements.forEach(element => observer.observe(element));

    return () => {
      elements.forEach(element => observer.unobserve(element));
    };
  }, []);

  return null;
} 