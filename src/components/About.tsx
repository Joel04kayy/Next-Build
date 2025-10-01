'use client'

import AnimatedButton from './AnimatedButton'

export default function About() {
  const stats = [
    { number: '500+', label: 'Computers Built' },
    { number: '5+', label: 'Years Experience' },
    { number: '100%', label: 'Satisfaction Rate' },
    { number: '24/7', label: 'Support Available' }
  ]

  const values = [
    {
      icon: '🎯',
      title: 'Precision',
      description: 'Every component is carefully selected and assembled with meticulous attention to detail.'
    },
    {
      icon: '⚡',
      title: 'Performance',
      description: 'We optimize every build for maximum performance and reliability.'
    },
    {
      icon: '🛡️',
      title: 'Quality',
      description: 'We use only premium components and provide comprehensive warranties.'
    },
    {
      icon: '🤝',
      title: 'Support',
      description: 'Ongoing support and maintenance to keep your system running perfectly.'
    }
  ]

  return (
        <section id="about" className="section-padding relative overflow-hidden bg-gray-200 dark:bg-[#0a0a0a]">
          {/* Liquid glass background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/40 to-white/30 backdrop-blur-lg"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-accent-500/25 via-transparent to-accent-500/25"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-white/20 via-transparent to-white/20"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-accent-500/10 via-transparent to-accent-500/10"></div>
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/30 rounded-full -translate-x-16 -translate-y-16 blur-xl"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-accent-500/30 rounded-full translate-x-12 translate-y-12 blur-xl"></div>
            <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/20 rounded-full blur-lg"></div>
          </div>
          {/* Content */}
          <div className="relative z-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">
              About <span className="gradient-text">Next Build</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Founded in 2019, Next Build has been at the forefront of custom computer building, 
              delivering high-performance systems tailored to our clients' specific needs. Our 
              passion for technology and commitment to excellence has made us the go-to choice 
              for gamers, professionals, and tech enthusiasts.
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
              We believe that every computer should be built with purpose, precision, and passion. 
              From high-end gaming rigs to professional workstations, we ensure each build meets 
              the highest standards of quality and performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <AnimatedButton variant="primary" className="text-lg">
                Our Story
              </AnimatedButton>
              <AnimatedButton variant="secondary" className="text-lg">
                Meet the Team
              </AnimatedButton>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-12">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="w-24 h-24 bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <span className="text-white text-3xl font-bold">N</span>
                </div>
                <h3 className="text-3xl font-bold text-center text-gray-900 mb-6">
                  Why Choose Next Build?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-6 h-6 text-green-500 mr-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg">Professional assembly and testing</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-6 h-6 text-green-500 mr-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg">Premium component selection</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-6 h-6 text-green-500 mr-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg">Comprehensive warranty coverage</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-6 h-6 text-green-500 mr-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg">Ongoing technical support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl font-bold gradient-text mb-4">
                {stat.number}
              </div>
              <div className="text-gray-600 text-xl font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div>
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Our <span className="gradient-text">Values</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-2xl font-semibold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600 text-lg leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
          </div>
    </section>
  )
}