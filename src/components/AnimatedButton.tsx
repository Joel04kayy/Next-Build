'use client'

import { ReactNode } from 'react'

interface AnimatedButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

export default function AnimatedButton({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary',
  disabled = false 
}: AnimatedButtonProps) {
  const baseClasses = "relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium transition-all duration-300 ease-in-out overflow-hidden group"
  
      const variantClasses = {
        primary: "bg-primary-900 dark:bg-black text-primary-50 dark:text-primary-50 border-2 border-primary-900 dark:border-primary-600 hover:text-primary-50 dark:hover:text-primary-50",
        secondary: "bg-transparent text-primary-900 dark:text-primary-200 border-2 border-primary-900 dark:border-primary-600 hover:text-primary-50 dark:hover:text-primary-50"
      }

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : ""

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`}
    >
      {/* Animated background */}
          <div className="absolute inset-0 w-0 bg-accent-500 dark:bg-accent-400 group-hover:w-full transition-all duration-300 ease-in-out"></div>
      
      {/* Button content */}
      <span className="relative z-10">
        {children}
      </span>
    </button>
  )
}
