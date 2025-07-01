// components/HistorySection.jsx
import React from 'react';

const historyData = [
  {
    year: '2020',
    title: 'Foundation Established',
    description:
      'Established the foundation of MMJ and gained an educational institution as the first client.',
    link: '/services',
  },
  {
    year: '2021',
    title: 'Client Base Growth',
    description:
      'Expanded the client base to include diverse sectors such as education, daycare, and restaurants.',
    link: '/services',
  },
  {
    year: '2022',
    title: 'Hiring & Expansion',
    description:
      'Initiated staff hiring and expanded client services to construction, medical services, liquor stores, renovation, and fast-food industries.',
    link: '/services',
  },
  {
    year: '2023',
    title: 'Regional Expansion',
    description:
      'Commenced expansion into Alberta and Saskatchewan. Began developing QR codes, company profiles, and logo designs.',
    link: '/services',
  },
  {
    year: '2024',
    title: 'Global Presence',
    description:
      'Opened a branch office in India, welcoming clients from across the country, and expanded the client base in Toronto.',
    link: '/services',
  },
  {
    year: '2025',
    title: 'International Growth',
    description:
      'Plans are underway to further expand the business into additional international markets.',
    link: '/services',
  },
];

export default function HistorySection() {
  return (
    <section className="container mx-auto px-16 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Left column */}
      <div className="sticky top-32 self-start">
        <span className="text-sm font-semibold text-[#0e96cc] uppercase">
          Our Story
        </span>
        <h2 className="mt-2 text-3xl lg:text-4xl font-bold leading-tight">
          From Vision to Victory
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Over the years, we’ve turned bold ideas into real-world impact. Our passion for innovation and relentless dedication have driven us to deliver outstanding results time and again.
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block bg-[#0e96cc] hover:bg-[#0c85b3] text-white font-semibold px-6 py-3 rounded-md transition"
        >
          Contact Us ↗
        </a>
      </div>

      {/* Right column */}
      <div className="relative pl-8">
        {/* primary vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-[#0e96cc]" />

        <div className="space-y-12">
          {historyData.map((item) => (
            <div key={item.year} className="relative flex items-start">
              {/* year circle */}
              <div className="z-10 flex items-center justify-center w-12 h-12 shrink-0 bg-[#0e96cc] rounded-full text-white font-semibold text-sm">
                {item.year}
              </div>

              {/* card */}
              <div className="ml-6 bg-white rounded-lg p-6 shadow-md border-l-4 border-[#0e96cc]">
                <h3 className="text-xl font-semibold text-[#0e96cc]">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  {item.description}
                </p>
                <a
                  href={item.link}
                  className="mt-4 inline-block text-[#0e96cc] font-medium hover:underline"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
