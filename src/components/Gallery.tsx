'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import AnimatedButton from './AnimatedButton'
import { useTheme } from '../contexts/ThemeContext'

export default function Gallery() {
  const { theme } = useTheme()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
    height: 0
  })
  const [isInitialized, setIsInitialized] = useState(false)
  const [hasUserInteracted, setHasUserInteracted] = useState(false)
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([])

  // Update indicator position and size when selectedCategory changes
  useEffect(() => {
    const activeButton = buttonRefs.current[categories.findIndex(cat => cat.id === selectedCategory)]
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
  }, [selectedCategory, isInitialized])

  // Handle button click with user interaction tracking
  const handleCategoryClick = (categoryId: string) => {
    if (categoryId !== selectedCategory) {
      setHasUserInteracted(true)
    }
    setSelectedCategory(categoryId)
  }

  const categories = [
    { id: 'all', name: 'All Builds' },
    { id: 'gaming', name: 'Gaming PCs' },
    { id: 'workstation', name: 'Workstations' },
    { id: 'custom', name: 'Custom Builds' }
  ]

  const builds = [
    {
      id: 1,
      title: 'High-End Gaming Rig',
      category: 'gaming',
      image: 'https://picsum.photos/600/400?random=10',
      specs: ['RTX 4080', 'i7-13700K', '32GB DDR5', '1TB NVMe'],
      price: '$2,500'
    },
    {
      id: 2,
      title: 'Content Creation Workstation',
      category: 'workstation',
      image: 'https://picsum.photos/600/400?random=11',
      specs: ['RTX 4090', 'i9-13900K', '64GB DDR5', '2TB NVMe'],
      price: '$4,200'
    },
    {
      id: 3,
      title: 'Compact Gaming PC',
      category: 'gaming',
      image: 'https://picsum.photos/600/400?random=12',
      specs: ['RTX 4070', 'i5-13600K', '16GB DDR5', '1TB NVMe'],
      price: '$1,800'
    },
    {
      id: 4,
      title: 'Budget Gaming Build',
      category: 'gaming',
      image: 'https://picsum.photos/600/400?random=13',
      specs: ['RTX 4060', 'i5-13400F', '16GB DDR4', '500GB NVMe'],
      price: '$1,200'
    },
    {
      id: 5,
      title: 'Professional Workstation',
      category: 'workstation',
      image: 'https://picsum.photos/600/400?random=14',
      specs: ['RTX A4000', 'Xeon W-2295', '128GB ECC', '4TB NVMe'],
      price: '$6,500'
    },
    {
      id: 6,
      title: 'Custom RGB Build',
      category: 'custom',
      image: 'https://picsum.photos/600/400?random=15',
      specs: ['RTX 4070 Ti', 'i7-13700F', '32GB DDR5', '1TB NVMe'],
      price: '$2,200'
    }
  ]

  const filteredBuilds = selectedCategory === 'all' 
    ? builds 
    : builds.filter(build => build.category === selectedCategory)

  return (
    <section id="gallery" className="section-padding bg-gray-100 dark:bg-[#0a0a0a]">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">
            Our <span className="gradient-text">Builds</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of custom-built computers and see the quality of our work
          </p>
        </div>

        {/* Category Filter with Liquid Glass Design */}
        <div className="flex justify-center space-x-4 mb-16 relative">
          {/* Sliding indicator */}
          {isInitialized && (
            <div
              className={`absolute bg-white/20 dark:bg-gray-800/30 rounded-full pointer-events-none z-0 ${
                hasUserInteracted ? 'transition-all duration-500 ease-out' : ''
              }`}
              style={indicatorStyle}
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
          )}

          {/* Category buttons */}
          {categories.map((category, index) => (
            <button
              key={category.id}
              ref={(el) => (buttonRefs.current[index] = el)}
              onClick={() => handleCategoryClick(category.id)}
              className={`relative px-8 py-4 font-medium transition-all duration-500 rounded-full overflow-hidden group z-10 ${
                selectedCategory === category.id
                  ? 'transform scale-110 text-2xl font-bold'
                  : 'text-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {/* Inactive tab styling */}
              {selectedCategory !== category.id && (
                <div className="absolute inset-0 bg-white/10 dark:bg-gray-800/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
              
              {/* Text content */}
              <span className="relative z-10 font-semibold text-sm">
                {category.name}
              </span>
            </button>
          ))}
        </div>

        {/* Builds Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBuilds.map((build) => (
            <div key={build.id} className="bg-white rounded-3xl shadow-xl overflow-hidden card-hover group">
              <div className="relative h-80">
                <Image
                  src={build.image}
                  alt={build.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-6 right-6 bg-primary-600 text-white px-4 py-2 rounded-2xl text-sm font-semibold shadow-lg">
                  {build.price}
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{build.title}</h3>
                <div className="space-y-3 mb-6">
                  {build.specs.map((spec, index) => (
                    <div key={index} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-lg">{spec}</span>
                    </div>
                  ))}
                </div>
                <AnimatedButton variant="primary" className="w-full text-lg">
                  View Details
                </AnimatedButton>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-gray-700 to-gray-900 rounded-3xl p-12 md:p-16 text-white">
            <h3 className="text-4xl font-bold mb-6">Ready for Your Custom Build?</h3>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              Let's create the perfect computer for your needs with professional assembly and premium components
            </p>
            <AnimatedButton variant="secondary" className="text-lg">
              Start Your Build
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  )
}