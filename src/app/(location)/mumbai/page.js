import Image from "next/image"
import Link from "next/link"

const MumbaiPage = () => {
  return (
    <main className="pt-32 pb-24">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 mb-20">

        <div className="grid xl:grid-cols-2 gap-16 items-center">

          <div>
            <h1 className="font-jost text-4xl md:text-5xl xl:text-6xl font-bold mb-6 text-slate-900">
              Digital Marketing Agency in Mumbai Committed to Strategic Growth
            </h1>

            <p className="text-xl text-gray-800 font-semibold mb-6 max-w-xl">
              Transforming Digital Engagement into Measurable Revenue
            </p>

            <p className="text-gray-700 mb-6 max-w-xl">
              In a competitive market like Mumbai, visibility alone is not enough. Sustainable growth requires strategic precision, performance tracking, and conversion-focused execution. As a performance-driven digital marketing agency in Mumbai, we design structured marketing frameworks that move potential customers seamlessly from awareness to acquisition. Recognized as a best digital marketing company in Mumbai, our approach combines advanced analytics, automation, audience research, and targeted campaign execution to deliver measurable ROI. From specialized SEO services in Mumbai to data-backed paid advertising campaigns, every initiative is aligned with clear business objectives and revenue outcomes.
            </p>

            <p className="text-gray-700 max-w-xl">
              We operate as long-term strategic partners rather than short-term service providers. As a trusted provider of online marketing services Mumbai, we develop integrated digital ecosystems tailored to each brand’s market positioning. Whether you require a performance-oriented social media marketing agency Mumbai, a strategic PPC company in Mumbai, or a certified Google Ads agency Mumbai, our execution is guided by competitive intelligence, behavioral insights, and continuous optimization. Businesses seeking a dependable website development company in Mumbai rely on us to build scalable, high-converting platforms using technologies such as React, WordPress, Wix, and Shopify. Our focus remains on building sustainable brand authority and predictable lead generation.
            </p>
          </div>

          <Image
            src="/mumbai.jpg"
            width={600}
            height={400}
            alt="Mumbai city"
            className="rounded-2xl shadow-lg"
          />

        </div>

      </section>

      {/* CORE SERVICES */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        
        <h2 className="font-jost text-3xl md:text-4xl font-bold mb-4 text-slate-900">
          Our Digital Marketing Services in Mumbai
        </h2>
        
        <p className="text-xl text-gray-800 font-semibold mb-8">
          Strategy-Driven. Data-Led. Performance-Focused.
        </p>

        <p className="text-gray-700 mb-8 max-w-4xl">
          Our end-to-end solutions position us as a reliable ROI driven marketing agency Mumbai:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              Search Engine Optimization (SEO)
            </h3>
            <p className="text-gray-700">
              Comprehensive SEO services in Mumbai designed to improve rankings, authority, and organic acquisition.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              Local SEO Services Mumbai
            </h3>
            <p className="text-gray-700">
              Strengthening visibility across local search results and optimizing Google Business Profile performance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              Google Ads & PPC Campaign Management
            </h3>
            <p className="text-gray-700">
              Performance-oriented campaigns managed by an experienced PPC company in Mumbai.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              Social Media Marketing (SMM)
            </h3>
            <p className="text-gray-700">
              Structured brand positioning strategies delivered by a professional social media marketing agency Mumbai.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              Website Development
            </h3>
            <p className="text-gray-700">
              Conversion-focused websites created by a trusted website development company in Mumbai.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              Performance Marketing
            </h3>
            <p className="text-gray-700">
              Scalable, data-driven campaigns executed by a results-focused performance marketing agency Mumbai.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              Content & Creative Strategy
            </h3>
            <p className="text-gray-700">
              Strategic messaging frameworks designed to enhance engagement and improve conversion rates.
            </p>
          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="flex justify-between items-center gap-4 max-w-7xl mx-auto px-6 mb-20">
        <div>

          <h2 className="font-jost text-3xl font-bold mb-6 text-slate-900">
            Why Partner With Us?
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl">✓</span>
              <span>Recognized as a top SEO expert in Mumbai for small businesses</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl">✓</span>
              <span>Transparent reporting with detailed performance dashboards</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl">✓</span>
              <span>Dedicated strategic account management</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl">✓</span>
              <span>Industry-specific marketing frameworks</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl">✓</span>
              <span>Proven results across Mumbai and Maharashtra markets</span>
            </li>
          </ul>

        </div>

        <Image
          src="/mumbai-1.jpg"
          width={600}
          height={400}
          alt="Mumbai city"
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-6 mb-20">

        <h2 className="font-jost text-3xl font-bold mb-10 text-slate-900">
          Frequently Asked Questions
        </h2>

        <div className="space-y-8">

          <div>
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              1. What services does a digital marketing agency in Mumbai offer?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              A digital marketing agency in Mumbai supports businesses in strengthening their online presence, generating qualified leads, and driving revenue through structured digital strategies. We provide integrated solutions including SEO services in Mumbai, paid advertising management, social media marketing, website development, and performance analytics.
            </p>
          </div>

          <div>
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              2. What is the typical cost of online marketing services in Mumbai?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Investment varies depending on industry competition, campaign scope, and business objectives. A dependable ROI driven marketing agency Mumbai prioritizes measurable returns while maintaining budget transparency and strategic efficiency.
            </p>
          </div>

          <div>
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              3. How long do SEO services in Mumbai take to produce results?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Professional SEO services in Mumbai typically require 3–6 months to demonstrate consistent ranking improvements and organic growth. Long-term SEO focuses on authority building and sustainable acquisition.
            </p>
          </div>

          <div>
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              4. How can I choose the best digital marketing company in Mumbai?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Selection should be based on case studies, transparent reporting, measurable outcomes, and strategic clarity. Whether you require social media marketing, PPC, or website development, alignment with revenue goals is essential.
            </p>
          </div>

          <div>
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              5. Is digital marketing beneficial for small businesses in Mumbai?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Yes. Through structured local SEO services Mumbai, targeted paid advertising, and performance marketing strategies, small businesses can compete effectively. Professional execution converts digital efforts into scalable growth channels.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="bg-gradient-to-r from-blue-600 to-[#020b14] rounded-2xl p-8 md:p-12 text-center text-white">
          <p className="text-lg md:text-xl leading-relaxed mb-4">
            Ready to work with a digital marketing agency in Mumbai that focuses on revenue, not noise? Let’s build a system that scales consistently and delivers measurable growth.
          </p>
          <button>
            <Link href={"/contact"} className="px-4 py-2 bg-white text-blue-600 font-semibold">
              Lets start!
            </Link>
          </button>
        </div>
      </section>

    </main>
  )
}

export default MumbaiPage
