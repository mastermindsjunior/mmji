import Image from "next/image"
import Link from "next/link"

const ChennaiPage = () => {
  return (
    <main className="pt-32 pb-24">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 mb-20">

        <div className="grid xl:grid-cols-2 gap-16 items-center">

          <div>
            <h1 className="font-jost text-4xl md:text-5xl xl:text-6xl font-bold mb-6 text-slate-900">
              Digital Marketing Agency in Chennai
            </h1>

            <p className="text-xl text-gray-800 font-semibold mb-6 max-w-xl">
              Transforming Online Engagement into Measurable Results
            </p>

            <p className="text-gray-700 mb-6 max-w-xl">
              Chennai’s evolving business landscape requires more than digital presence — it demands structured strategy and performance accountability. As a growth-focused digital marketing agency in Chennai, we design comprehensive marketing systems that convert digital visibility into qualified leads and measurable revenue. Recognized as a best digital marketing company in Chennai, our approach integrates advanced analytics, automation, audience research, and precision targeting to ensure consistent ROI. From specialized SEO services in Chennai to high-impact paid advertising campaigns, every initiative is aligned with clearly defined business outcomes.
            </p>

            <p className="text-gray-700 max-w-xl">
              We operate as strategic partners committed to long-term success. As a trusted provider of online marketing services Chennai, we develop customized digital ecosystems tailored to each brand’s competitive environment. Whether you require a performance-driven social media marketing agency Chennai, an experienced PPC company in Chennai, or a certified Google Ads agency Chennai, our execution is supported by data insights, continuous optimization, and measurable reporting. Businesses seeking a professional website development company in Chennai rely on us to deliver scalable, conversion-oriented platforms built on technologies such as React, WordPress, Wix, and Shopify. Our objective remains consistent — sustainable growth and predictable lead generation.
            </p>
          </div>

          <Image
            src="/chennai.jpg"
            width={600}
            height={400}
            alt="Chennai city"
            className="rounded-2xl shadow-lg"
          />

        </div>

      </section>

      {/* CORE SERVICES */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        
        <h2 className="font-jost text-3xl md:text-4xl font-bold mb-4 text-slate-900">
          Our Digital Marketing Services in Chennai
        </h2>

        <p className="text-gray-700 mb-8 max-w-4xl">
          Our integrated services establish us as a dependable ROI driven marketing agency Chennai:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              Search Engine Optimization (SEO)
            </h3>
            <p className="text-gray-700">
              Comprehensive SEO services in Chennai designed to enhance rankings, organic visibility, and long-term authority.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              Local SEO Services Chennai
            </h3>
            <p className="text-gray-700">
              Strengthening regional search presence and optimizing Google Business Profile performance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              Google Ads & PPC Campaign Management
            </h3>
            <p className="text-gray-700">
              Performance-oriented advertising managed by an experienced PPC company in Chennai.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              Social Media Marketing (SMM)
            </h3>
            <p className="text-gray-700">
              Structured growth strategies delivered by a results-focused social media marketing agency Chennai.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              Website Development
            </h3>
            <p className="text-gray-700">
              High-performance, conversion-optimized websites developed by a reliable website development company in Chennai.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              Performance Marketing
            </h3>
            <p className="text-gray-700">
              Scalable, data-backed campaigns executed by a professional performance marketing agency Chennai.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              Content & Creative Strategy
            </h3>
            <p className="text-gray-700">
              Strategic communication designed to increase engagement and improve conversion efficiency.
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
              <span>Recognized as a top SEO expert in Chennai for small businesses</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl">✓</span>
              <span>Transparent reporting supported by actionable performance insights</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl">✓</span>
              <span>Dedicated strategic account management</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl">✓</span>
              <span>Customized marketing solutions aligned with industry trends</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl">✓</span>
              <span>Proven success across Chennai and Tamil Nadu markets</span>
            </li>
          </ul>

        </div>

        <Image
          src="/chennai-1.jpg"
          width={600}
          height={400}
          alt="Chennai city"
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
              1. What services does a digital marketing agency in Chennai provide?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              A digital marketing agency in Chennai helps businesses improve online visibility, generate qualified leads, and drive revenue through structured digital strategies. Services include SEO services in Chennai, paid advertising management, social media marketing, website development, and performance analytics.
            </p>
          </div>

          <div>
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              2. What is the investment required for online marketing services in Chennai?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Investment depends on business objectives, industry competition, and campaign scope. A reliable ROI driven marketing agency Chennai prioritizes measurable outcomes while maintaining transparency and efficiency.
            </p>
          </div>

          <div>
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              3. How long do SEO services in Chennai take to show results?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Professional SEO services in Chennai typically require 3–6 months to demonstrate consistent ranking improvements and organic growth. Sustainable strategies focus on building long-term authority and recurring traffic.
            </p>
          </div>

          <div>
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              4. How can I choose the best digital marketing company in Chennai?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Selection should be based on proven case studies, transparent reporting, and measurable results. Alignment with growth objectives is essential.
            </p>
          </div>

          <div>
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              5. Is digital marketing effective for small businesses in Chennai?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Yes. Through structured local SEO services Chennai, targeted paid advertising, and performance marketing initiatives, small businesses can compete effectively. Professional execution converts digital initiatives into scalable growth opportunities.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="bg-gradient-to-r from-blue-600 to-[#020b14] rounded-2xl p-8 md:p-12 text-center text-white">
          <p className="text-lg md:text-xl leading-relaxed mb-4">
            Ready to work with a digital marketing agency in Chennai that focuses on revenue, not noise? Let’s build a system that scales consistently and delivers measurable growth.
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

export default ChennaiPage
