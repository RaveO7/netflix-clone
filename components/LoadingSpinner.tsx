'use client'

import { ReactNode } from 'react'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  text?: string
  className?: string
  children?: ReactNode
}

export default function LoadingSpinner({ 
  size = 'md', 
  text = 'Loading...', 
  className = '',
  children 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  }

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  }

  return (
    <div className={`min-h-screen bg-netflix-black flex items-center justify-center ${className}`}>
      <div className="text-center">
        <div className="relative mx-auto mb-4 flex items-center justify-center">
          {/* Outer ring */}
          <div className={`${sizeClasses[size]} border-4 border-netflix-red border-t-transparent rounded-full animate-spin`}></div>
          {/* Inner ring Netflix-like */}
          <div className={`absolute ${sizeClasses[size]} border-2 border-netflix-red/60 border-b-transparent rounded-full animate-spin-slow`}></div>
          {/* Pulsating dot */}
          <div className="absolute w-3 h-3 bg-netflix-red rounded-full animate-pulse" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -180%)' }}></div>
        </div>
        {text && <p className={`text-white ${textSizes[size]} shimmer-text`}>{text}</p>}
        {children}
      </div>
    </div>
  )
} 