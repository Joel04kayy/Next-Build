'use client'

import { useState, useEffect } from 'react'

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

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
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-gray-700 to-gray-900 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full translate-x-16 translate-y-16"></div>
              <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-white rounded-full"></div>
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
              <blockquote className="text-2xl md:text-3xl text-center mb-10 italic leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Author */}
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center backdrop-blur-sm">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div className="font-semibold text-2xl">{testimonials[currentTestimonial].name}</div>
                <div className="text-gray-200 text-lg">{testimonials[currentTestimonial].role}</div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-10 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-white scale-125'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 mb-12 text-xl">Trusted by customers worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="text-3xl font-bold text-gray-400">Gaming</div>
            <div className="text-3xl font-bold text-gray-400">Content Creation</div>
            <div className="text-3xl font-bold text-gray-400">Professional</div>
            <div className="text-3xl font-bold text-gray-400">Enterprise</div>
          </div>
        </div>
      </div>
    </section>
  )
}