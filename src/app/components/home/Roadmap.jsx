import React from 'react';
import ScrambleText from '../common/ScrambledText';

const roadmapData = [
  {
    title: 'Q1 2024',
    subtitle: 'Foundation & Research',
    points: [
      'Initial protocol design',
      'Whitepaper draft',
      'Team onboarding',
      'Community preview launch'
    ]
  },
  {
    title: 'Q2 2024',
    subtitle: 'Development Phase 1',
    points: [
      'Smart contract architecture',
      'Testnet deployment',
      'Developer documentation',
      'Bug bounty round 1'
    ]
  },
  {
    title: 'Q3 2024',
    subtitle: 'Ecosystem Expansion',
    points: [
      'Partnership announcements',
      'Tokenomics release',
      'Mainnet launch planning',
      'Platform integrations'
    ]
  },
  {
    title: 'Q4 2024',
    subtitle: 'Launch & Growth',
    points: [
      'Mainnet launch',
      'DAO activation',
      'Marketing campaign',
      'Web3 grants program'
    ]
  }
];

const Roadmap = () => {
  return (
    <div className="relative w-full min-h-dvh py-[4%] flex flex-col items-center justify-start gap-12 text-white z-20 px-6 sm:px-12 bg-black">
      
      {/* Heading */}
      <div className="text-center z-10">
        <div className="flex flex-col items-center gap-4 ecosystemHeading">
          <h3 className="text-3xl md:text-4xl font-semibold">
            <ScrambleText text="Roadmap" duration={800} speed={5} />
          </h3>
          <p className="text-white/70 text-sm md:text-base max-w-md">
            A transparent path to building the decentralized future.
          </p>
          <button className="border border-white/30 hover:border-white rounded-full py-2 px-6 transition-all duration-300 ecosystemBtn">
            <span className="inline-block font-medium">Our Roadmap</span>
          </button>
        </div>
      </div>

      {/* Background Video */}
      <video
        src="/sphere.mp4"
        autoPlay
        playsInline
        muted
        loop
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-auto h-[70%] object-cover z-0"
      ></video>

      {/* Roadmap Timeline Grid */}
<div className="relative z-10 flex justify-center gap-12 w-full max-w-6xl">
  {/* Left Column */}
  <div className="flex flex-col gap-8">
    {roadmapData.slice(0, 2).map((item, i) => (
      <div
        key={i}
        className="relative backdrop-blur-md p-5 rounded-2xl border border-white/10 bg-white/5 shadow-md transition-transform duration-300 w-full max-w-[360px]"
      >
        <h6 className="text-lg font-semibold mb-1">{item.title}</h6>
        <p className="text-sm text-white/80 mb-3">{item.subtitle}</p>
        <ul className="list-disc text-white/60 pl-5 text-xs space-y-1">
          {item.points.map((pt, idx) => (
            <li key={idx}>{pt}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>

  {/* Right Column */}
  <div className="flex flex-col gap-8 translate-y-6">
    {roadmapData.slice(2, 4).map((item, i) => (
      <div
        key={i}
        className="relative backdrop-blur-md p-5 rounded-2xl border border-white/10 bg-white/5 shadow-md transition-transform duration-300 w-full max-w-[360px]"
      >
        <h6 className="text-lg font-semibold mb-1">{item.title}</h6>
        <p className="text-sm text-white/80 mb-3">{item.subtitle}</p>
        <ul className="list-disc text-white/60 pl-5 text-xs space-y-1">
          {item.points.map((pt, idx) => (
            <li key={idx}>{pt}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default Roadmap;
