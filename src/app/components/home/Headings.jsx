"use client";

import gsap from "gsap";
import ScrambleText from "../common/ScrambledText";
import React, { useEffect } from "react";
import Image from "next/image";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Headings = () => {
  useEffect(() => {
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
      translateY: "-17%",
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
      scale:1,
      opacity:1,
      x:'-50%',
      duration: 0.5,
      scrollTrigger: {
        trigger: ".mainHeading",
        start: "top 10%", 
        end:   "top 0%", 
        toggleActions:'play none reverse none'
      },
    });

    gsap.to(".headingImgCTA button span", {
      scale:1,
      opacity:1,
      translateY:0,
      duration: 0.4,
      delay: 0.4,
      scrollTrigger: {
        trigger: ".mainHeading",
        start: `top 10%`,
        end: "top 0%",
        toggleActions:'play none reverse none'

      },
    });
ScrollTrigger.refresh()
  }, []);
  return (
    <div className=" flex flex-col justify-center items-center h-[80dvh] mainHeading">
      <h1 className=" text-center  text-5xl font-robo font-medium w-1/2 flex flex-wrap justify-center items-center gap-1 ">
        <span className=" headingScrambleText  opacity-0 -translate-x-8">
          MasterMinds Junior:
        </span>
        <ScrambleText
          className=" headingScrambleText opacity-0 translate-x-16 px-2"
          speed={20}
          text={"Powering"}
          duration={1000}
          delay={200}
        />
        <ScrambleText
          className=" headingScrambleText opacity-0 translate-x-16 px-2"
          speed={20}
          text={"the"}
          duration={1000}
          delay={250}
        />
        <ScrambleText
          className=" headingScrambleText opacity-0 translate-x-16 px-2"
          speed={20}
          text={"future"}
          duration={1000}
          delay={300}
        />
        <ScrambleText
          className=" headingScrambleText opacity-0 translate-x-16 px-2"
          speed={20}
          text={"of"}
          duration={1000}
          delay={350}
        />
        <ScrambleText
          className=" headingScrambleText opacity-0 translate-x-16 px-2"
          speed={20}
          text={"Decentralized"}
          duration={1000}
          delay={400}
        />
        <ScrambleText
          className=" headingScrambleText opacity-0 translate-x-16 px-2"
          speed={20}
          text={"BJ"}
          duration={1000}
          delay={450}
        />
      </h1>

      <p className="headingPara opacity-0 translate-y-12 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        mollitia!
      </p>
      <p className="headingPara opacity-0 translate-y-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        mollitia!
      </p>

      <button className=" mt-4 py-2 px-6 rounedd-xl HeadingCTABtn opacity-0 translate-y-12 headingPara rounded-lg">
        <span className=" opacity-0 scale-75 translate-y-4">Get Started</span>
      </button>

      <div className=" h-[40%] w-full mt-8 relative headingImg opacity-0 scale-50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full headingImgInner">
          <Image
            src={"/heading.jpg"}
            alt="heaing"
            width={1800}
            height={800}
            className=" h-full w-auto object-cover object-center mx-auto"
          />

          <div style={{transform:'translateX(-50%)'}} className=" absolute bottom-2 left-1/2 px-5 py-2 rounded-xl backdrop-blur-sm bg-white/10 opacity-0 scale-75 headingImgCTA ">
            <p className=" flex justify-between items-center gap-4">
                <span className=" font-light text-lg shrink-0">Decentralized AI: <br /> Redefining Web3</span>
                <span className=" text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam tempore aperiam placeat veniam ipsum sed?</span>
            </p>
            <div className=" w-full flex justify-center items-center mt-2">
                <button className=" border-t border-b border-white rounded-xl py-2 px-4">
                    <span className=" opacity-0 scale-75 translate-y-4">Discover More</span>
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headings;
