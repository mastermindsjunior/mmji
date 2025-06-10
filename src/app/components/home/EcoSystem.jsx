// components/EcoSystem.jsx
"use client";

import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import ScrambleText from '../common/ScrambledText';
import Image from 'next/image';

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
    .fromTo(
      '.ecosystemMain img',
      {scale:0.7, opacity: 0, filter:'blur(2px)', y:100 },
      {scale:1, filter:'blur(0px)', opacity: 1, y:0, duration: 0.8 },
      '<'
    )
    .fromTo(
      '.ecosystemMain .ani1',
      {scale:0.8, opacity: 0, filter:'blur(2px)' },
      {scale:1, filter:'blur(0px)', opacity: 1, duration: 0.8, delay:0.2, ease:'back.out(1.7)' },
      '<'
    )
    .fromTo(
      '.ecosystemMain .ani2',
      {scale:0.8, opacity: 0, filter:'blur(2px)' },
      {scale:1, filter:'blur(0px)', opacity: 1, duration: 0.8, delay:0.25, ease:'back.out(1.7)' },
      '<'
    )
    .fromTo(
      '.ecosystemMain .ani3',
      {scale:0.8, opacity: 0, filter:'blur(2px)' },
      {scale:1, filter:'blur(0px)', opacity: 1, duration: 0.8, delay:0.3, ease:'back.out(1.7)' },
      '<'
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
      { scale: 1, duration: 0.6, delay:0.5, },
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
          <h3 className=' text-3xl'>
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

      <div className=' h-[60dvh] w-full flex justify-center mt-8 items-center gap-6 px-[20%] ecosystemMain'>
        <div className=' grid grid-rows-5 grid-cols-1 2zl:w-20 w-16 h-full gap-4'>
          <div className=' w-full aspect-square rounded-sm ani3 opacity-0 border border-white'></div>
          <div className=' w-full aspect-square rounded-sm ani2 opacity-0 border border-white'></div>
          <div className=' w-full aspect-square rounded-sm ani1 opacity-0 border border-white'></div>
          <div className=' w-full aspect-square rounded-sm ani2 opacity-0 border border-white'></div>
          <div className=' w-full aspect-square rounded-sm ani3 opacity-0 border border-white'></div>
        </div>
        <div className=' flex-1 h-full'>
          <Image src={'/heading.jpg'} alt='' width={700} height={500} className=' h-full w-full object-cover object-center'/>
        </div>
        <div className=' grid grid-rows-5 grid-cols-1 2zl:w-20 w-16 h-full gap-4'>
          <div className=' w-full aspect-square rounded-sm ani3 opacity-0 border border-white'></div>
          <div className=' w-full aspect-square rounded-sm ani2 opacity-0 border border-white'></div>
          <div className=' w-full aspect-square rounded-sm ani1 opacity-0 border border-white'></div>
          <div className=' w-full aspect-square rounded-sm ani2 opacity-0 border border-white'></div>
          <div className=' w-full aspect-square rounded-sm ani3 opacity-0 border border-white'></div>
        </div>
      </div>
      
    </div>
  );
}
