'use client';

import React, { useState, useEffect } from 'react';

const Heading = () => {
  // Sample data for the carousel slides
  // Each slide has videoUrl, title, desc, and alignment ('left', 'center', 'right')
  const slides = [
    {
      videoUrl: '/vid/MasterMinds Junior.mp4',
      title: 'Building Your Brand’s Future in the Digital Universe',
      desc: 'Next-gen solutions for next-level success.',
      alignment: 'left',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  // h-[600px]
  return (
    <section className="relative w-full h-dvh  overflow-hidden">

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <video
            src={slide.videoUrl}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-bottom"
          />
          <div
            className={`absolute top-1/2 -translate-y-1/2 p-5 text-white   w-[75%] 
              ${slide.alignment === 'left' ? 'left-5 text-left' : ''}
              ${slide.alignment === 'center' ? 'left-1/2 -translate-x-1/2 text-center' : ''}
              ${slide.alignment === 'right' ? 'right-5 text-right' : ''}
            `}
          >
            <p className='font-jost text-base text-white/80'>{slide.desc}</p>
            <h2 className="my-4 font-sand text-5xl pb-2">{slide.title}</h2>
            <button className=' bg-transparent border border-white/50 px-4 py-2 rounded-full font-jost font-light text-white hover:bg-white hover:text-dark transition-all duration-300 ease-in'>Learn More</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Heading;