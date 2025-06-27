'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal from bottom to top
      gsap.fromTo(
        imageRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // Animate each letter of "Let’s Connect"
      const letters = textRef.current.textContent.split('');
      textRef.current.innerHTML = letters
        .map((letter) =>
          letter === ' '
            ? `<span>&nbsp;</span>`
            : `<span class="inline-block translate-y-4 opacity-0">${letter}</span>`
        )
        .join('');

      gsap.to(textRef.current.querySelectorAll('span'), {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 40%',
        },
      });

      // Staggered content below the image
      gsap.fromTo(
        [titleRef.current, descRef.current, buttonRef.current],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full h-dvh pt-[15%] px-[10%] flex flex-col justify-start items-center"
    >
      {/* Image Section */}
      <div className="w-full h-[55%] relative overflow-hidden">
        <img
          ref={imageRef}
          src="./heading.jpg"
          alt="CTA Visual"
          className="w-full h-full object-cover"
        />
        <div
          ref={textRef}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white 2xl:text-9xl text-8xl font-sfbo whitespace-nowrap"
        >
          Let’s Connect
        </div>
      </div>

      {/* Text + Button Section */}
      <div className="w-full flex-1 flex flex-col justify-center items-center text-center px-6">
        <h2
          ref={titleRef}
          className="text-2xl md:text-3xl text-white font-semibold mb-2"
        >
          Ready to Collaborate?
        </h2>
        <p
          ref={descRef}
          className="text-white/70 max-w-xl mb-4"
        >
          Whether you have a project in mind or just want to chat, let’s start the conversation.
        </p>
        <button
          ref={buttonRef}
          className="mt-2 px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-200"
        >
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default CTASection;
