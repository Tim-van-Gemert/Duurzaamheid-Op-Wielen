"use client";
import { useEffect, useState } from 'react';

export default function RevealOnScroll() {
  useEffect(() => {
    let delay = 0;
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const isMobileMenu = entry.target.closest('.mobile-menu');
          // Use shorter delay for mobile menu items
          const delayIncrement = isMobileMenu ? 50 : 100;
          
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, delay);
          delay += delayIncrement; // Shorter increment for mobile menu items
          
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(element => observer.observe(element));

    return () => {
      elements.forEach(element => observer.unobserve(element));
    };
  }, []);

  return null;
} 