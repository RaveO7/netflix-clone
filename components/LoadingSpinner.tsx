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
        <div className={`${sizeClasses[size]} border-4 border-netflix-red border-t-transparent rounded-full animate-spin mx-auto mb-4`}></div>
        {text && <p className={`text-white ${textSizes[size]}`}>{text}</p>}
        {children}
      </div>
    </div>
  )
} 