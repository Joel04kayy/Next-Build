'use client'

import { useState } from 'react'
import Image from 'next/image'
import AnimatedButton from './AnimatedButton'

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')

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

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white shadow-xl transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-lg'
              }`}
            >
              {category.name}
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