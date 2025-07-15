import React from 'react';

export default function OurStorySection() {
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

  return (
    <section className="relative py-16 bg-black text-white font-sfth overflow-hidden">
      {/* Decorative blurred circles */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-primary-blue/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-primary-orange/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-jost font-semibold mb-12">
          <span className="text-white">Milestones That Define</span>{' '}
          <span className="text-primary-blue">Us</span>
          <span className="text-gray-400">.</span>
        </h2>

        {/* Grid with alternating alignment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16">
          {milestones.map(({ year, points }, idx) => {
            const isEven = idx % 2 === 0;
            const textAlign = isEven ? 'md:text-right' : 'md:text-left';
            const justify     = isEven ? 'md:justify-end' : 'md:justify-start';
            const borderSide  = isEven ? 'md:border-l-4 md:pl-8' : 'md:border-r-4 md:pr-8';
            
            return (
              <div
                key={year}
                className={`
                  group relative flex flex-col ${textAlign} 
                  ${isEven ? " bg-gradient-to-br" : " bg-gradient-to-bl"} from-blue-600/20 to-pink-500/20 border-gray-700 
                  border-opacity-50 p-6 rounded-2xl shadow-lg 
                  hover:bg-gray-900/70 hover:shadow-2xl
                  transition-all
                `}
              >
                {/* Year */}
                <div className={`flex items-center ${justify}`}>
                  <span className="text-primary-blue text-2xl md:text-3xl font-jost font-bold">
                    {year}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="mt-4 space-y-2 font-sfbo text-white/80">
                  {points.map((pt, i) => (
                    <li key={i} className="leading-relaxed">
                      {pt}
                    </li>
                  ))}
                </ul>

                {/* Subtle dot that follows the card’s border edge */}
                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
