// components/WhyChooseUs.jsx
'use client';

import React, { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: 'Expert Team',
    desc: 'Our specialists have years of industry experience and a passion for excellence.'
  },
  {
    title: 'Client-First',
    desc: 'We tailor every solution to your unique needs, ensuring maximum satisfaction.'
  },
  {
    title: 'Cutting-Edge Tech',
    desc: 'We leverage the latest tools and frameworks to build future-proof products.'
  },
  {
    title: 'Transparent Process',
    desc: 'You’re involved every step of the way, with clear milestones and open communication.'
  },
  {
    title: 'Scalable Solutions',
    desc: 'Our architectures grow with you—no painful rewrites or bottlenecks down the road.'
  },
  {
    title: '24/7 Support',
    desc: 'We’re here whenever you need us, with rapid response times and proactive monitoring.'
  }
];

export default function WhyChooseUs() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start:    'top 80%',
          toggleActions: 'play none none reverse'
        }
      });

      // Heading comes in from left
      tl.from('.why-heading', {
        x: -100,
        opacity: 0,
        duration: 0.8,
        ease: 'power1.out'
      })
      // Paragraph from right
      .from('.why-paragraph', {
        x: 100,
        opacity: 0,
        duration: 0.8,
        ease: 'power1.out'
      }, '<0.2')
      // Cards from bottom, staggered
      .from('.why-card', {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.6,
        ease: 'power1.out'
      }, '<0.2');

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[100dvh] w-full overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0e96cc] to-[#084a70]" />
      <div className="absolute -top-16 -left-16 w-80 h-80 bg-white/10 rounded-full filter blur-3xl" />
      <div className="absolute -bottom-24 -right-12 w-96 h-96 bg-white/5 rounded-full filter blur-4xl" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-center items-center text-gray-100 px-6 md:px-12">
        {/* Intro */}
        <div className="max-w-3xl text-center space-y-4">
          <h2 className="why-heading text-4xl font-sfbo">
            Why Choose Us
          </h2>
          <p className="why-paragraph font-sfth text-lg text-gray-200">
            We combine expertise, innovation, and dedication to deliver digital solutions that truly make an impact.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
          {features.map(({ title, desc }, i) => (
            <div
              key={i}
              className="why-card flex items-start gap-4 bg-white/10 border border-white/30 rounded-2xl p-6"
            >
              <CheckCircle className="h-6 w-6 flex-shrink-0 text-gray-100" />
              <div>
                <h3 className="font-sfbo text-xl">{title}</h3>
                <p className="font-sfth text-gray-200 mt-1">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
