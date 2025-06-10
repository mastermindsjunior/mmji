'use client';


import gsap from 'gsap';
import Image from 'next/image';
import React, { act, useEffect, useState } from 'react'

const StrengthColumns = () => {
    const [active, setActive] = useState(0);

useEffect(() => {
  const ctx = gsap.context(() => {
    const allTexts = document.querySelectorAll('.textTop');
    const allBottoms = document.querySelectorAll('.textBottom');

    gsap.killTweensOf(allTexts);
    gsap.killTweensOf(allBottoms);

    allTexts.forEach((el, index) => {
      if (index === active) {
        // Hide the active .textTop
        if (el.style.visibility !== 'hidden') {
          gsap.to(el, {
            opacity: 0,
            duration: 0.3,
            ease: 'power2.out',
            pointerEvents: 'none',
            onComplete: () => {
              el.style.visibility = 'hidden';
            },
          });
        }
      } else {
        // Show inactive .textTop ONLY if hidden
        if (el.style.visibility === 'hidden' || el.style.opacity === '0') {
          el.style.visibility = 'visible';
          gsap.fromTo(
            el,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.5,
              delay: 0.4,
              ease: 'power2.out',
            }
          );
        }
      }
    });

    allBottoms.forEach((el, index) => {
      if (index === active) {
        // Animate in the active .textBottom ONLY if hidden
        if (el.style.display === 'none' || el.style.visibility === 'hidden') {
          gsap.set(el, {
            display: 'flex',
            visibility: 'visible',
          });

          gsap.fromTo(
            el,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.3,
              delay: 0.4,
              ease: 'power2.out',
            }
          );
        }
      } else {
        // Animate out the inactive .textBottom ONLY if visible
        if (el.style.visibility !== 'hidden') {
          gsap.to(el, {
            opacity: 0,
            duration: 0.2,
            ease: 'power2.in',
            onComplete: () => {
              el.style.visibility = 'hidden';
              el.style.display = 'none';
            },
          });
        }
      }
    });
  });

  return () => ctx.revert();
}, [active]);



  return (
    <>


      <div onMouseEnter={() => setActive(0)} className={`${active === 0 ? " w-1/2":" w-1/4"} bg-[#111] rounded-[1rem] h-full transition-all duration-700 relative ease-in-out`}>
        <Image src={'/heading.jpg'} alt='' width={700} height={600} className={`${active === 0 ? " opacity-100":" opacity-0"} h-full w-full absolute z-0 pointer-events-none object-cover object-center transition-all duration-500 ease-in-out`}/>
        <p className=' absolute z-10 top-2 left-3 text-white/50'>( 01 )</p>
        
        <div className={` absolute w-full p-3 top-8 left-0 textTop`}>
            <h5 className={` `}>Advance Title</h5>
            <p className=' text-white/60 2xl:text-base text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta molestiae eaque, autem officia quo mollitia reiciendis impedit architecto enim voluptates harum nesciunt at atque ipsa omnis, fuga aperiam blanditiis modi?</p>
        </div>
        <div style={{ opacity: 0, visibility: 'hidden'}} className=' textBottom flex justify-between items-center gap-2 absolute  w-[90%] left-1/2 -translate-x-1/2 bottom-2 p-4 pb-12 rounded-xl backdrop-blur-md bg-white/20'>
            <h5>Advance Details</h5>
            <p className=' 2xl:text-sm text-xs text-white/75'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iure cum impedit eaque aliquid rerum at quo temporibus odio similique commodi distinctio, ipsam nesciunt nobis dicta, alias labore quas est.</p>
        </div>
        <button className=' border-t border-b border-white rounded-full 2xl:py-2 py-1 px-4 absolute z-20 bottom-3 left-1/2 -translate-x-1/2'>Learn More</button>
      </div>




      <div onMouseEnter={() => setActive(1)} className={`${active === 1 ? " w-1/2":" w-1/4"} bg-[#111] rounded-[1rem] h-full transition-all duration-700 relative ease-in-out`}>
        <Image src={'/heading.jpg'} alt='' width={700} height={600} className={`${active === 1 ? " opacity-100":" opacity-0"} h-full w-full absolute z-0 pointer-events-none object-cover object-center transition-all duration-500 ease-in-out`}/>
        <p className=' absolute z-10 top-2 left-3 text-white/50'>( 02 )</p>
        
        <div className={` absolute w-full p-3 top-8 left-0 textTop`}>
            <h5 className={` `}>Advance Title</h5>
            <p className=' text-white/60 2xl:text-base text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta molestiae eaque, autem officia quo mollitia reiciendis impedit architecto enim voluptates harum nesciunt at atque ipsa omnis, fuga aperiam blanditiis modi?</p>
        </div>
        <div style={{ opacity: 0, visibility: 'hidden'}} className=' textBottom flex justify-between items-center gap-2 absolute  w-[90%] left-1/2 -translate-x-1/2 bottom-2 p-4 pb-12 rounded-xl backdrop-blur-md bg-white/20'>
            <h5>Advance Details</h5>
            <p className=' 2xl:text-sm text-xs text-white/75'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iure cum impedit eaque aliquid rerum at quo temporibus odio similique commodi distinctio, ipsam nesciunt nobis dicta, alias labore quas est.</p>
        </div>
        <button className=' border-t border-b border-white rounded-full 2xl:py-2 py-1 px-4 absolute z-20 bottom-3 left-1/2 -translate-x-1/2'>Learn More</button>
      </div>




      <div onMouseEnter={() => setActive(2)} className={`${active === 2 ? " w-1/2":" w-1/4"} bg-[#111] rounded-[1rem] h-full transition-all duration-700 relative ease-in-out`}>
        <Image src={'/heading.jpg'} alt='' width={700} height={600} className={`${active === 2 ? " opacity-100":" opacity-0"} h-full w-full absolute z-0 pointer-events-none object-cover object-center transition-all duration-500 ease-in-out`}/>
        <p className=' absolute z-10 top-2 left-3 text-white/50'>( 03 )</p>
        
        <div className={` absolute w-full p-3 top-8 left-0 textTop`}>
            <h5 className={` `}>Advance Title</h5>
            <p className=' text-white/60 2xl:text-base text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta molestiae eaque, autem officia quo mollitia reiciendis impedit architecto enim voluptates harum nesciunt at atque ipsa omnis, fuga aperiam blanditiis modi?</p>
        </div>
        <div style={{ opacity: 0, visibility: 'hidden'}} className=' textBottom flex justify-between items-center gap-2 absolute  w-[90%] left-1/2 -translate-x-1/2 bottom-2 p-4 pb-12 rounded-xl backdrop-blur-md bg-white/20'>
            <h5>Advance Details</h5>
            <p className=' 2xl:text-sm text-xs text-white/75'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iure cum impedit eaque aliquid rerum at quo temporibus odio similique commodi distinctio, ipsam nesciunt nobis dicta, alias labore quas est.</p>
        </div>        
        <button className=' border-t border-b border-white rounded-full 2xl:py-2 py-1 px-4 absolute z-20 bottom-3 left-1/2 -translate-x-1/2'>Learn More</button>
      </div>
    </>
  )
}

export default StrengthColumns
