// app/careers/page.js

'use client';

import React, { useState } from 'react';
import Banner from '../components/common/Banner';
import { MapPin, Clock } from 'lucide-react';
import Marquee from 'react-fast-marquee'
import toast, { Toaster } from 'react-hot-toast';

const opportunities = [
  {
    category: 'opening',
    designation: 'Digital Marketer',
    location: 'Remote',
    duration: 'Full-time',
    desc: 'Develop cutting-edge applications and collaborate with a dynamic team to solve complex problems.',
  },
  {
    category: 'opening',
    designation: 'Content Creators',
    location: 'Remote',
    duration: 'Part-time',
    desc: 'Lead product development cycles and work closely with engineering and design teams.',
  },
  {
    category: 'internship',
    designation: 'Marketing Intern',
    location: 'Remote',
    duration: '3 months',
    desc: 'Assist in creating marketing campaigns and analyzing market trends.',
  },
  {
    category: 'internship',
    designation: 'UI/UX Designers Intern',
    location: 'Remote',
    duration: '6 months',
    desc: 'Gain hands-on experience in software development and contribute to real projects.',
  },
];

export default function CareersPage() {
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

  const grouped = opportunities.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  // items for marquee/dropdown only jobs & internships
  const applItems = opportunities.filter(o => o.category === 'opening' || o.category === 'internship');

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
    <Toaster position='top-center'/>
      {/* seamless marquee keyframes */}

      <Banner title="Careers at " sub="MasterMinds Junior" />

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Hero */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 font-jost bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-blue-600">
          Where creativity meets opportunity
        </h2>
        <p className="text-white/75 text-lg mb-8">
          At MasterMinds Junior, we don’t just hire employees—we welcome collaborators, thinkers, learners, and go-getters. Whether you’re just starting out or bringing years of experience, this is a space where your ideas are heard, your talent is valued, and your growth truly matters.
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


        {/* Why Work With Us */}
        <h3 className="text-2xl font-semibold mb-6 text-white font-jost">Why Work With Us?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            {
              title: 'Learn & Grow Together',
              desc: 'We believe growth is a journey, not a milestone. From freshers to seasoned professionals, we provide a culture of continuous learning and mentorship.',
            },
            {
              title: 'Create With Purpose',
              desc: 'Every project at MasterMinds Junior starts with intention. We don’t just build brands—we build impact.',
            },
            {
              title: 'Inclusive & Open Culture',
              desc: 'Our founder, Harpreet Lamba, leads with empathy and vision. Here, you’re part of a family that supports, challenges, and celebrates one another.',
            },
            {
              title: 'Shape the Digital Future',
              desc: 'Work on cutting-edge projects across industries, expand your portfolio, and be part of campaigns that are seen and remembered.',
            },
          ].map((block, i) => (
            <div
              key={i}
              className="   p-6 rounded-2xl bg-[#111]   shadow-[0_0_10px_rgba(59,130,246,0.5)]   hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]   hover:bg-gradient-to-br hover:from-primary-blue hover:to-blue-600   transition "
            >
              <h4 className="text-xl font-bold mb-2">{block.title}</h4>
              <p className="text-white/75 text-sm">{block.desc}</p>
            </div>
          ))}
        </div>


        {/* Marquee */}
        <h3 className="text-2xl font-semibold mb-4 text-white font-jost">We’re Always Looking For</h3>
        <div className="overflow-hidden mb-12">
          <div className="">
          <Marquee direction={"right"} className=' pt-3' speed={80}>

            {[...applItems, ...applItems, ...applItems , ...applItems].map((item, i) => (
              <span
                key={i}
                className="   inline-block mx-2 px-4 py-2 bg-[#111] rounded-full text-sm   shadow-[0_0_6px_rgba(59,130,246,0.5)] "
              >
                {item.designation}
              </span>
            ))}
          </Marquee>
          </div>
        </div>

        {/* Perks & Benefits */}
        <h3 className="text-2xl font-semibold mb-4 text-white font-jost">Perks & Benefits</h3>
        <div className="flex flex-wrap gap-4 mb-12">
          {[
            'Flexible work timings',
            'Mentorship & training programs',
            'Opportunity to work with global clients',
            'Performance recognition',
            'Friendly and dynamic work environment',
          ].map((perk, i) => (
            <span
              key={i}
              className="   inline-block px-4 py-2 bg-[#212121] rounded-lg text-sm   shadow-[0_0_6px_rgba(255,165,0,0.5)] "
            >
              {perk}
            </span>
          ))}
        </div>

        {/* Application Form */}
        <section className="mb-16 max-w-6xl p-0.5 rounded-3xl bg-gradient-to-b from-blue-600 via-gray-700 to-gray-800 ">
                  <div className=' w-full h-full relative bg-darker p-6 rounded-3xl'>
                      <div className=' absolute h-0.5 left-1/2 -translate-x-1/2 bottom-0 bg-gradient-to-r from-transparent via-blue-600 to-transparent w-[80%]' />
            <div className='absolute w-[50%] 2xl:h-20 h-14 rounded-t-[100%] opacity-30 bg-blue-600 blur-2xl z-10 bottom-0 left-1/2 -translate-x-1/2' />
          <h2 className="text-3xl font-semibold mb-6 text-white font-jost">Apply Now</h2>
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <label htmlFor="position" className="block mb-2 text-white/75">
                Position
              </label>
              <select
                id="position"
                value={position}
                onChange={handlePositionChange}
                required
                className="w-full bg-[#111]/5 border border-blue-600 rounded-full px-4 py-2 text-white"
              >
                <option className=' bg-[#111]/5 text-black selection:bg-blue-600' value="">Select a position</option>
                {applItems.map((o, i) => (
                  <option className=' bg-[#111]/5 text-black selection:bg-blue-600' key={i} value={o.designation}>
                    {o.designation}
                  </option>
                ))}
              </select>
            </div>

            <div>
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
            </div>

            <div>
              <label htmlFor="note" className="block mb-2 text-white/75">
                Offer Letter/Note
              </label>
              <textarea
                id="note"
                value={note}
                onChange={handleNoteChange}
                placeholder="Write a note or cover letter..."
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
      </main>
    </div>
  );
}
