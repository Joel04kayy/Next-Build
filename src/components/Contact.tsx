'use client'

import { useState } from 'react'
import AnimatedButton from './AnimatedButton'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        message: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      details: 'hello@nextbuild.com',
      description: 'Send us an email anytime'
    },
    {
      icon: '📞',
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Call us during business hours'
    },
    {
      icon: '📍',
      title: 'Location',
      details: '123 Tech Street, City, State 12345',
      description: 'Visit our workshop'
    },
    {
      icon: '🕒',
      title: 'Hours',
      details: 'Mon-Fri: 9AM-6PM',
      description: 'Weekend appointments available'
    }
  ]

  return (
        <section id="contact" className="section-padding relative overflow-hidden bg-gray-200 dark:bg-[#0a0a0a] scroll-mt-24">
          {/* Light mode - Liquid glass background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/40 to-white/30 backdrop-blur-lg dark:hidden"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-accent-500/25 via-transparent to-accent-500/25 dark:hidden"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-white/20 via-transparent to-white/20 dark:hidden"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-accent-500/10 via-transparent to-accent-500/10 dark:hidden"></div>
          {/* Light mode - Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-20 dark:hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/30 rounded-full -translate-x-16 -translate-y-16 blur-xl"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-accent-500/30 rounded-full translate-x-12 translate-y-12 blur-xl"></div>
            <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/20 rounded-full blur-lg"></div>
          </div>

          {/* Dark mode - Liquid glass background - exact same design as light mode */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/60 via-gray-700/70 to-gray-800/60 backdrop-blur-lg hidden dark:block"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-accent-500/40 via-transparent to-accent-500/40 hidden dark:block"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-gray-600/50 via-transparent to-gray-600/50 hidden dark:block"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-accent-500/20 via-transparent to-accent-500/20 hidden dark:block"></div>
          {/* Dark mode - Subtle pattern overlay - exact same design as light mode */}
          <div className="absolute inset-0 opacity-30 hidden dark:block">
            <div className="absolute top-0 left-0 w-32 h-32 bg-gray-600/50 rounded-full -translate-x-16 -translate-y-16 blur-xl"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-accent-500/50 rounded-full translate-x-12 translate-y-12 blur-xl"></div>
            <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gray-500/40 rounded-full blur-lg"></div>
          </div>
          {/* Content */}
          <div className="relative z-10">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to start your custom build? Contact us for a free consultation and quote
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <div className="bg-gray-100 rounded-3xl shadow-2xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Send us a message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-2xl font-semibold text-gray-900 mb-4">Message Sent!</h4>
                <p className="text-gray-600 text-lg">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-3">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
                    >
                      <option value="">Select a service</option>
                      <option value="gaming">Gaming PC</option>
                      <option value="workstation">Workstation</option>
                      <option value="custom">Custom Build</option>
                      <option value="repair">Repair & Upgrade</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-3">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-1000">Under $1,000</option>
                    <option value="1000-2000">$1,000 - $2,000</option>
                    <option value="2000-3000">$2,000 - $3,000</option>
                    <option value="3000-5000">$3,000 - $5,000</option>
                    <option value="over-5000">Over $5,000</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <AnimatedButton
                  type="submit"
                  disabled={isSubmitting}
                  variant="primary"
                  className="w-full text-lg py-4"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </AnimatedButton>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h3>
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="text-4xl">{info.icon}</div>
                    <div>
                      <h4 className="text-2xl font-semibold text-gray-900 mb-2">{info.title}</h4>
                      <p className="text-primary-600 font-medium text-xl mb-2">{info.details}</p>
                      <p className="text-gray-600 text-lg">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-3xl h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-gray-600 text-xl">Interactive map coming soon</p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-6">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-gray-600 text-white rounded-2xl flex items-center justify-center hover:bg-gray-700 transition-colors text-xl">
                  📘
                </a>
                <a href="#" className="w-12 h-12 bg-gray-600 text-white rounded-2xl flex items-center justify-center hover:bg-gray-700 transition-colors text-xl">
                  🐦
                </a>
                <a href="#" className="w-12 h-12 bg-gray-600 text-white rounded-2xl flex items-center justify-center hover:bg-gray-700 transition-colors text-xl">
                  📷
                </a>
                <a href="#" className="w-12 h-12 bg-gray-600 text-white rounded-2xl flex items-center justify-center hover:bg-gray-700 transition-colors text-xl">
                  📺
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
          </div>
    </section>
  )
}