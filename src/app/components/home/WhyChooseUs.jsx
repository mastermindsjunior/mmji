import Image from 'next/image'
import React from 'react'

const WhyChooseUs = () => {
  return (
    <secction className=" w-full h-auto py-20 bg-gradient-to-tr from-black via-transparent to-primary-orange/20 flex justify-center items-center" >
        <div className=' xl:max-w-7xl bg-dark rounded-2xl  flex flex-col justify-center items-center gap-8 p-8'>

           <div className=' flex justify-between items-center gap-2'>
                <h2 className="font-jost text-4xl md:text-5xl font-bold mb-5 pb-2 textMask_br">
                    Why Choose <br /> Us?
                </h2>
                <p className="font-sftn text-base text-gray-300 leading-relaxed mb-4 w-1/2"  style={{maskImage:'linear-gradient(135deg, black 60%, #00000077)'}}>
                    With a stronghold across India and growing global reach, we are the best digital marketing agency for startups and growing businesses. Clients choose us for:
                </p>
           </div>

            <ul className=' text-xs flex justify-center items-center flex-wrap gap-2 '>
                <li className=' py-2 px-5 rounded-full bg-darker hover:bg-white border border-white/30 hover:text-dark transition-all duration-500 ease-in-out'>Personalized & strategic approach.</li>
                <li className=' py-2 px-5 rounded-full bg-darker hover:bg-white border border-white/30 hover:text-dark transition-all duration-500 ease-in-out'>Creative solutions tailored to industry needs.</li>
                <li className=' py-2 px-5 rounded-full bg-darker hover:bg-white border border-white/30 hover:text-dark transition-all duration-500 ease-in-out'>Transparent communication and reporting.</li>
                <li className=' py-2 px-5 rounded-full bg-darker hover:bg-white border border-white/30 hover:text-dark transition-all duration-500 ease-in-out'>Proven results and ROI-focused mindset.</li>
            </ul>

        </div>
    </secction>
  )
}

export default WhyChooseUs
