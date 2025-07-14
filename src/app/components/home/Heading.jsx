'use client';

import React, { useState, useEffect } from 'react';

const Heading = () => {
  // Sample data for the carousel slides
  // Each slide has videoUrl, title, desc, and alignment ('left', 'center', 'right')
  const slides = [
    {
      videoUrl: '/vid/MasterMinds Junior.mp4',
      title: 'Slide One',
      desc: 'This is the description for slide one.',
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
            className={`absolute bottom-5 p-5 text-white bg-black/50 max-w-[50%] 
              ${slide.alignment === 'left' ? 'left-5 text-left' : ''}
              ${slide.alignment === 'center' ? 'left-1/2 -translate-x-1/2 text-center' : ''}
              ${slide.alignment === 'right' ? 'right-5 text-right' : ''}
            `}
          >
            <h2 className="m-0 font-jost">{slide.title}</h2>
            <p className='font-sfth'>{slide.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Heading;