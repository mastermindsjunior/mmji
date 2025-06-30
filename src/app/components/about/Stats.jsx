'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const containerRef = useRef(null);

  useEffect(() => {
    // scope all selectors to this component
    const ctx = gsap.context(() => {
      // set initial opacity to 0 for all items
      gsap.set('.stat-offset, .stat-normal', { opacity: 0 });

      // build a single timeline triggered on scroll
      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        }
      })
      // first & third items: slide back down to y=0
      .to('.stat-offset', {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power1.out'
      }, 0)
      // second & fourth items: slide up by 20px
      .to('.stat-normal', {
        y: -20,
        opacity: 1,
        duration: 0.6,
        ease: 'power1.out'
      }, 0);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full grid grid-cols-4 gap-6 my-8 mx-auto max-w-5xl"
    >
      <div style={{boxShadow:'0px 10px 15px #0e96cc1e'}} className="translate-y-[-25%] stat-offset border-b border-[#fff] p-6 rounded-3xl">
        <p className="text-5xl font-sfbo text-[#0e96cc]">123+</p>
        <p className="text-white/60 mt-3 font-sfth text-left">
          Lorem ipsum dolor sit amet.
        </p>
      </div>

      <div style={{boxShadow:'0px 10px 15px #0e96cc1e'}} className="stat-normal border-b border-[#fff] p-6 rounded-3xl">
        <p className="text-5xl font-sfbo text-[#0e96cc]">123+</p>
        <p className="text-white/60 mt-3 font-sfth text-left">
          Lorem ipsum dolor sit amet.
        </p>
      </div>

      <div style={{boxShadow:'0px 10px 15px #0e96cc1e'}} className="translate-y-[-25%] stat-offset border-b border-[#fff] p-6 rounded-3xl">
        <p className="text-5xl font-sfbo text-[#0e96cc]">123+</p>
        <p className="text-white/60 mt-3 font-sfth text-left">
          Lorem ipsum dolor sit amet.
        </p>
      </div>

      <div style={{boxShadow:'0px 10px 15px #0e96cc1e'}} className="stat-normal border-b border-[#fff] p-6 rounded-3xl">
        <p className="text-5xl font-sfbo text-[#0e96cc]">123+</p>
        <p className="text-white/60 mt-3 font-sfth text-left">
          Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  );
}
