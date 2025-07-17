import React from 'react';

const AboutSection = () => {
  return (
    <section className="relative bg-black text-white py-16 font-sfth">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 md:px-12 place-content-center items-center">
        
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
            className=" aspect-video w-full rounded-2xl shadow-2xl object-cover"
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
          <p className="font-sftn text-sm text-gray-300 leading-relaxed mb-4"  style={{maskImage:'linear-gradient(135deg, black 60%, #00000077)'}}>
MasterMinds Junior was not merely established—it was envisioned. Founded in 2020 by Harpreet Lamba, a visionary leader with a rare blend of strategic foresight and empathetic leadership, the company emerged as a response to a growing need: bridging the chasm between ambitious businesses and the ever-evolving digital landscape.
          </p>
          <p className="font-sftn text-sm text-gray-300 leading-relaxed"  style={{maskImage:'linear-gradient(135deg, black 60%, #00000077)'}}>
Harpreet’s approach to leadership transcends traditional hierarchies. He leads not from above, but from within—fostering an environment where every team member feels valued, empowered, and inspired. At MasterMinds Junior, innovation is not dictated; it’s nurtured. Under Harpreet’s guidance, the agency has become a launchpad for emerging talent—particularly freshers—offering them not just a role but a direction, a platform, and the confidence to explore uncharted creative territory.
          </p>
          <p className="font-sftn text-sm text-gray-300 leading-relaxed"  style={{maskImage:'linear-gradient(135deg, black 60%, #00000077)'}}>
In an industry where experience is often prioritized over potential, Harpreet chose to champion curiosity, creativity, and continuous learning. His commitment to cultivating a culture of inclusivity, experimentation, and excellence has allowed MasterMinds Junior to evolve into one of India’s leading creative digital agencies—serving a diverse portfolio of clients across industries and geographies.
          </p>
          <p className="font-sftn text-sm text-gray-300 leading-relaxed"  style={{maskImage:'linear-gradient(135deg, black 60%, #00000077)'}}>
Today, MasterMinds Junior stands as a testament to what’s possible when visionary leadership meets relentless passion. We don’t just craft digital solutions; we architect digital legacies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
