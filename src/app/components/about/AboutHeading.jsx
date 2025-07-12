import React from 'react';

const AboutSection = () => {
  return (
    <section className="relative bg-black text-white py-16 font-sfth">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 md:px-12">
        
        {/* — Left: Image + Stat Card — */}
        <div className="relative">
          {/* Stat Card */}
          <div className="absolute top-0 left-0 bg-gray-900/70 border border-primary-orange rounded-xl p-6
                          shadow-lg ring-4 ring-primary-orange/40">
            <div className="text-5xl font-jost font-bold text-primary-orange">5+</div>
            <div className="mt-1 font-sfbo text-sm">
              Years of Experience  
            </div>
            <div className="font-sfbo text-sm">
              on Digital Marketing Services
            </div>
          </div>

          {/* Hero Image */}
          <img
            src="/heading.jpg"
            alt="MasterMinds Junior Team"
            className=" aspect-square w-full rounded-2xl shadow-2xl object-cover"
          />
        </div>

        {/* — Right: Badge, Heading & Copy — */}
        <div className="flex flex-col justify-center">
          {/* Badge */}
          <div className="flex items-center mb-4">
            <span className="w-2 h-2 rounded-full bg-primary-orange mr-2" />
            <span className="uppercase text-sm font-semibold text-primary-orange tracking-wider">
              About Us
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-jost text-4xl md:text-5xl font-bold mb-5 pb-2" style={{maskImage:'linear-gradient(135deg, black 60%, #00000077)'}}>
            From Vision to Digital Legacy
          </h2>

          {/* Text */}
          <p className="font-sfbo text-lg text-gray-300 leading-relaxed mb-4"  style={{maskImage:'linear-gradient(135deg, black 60%, #00000077)'}}>
            Born from a vision to revolutionize online growth, MasterMinds Junior is more than a digital marketing agency—we are enablers of transformation. Our journey began in 2020 with a small but determined team that aimed to bridge the gap between businesses and digital opportunity.
          </p>
          <p className="font-sfbo text-lg text-gray-300 leading-relaxed"  style={{maskImage:'linear-gradient(135deg, black 60%, #00000077)'}}>
            Today, we are among the top creative agencies in India, serving clients across industries and continents.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
