import React from 'react';

const milestones = [
  {
    year: '2020',
    points: [
      'Conceptualized with a bold mission and secured our first client—a leading educational brand.',
    ],
  },
  {
    year: '2021',
    points: [
      'Entered the education, hospitality, and childcare sectors, expanding our digital toolkit.',
    ],
  },
  {
    year: '2022',
    points: [
      'Diversified our portfolio with clients in healthcare, construction, retail, and food services.',
    ],
  },
  {
    year: '2023',
    points: [
      'Expanded our regional footprint to Alberta and Saskatchewan.',
      'Introduced new offerings like QR solutions and custom branding profiles.',
    ],
  },
  {
    year: '2024',
    points: [
      'Marked a new beginning with the launch of our India operations and deeper roots in Toronto.',
    ],
  },
  {
    year: '2025 & Beyond',
    points: [
      'On a trajectory to enter new global markets with a relentless focus on innovation and excellence.',
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
                  className="flex-shrink-0 flex flex-col items-center 2xl:w-48 w-40"
                >
                  {/* Dot */}
                  <div className="relative z-10 w-3 h-3 -translate-y-1 bg-primary-blue rounded-full border-2 border-gray-800" />

                  {/* Connector line */}
                  <div className="w-px h-8 bg-gray-700 mt-1" />

                  {/* Card */}
                  <div className="mt-4 bg-gray-900 p-4 rounded-lg shadow-lg text-center">
                    <h3 className="text-xl font-jost font-bold text-primary-blue">
                      {year}
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
