import Image from "next/image"
import Link from "next/link"

const ChandigarhPage = () => {
  return (
    <main className="pt-32 pb-24">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 mb-20">

        <div className="grid xl:grid-cols-2 gap-16 items-center">

          <div>
            <h1 className="font-jost text-4xl md:text-5xl xl:text-6xl font-bold mb-6 text-slate-900">
              Digital Marketing Agency in Chandigarh Focused on Sustainable Growth
            </h1>

            <p className="text-xl text-gray-800 font-semibold mb-6 max-w-xl">
              Converting Digital Attention into Measurable Business Outcomes
            </p>

            <p className="text-gray-700 mb-6 max-w-xl">
              If your business is generating traffic but not consistent conversions, the challenge lies in strategic alignment. As a performance-oriented digital marketing agency in Chandigarh, we develop structured marketing ecosystems that guide prospects from initial engagement to final conversion. Recognized as a best digital marketing company in Chandigarh, our methodology integrates analytics, automation, market research, and precision targeting to deliver measurable ROI. From specialized SEO services in Chandigarh to high-performing paid advertising campaigns, every initiative is aligned with defined business objectives and revenue impact.
            </p>

            <p className="text-gray-700 max-w-xl">
              We function as strategic growth consultants rather than transactional service providers. As a trusted partner for online marketing services Chandigarh, we deliver integrated solutions tailored to each brand&apos;s market position. Whether you require a data-driven social media marketing agency Chandigarh, a results-focused PPC company in Chandigarh, or a certified Google Ads agency Chandigarh, our execution is supported by competitive analysis, audience intelligence, and continuous optimization. Organizations seeking a reliable website development company in Chandigarh rely on us for scalable, high-converting platforms built on modern technologies including React, WordPress, Wix, and Shopify. Our objective is long-term brand authority and predictable lead generation.
            </p>
          </div>

          {/* Optional Image */}
          <Image
            src="/chandigarh.jpg"
            width={600}
            height={400}
            alt="Chandigarh city"
            className="rounded-2xl shadow-lg"
          />

        </div>

      </section>

      {/* CORE SERVICES */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        
        <h2 className="font-jost text-3xl md:text-4xl font-bold mb-4 text-slate-900">
          Our Digital Marketing Services in Chandigarh
        </h2>
        
        <p className="text-xl text-gray-800 font-semibold mb-8">
          Strategy-Led. Performance-Driven. Results-Oriented.
        </p>

        <p className="text-gray-700 mb-8 max-w-4xl">
          Our comprehensive solutions position us as a trusted ROI driven marketing agency Chandigarh:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              Search Engine Optimization (SEO)
            </h3>
            <p className="text-gray-700">
              Advanced SEO services in Chandigarh designed to enhance visibility and organic acquisition.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              Local SEO Services Chandigarh
            </h3>
            <p className="text-gray-700">
              Strengthening local search presence and optimizing Google Business Profile performance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              Google Ads & PPC Campaign Management
            </h3>
            <p className="text-gray-700">
              ROI-focused campaigns managed by an experienced PPC company in Chandigarh.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              Social Media Marketing (SMM)
            </h3>
            <p className="text-gray-700">
              Structured brand growth strategies from a leading social media marketing agency Chandigarh.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              Website Development
            </h3>
            <p className="text-gray-700">
              Conversion-optimized websites delivered by a professional website development company in Chandigarh.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              Performance Marketing
            </h3>
            <p className="text-gray-700">
              Data-backed growth strategies executed by a results-driven performance marketing agency Chandigarh.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              Content & Creative Strategy
            </h3>
            <p className="text-gray-700">
              Strategic communication designed to increase engagement and conversion rates.
            </p>
          </div>

        </div>

      </section>

      {/* WHY WORK WITH US */}
      <section className="max-w-5xl mx-auto px-6 mb-20">

        <h2 className="font-jost text-3xl font-bold mb-6 text-slate-900">
          Why Work With Us?
        </h2>

        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 text-xl">✓</span>
            <span>Recognized as a top SEO expert in Chandigarh for small businesses</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 text-xl">✓</span>
            <span>Transparent performance reporting and analytics dashboards</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 text-xl">✓</span>
            <span>Dedicated strategic account management</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 text-xl">✓</span>
            <span>Customized marketing frameworks aligned with industry dynamics</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 text-xl">✓</span>
            <span>Proven track record across Chandigarh and North India markets</span>
          </li>
        </ul>

      </section>

      {/* FAQ SECTION */}
      <section className="max-w-5xl mx-auto px-6 mb-20">

        <h2 className="font-jost text-3xl font-bold mb-10 text-slate-900">
          Frequently Asked Questions
        </h2>

        <div className="space-y-8">

          <div>
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              1. What services does a digital marketing agency in Chandigarh provide?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              A digital marketing agency in Chandigarh supports businesses in enhancing online visibility, generating qualified leads, and increasing revenue through structured digital strategies. As a best digital marketing company in Chandigarh, we offer integrated services including SEO services in Chandigarh, paid advertising management, social media marketing, website development, and performance analytics.
            </p>
          </div>

          <div>
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              2. What is the typical cost of online marketing services in Chandigarh?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The investment required for online marketing services Chandigarh depends on market competition, campaign objectives, and service scope. A dependable ROI driven marketing agency Chandigarh focuses on maximizing measurable returns while ensuring budget efficiency and transparency.
            </p>
          </div>

          <div>
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              3. How long do SEO services in Chandigarh take to deliver results?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Professional SEO services in Chandigarh generally require 3–6 months to demonstrate consistent ranking improvements and traffic growth. Long-term SEO strategies establish authority and sustainable organic acquisition channels.
            </p>
          </div>

          <div>
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              4. How can I select the best digital marketing company in Chandigarh?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Evaluate agencies based on case studies, reporting transparency, measurable outcomes, and strategic approach. Whether you need a social media marketing agency Chandigarh, a PPC company in Chandigarh, or a website development company in Chandigarh, alignment with business goals and ROI accountability is essential.
            </p>
          </div>

          <div>
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              5. Is digital marketing effective for small businesses in Chandigarh?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Yes. Through structured local SEO services Chandigarh, targeted paid campaigns, and performance marketing strategies, small and mid-sized businesses can compete effectively in regional markets. A reliable performance marketing agency Chandigarh helps transform digital initiatives into scalable growth channels.
            </p>
          </div>

        </div>

      </section>

      {/* CLOSING CTA */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="bg-gradient-to-r from-blue-600 to-[#020b14] rounded-2xl p-8 md:p-12 text-center text-white">
          <p className="text-lg md:text-xl leading-relaxed mb-4">
            Partner with a digital marketing agency in Chandigarh committed to strategic execution and measurable business growth.
          </p>
            <button>
            <Link href={'/contact'} className=" px-4 py-2 bg-white text-blue-600 font-semibold">
                Lets start!
            </Link>
          </button>
        </div>
      </section>

    </main>
  )
}

export default ChandigarhPage