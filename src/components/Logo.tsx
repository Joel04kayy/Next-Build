import Image from 'next/image'

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-24 h-12',
    md: 'w-32 h-16', 
    lg: 'w-40 h-20',
    xl: 'w-48 h-24'
  }

  return (
    <div className={`${className}`}>
      <Image
        src="/images/Next build logo.png"
        alt="Next Build Logo"
        width={size === 'sm' ? 96 : size === 'md' ? 128 : size === 'lg' ? 160 : 192}
        height={size === 'sm' ? 48 : size === 'md' ? 64 : size === 'lg' ? 80 : 96}
        className={`${sizeClasses[size]} object-contain dark:brightness-0 dark:invert`}
        priority
      />
    </div>
  )
}
