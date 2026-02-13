import Image from "next/image"
import Link from "next/link"

const HyderabadPage = () => {
  return (
    <main className="pt-32 pb-24">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 mb-20">

        <div className="grid xl:grid-cols-2 gap-16 items-center">

          <div>
            <h1 className="font-jost text-4xl md:text-5xl xl:text-6xl font-bold mb-6 text-slate-900">
              Digital Marketing Agency in Hyderabad, Focused on Performance Excellence
            </h1>

            <p className="text-xl text-gray-800 font-semibold mb-6 max-w-xl">
              Turning Digital Visibility into Scalable Revenue Growth
            </p>

            <p className="text-gray-700 mb-6 max-w-xl">
              Hyderabad’s rapidly expanding business ecosystem demands more than online presence — it requires strategic clarity and measurable execution. As a results-driven digital marketing agency in Hyderabad, we design structured digital frameworks that guide prospects from initial discovery to final conversion. Recognized as a best digital marketing company in Hyderabad, our approach combines advanced analytics, automation, competitive research, and targeted campaign execution to deliver consistent ROI. From specialized SEO services in Hyderabad to conversion-focused paid advertising, every initiative is aligned with clear business goals and sustainable revenue impact.
            </p>

            <p className="text-gray-700 max-w-xl">
              We act as long-term strategic partners rather than short-term service providers. As a dependable provider of online marketing services Hyderabad, we create customized digital ecosystems tailored to your industry landscape and growth objectives. Whether you require a growth-oriented social media marketing agency Hyderabad, a data-backed PPC company in Hyderabad, or a certified Google Ads agency Hyderabad, our strategies are supported by continuous performance optimization and audience intelligence. Businesses seeking a professional website development company in Hyderabad rely on us to build scalable, high-converting platforms using technologies such as React, WordPress, Wix, and Shopify. Our focus remains on building long-term digital authority and predictable lead generation.
            </p>
          </div>

          <Image
            src="/hyderabad.jpg"
            width={600}
            height={400}
            alt="Hyderabad city"
            className="rounded-2xl shadow-lg"
          />

        </div>

      </section>

      {/* CORE SERVICES */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        
        <h2 className="font-jost text-3xl md:text-4xl font-bold mb-4 text-slate-900">
          Our Digital Marketing Services in Hyderabad
        </h2>

        <p className="text-gray-700 mb-8 max-w-4xl">
          Our comprehensive solutions position us as a trusted ROI driven marketing agency Hyderabad:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              Search Engine Optimization (SEO)
            </h3>
            <p className="text-gray-700">
              Advanced SEO services in Hyderabad designed to enhance search visibility, domain authority, and organic acquisition.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              Local SEO Services Hyderabad
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
              Performance-oriented campaigns managed by an experienced PPC company in Hyderabad.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              Social Media Marketing (SMM)
            </h3>
            <p className="text-gray-700">
              Structured growth strategies delivered by a professional social media marketing agency Hyderabad.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              Website Development
            </h3>
            <p className="text-gray-700">
              Conversion-focused websites developed by a reliable website development company in Hyderabad.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              Performance Marketing
            </h3>
            <p className="text-gray-700">
              Data-led scaling campaigns executed by a results-focused performance marketing agency Hyderabad.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              Content & Creative Strategy
            </h3>
            <p className="text-gray-700">
              Strategic communication frameworks designed to improve engagement and drive conversions.
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
              <span>Recognized as a top SEO expert in Hyderabad for small businesses</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl">✓</span>
              <span>Transparent reporting with actionable performance insights</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl">✓</span>
              <span>Dedicated strategic account management</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl">✓</span>
              <span>Industry-specific digital marketing frameworks</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl">✓</span>
              <span>Proven success across Hyderabad and Telangana markets</span>
            </li>
          </ul>

        </div>

        <Image
          src="/hyderabad-1.jpg"
          width={600}
          height={400}
          alt="Hyderabad city"
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
              1. What services does a digital marketing agency in Hyderabad offer?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              A digital marketing agency in Hyderabad helps businesses strengthen online presence, generate qualified leads, and increase revenue through structured digital strategies. Services include SEO services in Hyderabad, paid advertising management, social media marketing, website development, and performance analytics.
            </p>
          </div>

          <div>
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              2. What is the cost of online marketing services in Hyderabad?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Costs depend on market competition, business objectives, and campaign scope. A dependable ROI driven marketing agency Hyderabad focuses on measurable returns while ensuring transparency and strategic efficiency.
            </p>
          </div>

          <div>
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              3. How long do SEO services in Hyderabad take to produce results?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Professional SEO services in Hyderabad generally require 3–6 months to demonstrate consistent ranking improvements and organic growth. Long-term strategies focus on sustainable authority building and lead generation.
            </p>
          </div>

          <div>
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              4. How can I choose the best digital marketing company in Hyderabad?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Selection should be based on proven case studies, transparent reporting, measurable outcomes, and strategic clarity. Alignment with business objectives is essential.
            </p>
          </div>

          <div>
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              5. Is digital marketing effective for small businesses in Hyderabad?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Yes. Through structured local SEO services Hyderabad, targeted advertising campaigns, and performance marketing strategies, small and mid-sized businesses can compete effectively. Professional execution converts digital initiatives into scalable growth channels.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="bg-gradient-to-r from-blue-600 to-[#020b14] rounded-2xl p-8 md:p-12 text-center text-white">
          <p className="text-lg md:text-xl leading-relaxed mb-4">
            Ready to work with a digital marketing agency in Hyderabad that focuses on revenue, not noise? Let’s build a system that scales consistently and delivers measurable growth.
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

export default HyderabadPage
