import Image from "next/image"

const JaipurPage = () => {
  return (
    <main className="pt-32 pb-24">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 mb-20">

        <div className="grid xl:grid-cols-2 gap-16 items-center">

          <div>
            <h1 className="font-jost text-4xl md:text-5xl xl:text-6xl font-bold mb-6 text-slate-900">
              Digital Marketing & Web Development Services in Jaipur
            </h1>

            <p className="text-gray-700 mb-6 max-w-xl">
              Looking for a reliable digital marketing agency in Jaipur? At MasterMinds Junior, we help
              businesses grow online through strategic marketing, modern websites, and creative branding.
              From startups to established brands, we deliver results-driven digital solutions tailored to
              your goals.
            </p>

            <p className="text-gray-700 max-w-xl">
              Based in Jaipur, Rajasthan, our team understands the local market while delivering globally
              competitive digital experiences that help your business stand out.
            </p>
          </div>

          {/* Optional Image */}
          <Image
            src="/jaipur.jpeg"
            width={600}
            height={400}
            alt="Jaipur city"
            className="rounded-2xl shadow-lg"
          />

        </div>

      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 space-y-10">

        <p className="text-gray-700 leading-relaxed">
          Jaipur is rapidly emerging as a digital business hub, and having a strong online presence is no
          longer optional — it’s essential. At MasterMinds Junior, we combine creativity, technology, and
          marketing expertise to help Jaipur-based businesses attract customers, build trust, and increase
          revenue through powerful digital strategies.
        </p>

        {/* BULLETS */}
        <div>

          <h2 className="font-jost text-2xl font-semibold mb-4">
            Why Choose MasterMinds Junior in Jaipur?
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-gray-700">

            <li>Customized digital marketing strategies for Jaipur businesses</li>
            <li>Professional website design and development</li>
            <li>SEO services to improve local search visibility</li>
            <li>Social media management and content creation</li>
            <li>Transparent communication and performance reporting</li>

          </ul>

        </div>

        {/* EXTRA PARAGRAPH */}
        <p className="text-gray-700 leading-relaxed">
          Whether you’re launching a new brand or scaling an existing one, our Jaipur-based team works
          closely with you to understand your vision and deliver measurable results. From building modern
          websites to managing social media campaigns, we focus on creating meaningful digital experiences
          that drive growth and long-term success.
        </p>

      </section>

    </main>
  )
}

export default JaipurPage
