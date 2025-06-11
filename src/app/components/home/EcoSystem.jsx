// components/EcoSystem.jsx
"use client";

import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import ScrambleText from '../common/ScrambledText';
import Image from 'next/image';
import { Activity, Zap, Atom, Shield, Infinity } from "lucide-react";



const blocks = [
  { icon: Activity, label: "Monitor", level: 3 },
  { icon: Zap, label: "Energy", level: 2 },
  { icon: Atom, label: "Core", level: 1 },
  { icon: Shield, label: "Security", level: 2 },
  { icon: Infinity, label: "Scalability", level: 3 },
];
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
<div className="w-full min-h-[100dvh] pt-[150px] px-6 md:px-12 ecosystemMain text-white">
  {/* Heading Section */}
  <div className="flex justify-center items-center text-center">
    <div className="flex flex-col justify-center items-center gap-4 ecosystemHeading max-w-xl">
      <h3 className="text-4xl font-semibold tracking-tight">
        <ScrambleText text="Industries we serve" duration={800} speed={5} active={start} />
      </h3>
      <p className="text-white/70 text-sm md:text-base">
        Discover how each part of our system works together in harmony.
      </p>
      <button className="border border-white/30 hover:border-white rounded-xl py-2 px-6 ecosystemBtn transition-colors duration-300">
        <span className="inline-block font-medium">Explore Ecosystem</span>
      </button>
    </div>
  </div>

  {/* Visual Layout Section */}
  <div className="mt-16 flex flex-col lg:flex-row justify-center items-center gap-8">
    {/* Left Column */}
<div className="grid grid-rows-5 gap-4 w-16 2xl:w-20 h-[60dvh] text-white/80 2xl:text-xs text-[10px] font-light">
  {blocks.map(({ icon: Icon, label, level }, i) => (
    <div
      key={i}
      className={`ani${level} opacity-0 w-full aspect-square rounded-md border border-white/20 bg-white/5 flex flex-col justify-center items-center text-center shadow-sm`}
    >
      <Icon className="2xl:h-4 h-3 2xl:w-4 w-3 mb-1" />
      <span>{label}</span>
    </div>
  ))}
</div>

    {/* Central Image */}
    <div className="flex-1 max-w-4xl h-[60dvh] overflow-hidden rounded-xl shadow-xl">
      <Image
        src="/heading.jpg"
        alt="Ecosystem"
        width={700}
        height={500}
        className="h-full w-full object-cover object-center"
      />
    </div>

    {/* Right Column (mirrored) */}
<div className="grid grid-rows-5 gap-4 w-16 2xl:w-20 h-[60dvh] text-white/80 2xl:text-xs text-[10px] font-light">
  {blocks.map(({ icon: Icon, label, level }, i) => (
    <div
      key={i}
      className={`ani${level} opacity-0 w-full aspect-square rounded-md border border-white/20 bg-white/5 flex flex-col justify-center items-center text-center shadow-sm`}
    >
      <Icon className="2xl:h-4 h-3 2xl:w-4 w-3 mb-1" />
      <span>{label}</span>
    </div>
  ))}
</div>
  </div>
</div>

  );
}
