import React from 'react';

export const MissionValuesSection = () => {
  return (
    <section className="bg-black py-20 text-white relative overflow-hidden">
      {/* Background subtle gradient overlay for eye-catchiness */}
      <div className="absolute inset-0 "></div>
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission Column */}
          <div className="p-8 rounded-xl bg-gradient-to-br from-blue-950/50 to-black/80 shadow-2xl border border-blue-600/30 transform transition-all duration-300 hover:scale-105 hover:shadow-blue-600/50">
            <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">Our Mission</h2>
            <p className="mb-4 text-gray-300 leading-relaxed">
              At MasterMinds Junior, our mission is to craft meaningful digital experiences that connect brands with their audiences. By combining creativity, strategy, and cutting-edge technology, we aim to deliver solutions that drive real results, build brand value, and spark sustainable growth for businesses of all sizes.
            </p>
            {/* <p className="text-gray-300 leading-relaxed">
              We blend artistic creativity with technical precision to engineer solutions that are beautiful, functional, and strategic. Every campaign, every design, every website—we build with intent.
            </p> */}
          </div>

          {/* Values Column */}
          <div className="p-8 rounded-xl bg-gradient-to-br from-primary-orange/20 to-black/80 shadow-2xl border border-primary-orange/30 transform transition-all duration-300 hover:scale-105 hover:shadow-primary-orange/50">
            <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-primary-orange to-primary-orange/50 text-transparent bg-clip-text">Vision</h2>


            <p className="text-gray-300 leading-relaxed">
              To become a globally trusted digital partner that empowers brands to grow through purposeful storytelling, intelligent strategy, and innovative technology—leaving a lasting legacy in the digital world.
            </p>
            {/* <ul className="space-y-5 font-sfth text-base text-gray-300">
              <li className="flex items-center justify-start">
                <span className="text-primary-orange mr-3 text-3xl">•</span>
                Innovation with Impact
              </li>
              <li className="flex items-center justify-start">
                <span className="text-primary-orange mr-3 text-3xl">•</span>
                Integrity in Execution
              </li>
              <li className="flex items-center justify-start">
                <span className="text-primary-orange mr-3 text-3xl">•</span>
                Collaboration over Competition
              </li>
              <li className="flex items-center justify-start">
                <span className="text-primary-orange mr-3 text-3xl">•</span>
                Performance-Driven Strategies
              </li>
            </ul> */}
          </div>
        </div>

            <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-white to-white/50 text-transparent bg-clip-text text-center my-5">Values We Live By</h2>
          <div className=' flex justify-center items-center gap-4 text-sm flex-wrap'>
              <p className="flex items-center justify-center px-4 py-1 rounded-full border border-gray-600 hover:bg-white hover:text-dark transition-all duration-300 ease-in shadow-blue-600 shadow-2xl">
                Innovation with Impact
              </p>
              <p className="flex items-center justify-center px-4 py-1 rounded-full border border-gray-600 hover:bg-white hover:text-dark transition-all duration-300 ease-in shadow-blue-600 shadow-2xl">
                Integrity in Execution
              </p>
              <p className="flex items-center justify-center px-4 py-1 rounded-full border border-gray-600 hover:bg-white hover:text-dark transition-all duration-300 ease-in shadow-blue-600 shadow-2xl">
                Collaboration over Competition
              </p>
              <p className="flex items-center justify-center px-4 py-1 rounded-full border border-gray-600 hover:bg-white hover:text-dark transition-all duration-300 ease-in shadow-blue-600 shadow-2xl">
                Performance-Driven Strategies
              </p>
          </div>

      </div>
    </section>
  );
};