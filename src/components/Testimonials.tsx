'use client'

import { useState, useEffect } from 'react'

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isUserNavigating, setIsUserNavigating] = useState(false)

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Gaming Enthusiast',
      content: 'Next Build delivered an incredible gaming PC that exceeded all my expectations. The build quality is outstanding and the performance is flawless.',
      rating: 5,
      image: 'https://picsum.photos/100/100?random=20'
    },
    {
      name: 'Michael Chen',
      role: 'Video Editor',
      content: 'As a professional video editor, I needed a powerful workstation. Next Build created the perfect system that handles 4K editing without breaking a sweat.',
      rating: 5,
      image: 'https://picsum.photos/100/100?random=21'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Streamer',
      content: 'The custom RGB build they created for my streaming setup is absolutely stunning. Great performance and amazing aesthetics!',
      rating: 5,
      image: 'https://picsum.photos/100/100?random=22'
    },
    {
      name: 'David Thompson',
      role: 'Software Developer',
      content: 'Professional service from start to finish. They understood my requirements and delivered a workstation that perfectly fits my development needs.',
      rating: 5,
      image: 'https://picsum.photos/100/100?random=23'
    },
    {
      name: 'Alex Martinez',
      role: 'Content Creator',
      content: 'My new PC build from Next Build handles everything I throw at it - from 4K video editing to live streaming. The attention to detail in cable management is incredible.',
      rating: 5,
      image: 'https://picsum.photos/100/100?random=24'
    },
    {
      name: 'Jessica Park',
      role: 'Graphic Designer',
      content: 'I needed a high-performance PC for my design work, and Next Build delivered exactly what I needed. The system runs Adobe Creative Suite flawlessly.',
      rating: 5,
      image: 'https://picsum.photos/100/100?random=25'
    },
    {
      name: 'Ryan O\'Connor',
      role: 'Gaming Setup',
      content: 'The complete gaming setup they created for me is perfect. From the PC to the monitor setup and cable management - everything is professionally done.',
      rating: 5,
      image: 'https://picsum.photos/100/100?random=26'
    },
    {
      name: 'Lisa Wang',
      role: 'Home Office Setup',
      content: 'Next Build transformed my home office with a complete workstation setup. The dual monitor configuration and ergonomic setup has boosted my productivity significantly.',
      rating: 5,
      image: 'https://picsum.photos/100/100?random=27'
    },
    {
      name: 'Marcus Johnson',
      role: 'Streaming Setup',
      content: 'My streaming setup is absolutely perfect thanks to Next Build. The lighting, camera positioning, and PC performance all work together seamlessly for my broadcasts.',
      rating: 5,
      image: 'https://picsum.photos/100/100?random=28'
    },
    {
      name: 'Tommy Rodriguez',
      role: 'Sim Racing Enthusiast',
      content: 'The sim racing rig they built for me is incredible! The triple monitor setup and powerful PC deliver the most immersive racing experience I\'ve ever had.',
      rating: 5,
      image: 'https://picsum.photos/100/100?random=29'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isUserNavigating) {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
      }
    }, 3000)
    return () => clearInterval(interval)
  }, [isUserNavigating])

  const handleTestimonialChange = (newIndex: number) => {
    setIsUserNavigating(true)
    setCurrentTestimonial(newIndex)
    
    // Reset user navigation flag after 3 seconds
    setTimeout(() => {
      setIsUserNavigating(false)
    }, 3000)
  }

  return (
    <section id="testimonials" className="section-padding bg-gray-100 dark:bg-[#0a0a0a] scroll-mt-24">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Left Arrow */}
          <button
            onClick={() => handleTestimonialChange(
              currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1
            )}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gray-200/50 dark:bg-gray-700/50 hover:bg-gray-300/50 dark:hover:bg-gray-600/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => handleTestimonialChange(
              (currentTestimonial + 1) % testimonials.length
            )}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gray-200/50 dark:bg-gray-700/50 hover:bg-gray-300/50 dark:hover:bg-gray-600/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="relative overflow-hidden rounded-3xl p-12 md:p-16">
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

            {/* Dark mode - Liquid glass background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/60 via-gray-700/70 to-gray-800/60 backdrop-blur-lg hidden dark:block"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-500/40 via-transparent to-accent-500/40 hidden dark:block"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-gray-600/50 via-transparent to-gray-600/50 hidden dark:block"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-accent-500/20 via-transparent to-accent-500/20 hidden dark:block"></div>
            {/* Dark mode - Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-30 hidden dark:block">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gray-600/50 rounded-full -translate-x-16 -translate-y-16 blur-xl"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-accent-500/50 rounded-full translate-x-12 translate-y-12 blur-xl"></div>
              <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gray-500/40 rounded-full blur-lg"></div>
            </div>

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-8">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <svg key={i} className="w-8 h-8 text-yellow-400 mx-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-2xl md:text-3xl text-center mb-10 italic leading-relaxed text-gray-900 dark:text-white">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Author */}
              <div className="text-center">
                <div className="font-semibold text-2xl mb-2 text-gray-900 dark:text-white">{testimonials[currentTestimonial].name}</div>
                <div className="text-gray-600 dark:text-gray-300 text-lg">{testimonials[currentTestimonial].role}</div>
              </div>
            </div>

          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-12 text-xl">Trusted by customers worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="text-3xl font-bold text-black dark:text-white">Gaming</div>
            <div className="text-3xl font-bold text-black dark:text-white">Content Creation</div>
            <div className="text-3xl font-bold text-black dark:text-white">Professional</div>
            <div className="text-3xl font-bold text-black dark:text-white">Enterprise</div>
          </div>
        </div>
      </div>
    </section>
  )
}