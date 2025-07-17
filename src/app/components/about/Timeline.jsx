import React from 'react';

const milestones = [
  {
    year: '2020 - Where It All Began',
    points: [
      'Founded with a bold vision to transform digital experiences.',
      'Secured our first client—a leading educational institution.',
    ],
  },
  {
    year: '2021 - Momentum Builds',
    points: [
      'Expanded into education, childcare, and hospitality.',
      'Strengthened our presence with diverse, sector-driven solutions.',
    ],
  },
  {
    year: '2022 - Scaling Up',
    points: [
      'Team growth fueled by rising demand.',
      'Entered new industries: construction, healthcare, retail, and food services.',
    ],
  },
  {
    year: '2023 - Strategic Reach',
    points: [
      'Expanded our regional footprint to Alberta and Saskatchewan.',
      'Introduced new offerings: QR codes, company profiles, and bespoke branding.',
    ],
  },
  {
    year: '2024 - Going Global',
    points: [
      'Launched operations in India.',
      'Gained traction in Toronto, enhancing our international footprint.',
    ],
  },
  {
    year: '2025 - The Global Vision',
    points: [
      'Actively entering new global markets.',
      'Advancing with purpose, precision, and performance.',
    ],
  },
];

export default function OurStorySection() {
  return (
    <section className="relative py-16 bg-black text-white font-sfth">
      <div className=" w-full mx-auto px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-jost font-semibold mb-6">
          <span className="text-white">Milestones That Define</span>{' '}
          <span className="text-primary-blue">Us</span>
          <span className="text-gray-400">.</span>
        </h2>

        {/* Timeline */}
        <div className="relative mt-12">
          {/* Horizontal line */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-700" />

          {/* Dots + cards */}
          <div className="relative pt-8 overflow-x-auto">
            <div className="flex items-start justify-between min-w-max px-4 2xl:space-x-8 space-x-4">
              {milestones.map(({ year, points }) => (
                <div
                  key={year}
                  className="flex-shrink-0 flex flex-col items-center 2xl:w-52 w-44"
                >
                  {/* Dot */}
                  <div className="relative z-10 w-3 h-3 -translate-y-1 bg-primary-blue rounded-full border-2 border-gray-800" />

                  {/* Connector line */}
                  <div className="w-px h-8 bg-gray-700 mt-1" />

                  {/* Card */}
                  <div className="mt-4 bg-gray-900 p-4 rounded-lg shadow-lg text-center">
                    <h3 className="text-xl font-jost font-bold text-primary-blue">
                      {year.split("-").map((text, i) => (
                        <>
                        <span key={i}>{text}</span>
                        {i < 1 && <br/>}
                        </>
                      ))}
                    </h3>
                    <ul className="mt-2 font-alum text-gray-300 text-lg space-y-2">
                      {points.map((pt, i) => (
                        <li key={i}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
