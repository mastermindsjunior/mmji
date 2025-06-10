import React from 'react'

const Roadmap = () => {
  return (
    <div className='  h-dvh w-full flex justify-center items-center gap-4 pt-[10%] z-20 relative'>
        <video src="/sphere.mp4" autoPlay playsInline muted loop className=' w-full h-[90%] object-cover object-center absolute bottom-0 left-0 z-0'></video>
        <div className=' relative z-10 h-[40dvh] inline-grid grid-cols-2 aspect-video gap-8 font-albe'>

            <div className=' relative -top-4 left-4 backdrop-blur-md p-3 rounded-xl border border-white'>
                <h6>Title 2024</h6>
                <p>Title Title</p>
                <ul className=' text-white/60 list-disc 2xl:pl-6 pl-4 2xl:text-[13px] text-[10px]'>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                </ul>
            </div>
            <div className=' relative left-4 top-4 backdrop-blur-md p-3 rounded-xl border border-white'>
                <h6>Title 2024</h6>
                <p>Title Title</p>
                <ul className=' text-white/60 list-disc 2xl:pl-6 pl-4 2xl:text-[13px] text-[10px]'>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                </ul>
            </div>
            <div className=' relative -left-4 -top-4 backdrop-blur-md p-3 rounded-xl border border-white'>
                  <h6>Title 2024</h6>
                <p>Title Title</p>
                <ul className=' text-white/60 list-disc 2xl:pl-6 pl-4 2xl:text-[13px] text-[10px]'>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                </ul>
            </div>
            <div className=' relative top-4 -left-4 backdrop-blur-md p-3 rounded-xl border border-white'>
                <h6>Title 2024</h6>
                <p>Title Title</p>
                <ul className=' text-white/60 list-disc 2xl:pl-6 pl-4 2xl:text-[13px] text-[10px]'>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Roadmap
