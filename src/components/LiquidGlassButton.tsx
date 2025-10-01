'use client'

import { ReactNode } from 'react'

interface LiquidGlassButtonProps {
  children: ReactNode
  onClick?: () => void
  href?: string
  className?: string
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

export default function LiquidGlassButton({ 
  children, 
  onClick, 
  href,
  className = '', 
  variant = 'primary',
  disabled = false 
}: LiquidGlassButtonProps) {
  const baseClasses = "relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold transition-all duration-500 ease-in-out overflow-hidden group rounded-2xl"
  
  const variantClasses = {
    primary: "bg-transparent text-white border-2 border-white/20 hover:text-white hover:scale-105 hover:shadow-[0_0px_20px_rgba(255,255,255,0.3)] active:scale-100",
    secondary: "bg-transparent text-white border-2 border-white/20 hover:text-white hover:scale-105 hover:shadow-[0_0px_20px_rgba(255,255,255,0.3)] active:scale-100"
  }

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : ""

  const handleClick = (e: React.MouseEvent) => {
    if (href) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    if (onClick) {
      onClick()
    }
  }

  const Component = href ? 'a' : 'button'
  const componentProps = href 
    ? { href, onClick: handleClick }
    : { onClick: handleClick, disabled }

  return (
    <Component
      {...componentProps}
      className={`${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`}
    >
      {/* Liquid glass background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-xl"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-accent-500/10 via-transparent to-accent-500/5"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-white/10 via-transparent to-white/10"></div>
      
      {/* Animated shimmer effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
      </div>
      
      
      {/* Button content */}
      <span className="relative z-10">
        {children}
      </span>
    </Component>
  )
}
