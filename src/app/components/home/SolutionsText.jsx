"use client";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect, useState } from 'react'
import ScrambleText from '../common/ScrambledText';
import bg from "@/assets/bg-2.jpg";
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const SolutionsText = () => {
    const [start, setStart] = useState(false)
    useEffect(() => {
        gsap.to('.SolutionsText', {
            translateX:0,
            translateY:0,
            opacity:1,
            duration:1,
            scrollTrigger:{
                trigger:'.solutionsWrapper',
                start:'top 30%',
                end:'bottom 100%',
                toggleActions:'play none none reverse',
                onEnter:() =>{ setStart(true)},
                onEnterBack:() =>{ setStart(false)},
            }
        })
    },[])
  return (
      <div className='  h-dvh w-full px-8 text-6xl flex justify-center items-center sticky top-0 left-0 z-0'>
        <h3 className='SolutionsText font-sfbo translate-x-full translate-y-full opacity-0'><ScrambleText text={'SERVICES'} duration={500} delay={100} active={start} /></h3>
              <Image src={bg} alt='bg' width={2000} height={1000} className=' absolute w-screen h-dvh top-0 left-0 z-[-1] pointer-events-none opacity-20 translate-y-[15%] blur-lg' />

      </div>
  )
}

export default SolutionsText
