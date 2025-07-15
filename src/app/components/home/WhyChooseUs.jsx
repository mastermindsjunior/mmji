import Image from 'next/image'
import React from 'react'

const WhyChooseUs = () => {
  return (
    <secction className=" w-full h-auto py-20 pt-16 bg-gradient-to-tr from-black via-transparent to-primary-orange/20 flex justify-center items-center" >

        <div className=' 2xl:max-w-7xl max-w-6xl p-0.5 rounded-2xl bg-gradient-to-b from-blue-600 via-gray-700 to-gray-800 relative overflow-hidden'>
        {/*  */}
            <div className=' absolute h-0.5 left-1/2 -translate-x-1/2 bottom-0 bg-gradient-to-r from-transparent via-blue-600 to-transparent w-[80%]' />
            <div className='absolute w-[50%] 2xl:h-20 h-14 rounded-t-[100%] opacity-30 bg-blue-600 blur-2xl z-10 bottom-0 left-1/2 -translate-x-1/2' />
        {/*  */}
            <div className=' w-full bg-dark rounded-[15px] flex flex-col justify-center items-center gap-8 p-8 '>

           <div className=' flex justify-between items-center gap-2 2xl:px-8 relative z-20 '>
                <h2 className="font-jost text-4xl md:text-5xl font-bold mb-5 pb-2 textMask_br">
                    Why Choose Us?
                </h2>
                <p className="font-sftn text-base text-gray-300 leading-relaxed mb-4 w-[60%]"  style={{maskImage:'linear-gradient(135deg, black 60%, #00000077)'}}>
                    With a stronghold across India and growing global reach, we are the best digital marketing agency for startups and growing businesses. Clients choose us for:
                </p>
           </div>

            <ul className=' w-full text-xs flex justify-center items-center flex-wrap gap-2 relative z-20 '>
                <li className=' py-2 2xl:px-5 px-3 rounded-full bg-darker hover:bg-white border border-white/30 hover:text-dark transition-all duration-500 ease-in-out'>Personalized & strategic approach.</li>
                <li className=' py-2 2xl:px-5 px-3 rounded-full bg-darker hover:bg-white border border-white/30 hover:text-dark transition-all duration-500 ease-in-out'>Creative solutions tailored to industry needs.</li>
                <li className=' py-2 2xl:px-5 px-3 rounded-full bg-darker hover:bg-white border border-white/30 hover:text-dark transition-all duration-500 ease-in-out'>Transparent communication and reporting.</li>
                <li className=' py-2 2xl:px-5 px-3 rounded-full bg-darker hover:bg-white border border-white/30 hover:text-dark transition-all duration-500 ease-in-out'>Proven results and ROI-focused mindset.</li>
            </ul>

        </div>
        </div>

    </secction>
  )
}

export default WhyChooseUs
