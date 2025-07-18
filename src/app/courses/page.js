import { Clock, MapPin } from 'lucide-react'
import React from 'react'
import Banner from '../components/common/Banner';

const courses = [
    {
        category: 'course',
        designation: 'Meta Ads Management',
        location: 'Online',
        duration: 'Self-paced',
        desc: 'Master Meta Ads Manager to plan, build, and optimize ad campaigns on Facebook and Instagram. Learn targeting strategies, budgeting, A/B testing, and performance analysis.',
      },
      {
        category: 'course',
        designation: 'Graphic Design Basics',
        location: 'Online',
        duration: '12 weeks',
        desc: 'Learn the fundamentals of graphic design—including color theory, typography, layout, and composition—using tools like Adobe Photoshop and Illustrator through hands-on projects.',
      },
      {
        category: 'course',
        designation: 'Website Development for Beginners',
        location: 'Online',
        duration: '12 weeks',
        desc: 'Build responsive, modern websites from scratch using HTML, CSS, and JavaScript. Explore best practices for accessibility, responsive layouts, and basic deployment.',
      },
      {
        category: 'course',
        designation: 'Digital Marketing Class',
        location: 'Online',
        duration: '12 weeks',
        desc: 'Get a comprehensive overview of digital marketing channels—SEO, SEM, email, content, and social media—plus analytics and campaign planning to drive measurable results.',
      },
      {
        category: 'course',
        designation: 'Social Media Marketing (SMM)',
        location: 'Online',
        duration: '12 weeks',
        desc: 'Discover how to craft engaging social media strategies across platforms, create compelling content, schedule posts, engage communities, and analyze performance metrics.',
      },
      {
        category: 'course',
        designation: 'SEO',
        location: 'Online',
        duration: '12 weeks',
        desc: 'Learn on-page and off-page SEO techniques, keyword research, technical site optimization, and analytics to improve search engine rankings and drive organic traffic.',
      },
]


  const grouped = courses.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

const page = () => {
  return (
    <>
          <Banner title="Courses at" sub="MMJ" />
    
    <div className=' max-w-7xl mx-auto mt-6'>

            {/* Learn With Us */}
        <h3 className="text-5xl font-semibold mb-4 text-white font-jost">
          Learn With Us – Start Your Digital Career
        </h3>
        <p className="text-white/75 text-lg mb-12">
          We understand that not everyone walks in with experience—that’s why we’ve built a learning ecosystem for aspiring professionals.
          Our in-house training programs are designed for individuals looking to enter the digital space or upgrade their skills with practical, real-world knowledge.
        </p>




                {/* Opportunities */}
        {Object.entries(grouped).map(([cat, items]) => (
          <section key={cat} className="mb-16">
            <h2 className="text-4xl font-semibold mb-6 capitalize font-jost text-white">
              {cat}s
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item, idx) => (
                <div
                  key={idx}
                  className="  p-[1px] rounded-2xl bg-gradient-to-br from-primary-blue to-blue-600  shadow-[0_0_10px_rgba(59,130,246,0.5)]  hover:from-primary-orange hover:to-primary-blue  hover:shadow-[0_0_20px_rgba(255,165,0,0.7)]  transition"
                >
                  <div className="bg-[#111] rounded-2xl p-6 backdrop-blur-sm h-full flex flex-col">
                    <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-blue-600">
                      {item.designation}
                    </h3>

                    <div className="flex items-center text-white/75 mb-2">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span>{item.location}</span>
                    </div>

                    <div className="flex items-center text-white/75 mb-4">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>{item.duration}</span>
                    </div>

                    <p className="text-white/75 leading-relaxed flex-grow">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      
    </div>
    </>
  )
}

export default page
