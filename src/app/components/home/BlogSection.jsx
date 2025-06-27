"use client";
import React, { useEffect, useRef, useState } from 'react';
import ScrambleText from '../common/ScrambledText';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const BlogSection = () => {
  const totalSlides = 4;
  const [currSlide, setCurrSlide] = useState(0);
  const [animating, setAnimating] = useState(false);
  const cardRefs = useRef([]);
  const [direction, setDirection] = useState('next');


  useEffect(() => {
    gsap.fromTo(
      cardRefs.current,
      { bottom: '2rem', opacity: 0 },
      {
        bottom: '0rem',
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.blog-section',
          start: 'top 40%',
          end: 'top 0%',
        },
      }
    );
  }, []);

const Next = () => {
  if (animating || currSlide >= totalSlides - 1) return;
  setDirection('next');
  setCurrSlide((prev) => prev + 1);
};

const Prev = () => {
  if (animating || currSlide <= 0) return;
  setDirection('prev');
  setCurrSlide((prev) => prev - 1);
};


useEffect(() => {
  setAnimating(true);
  const tl = gsap.timeline({
    onComplete: () => setAnimating(false),
  });

  tl.to(cardRefs.current, {
    xPercent: -currSlide * 100,
    duration: 1,
    ease: "power2.out",
    stagger: {
      each: 0.05,
      from: direction === 'next' ? "start" : "end", // ← fixes the overlap
    },
  });
}, [currSlide]);

  return (
    <div className='w-full pt-[10%] min-h-dvh flex flex-col justify-around items-center blog-section'>
      {/* HEADING */}
      <div className='flex justify-center items-center relative z-10'>
        <div className='flex flex-col justify-center items-center gap-4 ecosystemHeading'>
          <h3 className='text-3xl font-sfbo'>
            <ScrambleText text={'Articles'} duration={800} speed={5} />
          </h3>
          <p className='text-white/70 font-sfth'>Lorem ipsum dolor sit amet.</p>
          <button className='border-b border-white rounded-xl py-2 px-4 ecosystemBtn'>
            <span className='inline-block'>View All</span>
          </button>
        </div>
      </div>

      {/* CAROUSEL */}
      <div className='w-full flex-1 px-[20%] flex justify-start items-center relative overflow-hidden'>

        <button
          onClick={Prev}
          className='absolute z-10 top-1/2 -translate-y-1/2 left-[5%] rounded-full p-2 border border-white'
        >
          <ChevronLeft color='white'/>
        </button>
        <div className=' w-full h-full flex justify-start items-center overflow-hidden'>
            {Array.from({ length: totalSlides }).map((_, i) => (
            <div
                key={i}
                ref={(el) => (cardRefs.current[i] = el)}
                className='blogCard shrink-0 px-2 w-1/3 h-[40dvh] relative'
            >
                <div className='h-full w-full rounded-[1rem] bg-[#111] overflow-hidden flex flex-col'>
                {/* Image */}
                <img
                    src="./heading.jpg"
                    alt="Blog header"
                    className="w-full h-[40%] object-cover"
                />

                {/* Content */}
                <div className="flex flex-col justify-between flex-1 p-4">
                    {/* Title */}
                    <h3 className="text-white font-semibold text-base truncate">
                    Blog Post Title Goes Here
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-white/70 overflow-hidden text-ellipsis mt-2 mb-4 flex-1 line-clamp-[auto]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    {/* Divider + Date */}
                    <div className="mt-auto pt-2 border-t border-white/20 text-xs text-white/50 text-right">
                    June 11, 2025
                    </div>
                </div>
                </div>
            </div>
            ))}

        </div>


        <button
          onClick={Next}
          className='absolute z-10 top-1/2 -translate-y-1/2 right-[5%] rounded-full p-2 border border-white'
        >
          <ChevronRight color='white'/>
        </button>
      </div>
    </div>
  );
};

export default BlogSection;
