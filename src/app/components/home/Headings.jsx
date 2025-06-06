"use client";

import gsap from 'gsap';
import ScrambleText from '../common/ScrambledText'
import React, { useEffect } from 'react'
import Image from 'next/image';

const Headings = () => {
    useEffect(() => {
        gsap.to('.headingScrambleText', {
            opacity:1,
            translateX:"0",
            duration:1,
            delay:0.2,
            stagger:0.05
        })
        gsap.to('.headingPara', {
            translateY:"0",
            duration:1,
            delay:0.3,
            stagger:0.1
        })
        gsap.to('.headingPara', {
            opacity:1,
            duration:1,
            delay:0.3,
            stagger:0.1,
            ease:"expo.in"
        })
        gsap.to('.headingImg', {
            scale:1,
            duration:0.6,
            delay:0.8,
        })
        gsap.to('.headingImg', {
            opacity:1,
            duration:0.9,
            delay:0.8,
        })
    },[])
  return (
    <div className=' flex flex-col justify-center items-center h-[80dvh]'>
    <h1 className=' text-center  text-5xl font-robo font-medium w-1/2 flex flex-wrap justify-center items-center gap-1 '>  
          <span className=' headingScrambleText  opacity-0 -translate-x-8'>MasterMinds Junior:</span> 
          <ScrambleText className=' headingScrambleText opacity-0 translate-x-16 px-2' speed={20} text={"Powering"} duration={1000} delay={200}/>
          <ScrambleText className=' headingScrambleText opacity-0 translate-x-16 px-2' speed={20} text={"the"} duration={1000} delay={250}/>
          <ScrambleText className=' headingScrambleText opacity-0 translate-x-16 px-2' speed={20} text={"future"} duration={1000} delay={300}/>
          <ScrambleText className=' headingScrambleText opacity-0 translate-x-16 px-2' speed={20} text={"of"} duration={1000} delay={350}/>
          <ScrambleText className=' headingScrambleText opacity-0 translate-x-16 px-2' speed={20} text={"Decentralized"} duration={1000} delay={400}/>
          <ScrambleText className=' headingScrambleText opacity-0 translate-x-16 px-2' speed={20} text={"BJ"} duration={1000} delay={450}/>
    </h1>

    <p className='headingPara opacity-0 translate-y-12 mt-3' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, mollitia!</p>
    <p className='headingPara opacity-0 translate-y-12' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, mollitia!</p>

    <button className=' mt-4 py-2 px-6 rounedd-xl HeadingCTABtn opacity-0 translate-y-12 headingPara rounded-lg'>Get Started</button>

    <div className=' h-[40%] w-full mt-8 relative headingImg opacity-0 scale-75'>
        <Image src={'/heading.jpg'} alt='heaing' width={1800} height={800} className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-auto object-cover object-center'  />
    </div>

    </div>
  )
}

export default Headings
