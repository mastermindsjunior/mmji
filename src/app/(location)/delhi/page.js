import Image from "next/image"
import Link from "next/link"

const DelhiPage = () => {
  return (
    <main className="pt-32 pb-24">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 mb-20">

        <div className="grid xl:grid-cols-2 gap-16 items-center">

          <div>
            <h1 className="font-jost text-4xl md:text-5xl xl:text-6xl font-bold mb-6 text-slate-900">
              Digital Marketing Agency in Delhi Delivering Strategic Growth
            </h1>

            <p className="text-xl text-gray-800 font-semibold mb-6 max-w-xl">
              Turning Digital Visibility into Revenue-Driven Outcomes
            </p>

            <p className="text-gray-700 mb-6 max-w-xl">
              In a market as competitive as Delhi, digital presence alone does not guarantee growth. Success requires structured strategy, data-backed decisions, and performance-focused execution. As a results-oriented digital marketing agency in Delhi, we design comprehensive marketing systems that guide potential customers from discovery to conversion. Recognized as a best digital marketing company in Delhi, our approach integrates analytics, automation, competitive research, and precise audience targeting to generate measurable ROI. From advanced SEO services in Delhi to high-impact paid advertising campaigns, every initiative is aligned with defined business goals and tangible revenue outcomes.
            </p>

            <p className="text-gray-700 max-w-xl">
              We operate as strategic growth partners, not transactional vendors. As a trusted provider of online marketing services Delhi, we build customized digital frameworks based on each brand’s industry positioning and growth objectives. Whether you require a performance-focused social media marketing agency Delhi, an experienced PPC company in Delhi, or a certified Google Ads agency Delhi, our strategies are supported by continuous optimization and data-driven insights. Organizations seeking a reliable website development company in Delhi rely on us for scalable, conversion-oriented platforms built on modern technologies including React, WordPress, Wix, and Shopify. Our emphasis remains on long-term brand authority and predictable lead generation.
            </p>
          </div>

          <Image
            src="/delhi.jpeg"
            width={600}
            height={400}
            alt="Delhi city"
            className="rounded-2xl shadow-lg"
          />

        </div>

      </section>

      {/* CORE SERVICES */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        
        <h2 className="font-jost text-3xl md:text-4xl font-bold mb-4 text-slate-900">
          Our Digital Marketing Services in Delhi
        </h2>
        
        <p className="text-xl text-gray-800 font-semibold mb-8">
          Insight-Led. Performance-Driven. Outcome-Focused.
        </p>

        <p className="text-gray-700 mb-8 max-w-4xl">
          Our integrated solutions establish us as a dependable ROI driven marketing agency Delhi:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              Search Engine Optimization (SEO)
            </h3>
            <p className="text-gray-700">
              Strategic SEO services in Delhi focused on improving search visibility, authority, and organic acquisition.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              Local SEO Services Delhi
            </h3>
            <p className="text-gray-700">
              Enhancing local search rankings and optimizing Google Business Profile performance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              Google Ads & PPC Campaign Management
            </h3>
            <p className="text-gray-700">
              Conversion-focused campaigns managed by a professional PPC company in Delhi.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              Social Media Marketing (SMM)
            </h3>
            <p className="text-gray-700">
              Structured growth strategies delivered by a results-oriented social media marketing agency Delhi.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              Website Development
            </h3>
            <p className="text-gray-700">
              High-performance, conversion-optimized websites developed by a trusted website development company in Delhi.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              Performance Marketing
            </h3>
            <p className="text-gray-700">
              Scalable growth campaigns executed by a data-driven performance marketing agency Delhi.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              Content & Creative Strategy
            </h3>
            <p className="text-gray-700">
              Strategic communication frameworks designed to improve engagement and increase conversions.
            </p>
          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="flex justify-between items-center gap-4 max-w-7xl mx-auto px-6 mb-20">
        <div>

          <h2 className="font-jost text-3xl font-bold mb-6 text-slate-900">
            Why Choose Us?
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl">✓</span>
              <span>Recognized as a top SEO expert in Delhi for small businesses</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl">✓</span>
              <span>Transparent performance reporting with actionable insights</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl">✓</span>
              <span>Dedicated strategic account management</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl">✓</span>
              <span>Customized marketing strategies aligned with industry trends</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl">✓</span>
              <span>Demonstrated success across Delhi and NCR markets</span>
            </li>
          </ul>

        </div>

        <Image
          src="/delhi-1.jpg"
          width={600}
          height={400}
          alt="Delhi city"
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
              1. What does a digital marketing agency in Delhi typically offer?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              A digital marketing agency in Delhi supports businesses in enhancing online visibility, acquiring qualified leads, and driving revenue through structured digital strategies. Services include SEO services in Delhi, paid advertising, social media marketing, website development, and performance tracking.
            </p>
          </div>

          <div>
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              2. What is the cost of online marketing services in Delhi?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Investment depends on business objectives, market competition, and campaign scale. A reliable ROI driven marketing agency Delhi focuses on delivering measurable returns while maintaining transparency and efficiency.
            </p>
          </div>

          <div>
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              3. How long do SEO services in Delhi take to show results?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Professional SEO services in Delhi generally require 3–6 months to demonstrate consistent ranking improvements and traffic growth. Sustainable SEO strategies build long-term authority and organic acquisition channels.
            </p>
          </div>

          <div>
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              4. How can I select the best digital marketing company in Delhi?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Selection should be based on case studies, transparent reporting, and measurable performance outcomes. Alignment with your growth objectives is critical.
            </p>
          </div>

          <div>
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              5. Is digital marketing effective for small businesses in Delhi?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Yes. Through structured local SEO services Delhi, targeted advertising, and performance marketing strategies, small and mid-sized businesses can compete effectively in Delhi’s dynamic market.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="bg-gradient-to-r from-blue-600 to-[#020b14] rounded-2xl p-8 md:p-12 text-center text-white">
          <p className="text-lg md:text-xl leading-relaxed mb-4">
            Ready to work with a digital marketing agency in Delhi that focuses on revenue, not noise? Let’s build a system that scales consistently and delivers measurable growth.
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

export default DelhiPage
