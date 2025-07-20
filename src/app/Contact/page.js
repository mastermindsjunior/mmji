import { ArrowUpRight, LucideMapPin, MailIcon, PhoneIcon } from 'lucide-react'

const page = () => {
  return (
    <main>
      

      <section className=' 2xl:max-w-7xl max-w-6xl lg:mx-auto mx-4 flex gap-4 xl:flex-row flex-col justify-center items-end mt-32 py-20 pt-32 relative'>

        {/* TITLE */}
        <div style={{background:'radial-gradient( circle at top, #155dfc 5%, #155dfc80 30%, transparent 60%)'}} className='  absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[70%] rounded-b-[100%] blur-2xl' />
        <h2 className=' absolute z-10 top-4 left-1/2 -translate-x-1/2 font-jost font-bold xl:text-8xl text-[15vw] bg-gradient-to-b from-white/50 via-white/30 to-white/10 bg-clip-text text-transparent'>CONTACT</h2>


        <div className=' xl:w-1/2 w-full flex flex-col justify-between items-center relative z-20'>
            <div>
            <h2 className=' font-jost font-medium text-3xl mb-3 text-white'>Get in Touch</h2>
            <p className=' font-jost text-sm w-[80%] text-gray-400 mb-5'>Let&apos;s Connect and Create Something Extraordinary. Let&apos;s bring your vision to life through expertly crafted digital solutions. At MasterMinds Junior, we’re not just service providers—we’re growth partners. Ready to collaborate?</p>
            </div>
            <div className=' w-full space-y-2'>
            {/* EMAIL */}
                <div style={{boxShadow:'inset 0 0 20px rgba(225,225,225,0.1)'}} className=' w-full h-20 border border-gray-800 bg-darker rounded-xl py-1 px-4 flex gap-2 justify-start items-center'>
                    <div style={{boxShadow:'inset 0 0 10px rgba(225,225,225,0.1)'}} className=' h-10 aspect-square shrink-0 rounded-lg border border-gray-800 p-1.5 inline-flex justify-center items-center'><MailIcon color='white'/></div>
                    <div className=' flex-1'>
                        <p className=' text-white font-alum text-xl mb-0'>Email us</p>
                        <p className=' font-jost text-sm font-medium text-white/40'>admin@mastermindsjunior.com</p>
                    </div>
                    <div className=' h-10 aspect-square rounded-full bg-white/10 shrink-0 p-1.5 inline-flex justify-center items-center'> <ArrowUpRight color='white' /> </div>
                </div>
            {/* PHONE */}
                <div style={{boxShadow:'inset 0 0 20px rgba(225,225,225,0.1)'}} className=' w-full h-20 border border-gray-800 bg-darker rounded-xl py-1 px-4 flex gap-2 justify-start items-center'>
                    <div style={{boxShadow:'inset 0 0 10px rgba(225,225,225,0.1)'}} className=' h-10 aspect-square shrink-0 rounded-lg border border-gray-800 p-1.5 inline-flex justify-center items-center'><PhoneIcon color='white' /> </div>
                    <div className=' flex-1'>
                        <p className=' text-white font-alum text-xl mb-0'>Call us</p>
                        <p className=' font-jost text-sm font-medium text-white/40'>9999999999</p>
                    </div>
                    <div className=' h-10 aspect-square rounded-full bg-white/10 shrink-0 p-1.5 inline-flex justify-center items-center'> <ArrowUpRight color='white' /> </div>
                </div>
            {/* ADDRESS */}
                <div style={{boxShadow:'inset 0 0 20px rgba(225,225,225,0.1)'}} className=' w-full xl:h-20 h-32 border border-gray-800 bg-darker rounded-xl py-1 px-4 flex gap-2 justify-start items-center'>
                    <div style={{boxShadow:'inset 0 0 10px rgba(225,225,225,0.1)'}} className=' h-10 aspect-square shrink-0 rounded-lg border border-gray-800 p-1.5 inline-flex justify-center items-center'> <LucideMapPin color='white' /> </div>
                    <div className=' flex-1'>
                        <p className=' text-white font-alum text-xl mb-0'>Our Location</p>
                        <p className=' font-jost text-sm font-medium text-white/40'>1st Floor, Unit# 105, P NO 8, near VPM Classes, B yojna, Radha kunj, Mansarovar, Jaipur, Rajasthan 302020</p>
                    </div>
                    <div className=' h-10 aspect-square rounded-full bg-white/10 shrink-0 p-1.5 inline-flex justify-center items-center'> <ArrowUpRight color='white' /> </div>
                </div>
            </div>
        </div>
        {/* RIGHT */}
        <div className=' xl:w-1/2 w-full relative z-20'>
            <div className=' w-full p-2 space-y-2 bg-[#171717]/70 rounded-lg '>
                <input style={{boxShadow:'inset 0 0 10px rgba(255,255,255,0.1)'}} type="text" placeholder='Name' className=' bg-[#171717]/10 w-full p-2 h-12  outline-none border border-gray-700 rounded-[5px] font-jost font-light text-white' />
                <input style={{boxShadow:'inset 0 0 10px rgba(255,255,255,0.1)'}} type="email" placeholder='Email' className=' bg-[#171717]/10 w-full p-2 h-12  outline-none border border-gray-700 rounded-[5px] font-jost font-light text-white' />
                <textarea style={{boxShadow:'inset 0 0 10px rgba(255,255,255,0.1)'}} type="text" placeholder='Message' draggable={false} rows={6} className=' bg-[#171717]/10 w-full p-2  outline-none border border-gray-700 rounded-[5px] font-jost font-light text-white h-[250px]' />
                <button className=' w-full p-2 bg-white rounded-[5px] text-darker text-sm'>Submit</button>
            </div>
        </div>
      </section>
    </main>
  )
}

export default page
