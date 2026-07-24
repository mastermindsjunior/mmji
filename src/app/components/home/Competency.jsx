import React from 'react';
import Link from 'next/link';
import {
  Share2,
  Search,
  Monitor,
  Megaphone,
  Image,
  FileText,
  ArrowRight,
  Palette,
  Smartphone,
} from 'lucide-react';
import { services } from '../../data/services';

const iconMap = {
  'social-media-marketing': Share2,
  'seo-optimization': Search,
  'web-development': Monitor,
  'app-development': Smartphone,
  'graphic-logo-designing': Image,
  'content-writing': FileText,
  'google-meta-ads': Megaphone,
  branding: Palette,
};

const competencyOrder = [
  'social-media-marketing',
  'seo-optimization',
  'web-development',
  'app-development',
  'graphic-logo-designing',
  'content-writing',
  'google-meta-ads',
  'branding',
];

const CoreCompetencies = () => {
  const competencies = competencyOrder.map((slug) => {
    const service = services.find((s) => s.slug === slug);
    return {
      title: service.shortTitle,
      description: service.competencyDescription,
      slug: service.slug,
      Icon: iconMap[service.slug] || Monitor,
      gradient: 'from-primary to-primary-dark',
    };
  });

  return (
    <section className="relative pb-20 pt-16 text-black font-sfth overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative 2xl:max-w-7xl max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center translate-y-[-3rem] mb-8">
          <h3 className="font-jost md:text-5xl text-3xl font-bold mb-3 bg-gradient-to-r from-primary via-text-primary-dark to-primary bg-clip-text text-transparent">
            Our Core Competencies
          </h3>
          <p className="text-lg text-gray-600 font-sfth">That Drive Results</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 translate-y-[-1rem]">
          {competencies.map(({ title, description, Icon, gradient, slug }, index) => (
            <div
              key={slug}
              className="group bg-white/80 backdrop-blur-sm p-7 rounded-2xl shadow hover:shadow-2xl shadow-primary relative hover:scale-[1.02] hover:-translate-y-1 ease-out duration-300 transition-all border border-gray-100/50 overflow-hidden flex flex-col"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gray-100/50 to-transparent rounded-bl-[3rem] opacity-50" />

              <div className={`relative 2xl:p-3.5 p-3 bg-gradient-to-br ${gradient} rounded-xl inline-flex items-center justify-center mb-5 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}>
                <Icon className="2xl:w-6 w-5 2xl:h-6 h-5 text-white transition-transform duration-300 group-hover:rotate-12" />
              </div>

              <h4 className="font-jost 2xl:text-xl text-lg font-bold mb-3 text-gray-900 leading-tight">
                {title}
              </h4>
              <p className="font-sfth text-gray-600 2xl:text-base text-sm leading-relaxed mb-6 flex-1">
                {description}
              </p>

              <Link
                href={`/Services/${slug}`}
                className="mt-auto w-full inline-flex items-center justify-between border-2 border-gray-200 group-hover:border-gray-900 rounded-full py-2.5 pr-2 pl-5 overflow-hidden transition-all duration-300 group-hover:bg-primary"
              >
                <span className="font-sfbo text-gray-900 group-hover:text-white 2xl:text-base text-sm transition-colors duration-300">
                  View Details
                </span>
                <span className="ml-3 inline-flex items-center justify-center bg-primary group-hover:bg-sec w-9 h-9 rounded-full shadow-md group-hover:scale-110 group-hover:rotate-45 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:text-primary text-white" />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCompetencies;
