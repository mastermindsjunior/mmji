'use client';

import gsap from 'gsap';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

const milestones = [
  {
    year: '2020 - Where It All Began',
    points: [
      'Founded with a bold vision to transform digital experiences.',
      'Secured our first client—a leading educational institution.',
    ],
  },
  {
    year: '2021 - Momentum Builds',
    points: [
      'Expanded into education, childcare, and hospitality.',
      'Strengthened our presence with diverse, sector-driven solutions.',
    ],
  },
  {
    year: '2022 - Scaling Up',
    points: [
      'Team growth fueled by rising demand.',
      'Entered new industries: construction, healthcare, retail, and food services.',
    ],
  },
  {
    year: '2023 - Strategic Reach',
    points: [
      'Expanded our regional footprint to Alberta and Saskatchewan.',
      'Introduced new offerings: QR codes, company profiles, and bespoke branding.',
    ],
  },
  {
    year: '2024 - Going Global',
    points: [
      'Launched operations in India.',
      'Gained traction in Toronto, enhancing our international footprint.',
    ],
  },
  {
    year: '2025 - The Global Vision',
    points: [
      'Actively entering new global markets.',
      'Advancing with purpose, precision, and performance.',
    ],
  },
];

export default function OurStorySection() {
  const rocketRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // 1. Grab all the dots we created in the loop
    const dots = containerRef.current.querySelectorAll('.milestone-dot');
    const rocket = rocketRef.current;

    if (!dots.length || !rocket) return;

    // 2. Create a GSAP Timeline
    const tl = gsap.timeline({ repeat: -1 });

    dots.forEach((dot, index) => {
      // Calculate the X position of the dot relative to the container
      const dotRect = dot.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      
      // Calculate center: (Dot Left - Container Left) - (Rocket Width / 2) + (Dot Width / 2)
      const targetX = (dotRect.left - containerRect.left) - ((rocket.offsetWidth) + (dotRect.width/2));

      tl.to(rocket, {
        x: targetX,
        duration: 2,
        ease: "power2.inOut",
      })
      .to(rocket, {
        // Optional: Add a little "wobble" while it pauses
        y: "-=5", 
        repeat: 1, 
        yoyo: true, 
        duration: 0.5 
      }, "+=0") 
      .to({}, { duration: 1.5 }); // This is our 1.5 second pause at each dot
    });

    return () => tl.kill(); // Cleanup on unmount
  }, []);

  return (
    <section className="relative py-16 bg-primary-dark text-sec font-sfth">
      <div className=" w-full mx-auto px-6 lg:px-8" ref={containerRef}>
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-jost font-semibold mb-6">
          <span className="text-white">Milestones That Define</span>{' '}
          <span className="text-sec">Us</span>
          <span className="text-gray-400">.</span>
        </h2>

        {/* Timeline */}
        <div className="relative mt-12">
          {/* Horizontal line */}
          <div className="absolute top-8 xl:left-0 left-8 xl:right-0 xl:h-0.5 h-full xl:w-full w-0.5  bg-gray-700" />

{/* The Rocket */}
          <div 
            ref={rocketRef} 
            className="absolute z-20 pointer-events-none"
            style={{ top: '-10px' }} // Adjust based on your line height
          >
            <Image src={'/astro/4.png'} width={60} height={60} alt="rocket" className="w-12 h-12 object-contain -scale-x-100" />
          </div>
          {/* Dots + cards */}
          <div className="relative pt-8 overflow-hidden">
            <div className="flex xl:flex-row flex-col xl:items-start items-end justify-between min-w-max px-4 2xl:space-x-8 xl:space-x-4 ">
                        {milestones.map(({ year, points }, i) => (
                <div
                  key={1}
                  className="flex-shrink-0 flex xl:flex-col flex-row items-center 2xl:w-56 xl:w-48 w-[300px] xl:mr-0 mr-4 pb-2"
                >
                  {/* Dot */}
                  <div className={` milestone-dot relative z-10 w-3 h-3 shrink-0 xl:-translate-y-1 xl:translate-x-0 -translate-x-[5px] bg-sec d-full border-2 border-gray-800 dot-${year} `} />

                  {/* Connector line */}
                  <div className="xl:w-px w-8 xl:h-8 h-px bg-gray-700 xl:mt-1 mt-0 xl:ml-0 ml-1" />

                  {/* Card */}
                  <div className="mt-4 bg-primary p-4 rounded-lg shadow shadow-sec hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-in-out text-center">
                    <h3 className="text-xl font-jost font-bold text-sec">
                      {year.split("-").map((text, i) => (
                        <>
                        <span key={i}>{text}</span>
                        {i < 1 && <br/>}
                        </>
                      ))}
                    </h3>
                    <ul className="mt-2 font-jost text-sm text-gray-300 space-y-2">
                      {points.map((pt, i) => (
                        <li key={i}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
