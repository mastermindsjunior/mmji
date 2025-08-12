'use client';


import { Clock, MapPin } from 'lucide-react'
import React, { useState } from 'react'
import Banner from '../components/common/Banner';
import toast, { Toaster } from 'react-hot-toast';

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




    const applItems = courses.filter(o => o.category === 'opening' || o.category === 'course');

const CoursePage = () => {


  

    const [position, setPosition] = useState('');
    const [resume, setResume] = useState(null);
    const [note, setNote] = useState('');
  
    const handlePositionChange = e => {
      setPosition(e.target.value);
    };
  
    const handleResumeChange = e => {
      if (e.target.files && e.target.files.length > 0) {
        setResume(e.target.files[0]);
      }
    };
  
    const handleNoteChange = e => {
      setNote(e.target.value);
    };
  
    const handleSubmit = async e => {
      e.preventDefault();
      toast('Sending application...');
      const formData = new FormData();
      formData.append('position', position);
      formData.append('note', note);
      if (resume) formData.append('resume', resume);
  
      try {
        const res = await fetch('/api/application', {
          method: 'POST',
          body: formData,
        });
        const data = await res.json();
        console.log(data);
        toast('Application sent!');
        // reset form
        setPosition('');
        setNote('');
        setResume(null);
        const input = document.getElementById('resume');
        if (input) input.value = '';
      } catch (err) {
        console.error(err);
        toast.error('Failed to send application.');
      }
    };
  return (
    <>
          <Banner title="Courses at" sub="MMJ" />
    
        <Toaster position='top-center'/>
    <div className=' max-w-7xl mx-4 xl:mx-auto mt-6'>

            {/* Learn With Us */}
        <h3 className="xl:text-5xl text-2xl font-semibold mb-4 text-black font-jost">
          Learn With Us – Start Your Digital Career
        </h3>
        <p className="text-black/75 text-lg mb-12">
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
                  className="  p-[1px] rounded-2xl bg-gradient-to-br from-primary-blue to-blue-600  shadow-[0_0_10px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(255,165,0,0.7)]  transition"
                >
                  <div className="rounded-2xl p-6 backdrop-blur-sm h-full flex flex-col">
                    <h3 className="text-2xl font-bold mb-3 text-white">
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
      

              <section className="mb-16 mx-auto max-w-6xl p-0.5 rounded-3xl bg-gradient-to-b from-blue-600 via-gray-700 to-gray-800 ">
                  <div className=' w-full h-full relative bg-darker p-6 rounded-3xl'>
                      <div className=' absolute h-0.5 left-1/2 -translate-x-1/2 bottom-0 bg-gradient-to-r from-transparent via-blue-600 to-transparent w-[80%]' />
            <div className='absolute w-[50%] 2xl:h-20 h-14 rounded-t-[100%] opacity-30 bg-blue-600 blur-2xl z-10 bottom-0 left-1/2 -translate-x-1/2' />
          <h2 className="text-3xl font-semibold mb-6 text-white font-jost">Enroll Now</h2>
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <label htmlFor="position" className="block mb-2 text-white/75">
                Course
              </label>
              <select
                id="position"
                value={position}
                onChange={handlePositionChange}
                required
                className="w-full bg-[#111]/5 border border-blue-600 rounded-full px-4 py-2 text-white"
              >
                <option className=' bg-[#111]/5 text-black selection:bg-blue-600' value="">Select a Course</option>
                {applItems.map((o, i) => (
                  <option className=' bg-[#111]/5 text-black selection:bg-blue-600' key={i} value={o.designation}>
                    {o.designation}
                  </option>
                ))}
              </select>
            </div>

            {/* <div>
              <label htmlFor="resume" className="block mb-2 text-white/75">
                Resume
              </label>
              <input
                type="file"
                id="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleResumeChange}
                required
                className="w-full bg-[#111]/5 border border-blue-600 rounded-full px-4 py-2 text-white"
              />
            </div> */}

            <div>
              <label htmlFor="note" className="block mb-2 text-white/75">
                Note
              </label>
              <textarea
                id="note"
                value={note}
                onChange={handleNoteChange}
                placeholder="Write a note..."
                className="w-full bg-[#111]/5 border border-blue-600 rounded-2xl px-4 py-2 text-white h-32 resize-none"
              />
            </div>

           <div className='mx-auto w-fit'>
             <button
              type="submit"
              className="px-6 py-3 bg-dark text-white font-sfth border border-gray-700 font-medium rounded-full transition"
            >
              Send Application
            </button>
           </div>
          </form>
                  </div>
        </section>
    </div>
    </>
  )
}

export default CoursePage
