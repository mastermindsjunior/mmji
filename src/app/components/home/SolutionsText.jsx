"use client";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect, useState } from 'react'
import ScrambleText from '../common/ScrambledText';

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
      <h3 className=' h-dvh w-full text-6xl flex justify-center items-center sticky top-0 left-0 z-0'>
        <span className='SolutionsText translate-x-full translate-y-full opacity-0'><ScrambleText text={'SOLUTIONS'} duration={500} delay={100} active={start} /></span>
      </h3>
  )
}

export default SolutionsText
