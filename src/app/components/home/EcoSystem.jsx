// components/EcoSystem.jsx
"use client";

import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import ScrambleText from '../common/ScrambledText';

gsap.registerPlugin(ScrollTrigger);

export default function EcoSystem() {
  const [start, setStart] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.ecosystemMain',
        start:   'top 50%',
        end:     'top 0%',
        toggleActions: 'play none none reverse',
        onEnter:     () => setStart(true),
        onLeaveBack: () => setStart(false),
      }
    });

    // 1) Heading: only X-movement + opacity
    tl.fromTo(
      '.ecosystemHeading h3',
      { xPercent: 50,  opacity: 0 },
      { xPercent: 0,   opacity: 1, duration: 1 }
    )
    // 2) Paragraph: only opacity (play simultaneously)
    .fromTo(
      '.ecosystemHeading p',
      { opacity: 0 },
      { opacity: 1, duration: 1, delay:0.4, },
      '<'
    )
    // 3) Button: only opacity
    .fromTo(
      '.ecosystemBtn',
      { opacity: 0 },
      { opacity: 1, duration: 1, delay:0.5, },
      '<'
    )
    // 4) Button span: only scale
    .fromTo(
      '.ecosystemBtn span',
      { scale: 0.75 },
      { scale: 1, duration: 1, delay:0.5, },
      '<'
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div className='w-full min-h-[100dvh] pt-[150px] px-8 ecosystemMain'>
    {/* HEADING */}
      <div className='flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center gap-4 ecosystemHeading'>
          <h3 className='text-5xl'>
            <ScrambleText
              text={'Ecosystem'}
              duration={800}
              speed={5}
              active={start}
            />
          </h3>
          <p className='text-white/70'>
            Lorem ipsum dolor sit amet.
          </p>
          <button className='border-b border-white rounded-xl py-2 px-4 ecosystemBtn'>
            <span className=' inline-block'>Explore Ecosystem</span>
          </button>
        </div>
      </div>
      {/* HEADING */}
      
    </div>
  );
}
