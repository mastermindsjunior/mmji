import React from 'react';

const teamMembers = [
  {
    name: 'Harpreet Lamba',
    role: 'CEO & Founder',
    image: '/harpreet.jpg',
    socials: {
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Tania Luthra',
    role: 'HR',
    image: '/heading.jpg',
    socials: {
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Sakshi Panwar',
    role: 'Supervisor',
    image: '/sakshi.jpg',
    socials: {
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Sunanda Sharma',
    role: 'Team Lead',
    image: '/sunanda.jpg',
    socials: {
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Vikas Chouhan',
    role: 'Team Lead',
    image: '/vikas.jpg',
    socials: {
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Lavanya',
    role: 'Team Lead',
    image: '/lavanya.jpg',
    socials: {
      twitter: '#',
      linkedin: '#',
    },
  },
  // {
  //   name: 'Zeeshan Ali',
  //   role: 'Very Handsome',
  //   image: '/zeeshan.png',
  //   socials: {
  //     twitter: '#',
  //     linkedin: '#',
  //   },
  // },
];

const TeamCard = ({ name, role, image, socials }) => (
  <div className="flex items-center justify-between p-4 bg-darker rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:bg-gray-700">
    {/* Circular profile image with hover scale */}
    <img
      src={image}
      alt={`Photo of ${name}`}
      className="w-24 h-24 rounded-full object-cover border-4 border-blue-600 transition-transform duration-300 hover:scale-110"
    />




    {/* Text content */}
    <div className="flex-1 ml-4">
      <h3 className="text-lg font-jost font-semibold text-white">{name}</h3>
      <p className="text-base font-alum text-gray-300 mt-1">{role}</p>
    </div>

    {/* Social links always visible, with hover rotation */}
    <div className="flex flex-col space-y-3">
      <a
        href={socials.twitter}
        aria-label={`${name} on X (formerly Twitter)`}
        className="p-2 rounded-full bg-blue-900/50 hover:bg-blue-900 transition-all duration-300 hover:rotate-12"
      >
        {/* X (Twitter) icon SVG */}
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>
      <a
        href={socials.linkedin}
        aria-label={`${name} on LinkedIn`}
        className="p-2 rounded-full bg-blue-900/50 hover:bg-blue-900 transition-all duration-300 hover:rotate-12"
      >
        {/* LinkedIn icon SVG */}
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </a>
    </div>
  </div>
);

export const MeetTheTeamSection = () => (
  <section className="relative bg-black py-20 overflow-hidden">
    {/* Background gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-primary-orange/50 to-black pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10">
      <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-500 to-primary-orange bg-clip-text text-transparent">
        Meet the Growth Architects
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-center text-gray-300 leading-relaxed">
        Our team of digital strategists, designers, developers, and marketing analysts bring experience, energy, and unmatched creativity to every project. Whether you need website development in India, app creation, or campaign strategy—our experts deliver excellence, every time.
      </p>

      <div className="mt-12 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member) => (
          <TeamCard key={member.name} {...member} />
        ))}
      </div>
    </div>
  </section>
);
