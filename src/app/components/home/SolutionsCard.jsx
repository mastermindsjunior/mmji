import React from 'react'
import Image from 'next/image'


const SolutionsCard = ({img="/heading.jpg", text, title, side}) => {
  return (
        <div className={` ${side === "right" ? " justify-end":" justify-start"} w-full p-4 flex items-center text-center`}>
            <div className=' 2xl:w-[500px] xl:w-[300px] w-[200px] h-full '>
                <div className=' w-full bg-white/10 aspect-square rounded-lg p-12 '>
                    <div>
                        <Image src={img} width={500} height={500} alt='service' className='w-full aspect-square object-cover '/>
                    </div>
                </div>
                <h4 className=' bg-[#111] border rounded-xl border-white/10 py-3 px-2 w-full mt-4'>
                    {title}
                </h4>
                <p className=' text-white/60 text-sm mt-2'>
                    {text}
                </p>
            </div>
        </div>
  )
}

export default SolutionsCard
