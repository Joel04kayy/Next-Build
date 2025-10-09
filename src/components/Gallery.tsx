'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import AnimatedButton from './AnimatedButton'
import { useTheme } from '../contexts/ThemeContext'

interface Build {
  id: number
  title: string
  category: string
  image: string
  specs: string[]
  price: string
  description: string
  features: string[]
  performance: {
    gaming: string
    productivity: string
    cooling: string
    noise: string
  }
  dimensions: string
  weight: string
  warranty: string
}

export default function Gallery() {
  const { theme } = useTheme()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedBuild, setSelectedBuild] = useState<Build | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
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
  const handleBuildClick = (build: Build) => {
    setSelectedBuild(build)
    setCurrentImageIndex(0) // Reset to first image
    setIsModalOpen(true)
  }

  // Handle image navigation
  const handlePreviousImage = () => {
    let maxImages = 5 // default
    if (selectedBuild?.id === 1) maxImages = 4 // NextBuild1 has 4 images
    else if (selectedBuild?.id === 2) maxImages = 6 // NextBuild2 has 6 images
    else if (selectedBuild?.id === 3) maxImages = 3 // NextBuild3 has 3 images
    else if (selectedBuild?.id === 4) maxImages = 2 // NextBuild4 has 2 images
    else if (selectedBuild?.id === 5) maxImages = 9 // NextBuild5 has 9 images
    else if (selectedBuild?.id === 6) maxImages = 3 // NextBuild6 has 3 images
    else if (selectedBuild?.id === 7) maxImages = 8 // NextBuild7 has 8 images
    else if (selectedBuild?.id === 8) maxImages = 2 // NextBuild8 has 2 images
    else if (selectedBuild?.id === 9) maxImages = 2 // NextBuild9 has 2 images
    else if (selectedBuild?.id === 10) maxImages = 2 // NextBuild10 has 2 images
    else if (selectedBuild?.id === 11) maxImages = 11 // NextBuild11 has 11 images
    else if (selectedBuild?.id === 12) maxImages = 6 // NextBuild12 has 6 images
    
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : maxImages - 1)) // Loop back to last image
  }

  const handleNextImage = () => {
    let maxImages = 5 // default
    if (selectedBuild?.id === 1) maxImages = 4 // NextBuild1 has 4 images
    else if (selectedBuild?.id === 2) maxImages = 6 // NextBuild2 has 6 images
    else if (selectedBuild?.id === 3) maxImages = 3 // NextBuild3 has 3 images
    else if (selectedBuild?.id === 4) maxImages = 2 // NextBuild4 has 2 images
    else if (selectedBuild?.id === 5) maxImages = 9 // NextBuild5 has 9 images
    else if (selectedBuild?.id === 6) maxImages = 3 // NextBuild6 has 3 images
    else if (selectedBuild?.id === 7) maxImages = 8 // NextBuild7 has 8 images
    else if (selectedBuild?.id === 8) maxImages = 2 // NextBuild8 has 2 images
    else if (selectedBuild?.id === 9) maxImages = 2 // NextBuild9 has 2 images
    else if (selectedBuild?.id === 10) maxImages = 2 // NextBuild10 has 2 images
    else if (selectedBuild?.id === 11) maxImages = 11 // NextBuild11 has 11 images
    else if (selectedBuild?.id === 12) maxImages = 6 // NextBuild12 has 6 images
    
    setCurrentImageIndex((prev) => (prev < maxImages - 1 ? prev + 1 : 0)) // Loop back to first image
  }

  // Handle modal close
  const handleModalClose = () => {
    setIsModalOpen(false)
    setSelectedBuild(null)
  }

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
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
      title: 'High-End Gaming Build',
      category: 'custom-pcs',
      image: '/images/builds/custom-pcs/NextBuild1-1.jpg',
      specs: ['RTX 4080 SUPER', 'i9-13900K', '64GB DDR5-6000', '1TB NVMe'],
      price: '$3,850',
      description: 'The ultimate gaming and content creation powerhouse. Perfect for 4K gaming, streaming, video editing, and professional workloads. This build delivers exceptional performance for competitive gaming, content creation, and demanding productivity tasks.',
      features: [
        'RTX 4080 SUPER 16GB',
        'Intel i9-13900K 24-Core',
        '64GB DDR5-6000 RGB',
        'NZXT Kraken Elite 360 AIO',
        'Vertical GPU Mount',
        'Custom RGB Lighting',
        'Premium Cable Management'
      ],
      performance: {
        gaming: '4K Ultra Settings',
        productivity: 'Exceptional',
        cooling: 'Liquid Cooling + RGB Fans',
        noise: 'Quiet Operation'
      },
      dimensions: '18" x 8" x 18"',
      weight: '35 lbs',
      warranty: '3 Years'
    },
    // Setups
    {
      id: 2,
      title: 'AMD Gaming Setup',
      category: 'setups',
      image: '/images/builds/custom-pcs/NextBuild2-1.jpg',
      specs: ['RTX 4070 Ti', 'Ryzen 5 7600X3D', '32GB DDR5-6000', '6.5TB Storage'],
      price: '$3,070',
      description: 'High-performance AMD gaming setup with massive storage capacity. Perfect for gaming, content creation, and data-intensive tasks. Features the latest Ryzen X3D technology for exceptional gaming performance and multiple storage drives for maximum capacity.',
      features: [
        'RTX 4070 Ti 12GB',
        'AMD Ryzen 5 7600X3D 6-Core',
        '32GB DDR5-6000 RGB',
        'be quiet! Light Loop AIO',
        '6.5TB Total Storage',
        '1000W Platinum PSU'
      ],
      performance: {
        gaming: '1440p Ultra Settings',
        productivity: 'Excellent',
        cooling: 'Liquid Cooling + Silent Fans',
        noise: 'Whisper Quiet'
      },
      dimensions: '20" x 9" x 19"',
      weight: '32 lbs',
      warranty: '3 Years'
    },
    // Custom PCs
    {
      id: 3,
      title: 'AMD X3D Gaming Build',
      category: 'custom-pcs',
      image: '/images/builds/custom-pcs/NextBuild3-1.jpg',
      specs: ['RX 7900 XTX', 'Ryzen 7 9800X3D', '32GB DDR5-6400', '1TB NVMe'],
      price: '$2,500',
      description: 'High-performance AMD gaming build featuring the latest Ryzen 7 9800X3D processor and RX 7900 XTX graphics. Perfect for 4K gaming, content creation, and competitive esports. Built in the stunning Lian Li O11 Vision Compact case with premium RGB lighting.',
      features: [
        'RX 7900 XTX 24GB',
        'AMD Ryzen 7 9800X3D 8-Core',
        '32GB DDR5-6400 RGB',
        'Lian Li Galahad II LCD AIO',
        'Lian Li O11 Vision Case',
        '1000W Platinum PSU',
        'Premium RGB Lighting',
        'Premium Cable Management'
      ],
      performance: {
        gaming: '4K Ultra Settings',
        productivity: 'Excellent',
        cooling: 'LCD AIO + RGB Fans',
        noise: 'Quiet Operation'
      },
      dimensions: '18" x 8" x 17"',
      weight: '30 lbs',
      warranty: '3 Years'
    },
    // Custom PCs
    {
      id: 4,
      title: "HYTE Y70 Touch Build",
      category: "setups",
      image: "/images/builds/custom-pcs/NextBuild4-1.jpg",
      specs: [
        "RTX 4080 SUPER 16GB",
        "AMD Ryzen 7 7800X3D",
        "64GB DDR5-6400",
        "4TB NVMe SSD"
      ],
      price: "$3,850",
      description: "Premium gaming build featuring the stunning HYTE Y70 Touch case with integrated touchscreen display. Perfect for content creation, streaming, and high-end gaming with exceptional performance and aesthetics.",
      features: [
        "HYTE Y70 Touch Case",
        "Integrated Touch Display",
        "RTX 4080 SUPER 16GB",
        "AMD Ryzen 7 7800X3D",
        "64GB DDR5-6400 Royal",
        "NZXT Kraken Elite 360 RGB",
        "4TB Total Storage",
        "1000W Gold PSU",
        "Premium RGB Fans"
      ],
      performance: {
        gaming: "4K Ultra Settings",
        productivity: "Exceptional",
        cooling: "RGB AIO + Premium Fans",
        noise: "Quiet Operation"
      },
      dimensions: "20\" x 9\" x 19\"",
      weight: "35 lbs",
      warranty: "3 Years"
    },
    {
      id: 5,
      title: "Ultimate RTX 5090 Build",
      category: "custom-pcs",
      image: "/images/builds/custom-pcs/NextBuild5-1.jpg",
      specs: [
        "RTX 5090 32GB",
        "AMD Ryzen 7 9800X3D",
        "64GB DDR5-6400",
        "14TB NVMe SSD"
      ],
      price: "$4,200",
      description: "The ultimate high-end gaming and content creation powerhouse featuring the latest RTX 5090 and Ryzen 7 9800X3D. This build delivers exceptional performance for 4K gaming, professional content creation, and demanding workloads with massive storage capacity.",
      features: [
        "RTX 5090 32GB Founders Edition",
        "AMD Ryzen 7 9800X3D 8-Core",
        "64GB DDR5-6400 Dominator RGB",
        "be quiet! Light Loop AIO",
        "14TB Total Storage (4x Samsung 990 Pro)",
        "1200W Platinum PSU",
        "be quiet! Light Base 600 LX",
        "Premium RGB Lighting",
        "Thermal Grizzly Kryonaut"
      ],
      performance: {
        gaming: "4K Ultra 120fps",
        productivity: "Exceptional",
        cooling: "Premium AIO + Silent Fans",
        noise: "Whisper Quiet"
      },
      dimensions: "18\" x 8\" x 18\"",
      weight: "38 lbs",
      warranty: "3 Years"
    },
    {
      id: 6,
      title: "Intel RTX 4090 Build",
      category: "setups",
      image: "/images/builds/custom-pcs/NextBuild6-1.jpg",
      specs: [
        "RTX 4090 24GB",
        "Intel Core i9-13900K",
        "64GB DDR5-6800",
        "2.5TB NVMe SSD"
      ],
      price: "$5,600",
      description: "High-performance Intel-based gaming build featuring the powerful RTX 4090 and Intel Core i9-13900K. Perfect for 4K gaming, content creation, and professional workloads with exceptional performance and premium RGB lighting.",
      features: [
        "Asus ROG STRIX RTX 4090 24GB",
        "Intel Core i9-13900K 24-Core",
        "64GB DDR5-6800 Dominator RGB",
        "Corsair iCUE H150i Elite LCD",
        "2.5TB Total Storage",
        "1200W Platinum PSU",
        "Corsair iCUE 5000X RGB",
        "Premium RGB Lighting",
        "Windows 11 Pro"
      ],
      performance: {
        gaming: "4K Ultra 120fps",
        productivity: "Exceptional",
        cooling: "LCD AIO + RGB Fans",
        noise: "Quiet Operation"
      },
      dimensions: "20\" x 9\" x 19\"",
      weight: "36 lbs",
      warranty: "3 Years"
    },
    {
      id: 7,
      title: "AMD RX 7900 XTX Build",
      category: "custom-pcs",
      image: "/images/builds/custom-pcs/NextBuild7-1.jpg",
      specs: [
        "RX 7900 XTX 24GB",
        "AMD Ryzen 7 5800X",
        "32GB DDR4-3600",
        "3.2TB NVMe SSD"
      ],
      price: "$1,600",
      description: "High-performance AMD-based gaming build featuring the powerful RX 7900 XTX and Ryzen 7 5800X. Perfect for 1440p and 4K gaming with excellent value for money and premium RGB lighting in the Lian Li O11D EVO case.",
      features: [
        "Sapphire NITRO+ RX 7900 XTX 24GB",
        "AMD Ryzen 7 5800X 8-Core",
        "32GB DDR4-3600 Trident Z Neo",
        "EK Nucleus AIO CR360 Dark",
        "3.2TB Total Storage",
        "850W Gold PSU",
        "Lian Li O11D EVO RGB",
        "Premium RGB Lighting",
        "Lian Li Uni Fan SL-Infinity"
      ],
      performance: {
        gaming: "1440p Ultra 120fps",
        productivity: "Excellent",
        cooling: "AIO + Premium Fans",
        noise: "Quiet Operation"
      },
      dimensions: "18\" x 8\" x 17\"",
      weight: "30 lbs",
      warranty: "3 Years"
    },
    {
      id: 8,
      title: "Intel RTX 3070 Gaming Build",
      category: "custom-pcs",
      image: "/images/builds/custom-pcs/NextBuild8-1.jpg",
      specs: [
        "RTX 3070 8GB",
        "Intel i9-11900K",
        "64GB DDR4-3600",
        "2TB NVMe SSD"
      ],
      price: "$811",
      description: "High-performance Intel-based gaming build featuring the Intel Core i9-11900K and RTX 3070. Perfect for 1440p gaming and content creation with excellent cooling and RGB lighting in the CiT DS360 case.",
      features: [
        "MSI RTX 3070 VENTUS 3X OC 8GB",
        "Intel Core i9-11900K 8-Core",
        "64GB DDR4-3600 Vengeance RGB Pro",
        "Thermalright Frozen Notte ARGB V2 AIO",
        "2TB Kingston NV3 NVMe SSD",
        "650W Bronze PSU",
        "CiT DS360 ATX Case",
        "Premium RGB Lighting",
        "Multiple Thermalright Fans"
      ],
      performance: {
        gaming: "1440p Ultra Settings",
        productivity: "Excellent",
        cooling: "Liquid Cooling + RGB Fans",
        noise: "Quiet Operation"
      },
      dimensions: "18\" x 8\" x 17\"",
      weight: "28 lbs",
      warranty: "3 Years"
    },
    {
      id: 9,
      title: "AMD RTX 5080 Ultimate Build",
      category: "custom-pcs",
      image: "/images/builds/custom-pcs/NextBuild9-1.jpg",
      specs: [
        "RTX 5080 16GB",
        "AMD Ryzen 7 9800X3D",
        "64GB DDR5-6000",
        "4TB NVMe SSD"
      ],
      price: "$2,994",
      description: "The ultimate high-end gaming and content creation powerhouse featuring the latest AMD Ryzen 7 9800X3D and RTX 5080. This build delivers exceptional performance for 4K gaming, professional content creation, and demanding workloads with premium components and stunning RGB lighting.",
      features: [
        "Asus ROG Astral OC RTX 5080 16GB",
        "AMD Ryzen 7 9800X3D 8-Core",
        "64GB DDR5-6000 Trident Z5 Neo RGB",
        "Lian Li Hydroshift LCD 360S AIO",
        "4TB Total Storage (2x Samsung 990 EVO Plus)",
        "1000W Platinum PSU",
        "Lian Li O11 Vision Compact",
        "Premium RGB Lighting",
        "WiFi 7 Connectivity"
      ],
      performance: {
        gaming: "4K Ultra 144fps",
        productivity: "Exceptional",
        cooling: "LCD AIO + Premium Fans",
        noise: "Whisper Quiet"
      },
      dimensions: "18\" x 8\" x 17\"",
      weight: "32 lbs",
      warranty: "3 Years"
    },
    {
      id: 10,
      title: "Intel RTX 5070 Ti Premium Build",
      category: "custom-pcs",
      image: "/images/builds/custom-pcs/NextBuild10-1.jpg",
      specs: [
        "RTX 5070 Ti 16GB",
        "Intel i7-14700K",
        "32GB DDR5-6000",
        "2TB NVMe SSD"
      ],
      price: "$2,106",
      description: "Premium Intel-based gaming and content creation build featuring the Intel Core i7-14700K and RTX 5070 Ti. This high-end configuration delivers exceptional performance for 1440p and 4K gaming with premium Lian Li components, wireless RGB fans, and a stunning secondary display.",
      features: [
        "PNY OC GeForce RTX 5070 Ti 16GB",
        "Intel Core i7-14700K 20-Core",
        "32GB DDR5-6000 Vengeance RGB",
        "TRYX PANORAMA SE ARGB 360mm AIO",
        "2TB Samsung 990 Pro NVMe SSD",
        "1000W Lian Li EDGE Platinum PSU",
        "Lian Li O11 VISION COMPACT Case",
        "Wireless Lian Li UNI Fan TL RGB",
        "8.8\" Secondary Display",
        "Lian Li Strimer Wireless Cables"
      ],
      performance: {
        gaming: "4K Ultra 120fps",
        productivity: "Excellent",
        cooling: "360mm AIO + Wireless RGB Fans",
        noise: "Silent Operation"
      },
      dimensions: "17\" x 8\" x 16\"",
      weight: "28 lbs",
      warranty: "3 Years"
    },
    {
      id: 11,
      title: "AMD RTX 4090 Lamborghini Setup",
      category: "setups",
      image: "/images/builds/custom-pcs/NextBuild11-1.jpg",
      specs: [
        "RTX 4090 24GB",
        "AMD Ryzen 7 7800X3D",
        "64GB DDR5-6000",
        "4TB NVMe SSD"
      ],
      price: "$6,241",
      description: "Ultimate Lamborghini-themed gaming setup featuring the AMD Ryzen 7 7800X3D and liquid-cooled RTX 4090. This premium configuration includes a complete gaming ecosystem with 45\" curved monitor, SteelSeries peripherals, and exclusive Lamborghini edition furniture for the ultimate gaming experience.",
      features: [
        "MSI SUPRIM LIQUID X RTX 4090 24GB",
        "AMD Ryzen 7 7800X3D 8-Core",
        "64GB DDR5-6000 Trident Z5 Neo",
        "Deepcool MYSTIQUE 360 AIO",
        "4TB Total Storage (2TB P3 Plus + 2TB MP700 PRO)",
        "1300W MSI MEG Ai1300P Platinum PSU",
        "Lian Li O11D EVO RGB Lamborghini Case",
        "LG 45GR95QE-B 45\" 240Hz Curved Monitor",
        "SteelSeries Apex Pro TKL Keyboard",
        "SteelSeries Rival 5 Mouse",
        "SecretLab Lamborghini Special Edition Chair",
        "SecretLab Magnus Pro Desk - Lamborghini Edition",
        "Lian Li Uni Fan SL-Infinity RGB Fans",
        "Windows 11 Home"
      ],
      performance: {
        gaming: "4K Ultra 120fps+",
        productivity: "Exceptional",
        cooling: "Liquid GPU + 360mm AIO",
        noise: "Whisper Quiet"
      },
      dimensions: "45\" Monitor + Full Desk Setup",
      weight: "Complete Setup",
      warranty: "3 Years"
    },
    {
      id: 12,
      title: "AMD RTX 5080 Royal Build",
      category: "custom-pcs",
      image: "/images/builds/custom-pcs/NextBuild12-1.jpg",
      specs: [
        "RTX 5080 16GB",
        "AMD Ryzen 7 9800X3D",
        "64GB DDR5-6000",
        "4TB NVMe SSD"
      ],
      price: "$3,214",
      description: "Premium AMD-based gaming and content creation build featuring the latest AMD Ryzen 7 9800X3D and RTX 5080. This high-end configuration delivers exceptional performance for 4K gaming and professional workloads with premium Lian Li components, wireless LCD fans, and a secondary display.",
      features: [
        "Zotac Solid OC GeForce RTX 5080 16GB",
        "AMD Ryzen 7 9800X3D 8-Core",
        "64GB DDR5-6000 Trident Z5 Royal Neo RGB",
        "TRYX PANORAMA SE ARGB 360mm AIO",
        "4TB Crucial T500 NVMe SSD",
        "1000W Lian Li EDGE Platinum PSU",
        "Lian Li O11 VISION COMPACT Case",
        "Lian Li UNI FAN TL LCD Wireless RGB",
        "8.8\" TURZX Secondary Display",
        "Gigabyte X870E AORUS PRO ICE Motherboard",
        "Premium RGB Lighting",
        "Wireless Fan Control"
      ],
      performance: {
        gaming: "4K Ultra 144fps",
        productivity: "Exceptional",
        cooling: "360mm AIO + LCD RGB Fans",
        noise: "Whisper Quiet"
      },
      dimensions: "17\" x 8\" x 16\"",
      weight: "28 lbs",
      warranty: "3 Years"
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
              ref={(el) => { buttonRefs.current[index] = el }}
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
                {/* Category Badge */}
                <div className="mb-6">
                  <div className="inline-block bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium">
                    {categories.find(cat => cat.id === build.category)?.name || build.category}
                  </div>
                </div>


                {/* Key Components */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
                    <span className="text-xs font-medium truncate">CPU: {build.specs[1]}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0"></div>
                    <span className="text-xs font-medium truncate">GPU: {build.specs[0]}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 flex-shrink-0"></div>
                    <span className="text-xs font-medium truncate">RAM: {build.specs[2]}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2 flex-shrink-0"></div>
                    <span className="text-xs font-medium truncate">Storage: {build.specs[3]}</span>
                  </div>
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
                View More
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
              <AnimatedButton variant="secondary" className="text-lg" href="#contact">
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
              {/* Image Section - Left Side with Navigation */}
              <div className="relative w-1/2 h-full overflow-hidden bg-white dark:bg-gray-800">
                {/* Current Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={selectedBuild.category === 'setups' 
                      ? selectedBuild.id === 4
                        ? `/images/builds/custom-pcs/NextBuild4-${currentImageIndex + 1}.jpg`
                        : selectedBuild.id === 6
                          ? `/images/builds/custom-pcs/NextBuild6-${currentImageIndex + 1}.jpg`
                          : selectedBuild.id === 11
                            ? `/images/builds/custom-pcs/NextBuild11-${currentImageIndex + 1}.jpg`
                            : `/images/builds/custom-pcs/NextBuild2-${currentImageIndex + 1}.jpg`
                      : selectedBuild.id === 3
                        ? `/images/builds/custom-pcs/NextBuild3-${currentImageIndex + 1}.jpg`
                        : selectedBuild.id === 5
                          ? `/images/builds/custom-pcs/NextBuild5-${currentImageIndex + 1}.jpg`
                          : selectedBuild.id === 7
                            ? `/images/builds/custom-pcs/NextBuild7-${currentImageIndex + 1}.jpg`
                            : selectedBuild.id === 8
                              ? `/images/builds/custom-pcs/NextBuild8-${currentImageIndex + 1}.jpg`
                              : selectedBuild.id === 9
                                ? `/images/builds/custom-pcs/NextBuild9-${currentImageIndex + 1}.jpg`
                            : selectedBuild.id === 10
                              ? `/images/builds/custom-pcs/NextBuild10-${currentImageIndex + 1}.jpg`
                              : selectedBuild.id === 12
                                ? `/images/builds/custom-pcs/NextBuild12-${currentImageIndex + 1}.jpg`
                                : `/images/builds/custom-pcs/NextBuild1-${currentImageIndex + 1}.jpg`
                    }
                    alt={`${selectedBuild.title} - Photo ${currentImageIndex + 1}`}
                    fill
                    className="object-contain"
                  />
                  <div className="absolute top-6 left-6 bg-primary-600 text-white px-4 py-2 rounded-2xl text-lg font-semibold shadow-lg">
                    {selectedBuild.price}
                  </div>
                  
                  {/* Image Counter */}
                  <div className="absolute top-6 right-6 bg-black/50 text-white px-3 py-2 rounded-2xl text-sm font-semibold backdrop-blur-sm">
                    {currentImageIndex + 1} / {
                      selectedBuild.id === 1 ? 4 : // NextBuild1 has 4 images
                      selectedBuild.id === 2 ? 6 : // NextBuild2 has 6 images
                      selectedBuild.id === 3 ? 3 : // NextBuild3 has 3 images
                      selectedBuild.id === 4 ? 2 : // NextBuild4 has 2 images
                      selectedBuild.id === 5 ? 9 : // NextBuild5 has 9 images
                      selectedBuild.id === 6 ? 3 : // NextBuild6 has 3 images
                      selectedBuild.id === 7 ? 8 : // NextBuild7 has 8 images
                      selectedBuild.id === 8 ? 2 : // NextBuild8 has 2 images
                      selectedBuild.id === 9 ? 2 : // NextBuild9 has 2 images
                      selectedBuild.id === 10 ? 2 : // NextBuild10 has 2 images
                      selectedBuild.id === 11 ? 11 : // NextBuild11 has 11 images
                      selectedBuild.id === 12 ? 6 : // NextBuild12 has 6 images
                      5 // default fallback
                    }
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={handlePreviousImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-110"
                  aria-label="Previous image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-110"
                  aria-label="Next image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Image Dots Indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                  {Array.from({ 
                    length: selectedBuild.id === 1 ? 4 : // NextBuild1 has 4 images
                    selectedBuild.id === 2 ? 6 : // NextBuild2 has 6 images
                    selectedBuild.id === 3 ? 3 : // NextBuild3 has 3 images
                    selectedBuild.id === 4 ? 2 : // NextBuild4 has 2 images
                    selectedBuild.id === 5 ? 9 : // NextBuild5 has 9 images
                    selectedBuild.id === 6 ? 3 : // NextBuild6 has 3 images
                    selectedBuild.id === 7 ? 8 : // NextBuild7 has 8 images
                    selectedBuild.id === 8 ? 2 : // NextBuild8 has 2 images
                    selectedBuild.id === 9 ? 2 : // NextBuild9 has 2 images
                    selectedBuild.id === 10 ? 2 : // NextBuild10 has 2 images
                    selectedBuild.id === 11 ? 11 : // NextBuild11 has 11 images
                    selectedBuild.id === 12 ? 6 : // NextBuild12 has 6 images
                    5 // default fallback
                  }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentImageIndex
                          ? 'bg-primary-600 scale-125'
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
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

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {selectedBuild.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-300 text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Performance */}
                <div className="mb-8">
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

                {/* Action Button */}
                <div className="flex justify-center">
                  <AnimatedButton variant="primary" className="w-full max-w-md text-lg">
                    Get This Build
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