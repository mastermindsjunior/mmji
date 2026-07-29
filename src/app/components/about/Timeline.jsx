'use client';

import gsap from 'gsap';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

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
  {
    year: '2026 - Building the Future',
    points: [
      'Strengthening global partnerships and market presence.',
      'Innovating new solutions to drive lasting client impact.',
    ],
  },
];

const XL_BREAKPOINT = 1280;

export default function OurStorySection() {
  const rocketRef = useRef(null);
  const trackRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const scrollEl = scrollRef.current;
    const rocket = rocketRef.current;

    if (!track || !rocket || !scrollEl) return;

    const dots = track.querySelectorAll('.milestone-dot');
    if (!dots.length) return;

    const tl = gsap.timeline({ repeat: -1 });

    const getTargetX = (dot) => {
      const dotRect = dot.getBoundingClientRect();
      const trackRect = track.getBoundingClientRect();
      // Content-space X so positions stay correct even when the track is scrolled
      return (
        dotRect.left -
        trackRect.left +
        scrollEl.scrollLeft -
        (rocket.offsetWidth / 2.5 + dotRect.width / 2)
      );
    };

    const keepRocketInView = () => {
      if (window.innerWidth < XL_BREAKPOINT) return;

      const x = Number(gsap.getProperty(rocket, 'x')) || 0;
      const rocketCenter = x + rocket.offsetWidth / 2;
      const maxScroll = scrollEl.scrollWidth - scrollEl.clientWidth;
      if (maxScroll <= 0) return;

      const desired = rocketCenter - scrollEl.clientWidth / 2;
      scrollEl.scrollLeft = Math.min(maxScroll, Math.max(0, desired));
    };

    const buildTimeline = () => {
      tl.clear();
      scrollEl.scrollLeft = 0;
      gsap.set(rocket, { x: 0, y: 0 });

      // Only animate horizontally when the timeline is in row layout
      if (window.innerWidth < XL_BREAKPOINT) return;

      dots.forEach((dot) => {
        const targetX = getTargetX(dot);

        tl.to(rocket, {
          x: targetX,
          duration: 2,
          ease: 'power2.inOut',
          onUpdate: keepRocketInView,
        })
          .to(
            rocket,
            {
              y: '-=5',
              repeat: 1,
              yoyo: true,
              duration: 0.5,
            },
            '+=0'
          )
          .to({}, { duration: 1.5 });
      });
    };

    buildTimeline();

    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(buildTimeline, 150);
    };

    window.addEventListener('resize', onResize);

    return () => {
      clearTimeout(resizeTimer);
      tl.kill();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section className="relative py-16 bg-primary-dark text-sec font-sfth">
      <div className="w-full mx-auto px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-jost font-semibold mb-6">
          <span className="text-white">Milestones That Define</span>{' '}
          <span className="text-sec">Us</span>
          <span className="text-gray-400">.</span>
        </h2>

        {/* Timeline — scrollable on xl+ so extra years fit without clipping */}
        <div
          ref={scrollRef}
          className="relative mt-12 overflow-x-auto overflow-y-visible pb-4 pt-4 [scrollbar-width:thin] [scrollbar-color:var(--color-sec)_#1f2937] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-800 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-sec/70"
        >
          <div ref={trackRef} className="relative xl:min-w-max xl:w-max w-full">
            {/* Horizontal / vertical line — spans full track width */}
            <div className="absolute top-8 xl:left-4 left-8 xl:right-4 xl:h-0.5 h-full xl:w-auto w-0.5 bg-gray-700" />

            {/* Rocket travels in track space so it stays aligned with dots while scrolling */}
            <div
              ref={rocketRef}
              className="absolute z-20 pointer-events-none hidden xl:block"
              style={{ top: '-10px', left: 0 }}
            >
              <Image
                src="/astro/4.png"
                width={60}
                height={60}
                alt="rocket"
                className="w-12 h-12 object-contain -scale-x-100"
              />
            </div>

            {/* Dots + cards */}
            <div className="relative pt-8 flex xl:flex-row flex-col xl:items-start items-end xl:justify-start justify-between xl:gap-8 2xl:gap-10 px-4">
              {milestones.map(({ year, points }) => (
                <div
                  key={year}
                  className="flex-shrink-0 flex xl:flex-col flex-row items-center 2xl:w-56 xl:w-48 w-[300px] xl:mr-0 mr-4 pb-2"
                >
                  {/* Dot */}
                  <div className="milestone-dot relative z-10 w-3 h-3 shrink-0 xl:-translate-y-1 xl:translate-x-0 -translate-x-[5px] bg-sec rounded-full border-2 border-gray-800" />

                  {/* Connector line */}
                  <div className="xl:w-px w-8 xl:h-8 h-px bg-gray-700 xl:mt-1 mt-0 xl:ml-0 ml-1" />

                  {/* Card */}
                  <div className="mt-4 bg-primary p-4 rounded-lg shadow shadow-sec hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-in-out text-center">
                    <h3 className="text-xl font-jost font-bold text-sec">
                      {year.split('-').map((text, i) => (
                        <React.Fragment key={i}>
                          <span>{text.trim()}</span>
                          {i < 1 && <br />}
                        </React.Fragment>
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
