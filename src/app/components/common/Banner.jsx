import React from 'react';

export default function Banner({ title, sub }) {
  return (
<div className=' pt-[120px] w-full'>
      <section
      className="relative isolate w-[calc(100%-40px)] mx-auto bg-[#111]
                 flex items-center justify-center rounded-3xl shadow-inner
                 px-6 h-[300px] overflow-hidden"
    >
      {/* Glowing blue radial */}
      <div
        className="absolute inset-0 pointer-events-none blur-xl opacity-50"
        style={{
          background:
            'radial-gradient(ellipse at bottom center, var(--color-primary-blue) 0%, transparent 60%)',
        }}
      />

      {/* Faint grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background:
            'linear-gradient(#222 1px, transparent 1px) 0 0 / 100px 100px, ' +
            'linear-gradient(90deg, #222 1px, transparent 1px) 0 0 / 100px 100px',
        }}
      />

      {/* Text */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-sfth text-white">
          {title}{' '}
          <span className="font-sfbo text-[var(--color-primary-blue)]">{sub}</span>
        </h1>

        <p className="mt-4 text-sm sm:text-base">
          <span className="text-[var(--color-primary-blue)] font-semibold">Home</span>{' '}
          <span className="text-gray-400">/ {title} {sub}</span>
        </p>
      </div>
    </section>
</div>
  );
}
