'use client'

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // Simulated form submission (replace with actual API call, e.g., to Formspree or your backend)
    try {
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    // bg-gradient-to-bl from-black via-transparent to-blue-600/20 style={{maskImage:'linear-gradient(180deg, transparent, black 20%, black 90%, transparent)'}}
    <section className=" bg-white py-20 relative">
    {/*  aspect-video w-auto h-[calc(100%-7rem)] */}
    <video src="/vid/3.mp4" muted autoPlay loop playsInline className=' absolute bottom-[0rem] left-1/2 -translate-x-1/2  w-full h-full object-cover object-center'></video>
    {/*  */}
      <div className="relative z-10 2xl:max-w-6xl max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <h3 className="font-jost text-black text-4xl md:text-5xl font-bold mb-5 pb-2 ">
          Let’s Build Something Extraordinary
        </h3>
        <p className="font-jost text-black/80 mb-8">
          At MasterMinds Junior, we’re not just creating digital assets—we’re building business success stories. Explore our{' '}
          <a href="/services" className="text-primary-blue hover:underline">
            Services Page
          </a>{' '}
          to see how we can elevate your brand today.
        </p>
        <div className="max-w-lg mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white backdrop-filter backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl transition-all duration-300 hover:shadow-white/10"
          >
            {/* Glassmorphism container with subtle hover effect for "liquid" feel */}

            {/* Name Input */}
            <div className="mb-6 relative">
              <label htmlFor="name" className="block text-black/80 text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-full text-black placeholder-black/50 focus:outline-none focus:border-primary-blue/50 backdrop-filter backdrop-blur-sm transition-all duration-200 focus:scale-[1.02]"
                placeholder="Your Name"
              />
            </div>

            {/* Email Input */}
            <div className="mb-6 relative">
              <label htmlFor="email" className="block text-black/80 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-full text-black placeholder-black/50 focus:outline-none focus:border-primary-blue/50 backdrop-filter backdrop-blur-sm transition-all duration-200 focus:scale-[1.02]"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Message Input */}
            <div className="mb-6 relative">
              <label htmlFor="message" className="block text-black/80 text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-xl text-black placeholder-black/50 focus:outline-none focus:border-primary-blue/50 backdrop-filter backdrop-blur-sm transition-all duration-200 focus:scale-[1.02]"
                placeholder="Your message here..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-primary-blue/20 border border-white/20 text-black font-medium rounded-full hover:bg-white hover:text-dark transition duration-300 backdrop-filter backdrop-blur-sm hover:scale-105 active:scale-95"
            >
              Send Message
            </button>

            {/* Status Message */}
            {status && (
              <p className="mt-4 text-center text-sm text-black/80">{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;