// pages/index.jsx
import Image from 'next/image'
import { Scroll, ArrowRight } from 'lucide-react'

const servicesRow1 = [
    {
    title: "Social Media Management",
    num:1,
    heading:"Amplify Your Brand’s Voice Across Social Channels",
    description:
      "We craft and manage compelling social media campaigns that foster community, visibility, and increase engagement. Our data-backed strategies ensure your brand relevant and resonant in a dynamic digital landscape.",
  },
  {
    title: "SEO Optimization",
    num:2,
    heading:"Rise to the Top with SEO",
    description:
      "That Works Achieve greater visibility and authority online with our sophisticated SEO techniques. We enhance your digital footprint through strategic keyword targeting, optimized content architecture, and sustainable ranking improvements.",
  },
    {
    title: "Web Development",
    num:3,
    heading:"Bringing Your Digital Presence to Life",
    description:
      " Our websites blend aesthetic finesse with functional excellence. Each site is custom-developed to reflect your brand’s ethos, engage users effortlessly, and convert visitors into loyal customers.",
  },
]
const servicesRow2 = [

  {
    title: "Logo Designing",
    num:4,
    heading:"Crafting Logos That Speak for Your Brand",
    description:
      " We design distinctive, timeless logos that serve as the cornerstone of your brand identity. Our creative process ensures each design communicates your brand’s values with clarity and character.",
  },
    {
    title: "App Development",
    num:5,
    heading:'Innovative Apps Tailored to Your Needs',
    description:
      "We build intuitive, scalable mobile applications that deliver an exceptional user experience- our apps are engineered for performance, security, and growth.",
  },
];

const servicesRow3 = [

  {
    title: "Graphic Designing",
    num:6,
    heading:'Visual Designs That Tell Your Story',
    description:
      "From captivating visuals to cohesive branding elements, our graphic design services bring your narrative to life. Every piece is carefully crafted to engage your audience and strengthen brand recall",
  },
      {
    title: "Content Writing",
    num:7,
    heading:'Compelling Content That Captures & Converts',
    description:
      "Our content specialists create articulate, persuasive copy tailored to your audience and objectives. From web content to digital campaigns, we deliver language that inspires action.",
  },
  {
    title: "Google & Meta Ads",
    num:9,
    heading:'Targeted Advertising with Measurable Results',
    description:
      "Maximize your ROI with precision-targeted ad campaigns on Google and Meta (Facebook & Instagram). We strategize, design, and optimize ads to capture attention, drive conversions, and enhance your online impact with tangible outcomes.",
  },
]

function ServiceCard({ service, index }) {
  const number = (service.num).toString().padStart(2, "0")

  // const imageBlock = (
  //   <div className="p-4">
  //     <div className="relative h-48 w-full rounded-md overflow-hidden">
  //       <Image
  //         src="/heading.jpg"
  //         alt={service.title}
  //         layout="fill"
  //         objectFit="cover"
  //         className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
  //       />
  //       {/* dark overlay on image */}
  //       <div className="absolute inset-0 bg-gradient-to-t from-[#111]/70 to-transparent" />
  //     </div>
  //   </div>
  // )

  return (
    <div
      className={` group flex flex-col  rounded-2xl  overflow-hidden bg-gradient-to-br ${index % 2 === 1 ? " from-blue-600/30 from-40% to-pink-500/30" : " from-blue-600/30 from-40% to-pink-500/30"}  shadow-lg  hover:shadow-2xl  transform hover:-translate-y-2  transition-all duration-300  `}
    >
      {/* {index % 2 === 1 && imageBlock} */}

      {/* header */}
      <div className="flex items-center p-6">
        {/* <Scroll className="w-6 h-6 text-[#111] flex-shrink-0" /> */}
        <h3 className="text-3xl fon-jost font-semibold text-white">
          {service.title}
        </h3>
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
        <h4 className="text-lg fon-jost font-medium text-white">
          {service.heading}
        </h4>
        <p className="mt-4 flex-1 text-gray-300 font-sfth">
          {service.description}
        </p>
        <button className={`my-4 mt-6 inline-flex justify-center items-center ${index % 2 === 1 ? " text-black" : " text-black"}  bg-white rounded-full w-full py-2 px-4 font-medium text-center font-jost `}>
          Read More
        </button>
      </div>

      {/* {index % 2 === 0 && imageBlock} */}
    </div>
  )
}

export default function ServiceList() {
  return (
    <section className=" py-16 min-h-screen">
      <div className=" max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {servicesRow1.map((svc, i) => (
            <ServiceCard key={i} service={svc} index={i} />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-3">
          {servicesRow2.map((svc, i) => (
            <ServiceCard key={i} service={svc} index={i} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
          {servicesRow3.map((svc, i) => (
            <ServiceCard key={i} service={svc} index={i+1} />
          ))}
        </div>
      </div>
    </section>
  )
}
