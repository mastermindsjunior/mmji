import React from 'react'
import StrengthColumns from './StrengthColumns'

const Strength = () => {
  return (
    <div className=' h-dvh w-full flex flex-col justify-center items-center gap-4 pt-[10%] z-20 relative'>
            <div className='flex flex-col justify-center items-center gap-4 '>

            <h3 className='  text-3xl font-sfbo'>Our Strengths</h3>
              <p className='text-white/70 font-sfth'>
                Lorem ipsum dolor sit amet.
              </p>
        </div>

        <div className=' flex-1 w-full flex justify-center items-center gap-2 px-[10%] pb-8 '>
            <StrengthColumns/>
        </div>
    </div>
  )
}

export default Strength
