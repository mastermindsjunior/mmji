// components/MissionVision.jsx
'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MissionVision() {
  const containerRef = useRef(null);

  useEffect(() => {
    // scope all selectors to this component
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
          toggleActions: 'play none none reverse'
        }
      });

      // heading in from left
      tl.from('.mission-heading', {
        x: -100,
        opacity: 0,
        duration: 0.8,
        ease: 'power1.out'
      })
      // paragraph in from right (start at same time as heading)
      .from('.mission-paragraph', {
        x: 100,
        opacity: 0,
        duration: 0.8,
        ease: 'power1.out'
      }, '<')
      // grid items stagger in from bottom
      .from('.mission-item', {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.6,
        ease: 'power1.out'
      }, '-=0.4');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-dvh w-full mx-auto max-w-[1200px] flex flex-col justify-center items-center gap-10"
    >
      {/* heading + paragraph */}
      <div className="flex justify-between items-center gap-4 w-full">
        <h1 className="mission-heading text-white/90 font-sfth w-[55%] text-6xl">
          Crafting <span className="font-sfbo text-[#0e96cc]">Impactful</span>{' '}
          Digital experience
        </h1>
        <p className="mission-paragraph w-[45%] font-sfth text-white/70 text-right">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          aperiam consequuntur, quibusdam delectus perferendis eligendi cum
          explicabo reprehenderit esse ipsum et tempora pariatur?
        </p>
      </div>

      {/* grid */}
      <div className="w-full grid grid-cols-3 gap-6">
        <div
          style={{ boxShadow: '0px 16px 43px #0e96cc3b' }}
          className="mission-item bg-white/10 border border-[#0e96cc] rounded-2xl p-6"
        >
          <Image
            src="/heading.jpg"
            alt="heading"
            width={300}
            height={200}
            className="aspect-video w-full object-cover object-center"
          />
          <h5 className="font-sfbo text-lg my-3">Our Mission</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            laudantium impedit aut quisquam porro.
          </p>
        </div>
        <div
          style={{ boxShadow: '0px 16px 43px #0e96cc3b' }}
          className="mission-item bg-white/10 border border-[#0e96cc] rounded-2xl p-6"
        >
          <Image
            src="/heading.jpg"
            alt="heading"
            width={300}
            height={200}
            className="aspect-video w-full object-cover object-center"
          />
          <h5 className="font-sfbo text-lg my-3">Our Vision</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            laudantium impedit aut quisquam porro.
          </p>
        </div>
        <div
          style={{ boxShadow: '0px 16px 43px #0e96cc3b' }}
          className="mission-item bg-white/10 border border-[#0e96cc] rounded-2xl p-6"
        >
          <Image
            src="/heading.jpg"
            alt="heading"
            width={300}
            height={200}
            className="aspect-video w-full object-cover object-center"
          />
          <h5 className="font-sfbo text-lg my-3">Our Values</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            laudantium impedit aut quisquam porro.
          </p>
        </div>
      </div>
    </div>
  );
}
