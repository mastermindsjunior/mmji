import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import Banner from '../common/Banner';

export default function ServiceDetail({ service }) {
  const number = service.num.toString().padStart(2, '0');

  return (
    <main>
      <Banner title="Our" sub={service.title} />

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          {/* Intro */}
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start mb-16">
            <div>
              <p className="font-jost text-sm uppercase tracking-widest text-primary mb-3">
                Service {number}
              </p>
              <h2 className="font-jost text-3xl md:text-4xl xl:text-5xl font-bold text-slate-900 mb-4">
                {service.heading}
              </h2>
              <p className="font-sfth text-gray-700 text-lg leading-relaxed max-w-3xl">
                {service.overview}
              </p>
            </div>
            <div className="hidden lg:block text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary to-primary-dark opacity-30">
              {number}
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h3 className="font-jost text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              What We Deliver
            </h3>
            <p className="font-sfth text-gray-600 mb-8 max-w-2xl">
              End-to-end capabilities designed to move your brand forward with clarity and results.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {service.features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-gradient-to-br from-primary to-primary-dark p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <h4 className="font-jost text-xl font-semibold text-sec mb-2">
                    {feature.title}
                  </h4>
                  <p className="font-sfth text-gray-300 text-sm leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white/80 border border-gray-100 rounded-2xl p-8 md:p-10 mb-16 shadow-sm">
            <h3 className="font-jost text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Why Choose This Service
            </h3>
            <ul className="grid sm:grid-cols-2 gap-4">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span className="font-sfth text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="relative overflow-hidden rounded-3xl bg-primary-darker px-8 py-12 md:px-12 text-center">
            <div
              className="absolute inset-0 pointer-events-none blur-xl opacity-50"
              style={{
                background:
                  'radial-gradient(ellipse at bottom center, var(--color-primary) 0%, transparent 60%)',
              }}
            />
            <div className="relative z-10">
              <h3 className="font-jost text-2xl md:text-3xl font-bold text-white mb-3">
                Ready to get started?
              </h3>
              <p className="font-sfth text-gray-300 mb-8 max-w-xl mx-auto">
                Tell us about your goals and we&apos;ll craft a plan around {service.title.toLowerCase()} that fits your business.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/Contact"
                  className="inline-flex items-center gap-2 bg-sec text-primary font-jost font-semibold rounded-full px-7 py-3 hover:scale-105 transition-transform"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/Services"
                  className="inline-flex items-center gap-2 border border-white/30 text-white font-jost font-medium rounded-full px-7 py-3 hover:bg-white/10 transition-colors"
                >
                  All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
