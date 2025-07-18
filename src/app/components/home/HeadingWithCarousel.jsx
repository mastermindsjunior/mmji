// components/HeadingWithSkewCarousel.jsx

'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/autoplay';
// 
const images = [
  '/heading.jpg',
  '/heading.jpg',
  '/heading.jpg',
];

export default function HeadingWithSkewCarousel() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 h-[100dvh] bg-black text-white overflow-hidden font-sfth">
      {/* Left column (text) */}
      <div className="flex flex-col justify-center px-8 lg:px-16 space-y-6 max-w-6xl mx-auto relative z-10">
        <h1 className="opacity-0 pointer-events-none w-0 h-0">
          Elevating Brands with Digital Intelligence in India
        </h1>
        <h2 className="font-jost text-4xl md:text-6xl font-medium tracking-tight leading-tight">
          Welcome to{' '}
          <span className="text-primary-blue font-semibold">
            MasterMinds Junior
          </span>{' '}
          –{' '}
          <span className="text-primary-orange font-semibold">
            Your Growth Catalyst
          </span>
        </h2>

        {/* Sub‐heading / copy */}
        <p className="font-sfth text-lg md:text-xl leading-relaxed">
          At{' '}
          <span className="font-semibold text-primary-blue">
            MasterMinds Junior
          </span>
          , we redefine what it means to be a digital partner. As a{' '}
          <span className="font-semibold text-primary-orange">
            full-service digital marketing agency in India
          </span>
          , we blend creativity with precision to empower businesses to thrive in a digital-first economy. From captivating <span className="font-semibold text-primary-orange">graphic designs</span> to robust app development, our team crafts every solution with purpose and clarity <br /> <br />

          We stand as a beacon of <span className="font-semibold text-primary-orange">innovation, trust, and digital excellence</span>, shaping brands that not only grow but also lead. Whether you’re a startup or a large enterprise, we deliver scalable strategies tailored for measurable success.
        </p>
      </div>

      {/* Right column (skew + carousel) */}
      <div className="relative">
        {/* Skew container */}
        <div
          className="absolute inset-0 overflow-hidden transform skew-x-[12deg] origin-top-right"
          aria-hidden="true"
        >
          <Swiper
            // modules={[Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            slidesPerView={1}
            className="h-full w-full"
          >
            {images.map((src) => (
              <SwiperSlide key={src} className="h-full">
                {/* Un-skew each slide so images appear straight */}
                <div className="transform -skew-x-[12deg] h-full w-full">
                  <img
                    src={src}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Testimonial on top */}
        <blockquote className="absolute bottom-12 right-12 z-20 max-w-xs font-sfth italic text-black">
          “Thanks to MasterMinds Junior, I grew my business really fast.”
          <cite className="block mt-2 font-bold not-italic">– Jane Doe</cite>
        </blockquote>
      </div>
    </section>
  );
}
