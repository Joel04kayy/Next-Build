'use client'

import { useState } from 'react'
import AnimatedButton from './AnimatedButton'

export default function Services() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      title: 'Gaming PCs',
      description: 'High-performance gaming rigs optimized for the latest games and VR experiences.',
      features: ['RTX 40 Series GPUs', 'High-refresh rate monitors', 'RGB lighting', 'Liquid cooling options'],
      price: 'Starting at $1,200',
      icon: '🎮',
      color: 'from-gray-600 to-gray-800'
    },
    {
      title: 'Workstations',
      description: 'Professional workstations for content creation, 3D modeling, and intensive computing tasks.',
      features: ['Multi-core processors', 'Professional GPUs', 'High-speed storage', 'Workstation motherboards'],
      price: 'Starting at $2,000',
      icon: '💻',
      color: 'from-gray-500 to-gray-700'
    },
    {
      title: 'Custom Builds',
      description: 'Fully customized computers tailored to your specific needs and budget requirements.',
      features: ['Personal consultation', 'Component selection', 'Cable management', 'Performance optimization'],
      price: 'Custom pricing',
      icon: '⚙️',
      color: 'from-gray-700 to-gray-900'
    },
    {
      title: 'Repair & Upgrade',
      description: 'Professional repair services and component upgrades for existing systems.',
      features: ['Diagnostic services', 'Hardware repairs', 'Performance upgrades', 'Data recovery'],
      price: 'Starting at $50',
      icon: '🔧',
      color: 'from-gray-400 to-gray-600'
    }
  ]

      return (
        <section id="services" className="section-padding relative overflow-hidden bg-[#31363F] dark:bg-black">
          {/* Liquid glass background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-sm"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-accent-500/5 via-transparent to-accent-500/5"></div>
          {/* Content */}
          <div className="relative z-10">
          <div className="container-custom">
            <div className="text-center mb-24">
              <h2 className="text-large font-light mb-8">
                Our Services
              </h2>
              <p className="text-subtitle max-w-3xl mx-auto">
                From gaming rigs to professional workstations, we build computers that exceed expectations
              </p>
            </div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-20">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveService(index)}
              className={`px-8 py-4 font-medium transition-all duration-500 ${
                activeService === index
                  ? 'bg-black dark:bg-gray-700 text-white dark:text-white'
                  : 'bg-transparent text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white border border-gray-200 dark:border-gray-600 hover:border-black dark:hover:border-gray-500'
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Active Service Details */}
        <div className="minimal-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="text-6xl mb-8 text-black dark:text-white">
                  {services[activeService].icon}
                </div>
                <h3 className="text-5xl font-light text-black dark:text-white mb-8">
                  {services[activeService].title}
                </h3>
                <p className="text-subtitle mb-12">
                  {services[activeService].description}
                </p>
                <div className="space-y-6 mb-12">
                  {services[activeService].features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-black dark:bg-white rounded-full mr-6"></div>
                      <span className="text-gray-600 dark:text-gray-300 text-lg font-light">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="text-3xl font-light text-black dark:text-white mb-8">
                  {services[activeService].price}
                </div>
                <AnimatedButton variant="primary">
                  Get Started
                </AnimatedButton>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-16 text-center">
                <div className="w-32 h-32 bg-white dark:bg-gray-700 rounded-full mx-auto mb-8 flex items-center justify-center shadow-sm">
                  <span className="text-6xl">{services[activeService].icon}</span>
                </div>
                <h4 className="text-2xl font-light mb-6 text-black dark:text-white">
                  Why Choose Us?
                </h4>
                <p className="text-subtitle">
                  Professional assembly, quality components, and comprehensive support for all your computer building needs.
                </p>
              </div>
            </div>
        </div>

        {/* Process Steps */}
        <div className="mt-32">
          <h3 className="text-large font-light text-center mb-20">
            Our Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            {[
              { step: '01', title: 'Consultation', description: 'We discuss your needs and budget' },
              { step: '02', title: 'Design', description: 'Custom configuration and component selection' },
              { step: '03', title: 'Assembly', description: 'Professional building and testing' },
              { step: '04', title: 'Delivery', description: 'Setup and support for your new system' }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-black dark:bg-gray-700 text-white dark:text-white flex items-center justify-center text-lg font-medium mx-auto mb-8 group-hover:bg-gray-700 dark:group-hover:bg-gray-600 transition-colors duration-500">
                  {item.step}
                </div>
                <h4 className="text-2xl font-light text-black dark:text-white mb-4">{item.title}</h4>
                <p className="text-subtitle">{item.description}</p>
              </div>
            ))}
          </div>
            </div>
          </div>
          </div>
        </section>
  )
}