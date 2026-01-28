'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-12 text-gold">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-dark-blue/50 rounded-lg p-8">
            <h2 className="text-2xl font-orbitron font-bold mb-6 text-gold">
              Get in Touch
            </h2>
            <div className="space-y-6 text-white/90 font-poppins">
              <div>
                <h3 className="text-xl font-orbitron font-bold mb-2 text-gold">Email</h3>
                <p>support@6clubguide.com</p>
              </div>
              <div>
                <h3 className="text-xl font-orbitron font-bold mb-2 text-gold">Website</h3>
                <p>6clubguide.com</p>
              </div>
              <div>
                <h3 className="text-xl font-orbitron font-bold mb-2 text-gold">Response Time</h3>
                <p>We typically respond within 24-48 hours</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-dark-blue/50 rounded-lg p-8">
            <h2 className="text-2xl font-orbitron font-bold mb-6 text-gold">
              Send us a Message
            </h2>
            {submitted ? (
              <div className="bg-gold/20 border border-gold rounded-lg p-6 text-center">
                <p className="text-gold font-poppins font-semibold">
                  Thank you for your message! We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white/90 font-poppins mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-blue border border-gold/30 rounded-lg text-white font-poppins focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/90 font-poppins mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-blue border border-gold/30 rounded-lg text-white font-poppins focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-white/90 font-poppins mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-blue border border-gold/30 rounded-lg text-white font-poppins focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white/90 font-poppins mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-blue border border-gold/30 rounded-lg text-white font-poppins focus:outline-none focus:border-gold resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gold text-dark-blue font-orbitron font-bold rounded-lg hover:bg-gold/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
  )
}

