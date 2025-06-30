import Image from 'next/image'
import React from 'react'
import banner from '@/assets/banner.jpg'

const Banner = ({title, sub}) => {
  return (
    <div className=' w-full relative'>
    <Image src={banner} alt='banner' width={2000} height={1000} className=' w-full h-fit object-cover object-center relative z-0' />
    <div className=' absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex justify-center flex-col items-center gap-4 pt-[7%]'>
        <h2 className=' text-[#0e96cc] text-5xl font-sfth'><span className=' text-white'>{title}</span> <span className='font-sfbo'>{sub}</span></h2>
    </div>
    </div>
  )
}

export default Banner
