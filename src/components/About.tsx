'use client'

import AnimatedButton from './AnimatedButton'
import Image from 'next/image'
import { useTheme } from '../contexts/ThemeContext'

export default function About() {
  const { theme } = useTheme()
  
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
        <section id="about" className="section-padding relative overflow-hidden bg-gray-200 dark:bg-[#0a0a0a] scroll-mt-24">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-8">
              About <span className="gradient-text">Next Build</span>
            </h2>
            <p className="text-xl text-black dark:text-white mb-8 leading-relaxed">
              Founded in 2019, Next Build has been at the forefront of custom computer building, 
              delivering high-performance systems tailored to our clients' specific needs. Our 
              passion for technology and commitment to excellence has made us the go-to choice 
              for gamers, professionals, and tech enthusiasts.
            </p>
            <p className="text-xl text-black dark:text-white mb-10 leading-relaxed">
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
            <div className="bg-white dark:bg-black rounded-3xl p-12">
              <div className="bg-white dark:bg-black rounded-3xl p-8">
                <div className="w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 relative overflow-hidden">
                  {/* Light mode - Same liquid glass background as Ready for Your Custom Build */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/40 to-white/30 backdrop-blur-lg rounded-3xl dark:hidden"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent-500/25 via-transparent to-accent-500/25 rounded-3xl dark:hidden"></div>
                  <div className="absolute inset-0 bg-gradient-to-bl from-white/20 via-transparent to-white/20 rounded-3xl dark:hidden"></div>
                  <div className="absolute inset-0 bg-gradient-to-tl from-accent-500/10 via-transparent to-accent-500/10 rounded-3xl dark:hidden"></div>
                  {/* Light mode - Subtle pattern overlay */}
                  <div className="absolute inset-0 opacity-20 dark:hidden">
                    <div className="absolute top-0 left-0 w-8 h-8 bg-white/30 rounded-full -translate-x-2 -translate-y-2 blur-lg"></div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 bg-accent-500/30 rounded-full translate-x-1.5 translate-y-1.5 blur-lg"></div>
                    <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-white/20 rounded-full blur-md"></div>
                  </div>
                  
                  {/* Dark mode - Same liquid glass background as Ready for Your Custom Build */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/60 via-gray-700/70 to-gray-800/60 backdrop-blur-lg rounded-3xl hidden dark:block"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent-500/40 via-transparent to-accent-500/40 rounded-3xl hidden dark:block"></div>
                  <div className="absolute inset-0 bg-gradient-to-bl from-gray-600/50 via-transparent to-gray-600/50 rounded-3xl hidden dark:block"></div>
                  <div className="absolute inset-0 bg-gradient-to-tl from-accent-500/20 via-transparent to-accent-500/20 rounded-3xl hidden dark:block"></div>
                  {/* Dark mode - Subtle pattern overlay */}
                  <div className="absolute inset-0 opacity-30 hidden dark:block">
                    <div className="absolute top-0 left-0 w-8 h-8 bg-gray-600/50 rounded-full -translate-x-2 -translate-y-2 blur-lg"></div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 bg-accent-500/50 rounded-full translate-x-1.5 translate-y-1.5 blur-lg"></div>
                    <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-gray-500/40 rounded-full blur-md"></div>
                  </div>
                  <Image
                    src="/images/logos/Next Build Mini Logo.png"
                    alt="Next Build Logo"
                    width={60}
                    height={60}
                    className={`object-contain relative z-10 ${theme === 'dark' ? 'brightness-0 invert' : ''}`}
                  />
                </div>
                <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
                  Why Choose Next Build?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <svg className="w-6 h-6 text-green-500 mr-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg">Professional assembly and testing</span>
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <svg className="w-6 h-6 text-green-500 mr-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg">Premium component selection</span>
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <svg className="w-6 h-6 text-green-500 mr-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg">Comprehensive warranty coverage</span>
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
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
              <div className="text-black dark:text-white text-xl font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div>
          <h3 className="text-4xl font-bold text-center text-black dark:text-white mb-16">
            Our <span className="gradient-text">Values</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-2xl font-semibold text-black dark:text-white mb-4">{value.title}</h4>
                <p className="text-black dark:text-white text-lg leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
          </div>
    </section>
  )
}