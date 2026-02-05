import React from 'react';
import {
  Share2,
  Search,
  Monitor,
  Megaphone,
  Image,
  FileText,
  ArrowRight,
} from 'lucide-react';

const CoreCompetencies = () => {
  const competencies = [
    {
      title: 'Social Media Marketing (SSM)',
      description:
        'Maximize your brand visibility and engagement across platforms with tailored, data-driven campaigns.',
      Icon: Share2,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Search Engine Optimization (SEO)',
      description:
        'Rise in Google rankings with professional SEO services for Indian businesses, driven by research and on-page excellence.',
      Icon: Search,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Website & App Development',
      description:
        'Experience high-performance websites and scalable mobile apps custom-built to reflect your brand DNA.',
      Icon: Monitor,
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Graphic & Logo Designing',
      description:
        'Create a visual identity that resonates. Our top logo designers in India deliver logos with purpose and aesthetics.',
      Icon: Image,
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Content Writing',
      description:
        'Content that informs, inspires, and converts—crafted for your ideal audience with clarity and impact.',
      Icon: FileText,
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'Google & Meta Ads',
      description:
        'Engage the right audience through Google Ads and Meta Ads management, optimizing every rupee spent.',
      Icon: Megaphone,
      gradient: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section className="relative pb-20 pt-16 text-black font-sfth overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative 2xl:max-w-7xl max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center translate-y-[-3rem] mb-8">
          <h3 className="font-jost md:text-5xl text-3xl font-bold mb-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Our Core Competencies
          </h3>
          <p className="text-lg text-gray-600 font-sfth">That Drive Results</p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 translate-y-[-1rem]">
          {competencies.map(({ title, description, Icon, gradient }, index) => (
            <div
              key={title}
              className="group bg-white/80 backdrop-blur-sm p-7 rounded-2xl shadow-lg hover:shadow-2xl relative hover:scale-[1.02] hover:-translate-y-1 ease-out duration-300 transition-all border border-gray-100/50 overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Subtle gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
              
              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gray-100/50 to-transparent rounded-bl-[3rem] opacity-50" />

              {/* Icon container */}
              <div className={`relative 2xl:p-3.5 p-3 bg-gradient-to-br ${gradient} rounded-xl inline-flex items-center justify-center mb-5 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}>
                <Icon className="2xl:w-6 w-5 2xl:h-6 h-5 text-white transition-transform duration-300 group-hover:rotate-12" />
              </div>

              {/* Title & Description */}
              <h4 className="font-jost 2xl:text-xl text-lg font-bold mb-3 text-gray-900 leading-tight">
                {title}
              </h4>
              <p className="font-sfth text-gray-600 2xl:text-base text-sm leading-relaxed mb-6">
                {description}
              </p>

              {/* View Details button */}
              <button className="mt-auto w-full inline-flex items-center justify-between border-2 border-gray-200 group-hover:border-gray-900 rounded-full py-2.5 pr-2 pl-5 overflow-hidden transition-all duration-300 group-hover:bg-gray-900">
                <span className="font-sfbo text-gray-900 group-hover:text-white 2xl:text-base text-sm transition-colors duration-300">
                  View Details
                </span>
                <span className={`ml-3 inline-flex items-center justify-center bg-gradient-to-br ${gradient} w-9 h-9 rounded-full shadow-md group-hover:scale-110 group-hover:rotate-45 transition-all duration-300`}>
                  <ArrowRight className="w-4 h-4 text-white" />
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCompetencies;