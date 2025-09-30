'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isClient, setIsClient] = useState(false)
  
  const heroImages = [
    'https://picsum.photos/1920/1080?random=1',
    'https://picsum.photos/1920/1080?random=2',
    'https://picsum.photos/1920/1080?random=3',
  ]

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return
    
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isClient, heroImages.length])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-white">
      {/* Content */}
      <div className="container-custom px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-large font-light mb-12 text-black">
            Professional
            <span className="block font-light">Computer Building</span>
          </h1>
          <p className="text-subtitle mb-16 max-w-3xl mx-auto">
            Custom PCs, Gaming Rigs, and Workstations built to perfection. 
            Expert assembly, premium components, and unbeatable performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <button className="btn-primary">
              Start Your Build
            </button>
            <button className="btn-secondary">
              View Gallery
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-6xl font-light text-black mb-4">500+</div>
            <div className="text-gray-600 text-lg font-light">Computers Built</div>
          </div>
          <div className="text-center">
            <div className="text-6xl font-light text-black mb-4">5+</div>
            <div className="text-gray-600 text-lg font-light">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-6xl font-light text-black mb-4">100%</div>
            <div className="text-gray-600 text-lg font-light">Satisfaction Rate</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}