'use client'

import { useState, useRef, useEffect } from 'react'
import AnimatedButton from './AnimatedButton'
import { useTheme } from '../contexts/ThemeContext'

export default function Services() {
  const { theme } = useTheme()
  const [activeService, setActiveService] = useState(0)
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
    height: 0
  })
  const [isInitialized, setIsInitialized] = useState(false)
  const [hasUserInteracted, setHasUserInteracted] = useState(false)
  const [pulsingStep, setPulsingStep] = useState(0)
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([])

  // Update indicator position and size when activeService changes
  useEffect(() => {
    const activeButton = buttonRefs.current[activeService]
    if (activeButton) {
      const rect = activeButton.getBoundingClientRect()
      const containerRect = activeButton.parentElement?.getBoundingClientRect()
      if (containerRect) {
        setIndicatorStyle({
          left: rect.left - containerRect.left,
          width: rect.width,
          height: rect.height
        })
        
        // Mark as initialized after first measurement
        if (!isInitialized) {
          setIsInitialized(true)
        }
      }
    }
  }, [activeService, isInitialized])

  // Pulsing animation for process steps
  useEffect(() => {
    const interval = setInterval(() => {
      setPulsingStep((prev) => (prev + 1) % 4)
    }, 2000) // Change every 2 seconds

    return () => clearInterval(interval)
  }, [])

  // Handle button click with user interaction tracking
  const handleServiceClick = (index: number) => {
    if (index !== activeService) {
      setHasUserInteracted(true)
    }
    setActiveService(index)
  }

  const services = [
    {
      title: 'Custom PCs',
      description: 'High-performance custom computers built to your exact specifications and budget.',
      features: ['Gaming rigs', 'Workstations', 'Content creation PCs', 'Budget-friendly builds'],
      price: 'Starting at $800',
      icon: '🖥️',
      color: 'from-blue-600 to-blue-800',
      image: '/images/CustomPCServiceCardpic1.jpg',
      lightImage: '/images/CustomPCServiceCardpic2.jpg'
    },
    {
      title: 'Setups',
      description: 'Complete desk setups with monitors, peripherals, and cable management for the perfect workspace.',
      features: ['Monitor configuration', 'Cable management', 'Ergonomic setup', 'RGB lighting'],
      price: 'Starting at $300',
      icon: '🖼️',
      color: 'from-purple-600 to-purple-800',
      image: '/images/Set up ServiceCardpic2.jpg',
      lightImage: '/images/SetipServiceCardpic1.jpg'
    },
    {
      title: 'Sim Rigs',
      description: 'Professional racing and flight simulation setups with high-end components and realistic controls.',
      features: ['Racing wheels', 'Flight sticks', 'VR integration', 'Motion platforms'],
      price: 'Starting at $1,500',
      icon: '🏎️',
      color: 'from-red-600 to-red-800',
      image: '/images/SimRigServiceCardpic2.jpg',
      lightImage: '/images/SimRigServiceCardpic1.jpg'
    },
    {
      title: 'Repair & Upgrade',
      description: 'Professional repair services and component upgrades for existing systems.',
      features: ['Diagnostic services', 'Hardware repairs', 'Performance upgrades', 'Data recovery'],
      price: 'Starting at $50',
      icon: '🔧',
      color: 'from-green-600 to-green-800',
      image: '/images/repairServiceCardpic1.jpg',
      lightImage: '/images/RepairServiceCardpic2.jpg'
    }
  ]

      return (
        <section id="services" className="section-padding relative overflow-hidden bg-gray-200 dark:bg-[#0a0a0a]">
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
            <div className="text-center mb-24">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                From gaming rigs to professional workstations, we build setups that exceed expectations
              </p>
            </div>

        {/* Service Tabs */}
        <div className="flex justify-center gap-4 mb-20 relative">
          {/* Sliding indicator */}
          <div 
            className={`absolute rounded-full pointer-events-none z-0 ${
              isInitialized && hasUserInteracted ? 'transition-all duration-700 ease-out' : ''
            }`}
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
              height: `${indicatorStyle.height}px`,
              top: '0px'
            }}
          >
            {/* Clear liquid glass base */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-full"></div>
            
            {/* Clear liquid glass layers */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/15 via-transparent to-white/10 rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-white/20 rounded-full"></div>
            
            {/* Clear liquid glass borders */}
            <div className="absolute inset-0 border-2 border-white/30 rounded-full"></div>
            <div className="absolute inset-0 border border-white/20 rounded-full"></div>
            <div className="absolute inset-0 border border-white/10 rounded-full"></div>
            
            {/* Clear liquid glass highlight */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-white/15 to-transparent rounded-full"></div>
            
            {/* Clear liquid glass shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full animate-pulse"></div>
            
            {/* Clear liquid glass inner glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/15 via-transparent to-white/25 rounded-full"></div>
            
            {/* Clear liquid glass inner shadow */}
            <div className="absolute inset-0 shadow-inner rounded-full"></div>
            
            {/* Clear liquid glass outer glow */}
            <div className="absolute -inset-1 bg-white/10 rounded-full blur-sm"></div>
            
            {/* Clear liquid glass reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-full"></div>
          </div>

          {/* Service buttons */}
          {services.map((service, index) => (
            <button
              key={index}
              ref={(el) => (buttonRefs.current[index] = el)}
              onClick={() => handleServiceClick(index)}
              className={`relative px-8 py-4 font-medium transition-all duration-500 rounded-full overflow-hidden group z-10 ${
                activeService === index
                  ? 'transform scale-110 text-2xl font-bold'
                  : 'text-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {/* Inactive tab styling */}
              {activeService !== index && (
                <div className="absolute inset-0 bg-white/10 dark:bg-gray-800/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
              
              {/* Text content */}
              <span className="relative z-10 font-semibold text-sm">
                {service.title}
              </span>
            </button>
          ))}
        </div>

        {/* Active Service Details */}
        <div className="minimal-card relative overflow-hidden">
          {/* Liquid glass background - same as LiquidGlassButton */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-xl rounded-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-accent-500/10 via-transparent to-accent-500/5 rounded-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-white/10 via-transparent to-white/10 rounded-3xl"></div>
          
          
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
              <div>
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
                <AnimatedButton variant="primary" href="#contact">
                  Get Started
                </AnimatedButton>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-3xl overflow-hidden relative">
                {/* Full image frame for service showcase */}
                <div className="w-full relative overflow-hidden group">
                  {/* Service image or placeholder */}
                  {services[activeService].image ? (
                    <img 
                      src={theme === 'light' && services[activeService].lightImage 
                        ? services[activeService].lightImage 
                        : services[activeService].image} 
                      alt={services[activeService].title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center">
                      <div className="text-8xl opacity-50">
                        {services[activeService].icon}
                      </div>
                    </div>
                  )}
                  
                  {/* Overlay with service name */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="text-2xl font-bold text-white text-center">
                      {services[activeService].title}
                    </h4>
                  </div>
                </div>
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
                <div className={`w-16 h-16 mx-auto mb-8 relative overflow-hidden group/icon transition-all duration-500 ${
                  index === pulsingStep 
                    ? 'scale-125' 
                    : 'scale-100'
                }`}>
                  {/* Light mode - Clear liquid glass base */}
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-2xl dark:hidden"></div>
                  
                  {/* Light mode - Clear liquid glass layers */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/15 via-transparent to-white/10 rounded-2xl dark:hidden"></div>
                  <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-white/20 rounded-2xl dark:hidden"></div>
                  
                  {/* Light mode - Clear liquid glass borders */}
                  <div className="absolute inset-0 border-2 border-white/30 rounded-2xl dark:hidden"></div>
                  <div className="absolute inset-0 border border-white/20 rounded-2xl dark:hidden"></div>
                  <div className="absolute inset-0 border border-white/10 rounded-2xl dark:hidden"></div>
                  
                  {/* Light mode - Clear liquid glass highlight */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-white/15 to-transparent rounded-2xl dark:hidden"></div>
                  
                  {/* Light mode - Clear liquid glass shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-2xl animate-pulse dark:hidden"></div>
                  
                  {/* Light mode - Clear liquid glass inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/15 via-transparent to-white/25 rounded-2xl dark:hidden"></div>
                  
                  {/* Light mode - Clear liquid glass inner shadow */}
                  <div className="absolute inset-0 shadow-inner rounded-2xl dark:hidden"></div>
                  
                  {/* Light mode - Clear liquid glass outer glow */}
                  <div className="absolute -inset-1 bg-white/10 rounded-2xl blur-sm dark:hidden"></div>
                  
                  {/* Light mode - Clear liquid glass reflection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-2xl dark:hidden"></div>
                  
                  {/* Dark mode - Dark liquid glass base */}
                  <div className="absolute inset-0 bg-gray-800/20 backdrop-blur-xl rounded-2xl hidden dark:block"></div>
                  
                  {/* Dark mode - Dark liquid glass layers */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-gray-700/30 via-transparent to-gray-600/20 rounded-2xl hidden dark:block"></div>
                  <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-gray-600/20 to-gray-700/40 rounded-2xl hidden dark:block"></div>
                  
                  {/* Dark mode - Dark liquid glass borders */}
                  <div className="absolute inset-0 border-2 border-gray-600/40 rounded-2xl hidden dark:block"></div>
                  <div className="absolute inset-0 border border-gray-500/30 rounded-2xl hidden dark:block"></div>
                  <div className="absolute inset-0 border border-gray-400/20 rounded-2xl hidden dark:block"></div>
                  
                  {/* Dark mode - Dark liquid glass highlight */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-600/50 via-gray-700/30 to-transparent rounded-2xl hidden dark:block"></div>
                  
                  {/* Dark mode - Dark liquid glass shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500/30 to-transparent rounded-2xl animate-pulse hidden dark:block"></div>
                  
                  {/* Dark mode - Dark liquid glass inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-700/30 via-transparent to-gray-600/50 rounded-2xl hidden dark:block"></div>
                  
                  {/* Dark mode - Dark liquid glass inner shadow */}
                  <div className="absolute inset-0 shadow-inner rounded-2xl hidden dark:block"></div>
                  
                  {/* Dark mode - Dark liquid glass outer glow */}
                  <div className="absolute -inset-1 bg-gray-600/20 rounded-2xl blur-sm hidden dark:block"></div>
                  
                  {/* Dark mode - Dark liquid glass reflection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-500/40 via-transparent to-transparent rounded-2xl hidden dark:block"></div>
                  
                  {/* Step number */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center text-lg font-bold text-gray-600 dark:text-gray-300">
                    {item.step}
                  </div>
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