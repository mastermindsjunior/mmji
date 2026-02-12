'use client'

import Image from 'next/image'
import React, { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  })

  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStatus('Message sent!')
      setFormData({ name: '', email: '', service: '', message: '' })
    } catch {
      setStatus('Failed.')
    }
  }

  return (
    <section className="bg-cyan-600 py-28 px-6">

      <h3 className="font-jost text-black text-4xl md:text-5xl font-bold mb-5">
        Let’s Build Something Extraordinary
      </h3>

      <p className="font-jost text-black/80 mb-10 max-w-2xl">
        At MasterMinds Junior, we’re not just creating digital assets—we’re building business success stories.
      </p>

      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden grid xl:grid-cols-2">

        {/* LEFT PANEL */}
        <div className="bg-[#0f2f3a] text-white p-12 flex flex-col justify-between">

          <Image
            src="/contact.png"
            alt="digital marketing"
            width={400}
            height={500}
            className="w-[80%] mx-auto -scale-x-100"
          />

          <div className="flex gap-6 text-white/60 text-sm mt-10">
            <span>Facebook</span>
            <span>LinkedIn</span>
            <span>Twitter</span>
          </div>

        </div>

        {/* RIGHT FORM */}
        <div className="p-12 text-slate-900 flex flex-col w-full justify-center">

          <h4 className="text-xl font-semibold mb-6">
            Get in touch
          </h4>

          <form onSubmit={handleSubmit} className="space-y-5 w-full">

            <input
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0f2f3a]"
            />

            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              required
              className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0f2f3a]"
            />

            {/* SERVICE SELECT */}
            <select
              id="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#0f2f3a]"
            >
              <option value="">Select service</option>
              <option value="Web Development">Web Development</option>
              <option value="Social Media Management">Social Media Management</option>
              <option value="App development">App Development</option>
              <option value="Search Engine Optimization">Search Engine Optimization</option>
              <option value="Graphic & Logo Designing">Graphic & Logo Designing</option>
              <option value="Content Writing">Content Writing</option>
              <option value="Google & Meta Ads">Google & Meta Ads</option>
            </select>

            <textarea
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project"
              required
              className="w-full border rounded-lg px-4 py-3 text-sm resize-none focus:outline-none focus:border-[#0f2f3a]"
            />

            <button
              type="submit"
              className="w-full bg-[#0f2f3a] text-white rounded-lg py-3 hover:opacity-90 transition"
            >
              Send message
            </button>

            {status && (
              <p className="text-sm text-gray-500 text-center">
                {status}
              </p>
            )}

          </form>

        </div>

      </div>

    </section>
  )
}

export default ContactForm
