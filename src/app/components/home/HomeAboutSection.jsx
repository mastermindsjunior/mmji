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
    <section className='w-full h-auto xl:p-12 p-4 xl:py-0 py-0 flex justify-center items-center'>
      <div 
        style={{boxShadow:'0 20px 40px rgba(0,0,0,0.08)'}} 
        className={`rounded-[2rem] xl:p-10 p-0 ${scrolled ? "xl:pt-10 p-6" : "xl:pt-4 pt-4"} transition-all duration-500 ease-out 2xl:pb-20 pb-10 2xl:-translate-y-[6rem] xl:-translate-y-[5rem] -translate-y-[6rem] bg-gradient-to-br from-[#c1e2ff] via-[#d6ebff] to-white border border-white/50 w-full relative overflow-hidden flex flex-col gap-14 text-center justify-between items-center backdrop-blur-sm`}
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.4),transparent_50%)]" />
        
        {/* Animated gradient orb */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-transparent rounded-full blur-3xl animate-pulse pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-cyan-200/20 to-transparent rounded-full blur-3xl animate-pulse pointer-events-none delay-1000" />

        <h2 className='fontjost font-bold 2xl:text-6xl xl:text-5xl text-3xl text-black w-fit text-center xl:px-4 px-2 mx-auto relative z-10 leading-tight'>
          Welcome to <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">MasterMinds Junior</span>
          <br /> 
          <span className={`${scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"} transition-all ease-out duration-500 inline-block bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent`}>
            – Your Growth Catalyst
          </span>
        </h2>

        <div className='w-full space-y-8 relative z-10'>
          <div className='xl:w-[65%] w-full mx-auto flex flex-col justify-center items-start gap-6 font-sfth text-gray-700 2xl:text-base text-sm leading-relaxed'>
            <p className='w-[85%] mx-auto text-center'>
              At MasterMinds Junior, we redefine what it means to be a digital partner. As a full-service digital marketing agency in India, we blend creativity with precision to empower businesses to thrive in a digital-first economy. From captivating graphic designs to robust app development, our team crafts every solution with purpose and clarity.
            </p>
            <p className='text-center'>
              We stand as a beacon of innovation, trust, and digital excellence, shaping brands that not only grow but also lead. Whether you're a startup or a large enterprise, we deliver scalable strategies tailored for measurable success.
            </p>
          </div>

          <div className='w-full flex flex-wrap justify-center items-center gap-4 relative z-10'>
            <Link href={'/About'}>
              <button 
                className='bg-gradient-to-r from-gray-900 to-black text-white rounded-full p-1 group/buttonCTA flex justify-between items-center 2xl:h-12 h-10 gap-4 font-sfbo cursor-pointer hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-out' 
                style={{boxShadow:'0px 4px 12px rgba(0,0,0,0.15)'}}
              >
                <p className='text-sm px-5'>Get Started</p>
                <div className='rounded-full h-full aspect-square inline-flex justify-center items-center bg-white/10 p-2 group-hover/buttonCTA:bg-white/20 transition-colors duration-300'>
                  <ArrowDownIcon className='rotate-[-90deg] group-hover/buttonCTA:rotate-[-135deg] transition-transform duration-300 ease-out' color='white' size={18} />
                </div>
              </button>
            </Link>

            <Link href='/Services'>
              <button 
                className='bg-white/80 backdrop-blur-sm text-black rounded-full p-1 group/buttonCTA flex justify-between items-center 2xl:h-12 h-10 gap-4 font-sfbo cursor-pointer hover:bg-white hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-out border border-gray-200/50' 
                style={{boxShadow:'0px 4px 12px rgba(0,0,0,0.08)'}}
              >
                <p className='text-sm px-5'>Our Services</p>
                <div className='rounded-full h-full aspect-square inline-flex justify-center items-center bg-black p-2 group-hover/buttonCTA:bg-gray-900 transition-colors duration-300' style={{boxShadow:'0px 2px 8px rgba(0,0,0,0.2)'}}>
                  <ArrowDownIcon className='rotate-[-90deg] group-hover/buttonCTA:rotate-[-135deg] transition-transform duration-300 ease-out' color='white' size={18} />
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