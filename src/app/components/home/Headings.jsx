"use client";

import gsap from "gsap";
import ScrambleText from "../common/ScrambledText";
import React, { useEffect } from "react";
import Image from "next/image";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Headings = () => {
  useEffect(() => {
window.scrollTo(0, 0);

    gsap.to(".headingScrambleText", {
      opacity: 1,
      translateX: "0",
      duration: 1,
      delay: 0.2,
      stagger: 0.05,
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
    gsap.to(".headingImg", {
      scale: 1,
      duration: 0.6,
      delay: 0.8,
    });
    gsap.to(".headingImg", {
      opacity: 1,
      duration: 0.9,
      delay: 0.8,
    });

    const mainHeadingVals = document
      .querySelector(".mainHeading")
      .getBoundingClientRect();
    // console.log(mainHeadingVals.y, mainHeadingVals.top, (mainHeadingVals.y/window.innerHeight), (mainHeadingVals.top/window.innerHeight));

    gsap.to(".headingImg .headingImgInner", {
      height: "80dvh",
      width: "80vw",
      bottom:'-20%',
      duration: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: ".mainHeading",
        start: `top ${(mainHeadingVals.y / window.innerHeight) * 100}%`,
        end: "top -70%",
        scrub: true,
        pin: true,
      },
    });
gsap.to(".headingImgCTA", {
  scale: 1,
  opacity: 1,
  x: '-50%',
  duration: 0.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".mainHeading",
    start: "top 10%",
    end: "top 0%",
    toggleActions: 'play none play reset', // <-- smoother exit
  },
});

gsap.to(".headingImgCTA button span", {
  scale: 1,
  opacity: 1,
  translateY: 0,
  duration: 0.4,
  delay: 0.4,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".mainHeading",
    start: "top 10%",
    end: "top 0%",
    toggleActions: 'play none play reverse', // <-- smoother exit
  },
});

ScrollTrigger.refresh()
  }, []);
  return (
<div className="flex flex-col justify-center items-center h-[80dvh] mainHeading px-4 md:px-12 text-white">
  {/* Heading */}
  <h1 className="text-center text-2xl md:text-4xl font-robo font-medium max-w-4xl flex flex-wrap justify-center items-center gap-2 leading-tight">
    <span className="headingScrambleText opacity-0 -translate-x-8">MasterMinds Junior:</span>
    <ScrambleText className="headingScrambleText opacity-0 translate-x-16 px-1" speed={20} text={"Powering"} duration={1000} delay={200} />
    <ScrambleText className="headingScrambleText opacity-0 translate-x-16 px-1" speed={20} text={"the"} duration={1000} delay={250} />
    <ScrambleText className="headingScrambleText opacity-0 translate-x-16 px-1" speed={20} text={"future"} duration={1000} delay={300} />
    <ScrambleText className="headingScrambleText opacity-0 translate-x-16 px-1" speed={20} text={"of"} duration={1000} delay={350} />
    <ScrambleText className="headingScrambleText opacity-0 translate-x-16 px-1" speed={20} text={"Decentralized"} duration={1000} delay={400} />
    <ScrambleText className="headingScrambleText opacity-0 translate-x-16 px-1" speed={20} text={"BJ"} duration={1000} delay={450} />
  </h1>

  {/* Paragraphs */}
  <div className="mt-4 max-w-xl text-center text-white/80 space-y-2">
    <p className="headingPara opacity-0 translate-y-12 text-sm md:text-base">
      Empowering young minds through blockchain innovation and decentralized intelligence.
    </p>
    <p className="headingPara opacity-0 translate-y-12 text-sm md:text-base">
      Join us in redefining how the next generation shapes the Web3 world.
    </p>
  </div>

  {/* Primary CTA */}
<button className="HeadingCTABtn relative inline-flex items-center justify-center px-6 py-2 mt-4 text-white rounded-full bg-black font-medium group overflow-hidden border-y border-x-0 border border-white border-t-blue-600 opacity-0 scale-90 translate-y-4">
  <span className="HeadingCTABtnText relative z-0 opacity-0 translate-y-3 scale-90">Get Started →</span>
</button>

  {/* Image + Floating CTA */}
  <div className="h-[35%] w-full mt-4 relative headingImg opacity-0 scale-50">
    <div className="fixed h-[30dvh] bottom-[-30%] left-1/2 -translate-x-1/2 headingImgInner flex justify-center items-center">
      <Image
        src={"/heading.jpg"}
        alt="heading"
        width={1800}
        height={800}
        className="h-full w-auto object-cover object-center rounded-xl shadow-lg"
      />

      {/* Floating CTA Card */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-6 py-4 rounded-xl backdrop-blur-md bg-white/10 text-white max-w-2xl headingImgCTA opacity-0 scale-75 transition-all">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm md:text-base">
          <span className="font-light text-lg shrink-0 text-center md:text-left">
            Decentralized AI: <br /> Redefining Web3
          </span>
          <span className="text-white/70 text-sm text-center md:text-left">
            Harnessing AI and blockchain to build secure, scalable, and autonomous systems for a new digital era.
          </span>
        </div>

        <div className="w-full flex justify-center items-center mt-4">
          <button className="border-t border-b border-white text-sm py-2 px-5 rounded-full">
            <span className="opacity-0 scale-75 translate-y-4">Discover More</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Headings;
