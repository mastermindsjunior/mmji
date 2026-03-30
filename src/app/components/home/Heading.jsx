'use client';

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Heading = () => {
  const container = useRef(null);
  
  // The constant background video
  const videoUrl = '/mmj home page.mp4';

  const textSlides = [
    {
      title: 'Welcome to MasterMinds Junior',
      desc: 'Building Your Brand’s Future',
    },
    {
      title: 'Global Reach, Local Stronghold',
      desc: 'We are the best digital marketing agency for startups and growing businesses across India.',
    },
    {
      title: 'Visionary Leadership',
      desc: 'A testament to what’s possible when leadership meets relentless passion.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Cycle through text every 4.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % textSlides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [textSlides.length]);

  useGSAP(() => {
    const tl = gsap.timeline();

    // 1. Reset state (invisible and shifted down)
    gsap.set(".animate-item", { 
      y: 40, 
      opacity: 0, 
      filter: 'blur(10px)' 
    });

    // 2. Entrance Animation
    tl.to(".animate-item", {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      duration: 1.2,
      stagger: 0.2,
      ease: "power4.out",
    })
    // 3. Wait and then Exit Animation (occurs right before next state change)
    .to(".animate-item", {
      y: -20,
      opacity: 0,
      filter: 'blur(5px)',
      duration: 0.8,
      delay: 2.2, // Time text stays still
      ease: "power2.in"
    });

  }, { scope: container, dependencies: [currentIndex] });

  return (
    <section ref={container} className="relative w-full h-dvh overflow-hidden bg-black">
      
      {/* Constant Background Video - Only one instance */}
      <video
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover object-bottom transition-opacity duration-1000"
      />
      
      {/* Darker Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Animated Text Container */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="xl:w-[75%] w-[90%] text-center px-4">
          
          <p className="animate-item font-jost text-white/90 text-lg md:text-2xl uppercase tracking-widest mb-4">
            {textSlides[currentIndex].desc}
          </p>
          
          <h2 className="animate-item font-jost font-bold text-white xl:text-8xl text-4xl leading-tight">
            {textSlides[currentIndex].title}
          </h2>

          <div className="animate-item mt-8 h-1 w-24 bg-primary mx-auto rounded-full" />
        </div>
      </div>

    </section>
  );
};

export default Heading;