'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import bg from "@/assets/bg.jpeg"
import Image from 'next/image';

const changingWords = [
  "SEO Optimization",
  "Graphic Designing",
  "Web Development"
];

const Headings_2 = () => {
  const wrapperRef = useRef(null);
  const wordRef    = useRef(null);

  useEffect(() => {
    // 1) find the max width of all words
    let maxWidth = 0;
    changingWords.forEach(word => {
      wordRef.current.textContent = word;
      const w = wrapperRef.current.offsetWidth;
      if (w > maxWidth) maxWidth = w;
    });

    // 2) lock the wrapper to that width & clear the text
    wrapperRef.current.style.width = `${maxWidth}px`;
    wordRef.current.textContent = '';

    // 3) build an infinite timeline
    const tl = gsap.timeline({ repeat: -1 });

    changingWords.forEach(word => {
      // a) swap in the new word & jump it off-screen left
      tl.call(() => {
        wordRef.current.textContent = word;
        gsap.set(wordRef.current, { x: -maxWidth });
      });
      // b) slide it in (veil lifted)
      tl.to(wordRef.current, {
        x: 0,
        duration: 0.8,
        ease: 'power1.inOut'
      });
      // c) hold on screen
      tl.to({}, { duration: 1 });
      // d) slide it back out left
      tl.to(wordRef.current, {
        x: -maxWidth,
        duration: 0.8,
        ease: 'power1.inOut'
      });
    });


    gsap.to(".headingPara", {
        translateY: "0",
        duration: 1,
        delay: 0.3,
        stagger: 0.1,
    });
    gsap.to(".headingPara", {
        opacity: 1,
        duration: 1,
        delay: 0.3,
        stagger: 0.1,
        ease: "expo.in",
    });
    // Animate the button container
    gsap.to(".HeadingCTABtn", {
      opacity: 1,
      scale: 1,
      translateY: 0,
      duration: 0.8,
      delay: 0.4,
      ease: "power2.out",
    });
    
    // Animate the button text separately
    gsap.to(".HeadingCTABtnText", {
      opacity: 1,
      scale: 1,
      translateY: 0,
      duration: 0.6,
      delay: 0.6,
      ease: "back.out(1.7)",
    });
    gsap.to(".HeadingCTABtn span", {
        scale:1,
        opacity:1,
        translateY:0,
        delay: 0.3,
    });

    return () => tl.kill();
  }, []);

  return (
    <div className='flex flex-col justify-center items-start h-dvh 2xl:pt-32 pt-24 mainHeading px-32 relative '>
      <h1 className=' reltive z-10 font-sfth text-white 2xl:text-[110px] text-7xl flex flex-col justify-center items-start'>
        <span className='headingPara opacity-0 translate-y-12'>Innovating solutions for</span>
        {/* this outer span is overflow-hidden & fixed-width */}
        <span
          ref={wrapperRef}
          className='overflow-hidden inline-block whitespace-nowrap'
        >
          {/* this inner span gets the words and is animated */}
          <span
            ref={wordRef}
            className='headingPara opacity-0 font-sfbo text-[#0e96cc] 2xl:text-[67px] text-6xl inline-block whitespace-nowrap'
          />
        </span>
      </h1>

      <div>
        <p className=" reltive z-10 headingPara opacity-0 translate-y-12 2xl:text-sm text-xs font-light md:text-base my-6 2xl:w-3/4 w-full">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt corrupti consequuntur nesciunt aperiam, consequatur nihil? Eligendi eum dolores debitis odit repellat, magnam veritatis unde ab sed sit voluptatem quibusdam nemo nihil id porro doloribus! In saepe officiis unde sed nemo vitae blanditiis praesentium labore libero maiores. Harum ad fuga dolores.
        </p>
        {/* Primary CTA */}
        <button className=" reltive z-10 HeadingCTABtn relative inline-flex items-center justify-center px-6 py-2 mt-4 text-white rounded-full bg-black font-medium group overflow-hidden border-y border-x-0 border border-white border-t-blue-600 opacity-0 scale-90 translate-y-4">
          <span className="HeadingCTABtnText relative z-0 opacity-0 translate-y-3 scale-90">
            Get Started →
          </span>
        </button>
      </div>

      <Image src={bg} alt='bg' width={2000} height={1000} className=' absolute w-screen h-dvh top-0 left-0 z-[-1] pointer-events-none opacity-15 blur-lg' />
    </div>
  );
};

export default Headings_2;
