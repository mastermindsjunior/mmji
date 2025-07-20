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
    },
    {
      title: 'Search Engine Optimization (SEO)',
      description:
        'Rise in Google rankings with professional SEO services for Indian businesses, driven by research and on-page excellence.',
      Icon: Search,
    },
    {
      title: 'Website & App Development',
      description:
        'Experience high-performance websites and scalable mobile apps custom-built to reflect your brand DNA.',
      Icon: Monitor,
    },
    {
      title: 'Graphic & Logo Designing',
      description:
      'Create a visual identity that resonates. Our top logo designers in India deliver logos with purpose and aesthetics.',
      Icon: Image,
    },
    {
      title: 'Content Writing',
      description:
      'Content that informs, inspires, and converts—crafted for your ideal audience with clarity and impact.',
      Icon: FileText,
    },
    {
      title: 'Google & Meta Ads',
      description:
        'Engage the right audience through Google Ads and Meta Ads management, optimizing every rupee spent.',
      Icon: Megaphone,
    },
  ];

  return (
    <section className="relative pb-16 bg-black text-white font-sfth">
      {/* subtle gradient behind the grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/20 via-transparent to-primary-orange/20 pointer-events-none" />

      <div className="relative 2xl:max-w-7xl max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
            <h3 className="font-jost text-4xl md:text-5xl text-2xl font-bold mb-5 pb-2 textMask_br text-center translate-y-[-3rem]">
              Our Core Competencies That Drive Results
            </h3>


        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 translate-y-[-1rem]">
          {competencies.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="group bg-gradient-to-br from-blue-600/50 via-darker to-pink-500/50 p-6 rounded-2xl shadow-lg hover:shadow-xl relative hover:scale-90 ease-in duration-200 transition-all"
            >
              {/* Icon container */}
              <div className="2xl:p-3 p-2 bg-dark rounded-lg ring-1 ring-primary-orange group-hover:ring-primary-blue inline-flex items-center justify-center mb-4 transition">
                <Icon className="2xl:w-6 w-5 2xl:h-6 h-5 text-primary-orange group-hover:text-primary-blue transition" />
              </div>

              {/* Title & Description */}
              <h4 className="font-jost 2xl:text-xl text-lg font-semibold mb-2 w-fit" style={{maskImage:'linear-gradient(135deg, black 60%, #00000077)'}}>{title}</h4>
              <p className="font-sfth text-gray-300 2xl:text-base text-sm leading-relaxed" style={{maskImage:'linear-gradient(135deg, black 60%, #00000077)'}}>
                {description}
              </p>

              {/* View Details button */}
              <button className="mt-6 w-full inline-flex items-center justify-between border border-primary-blue rounded-full py-2  pr-2 pl-4 overflow-hidden group transition">
                <span className="font-sfbo text-white 2xl:text-base text-sm">View Details</span>
                <span className="ml-3 inline-flex items-center justify-center bg-primary-orange w-8 h-8 rounded-full group-hover:bg-primary-blue transition">
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
