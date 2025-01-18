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
          // Add delay based on the order of appearance
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, delay);
          delay += 100; // Increment delay for next element
          
          // Stop observing after revealing
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    // Get all elements with reveal-on-scroll class
    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(element => observer.observe(element));

    // Cleanup
    return () => {
      elements.forEach(element => observer.unobserve(element));
    };
  }, []);

  return null;
} 