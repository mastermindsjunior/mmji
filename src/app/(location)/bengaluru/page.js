import Image from "next/image"
import Link from "next/link"

const BengaluruPage = () => {
  return (
    <main className="pt-32 pb-24">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 mb-20">

        <div className="grid xl:grid-cols-2 gap-16 items-center">

          <div>
            <h1 className="font-jost text-4xl md:text-5xl xl:text-6xl font-bold mb-6 text-slate-900">
              Digital Marketing Agency in Bengaluru Driving Scalable Business Growth
            </h1>

            <p className="text-xl text-gray-800 font-semibold mb-6 max-w-xl">
              Converting Digital Reach into Measurable Performance
            </p>

            <p className="text-gray-700 mb-6 max-w-xl">
              Bengaluru’s competitive and innovation-driven market demands more than online visibility. Sustainable success requires strategic clarity, data intelligence, and performance-oriented execution. As a growth-focused digital marketing agency in Bengaluru, we build structured marketing systems that move audiences from initial engagement to measurable conversion. Recognized as a best digital marketing company in Bengaluru, our approach integrates analytics, automation, audience research, and precision targeting to deliver consistent ROI. From specialized SEO services in Bengaluru to high-performance paid advertising, each campaign is aligned with defined business objectives and long-term revenue goals.
            </p>

            <p className="text-gray-700 max-w-xl">
              We function as strategic growth advisors rather than conventional service providers. As a reliable partner for online marketing services Bengaluru, we design customized digital ecosystems tailored to your industry and market positioning. Whether you require a results-driven social media marketing agency Bengaluru, a data-backed PPC company in Bengaluru, or a certified Google Ads agency Bengaluru, our execution is supported by ongoing optimization and measurable performance tracking. Businesses seeking a dependable website development company in Bengaluru trust us to build scalable, conversion-oriented platforms using technologies such as React, WordPress, Wix, and Shopify. Our focus remains on building sustainable brand authority and predictable lead generation.
            </p>
          </div>

          <Image
            src="/bengaluru.jpg"
            width={600}
            height={400}
            alt="Bengaluru city"
            className="rounded-2xl shadow-lg"
          />

        </div>

      </section>

      {/* CORE SERVICES */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        
        <h2 className="font-jost text-3xl md:text-4xl font-bold mb-4 text-slate-900">
          Our Digital Marketing Services in Bengaluru
        </h2>

        <p className="text-gray-700 mb-8 max-w-4xl">
          Our integrated services establish us as a trusted ROI driven marketing agency Bengaluru:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              Search Engine Optimization (SEO)
            </h3>
            <p className="text-gray-700">
              Advanced SEO services in Bengaluru designed to improve rankings, domain authority, and organic traffic acquisition.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              Local SEO Services Bengaluru
            </h3>
            <p className="text-gray-700">
              Enhancing local search visibility and optimizing Google Business Profile performance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              Google Ads & PPC Campaign Management
            </h3>
            <p className="text-gray-700">
              Conversion-focused advertising managed by an experienced PPC company in Bengaluru.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              Social Media Marketing (SMM)
            </h3>
            <p className="text-gray-700">
              Structured brand growth campaigns delivered by a professional social media marketing agency Bengaluru.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              Website Development
            </h3>
            <p className="text-gray-700">
              High-performance, user-centric websites developed by a leading website development company in Bengaluru.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              Performance Marketing
            </h3>
            <p className="text-gray-700">
              Scalable, data-driven strategies executed by a results-oriented performance marketing agency Bengaluru.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              Content & Creative Strategy
            </h3>
            <p className="text-gray-700">
              Strategic messaging frameworks designed to increase engagement and conversion efficiency.
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
              <span>Recognized as a top SEO expert in Bengaluru for small businesses</span>
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
              <span>Customized marketing solutions aligned with evolving industry trends</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl">✓</span>
              <span>Proven experience across Bengaluru and Karnataka markets</span>
            </li>
          </ul>

        </div>

        <Image
          src="/bengaluru-1.jpeg"
          width={600}
          height={400}
          alt="Bengaluru city"
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
              1. What services does a digital marketing agency in Bengaluru provide?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              A digital marketing agency in Bengaluru helps businesses enhance online presence, generate qualified leads, and increase revenue through structured digital strategies. Services include SEO services in Bengaluru, paid advertising, social media marketing, website development, and performance analytics.
            </p>
          </div>

          <div>
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              2. What is the cost of online marketing services in Bengaluru?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Investment varies based on competition, campaign objectives, and service scope. A reliable ROI driven marketing agency Bengaluru prioritizes measurable returns while maintaining transparency and efficiency.
            </p>
          </div>

          <div>
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              3. How long do SEO services in Bengaluru take to show measurable impact?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Professional SEO services in Bengaluru typically require 3–6 months to deliver consistent improvements in rankings and organic traffic. Long-term strategies focus on sustainable authority building and ongoing lead generation.
            </p>
          </div>

          <div>
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              4. How do I select the best digital marketing company in Bengaluru?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Selection should be based on proven case studies, reporting transparency, and measurable performance outcomes. Strategic alignment with business objectives is essential.
            </p>
          </div>

          <div>
            <h3 className="font-jost text-xl font-semibold mb-3 text-slate-900">
              5. Is digital marketing effective for small businesses in Bengaluru?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Yes. With structured local SEO services Bengaluru, targeted advertising campaigns, and performance marketing strategies, small and mid-sized businesses can compete effectively. Professional execution transforms digital initiatives into scalable growth opportunities.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="bg-gradient-to-r from-blue-600 to-[#020b14] rounded-2xl p-8 md:p-12 text-center text-white">
          <p className="text-lg md:text-xl leading-relaxed mb-4">
            Ready to work with a digital marketing agency in Bengaluru that focuses on revenue, not noise? Let’s build a system that scales consistently and delivers measurable growth.
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

export default BengaluruPage
