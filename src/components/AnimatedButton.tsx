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
  const baseClasses = "cursor-pointer relative inline-flex items-center justify-center px-6 py-3 text-lg font-bold transition-all duration-300 ease-[cubic-bezier(0.23,1,0.320,1)] overflow-hidden group rounded-[34px]"
  
      const variantClasses = {
        primary: "bg-transparent text-gray-900 dark:text-white border-2 border-gray-900 dark:border-white hover:text-gray-100 dark:hover:text-gray-900 hover:scale-110 hover:shadow-[0_0px_20px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_0px_20px_rgba(255,255,255,0.3)] active:scale-100",
        secondary: "bg-transparent text-gray-900 dark:text-white border-2 border-gray-900 dark:border-white hover:text-gray-100 dark:hover:text-gray-900 hover:scale-110 hover:shadow-[0_0px_20px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_0px_20px_rgba(255,255,255,0.3)] active:scale-100"
      }

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : ""

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`}
    >
      {/* Expanding circle background - matches uiverse.io design */}
      <div className="absolute inset-0 m-auto w-[50px] h-[50px] rounded-[34px] scale-0 group-hover:scale-[3] bg-gray-900 dark:bg-white transition-all duration-600 ease-[cubic-bezier(0.23,1,0.320,1)] -z-10"></div>
      
      {/* Button content */}
      <span className="relative z-10">
        {children}
      </span>
    </button>
  )
}
