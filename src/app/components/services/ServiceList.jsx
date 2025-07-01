// pages/index.jsx
import Image from 'next/image'
import { Scroll, ArrowRight } from 'lucide-react'

const services = [
  {
    title: "Content Marketing",
    description:
      "It aims to build brand awareness, trust, and authority by offering content that educates.",
  },
  {
    title: "SEO Optimization",
    description:
      "Improve your visibility on search engines and attract more organic traffic.",
  },
  {
    title: "Social Media Management",
    description:
      "Engage with your audience and grow your social media presence.",
  },
]

function ServiceCard({ service, index }) {
  const number = String(index + 1).padStart(2, "0")

  const imageBlock = (
    <div className="p-4">
      <div className="relative h-48 w-full rounded-md overflow-hidden">
        <Image
          src="/heading.jpg"
          alt={service.title}
          layout="fill"
          objectFit="cover"
          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
        />
        {/* dark overlay on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111]/70 to-transparent" />
      </div>
    </div>
  )

  return (
    <div
      className="
        group flex flex-col 
        rounded-lg 
        overflow-hidden

        /* darker gradient */
        bg-gradient-to-br from-[#0e96cc] to-[#065a80]

        /* shadow + hover lift */
        shadow-lg 
        hover:shadow-2xl 
        transform hover:-translate-y-2 
        transition-all duration-300
      "
    >
      {index % 2 === 1 && imageBlock}

      {/* header */}
      <div className="flex items-center p-6">
        <Scroll className="w-6 h-6 text-[#111] flex-shrink-0" />
        {/* masked big number */}
        <span
          className="
            ml-auto text-6xl font-bold 
            bg-clip-text text-transparent 
            bg-gradient-to-br from-white to-white/30
          "
        >
          {number}
        </span>
      </div>

      {/* body */}
      <div className="px-6 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-white">
          {service.title}
        </h3>
        <p className="mt-2 flex-1 text-white/70">
          {service.description}
        </p>
        <button className="my-4 inline-flex items-center text-[#fff] font-medium hover:underline">
          Read More
          <ArrowRight className="w-4 h-4 ml-1 text-[#fff]" />
        </button>
      </div>

      {index % 2 === 0 && imageBlock}
    </div>
  )
}

export default function ServiceList() {
  return (
    <section className="bg-[#111] py-16 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, i) => (
            <ServiceCard key={i} service={svc} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
