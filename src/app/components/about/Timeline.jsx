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
          <div className="absolute top-8 xl:left-0 left-8 xl:right-0 xl:h-0.5 h-full xl:w-full w-0.5  bg-gray-700" />

          {/* Dots + cards */}
          <div className="relative pt-8 overflow-hidden">
            <div className="flex xl:flex-row flex-col xl:items-start items-end justify-between min-w-max px-4 2xl:space-x-8 xl:space-x-4 ">
              {milestones.map(({ year, points }) => (
                <div
                  key={year}
                  className="flex-shrink-0 flex xl:flex-col flex-row items-center 2xl:w-52 xl:w-44 w-[300px] xl:mr-0 mr-4"
                >
                  {/* Dot */}
                  <div className="relative z-10 w-3 h-3 shrink-0 xl:-translate-y-1 xl:translate-x-0 -translate-x-[5px] bg-primary-blue rounded-full border-2 border-gray-800" />

                  {/* Connector line */}
                  <div className="xl:w-px w-8 xl:h-8 h-px bg-gray-700 xl:mt-1 mt-0 xl:ml-0 ml-1" />

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
                    <ul className="mt-2 font-jost text-sm text-gray-300 space-y-2">
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
