"use client";

import gsap from 'gsap';
import Image from 'next/image'
import React, { useEffect } from 'react'

const BGGrid = () => {

    useEffect(() => {
        gsap.to('.bgImg', {
            opacity:1,
            duration:0.8
        })
    },[])

  return (
    <div className='bgImg opacity-0'>
      <Image src={'/bg.png'} alt='bg' width={1900} height={900}  className=' fixed top-0 left-0 w-full h-dvh  object-cover object-center pointer-events-none opacity-10 z-0'/>
    </div>
  )
}

export default BGGrid
