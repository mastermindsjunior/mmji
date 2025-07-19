'use client';

import { ArrowDownIcon } from 'lucide-react'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const HomeAboutSection = () => {
  const [scrolled, setScrolled] = useState(false);

  
      useEffect(() => {
        const handleScroll = () => {
          setScrolled(window.scrollY > 50);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <section className=' w-full h-auto p-12 py-0  bg-gradient-to-tr from-primary-blue/20 via-transparent to-primary-orange/20 flex justify-center items-center'>
        <div className={` rounded-[2rem] p-10 ${scrolled ? " pt-10" : " pt-4"} transition-all duration-300 ease-in-out 2xl:pb-20 pb-10 2xl:-translate-y-[6rem] -translate-y-[5rem] bg-darker border border-gray-800 w-full relative overflow-hidden flex flex-col gap-14 text-center justify-between items-center`}>

            <video
                src={'/vid/contact-form.mp4'}
                autoPlay
                loop
                muted
                playsInline
                className=" absolute top-0 left-0 opacity-50 w-full h-full object-cover object-top pointer-events-none"
            />
            <h2 className=' fontjost font-bold 2xl:text-6xl text-5xl text-white textMask_br w-fit text-center px-4 mx-auto'>Welcome to MasterMinds Junior <br /> <span className={`${scrolled ? " opacity-100" : "opacity-0"} transition-all ease-in-out duration-300`}>– Your Growth Catalyst</span></h2>
<div className=' w-full space-y-8'>
                <div className=' w-[60%] mx-auto flex flex-col justify-center items-start gap-4 font-sfth text-white 2xl:text-sm text-xs  '>
                        <p className=' w-[80%]  mx-auto'>At MasterMinds Junior, we redefine what it means to be a digital partner. As a full-service digital marketing agency in India, we blend creativity with precision to empower businesses to thrive in a digital-first economy. From captivating graphic designs to robust app development, our team crafts every solution with purpose and clarity.</p>
                        <p>We stand as a beacon of innovation, trust, and digital excellence, shaping brands that not only grow but also lead. Whether you’re a startup or a large enterprise, we deliver scalable strategies tailored for measurable success.</p>
            </div>

            <div className=' w-full flex justify-center items-center gap-4 relative z-10'>

               <Link href={'/About'}>
                 <button className=' bg-white/5 rounded-full p-1 group/buttonCTA flex justify-between items-center 2xl:h-10 h-8 gap-4 font-sfbo cursor-pointer ' style={{boxShadow:'0px 0px 1px rgba(255,255,255)'}}>
                    <p className=' text-xs px-4'>Get Started</p>
                    <div className=' rounded-full h-full aspect-square inline-flex justify-center items-center bg-dark p-2' style={{boxShadow:'0px 0px 5px rgba(255,255,255,0.2)'}}>
                        <ArrowDownIcon className=' rotate-[-90deg] group-hover/buttonCTA:rotate-[-135deg] transition-all duration-300 ease-in-out' color='white' size={16} />
                    </div>
                </button>
               </Link>
               <Link className='/Services'>
                <button className=' bg-white/5 rounded-full p-1 group/buttonCTA flex justify-between items-center 2xl:h-10 h-8 gap-4 font-sfbo cursor-pointer ' style={{boxShadow:'0px 0px 1px rgba(255,255,255)'}}>
                    <p className=' text-xs px-4'>Our Services</p>
                    <div className=' rounded-full h-full aspect-square inline-flex justify-center items-center bg-dark p-2' style={{boxShadow:'0px 0px 5px rgba(255,255,255,0.2)'}}>
                        <ArrowDownIcon className=' rotate-[-90deg] group-hover/buttonCTA:rotate-[-135deg] transition-all duration-300 ease-in-out' color='white' size={16} />
                    </div>
                </button>
               </Link>
            </div>
</div>
        </div>

      
    </section>
  )
}

export default HomeAboutSection
