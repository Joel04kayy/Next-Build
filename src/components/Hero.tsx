'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import LiquidGlassButton from './LiquidGlassButton'
import { useTheme } from '@/contexts/ThemeContext'

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const { theme } = useTheme()
  
  // Different images for light and dark mode
  const lightModeImage = '/images/LightLandingPic.jpg'
  const darkModeImage = '/images/DarkLandingPic.jpeg'

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    // No need for image rotation since we have specific images for each theme
    setCurrentImage(0)
  }, [isClient, theme])

  // Don't render until client-side hydration is complete
  if (!isClient) {
    return null
  }

      return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-50 dark:bg-black">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={theme === 'light' ? lightModeImage : darkModeImage}
              alt="Professional Computer Setup"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/45"></div>
          </div>
          
          {/* Content - Positioned on top of image */}
          <div className="container-custom px-4 relative z-20 flex flex-col items-center justify-center min-h-screen">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-6xl md:text-8xl font-light leading-tight text-primary-50 mb-12">
                Professional
                <span className="block font-light">Computer Building</span>
              </h1>
              <p className="text-xl text-primary-100 font-light leading-relaxed mb-16 max-w-3xl mx-auto">
                Custom PCs, Gaming Rigs, and Workstations built to perfection.
                Expert assembly, premium components, and unbeatable performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <LiquidGlassButton variant="primary">
                  Start Your Build
                </LiquidGlassButton>
                <LiquidGlassButton variant="secondary">
                  View Gallery
                </LiquidGlassButton>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-16 max-w-4xl mx-auto">
              <div className="text-center relative overflow-hidden rounded-2xl p-8 group border-2 border-white/20">
                {/* Liquid glass background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-500/10 via-transparent to-accent-500/5"></div>
                {/* Animated shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                {/* Content */}
                <div className="relative z-10">
                  <div className="text-6xl font-light text-white mb-4 drop-shadow-lg">100+</div>
                  <div className="text-white/90 text-lg font-light drop-shadow-md">Computers Built</div>
                </div>
              </div>
              
              <div className="text-center relative overflow-hidden rounded-2xl p-8 group border-2 border-white/20">
                {/* Liquid glass background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-500/10 via-transparent to-accent-500/5"></div>
                {/* Animated shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                {/* Content */}
                <div className="relative z-10">
                  <div className="text-6xl font-light text-white mb-4 drop-shadow-lg">5+</div>
                  <div className="text-white/90 text-lg font-light drop-shadow-md">Years Experience</div>
                </div>
              </div>
              
              <div className="text-center relative overflow-hidden rounded-2xl p-8 group border-2 border-white/20">
                {/* Liquid glass background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-500/10 via-transparent to-accent-500/5"></div>
                {/* Animated shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                {/* Content */}
                <div className="relative z-10">
                  <div className="text-6xl font-light text-white mb-4 drop-shadow-lg">100%</div>
                  <div className="text-white/90 text-lg font-light drop-shadow-md">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
            <div className="w-6 h-10 border-2 border-primary-50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary-50 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </section>
      )
}