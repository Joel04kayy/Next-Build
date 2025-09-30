'use client'

import { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'
import AnimatedButton from './AnimatedButton'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/20 dark:border-primary-600 rounded-b-3xl overflow-hidden">
      {/* Liquid glass background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-accent-500/5 via-transparent to-accent-500/5"></div>
      
      {/* Enhanced glass refraction effect at bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-500/40 via-accent-500/60 to-accent-500/40 blur-sm"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
      
      {/* Subtle light refraction lines */}
      <div className="absolute bottom-0 left-1/4 w-px h-2 bg-gradient-to-t from-white/40 to-transparent"></div>
      <div className="absolute bottom-0 left-1/2 w-px h-2 bg-gradient-to-t from-white/40 to-transparent"></div>
      <div className="absolute bottom-0 right-1/4 w-px h-2 bg-gradient-to-t from-white/40 to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10">
      <nav className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 w-full">
          {/* Logo - Left Side */}
          <div className="flex-shrink-0 -ml-4">
            <Link href="#home">
              <Logo size="xl" />
            </Link>
          </div>

          {/* Desktop Navigation - Right Side */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-200 font-bold text-xl transition-colors duration-500"
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
            <AnimatedButton variant="primary">
              Get Quote
            </AnimatedButton>
          </div>

          {/* Mobile menu button and theme toggle - Right Side */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className="p-2 hover:bg-primary-100 dark:hover:bg-primary-700 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6 text-gray-900 dark:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-primary-200 dark:border-primary-600 bg-primary-50 dark:bg-black">
            <div className="flex flex-col space-y-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-200 font-bold text-xl transition-colors duration-500 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <AnimatedButton variant="primary" className="w-full mt-4">
                Get Quote
              </AnimatedButton>
            </div>
          </div>
        )}
      </nav>
      </div>
    </header>
  )
}