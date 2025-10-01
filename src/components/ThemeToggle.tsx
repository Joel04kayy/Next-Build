'use client'

import { useTheme } from '@/contexts/ThemeContext'
import { useState, useEffect } from 'react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, toggleTheme } = useTheme()
  
  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render until mounted to prevent hydration issues
  if (!mounted) {
    return (
      <div className="p-2 rounded-lg bg-transparent w-12 h-12">
        <div className="w-8 h-8"></div>
      </div>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-transparent transition-all duration-300 w-12 h-12 group"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative w-8 h-8">
        {/* Sun icon for light mode */}
        <svg
          className={`w-8 h-8 absolute transition-all duration-300 ${
            theme === 'light' 
              ? 'text-gray-900 dark:text-white opacity-100 rotate-0 group-hover:opacity-0 group-hover:-rotate-90' 
              : 'text-white opacity-0 rotate-90 group-hover:opacity-100 group-hover:rotate-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        
        {/* Moon icon for dark mode */}
        <svg
          className={`w-8 h-8 text-gray-900 dark:text-white absolute transition-all duration-300 ${
            theme === 'dark' 
              ? 'opacity-100 rotate-0 group-hover:opacity-0 group-hover:rotate-90' 
              : 'opacity-0 -rotate-90 group-hover:opacity-100 group-hover:rotate-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </div>
    </button>
  )
}
