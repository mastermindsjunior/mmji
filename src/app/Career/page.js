// app/careers/page.js

import React from 'react';
import Banner from '../components/common/Banner';
// import { LocationMarkerIcon, ClockIcon } from '@heroicons/react/outline';
import { MapPin, Clock } from 'lucide-react';

const opportunities = [
  {
    category: 'job',
    designation: 'Software Engineer',
    location: 'San Francisco',
    duration: 'Full-time',
    desc: 'Develop cutting-edge applications and collaborate with a dynamic team to solve complex problems.',
  },
  {
    category: 'job',
    designation: 'Product Manager',
    location: 'Remote',
    duration: 'Part-time',
    desc: 'Lead product development cycles and work closely with engineering and design teams.',
  },
  {
    category: 'internship',
    designation: 'Marketing Intern',
    location: 'New York',
    duration: '3 months',
    desc: 'Assist in creating marketing campaigns and analyzing market trends.',
  },
  {
    category: 'internship',
    designation: 'Engineering Intern',
    location: 'Remote',
    duration: '6 months',
    desc: 'Gain hands-on experience in software development and contribute to real projects.',
  },
  {
    category: 'course',
    designation: 'AI Fundamentals',
    location: 'Online',
    duration: 'Self-paced',
    desc: 'Learn the basics of artificial intelligence through interactive modules and projects.',
  },
  {
    category: 'course',
    designation: 'Advanced Machine Learning',
    location: 'Online',
    duration: '12 weeks',
    desc: 'Dive deep into machine learning algorithms and their applications in industry.',
  },
];

const CareersPage = () => {
  const groupedOpportunities = opportunities.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Layered radial gradients */}
      {/* <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at top left, rgba(131, 58, 180, 0.6), transparent 50%),' +
            'radial-gradient(circle at bottom right, rgba(253, 29, 29, 0.5), transparent 50%)',
        }}
      /> */}

      {/* Banner with gradient-text */}
      <Banner
        title={
          "Career with"
        }
        sub={
          "Us"
        }
      />

      <main className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        {Object.entries(groupedOpportunities).map(([category, items]) => (
          <section key={category} className="mb-16">
            <h2 className="text-4xl font-semibold mb-6 capitalize bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-500">
              {category}s
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-purple-700 to-pink-700 p-[1px] rounded-2xl hover:scale-105 transform transition duration-300 ease-out"
                >
                  <div className="bg-black rounded-2xl p-6 backdrop-blur-sm h-full">
                    <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-yellow-300">
                      {item.designation}
                    </h3>

                    <div className="flex items-center text-gray-400 mb-2">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span>{item.location}</span>
                    </div>

                    <div className="flex items-center text-gray-400 mb-4">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>{item.duration}</span>
                    </div>

                    <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default CareersPage;
