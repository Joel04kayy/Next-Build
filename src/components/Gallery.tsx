'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import AnimatedButton from './AnimatedButton'
import { useTheme } from '../contexts/ThemeContext'

export default function Gallery() {
  const { theme } = useTheme()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedBuild, setSelectedBuild] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showAll, setShowAll] = useState(false)
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
      setShowAll(false) // Reset showAll when switching categories
    }
    setSelectedCategory(categoryId)
  }

  // Handle view more button
  const handleViewMore = () => {
    setShowAll(true)
  }

  // Handle view less button
  const handleViewLess = () => {
    setShowAll(false)
  }

  // Handle build click to open modal
  const handleBuildClick = (build) => {
    setSelectedBuild(build)
    setIsModalOpen(true)
  }

  // Handle modal close
  const handleModalClose = () => {
    setIsModalOpen(false)
    setSelectedBuild(null)
  }

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        handleModalClose()
      }
    }
    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  const categories = [
    { id: 'all', name: 'All Builds' },
    { id: 'custom-pcs', name: 'Custom PCs' },
    { id: 'setups', name: 'Setups' },
    { id: 'simrigs', name: 'SimRigs' }
  ]

  const builds = [
    // Custom PCs
    {
      id: 1,
      title: 'Custom Mini-ITX Build',
      category: 'custom-pcs',
      image: 'https://picsum.photos/600/400?random=16',
      specs: ['RTX 4060 Ti', 'i5-13400F', '16GB DDR5', '1TB NVMe'],
      price: '$1,500',
      description: 'Compact yet powerful custom PC built in a mini-ITX case. Perfect for space-constrained environments without compromising performance.',
      features: [
        'Mini-ITX Form Factor',
        'Custom Cable Routing',
        'Efficient Cooling',
        'Portable Design',
        'High Performance',
        '2-Year Warranty'
      ],
      performance: {
        gaming: '1440p High Settings',
        productivity: 'Very Good',
        cooling: 'Optimized Air Flow',
        noise: 'Low Noise'
      },
      dimensions: '10" x 6" x 8"',
      weight: '12 lbs',
      warranty: '2 Years'
    },
    {
      id: 2,
      title: 'Custom RGB Build',
      category: 'custom-pcs',
      image: 'https://picsum.photos/600/400?random=19',
      specs: ['RTX 4070 Ti', 'i7-13700F', '32GB DDR5', '1TB NVMe'],
      price: '$2,200',
      description: 'Show-stopping custom build with synchronized RGB lighting throughout. Perfect for streamers and RGB enthusiasts.',
      features: [
        'Synchronized RGB',
        'Custom Cable Management',
        'Tempered Glass',
        'Premium Components',
        'Custom Loop Ready',
        '3-Year Warranty'
      ],
      performance: {
        gaming: '1440p Ultra Settings',
        productivity: 'Excellent',
        cooling: 'RGB Liquid Cooling',
        noise: 'Quiet with Style'
      },
      dimensions: '19" x 8" x 17"',
      weight: '28 lbs',
      warranty: '3 Years'
    },
    {
      id: 3,
      title: 'Custom Water-Cooled Build',
      category: 'custom-pcs',
      image: 'https://picsum.photos/600/400?random=20',
      specs: ['RTX 4080', 'i7-13700K', '32GB DDR5', '2TB NVMe'],
      price: '$3,500',
      description: 'High-performance custom build with custom water cooling loop. Built for enthusiasts who demand the best cooling and aesthetics.',
      features: [
        'Custom Water Loop',
        'Premium Fittings',
        'Tempered Glass Panels',
        'High-End Components',
        'Silent Operation',
        '3-Year Warranty'
      ],
      performance: {
        gaming: '4K Ultra Settings',
        productivity: 'Excellent',
        cooling: 'Custom Water Cooling',
        noise: 'Silent Operation'
      },
      dimensions: '21" x 9" x 19"',
      weight: '35 lbs',
      warranty: '3 Years'
    },
    // Setups
    {
      id: 4,
      title: 'Streaming Setup',
      category: 'setups',
      image: 'https://picsum.photos/600/400?random=17',
      specs: ['RTX 4080', 'i7-13700K', '32GB DDR5', '2TB NVMe'],
      price: '$3,200',
      description: 'Complete streaming setup with professional audio equipment, dual monitors, and optimized lighting for content creation.',
      features: [
        'Dual Monitor Setup',
        'Professional Audio',
        'Streaming Software',
        'RGB Lighting',
        'Webcam & Microphone',
        '3-Year Warranty'
      ],
      performance: {
        gaming: '4K Ultra Settings',
        productivity: 'Excellent',
        cooling: 'Liquid Cooling',
        noise: 'Silent Operation'
      },
      dimensions: '20" x 10" x 18"',
      weight: '32 lbs',
      warranty: '3 Years'
    },
    {
      id: 5,
      title: 'Gaming Setup',
      category: 'setups',
      image: 'https://picsum.photos/600/400?random=21',
      specs: ['RTX 4090', 'i9-13900K', '32GB DDR5', '2TB NVMe'],
      price: '$4,500',
      description: 'Ultimate gaming setup with high-refresh monitor, mechanical keyboard, and gaming mouse. Perfect for competitive gaming.',
      features: [
        'High-Refresh Monitor',
        'Mechanical Keyboard',
        'Gaming Mouse',
        'RGB Lighting',
        'Gaming Headset',
        '3-Year Warranty'
      ],
      performance: {
        gaming: '4K Ultra Settings',
        productivity: 'Excellent',
        cooling: 'Advanced Cooling',
        noise: 'Quiet Operation'
      },
      dimensions: '22" x 11" x 20"',
      weight: '38 lbs',
      warranty: '3 Years'
    },
    {
      id: 6,
      title: 'Workstation Setup',
      category: 'setups',
      image: 'https://picsum.photos/600/400?random=22',
      specs: ['RTX A4000', 'Xeon W-2295', '64GB ECC', '4TB NVMe'],
      price: '$6,500',
      description: 'Professional workstation setup for CAD work, video editing, and scientific computing. Built for reliability and performance.',
      features: [
        'Dual Monitor Setup',
        'Professional GPU',
        'ECC Memory',
        'Ergonomic Design',
        'Professional Audio',
        '5-Year Warranty'
      ],
      performance: {
        gaming: '4K Ultra Settings',
        productivity: 'Professional Grade',
        cooling: 'Server-Grade Cooling',
        noise: 'Very Quiet'
      },
      dimensions: '24" x 12" x 22"',
      weight: '45 lbs',
      warranty: '5 Years'
    },
    // SimRigs
    {
      id: 7,
      title: 'Racing SimRig',
      category: 'simrigs',
      image: 'https://picsum.photos/600/400?random=18',
      specs: ['RTX 4090', 'i9-13900K', '64GB DDR5', '2TB NVMe'],
      price: '$4,800',
      description: 'Professional racing simulator with triple monitor setup, force feedback wheel, and pedals. Built for serious sim racing enthusiasts.',
      features: [
        'Triple Monitor Setup',
        'Force Feedback Wheel',
        'Racing Pedals',
        'Racing Seat',
        'High Refresh Rate',
        '5-Year Warranty'
      ],
      performance: {
        gaming: '4K Ultra Settings',
        productivity: 'Exceptional',
        cooling: 'Advanced Cooling',
        noise: 'Quiet Operation'
      },
      dimensions: '24" x 12" x 20"',
      weight: '45 lbs',
      warranty: '5 Years'
    },
    {
      id: 8,
      title: 'Flight SimRig',
      category: 'simrigs',
      image: 'https://picsum.photos/600/400?random=23',
      specs: ['RTX 4080', 'i7-13700K', '32GB DDR5', '2TB NVMe'],
      price: '$3,800',
      description: 'Complete flight simulator setup with yoke, throttle quadrant, and rudder pedals. Perfect for aviation enthusiasts and training.',
      features: [
        'Flight Yoke',
        'Throttle Quadrant',
        'Rudder Pedals',
        'Flight Instruments',
        'High Refresh Rate',
        '3-Year Warranty'
      ],
      performance: {
        gaming: '4K Ultra Settings',
        productivity: 'Excellent',
        cooling: 'Liquid Cooling',
        noise: 'Silent Operation'
      },
      dimensions: '26" x 14" x 22"',
      weight: '42 lbs',
      warranty: '3 Years'
    },
    {
      id: 9,
      title: 'Space SimRig',
      category: 'simrigs',
      image: 'https://picsum.photos/600/400?random=24',
      specs: ['RTX 4090', 'i9-13900K', '64GB DDR5', '4TB NVMe'],
      price: '$5,500',
      description: 'Advanced space simulator with HOTAS setup, VR support, and specialized controls for space flight simulation.',
      features: [
        'HOTAS Setup',
        'VR Support',
        'Space Controls',
        'High Refresh Rate',
        'Professional Audio',
        '5-Year Warranty'
      ],
      performance: {
        gaming: '4K Ultra Settings',
        productivity: 'Exceptional',
        cooling: 'Advanced Cooling',
        noise: 'Silent Operation'
      },
      dimensions: '28" x 16" x 24"',
      weight: '50 lbs',
      warranty: '5 Years'
    },
    // Additional Custom PCs
    {
      id: 10,
      title: 'Custom SFF Build',
      category: 'custom-pcs',
      image: 'https://picsum.photos/600/400?random=25',
      specs: ['RTX 4070', 'i5-13600K', '16GB DDR5', '1TB NVMe'],
      price: '$1,800',
      description: 'Small form factor custom build optimized for performance in minimal space. Perfect for HTPC or compact gaming setups.',
      features: [
        'Small Form Factor',
        'Efficient Design',
        'High Performance',
        'Low Power Draw',
        'Compact Cooling',
        '2-Year Warranty'
      ],
      performance: {
        gaming: '1440p High Settings',
        productivity: 'Very Good',
        cooling: 'Efficient Air Cooling',
        noise: 'Low Noise'
      },
      dimensions: '8" x 6" x 10"',
      weight: '10 lbs',
      warranty: '2 Years'
    },
    {
      id: 11,
      title: 'Custom Silent Build',
      category: 'custom-pcs',
      image: 'https://picsum.photos/600/400?random=26',
      specs: ['RTX 4060 Ti', 'i5-13400F', '16GB DDR5', '1TB NVMe'],
      price: '$1,600',
      description: 'Whisper-quiet custom build designed for silent operation. Perfect for office environments or noise-sensitive users.',
      features: [
        'Silent Operation',
        'Noctua Fans',
        'Sound Dampening',
        'Efficient Cooling',
        'Low Noise Design',
        '2-Year Warranty'
      ],
      performance: {
        gaming: '1440p High Settings',
        productivity: 'Very Good',
        cooling: 'Silent Air Cooling',
        noise: 'Whisper Quiet'
      },
      dimensions: '18" x 8" x 16"',
      weight: '22 lbs',
      warranty: '2 Years'
    },
    // Additional Setups
    {
      id: 12,
      title: 'Content Creator Setup',
      category: 'setups',
      image: 'https://picsum.photos/600/400?random=27',
      specs: ['RTX 4070 Ti', 'i7-13700F', '32GB DDR5', '2TB NVMe'],
      price: '$2,800',
      description: 'Complete content creation setup with professional lighting, audio equipment, and dual monitors for video editing and streaming.',
      features: [
        'Dual Monitor Setup',
        'Professional Lighting',
        'Audio Interface',
        'Content Creation Software',
        'Ergonomic Design',
        '3-Year Warranty'
      ],
      performance: {
        gaming: '1440p Ultra Settings',
        productivity: 'Excellent',
        cooling: 'Liquid Cooling',
        noise: 'Quiet Operation'
      },
      dimensions: '22" x 11" x 20"',
      weight: '35 lbs',
      warranty: '3 Years'
    },
    {
      id: 13,
      title: 'Professional Office Setup',
      category: 'setups',
      image: 'https://picsum.photos/600/400?random=28',
      specs: ['RTX 4060', 'i5-13600K', '16GB DDR5', '1TB NVMe'],
      price: '$2,200',
      description: 'Professional office setup with ergonomic design, dual monitors, and productivity-focused peripherals for business use.',
      features: [
        'Dual Monitor Setup',
        'Ergonomic Design',
        'Professional Audio',
        'Productivity Software',
        'Cable Management',
        '2-Year Warranty'
      ],
      performance: {
        gaming: '1440p High Settings',
        productivity: 'Excellent',
        cooling: 'Efficient Air Cooling',
        noise: 'Low Noise'
      },
      dimensions: '20" x 10" x 18"',
      weight: '28 lbs',
      warranty: '2 Years'
    },
    // Additional SimRigs
    {
      id: 14,
      title: 'Truck SimRig',
      category: 'simrigs',
      image: 'https://picsum.photos/600/400?random=29',
      specs: ['RTX 4070', 'i7-13700K', '32GB DDR5', '2TB NVMe'],
      price: '$3,200',
      description: 'Professional truck simulator setup with realistic steering wheel, gear shifter, and pedals for truck driving simulation.',
      features: [
        'Truck Steering Wheel',
        'Gear Shifter',
        'Realistic Pedals',
        'Truck Dashboard',
        'High Refresh Rate',
        '3-Year Warranty'
      ],
      performance: {
        gaming: '4K High Settings',
        productivity: 'Excellent',
        cooling: 'Liquid Cooling',
        noise: 'Quiet Operation'
      },
      dimensions: '26" x 14" x 22"',
      weight: '40 lbs',
      warranty: '3 Years'
    },
    {
      id: 15,
      title: 'Military SimRig',
      category: 'simrigs',
      image: 'https://picsum.photos/600/400?random=30',
      specs: ['RTX 4080', 'i7-13700K', '32GB DDR5', '2TB NVMe'],
      price: '$4,200',
      description: 'Military simulation setup with specialized controls for tactical training and military vehicle simulation.',
      features: [
        'Military Controls',
        'Tactical Display',
        'Specialized Peripherals',
        'Training Software',
        'High Refresh Rate',
        '3-Year Warranty'
      ],
      performance: {
        gaming: '4K Ultra Settings',
        productivity: 'Excellent',
        cooling: 'Advanced Cooling',
        noise: 'Quiet Operation'
      },
      dimensions: '28" x 16" x 24"',
      weight: '48 lbs',
      warranty: '3 Years'
    }
  ]

  const filteredBuilds = selectedCategory === 'all' 
    ? builds 
    : builds.filter(build => build.category === selectedCategory)

  // Show only 6 builds initially, or all if showAll is true
  const displayedBuilds = showAll ? filteredBuilds : filteredBuilds.slice(0, 6)
  const hasMoreBuilds = filteredBuilds.length > 6

  return (
        <section id="gallery" className="section-padding bg-gray-100 dark:bg-[#0a0a0a] scroll-mt-24">
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
          {displayedBuilds.map((build) => (
            <div 
              key={build.id} 
              className="relative rounded-3xl shadow-xl overflow-hidden card-hover group cursor-pointer"
              onClick={() => handleBuildClick(build)}
            >
              {/* Light mode - Exact same liquid glass background as Services section */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/40 to-white/30 backdrop-blur-lg rounded-3xl dark:hidden"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-500/25 via-transparent to-accent-500/25 rounded-3xl dark:hidden"></div>
              <div className="absolute inset-0 bg-gradient-to-bl from-white/20 via-transparent to-white/20 rounded-3xl dark:hidden"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-accent-500/10 via-transparent to-accent-500/10 rounded-3xl dark:hidden"></div>
              {/* Subtle pattern overlay - same as Services section */}
              <div className="absolute inset-0 opacity-20 dark:hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-white/30 rounded-full -translate-x-16 -translate-y-16 blur-xl"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-accent-500/30 rounded-full translate-x-12 translate-y-12 blur-xl"></div>
                <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/20 rounded-full blur-lg"></div>
              </div>
              
              {/* Dark mode - Liquid glass background same as Services section */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/60 via-gray-700/70 to-gray-800/60 backdrop-blur-lg rounded-3xl hidden dark:block"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-500/40 via-transparent to-accent-500/40 rounded-3xl hidden dark:block"></div>
              <div className="absolute inset-0 bg-gradient-to-bl from-gray-600/50 via-transparent to-gray-600/50 rounded-3xl hidden dark:block"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-accent-500/20 via-transparent to-accent-500/20 rounded-3xl hidden dark:block"></div>
              {/* Subtle pattern overlay - same as Services section */}
              <div className="absolute inset-0 opacity-30 hidden dark:block">
                <div className="absolute top-0 left-0 w-32 h-32 bg-gray-600/50 rounded-full -translate-x-16 -translate-y-16 blur-xl"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-accent-500/50 rounded-full translate-x-12 translate-y-12 blur-xl"></div>
                <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gray-500/40 rounded-full blur-lg"></div>
              </div>
              <div className="relative h-80 z-10">
                <Image
                  src={build.image}
                  alt={build.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-6 right-6 bg-primary-600 text-white px-4 py-2 rounded-2xl text-sm font-semibold shadow-lg">
                  {build.price}
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 group-hover:scale-110"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110">
                  <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-6 py-3 rounded-full">
                    <span className="text-gray-900 dark:text-white font-semibold">Click for Details</span>
                  </div>
                </div>
              </div>
              <div className="p-8 relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{build.title}</h3>
                <div className="space-y-3 mb-6">
                  {build.specs.map((spec, index) => (
                    <div key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg className="w-5 h-5 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-lg">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More/Less Buttons */}
        {hasMoreBuilds && (
          <div className="text-center mt-12">
            {!showAll ? (
              <AnimatedButton 
                variant="secondary" 
                className="text-lg px-8 py-4"
                onClick={handleViewMore}
              >
                View More Builds
              </AnimatedButton>
            ) : (
              <AnimatedButton 
                variant="secondary" 
                className="text-lg px-8 py-4"
                onClick={handleViewLess}
              >
                View Less
              </AnimatedButton>
            )}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="relative rounded-3xl p-12 md:p-16 text-white overflow-hidden">
            {/* Light mode - Liquid glass background same as tiles */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/40 to-white/30 backdrop-blur-lg rounded-3xl dark:hidden"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-500/25 via-transparent to-accent-500/25 rounded-3xl dark:hidden"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-white/20 via-transparent to-white/20 rounded-3xl dark:hidden"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-accent-500/10 via-transparent to-accent-500/10 rounded-3xl dark:hidden"></div>
            {/* Subtle pattern overlay - same as tiles */}
            <div className="absolute inset-0 opacity-20 dark:hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white/30 rounded-full -translate-x-16 -translate-y-16 blur-xl"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-accent-500/30 rounded-full translate-x-12 translate-y-12 blur-xl"></div>
              <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/20 rounded-full blur-lg"></div>
            </div>
            
            {/* Dark mode - Liquid glass background same as tiles */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/60 via-gray-700/70 to-gray-800/60 backdrop-blur-lg rounded-3xl hidden dark:block"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-500/40 via-transparent to-accent-500/40 rounded-3xl hidden dark:block"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-gray-600/50 via-transparent to-gray-600/50 rounded-3xl hidden dark:block"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-accent-500/20 via-transparent to-accent-500/20 rounded-3xl hidden dark:block"></div>
            {/* Subtle pattern overlay - same as tiles */}
            <div className="absolute inset-0 opacity-30 hidden dark:block">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gray-600/50 rounded-full -translate-x-16 -translate-y-16 blur-xl"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-accent-500/50 rounded-full translate-x-12 translate-y-12 blur-xl"></div>
              <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gray-500/40 rounded-full blur-lg"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Ready for Your Custom Build?</h3>
              <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto text-gray-600 dark:text-white">
                Let's create the perfect computer for your needs with professional assembly and premium components
              </p>
              <AnimatedButton variant="secondary" className="text-lg">
                Start Your Build
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>

      {/* Build Details Modal */}
      {isModalOpen && selectedBuild && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={handleModalClose}
          ></div>
          
          {/* Modal Content */}
          <div className="relative rounded-3xl shadow-2xl max-w-6xl w-full h-[80vh] overflow-hidden">
            {/* Light mode - Liquid glass background same as Services section */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/40 to-white/30 backdrop-blur-lg rounded-3xl dark:hidden"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-500/25 via-transparent to-accent-500/25 rounded-3xl dark:hidden"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-white/20 via-transparent to-white/20 rounded-3xl dark:hidden"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-accent-500/10 via-transparent to-accent-500/10 rounded-3xl dark:hidden"></div>
            {/* Subtle pattern overlay - same as Services section */}
            <div className="absolute inset-0 opacity-20 dark:hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white/30 rounded-full -translate-x-16 -translate-y-16 blur-xl"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-accent-500/30 rounded-full translate-x-12 translate-y-12 blur-xl"></div>
              <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/20 rounded-full blur-lg"></div>
            </div>
            
            {/* Dark mode - Liquid glass background same as Services section */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/60 via-gray-700/70 to-gray-800/60 backdrop-blur-lg rounded-3xl hidden dark:block"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-500/40 via-transparent to-accent-500/40 rounded-3xl hidden dark:block"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-gray-600/50 via-transparent to-gray-600/50 rounded-3xl hidden dark:block"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-accent-500/20 via-transparent to-accent-500/20 rounded-3xl hidden dark:block"></div>
            {/* Subtle pattern overlay - same as Services section */}
            <div className="absolute inset-0 opacity-30 hidden dark:block">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gray-600/50 rounded-full -translate-x-16 -translate-y-16 blur-xl"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-accent-500/50 rounded-full translate-x-12 translate-y-12 blur-xl"></div>
              <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gray-500/40 rounded-full blur-lg"></div>
            </div>

            <div className="flex flex-row h-full relative z-10">
              {/* Image Section - Left Side with Scrollable Photos */}
              <div className="relative w-1/2 h-full overflow-hidden bg-white dark:bg-gray-800">
                <div className="flex h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                  {/* Main build image */}
                  <div className="relative min-w-full h-full snap-center">
                    <Image
                      src={selectedBuild.image}
                      alt={selectedBuild.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-6 left-6 bg-primary-600 text-white px-4 py-2 rounded-2xl text-lg font-semibold shadow-lg">
                      {selectedBuild.price}
                    </div>
                  </div>
                  
                  {/* Additional build photos */}
                  <div className="relative min-w-full h-full snap-center">
                    <Image
                      src="https://picsum.photos/800/600?random=20"
                      alt={`${selectedBuild.title} - Side View`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-6 left-6 bg-black/50 text-white px-4 py-2 rounded-2xl text-sm font-semibold backdrop-blur-sm">
                      Side View
                    </div>
                  </div>
                  
                  <div className="relative min-w-full h-full snap-center">
                    <Image
                      src="https://picsum.photos/800/600?random=21"
                      alt={`${selectedBuild.title} - Interior`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-6 left-6 bg-black/50 text-white px-4 py-2 rounded-2xl text-sm font-semibold backdrop-blur-sm">
                      Interior View
                    </div>
                  </div>
                  
                  <div className="relative min-w-full h-full snap-center">
                    <Image
                      src="https://picsum.photos/800/600?random=22"
                      alt={`${selectedBuild.title} - RGB Lighting`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-6 left-6 bg-black/50 text-white px-4 py-2 rounded-2xl text-sm font-semibold backdrop-blur-sm">
                      RGB Lighting
                    </div>
                  </div>
                </div>
                
                {/* Scroll indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  <div className="w-2 h-2 bg-white/80 rounded-full"></div>
                  <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                  <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                  <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                </div>
              </div>

              {/* Content Section - Right Side Scrollable */}
              <div className="w-1/2 p-8 lg:p-12 overflow-y-auto custom-scrollbar">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedBuild.title}
                </h2>
                
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  {selectedBuild.description}
                </p>

                {/* Specifications */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Specifications</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedBuild.specs.map((spec, index) => (
                      <div key={index} className="flex items-center bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                        <svg className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-900 dark:text-white font-medium">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h3>
                  <div className="space-y-3">
                    {selectedBuild.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-4"></div>
                        <span className="text-gray-600 dark:text-gray-300 text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Performance & Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Performance</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Gaming:</span>
                        <span className="text-gray-900 dark:text-white font-medium">{selectedBuild.performance.gaming}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Productivity:</span>
                        <span className="text-gray-900 dark:text-white font-medium">{selectedBuild.performance.productivity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Cooling:</span>
                        <span className="text-gray-900 dark:text-white font-medium">{selectedBuild.performance.cooling}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Noise:</span>
                        <span className="text-gray-900 dark:text-white font-medium">{selectedBuild.performance.noise}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Physical Details</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Dimensions:</span>
                        <span className="text-gray-900 dark:text-white font-medium">{selectedBuild.dimensions}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Weight:</span>
                        <span className="text-gray-900 dark:text-white font-medium">{selectedBuild.weight}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Warranty:</span>
                        <span className="text-gray-900 dark:text-white font-medium">{selectedBuild.warranty}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <AnimatedButton variant="primary" className="flex-1 text-lg">
                    Get This Build
                  </AnimatedButton>
                  <AnimatedButton variant="secondary" className="flex-1 text-lg">
                    Customize
                  </AnimatedButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}